import { 
  AtomNode, 
  BondEdge, 
  MolecularGraph, 
  PerovskiteStructure, 
  LayeredGraphStructure 
} from '../types/molecular';
import { 
  ATOMIC_DATA, 
  BOND_PARAMETERS, 
  PEROVSKITE_LATTICE_CONSTANTS,
  ATOMIC_MASSES,
  GOLDSCHMIDT_TOLERANCE_FACTORS 
} from '../data/atomicData';
import * as math from 'mathjs';

export class MolecularGraphBuilder {
  private tolerance = 0.1; // Distance tolerance for bond detection

  /**
   * Build molecular graph from simple composition (A, B, X sites)
   */
  buildFromComposition(aIon: string, bIon: string, xIon: string): MolecularGraph {
    const structure: PerovskiteStructure = {
      composition: `${aIon}${bIon}${xIon}3`,
      aIon,
      bIon,
      xIon,
      phase: 'cubic',
      symmetry: 'Pm-3m',
      defects: [],
      dopants: []
    };

    return this.buildPerovskiteGraph(structure);
  }

  /**
   * Parse chemical formula and extract composition
   */
  parseComposition(formula: string): { [element: string]: number } {
    const composition: { [element: string]: number } = {};
    
    // Handle mixed halides like CsPb(Br0.6I0.4)3
    const mixedHalideMatch = formula.match(/([A-Z][a-z]?)([A-Z][a-z]?)\(([A-Z][a-z]?)(\d*\.?\d*)([A-Z][a-z]?)(\d*\.?\d*)\)(\d+)/);
    if (mixedHalideMatch) {
      const [, a, b, x1, ratio1, x2, ratio2, count] = mixedHalideMatch;
      composition[a] = 1;
      composition[b] = 1;
      composition[x1] = parseFloat(ratio1) * parseInt(count);
      composition[x2] = parseFloat(ratio2) * parseInt(count);
      return composition;
    }

    // Regular formula parsing
    const elementMatches = formula.match(/([A-Z][a-z]?)(\d*\.?\d*)/g) || [];
    
    for (const match of elementMatches) {
      const elementMatch = match.match(/([A-Z][a-z]?)(\d*\.?\d*)/);
      if (elementMatch) {
        const element = elementMatch[1];
        const count = elementMatch[2] ? parseFloat(elementMatch[2]) : 1;
        composition[element] = count;
      }
    }
    
    return composition;
  }

  /**
   * Calculate Goldschmidt tolerance factor
   */
  calculateToleranceFactor(aIon: string, bIon: string, xIon: string): number {
    const rA = ATOMIC_DATA[aIon]?.ionicRadius || 1.0;
    const rB = ATOMIC_DATA[bIon]?.ionicRadius || 0.6;
    const rX = ATOMIC_DATA[xIon]?.ionicRadius || 1.8;
    
    return (rA + rX) / (Math.sqrt(2) * (rB + rX));
  }

  /**
   * Generate atomic positions for perovskite structure
   */
  generatePerovskitePositions(
    structure: PerovskiteStructure,
    latticeParams: MolecularGraph['latticeParameters']
  ): AtomNode[] {
    const nodes: AtomNode[] = [];
    const { a, b, c } = latticeParams;
    
    // For cubic perovskite ABX3 structure
    if (structure.phase === 'cubic') {
      // A-site cation at (0.5, 0.5, 0.5)
      nodes.push(this.createAtomNode(
        'A1', structure.aIon, [a/2, b/2, c/2], 'A'
      ));
      
      // B-site cation at (0, 0, 0)
      nodes.push(this.createAtomNode(
        'B1', structure.bIon, [0, 0, 0], 'B'
      ));
      
      // X-site anions at face centers
      nodes.push(this.createAtomNode(
        'X1', structure.xIon, [a/2, 0, 0], 'X'
      ));
      nodes.push(this.createAtomNode(
        'X2', structure.xIon, [0, b/2, 0], 'X'
      ));
      nodes.push(this.createAtomNode(
        'X3', structure.xIon, [0, 0, c/2], 'X'
      ));
    }
    
    // Handle dopants if present
    if (structure.dopants) {
      structure.dopants.forEach((dopant, index) => {
        const dopantId = `D${index + 1}`;
        // Simplified dopant positioning - replace some original atoms
        if (dopant.substitution && dopant.concentration > 0.01) {
          nodes.push(this.createAtomNode(
            dopantId, dopant.element, [a/4, b/4, c/4], dopant.site
          ));
        }
      });
    }
    
    return nodes;
  }

