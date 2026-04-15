// 扩展的钙钛矿材料数据库
export const EXTENDED_MATERIAL_DATABASE = [
  // 经典铯基钙钛矿
  {
    id: 'CsPbI3',
    formula: 'CsPbI₃',
    type: '铯基钙钛矿',
    structure: 'cubic',
    properties: {
      bandgap: 1.73,
      plqy: 76.2,
      stability: 85,
      emissionWavelength: 680,
      efficiency: 18.5,
      absorptionCoeff: 15000,
      carrierLifetime: 245,
      stokesShift: 25
    },
    synthesis: {
      temperature: 320,
      time: 4,
      solvent: 'DMF',
      precursors: ['CsI', 'PbI2'],
      atmosphere: 'N2'
    },
    applications: ['太阳能电池', '发光二极管', '激光器'],
    references: ['Nature 2023', 'Science 2022'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300'
  },
  {
    id: 'CsPbBr3',
    formula: 'CsPbBr₃',
    type: '铯基钙钛矿',
    structure: 'cubic',
    properties: {
      bandgap: 2.25,
      plqy: 89.3,
      stability: 90,
      emissionWavelength: 520,
      efficiency: 19.7,
      absorptionCoeff: 12000,
      carrierLifetime: 180,
      stokesShift: 15
    },
    synthesis: {
      temperature: 280,
      time: 3,
      solvent: 'DMSO',
      precursors: ['CsBr', 'PbBr2'],
      atmosphere: 'N2'
    },
    applications: ['绿光LED', '显示器', '激光器'],
    references: ['Nature Materials 2023', 'ACS Nano 2022'],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300'
  },
  {
    id: 'CsPbCl3',
    formula: 'CsPbCl₃',
    type: '铯基钙钛矿',
    structure: 'cubic',
    properties: {
      bandgap: 2.9,
      plqy: 65.4,
      stability: 95,
      emissionWavelength: 410,
      efficiency: 16.8,
      absorptionCoeff: 8000,
      carrierLifetime: 120,
      stokesShift: 35
    },
    synthesis: {
      temperature: 250,
      time: 2,
      solvent: 'DMF',
      precursors: ['CsCl', 'PbCl2'],
      atmosphere: 'Ar'
    },
    applications: ['紫外LED', '光探测器'],
    references: ['Advanced Materials 2023'],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=300'
  },
  
  // 甲胺基钙钛矿
  {
    id: 'MAPbI3',
    formula: 'MAPbI₃',
    type: '甲胺基钙钛矿',
    structure: 'tetragonal',
    properties: {
      bandgap: 1.55,
      plqy: 68.5,
      stability: 78,
      emissionWavelength: 780,
      efficiency: 16.8,
      absorptionCoeff: 25000,
      carrierLifetime: 350,
      stokesShift: 40
    },
    synthesis: {
      temperature: 100,
      time: 1,
      solvent: 'GBL',
      precursors: ['MAI', 'PbI2'],
      atmosphere: 'dry air'
    },
    applications: ['太阳能电池', '光伏器件'],
    references: ['Science 2023', 'Nature Energy 2022'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300'
  },
  {
    id: 'MAPbBr3',
    formula: 'MAPbBr₃',
    type: '甲胺基钙钛矿',
    structure: 'cubic',
    properties: {
      bandgap: 2.3,
      plqy: 92.1,
      stability: 72,
      emissionWavelength: 530,
      efficiency: 21.3,
      absorptionCoeff: 18000,
      carrierLifetime: 280,
      stokesShift: 18
    },
    synthesis: {
      temperature: 120,
      time: 1.5,
      solvent: 'DMF',
      precursors: ['MABr', 'PbBr2'],
      atmosphere: 'N2'
    },
    applications: ['绿光LED', '激光器'],
    references: ['Nano Letters 2023', 'JACS 2022'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'
  },
  
  // 甲脒基钙钛矿
  {
    id: 'FAPbI3',
    formula: 'FAPbI₃',
    type: '甲脒基钙钛矿',
    structure: 'cubic',
    properties: {
      bandgap: 1.48,
      plqy: 73.8,
      stability: 82,
      emissionWavelength: 800,
      efficiency: 18.9,
      absorptionCoeff: 28000,
      carrierLifetime: 420,
      stokesShift: 35
    },
    synthesis: {
      temperature: 150,
      time: 2,
      solvent: 'DMF/DMSO',
      precursors: ['FAI', 'PbI2'],
      atmosphere: 'N2'
    },
    applications: ['高效太阳能电池', '近红外LED'],
    references: ['Nature Photonics 2023', 'Cell 2022'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300'
  },
  
  // 混合钙钛矿
  {
    id: 'CsPbBrI2',
    formula: 'CsPb(Br₀.₅I₀.₅)₃',
    type: '混合钙钛矿',
    structure: 'cubic',
    properties: {
      bandgap: 1.9,
      plqy: 84.7,
      stability: 82,
      emissionWavelength: 600,
      efficiency: 20.1,
      absorptionCoeff: 16000,
      carrierLifetime: 210,
      stokesShift: 28
    },
    synthesis: {
      temperature: 300,
      time: 3.5,
      solvent: 'ODE/OA',
      precursors: ['CsBr', 'CsI', 'PbBr2', 'PbI2'],
      atmosphere: 'N2'
    },
    applications: ['橙光LED', '全色显示'],
    references: ['Advanced Functional Materials 2023'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300'
  },
  
  // 无铅双钙钛矿
  {
    id: 'Cs2AgBiBr6',
    formula: 'Cs₂AgBiBr₆',
    type: '无铅双钙钛矿',
    structure: 'cubic',
    properties: {
      bandgap: 2.1,
      plqy: 78.9,
      stability: 95,
      emissionWavelength: 590,
      efficiency: 22.4,
      absorptionCoeff: 14000,
      carrierLifetime: 185,
      stokesShift: 22
    },
    synthesis: {
      temperature: 350,
      time: 4,
      solvent: 'HBr/H2O',
      precursors: ['CsBr', 'AgBr', 'BiBr3'],
      atmosphere: 'air'
    },
    applications: ['环保LED', '光伏器件'],
    references: ['Joule 2023', 'Nature Communications 2022'],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300'
  },
  {
    id: 'Cs2AgInCl6',
    formula: 'Cs₂AgInCl₆',
    type: '无铅双钙钛矿',
    structure: 'cubic',
    properties: {
      bandgap: 2.6,
      plqy: 68.2,
      stability: 92,
      emissionWavelength: 460,
      efficiency: 18.7,
      absorptionCoeff: 11000,
      carrierLifetime: 145,
      stokesShift: 30
    },
    synthesis: {
      temperature: 320,
      time: 3,
      solvent: 'HCl/H2O',
      precursors: ['CsCl', 'AgCl', 'InCl3'],
      atmosphere: 'N2'
    },
    applications: ['蓝光LED', '光探测器'],
    references: ['Chemistry of Materials 2023'],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=300'
  },
  
  // 层状钙钛矿
  {
    id: 'BA2PbI4',
    formula: 'BA₂PbI₄',
    type: '层状钙钛矿',
    structure: 'orthorhombic',
    properties: {
      bandgap: 2.4,
      plqy: 88.3,
      stability: 88,
      emissionWavelength: 515,
      efficiency: 19.8,
      absorptionCoeff: 20000,
      carrierLifetime: 320,
      stokesShift: 20
    },
    synthesis: {
      temperature: 200,
      time: 6,
      solvent: 'toluene',
      precursors: ['BAI', 'PbI2'],
      atmosphere: 'N2'
    },
    applications: ['量子阱LED', '激子器件'],
    references: ['Nature Materials 2023'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300'
  },
  {
    id: 'PEA2PbBr4',
    formula: 'PEA₂PbBr₄',
    type: '层状钙钛矿',
    structure: 'orthorhombic',
    properties: {
      bandgap: 2.9,
      plqy: 92.5,
      stability: 85,
      emissionWavelength: 425,
      efficiency: 20.3,
      absorptionCoeff: 18000,
      carrierLifetime: 280,
      stokesShift: 25
    },
    synthesis: {
      temperature: 180,
      time: 5,
      solvent: 'toluene/octane',
      precursors: ['PEABr', 'PbBr2'],
      atmosphere: 'Ar'
    },
    applications: ['蓝绿光LED', '高效显示'],
    references: ['Advanced Materials 2023'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'
  },
  
  // 掺杂钙钛矿
  {
    id: 'CsPbI3-Mn',
    formula: 'CsPbI₃:Mn²⁺',
    type: '掺杂钙钛矿',
    structure: 'cubic',
    properties: {
      bandgap: 1.75,
      plqy: 85.6,
      stability: 88,
      emissionWavelength: 620,
      efficiency: 21.2,
      absorptionCoeff: 16000,
      carrierLifetime: 380,
      stokesShift: 180
    },
    synthesis: {
      temperature: 340,
      time: 4,
      solvent: 'ODE/OA',
      precursors: ['CsI', 'PbI2', 'MnCl2'],
      atmosphere: 'N2'
    },
    applications: ['橙红光LED', '磁光器件'],
    references: ['Nano Letters 2023'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300'
  },
  {
    id: 'CsPbCl3-Eu',
    formula: 'CsPbCl₃:Eu³⁺',
    type: '掺杂钙钛矿',
    structure: 'cubic',
    properties: {
      bandgap: 2.95,
      plqy: 75.8,
      stability: 93,
      emissionWavelength: 395,
      efficiency: 18.4,
      absorptionCoeff: 9000,
      carrierLifetime: 450,
      stokesShift: 45
    },
    synthesis: {
      temperature: 260,
      time: 3,
      solvent: 'DMF',
      precursors: ['CsCl', 'PbCl2', 'EuCl3'],
      atmosphere: 'N2'
    },
    applications: ['UV-LED', '稀土发光'],
    references: ['Chemical Science 2023'],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=300'
  },
  
  // 纳米线/纳米片
  {
    id: 'CsPbBr3-NW',
    formula: 'CsPbBr₃ (纳米线)',
    type: '一维钙钛矿',
    structure: 'cubic',
    properties: {
      bandgap: 2.2,
      plqy: 95.2,
      stability: 86,
      emissionWavelength: 525,
      efficiency: 23.1,
      absorptionCoeff: 22000,
      carrierLifetime: 420,
      stokesShift: 12
    },
    synthesis: {
      temperature: 160,
      time: 8,
      solvent: 'toluene',
      precursors: ['CsBr', 'PbBr2', '配体'],
      atmosphere: 'N2'
    },
    applications: ['激光器', '光波导'],
    references: ['Science 2023'],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300'
  },
  
  // 新兴材料
  {
    id: 'CsSnI3',
    formula: 'CsSnI₃',
    type: '锡基钙钛矿',
    structure: 'orthorhombic',
    properties: {
      bandgap: 1.3,
      plqy: 45.2,
      stability: 65,
      emissionWavelength: 950,
      efficiency: 12.8,
      absorptionCoeff: 30000,
      carrierLifetime: 180,
      stokesShift: 50
    },
    synthesis: {
      temperature: 180,
      time: 2,
      solvent: 'DMSO',
      precursors: ['CsI', 'SnI2'],
      atmosphere: 'N2'
    },
    applications: ['近红外器件', '生物成像'],
    references: ['Advanced Energy Materials 2023'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300'
  },
  {
    id: 'FASnI3',
    formula: 'FASnI₃',
    type: '锡基钙钛矿',
    structure: 'cubic',
    properties: {
      bandgap: 1.41,
      plqy: 52.7,
      stability: 58,
      emissionWavelength: 880,
      efficiency: 14.3,
      absorptionCoeff: 32000,
      carrierLifetime: 210,
      stokesShift: 42
    },
    synthesis: {
      temperature: 200,
      time: 1.5,
      solvent: 'DMF',
      precursors: ['FAI', 'SnI2'],
      atmosphere: 'N2'
    },
    applications: ['太阳能电池', 'IR-LED'],
    references: ['Nature Energy 2023'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300'
  }
];

// 材料分类索引
export const MATERIAL_CATEGORIES = {
  'cesium': ['CsPbI3', 'CsPbBr3', 'CsPbCl3', 'CsPbBrI2', 'CsPbI3-Mn', 'CsPbCl3-Eu', 'CsPbBr3-NW'],
  'methylammonium': ['MAPbI3', 'MAPbBr3'],
  'formamidinium': ['FAPbI3'],
  'leadFree': ['Cs2AgBiBr6', 'Cs2AgInCl6'],
  'layered': ['BA2PbI4', 'PEA2PbBr4'],
  'tinBased': ['CsSnI3', 'FASnI3'],
  'doped': ['CsPbI3-Mn', 'CsPbCl3-Eu'],
  'nanostructured': ['CsPbBr3-NW']
};

// 性能分组
export const PERFORMANCE_GROUPS = {
  highPLQY: ['CsPbBr3-NW', 'MAPbBr3', 'PEA2PbBr4', 'CsPbBr3', 'BA2PbI4'],
  highStability: ['Cs2AgBiBr6', 'CsPbCl3', 'Cs2AgInCl6', 'CsPbCl3-Eu'],
  nearInfrared: ['CsSnI3', 'FASnI3', 'FAPbI3', 'MAPbI3'],
  visibleLight: ['CsPbI3', 'CsPbBr3', 'MAPbBr3', 'BA2PbI4'],
  ultraviolet: ['CsPbCl3', 'CsPbCl3-Eu', 'PEA2PbBr4']
};

// 应用领域映射
export const APPLICATION_MAP = {
  'solarCells': ['MAPbI3', 'FAPbI3', 'CsPbI3', 'Cs2AgBiBr6', 'FASnI3'],
  'leds': ['CsPbBr3', 'MAPbBr3', 'BA2PbI4', 'CsPbI3-Mn', 'CsPbBr3-NW'],
  'lasers': ['CsPbBr3', 'MAPbBr3', 'CsPbBr3-NW'],
  'displays': ['CsPbBr3', 'CsPbBrI2', 'PEA2PbBr4', 'BA2PbI4'],
  'detectors': ['CsPbCl3', 'Cs2AgInCl6'],
  'bioImaging': ['CsSnI3', 'FASnI3']
};

// 合成方法统计
export const SYNTHESIS_METHODS = {
  solutionProcessed: ['MAPbI3', 'FAPbI3', 'MAPbBr3'],
  hotInjection: ['CsPbI3', 'CsPbBr3', 'CsPbCl3', 'CsPbI3-Mn'],
  layeredGrowth: ['BA2PbI4', 'PEA2PbBr4'],
  solidState: ['Cs2AgBiBr6', 'Cs2AgInCl6'],
  templateGrowth: ['CsPbBr3-NW']
};

// 材料特性范围
export const PROPERTY_RANGES = {
  bandgap: { min: 1.3, max: 2.95, unit: 'eV' },
  plqy: { min: 45.2, max: 95.2, unit: '%' },
  stability: { min: 58, max: 95, unit: 'score' },
  emissionWavelength: { min: 395, max: 950, unit: 'nm' },
  efficiency: { min: 12.8, max: 23.1, unit: '%' },
  carrierLifetime: { min: 120, max: 450, unit: 'ns' }
};

// 合成条件范围
export const SYNTHESIS_RANGES = {
  temperature: { min: 100, max: 350, unit: '°C' },
  time: { min: 1, max: 8, unit: 'hours' },
  atmospheres: ['N2', 'Ar', 'air', 'dry air'],
  solvents: ['DMF', 'DMSO', 'GBL', 'toluene', 'ODE/OA', 'HBr/H2O']
};