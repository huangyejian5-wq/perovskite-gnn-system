// Enhanced Molecular Structure Data for 3D Visualization
// Each structure has unique atomic positions, bonds, and visual properties

export interface AtomData {
  id: string;
  element: string;
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
  mass: number;
  charge?: number;
  hybridization?: string;
}

export interface BondData {
  id: string;
  atom1: string;
  atom2: string;
  type: 'single' | 'double' | 'triple' | 'ionic' | 'metallic';
  length: number;
  strength: number;
  vibrationFreq?: number;
}

export interface MolecularStructure {
  id: string;
  name: string;
  formula: string;
  category: string;
  crystalSystem: string;
  latticeParameters: {
    a: number;
    b: number;
    c: number;
    alpha: number;
    beta: number;
    gamma: number;
  };
  atoms: AtomData[];
  bonds: BondData[];
  unitCellDimensions: {
    x: number;
    y: number;
    z: number;
  };
  properties: {
    bandgap: number | null;
    plqy: number | null;
    stability: number | null;
    emissionWavelength: number | null;
    efficiency: number | null;
    molarMass: number | null;
    density: number | null;
    melting_point?: number | null;
    boiling_point?: number | null;
  };
  visualization: {
    defaultView: 'ball-stick' | 'space-fill' | 'wireframe' | 'surface';
    backgroundColor: string;
    lighting: 'ambient' | 'directional' | 'spot';
    animation?: 'rotation' | 'vibration' | 'breathing' | 'none';
    colorScheme: 'element' | 'charge' | 'temperature' | 'custom';
  };
  description: string;
  applications: string[];
  synthesisRoute?: string;
  source?: {
    type: 'template' | 'experimental' | 'screened' | 'mp';
    label: string;
    templateBasis?: string;
    note?: string;
    confidence?: string;
  };
}

// Realistic atomic colors based on CPK coloring convention
export const ATOMIC_COLORS = {
  H: '#FFFFFF',   // Hydrogen - White
  C: '#909090',   // Carbon - Dark Grey
  N: '#3050F8',   // Nitrogen - Blue
  O: '#FF0D0D',   // Oxygen - Red
  F: '#90E050',   // Fluorine - Light Green
  Cl: '#1FF01F',  // Chlorine - Green
  Br: '#A62929',  // Bromine - Dark Red
  I: '#940094',   // Iodine - Purple
  Pb: '#575961',  // Lead - Dark Grey Blue
  Sn: '#668080',  // Tin - Grey
  Cs: '#57178F',  // Cesium - Purple
  K: '#8F40D4',   // Potassium - Violet
  Rb: '#702EB0',  // Rubidium - Dark Violet
  Ti: '#BFC2C7',  // Titanium - Grey
  Zr: '#94E0E0',  // Zirconium - Cyan
  Ge: '#668F8F',  // Germanium - Dark Cyan
  Ag: '#C0C0C0',  // Silver - Silver
  Bi: '#9E4FB5',  // Bismuth - Purple
  Ba: '#00C900',  // Barium - Green
  Ca: '#3DFF00',  // Calcium - Light Green
};

// Atomic radii in Angstroms
export const ATOMIC_RADII = {
  H: 0.31, C: 0.76, N: 0.71, O: 0.66, F: 0.57, Cl: 1.02, Br: 1.20, I: 1.39,
  Pb: 1.54, Sn: 1.45, Cs: 2.44, K: 2.03, Rb: 2.20, Ti: 1.36, Zr: 1.48, 
  Ge: 1.25, Ag: 1.65, Bi: 1.56, Ba: 1.98, Ca: 1.74
};

