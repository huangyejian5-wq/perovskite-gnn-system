export interface AtomicProperties {
  atomicNumber: number;
  symbol?: string;
  name?: string;
  mass?: number;
  electronegativity: number;
  ionicRadius: number;
  valenceElectrons: number;
  oxidationStates?: number[];
  color?: string;
  isRadioactive?: boolean;
  hybridization: string;
  coordinationNumber: number;
  oxidationState: number;
  covalentRadius: number;
  vanDerWaalsRadius: number;
}

// Updated AtomNode interface for GNN models
export interface AtomNode {
  id: string;
  element: string;
  position: [number, number, number];
  properties: AtomicProperties;
  charge: number;
  mass: number;
  site: 'A' | 'B' | 'X' | null;
  neighbors: string[];
}

// Updated BondEdge interface for GNN models
export interface BondEdge {
  id: string;
  source: string;
  target: string;
  bondType: 'ionic' | 'covalent' | 'metallic' | 'van_der_waals' | 'hydrogen';
  bondLength: number;
  bondAngle: number;
  dihedralAngle: number;
  bondOrder: number;
  interactionStrength: number;
  layer: 1 | 2 | 3;
}

export interface Node {
  id: string;
  element: string;
  position: [number, number, number];
  site: 'A' | 'B' | 'X' | 'dopant';
  neighbors: string[];
  features: {
    atomicNumber: number;
    electronegativity: number;
    ionicRadius: number;
    valenceElectrons: number;
    hybridization: string;
    coordinationNumber: number;
    oxidationState: number;
  };
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  bondType: 'ionic' | 'covalent' | 'vdw' | 'coulomb';
  distance: number;
  strength: number;
  features: {
    bondLength: number;
    bondAngle?: number;
    dihedralAngle?: number;
    bondOrder: number;
    interactionStrength: number;
  };
}

export interface MolecularGraph {
  nodes: AtomNode[];
  edges: BondEdge[];
  latticeParameters: {
    a: number;
    b: number;
    c: number;
    alpha: number;
    beta: number;
    gamma: number;
  };
  spaceGroup: string;
  crystalSystem: 'cubic' | 'tetragonal' | 'orthorhombic' | 'hexagonal' | 'trigonal' | 'monoclinic' | 'triclinic';
  unitCellVolume: number;
  density: number;
}

// Add missing interfaces for perovskite structures
export interface PerovskiteStructure {
  composition: string;
  aIon: string;
  bIon: string;
  xIon: string;
  phase: 'cubic' | 'tetragonal' | 'orthorhombic';
  symmetry: string;
  defects: Array<{
    type: 'vacancy' | 'interstitial' | 'substitution';
    position: [number, number, number];
    element?: string;
  }>;
  dopants: Array<{
    element: string;
    site: 'A' | 'B' | 'X';
    concentration: number;
    substitution: boolean;
  }>;
}

export interface LayeredGraphStructure {
  atomicLevel: MolecularGraph;
  fragmentLevel: MolecularGraph;
  crystalLevel: MolecularGraph;
  hierarchicalConnections: Array<{
    fromLevel: 'atomic' | 'fragment' | 'crystal';
    toLevel: 'atomic' | 'fragment' | 'crystal';
    connections: Array<{
      sourceId: string;
      targetId: string;
      weight: number;
    }>;
  }>;
}

export interface MaterialProperties {
  optical: {
    quantumEfficiency: number;
    emissionWavelength: number;
    emissionIntensity: number;
    absorptionCoefficient: number;
    photoluminescenceLifetime: number;
    externalQuantumEfficiency: number;
    colorCoordinates: { x: number; y: number };
    spectralWidth: number;
    stokesShift: number;
    photostability: number;
    temperatureQuenching: number;
    nonlinearOpticalCoefficient: number;
    refractiveIndex: number;
    extinctionCoefficient: number;
    oscillatorStrength: number;
  };
  electronic: {
    bandGap: number;
    carrierMobility: {
      electron: number;
      hole: number;
    };
    conductivity: number;
    excitonBindingEnergy: number;
    effectiveMass: {
      electron: number;
      hole: number;
    };
    dielectricConstant: number;
    workFunction: number;
    ionizationPotential: number;
    electronAffinity: number;
    bandEdgePositions: {
      valence: number;
      conduction: number;
    };
  };
  stability: {
    thermalStability: number;
    moistureStability: number;
    lightStability: number;
    airStability: number;
    phaseStability: number;
    decompositionTemperature: number;
    degradationRate: number;
    stabilityScore: number;
  };
  structural: {
    latticeParameters: {
      a: number;
      b: number;
      c: number;
    };
    formationEnergy: number;
    elasticModulus: number;
    bulkModulus: number;
    density: number;
    thermalExpansion: number;
    heatCapacity: number;
    toleranceFactor: number;
  };
}

export interface PredictionResult {
  material: {
    composition: string;
    structure: string;
    dopingInfo: {
      isDoped: boolean;
      dopants: Array<{
        element: string;
        site: string;
        concentration: number;
      }>;
    };
  };
  properties: MaterialProperties;
  confidence: number;
  uncertainty: {
    overall: number;
    optical: number;
    electronic: number;
    stability: number;
  };
  conditions: {
    temperature: number;
    pressure: number;
    excitationWavelength: number;
    environmentalConditions: {
      humidity: number;
      atmosphere: 'air' | 'nitrogen' | 'vacuum';
    };
  };
  validation?: {
    isValid: boolean;
    violations: string[];
    warnings: string[];
  };
}

export interface SpectrumData {
  wavelength: number[];
  intensity: number[];
  type: 'absorption' | 'emission' | 'excitation';
}

export interface OptimizationTarget {
  property: string;
  targetValue: number;
  weight: number;
  constraint: 'minimize' | 'maximize' | 'target';
}

export interface MaterialCandidate {
  composition: string;
  predictedProperties: MaterialProperties;
  score: number;
  synthesisRoute?: {
    precursors: string[];
    conditions: {
      temperature: number;
      time: number;
      atmosphere: string;
    };
    difficulty: 'easy' | 'medium' | 'hard';
  };
}