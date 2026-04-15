import { AtomicProperties } from '../types/molecular';

export const ATOMIC_DATA: Record<string, AtomicProperties> = {
  // A-site cations
  Cs: {
    atomicNumber: 55,
    electronegativity: 0.79,
    ionicRadius: 1.88, // Cs+ ionic radius in Angstroms
    valenceElectrons: 1,
    hybridization: 's',
    coordinationNumber: 12,
    oxidationState: 1,
    covalentRadius: 2.44,
    vanDerWaalsRadius: 3.43
  },
  // Methylammonium (CH3NH3+) - represented as composite
  MA: {
    atomicNumber: 7, // Nitrogen as central atom
    electronegativity: 2.8,
    ionicRadius: 2.17,
    valenceElectrons: 8,
    hybridization: 'sp3',
    coordinationNumber: 12,
    oxidationState: 1,
    covalentRadius: 2.17,
    vanDerWaalsRadius: 2.60
  },
  // Formamidinium (HC(NH2)2+) - represented as composite
  FA: {
    atomicNumber: 6, // Carbon as central atom
    electronegativity: 2.9,
    ionicRadius: 2.53,
    valenceElectrons: 9,
    hybridization: 'sp2',
    coordinationNumber: 12,
    oxidationState: 1,
    covalentRadius: 2.53,
    vanDerWaalsRadius: 2.79
  },
  
  // B-site cations
  Pb: {
    atomicNumber: 82,
    electronegativity: 2.33,
    ionicRadius: 1.19, // Pb2+ ionic radius
    valenceElectrons: 4,
    hybridization: 'sp3d2',
    coordinationNumber: 6,
    oxidationState: 2,
    covalentRadius: 1.46,
    vanDerWaalsRadius: 2.02
  },
  Sn: {
    atomicNumber: 50,
    electronegativity: 1.96,
    ionicRadius: 1.02, // Sn2+ ionic radius
    valenceElectrons: 4,
    hybridization: 'sp3d2',
    coordinationNumber: 6,
    oxidationState: 2,
    covalentRadius: 1.39,
    vanDerWaalsRadius: 2.17
  },
  Ge: {
    atomicNumber: 32,
    electronegativity: 2.01,
    ionicRadius: 0.87, // Ge2+ ionic radius
    valenceElectrons: 4,
    hybridization: 'sp3d2',
    coordinationNumber: 6,
    oxidationState: 2,
    covalentRadius: 1.20,
    vanDerWaalsRadius: 2.11
  },
  
  // X-site anions
  I: {
    atomicNumber: 53,
    electronegativity: 2.66,
    ionicRadius: 2.20, // I- ionic radius
    valenceElectrons: 8,
    hybridization: 'sp3d',
    coordinationNumber: 2,
    oxidationState: -1,
    covalentRadius: 1.39,
    vanDerWaalsRadius: 1.98
  },
  Br: {
    atomicNumber: 35,
    electronegativity: 2.96,
    ionicRadius: 1.96, // Br- ionic radius
    valenceElectrons: 8,
    hybridization: 'sp3d',
    coordinationNumber: 2,
    oxidationState: -1,
    covalentRadius: 1.20,
    vanDerWaalsRadius: 1.85
  },
  Cl: {
    atomicNumber: 17,
    electronegativity: 3.16,
    ionicRadius: 1.81, // Cl- ionic radius
    valenceElectrons: 8,
    hybridization: 'sp3',
    coordinationNumber: 2,
    oxidationState: -1,
    covalentRadius: 1.02,
    vanDerWaalsRadius: 1.75
  },
  F: {
    atomicNumber: 9,
    electronegativity: 3.98,
    ionicRadius: 1.33, // F- ionic radius
    valenceElectrons: 8,
    hybridization: 'sp3',
    coordinationNumber: 2,
    oxidationState: -1,
    covalentRadius: 0.64,
    vanDerWaalsRadius: 1.47
  }
};

export const BOND_PARAMETERS = {
  ionic: {
    minLength: 1.5,
    maxLength: 4.0,
    strengthFactor: 0.8,
    cutoffRadius: 4.5
  },
  covalent: {
    minLength: 0.8,
    maxLength: 2.5,
    strengthFactor: 1.0,
    cutoffRadius: 3.0
  },
  metallic: {
    minLength: 2.0,
    maxLength: 3.5,
    strengthFactor: 0.6,
    cutoffRadius: 4.0
  },
  van_der_waals: {
    minLength: 3.0,
    maxLength: 6.0,
    strengthFactor: 0.2,
    cutoffRadius: 6.5
  },
  hydrogen: {
    minLength: 1.5,
    maxLength: 3.0,
    strengthFactor: 0.3,
    cutoffRadius: 3.5
  }
};

