import * as math from 'mathjs';
import { MaterialProperties, PredictionResult } from '../types/molecular';

// Physics-based loss function interfaces
export interface PhysicsConstraintConfig {
  bandGapWeight: number;
  oscillatorStrengthWeight: number;
  excitonBindingWeight: number;
  stabilityWeight: number;
  toleranceFactorWeight: number;
}

// Band structure constraint loss
export class BandStructureConstraint {
  private targetBandGap: number;
  private tolerance: number;

  constructor(targetBandGap: number = 1.5, tolerance: number = 0.2) {
    this.targetBandGap = targetBandGap;
    this.tolerance = tolerance;
  }

  /**
   * Calculate band gap loss based on DFT reference values
   */
  calculateLoss(predictedBandGap: number, referenceBandGap?: number): number {
    const target = referenceBandGap || this.targetBandGap;
    const error = Math.abs(predictedBandGap - target);
    
    // Smooth L1 loss (Huber loss)
    if (error <= this.tolerance) {
      return 0.5 * error * error / this.tolerance;
    } else {
      return error - 0.5 * this.tolerance;
    }
  }

  /**
   * Calculate gradient for backpropagation
   */
  calculateGradient(predictedBandGap: number, referenceBandGap?: number): number {
    const target = referenceBandGap || this.targetBandGap;
    const error = predictedBandGap - target;
    
    if (Math.abs(error) <= this.tolerance) {
      return error / this.tolerance;
    } else {
      return Math.sign(error);
    }
  }

  /**
   * Validate band gap within physical bounds
   */
  validateBandGap(bandGap: number): boolean {
    return bandGap >= 0.5 && bandGap <= 4.0; // Typical range for perovskites
  }
}

// Oscillator strength constraint for optical properties
export class OscillatorStrengthConstraint {
  private experimentalSpectrum: { wavelength: number; intensity: number }[];

  constructor(experimentalSpectrum?: { wavelength: number; intensity: number }[]) {
    this.experimentalSpectrum = experimentalSpectrum || this.generateDefaultSpectrum();
  }

  private generateDefaultSpectrum(): { wavelength: number; intensity: number }[] {
    // Generate typical perovskite absorption spectrum
    const spectrum = [];
    for (let wavelength = 300; wavelength <= 800; wavelength += 5) {
      let intensity = 0;
      
      // Band edge absorption around 500-700nm for typical perovskites
      if (wavelength >= 500 && wavelength <= 700) {
        const center = 600;
        const width = 100;
        intensity = Math.exp(-Math.pow(wavelength - center, 2) / (2 * width * width));
      }
      
      // Higher energy absorption
      if (wavelength < 500) {
        intensity = Math.max(intensity, 0.8 * Math.exp(-(wavelength - 400) / 50));
      }
      
      spectrum.push({ wavelength, intensity });
    }
    return spectrum;
  }

  /**
   * Calculate cross-entropy loss between predicted and experimental spectra
   */
  calculateLoss(predictedSpectrum: { wavelength: number; intensity: number }[]): number {
    let totalLoss = 0;
    let count = 0;

    for (const expPoint of this.experimentalSpectrum) {
      const predPoint = this.findClosestWavelength(predictedSpectrum, expPoint.wavelength);
      if (predPoint) {
        // Cross-entropy loss with smoothing
        const epsilon = 1e-8;
        const predIntensity = Math.max(epsilon, Math.min(1 - epsilon, predPoint.intensity));
        const expIntensity = Math.max(epsilon, Math.min(1 - epsilon, expPoint.intensity));
        
        totalLoss += -expIntensity * Math.log(predIntensity) - (1 - expIntensity) * Math.log(1 - predIntensity);
        count++;
      }
    }

    return count > 0 ? totalLoss / count : 0;
  }

  private findClosestWavelength(
    spectrum: { wavelength: number; intensity: number }[],
    targetWavelength: number
  ): { wavelength: number; intensity: number } | null {
    let closest = null;
    let minDiff = Infinity;

    for (const point of spectrum) {
      const diff = Math.abs(point.wavelength - targetWavelength);
      if (diff < minDiff) {
        minDiff = diff;
        closest = point;
      }
    }

    return minDiff <= 10 ? closest : null; // Within 10nm tolerance
  }

  /**
   * Validate oscillator strength within physical bounds
   */
  validateOscillatorStrength(strength: number): boolean {
    return strength >= 0 && strength <= 10; // Typical range
  }
}

// Exciton binding energy constraint
export class ExcitonBindingEnergyConstraint {
  private effectiveMass: { electron: number; hole: number };
  private dielectricConstant: number;

  constructor(
    effectiveMass = { electron: 0.1, hole: 0.1 },
    dielectricConstant = 25
  ) {
    this.effectiveMass = effectiveMass;
    this.dielectricConstant = dielectricConstant;
  }

