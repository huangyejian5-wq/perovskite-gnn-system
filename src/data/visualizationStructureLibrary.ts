import {
  ENHANCED_MOLECULAR_STRUCTURES,
  MolecularStructure,
} from './molecularStructures';
import {
  EXPERIMENTAL_BANDGAP_RECORDS,
  SCREENED_CANDIDATE_RECORDS,
} from './researchDatasets';
import { MP_FULL_RECORDS } from './mpFullLibrary';

const TEMPLATE_IDS = {
  cs3d: 'cspbi3_cubic',
  ma3d: 'mapbbr3_tetragonal',
  fa3d: 'fapbi3_alpha',
  layered: 'ba2pbi4',
  double: 'cs2agbibr6',
  mixed: 'cspb_br_i_mixed',
} as const;

const TEMPLATE_MAP = Object.fromEntries(
  ENHANCED_MOLECULAR_STRUCTURES.map((structure) => [structure.id, structure])
) as Record<string, MolecularStructure>;

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48);

const cloneTemplate = (
  prototype: MolecularStructure,
  overrides: Partial<MolecularStructure> & { id: string }
): MolecularStructure => {
  const atomIdMap = new Map<string, string>();
  const atoms = prototype.atoms.map((atom) => {
    const mappedId = `${overrides.id}-${atom.id}`;
    atomIdMap.set(atom.id, mappedId);
    return { ...atom, id: mappedId };
  });

  const bonds = prototype.bonds.map((bond) => ({
    ...bond,
    id: `${overrides.id}-${bond.id}`,
    atom1: atomIdMap.get(bond.atom1) || bond.atom1,
    atom2: atomIdMap.get(bond.atom2) || bond.atom2,
  }));

  return {
    ...prototype,
    ...overrides,
    atoms,
    bonds,
    properties: {
      ...prototype.properties,
      ...(overrides.properties || {}),
    },
    visualization: {
      ...prototype.visualization,
      ...(overrides.visualization || {}),
    },
    applications: overrides.applications || prototype.applications,
  };
};

const inferTemplate = (formula: string, hints: string[]) => {
  const text = `${formula} ${hints.join(' ')}`.toLowerCase();

  if (text.includes('layered') || text.includes('2d') || text.includes('quasi')) {
    return TEMPLATE_MAP[TEMPLATE_IDS.layered];
  }
  if (text.includes('double') || text.includes('vacancy') || text.includes('a2b1b2x6')) {
    return TEMPLATE_MAP[TEMPLATE_IDS.double];
  }
  if (formula.includes('Br') && formula.includes('I')) {
    return TEMPLATE_MAP[TEMPLATE_IDS.mixed];
  }
  if (text.includes('fa')) {
    return TEMPLATE_MAP[TEMPLATE_IDS.fa3d];
  }
  if (text.includes('ma')) {
    return TEMPLATE_MAP[TEMPLATE_IDS.ma3d];
  }
  return TEMPLATE_MAP[TEMPLATE_IDS.cs3d];
};

const deriveEmissionFromBandgap = (bandgap: number | null) => {
  if (bandgap === null || bandgap <= 0) return null;
  return Math.round(1240 / bandgap);
};

const uniqueByFormula = <T>(
  records: T[],
  getFormula: (record: T) => string,
  limit: number
) => {
  const seen = new Set<string>();
  const result: T[] = [];

  for (const record of records) {
    const formula = getFormula(record);
    if (!formula || seen.has(formula)) continue;
    seen.add(formula);
    result.push(record);
    if (result.length >= limit) break;
  }

  return result;
};

const experimentalLinkedStructures = uniqueByFormula(
  [...EXPERIMENTAL_BANDGAP_RECORDS].sort((a, b) => {
    const confidenceRank = { A: 0, B: 1, C: 2 };
    const confidenceDelta =
      (confidenceRank[a.confidenceGrade as keyof typeof confidenceRank] ?? 9) -
      (confidenceRank[b.confidenceGrade as keyof typeof confidenceRank] ?? 9);
    if (confidenceDelta !== 0) return confidenceDelta;
    return (b.year || 0) - (a.year || 0);
  }),
  (record) => record.formula,
  36
).map((record) => {
  const prototype = inferTemplate(record.formula, [record.compoundClass, record.crystalStructure]);
  return cloneTemplate(prototype, {
    id: `viz-exp-${slugify(record.formula)}`,
    name: record.formula,
    formula: record.formula,
    category: '实验联动模板',
    crystalSystem: record.crystalStructure || prototype.crystalSystem,
    description: `真实实验公式联动的模板结构视图: ${record.formula}`,
    applications: ['实验联动', record.compoundClass || 'Perovskite'],
    synthesisRoute: record.measurementMethod || undefined,
    properties: {
      bandgap: record.experimentalBandgapEV,
      plqy: null,
      stability: null,
      emissionWavelength: deriveEmissionFromBandgap(record.experimentalBandgapEV),
      efficiency: null,
      molarMass: null,
      density: null,
    },
    source: {
      type: 'experimental',
      label: '实验联动模板',
      templateBasis: prototype.name,
      confidence: record.confidenceGrade,
    },
  });
});