// Standard perovskite lattice constants (in Angstroms and degrees)
export const PEROVSKITE_LATTICE_CONSTANTS = {
  // Cesium lead halides
  CsPbI3: {
    cubic: { a: 6.29, b: 6.29, c: 6.29, alpha: 90, beta: 90, gamma: 90 },
    tetragonal: { a: 8.85, b: 8.85, c: 12.59, alpha: 90, beta: 90, gamma: 90 },
    orthorhombic: { a: 8.86, b: 12.59, c: 8.31, alpha: 90, beta: 90, gamma: 90 }
  },
  CsPbBr3: {
    cubic: { a: 5.87, b: 5.87, c: 5.87, alpha: 90, beta: 90, gamma: 90 },
    orthorhombic: { a: 8.31, b: 11.76, c: 8.24, alpha: 90, beta: 90, gamma: 90 }
  },
  CsPbCl3: {
    cubic: { a: 5.61, b: 5.61, c: 5.61, alpha: 90, beta: 90, gamma: 90 },
    orthorhombic: { a: 7.91, b: 11.15, c: 7.85, alpha: 90, beta: 90, gamma: 90 }
  },
  
  // Methylammonium lead halides
  MAPbI3: {
    tetragonal: { a: 8.85, b: 8.85, c: 12.66, alpha: 90, beta: 90, gamma: 90 },
    cubic: { a: 6.32, b: 6.32, c: 6.32, alpha: 90, beta: 90, gamma: 90 },
    orthorhombic: { a: 8.84, b: 12.58, c: 8.55, alpha: 90, beta: 90, gamma: 90 }
  },
  MAPbBr3: {
    cubic: { a: 5.93, b: 5.93, c: 5.93, alpha: 90, beta: 90, gamma: 90 },
    tetragonal: { a: 8.38, b: 8.38, c: 11.85, alpha: 90, beta: 90, gamma: 90 }
  },
  MAPbCl3: {
    cubic: { a: 5.68, b: 5.68, c: 5.68, alpha: 90, beta: 90, gamma: 90 }
  },
  
  // Formamidinium lead halides
  FAPbI3: {
    cubic: { a: 6.36, b: 6.36, c: 6.36, alpha: 90, beta: 90, gamma: 90 },
    tetragonal: { a: 8.98, b: 8.98, c: 12.84, alpha: 90, beta: 90, gamma: 90 },
    hexagonal: { a: 8.99, b: 8.99, c: 11.01, alpha: 90, beta: 90, gamma: 120 }
  },
  FAPbBr3: {
    cubic: { a: 5.99, b: 5.99, c: 5.99, alpha: 90, beta: 90, gamma: 90 }
  },
  
  // Mixed compositions
  'CsPb(I0.8Br0.2)3': {
    cubic: { a: 6.18, b: 6.18, c: 6.18, alpha: 90, beta: 90, gamma: 90 }
  },
  'CsPb(Br0.6I0.4)3': {
    cubic: { a: 6.02, b: 6.02, c: 6.02, alpha: 90, beta: 90, gamma: 90 }
  },
  'MAPb(I0.9Br0.1)3': {
    tetragonal: { a: 8.82, b: 8.82, c: 12.58, alpha: 90, beta: 90, gamma: 90 }
  }
};

// Tolerance factors for stability prediction
export const GOLDSCHMIDT_TOLERANCE_FACTORS = {
  stable_range: [0.8, 1.1],
  perovskite_range: [0.89, 1.04],
  cubic_range: [0.95, 1.04]
};

// Octahedral factor for B-X coordination
export const OCTAHEDRAL_FACTORS = {
  stable_range: [0.44, 0.90],
  optimal_range: [0.51, 0.73]
};

// Standard atomic masses (in atomic mass units)
export const ATOMIC_MASSES: Record<string, number> = {
  Cs: 132.91,
  MA: 33.06, // CH3NH3+
  FA: 45.08, // CH(NH2)2+
  Pb: 207.2,
  Sn: 118.71,
  Ge: 72.64,
  I: 126.90,
  Br: 79.90,
  Cl: 35.45,
  F: 18.998
};

// Common space groups for perovskites
export const PEROVSKITE_SPACE_GROUPS = {
  cubic: {
    'Pm-3m': 221, // Ideal cubic perovskite
    'Pn-3m': 224  // Face-centered cubic
  },
  tetragonal: {
    'P4/mmm': 123,
    'I4/mcm': 140,
    'P4mm': 99
  },
  orthorhombic: {
    'Pnma': 62,   // Most common for tilted perovskites
    'Pbam': 55,
    'Cmcm': 63
  },
  hexagonal: {
    'P63/mmc': 194,
    'P6_3mc': 186
  }
};

// Color mapping for visualization
export const ELEMENT_COLORS: Record<string, string> = {
  Cs: '#57178F',  // Purple
  MA: '#228B22',  // Forest Green
  FA: '#FF4500',  // Orange Red
  Pb: '#2F4F4F',  // Dark Slate Gray
  Sn: '#C0C0C0',  // Silver
  Ge: '#FFD700',  // Gold
  I: '#4B0082',   // Indigo
  Br: '#8B4513',  // Saddle Brown
  Cl: '#32CD32',  // Lime Green
  F: '#FF69B4'    // Hot Pink
};