  /**
   * Create an atom node with properties
   */
  private createAtomNode(
    id: string, 
    element: string, 
    position: [number, number, number], 
    site: 'A' | 'B' | 'X' | null = null
  ): AtomNode {
    const properties = ATOMIC_DATA[element] || {
      atomicNumber: 55,
      electronegativity: 0.79,
      ionicRadius: 1.67,
      valenceElectrons: 1,
      coordinationNumber: 8,
      oxidationState: 1,
      covalentRadius: 2.44,
      vanDerWaalsRadius: 3.43
    }; // Default Cs properties
    
    const mass = ATOMIC_MASSES[element] || 132.9;
    
    return {
      id,
      element,
      position,
      properties,
      charge: properties.oxidationState,
      mass,
      site,
      neighbors: []
    };
  }

  /**
   * Calculate distance between two atoms
   */
  private calculateDistance(pos1: [number, number, number], pos2: [number, number, number]): number {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) +
      Math.pow(pos1[1] - pos2[1], 2) +
      Math.pow(pos1[2] - pos2[2], 2)
    );
  }

  /**
   * Determine bond type based on atom properties
   */
  private determineBondType(atom1: AtomNode, atom2: AtomNode, distance: number): BondEdge['bondType'] {
    const electronegativityDiff = Math.abs(
      atom1.properties.electronegativity - atom2.properties.electronegativity
    );
    
    if (electronegativityDiff > 1.7) return 'ionic';
    if (electronegativityDiff > 0.5) return 'covalent';
    if (distance > 4.0) return 'van_der_waals';
    
    return 'ionic'; // Default for perovskites
  }

  /**
   * Calculate bond order and interaction strength
   */
  private calculateBondProperties(
    atom1: AtomNode, 
    atom2: AtomNode, 
    distance: number, 
    bondType: BondEdge['bondType']
  ): { bondOrder: number; interactionStrength: number } {
    const bondParams = BOND_PARAMETERS[bondType] || {
      averageLength: 2.5,
      minLength: 1.0,
      maxLength: 4.0,
      strengthFactor: 1.0
    };
    
    const idealDistance = (atom1.properties.ionicRadius + atom2.properties.ionicRadius);
    
    const bondOrder = Math.max(0, 1 - Math.abs(distance - idealDistance) / idealDistance);
    const interactionStrength = bondParams.strengthFactor * bondOrder * 
      Math.exp(-Math.pow(distance - idealDistance, 2) / (2 * Math.pow(this.tolerance, 2)));
    
    return { bondOrder, interactionStrength };
  }

  /**
   * Generate bonds between atoms based on distance and chemistry
   */
  generateBonds(nodes: AtomNode[], latticeParams: MolecularGraph['latticeParameters']): BondEdge[] {
    const edges: BondEdge[] = [];
    let edgeId = 0;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const atom1 = nodes[i];
        const atom2 = nodes[j];
        
        const distance = this.calculateDistance(atom1.position, atom2.position);
        const bondType = this.determineBondType(atom1, atom2, distance);
        const bondParams = BOND_PARAMETERS[bondType] || {
          averageLength: 2.5,
          minLength: 1.0,
          maxLength: 4.0,
          strengthFactor: 1.0
        };
        
        // Check if atoms should be bonded
        if (distance >= bondParams.minLength && distance <= bondParams.maxLength) {
          const { bondOrder, interactionStrength } = this.calculateBondProperties(
            atom1, atom2, distance, bondType
          );
          
          // Determine hierarchical layer
          let layer: 1 | 2 | 3 = 1;
          if (distance > bondParams.maxLength * 0.7) layer = 2;
          if (distance > bondParams.maxLength * 0.9) layer = 3;
          
          const edge: BondEdge = {
            id: `edge_${edgeId++}`,
            source: atom1.id,
            target: atom2.id,
            bondType,
            bondLength: distance,
            bondAngle: this.calculateBondAngle(atom1, atom2, nodes),
            dihedralAngle: 0, // Simplified for now
            bondOrder,
            interactionStrength,
            layer
          };
          
          edges.push(edge);
          
          // Update neighbor lists
          atom1.neighbors.push(atom2.id);
          atom2.neighbors.push(atom1.id);
        }
      }
    }
    
    return edges;
  }

  /**
   * Calculate bond angle (simplified)
   */
  private calculateBondAngle(atom1: AtomNode, atom2: AtomNode, allNodes: AtomNode[]): number {
    // Find common neighbors for angle calculation
    const commonNeighbors = atom1.neighbors.filter(n => atom2.neighbors.includes(n));
    if (commonNeighbors.length === 0) return 180; // Linear
    
    // Simplified calculation - return typical perovskite angles
    if (atom1.site === 'B' || atom2.site === 'B') return 180; // B-X-B linear
    return 90; // Octahedral coordination
  }

  /**
   * Build complete molecular graph for perovskite
   */
  buildPerovskiteGraph(structure: PerovskiteStructure): MolecularGraph {
    // Get lattice parameters - use defaults if not found
    const latticeConstants = PEROVSKITE_LATTICE_CONSTANTS as any;
    const latticeKey = structure.composition;
    let latticeData = latticeConstants[latticeKey]?.[structure.phase];
    
    // Fallback to default cubic lattice parameters
    if (!latticeData) {
      latticeData = {
        a: 6.0,
        b: 6.0, 
        c: 6.0,
        alpha: 90,
        beta: 90,
        gamma: 90
      };
    }

    const latticeParameters = latticeData;
    
    // Generate atomic positions
    const nodes = this.generatePerovskitePositions(structure, latticeParameters);
    
    // Generate bonds
    const edges = this.generateBonds(nodes, latticeParameters);
    
    // Calculate unit cell volume
    const { a, b, c, alpha, beta, gamma } = latticeParameters;
    const volume = this.calculateUnitCellVolume(a, b, c, alpha, beta, gamma);
    
    // Calculate density
    const totalMass = nodes.reduce((sum, node) => sum + node.mass, 0);
    const density = (totalMass * 1.66054) / volume; // Convert to g/cm³
    
    return {
      nodes,
      edges,
      latticeParameters,
      spaceGroup: this.determineSpaceGroup(structure),
      crystalSystem: structure.phase === 'cubic' ? 'cubic' : 
                   structure.phase === 'tetragonal' ? 'tetragonal' : 'orthorhombic',
      unitCellVolume: volume,
      density
    };
  }

  /**
   * Calculate unit cell volume
   */
  private calculateUnitCellVolume(a: number, b: number, c: number, alpha: number, beta: number, gamma: number): number {
    const alphaRad = alpha * Math.PI / 180;
    const betaRad = beta * Math.PI / 180;
    const gammaRad = gamma * Math.PI / 180;
    
    return a * b * c * Math.sqrt(
      1 + 2 * Math.cos(alphaRad) * Math.cos(betaRad) * Math.cos(gammaRad) -
      Math.cos(alphaRad) ** 2 - Math.cos(betaRad) ** 2 - Math.cos(gammaRad) ** 2
    );
  }

  /**
   * Determine space group based on structure
   */
  private determineSpaceGroup(structure: PerovskiteStructure): string {
    switch (structure.phase) {
      case 'cubic': return 'Pm-3m';
      case 'tetragonal': return 'P4/mmm';
      case 'orthorhombic': return 'Pnma';
      default: return 'P1';
    }
  }
}

// Export utility functions
export const molecularGraphUtils = {
  parseFormula: (formula: string) => new MolecularGraphBuilder().parseComposition(formula),
  calculateToleranceFactor: (a: string, b: string, x: string) => 
    new MolecularGraphBuilder().calculateToleranceFactor(a, b, x),
  buildGraph: (structure: PerovskiteStructure) => 
    new MolecularGraphBuilder().buildPerovskiteGraph(structure)
};