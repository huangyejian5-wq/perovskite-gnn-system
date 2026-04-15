export interface PerovskiteMaterial {
  id: string;
  name: string;
  formula: string;
  structure: CrystalStructure;
  composition: MaterialComposition;
  properties: MaterialProperties;
  stability: StabilityData;
  synthesis: SynthesisInfo[];
  metadata: MaterialMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface CrystalStructure {
  phase: 'cubic' | 'tetragonal' | 'orthorhombic' | 'hexagonal' | 'unknown';
  spaceGroup: string;
  latticeParameters: {
    a: number;
    b: number;
    c: number;
    alpha: number;
    beta: number;
    gamma: number;
  };
  atomicPositions: AtomicPosition[];
  volume: number;
}

export interface AtomicPosition {
  element: string;
  x: number;
  y: number;
  z: number;
  occupancy: number;
}

export interface MaterialComposition {
  aIon: string; // Cs, MA, FA, etc.
  bIon: string; // Pb, Sn, etc.
  xIon: string[]; // I, Br, Cl halides
  dopants?: Dopant[];
}

export interface Dopant {
  element: string;
  site: 'A' | 'B' | 'X';
  concentration: number; // percentage
}

export interface MaterialProperties {
  optical: OpticalProperties;
  electronic: ElectronicProperties;
  thermal: ThermalProperties;
  mechanical?: MechanicalProperties;
}

export interface OpticalProperties {
  bandgap: number; // eV
  plqy?: number; // photoluminescence quantum yield (%)
  emissionPeak?: number; // nm
  fwhm?: number; // full width at half maximum (nm)
  lifetimeAvg?: number; // nanoseconds
  absorptionEdge?: number; // nm
  extinctionCoefficient?: number[];
  refractiveIndex?: number;
}

export interface ElectronicProperties {
  electronMobility?: number; // cm²/V·s
  holeMobility?: number; // cm²/V·s
  conductivity?: number; // S/cm
  carrierLifetime?: number; // μs
  trapDensity?: number; // cm⁻³
}

export interface ThermalProperties {
  decompositionTemp?: number; // °C
  phaseDiagramData?: PhaseDiagramPoint[];
  thermalConductivity?: number; // W/m·K
  heatCapacity?: number; // J/g·K
}

export interface PhaseDiagramPoint {
  temperature: number; // °C
  phase: string;
  stable: boolean;
}

export interface MechanicalProperties {
  elasticModulus?: number; // GPa
  hardness?: number; // GPa
  poissonRatio?: number;
}

export interface StabilityData {
  thermal: {
    t50?: number; // temperature at which 50% degrades (°C)
    activationEnergy?: number; // eV
  };
  moisture: {
    degradationRate?: number; // %/hour at specific RH
    criticalHumidity?: number; // % RH
  };
  light: {
    photoStabilityIndex?: number; // arbitrary units
    degradationRate?: number; // %/hour under specific illumination
  };
  air: {
    oxygenSensitivity?: number; // degradation rate in air
    co2Sensitivity?: number;
  };
}

export interface SynthesisInfo {
  method: string;
  temperature: number; // °C
  time: number; // minutes
  atmosphere: string;
  precursors: Precursor[];
  yield?: number; // %
  purity?: number; // %
  notes?: string;
}

export interface Precursor {
  compound: string;
  amount: number;
  unit: string;
  purity?: number;
}

export interface MaterialMetadata {
  source: 'experimental' | 'computational' | 'literature';
  confidence: number; // 0-1
  references?: string[];
  tags: string[];
  contributors?: string[];
  version: number;
}

export interface DatabaseQuery {
  formula?: string;
  elements?: string[];
  propertyRanges?: PropertyRange[];
  structure?: Partial<CrystalStructure>;
  stability?: Partial<StabilityData>;
  tags?: string[];
  limit?: number;
  offset?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PropertyRange {
  property: string;
  min?: number;
  max?: number;
}

export interface BatchOperationResult {
  success: boolean;
  processed: number;
  failed: number;
  errors: string[];
  results?: any[];
}

export interface DatabaseStats {
  totalMaterials: number;
  uniqueCompositions: number;
  experimentalData: number;
  computationalData: number;
  averageConfidence: number;
  lastUpdated: Date;
}
