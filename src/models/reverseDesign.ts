import { MolecularGraph, OptimizationTarget, MaterialCandidate, PredictionResult } from '../types/molecular';
import { PerformancePredictionModel } from './performancePrediction';
import { MolecularGraphBuilder } from '../utils/molecularGraphBuilder';
import * as math from 'mathjs';

export interface ReverseDesignConfig {
  maxIterations: number;
  learningRate: number;
  convergenceThreshold: number;
  populationSize: number;
  mutationRate: number;
  crossoverRate: number;
}

export interface StructuralConstraints {
  allowedElements: {
    A: string[];
    B: string[];
    X: string[];
  };
  compositionRanges: {
    [element: string]: { min: number; max: number };
  };
  structuralStability: {
    toleranceFactorRange: [number, number];
    octahedralFactorRange: [number, number];
  };
  synthesisConstraints: {
    maxSynthesisTemperature: number;
    allowedAtmospheres: string[];
    precursorAvailability: { [element: string]: number };
  };
}

export class ReverseDesignOptimizer {
  private predictionModel: PerformancePredictionModel;
  private graphBuilder: MolecularGraphBuilder;
  private config: ReverseDesignConfig;

  constructor(config: ReverseDesignConfig = {
    maxIterations: 1000,
    learningRate: 0.01,
    convergenceThreshold: 1e-6,
    populationSize: 100,
    mutationRate: 0.1,
    crossoverRate: 0.7
  }) {
    this.predictionModel = new PerformancePredictionModel();
    this.graphBuilder = new MolecularGraphBuilder();
    this.config = config;
  }

  async optimizeForTargets(
    targets: OptimizationTarget[],
    constraints: StructuralConstraints,
    seedCompositions?: string[]
  ): Promise<MaterialCandidate[]> {
    let population = this.initializePopulation(constraints, seedCompositions);
    let bestCandidates: MaterialCandidate[] = [];
    let convergenceCounter = 0;
    let lastBestScore = -Infinity;

    for (let iteration = 0; iteration < this.config.maxIterations; iteration++) {
      const evaluatedPopulation = await this.evaluatePopulation(population, targets, constraints);
      
      evaluatedPopulation.sort((a, b) => b.score - a.score);
      bestCandidates = evaluatedPopulation.slice(0, 10);

      const currentBestScore = bestCandidates[0].score;
      if (Math.abs(currentBestScore - lastBestScore) < this.config.convergenceThreshold) {
        convergenceCounter++;
        if (convergenceCounter >= 20) {
          console.log(`Converged after ${iteration} iterations`);
          break;
        }
      } else {
        convergenceCounter = 0;
        lastBestScore = currentBestScore;
      }

      if (iteration % 100 === 0) {
        console.log(`Iteration ${iteration}: Best score = ${currentBestScore}`);
      }

      const parents = this.selectParents(evaluatedPopulation);
      const offspring = this.generateOffspring(parents, constraints);
      const mutatedOffspring = this.mutatePopulation(offspring, constraints);
      
      population = [...bestCandidates.slice(0, 20).map(c => c.composition), ...mutatedOffspring];
    }

    return this.addSynthesisRoutes(bestCandidates);
  }

  private initializePopulation(constraints: StructuralConstraints, seeds?: string[]): string[] {
    const population: string[] = [];
    
    if (seeds) {
      population.push(...seeds.slice(0, Math.min(seeds.length, this.config.populationSize / 2)));
    }

    while (population.length < this.config.populationSize) {
      const composition = this.generateRandomComposition(constraints);
      if (this.validateComposition(composition, constraints)) {
        population.push(composition);
      }
    }

    return population;
  }

  private generateRandomComposition(constraints: StructuralConstraints): string {
    const aElement = this.selectRandomElement(constraints.allowedElements.A);
    const bElement = this.selectRandomElement(constraints.allowedElements.B);
    const xElements = this.selectMixedHalides(constraints.allowedElements.X);

    let composition = aElement + bElement;
    
    if (xElements.length === 1) {
      composition += xElements[0] + '3';
    } else {
      const fractions = this.generateHalideFractions(xElements.length);
      xElements.forEach((element, i) => {
        if (fractions[i] > 0) {
          composition += element;
          if (fractions[i] !== 1) {
            composition += fractions[i].toFixed(2);
          }
        }
      });
      composition += '3';
    }

    return composition;
  }

  private selectRandomElement(elements: string[]): string {
    return elements[Math.floor(Math.random() * elements.length)];
  }