  /**
   * Calculate theoretical exciton binding energy using effective mass approximation
   */
  calculateTheoreticalBindingEnergy(): number {
    const reducedMass = (this.effectiveMass.electron * this.effectiveMass.hole) /
                       (this.effectiveMass.electron + this.effectiveMass.hole);
    
    // Rydberg constant for excitons (in meV)
    const rydbergConstant = 13.6 * 1000; // meV
    
    return rydbergConstant * reducedMass / (this.dielectricConstant * this.dielectricConstant);
  }

  /**
   * Calculate loss based on effective mass model
   */
  calculateLoss(predictedBindingEnergy: number): number {
    const theoretical = this.calculateTheoreticalBindingEnergy();
    const error = Math.abs(predictedBindingEnergy - theoretical);
    
    // Quadratic loss with physical bounds
    const normalizedError = error / theoretical;
    return normalizedError * normalizedError;
  }

  /**
   * Validate exciton binding energy within physical bounds
   */
  validateBindingEnergy(bindingEnergy: number): boolean {
    return bindingEnergy >= 1 && bindingEnergy <= 500; // meV range for perovskites
  }
}

// Thermodynamic stability constraint
export class ThermodynamicStabilityConstraint {
  private referenceFormationEnergies: Map<string, number>;

  constructor() {
    this.referenceFormationEnergies = new Map([
      ['CsPbI3', -0.15], // eV/atom
      ['CsPbBr3', -0.25],
      ['CsPbCl3', -0.35],
      ['MAPbI3', -0.12],
      ['MAPbBr3', -0.22],
      ['FAPbI3', -0.10],
      ['FAPbBr3', -0.20]
    ]);
  }

  /**
   * Calculate stability loss based on formation energy
   */
  calculateLoss(
    composition: string,
    predictedFormationEnergy: number,
    predictedDecompositionProducts?: { product: string; energy: number }[]
  ): number {
    const referenceEnergy = this.referenceFormationEnergies.get(composition);
    let stabilityLoss = 0;

    // Formation energy loss
    if (referenceEnergy !== undefined) {
      const formationError = Math.abs(predictedFormationEnergy - referenceEnergy);
      stabilityLoss += formationError * formationError;
    }

    // Decomposition energy penalty
    if (predictedDecompositionProducts) {
      for (const product of predictedDecompositionProducts) {
        if (product.energy < 0) {
          // Penalize negative decomposition energies (unstable)
          stabilityLoss += Math.abs(product.energy) * 10;
        }
      }
    }

    // Phase stability penalty
    if (predictedFormationEnergy > 0) {
      stabilityLoss += predictedFormationEnergy * 5; // Strong penalty for positive formation energy
    }

    return stabilityLoss;
  }

  /**
   * Calculate tolerance factor stability constraint
   */
  calculateToleranceFactorLoss(
    aIonRadius: number,
    bIonRadius: number,
    xIonRadius: number
  ): number {
    const toleranceFactor = (aIonRadius + xIonRadius) / (Math.sqrt(2) * (bIonRadius + xIonRadius));
    
    // Ideal perovskite range: 0.89 - 1.04
    const idealRange = { min: 0.89, max: 1.04 };
    let loss = 0;

    if (toleranceFactor < idealRange.min) {
      loss = Math.pow(idealRange.min - toleranceFactor, 2) * 100;
    } else if (toleranceFactor > idealRange.max) {
      loss = Math.pow(toleranceFactor - idealRange.max, 2) * 100;
    }

    return loss;
  }

  /**
   * Validate thermodynamic stability
   */
  validateStability(formationEnergy: number, toleranceFactor: number): boolean {
    return formationEnergy < 0.1 && toleranceFactor >= 0.8 && toleranceFactor <= 1.1;
  }
}

// Combined physics constraint loss function
export class PhysicsConstrainedLoss {
  private bandStructureConstraint: BandStructureConstraint;
  private oscillatorStrengthConstraint: OscillatorStrengthConstraint;
  private excitonBindingConstraint: ExcitonBindingEnergyConstraint;
  private stabilityConstraint: ThermodynamicStabilityConstraint;
  private config: PhysicsConstraintConfig;

  constructor(
    config: PhysicsConstraintConfig = {
      bandGapWeight: 1.0,
      oscillatorStrengthWeight: 0.5,
      excitonBindingWeight: 0.3,
      stabilityWeight: 2.0,
      toleranceFactorWeight: 1.0
    }
  ) {
    this.config = config;
    this.bandStructureConstraint = new BandStructureConstraint();
    this.oscillatorStrengthConstraint = new OscillatorStrengthConstraint();
    this.excitonBindingConstraint = new ExcitonBindingEnergyConstraint();
    this.stabilityConstraint = new ThermodynamicStabilityConstraint();
  }