const screenedLinkedStructures = uniqueByFormula(
  [...SCREENED_CANDIDATE_RECORDS].sort((a, b) => {
    const rescuedDelta = Number(b.isFalseMetalRescued) - Number(a.isFalseMetalRescued);
    if (rescuedDelta !== 0) return rescuedDelta;
    return (a.predictionStdEV ?? 99) - (b.predictionStdEV ?? 99);
  }),
  (record) => record.formula,
  48
).map((record) => {
  const prototype = inferTemplate(record.formula, []);
  return cloneTemplate(prototype, {
    id: `viz-screen-${slugify(record.formula)}`,
    name: record.formula,
    formula: record.formula,
    category: '筛选联动模板',
    crystalSystem: prototype.crystalSystem,
    description: `筛选候选公式联动的模板结构视图: ${record.formula}`,
    applications: [
      '候选联动',
      record.isFalseMetalRescued ? 'False-metal rescue' : 'Screening candidate',
    ],
    properties: {
      bandgap: record.predictedBandgapEV,
      plqy: null,
      stability: record.predictionStdEV,
      emissionWavelength: deriveEmissionFromBandgap(record.predictedBandgapEV),
      efficiency: null,
      molarMass: null,
      density: null,
    },
    source: {
      type: 'screened',
      label: '筛选联动模板',
      templateBasis: prototype.name,
      note: record.isFalseMetalRescued ? 'Rescued candidate' : 'General candidate',
    },
  });
});

const mpLinkedStructures = uniqueByFormula(
  [...MP_FULL_RECORDS].sort((a, b) => {
    const rescuedDelta = Number(b.rescuedFalseMetal) - Number(a.rescuedFalseMetal);
    if (rescuedDelta !== 0) return rescuedDelta;
    return (b.finalPredictedBandgapEV ?? 0) - (a.finalPredictedBandgapEV ?? 0);
  }).filter((record) => record.finalPredictedBandgapEV !== null),
  (record) => record.formula,
  72
).map((record) => {
  const prototype = inferTemplate(record.formula, [record.family]);
  return cloneTemplate(prototype, {
    id: `viz-mp-${slugify(record.formula)}`,
    name: record.formula,
    formula: record.formula,
    category: 'MP联动模板',
    crystalSystem: record.family || prototype.crystalSystem,
    description: `MP 公式联动的模板结构视图: ${record.formula}`,
    applications: ['MP联动', record.rescuedFalseMetal ? 'Rescued MP candidate' : 'MP reference'],
    properties: {
      bandgap: record.finalPredictedBandgapEV,
      plqy: null,
      stability: null,
      emissionWavelength: deriveEmissionFromBandgap(record.finalPredictedBandgapEV),
      efficiency: null,
      molarMass: null,
      density: null,
    },
    source: {
      type: 'mp',
      label: 'MP联动模板',
      templateBasis: prototype.name,
      note: record.rescuedFalseMetal ? 'False-metal rescued' : undefined,
    },
  });
});

export const VISUALIZATION_STRUCTURE_LIBRARY: MolecularStructure[] = [
  ...ENHANCED_MOLECULAR_STRUCTURES.map((structure) => ({
    ...structure,
    source: {
      type: 'template' as const,
      label: '精选结构模板',
      templateBasis: structure.name,
    },
  })),
  ...experimentalLinkedStructures,
  ...screenedLinkedStructures,
  ...mpLinkedStructures,
];

export const VISUALIZATION_LIBRARY_SUMMARY = {
  totalStructures: VISUALIZATION_STRUCTURE_LIBRARY.length,
  templateCount: ENHANCED_MOLECULAR_STRUCTURES.length,
  experimentalLinkedCount: experimentalLinkedStructures.length,
  screenedLinkedCount: screenedLinkedStructures.length,
  mpLinkedCount: mpLinkedStructures.length,
};

export const getVisualizationCategories = (): string[] =>
  Array.from(new Set(VISUALIZATION_STRUCTURE_LIBRARY.map((structure) => structure.category)));

export const getVisualizationStructuresByCategory = (category: string): MolecularStructure[] =>
  VISUALIZATION_STRUCTURE_LIBRARY.filter((structure) => structure.category === category);