  private selectMixedHalides(halides: string[]): string[] {
    const numHalides = Math.random() < 0.7 ? 1 : Math.min(2, Math.floor(Math.random() * halides.length) + 1);
    const selected = [];
    const shuffled = [...halides].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < numHalides; i++) {
      selected.push(shuffled[i]);
    }
    
    return selected;
  }

  private generateHalideFractions(count: number): number[] {
    if (count === 1) return [1];
    
    const fractions = new Array(count).fill(0).map(() => Math.random());
    const sum = fractions.reduce((a, b) => a + b, 0);
    
    return fractions.map(f => Math.round((f / sum) * 100) / 100);
  }

  private validateComposition(composition: string, constraints: StructuralConstraints): boolean {
    try {
      // Parse composition string like "CsPbI3" into components
      const parsed = this.parseComposition(composition);
      if (!parsed) return false;
      
      const graph = this.graphBuilder.buildFromComposition(parsed.A, parsed.B, parsed.X);
      
      const toleranceFactor = this.calculateToleranceFactor(graph);
      const octahedralFactor = this.calculateOctahedralFactor(graph);
      
      return (
        toleranceFactor >= constraints.structuralStability.toleranceFactorRange[0] &&
        toleranceFactor <= constraints.structuralStability.toleranceFactorRange[1] &&
        octahedralFactor >= constraints.structuralStability.octahedralFactorRange[0] &&
        octahedralFactor <= constraints.structuralStability.octahedralFactorRange[1]
      );
    } catch (error) {
      return false;
    }
  }

  private calculateToleranceFactor(graph: MolecularGraph): number {
    const aNode = graph.nodes.find(n => n.site === 'A');
    const bNode = graph.nodes.find(n => n.site === 'B');
    const xNode = graph.nodes.find(n => n.site === 'X');
    
    if (!aNode || !bNode || !xNode) return 0;
    
    const rA = aNode.properties.ionicRadius;
    const rB = bNode.properties.ionicRadius;
    const rX = xNode.properties.ionicRadius;
    
    return (rA + rX) / (Math.sqrt(2) * (rB + rX));
  }

  private calculateOctahedralFactor(graph: MolecularGraph): number {
    const bNode = graph.nodes.find(n => n.site === 'B');
    const xNode = graph.nodes.find(n => n.site === 'X');
    
    if (!bNode || !xNode) return 0;
    
    return bNode.properties.ionicRadius / xNode.properties.ionicRadius;
  }

  private extractGNNFeatures(graph: MolecularGraph): number[] {
    // Simple feature extraction - replace with actual GNN forward pass
    const features: number[] = [];
    
    // Add basic graph statistics
    features.push(graph.nodes.length); // Number of nodes
    features.push(graph.edges.length); // Number of edges
    features.push(graph.unitCellVolume / 1000); // Normalized volume
    features.push(graph.density / 10); // Normalized density
    
    // Add average node properties
    const avgAtomicNumber = graph.nodes.reduce((sum, node) => sum + node.properties.atomicNumber, 0) / graph.nodes.length;
    const avgElectronegativity = graph.nodes.reduce((sum, node) => sum + node.properties.electronegativity, 0) / graph.nodes.length;
    const avgIonicRadius = graph.nodes.reduce((sum, node) => sum + node.properties.ionicRadius, 0) / graph.nodes.length;
    
    features.push(avgAtomicNumber / 100);
    features.push(avgElectronegativity / 4);
    features.push(avgIonicRadius / 3);
    
    // Pad to fixed size (64 features)
    while (features.length < 64) {
      features.push(Math.random() * 0.1 - 0.05); // Small random values
    }
    
    return features.slice(0, 64);
  }

  private async evaluatePopulation(
    compositions: string[],
    targets: OptimizationTarget[],
    constraints: StructuralConstraints
  ): Promise<MaterialCandidate[]> {
    const candidates: MaterialCandidate[] = [];
    
    const evaluationPromises = compositions.map(async (composition) => {
      try {
        const parsed = this.parseComposition(composition);
        if (!parsed) {
          throw new Error(`Cannot parse composition: ${composition}`);
        }
        
        const graph = this.graphBuilder.buildFromComposition(parsed.A, parsed.B, parsed.X);
        
        // Convert graph to features for prediction
        const gnnFeatures = this.extractGNNFeatures(graph);
        const conditions = { temperature: 298, pressure: 1.0, humidity: 45 };
        
        const prediction = await this.predictionModel.predict(gnnFeatures, conditions);
        
        // Convert PredictionResults to PredictionResult format for compatibility
        const mockPredictionResult: PredictionResult = {
          material: {
            composition,
            structure: 'perovskite',
            dopingInfo: { isDoped: false, dopants: [] }
          },
          properties: {
            optical: {
              quantumEfficiency: prediction.plqy,
              emissionWavelength: prediction.emissionWavelength,
              emissionIntensity: prediction.efficiency / 100,
              absorptionCoefficient: 10000,
              photoluminescenceLifetime: 100,
              externalQuantumEfficiency: prediction.efficiency,
              colorCoordinates: { x: 0.3, y: 0.3 },
              spectralWidth: 30,
              stokesShift: 20,
              photostability: prediction.stability / 100,
              temperatureQuenching: 0.1,
              nonlinearOpticalCoefficient: 1e-12,
              refractiveIndex: 2.0,
              extinctionCoefficient: 0.1,
              oscillatorStrength: 1.0
            },
            electronic: {
              bandGap: prediction.bandgap,
              carrierMobility: { electron: 10, hole: 5 },
              conductivity: 1e-6,
              excitonBindingEnergy: 50,
              effectiveMass: { electron: 0.2, hole: 0.3 },
              dielectricConstant: 20,
              workFunction: 4.5,
              ionizationPotential: 6.0,
              electronAffinity: 3.5,
              bandEdgePositions: { valence: -5.5, conduction: -4.0 }
            },
            stability: {
              thermalStability: prediction.stability / 100,
              moistureStability: prediction.stability / 100,
              lightStability: prediction.stability / 100,
              airStability: prediction.stability / 100,
              phaseStability: prediction.stability / 100,
              decompositionTemperature: 400,
              degradationRate: 0.01,
              stabilityScore: prediction.stability / 10
            },
            structural: {
              latticeParameters: { a: 6.0, b: 6.0, c: 6.0 },
              formationEnergy: -0.3,
              elasticModulus: 50,
              bulkModulus: 25,
              density: 4.0,
              thermalExpansion: 20e-6,
              heatCapacity: 400,
              toleranceFactor: 0.95
            }
          },
          confidence: prediction.confidence,
          uncertainty: {
            overall: 0.1,
            optical: 0.05,
            electronic: 0.08,
            stability: 0.12
          },
          conditions: {
            temperature: conditions.temperature,
            pressure: conditions.pressure,
            excitationWavelength: 400,
            environmentalConditions: {
              humidity: conditions.humidity,
              atmosphere: 'air'
            }
          }
        };
        
        const score = this.calculateFitnessScore(mockPredictionResult, targets);
        
        return {
          composition,
          predictedProperties: mockPredictionResult.properties,
          score
        } as MaterialCandidate;
      } catch (error) {
        return {
          composition,
          predictedProperties: {} as any,
          score: -Infinity
        } as MaterialCandidate;
      }
    });
    
    const results = await Promise.all(evaluationPromises);
    return results.filter(candidate => candidate.score > -Infinity);
  }

  private calculateFitnessScore(prediction: PredictionResult, targets: OptimizationTarget[]): number {
    let totalScore = 0;
    let totalWeight = 0;
    
    targets.forEach(target => {
      const actualValue = this.extractProperty(prediction.properties, target.property);
      let score = 0;
      
      switch (target.constraint) {
        case 'maximize':
          score = Math.min(1, actualValue / target.targetValue);
          break;
        case 'minimize':
          score = Math.min(1, target.targetValue / Math.max(actualValue, 1e-6));
          break;
        case 'target':
          const deviation = Math.abs(actualValue - target.targetValue) / target.targetValue;
          score = Math.exp(-deviation * 5);
          break;
      }
      
      totalScore += score * target.weight;
      totalWeight += target.weight;
    });
    
    const baseScore = totalWeight > 0 ? totalScore / totalWeight : 0;
    
    const stabilityPenalty = (1 - prediction.properties.stability.stabilityScore / 10) * 0.2;
    const confidencePenalty = (1 - prediction.confidence) * 0.1;
    
    return Math.max(0, baseScore - stabilityPenalty - confidencePenalty);
  }

  private extractProperty(properties: any, propertyPath: string): number {
    const parts = propertyPath.split('.');
    let value = properties;
    
    for (const part of parts) {
      if (value && typeof value === 'object' && part in value) {
        value = value[part];
      } else {
        return 0;
      }
    }
    
    return typeof value === 'number' ? value : 0;
  }

  private selectParents(population: MaterialCandidate[]): MaterialCandidate[] {
    const parents: MaterialCandidate[] = [];
    const totalFitness = population.reduce((sum, candidate) => sum + Math.max(0, candidate.score), 0);
    
    if (totalFitness === 0) {
      return population.slice(0, this.config.populationSize / 2);
    }
    
    for (let i = 0; i < this.config.populationSize / 2; i++) {
      const randomValue = Math.random() * totalFitness;
      let cumulativeFitness = 0;
      
      for (const candidate of population) {
        cumulativeFitness += Math.max(0, candidate.score);
        if (cumulativeFitness >= randomValue) {
          parents.push(candidate);
          break;
        }
      }
    }
    
    return parents;
  }

  private generateOffspring(parents: MaterialCandidate[], constraints: StructuralConstraints): string[] {
    const offspring: string[] = [];
    
    for (let i = 0; i < parents.length - 1; i += 2) {
      if (Math.random() < this.config.crossoverRate) {
        const [child1, child2] = this.crossover(parents[i].composition, parents[i + 1].composition, constraints);
        offspring.push(child1, child2);
      } else {
        offspring.push(parents[i].composition, parents[i + 1].composition);
      }
    }
    
    return offspring;
  }

  private crossover(parent1: string, parent2: string, constraints: StructuralConstraints): [string, string] {
    const elements1 = this.parseComposition(parent1);
    const elements2 = this.parseComposition(parent2);
    
    const child1Elements = { ...elements1 };
    const child2Elements = { ...elements2 };
    
    if (Math.random() < 0.5) {
      [child1Elements.A, child2Elements.A] = [child2Elements.A, child1Elements.A];
    }
    
    if (Math.random() < 0.5) {
      [child1Elements.B, child2Elements.B] = [child2Elements.B, child1Elements.B];
    }
    
    const child1 = this.rebuildComposition(child1Elements);
    const child2 = this.rebuildComposition(child2Elements);
    
    return [child1, child2];
  }

  private parseComposition(composition: string): any {
    const match = composition.match(/([A-Z][a-z]?)([A-Z][a-z]?)([A-Z][a-z]?(?:\d*\.?\d*)?(?:[A-Z][a-z]?\d*\.?\d*)?)\d*/);
    
    if (!match) {
      throw new Error(`Invalid composition: ${composition}`);
    }
    
    return {
      A: match[1],
      B: match[2],
      X: match[3]
    };
  }

  private rebuildComposition(elements: any): string {
    return elements.A + elements.B + elements.X + '3';
  }

  private mutatePopulation(offspring: string[], constraints: StructuralConstraints): string[] {
    return offspring.map(composition => {
      if (Math.random() < this.config.mutationRate) {
        return this.mutateComposition(composition, constraints);
      }
      return composition;
    });
  }

  private mutateComposition(composition: string, constraints: StructuralConstraints): string {
    const elements = this.parseComposition(composition);
    
    if (Math.random() < 0.33) {
      elements.A = this.selectRandomElement(constraints.allowedElements.A);
    }
    
    if (Math.random() < 0.33) {
      elements.B = this.selectRandomElement(constraints.allowedElements.B);
    }
    
    if (Math.random() < 0.33) {
      const newHalides = this.selectMixedHalides(constraints.allowedElements.X);
      if (newHalides.length === 1) {
        elements.X = newHalides[0];
      } else {
        const fractions = this.generateHalideFractions(newHalides.length);
        let xString = '';
        newHalides.forEach((element, i) => {
          if (fractions[i] > 0) {
            xString += element;
            if (fractions[i] !== 1) {
              xString += fractions[i].toFixed(2);
            }
          }
        });
        elements.X = xString;
      }
    }
    
    return this.rebuildComposition(elements);
  }

  private addSynthesisRoutes(candidates: MaterialCandidate[]): MaterialCandidate[] {
    return candidates.map(candidate => ({
      ...candidate,
      synthesisRoute: this.generateSynthesisRoute(candidate.composition)
    }));
  }

  private generateSynthesisRoute(composition: string): any {
    const elements = this.parseComposition(composition);
    
    const precursors = [
      `${elements.A}Cl`,
      `${elements.B}I2`,
      'HI (hydroiodic acid)'
    ];
    
    const baseTemp = 150;
    const complexity = this.calculateSynthesisComplexity(composition);
    
    return {
      precursors,
      conditions: {
        temperature: baseTemp + complexity * 50,
        time: 2 + complexity,
        atmosphere: 'nitrogen'
      },
      difficulty: complexity < 2 ? 'easy' : complexity < 4 ? 'medium' : 'hard'
    };
  }

  private calculateSynthesisComplexity(composition: string): number {
    const halideMatches = composition.match(/[IBrCl]/g);
    const hasMultipleHalides = halideMatches && halideMatches.length > 1;
    const hasFractionalStoichiometry = composition.includes('.');
    
    let complexity = 1;
    if (hasMultipleHalides) complexity += 2;
    if (hasFractionalStoichiometry) complexity += 1;
    
    return complexity;
  }
}