export const ENHANCED_MOLECULAR_STRUCTURES: MolecularStructure[] = [
  // 1. Cesium Lead Iodide - Cubic Phase
  {
    id: 'cspbi3_cubic',
    name: '立方相铯铅碘',
    formula: 'CsPbI₃',
    category: '铯基钙钛矿',
    crystalSystem: 'cubic',
    latticeParameters: { a: 6.289, b: 6.289, c: 6.289, alpha: 90, beta: 90, gamma: 90 },
    atoms: [
      // Cs atoms at corners
      { id: 'cs1', element: 'Cs', x: 0, y: 0, z: 0, radius: 2.44, color: ATOMIC_COLORS.Cs, mass: 132.9 },
      { id: 'cs2', element: 'Cs', x: 6.289, y: 6.289, z: 6.289, radius: 2.44, color: ATOMIC_COLORS.Cs, mass: 132.9 },
      // Pb atom at center
      { id: 'pb1', element: 'Pb', x: 3.145, y: 3.145, z: 3.145, radius: 1.54, color: ATOMIC_COLORS.Pb, mass: 207.2 },
      // I atoms at face centers
      { id: 'i1', element: 'I', x: 3.145, y: 0, z: 0, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i2', element: 'I', x: 0, y: 3.145, z: 0, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i3', element: 'I', x: 0, y: 0, z: 3.145, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i4', element: 'I', x: 6.289, y: 3.145, z: 3.145, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i5', element: 'I', x: 3.145, y: 6.289, z: 3.145, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i6', element: 'I', x: 3.145, y: 3.145, z: 6.289, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
    ],
    bonds: [
      { id: 'pb-i1', atom1: 'pb1', atom2: 'i1', type: 'ionic', length: 3.145, strength: 0.8 },
      { id: 'pb-i2', atom1: 'pb1', atom2: 'i2', type: 'ionic', length: 3.145, strength: 0.8 },
      { id: 'pb-i3', atom1: 'pb1', atom2: 'i3', type: 'ionic', length: 3.145, strength: 0.8 },
      { id: 'pb-i4', atom1: 'pb1', atom2: 'i4', type: 'ionic', length: 3.145, strength: 0.8 },
      { id: 'pb-i5', atom1: 'pb1', atom2: 'i5', type: 'ionic', length: 3.145, strength: 0.8 },
      { id: 'pb-i6', atom1: 'pb1', atom2: 'i6', type: 'ionic', length: 3.145, strength: 0.8 },
    ],
    unitCellDimensions: { x: 6.289, y: 6.289, z: 6.289 },
    properties: {
      bandgap: 1.73,
      plqy: 76.2,
      stability: 85,
      emissionWavelength: 680,
      efficiency: 18.5,
      molarMass: 467.0,
      density: 4.69,
      melting_point: 460,
    },
    visualization: {
      defaultView: 'ball-stick',
      backgroundColor: '#0f172a',
      lighting: 'directional',
      animation: 'vibration',
      colorScheme: 'element',
    },
    description: '立方相CsPbI₃是一种重要的全无机钙钛矿材料，具有优异的光电性能和相对较好的热稳定性。',
    applications: ['太阳能电池', '发光二极管', '激光器', '光电探测器'],
    synthesisRoute: '溶液处理法、气相沉积法'
  },

  // 2. Methylammonium Lead Bromide - Tetragonal Phase
  {
    id: 'mapbbr3_tetragonal',
    name: '四方相甲胺铅溴',
    formula: 'MAPbBr₃',
    category: '甲胺基钙钛矿',
    crystalSystem: 'tetragonal',
    latticeParameters: { a: 8.322, b: 8.322, c: 11.85, alpha: 90, beta: 90, gamma: 90 },
    atoms: [
      // MA cations (simplified as single point)
      { id: 'ma1', element: 'C', x: 0, y: 0, z: 0, radius: 0.76, color: ATOMIC_COLORS.C, mass: 33.0 },
      { id: 'ma2', element: 'C', x: 4.161, y: 4.161, z: 5.925, radius: 0.76, color: ATOMIC_COLORS.C, mass: 33.0 },
      // Pb atoms
      { id: 'pb1', element: 'Pb', x: 4.161, y: 0, z: 2.96, radius: 1.54, color: ATOMIC_COLORS.Pb, mass: 207.2 },
      { id: 'pb2', element: 'Pb', x: 0, y: 4.161, z: 8.89, radius: 1.54, color: ATOMIC_COLORS.Pb, mass: 207.2 },
      // Br atoms
      { id: 'br1', element: 'Br', x: 4.161, y: 4.161, z: 2.96, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
      { id: 'br2', element: 'Br', x: 0, y: 0, z: 2.96, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
      { id: 'br3', element: 'Br', x: 4.161, y: 0, z: 0, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
      { id: 'br4', element: 'Br', x: 4.161, y: 0, z: 5.925, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
      { id: 'br5', element: 'Br', x: 8.322, y: 0, z: 2.96, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
      { id: 'br6', element: 'Br', x: 0, y: 4.161, z: 11.85, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
    ],
    bonds: [
      { id: 'pb1-br1', atom1: 'pb1', atom2: 'br1', type: 'ionic', length: 2.94, strength: 0.85, vibrationFreq: 150 },
      { id: 'pb1-br2', atom1: 'pb1', atom2: 'br2', type: 'ionic', length: 2.94, strength: 0.85, vibrationFreq: 150 },
      { id: 'pb1-br3', atom1: 'pb1', atom2: 'br3', type: 'ionic', length: 2.96, strength: 0.85, vibrationFreq: 150 },
      { id: 'pb1-br4', atom1: 'pb1', atom2: 'br4', type: 'ionic', length: 2.96, strength: 0.85, vibrationFreq: 150 },
      { id: 'pb2-br5', atom1: 'pb2', atom2: 'br5', type: 'ionic', length: 2.94, strength: 0.85, vibrationFreq: 150 },
      { id: 'pb2-br6', atom1: 'pb2', atom2: 'br6', type: 'ionic', length: 2.96, strength: 0.85, vibrationFreq: 150 },
    ],
    unitCellDimensions: { x: 8.322, y: 8.322, z: 11.85 },
    properties: {
      bandgap: 2.30,
      plqy: 92.1,
      stability: 72,
      emissionWavelength: 530,
      efficiency: 21.3,
      molarMass: 367.0,
      density: 3.83,
      melting_point: 236,
    },
    visualization: {
      defaultView: 'ball-stick',
      backgroundColor: '#1e293b',
      lighting: 'ambient',
      animation: 'rotation',
      colorScheme: 'element',
    },
    description: '四方相MAPbBr₃是一种高效的绿光发射钙钛矿材料，具有高PLQY和优异的光学性能。',
    applications: ['绿光LED', '显示技术', '光伏器件', '光学传感器'],
    synthesisRoute: '溶液法、蒸发结晶法'
  },

  // 3. Formamidinium Lead Iodide - Complex Structure
  {
    id: 'fapbi3_alpha',
    name: 'α相甲脒铅碘',
    formula: 'FAPbI₃',
    category: '甲脒基钙钛矿',
    crystalSystem: 'trigonal',
    latticeParameters: { a: 8.971, b: 8.971, c: 11.01, alpha: 90, beta: 90, gamma: 120 },
    atoms: [
      // FA cations (simplified representation)
      { id: 'fa1', element: 'C', x: 2.99, y: 2.99, z: 2.75, radius: 0.76, color: ATOMIC_COLORS.C, mass: 45.0 },
      { id: 'fa2', element: 'C', x: 5.98, y: 5.98, z: 8.26, radius: 0.76, color: ATOMIC_COLORS.C, mass: 45.0 },
      // Pb atoms in octahedral coordination
      { id: 'pb1', element: 'Pb', x: 0, y: 0, z: 0, radius: 1.54, color: ATOMIC_COLORS.Pb, mass: 207.2 },
      { id: 'pb2', element: 'Pb', x: 4.485, y: 2.59, z: 5.505, radius: 1.54, color: ATOMIC_COLORS.Pb, mass: 207.2 },
      { id: 'pb3', element: 'Pb', x: 2.24, y: 6.72, z: 5.505, radius: 1.54, color: ATOMIC_COLORS.Pb, mass: 207.2 },
      // I atoms
      { id: 'i1', element: 'I', x: 1.49, y: 2.59, z: 0, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i2', element: 'I', x: 2.99, y: 0, z: 2.75, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i3', element: 'I', x: 0, y: 1.49, z: 2.75, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i4', element: 'I', x: 5.98, y: 3.87, z: 5.505, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i5', element: 'I', x: 4.485, y: 5.18, z: 8.26, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i6', element: 'I', x: 2.99, y: 4.31, z: 8.26, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
    ],
    bonds: [
      { id: 'pb1-i1', atom1: 'pb1', atom2: 'i1', type: 'ionic', length: 3.18, strength: 0.8, vibrationFreq: 140 },
      { id: 'pb1-i2', atom1: 'pb1', atom2: 'i2', type: 'ionic', length: 3.18, strength: 0.8, vibrationFreq: 140 },
      { id: 'pb1-i3', atom1: 'pb1', atom2: 'i3', type: 'ionic', length: 3.18, strength: 0.8, vibrationFreq: 140 },
      { id: 'pb2-i4', atom1: 'pb2', atom2: 'i4', type: 'ionic', length: 3.18, strength: 0.8, vibrationFreq: 140 },
      { id: 'pb2-i5', atom1: 'pb2', atom2: 'i5', type: 'ionic', length: 3.18, strength: 0.8, vibrationFreq: 140 },
      { id: 'pb3-i6', atom1: 'pb3', atom2: 'i6', type: 'ionic', length: 3.18, strength: 0.8, vibrationFreq: 140 },
    ],
    unitCellDimensions: { x: 8.971, y: 8.971, z: 11.01 },
    properties: {
      bandgap: 1.48,
      plqy: 68.5,
      stability: 78,
      emissionWavelength: 780,
      efficiency: 16.8,
      molarMass: 507.0,
      density: 4.05,
      melting_point: 285,
    },
    visualization: {
      defaultView: 'space-fill',
      backgroundColor: '#334155',
      lighting: 'spot',
      animation: 'breathing',
      colorScheme: 'element',
    },
    description: 'α相FAPbI₃具有优异的近红外发光性能，是制备高效钙钛矿太阳能电池的重要材料。',
    applications: ['近红外LED', '太阳能电池', '光通信', '生物成像'],
    synthesisRoute: '热处理法、溶剂工程法'
  },

  // 4. Double Perovskite - Cs2AgBiBr6
  {
    id: 'cs2agbibr6',
    name: '双钙钛矿铯银铋溴',
    formula: 'Cs₂AgBiBr₆',
    category: '无铅双钙钛矿',
    crystalSystem: 'cubic',
    latticeParameters: { a: 11.271, b: 11.271, c: 11.271, alpha: 90, beta: 90, gamma: 90 },
    atoms: [
      // Cs atoms
      { id: 'cs1', element: 'Cs', x: 2.818, y: 2.818, z: 2.818, radius: 2.44, color: ATOMIC_COLORS.Cs, mass: 132.9 },
      { id: 'cs2', element: 'Cs', x: 8.453, y: 8.453, z: 8.453, radius: 2.44, color: ATOMIC_COLORS.Cs, mass: 132.9 },
      // Ag atom
      { id: 'ag1', element: 'Ag', x: 0, y: 0, z: 0, radius: 1.65, color: ATOMIC_COLORS.Ag, mass: 107.9 },
      // Bi atom
      { id: 'bi1', element: 'Bi', x: 5.635, y: 5.635, z: 5.635, radius: 1.56, color: ATOMIC_COLORS.Bi, mass: 209.0 },
      // Br atoms coordinating Ag
      { id: 'br1', element: 'Br', x: 2.82, y: 0, z: 0, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
      { id: 'br2', element: 'Br', x: 0, y: 2.82, z: 0, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
      { id: 'br3', element: 'Br', x: 0, y: 0, z: 2.82, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
      // Br atoms coordinating Bi
      { id: 'br4', element: 'Br', x: 8.45, y: 5.635, z: 5.635, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
      { id: 'br5', element: 'Br', x: 5.635, y: 8.45, z: 5.635, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
      { id: 'br6', element: 'Br', x: 5.635, y: 5.635, z: 8.45, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
    ],
    bonds: [
      { id: 'ag-br1', atom1: 'ag1', atom2: 'br1', type: 'metallic', length: 2.82, strength: 0.7, vibrationFreq: 180 },
      { id: 'ag-br2', atom1: 'ag1', atom2: 'br2', type: 'metallic', length: 2.82, strength: 0.7, vibrationFreq: 180 },
      { id: 'ag-br3', atom1: 'ag1', atom2: 'br3', type: 'metallic', length: 2.82, strength: 0.7, vibrationFreq: 180 },
      { id: 'bi-br4', atom1: 'bi1', atom2: 'br4', type: 'ionic', length: 2.82, strength: 0.75, vibrationFreq: 160 },
      { id: 'bi-br5', atom1: 'bi1', atom2: 'br5', type: 'ionic', length: 2.82, strength: 0.75, vibrationFreq: 160 },
      { id: 'bi-br6', atom1: 'bi1', atom2: 'br6', type: 'ionic', length: 2.82, strength: 0.75, vibrationFreq: 160 },
    ],
    unitCellDimensions: { x: 11.271, y: 11.271, z: 11.271 },
    properties: {
      bandgap: 2.10,
      plqy: 78.9,
      stability: 95,
      emissionWavelength: 590,
      efficiency: 22.4,
      molarMass: 899.4,
      density: 5.34,
      melting_point: 450,
    },
    visualization: {
      defaultView: 'ball-stick',
      backgroundColor: '#475569',
      lighting: 'directional',
      animation: 'rotation',
      colorScheme: 'element',
    },
    description: '双钙钛矿Cs₂AgBiBr₆是一种无铅、高稳定性的钙钛矿材料，具有独特的电子结构。',
    applications: ['无铅太阳能电池', '稳定光电器件', '环境友好LED'],
    synthesisRoute: '机械球磨法、溶液法'
  },

  // 5. 2D Layered Perovskite - (BA)2PbI4
  {
    id: 'ba2pbi4',
    name: '二维层状钙钛矿',
    formula: '(BA)₂PbI₄',
    category: '二维钙钛矿',
    crystalSystem: 'orthorhombic',
    latticeParameters: { a: 8.75, b: 8.93, c: 27.6, alpha: 90, beta: 90, gamma: 90 },
    atoms: [
      // BA organic layers (simplified)
      { id: 'ba1', element: 'C', x: 2.19, y: 4.46, z: 6.9, radius: 0.76, color: ATOMIC_COLORS.C, mass: 74.1 },
      { id: 'ba2', element: 'C', x: 6.56, y: 4.46, z: 20.7, radius: 0.76, color: ATOMIC_COLORS.C, mass: 74.1 },
      // Pb atoms in inorganic layer
      { id: 'pb1', element: 'Pb', x: 4.375, y: 2.23, z: 13.8, radius: 1.54, color: ATOMIC_COLORS.Pb, mass: 207.2 },
      { id: 'pb2', element: 'Pb', x: 4.375, y: 6.70, z: 13.8, radius: 1.54, color: ATOMIC_COLORS.Pb, mass: 207.2 },
      // I atoms
      { id: 'i1', element: 'I', x: 0, y: 2.23, z: 13.8, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i2', element: 'I', x: 8.75, y: 2.23, z: 13.8, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i3', element: 'I', x: 4.375, y: 0, z: 13.8, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i4', element: 'I', x: 4.375, y: 4.46, z: 10.35, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i5', element: 'I', x: 4.375, y: 4.46, z: 17.25, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'i6', element: 'I', x: 0, y: 6.70, z: 13.8, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
    ],
    bonds: [
      { id: 'pb1-i1', atom1: 'pb1', atom2: 'i1', type: 'ionic', length: 3.18, strength: 0.8, vibrationFreq: 130 },
      { id: 'pb1-i3', atom1: 'pb1', atom2: 'i3', type: 'ionic', length: 3.18, strength: 0.8, vibrationFreq: 130 },
      { id: 'pb1-i4', atom1: 'pb1', atom2: 'i4', type: 'ionic', length: 3.45, strength: 0.8, vibrationFreq: 130 },
      { id: 'pb2-i2', atom1: 'pb2', atom2: 'i2', type: 'ionic', length: 3.18, strength: 0.8, vibrationFreq: 130 },
      { id: 'pb2-i5', atom1: 'pb2', atom2: 'i5', type: 'ionic', length: 3.45, strength: 0.8, vibrationFreq: 130 },
      { id: 'pb2-i6', atom1: 'pb2', atom2: 'i6', type: 'ionic', length: 3.18, strength: 0.8, vibrationFreq: 130 },
    ],
    unitCellDimensions: { x: 8.75, y: 8.93, z: 27.6 },
    properties: {
      bandgap: 2.40,
      plqy: 88.3,
      stability: 88,
      emissionWavelength: 515,
      efficiency: 19.8,
      molarMass: 691.2,
      density: 3.22,
      melting_point: 195,
    },
    visualization: {
      defaultView: 'wireframe',
      backgroundColor: '#1e293b',
      lighting: 'ambient',
      animation: 'none',
      colorScheme: 'element',
    },
    description: '二维层状钙钛矿(BA)₂PbI₄具有量子限域效应，展现出独特的激子性质和高稳定性。',
    applications: ['高效率LED', '激光器', '光电探测器', '太阳能电池'],
    synthesisRoute: '溶液法、热蒸发法'
  },

  // 6. Mixed Halide Perovskite - CsPb(Br0.5I0.5)3
  {
    id: 'cspb_br_i_mixed',
    name: '混合卤素钙钛矿',
    formula: 'CsPb(Br₀.₅I₀.₅)₃',
    category: '混合卤素钙钛矿',
    crystalSystem: 'cubic',
    latticeParameters: { a: 5.92, b: 5.92, c: 5.92, alpha: 90, beta: 90, gamma: 90 },
    atoms: [
      { id: 'cs1', element: 'Cs', x: 0, y: 0, z: 0, radius: 2.44, color: ATOMIC_COLORS.Cs, mass: 132.9 },
      { id: 'pb1', element: 'Pb', x: 2.96, y: 2.96, z: 2.96, radius: 1.54, color: ATOMIC_COLORS.Pb, mass: 207.2 },
      // Mixed halides - Br and I alternating
      { id: 'br1', element: 'Br', x: 2.96, y: 0, z: 0, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
      { id: 'i1', element: 'I', x: 0, y: 2.96, z: 0, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'br2', element: 'Br', x: 0, y: 0, z: 2.96, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
      { id: 'i2', element: 'I', x: 5.92, y: 2.96, z: 2.96, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
      { id: 'br3', element: 'Br', x: 2.96, y: 5.92, z: 2.96, radius: 1.20, color: ATOMIC_COLORS.Br, mass: 79.9 },
      { id: 'i3', element: 'I', x: 2.96, y: 2.96, z: 5.92, radius: 1.39, color: ATOMIC_COLORS.I, mass: 126.9 },
    ],
    bonds: [
      { id: 'pb-br1', atom1: 'pb1', atom2: 'br1', type: 'ionic', length: 2.96, strength: 0.82, vibrationFreq: 155 },
      { id: 'pb-i1', atom1: 'pb1', atom2: 'i1', type: 'ionic', length: 2.96, strength: 0.78, vibrationFreq: 145 },
      { id: 'pb-br2', atom1: 'pb1', atom2: 'br2', type: 'ionic', length: 2.96, strength: 0.82, vibrationFreq: 155 },
      { id: 'pb-i2', atom1: 'pb1', atom2: 'i2', type: 'ionic', length: 2.96, strength: 0.78, vibrationFreq: 145 },
      { id: 'pb-br3', atom1: 'pb1', atom2: 'br3', type: 'ionic', length: 2.96, strength: 0.82, vibrationFreq: 155 },
      { id: 'pb-i3', atom1: 'pb1', atom2: 'i3', type: 'ionic', length: 2.96, strength: 0.78, vibrationFreq: 145 },
    ],
    unitCellDimensions: { x: 5.92, y: 5.92, z: 5.92 },
    properties: {
      bandgap: 1.90,
      plqy: 84.7,
      stability: 82,
      emissionWavelength: 600,
      efficiency: 20.1,
      molarMass: 437.0,
      density: 4.26,
      melting_point: 385,
    },
    visualization: {
      defaultView: 'ball-stick',
      backgroundColor: '#0f172a',
      lighting: 'directional',
      animation: 'vibration',
      colorScheme: 'element',
    },
    description: '混合卤素钙钛矿通过调节Br/I比例可以精确控制带隙和发射波长，实现全光谱调控。',
    applications: ['可调色LED', '多色显示', '光谱可调激光', '彩色太阳能电池'],
    synthesisRoute: '溶液法、离子交换法'
  }
];

// Visualization utility functions
export const getStructureById = (id: string): MolecularStructure | undefined => {
  return ENHANCED_MOLECULAR_STRUCTURES.find(struct => struct.id === id);
};

export const getStructuresByCategory = (category: string): MolecularStructure[] => {
  return ENHANCED_MOLECULAR_STRUCTURES.filter(struct => struct.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(ENHANCED_MOLECULAR_STRUCTURES.map(struct => struct.category)));
};

export const calculateBondLength = (atom1: AtomData, atom2: AtomData): number => {
  return Math.sqrt(
    Math.pow(atom2.x - atom1.x, 2) + 
    Math.pow(atom2.y - atom1.y, 2) + 
    Math.pow(atom2.z - atom1.z, 2)
  );
};

export const generateVibrationalModes = (structure: MolecularStructure): any[] => {
  return structure.bonds.map((bond, index) => ({
    mode: index + 1,
    frequency: bond.vibrationFreq || 150,
    amplitude: 0.1 + Math.random() * 0.05,
    phase: Math.random() * 2 * Math.PI,
    type: bond.type === 'ionic' ? 'stretch' : 'bend'
  }));
};