  /**
   * Calculate total physics-constrained loss
   */
  calculateTotalLoss(
    prediction: PredictionResult,
    experimental?: {
      bandGap?: number;
      spectrum?: { wavelength: number; intensity: number }[];
      formationEnergy?: number;
      ionicRadii?: { a: number; b: number; x: number };
    }
  ): {
    totalLoss: number;
    componentLosses: {
      bandGap: number;
      oscillatorStrength: number;
      excitonBinding: number;
      stability: number;
      toleranceFactor: number;
    };
  } {
    const losses = {
      bandGap: 0,
      oscillatorStrength: 0,
      excitonBinding: 0,
      stability: 0,
      toleranceFactor: 0
    };

    // Band gap loss
    if (prediction.properties.electronic.bandGap) {
      losses.bandGap = this.bandStructureConstraint.calculateLoss(
        prediction.properties.electronic.bandGap,
        experimental?.bandGap
      );
    }

    // Oscillator strength loss
    if (experimental?.spectrum) {
      // Convert absorption coefficient to spectrum
      const predictedSpectrum = this.convertToSpectrum(
        prediction.properties.optical.absorptionCoefficient,
        prediction.properties.optical.emissionWavelength
      );
      losses.oscillatorStrength = this.oscillatorStrengthConstraint.calculateLoss(predictedSpectrum);
    }

    // Exciton binding energy loss
    if (prediction.properties.electronic.excitonBindingEnergy) {
      losses.excitonBinding = this.excitonBindingConstraint.calculateLoss(
        prediction.properties.electronic.excitonBindingEnergy
      );
    }

    // Stability loss
    if (prediction.properties.structural.formationEnergy) {
      losses.stability = this.stabilityConstraint.calculateLoss(
        prediction.material.composition,
        prediction.properties.structural.formationEnergy
      );
    }

    // Tolerance factor loss
    if (experimental?.ionicRadii) {
      losses.toleranceFactor = this.stabilityConstraint.calculateToleranceFactorLoss(
        experimental.ionicRadii.a,
        experimental.ionicRadii.b,
        experimental.ionicRadii.x
      );
    }

    // Weighted total loss
    const totalLoss = 
      losses.bandGap * this.config.bandGapWeight +
      losses.oscillatorStrength * this.config.oscillatorStrengthWeight +
      losses.excitonBinding * this.config.excitonBindingWeight +
      losses.stability * this.config.stabilityWeight +
      losses.toleranceFactor * this.config.toleranceFactorWeight;

    return { totalLoss, componentLosses: losses };
  }

  private convertToSpectrum(
    absorptionCoefficient: number,
    emissionWavelength: number
  ): { wavelength: number; intensity: number }[] {
    const spectrum = [];
    
    for (let wavelength = 300; wavelength <= 800; wavelength += 5) {
      let intensity = 0;
      
      // Simple Gaussian absorption around emission wavelength
      const sigma = 50; // nm
      intensity = absorptionCoefficient * Math.exp(
        -Math.pow(wavelength - emissionWavelength, 2) / (2 * sigma * sigma)
      );
      
      spectrum.push({ wavelength, intensity: Math.max(0, Math.min(1, intensity / 10000)) });
    }
    
    return spectrum;
  }

  /**
   * Validate all physics constraints
   */
  validatePhysics(prediction: PredictionResult): {
    isValid: boolean;
    violations: string[];
  } {
    const violations: string[] = [];

    // Validate band gap
    if (!this.bandStructureConstraint.validateBandGap(prediction.properties.electronic.bandGap)) {
      violations.push('Band gap outside physical range (0.5-4.0 eV)');
    }

    // Validate exciton binding energy
    if (!this.excitonBindingConstraint.validateBindingEnergy(
      prediction.properties.electronic.excitonBindingEnergy
    )) {
      violations.push('Exciton binding energy outside physical range (1-500 meV)');
    }

    // Validate formation energy
    if (prediction.properties.structural.formationEnergy > 0.2) {
      violations.push('Formation energy too high (> 0.2 eV/atom)');
    }

    // Validate optical properties
    if (prediction.properties.optical.quantumEfficiency > 100 || 
        prediction.properties.optical.quantumEfficiency < 0) {
      violations.push('Quantum efficiency outside valid range (0-100%)');
    }

    return {
      isValid: violations.length === 0,
      violations
    };
  }

  /**
   * Calculate regularization loss for model parameters
   */
  calculateRegularizationLoss(modelParameters: number[][], l1Weight = 0.01, l2Weight = 0.01): number {
    let l1Loss = 0;
    let l2Loss = 0;

    for (const layer of modelParameters) {
      for (const param of layer) {
        l1Loss += Math.abs(param);
        l2Loss += param * param;
      }
    }

    return l1Weight * l1Loss + l2Weight * l2Loss;
  }
}