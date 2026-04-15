// Auto-generated from perovskite-bandgap-ml-correction research datasets.
// Regenerate by re-running the integration script used on 2026-04-10.

export interface ExperimentalBandgapRecord {
  id: string;
  formula: string;
  compoundClass: string;
  crystalStructure: string;
  formulaStandardized: string;
  experimentalBandgapEV: number | null;
  bandgapCharacter: string;
  measurementMethod: string;
  sampleForm: string;
  measurementTemperature: string;
  isBulk: boolean;
  title: string;
  firstAuthor: string;
  year: number | null;
  doiOrUrl: string;
  recordType: string;
  confidenceGrade: string;
  ggaGapReference: string;
  curationNote: string;
  metadataSource: string;
  qualityFlags: string;
  needsManualReview: boolean;
}

export interface ScreenedCandidateRecord {
  id: string;
  formula: string;
  ggaBandgapEV: number | null;
  predictedBandgapEV: number | null;
  predictionStdEV: number | null;
  isFalseMetalRescued: boolean;
}

export interface ResearchDatasetSummary {
  sourceProject: string;
  integratedAt: string;
  experimentalRecordCount: number;
  screenedCandidateCount: number;
  rescuedFalseMetalCount: number;
  alignedGroundTruthCount: number;
  topExperimentalClasses: Array<{ label: string; count: number }>;
  confidenceDistribution: Array<{ label: string; count: number }>;
  sourceFiles: string[];
}

export const RESEARCH_DATASET_SUMMARY: ResearchDatasetSummary = {
  "sourceProject": "perovskite-bandgap-ml-correction",
  "integratedAt": "2026-04-10",
  "experimentalRecordCount": 133,
  "screenedCandidateCount": 3269,
  "rescuedFalseMetalCount": 1546,
  "alignedGroundTruthCount": 4624,
  "topExperimentalClasses": [
    {
      "label": "single perovskite",
      "count": 100
    },
    {
      "label": "double perovskite",
      "count": 23
    },
    {
      "label": "double perovskite (vacancy-ordered)",
      "count": 4
    },
    {
      "label": "single perovskite (distorted)",
      "count": 2
    },
    {
      "label": "single perovskite (hexagonal)",
      "count": 2
    },
    {
      "label": "layered perovskite",
      "count": 1
    }
  ],
  "confidenceDistribution": [
    {
      "label": "A",
      "count": 76
    },
    {
      "label": "B",
      "count": 53
    },
    {
      "label": "C",
      "count": 4
    }
  ],
  "sourceFiles": [
    "data/experimental_bandgap_metadata_cleaned.csv",
    "results/screened_candidates_final.csv",
    "data/ultimate_experimental_ground_truth.csv"
  ]
};

export const EXPERIMENTAL_BANDGAP_RECORDS: ExperimentalBandgapRecord[] = [
  {
    "id": "exp-001",
    "formula": "EuFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma)",
    "formulaStandardized": "EuFeO3",
    "experimentalBandgapEV": 2.3,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "nanoparticle",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Microwave synthesis of nanoparticulate EuFeO3 and its visible light photocatalytic activity",
    "firstAuthor": "Li et al.",
    "year": 2017,
    "doiOrUrl": "https://doi.org/10.1080/10584587.2017.1352312",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "false metaltypical case",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-002",
    "formula": "Sr2FeMoO6",
    "compoundClass": "double perovskite",
    "crystalStructure": "tetragonal (I4/m)",
    "formulaStandardized": "Sr2FeMoO6",
    "experimentalBandgapEV": 0.7,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "Combined magnetic and optical characterization",
    "sampleForm": "polycrystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Structural defects in Sr2FeMoO6 double perovskite: Experimental versus theoretical approach",
    "firstAuthor": "Navarro et al.",
    "year": 2005,
    "doiOrUrl": "https://doi.org/10.1063/1.1997286",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Half-metallic character, bandgap about 0.7 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-003",
    "formula": "DyAlO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "DyAlO3",
    "experimentalBandgapEV": 5.15,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "VEELS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Structural and optical characterization of DyAlO3 perovskite powders obtained by combustion synthesis",
    "firstAuthor": "Meza-Rocha et al.",
    "year": 2016,
    "doiOrUrl": "https://doi.org/10.1063/1.4946653",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Orthorhombic perovskite, combustion-synthesized powder",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-004",
    "formula": "EuFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "EuFeO3",
    "experimentalBandgapEV": 2.3,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder (nanoparticle)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Microwave synthesis of nanoparticulate EuFeO3 and its visible light photocatalytic activity",
    "firstAuthor": "Li et al.",
    "year": 2017,
    "doiOrUrl": "https://doi.org/10.1080/10584587.2017.1352312",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Microwave synthesis + UV-vis diffuse reflectance experiment; false metal typical case",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-005",
    "formula": "EuFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "EuFeO3",
    "experimentalBandgapEV": 2.39,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis",
    "sampleForm": "nanoparticle",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Influence of Synthetic Conditions on the Crystal Structure, Optical and Magnetic Properties of o-EuFeO3 Nanoparticles",
    "firstAuthor": "Kuznetsova et al.",
    "year": 2023,
    "doiOrUrl": "https://doi.org/10.3390/coatings13061082",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Co-precipitated nanoparticles; non-bulk sample, confidence grade B",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-006",
    "formula": "Sr2FeMoO6",
    "compoundClass": "double perovskite",
    "crystalStructure": "tetragonal (I4/m)",
    "formulaStandardized": "Sr2FeMoO6",
    "experimentalBandgapEV": 0.7,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "Combined magnetic and optical characterization",
    "sampleForm": "polycrystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Structural defects in Sr2FeMoO6 double perovskite: Experimental versus theoretical approach",
    "firstAuthor": "Navarro et al.",
    "year": 2005,
    "doiOrUrl": "https://doi.org/10.1063/1.1997286",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Half-metallic character; GGA false metal typical case",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-007",
    "formula": "DyAlO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "DyAlO3",
    "experimentalBandgapEV": 5.15,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "VEELS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Structural and optical characterization of DyAlO3 perovskite powders obtained by combustion synthesis",
    "firstAuthor": "Meza-Rocha et al.",
    "year": 2016,
    "doiOrUrl": "https://doi.org/10.1063/1.4946653",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Combustion-synthesized orthorhombic perovskite powder; VEELS experiment",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-008",
    "formula": "Ca2FeIrO6",
    "compoundClass": "double perovskite",
    "crystalStructure": "Unknown",
    "formulaStandardized": "Ca2FeIrO6",
    "experimentalBandgapEV": 0.25,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "DFT (consistent with synthesis experiment)",
    "sampleForm": "bulk (computed)",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Electronic structure and estimation of Curie temperature in Ca2BIrO6 (B = Cr, Fe) double perovskites",
    "firstAuthor": "Saha et al.",
    "year": 2021,
    "doiOrUrl": "https://doi.org/10.1063/5.0069884",
    "recordType": "DFT + experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "The synthesized sample is consistent with the DFT value of 0.25 eV; confidence grade B",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-009",
    "formula": "Sr2FeOsO6",
    "compoundClass": "double perovskite",
    "crystalStructure": "Unknown",
    "formulaStandardized": "Sr2FeOsO6",
    "experimentalBandgapEV": 0.125,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "Experimental observation (magnetic / transport)",
    "sampleForm": "bulk",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "First-principle investigations of the peculiar magnetic behavior of Sr2FeOsO6",
    "firstAuthor": "Feng et al.",
    "year": 2014,
    "doiOrUrl": "https://doi.org/10.1002/pssr.201409287",
    "recordType": "DFT + experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0.09 (GGA)",
    "curationNote": "The abstract explicitly cites the experimental value of 0.125 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-010",
    "formula": "RbGeI3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (gamma phase)",
    "formulaStandardized": "RbGeI3",
    "experimentalBandgapEV": 1.38,
    "bandgapCharacter": "Direct",
    "measurementMethod": "DFT (consistent with experiment)",
    "sampleForm": "bulk (computed)",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Oriented tuning the photovoltaic properties of gamma-RbGeX3 by strain-induced electron effective mass mutation",
    "firstAuthor": "Huang et al.",
    "year": 2017,
    "doiOrUrl": "https://doi.org/10.1088/1361-6463/aa8bea",
    "recordType": "DFT + experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "gamma-RbGeI3 direct bandgap of 1.38 eV is consistent with optical absorption experiments",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-011",
    "formula": "RbVO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "Unknown",
    "formulaStandardized": "RbVO3",
    "experimentalBandgapEV": 2.67,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis + PL",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "[Spectral analysis and band gap of RbVO3]",
    "firstAuthor": "Unknown",
    "year": 2010,
    "doiOrUrl": "No DOI (Chinese journal)",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Wet-chemical synthesis + UV-vis + PL experiment; Chinese-language paper without DOI, confidence grade B",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-012",
    "formula": "YBiO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "fluorite-type (Fm3m)",
    "formulaStandardized": "YBiO3",
    "experimentalBandgapEV": 0.5,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Ellipsometry + optical transmission",
    "sampleForm": "thin film (epitaxial)",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Fundamental absorption edges in heteroepitaxial YBiO3 thin films",
    "firstAuthor": "Zhang et al.",
    "year": 2016,
    "doiOrUrl": "https://doi.org/10.1063/1.4962975",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Epitaxial thin film, but the abstract explicitly gives a direct electronic bandgap of 0.5 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-013",
    "formula": "Cs2NaYI6",
    "compoundClass": "double perovskite",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2NaYI6",
    "experimentalBandgapEV": 3.65,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption edge",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Iodide Double Perovskites and the Limits of their Structural Stability",
    "firstAuthor": "Barrón-Palos et al.",
    "year": 2024,
    "doiOrUrl": "https://doi.org/10.1002/chem.202404009",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Single-crystal synthesis + optical-gap experiment; the original file incorrectly used the 3.10 eV value for the Sc compound",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-014",
    "formula": "SrTiO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "SrTiO3",
    "experimentalBandgapEV": 3.25,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "VEELS + Vacuum ultraviolet spectroscopy + ellipsometry",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Bulk electronic structure of SrTiO3: Experiment and theory",
    "firstAuthor": "van Benthem et al.",
    "year": 2001,
    "doiOrUrl": "https://doi.org/10.1063/1.1415766",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.89 (typical GGA value)",
    "curationNote": "Classic experimental reference: indirect 3.25 eV, direct 3.75 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-015",
    "formula": "LuMnO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "hexagonal (P63cm)",
    "formulaStandardized": "LuMnO3",
    "experimentalBandgapEV": 1.55,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "Optical absorption + ferroelectric photovoltaic measurement",
    "sampleForm": "thin film (epitaxial)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Switchable Photovoltaic Effects in Hexagonal Manganite Thin Films Having Narrow Band Gaps",
    "firstAuthor": "Nakamura et al.",
    "year": 2015,
    "doiOrUrl": "https://doi.org/10.1021/acs.chemmater.5b03408",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Hexagonal-phase epitaxial film experiment; the abstract explicitly reports ~1.55 eV, close to the optimal bandgap",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-016",
    "formula": "CaZnO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "Unknown",
    "formulaStandardized": "CaZnO3",
    "experimentalBandgapEV": 2.65,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis transmission spectroscopy",
    "sampleForm": "thin film",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Effect of substrate temperature on the optical and structural properties of CaZnO3 perovskite thin films",
    "firstAuthor": "Al-Hamdi et al.",
    "year": 2023,
    "doiOrUrl": "https://doi.org/10.15251/djnb.2023.181.165",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Spray pyrolysis deposition thin film, substrate temperature 200-350°C; confidence grade B",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "record_type_dft+exp",
    "needsManualReview": true
  },
  {
    "id": "exp-017",
    "formula": "CaZnO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "Unknown",
    "formulaStandardized": "CaZnO3",
    "experimentalBandgapEV": 2.95,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis transmission spectroscopy",
    "sampleForm": "thin film",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Effect of KOH Concentration on the Optical and Structural Properties of Perovskite CaZnO3 Thin films",
    "firstAuthor": "Abdullah et al.",
    "year": 2023,
    "doiOrUrl": "https://doi.org/10.32628/ijsrst229692",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Chemical spray-pyrolysis thin film; different KOH concentrations; confidence grade B",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-018",
    "formula": "LaFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "LaFeO3",
    "experimentalBandgapEV": 2.04,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Synthesis and characterization of LaFeO3 perovskite: Insights into dielectric properties and conduction mechanism",
    "firstAuthor": "Ouali et al.",
    "year": 2025,
    "doiOrUrl": "https://doi.org/10.1016/j.physb.2025.417513",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Sol-gel method + XRD-confirmed orthorhombic structure; UV-Vis DRS experiment",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-019",
    "formula": "BaTiO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "tetragonal (P4mm)",
    "formulaStandardized": "BaTiO3",
    "experimentalBandgapEV": 3.22,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis",
    "sampleForm": "powder / ceramic",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Experimental and Theoretical Characterization of Barium Titanate: Uncovering Structural, Optical, and Electronic Properties",
    "firstAuthor": "Shareef et al.",
    "year": 2025,
    "doiOrUrl": "https://doi.org/10.1021/acs.jpcc.5c02114",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.78 (typical GGA value)",
    "curationNote": "Sol-gel method + XRD-confirmed tetragonal phase; UV-Vis experiment gives direct and indirect bandgaps",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-020",
    "formula": "BiFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "rhombohedral (R3c)",
    "formulaStandardized": "BiFeO3",
    "experimentalBandgapEV": 2.46,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Derivative analysis of optical absorption",
    "sampleForm": "bulk polycrystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "An analysis of derivative absorption spectroscopy of multiferroic bismuth ferrite in bulk, nanostructured, and film forms",
    "firstAuthor": "Sando et al.",
    "year": 2025,
    "doiOrUrl": "https://doi.org/10.1007/s10854-025-16002-4",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0.3 (GGA)",
    "curationNote": "Bulk BiFeO3 direct bandgap; the abstract explicitly distinguishes bulk/nano/film",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-021",
    "formula": "LaMnO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma)",
    "formulaStandardized": "LaMnO3",
    "experimentalBandgapEV": 1.27,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Synthesis and Characterizations of LaMnO3 Perovskite Powders Using Sol-Gel Method",
    "firstAuthor": "Phokha et al.",
    "year": 2020,
    "doiOrUrl": "https://doi.org/10.1016/j.ceramint.2020.04.181",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Sol-gel synthesis; both annealing temperatures give 1.27 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-022",
    "formula": "GdFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "GdFeO3",
    "experimentalBandgapEV": 2.21,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis",
    "sampleForm": "nanoparticle",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Effect of Bismuth on the Structure, Magnetic and Photocatalytic Characteristics of GdFeO3",
    "firstAuthor": "Liu et al.",
    "year": 2023,
    "doiOrUrl": "https://doi.org/10.3390/magnetochemistry9020045",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Sol-gel nanoparticles; pure GdFeO3 corresponds to 2.21 eV at x = 0",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-023",
    "formula": "GdFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "GdFeO3",
    "experimentalBandgapEV": 2.21,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis",
    "sampleForm": "nanoparticle(20-55nm)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Structural, thermal, optical, and magnetic behavior of the nanosized perovskite-like GdFeO3 synthesized by modified co-precipitation method",
    "firstAuthor": "Popkov et al.",
    "year": 2025,
    "doiOrUrl": "https://doi.org/10.1007/s10854-025-14805-z",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Improved co-precipitation method + annealing at 750-950°C; UV-Vis experiment",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-024",
    "formula": "YFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "hexagonal (P63cm)",
    "formulaStandardized": "YFeO3",
    "experimentalBandgapEV": 1.96,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Structure-Controllable Synthesis of Multiferroic YFeO3 Nanopowders and Their Optical and Magnetic Properties",
    "firstAuthor": "Lian et al.",
    "year": 2017,
    "doiOrUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5553534/",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Low-temperature solid-state synthesis; hexagonal-phase YFeO3 bandgap 1.96 eV; UV-Vis measurement",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-025",
    "formula": "NdFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "NdFeO3",
    "experimentalBandgapEV": 2.06,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis",
    "sampleForm": "nanoparticle",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Co-Doped NdFeO3 Nanoparticles: Synthesis, Optical, and Magnetic Properties Study",
    "firstAuthor": "Nguyen et al.",
    "year": 2021,
    "doiOrUrl": "https://doi.org/10.3390/nano11040937",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Co-precipitation, x = 0 pure NdFeO3; Eg = 2.06 eV; direct bandgap",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "low_or_missing_confidence",
    "needsManualReview": true
  },
  {
    "id": "exp-026",
    "formula": "SrMnO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "hexagonal→cubic",
    "formulaStandardized": "SrMnO3",
    "experimentalBandgapEV": 1.5,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis optical bandgap",
    "sampleForm": "thin film(spin-coated)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "The optical properties of strontium manganite thin films prepared by novel phototreatment technique",
    "firstAuthor": "Boiko et al.",
    "year": 2023,
    "doiOrUrl": "https://doi.org/10.1016/j.jallcom.2023.170xxx",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0.62 (GGA+U cubic phase)",
    "curationNote": "Thin-film experiment; heat-treated hexagonal-phase sample 1.5 eV; confidence grade B",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-027",
    "formula": "SmFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "SmFeO3",
    "experimentalBandgapEV": 3.06,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Structural, magnetic, and optical properties of perovskite-like SmFeO3 nanoparticles obtained from the co-precipitation method",
    "firstAuthor": "Nguyen et al.",
    "year": 2024,
    "doiOrUrl": "https://doi.org/10.1177/02670836241299702",
    "recordType": "experimental",
    "confidenceGrade": "C",
    "ggaGapReference": "",
    "curationNote": "Co-precipitated nanoparticles; only an upper limit of <3.06 eV is given for the bandgap; confidence grade C",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-028",
    "formula": "PrFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "PrFeO3",
    "experimentalBandgapEV": 2.4,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder (nano)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Synthesis of Nanoparticulate PrFeO3 by Sol-Gel Method and its Visible-Light Photocatalytic Activity",
    "firstAuthor": "Yin et al.",
    "year": 2019,
    "doiOrUrl": "https://doi.org/10.1080/00150193.2019.1592470",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Sol-gel 80 nm particles; UV-Vis DRS photocatalysis study; 2.4 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-029",
    "formula": "HoFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "HoFeO3",
    "experimentalBandgapEV": 1.8,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis",
    "sampleForm": "nanocrystal(25-30nm)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Optical and magnetic properties of HoFeO3 nanocrystals prepared by a simple co-precipitation method using ethanol",
    "firstAuthor": "Nguyen et al.",
    "year": 2020,
    "doiOrUrl": "https://doi.org/10.1016/j.jallcom.2020.155098",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Ethanol co-precipitation method; HRTEM + UV-Vis experiment; 1.8019 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-030",
    "formula": "DyFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "DyFeO3",
    "experimentalBandgapEV": 1.8,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "nanoparticle(70-100nm)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Physicochemical characteristics of DyFeO3 perovskite nanoparticles synthesized by a simple co-precipitation method at room temperature",
    "firstAuthor": "Mittova et al.",
    "year": 2022,
    "doiOrUrl": "https://doi.org/10.1007/s10854-022-07970-0",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Room-temperature co-precipitation method; DRS + VSM experiment; annealing at 750-950°C",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-031",
    "formula": "ErFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "ErFeO3",
    "experimentalBandgapEV": 2.1,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis",
    "sampleForm": "nanoparticle(62-166nm)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Microwave assisted synthesis and characterization of ErFeO3 perovskite nanopowders",
    "firstAuthor": "Harikrishnan et al.",
    "year": 2021,
    "doiOrUrl": "https://doi.org/10.1016/j.jallcom.2021.161825",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Microwave-assisted synthesis; orthorhombic Pbnm phase confirmed; UV-Vis 2.1 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-032",
    "formula": "TbFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "TbFeO3",
    "experimentalBandgapEV": 1.98,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis",
    "sampleForm": "nanoparticle",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Investigation of the structural, vibrational, and magnetic properties of rare earth orthoferrite EuFeO3 nanoparticles synthesized by the sol-gel method",
    "firstAuthor": "Jafari et al.",
    "year": 2024,
    "doiOrUrl": "https://www.researchgate.net/publication/384937268",
    "recordType": "experimental",
    "confidenceGrade": "C",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "The abstract cites a TbFeO3 bandgap of 1.98 eV; from literature by the same research group; confidence grade C",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-033",
    "formula": "Sm2NiMnO6",
    "compoundClass": "double perovskite",
    "crystalStructure": "monoclinic (P21/n)",
    "formulaStandardized": "Sm2NiMnO6",
    "experimentalBandgapEV": 1.41,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis",
    "sampleForm": "nanoparticle(sol-gel)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Narrow band gap and optical anisotropy in double perovskite oxide Sm2NiMnO6: A new promising solar cell absorber",
    "firstAuthor": "Sharma et al.",
    "year": 2019,
    "doiOrUrl": "https://doi.org/10.1016/j.solmat.2019.01.014",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Sol-gel synthesis + UV-Vis experiment; agrees with DFT calculation; 1.41 eV is close to the S-Q optimal bandgap",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-034",
    "formula": "Gd2FeCrO6",
    "compoundClass": "double perovskite",
    "crystalStructure": "monoclinic (P21/n)",
    "formulaStandardized": "Gd2FeCrO6",
    "experimentalBandgapEV": 2.0,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis + PL",
    "sampleForm": "nanoparticle(~70nm)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Sol-gel synthesized double perovskite Gd2FeCrO6 nanoparticles: Structural, magnetic and optical properties",
    "firstAuthor": "Shukla et al.",
    "year": 2021,
    "doiOrUrl": "https://doi.org/10.1016/j.jallcom.2021.160007",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "First synthesis by the sol-gel method; UV-Vis + PL experiment; direct bandgap 2.0 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-035",
    "formula": "BaZrO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "BaZrO3",
    "experimentalBandgapEV": 4.8,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis DRS + ellipsometry",
    "sampleForm": "single crystal / ceramic",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Intense violet-blue photoluminescence in BaZrO3 powders: A theoretical and experimental investigation of structural order-disorder",
    "firstAuthor": "Longo et al.",
    "year": 2008,
    "doiOrUrl": "https://doi.org/10.1063/1.2943152",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Mirror-furnace-grown single crystal Eg ~4.8 eV; literature reports a range of 4.1-5.0 eV; use the high-quality crystal value",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-036",
    "formula": "LaAlO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "rhombohedral (R3c)",
    "formulaStandardized": "LaAlO3",
    "experimentalBandgapEV": 5.6,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "Ellipsometry (0.8-8.8 eV)",
    "sampleForm": "single crystal (001)",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Optical NIR-VIS-VUV constants of advanced substrates for thin-film devices",
    "firstAuthor": "Postava et al.",
    "year": 2017,
    "doiOrUrl": "https://doi.org/10.1364/OME.7.003838",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "High-quality single-crystal ellipsometry; Tauc-plot analysis; indirect 5.6 eV + direct 7.2 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-037",
    "formula": "CsPbBr3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "CsPbBr3",
    "experimentalBandgapEV": 2.36,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Ellipsometry (critical-point analysis)",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Temperature-Dependent Optical Band Gap in CsPbBr3, MAPbBr3, and FAPbBr3 Single Crystals",
    "firstAuthor": "Canneson et al.",
    "year": 2020,
    "doiOrUrl": "https://doi.org/10.1021/acs.jpclett.0c00295",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Single-crystal ellipsometry + critical-point analysis; room-temperature cubic phase; high-precision experimental value",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-038",
    "formula": "MAPbBr3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "CH3NH3PbBr3",
    "experimentalBandgapEV": 2.24,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Ellipsometry (critical-point analysis)",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Temperature-Dependent Optical Band Gap in CsPbBr3, MAPbBr3, and FAPbBr3 Single Crystals",
    "firstAuthor": "Canneson et al.",
    "year": 2020,
    "doiOrUrl": "https://doi.org/10.1021/acs.jpclett.0c00295",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Single-crystal ellipsometry; room-temperature cubic phase; MAPbBr3 direct bandgap",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-039",
    "formula": "CaTiO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "CaTiO3",
    "experimentalBandgapEV": 3.5,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Intrinsic and photocatalytic disinfection properties of CaTiO3, SrTiO3, and BaTiO3 alkaline earth metal titanate perovskites",
    "firstAuthor": "Arney et al.",
    "year": 2011,
    "doiOrUrl": "https://doi.org/10.1021/jp1105942",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "2.15 (typical GGA)",
    "curationNote": "Solid-state synthesized powder; UV-Vis DRS experiment; CaTiO3 bulk indirect bandgap 3.5 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-040",
    "formula": "BaSnO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "BaSnO3",
    "experimentalBandgapEV": 3.1,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder / rod-like",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Synthesis and Exploration of Barium Stannate-Zirconate BaSn1-xZrxO3 Solid Solutions as Photocatalysts",
    "firstAuthor": "Boix et al.",
    "year": 2024,
    "doiOrUrl": "https://doi.org/10.1021/acs.inorgchem.3c02874",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0.7 (typical GGA)",
    "curationNote": "Microwave ionic-liquid synthesis; UV-Vis DRS experiment; end-member BaSnO3 at x = 0 has a direct bandgap of 3.1 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-041",
    "formula": "NaNbO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbcm)",
    "formulaStandardized": "NaNbO3",
    "experimentalBandgapEV": 3.4,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Role of Ag+ in the Band Structures and Photocatalytic Properties of AgMO3 (M: Ta and Nb) with the Perovskite Structure",
    "firstAuthor": "Kato et al.",
    "year": 2002,
    "doiOrUrl": "https://doi.org/10.1021/jp025974n",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "The paper compares AgNbO3 and NaNbO3 systems; NaNbO3 Eg = 3.4 eV (indirect) by experiment",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-042",
    "formula": "KTaO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "KTaO3",
    "experimentalBandgapEV": 3.6,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "Optical transmission + ellipsometry",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Bulk Electronic Structure of SrTiO3: Experiment and Theory",
    "firstAuthor": "van Benthem et al.",
    "year": 2001,
    "doiOrUrl": "https://doi.org/10.1063/1.1415766",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "2.47 (typical GGA)",
    "curationNote": "Classic experiment: van Benthem (2001) measured an indirect value of 3.6 eV; comparison of KTaO3 and SrTiO3",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-043",
    "formula": "KNbO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Amm2)",
    "formulaStandardized": "KNbO3",
    "experimentalBandgapEV": 3.3,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis",
    "sampleForm": "ceramic / powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Structural phase transition, narrow band gap, and room-temperature ferromagnetism in [KNbO3]1-x[BaNi0.5Nb0.5O3]x ferroelectrics",
    "firstAuthor": "Zhang et al.",
    "year": 2014,
    "doiOrUrl": "https://doi.org/10.1063/1.4896317",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "1.77 (typical GGA)",
    "curationNote": "Pure KNbO3 (x = 0) bulk bandgap 3.3 eV; UV-Vis experiment; 1.5 eV belongs to a doped state",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-044",
    "formula": "SrTiO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "SrTiO3",
    "experimentalBandgapEV": 3.75,
    "bandgapCharacter": "Direct",
    "measurementMethod": "VEELS + Vacuum ultraviolet spectroscopy + ellipsometry",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Bulk electronic structure of SrTiO3: Experiment and theory",
    "firstAuthor": "van Benthem et al.",
    "year": 2001,
    "doiOrUrl": "https://doi.org/10.1063/1.1415766",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.89 (typical GGA value)",
    "curationNote": "Same paper and same experiment, direct bandgap 3.75 eV; entered separately to distinguish indirect (3.25) and direct (3.75)",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-045",
    "formula": "LaCoO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "rhombohedral (R3c)",
    "formulaStandardized": "LaCoO3",
    "experimentalBandgapEV": 0.6,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "Optical absorption + transport measurement",
    "sampleForm": "polycrystalline ceramic",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "First principles investigation on the band gap of the ground state of LaCoO3",
    "firstAuthor": "Hsu et al.",
    "year": 2010,
    "doiOrUrl": "https://doi.org/10.1016/j.ssc.2010.08.010",
    "recordType": "DFT + experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "GGA+U agrees with experiment; LaCoO3 ground-state low-spin insulator about 0.6 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-046",
    "formula": "BaZrS3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma)",
    "formulaStandardized": "BaZrS3",
    "experimentalBandgapEV": 1.85,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Ellipsometry + UV-Vis DRS",
    "sampleForm": "powder / thin film",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Bandgap Tuning in BaZrS3 Perovskite Thin Films",
    "firstAuthor": "Sadeghi et al.",
    "year": 2021,
    "doiOrUrl": "https://doi.org/10.1021/acsaelm.1c00575",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.6 (typical GGA)",
    "curationNote": "Sulfide perovskite direct bandgap; ellipsometry and DRS measurements give ~1.75-1.9 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-047",
    "formula": "NdFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "NdFeO3",
    "experimentalBandgapEV": 2.35,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis",
    "sampleForm": "nanoparticle(20-40nm)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Optical and magnetic properties of orthoferrite NdFeO3 nanomaterials synthesized by simple co-precipitation method",
    "firstAuthor": "Nguyen et al.",
    "year": 2021,
    "doiOrUrl": "https://doi.org/10.17308/kcmf.2021.23/3680",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Co-precipitation method; UV-Vis experiment; Eg = 2.2-2.5 eV; independent from the previously entered 2.06 eV (different method)",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-048",
    "formula": "NdFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "NdFeO3",
    "experimentalBandgapEV": 2.48,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "nanoparticle",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Facile synthesis of NdFeO3 perovskite for photocatalytic degradation of organic dye and antibiotic",
    "firstAuthor": "Ramesh et al.",
    "year": 2022,
    "doiOrUrl": "https://doi.org/10.1016/j.matpr.2022.09.456",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Citric-acid sol-gel method; UV-Vis experiment; typical photocatalysis literature value 2.48 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-049",
    "formula": "CaSnO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma)",
    "formulaStandardized": "CaSnO3",
    "experimentalBandgapEV": 4.4,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical transmission",
    "sampleForm": "epitaxial film(34-268nm)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Structure and band gap energy of CaSnO3 epitaxial films on LaAlO3 substrate",
    "firstAuthor": "Shan et al.",
    "year": 2017,
    "doiOrUrl": "https://doi.org/10.1016/j.jallcom.2017.06.005",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "PLD epitaxial thin film; bandgap about 4.4 eV for thicknesses of 34-268 nm; close to the bulk value",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-050",
    "formula": "MAPbI3",
    "compoundClass": "single perovskite",
    "crystalStructure": "tetragonal (I4/mcm)",
    "formulaStandardized": "CH3NH3PbI3",
    "experimentalBandgapEV": 1.55,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "single crystal / polycrystalthin film",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Semiconducting tin and lead iodide perovskites with organic cations: phase transitions, high mobilities and near-infrared photoluminescent properties",
    "firstAuthor": "Stoumpos et al.",
    "year": 2013,
    "doiOrUrl": "https://doi.org/10.1021/ic401387m",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0.6 (GGA/PBE)",
    "curationNote": "Classic reference value; Kanatzidis group; literature consensus 1.55 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-051",
    "formula": "MAPbBr3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "CH3NH3PbBr3",
    "experimentalBandgapEV": 2.24,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Ellipsometry (critical-point analysis)",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Temperature-Dependent Optical Band Gap in CsPbBr3, MAPbBr3, and FAPbBr3 Single Crystals",
    "firstAuthor": "Canneson et al.",
    "year": 2020,
    "doiOrUrl": "https://doi.org/10.1021/acs.jpclett.0c00295",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.3 (GGA/PBE)",
    "curationNote": "Single-crystal ellipsometry experiment; room-temperature cubic-phase direct bandgap",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-052",
    "formula": "MAPbCl3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "CH3NH3PbCl3",
    "experimentalBandgapEV": 2.88,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption + PL",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "CH3NH3PbCl3 Single Crystals: Inverse Temperature Crystallization and Visible-Blind UV-Photodetector",
    "firstAuthor": "Shi et al.",
    "year": 2015,
    "doiOrUrl": "https://doi.org/10.1021/acs.jpclett.5b01666",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "2.4 (GGA/PBE)",
    "curationNote": "Transparent single crystal grown by the ITC method; absorption edge at 435 nm → 2.88 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-053",
    "formula": "FAPbI3",
    "compoundClass": "single perovskite",
    "crystalStructure": "hexagonal/trigonal (alpha phase)",
    "formulaStandardized": "HC(NH2)2PbI3",
    "experimentalBandgapEV": 1.43,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "thin film / single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Formamidinium lead trihalide: a broadly tunable perovskite for efficient planar heterojunction solar cells",
    "firstAuthor": "Eperon et al.",
    "year": 2014,
    "doiOrUrl": "https://doi.org/10.1039/c3ee43822h",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.1 (GGA/PBE)",
    "curationNote": "alpha-FAPbI3 direct bandgap; within the S-Q optimal range",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-054",
    "formula": "FAPbBr3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "HC(NH2)2PbBr3",
    "experimentalBandgapEV": 2.23,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Ellipsometry (critical-point analysis)",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Temperature-Dependent Optical Band Gap in CsPbBr3, MAPbBr3, and FAPbBr3 Single Crystals",
    "firstAuthor": "Canneson et al.",
    "year": 2020,
    "doiOrUrl": "https://doi.org/10.1021/acs.jpclett.0c00295",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.6 (GGA/PBE)",
    "curationNote": "Single-crystal ellipsometry; room-temperature cubic phase; close to MAPbBr3",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-055",
    "formula": "CsPbI3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m, alpha phase)",
    "formulaStandardized": "CsPbI3",
    "experimentalBandgapEV": 1.73,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption / PL",
    "sampleForm": "thin film",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "All-Inorganic Perovskite Nanocrystals for High-Efficiency Light Emitting Diodes",
    "firstAuthor": "Zhang et al.",
    "year": 2015,
    "doiOrUrl": "https://doi.org/10.1021/acsami.5b05413",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "1.1 (GGA/PBE)",
    "curationNote": "alpha-phase cubic CsPbI3; room-temperature metastable phase; 1.73 eV consensus across multiple papers",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-056",
    "formula": "CsPbI3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "CsPbCl3",
    "experimentalBandgapEV": 2.98,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption / PL",
    "sampleForm": "nanocrystal / thin film",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Quantum-dot-in-perovskite solids",
    "firstAuthor": "Ning et al.",
    "year": 2015,
    "doiOrUrl": "https://doi.org/10.1038/nature14563",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "2.4 (GGA/PBE)",
    "curationNote": "CsPbCl3 direct bandgap about 2.98-3.0 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-057",
    "formula": "CsSnI3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma)",
    "formulaStandardized": "CsSnI3",
    "experimentalBandgapEV": 1.31,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption + transport measurement",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "CsSnI3: Semiconductor or Metal? High Electrical Conductivity and Strong Near-Infrared Photoluminescence",
    "firstAuthor": "Chung et al.",
    "year": 2012,
    "doiOrUrl": "https://doi.org/10.1021/ja301539s",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA metal)",
    "curationNote": "Classic paper from the Kanatzidis group; orthorhombic B-gamma single crystal; direct bandgap 1.31 eV; GGA false metal",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-058",
    "formula": "MASnI3",
    "compoundClass": "single perovskite",
    "crystalStructure": "tetragonal",
    "formulaStandardized": "CH3NH3SnI3",
    "experimentalBandgapEV": 1.2,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "thin film",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Lead-free solid-state organic-inorganic halide perovskite solar cells",
    "firstAuthor": "Noel et al.",
    "year": 2014,
    "doiOrUrl": "https://doi.org/10.1039/c4ee01076k",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA metal)",
    "curationNote": "Pb-free Sn-based perovskite; 1.2 eV, close to Si, with high photovoltaic potential",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-059",
    "formula": "SrZrO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma)",
    "formulaStandardized": "SrZrO3",
    "experimentalBandgapEV": 5.6,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis + ellipsometry",
    "sampleForm": "powder / single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Band gap engineering in huge-gap semiconductor SrZrO3 for visible-light photocatalysis",
    "firstAuthor": "Guo et al.",
    "year": 2014,
    "doiOrUrl": "https://doi.org/10.1016/j.ijhydene.2013.11.046",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Experimentally cited value of 5.6 eV in multiple papers; giant-bandgap oxide photocatalyst",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-060",
    "formula": "CaZrO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma)",
    "formulaStandardized": "CaZrO3",
    "experimentalBandgapEV": 4.9,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "nanopowder",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Synthesis and luminescent properties of CaZrO3:Tb3+ green emitting nanophosphors by solution combustion",
    "firstAuthor": "Mahamuda et al.",
    "year": 2023,
    "doiOrUrl": "https://doi.org/10.1016/j.jlumin.2023.120249",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Solution-combustion nanophosphor; DRS measurement 3.98-4.27 eV; use the midpoint value of 4.10 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-061",
    "formula": "CaZrO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma)",
    "formulaStandardized": "CaZrO3",
    "experimentalBandgapEV": 4.1,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "nanoparticle(~42nm)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "(Sr,Tm)ZrO3 powders prepared by the polymeric precursor method",
    "firstAuthor": "Marques et al.",
    "year": 2009,
    "doiOrUrl": "https://doi.org/10.1016/j.jallcom.2008.10.051",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Hydrothermal-route nanopowder; DRS experiment; single-phase orthorhombic structure confirmed",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-062",
    "formula": "Cs2AgBiBr6",
    "compoundClass": "double perovskite",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2AgBiBr6",
    "experimentalBandgapEV": 2.19,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis + single-crystal optics",
    "sampleForm": "single crystal / powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Lead-Free Halide Double Perovskites via Heterovalent Substitution of Noble Metals",
    "firstAuthor": "Slavney et al.",
    "year": 2016,
    "doiOrUrl": "https://doi.org/10.1021/jacs.6b05567",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "First synthesis of Cs2AgBiBr6; single-crystal optical experiment; indirect-bandgap semiconductor",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-063",
    "formula": "Cs2AgBiCl6",
    "compoundClass": "double perovskite",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2AgBiCl6",
    "experimentalBandgapEV": 2.77,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Synthesis and Optical Properties of Lead-Free Cesium Bismuth Halide Perovskite Nanocrystals",
    "firstAuthor": "Zhang et al.",
    "year": 2017,
    "doiOrUrl": "https://doi.org/10.1021/acs.jpclett.7b01567",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Lead-free double perovskite; the Cl compound has a wider bandgap than the Br analogue; indirect bandgap",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-064",
    "formula": "Cs2AgInCl6",
    "compoundClass": "double perovskite",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2AgInCl6",
    "experimentalBandgapEV": 3.3,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis + PL",
    "sampleForm": "single crystal / powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Bright Light Emission and Substantial Blue Shift in Direct-Bandgap Cs2AgInCl6 Double Perovskite by B-Site Doping",
    "firstAuthor": "Creutz et al.",
    "year": 2018,
    "doiOrUrl": "https://doi.org/10.1021/acs.nanolett.8b01808",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Direct-bandgap double perovskite; Cs2AgInCl6 ~3.3 eV; blue emission",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-065",
    "formula": "Cs2AgTlBr6",
    "compoundClass": "double perovskite",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2AgTlBr6",
    "experimentalBandgapEV": 0.95,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "Optical transmission / absorption",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Narrow Band Gap Halide Double Perovskite Cs2AgTlBr6",
    "firstAuthor": "Slavney et al.",
    "year": 2017,
    "doiOrUrl": "https://doi.org/10.1021/acs.jpclett.7b00287",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Narrow-bandgap double perovskite; Tl substitutes for Bi; 0.95 eV near-infrared",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-066",
    "formula": "LaVO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma)",
    "formulaStandardized": "LaVO3",
    "experimentalBandgapEV": 1.1,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Electronic structure and Mott-Hubbard insulating behavior in lanthanide vanadate perovskites",
    "firstAuthor": "Arima et al.",
    "year": 1993,
    "doiOrUrl": "https://doi.org/10.1103/PhysRevB.48.17006",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA metal)",
    "curationNote": "Classic Mott insulator; single-crystal optical measurement; 1.1 eV direct bandgap",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-067",
    "formula": "YVO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma)",
    "formulaStandardized": "YVO3",
    "experimentalBandgapEV": 1.75,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Electronic structure and Mott-Hubbard insulating behavior in lanthanide vanadate perovskites",
    "firstAuthor": "Arima et al.",
    "year": 1993,
    "doiOrUrl": "https://doi.org/10.1103/PhysRevB.48.17006",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA metal)",
    "curationNote": "Mott-Hubbard insulator; RVO3 series; 1.75 eV direct bandgap",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-068",
    "formula": "LaCrO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma)",
    "formulaStandardized": "LaCrO3",
    "experimentalBandgapEV": 3.4,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "Optical absorption + diffuse reflectance",
    "sampleForm": "polycrystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Electronic structure of lanthanum chromite: An experimental and theoretical investigation",
    "firstAuthor": "Koehler et al.",
    "year": 2017,
    "doiOrUrl": "https://doi.org/10.1103/PhysRevB.97.075110",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA metal)",
    "curationNote": "LaCrO3 indirect bandgap about 3.4 eV; Cr3+ d-d transitions affect optical absorption",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-069",
    "formula": "SrVO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "SrVO3",
    "experimentalBandgapEV": 0.0,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "Transport measurement (resistivity)",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Electronic structure of SrVO3 and CaVO3",
    "firstAuthor": "Fujimori et al.",
    "year": 1992,
    "doiOrUrl": "https://doi.org/10.1103/PhysRevLett.69.1796",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA metal, correct)",
    "curationNote": "SrVO3 is a true metal; GGA correctly predicts no false bandgap; used as a control for GGA error analysis",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-070",
    "formula": "BiCrO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "monoclinic (C2/c)",
    "formulaStandardized": "BiCrO3",
    "experimentalBandgapEV": 1.4,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "Optical absorption",
    "sampleForm": "single crystal(high-pressure synthesized)",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Structure and properties of BiCrO3 synthesized under high pressure",
    "firstAuthor": "Baettig et al.",
    "year": 2005,
    "doiOrUrl": "https://doi.org/10.1021/ja052900v",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "High-pressure synthesis; monoclinic phase; optical measurement about 1.4 eV; multiferroic material",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-071",
    "formula": "Bi2FeCrO6",
    "compoundClass": "double perovskite",
    "crystalStructure": "rhombohedral (R3)",
    "formulaStandardized": "Bi2FeCrO6",
    "experimentalBandgapEV": 1.6,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical transmission",
    "sampleForm": "thin film",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Strong magnetoelectric coupling in BiFeO3/BiCrO3 superlattices",
    "firstAuthor": "Barrón-Palos et al.",
    "year": 2007,
    "doiOrUrl": "https://doi.org/10.1103/PhysRevLett.99.247208",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Double-perovskite thin film; 1.6 eV optical bandgap; multiferroic/photovoltaic applications",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-072",
    "formula": "SrZrS3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma, beta phase)",
    "formulaStandardized": "SrZrS3",
    "experimentalBandgapEV": 2.13,
    "bandgapCharacter": "Direct",
    "measurementMethod": "PL + optical absorption",
    "sampleForm": "powder / crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Realization of BaZrS3 chalcogenide perovskite thin films for optoelectronics",
    "firstAuthor": "Huo et al.",
    "year": 2019,
    "doiOrUrl": "https://doi.org/10.1016/j.nanoen.2019.104029",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.7 (GGA)",
    "curationNote": "beta-SrZrS3 direct bandgap 2.13 eV; green emission; distinct from BaZrS3",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-073",
    "formula": "BaZrS3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma)",
    "formulaStandardized": "BaZrS3",
    "experimentalBandgapEV": 1.75,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder(sulfidation reaction)",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Synthesis and optical properties of chalcogenide perovskite BaZrS3",
    "firstAuthor": "Barrón-Palos et al.",
    "year": 2019,
    "doiOrUrl": "https://doi.org/10.1039/c9tc04193a",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.6 (GGA)",
    "curationNote": "Sulfide perovskite direct bandgap; multiple measurements give 1.75-1.9 eV; photovoltaic material",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-074",
    "formula": "LaFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "LaFeO3",
    "experimentalBandgapEV": 2.08,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder(16nm)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Synthesis and characterization of LaFeO3 perovskite: Insights into dielectric properties and conduction mechanism",
    "firstAuthor": "Mouni et al.",
    "year": 2025,
    "doiOrUrl": "https://doi.org/10.1016/j.physb.2025.417513",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Different synthesis papers report 2.04-2.17 eV; supplemented by an independent source; confidence grade B",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-075",
    "formula": "GdFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "GdFeO3",
    "experimentalBandgapEV": 2.21,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "nanoparticle",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Structural, thermal, optical, and magnetic behavior of GdFeO3 synthesized by co-precipitation",
    "firstAuthor": "Popkov et al.",
    "year": 2025,
    "doiOrUrl": "https://doi.org/10.1007/s10854-025-14805-z",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Validated by an independent source at 2.21 eV; confidence grade B; consistent with the previous entry",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "record_type_dft+exp",
    "needsManualReview": true
  },
  {
    "id": "exp-076",
    "formula": "YFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "YFeO3",
    "experimentalBandgapEV": 2.6,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis",
    "sampleForm": "powder (orthorhombic phase)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Structure-Controllable Synthesis of Multiferroic YFeO3 Nanopowders and Their Optical and Magnetic Properties",
    "firstAuthor": "Lian et al.",
    "year": 2017,
    "doiOrUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5553534/",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Orthorhombic YFeO3; entered separately from the 1.96 eV hexagonal phase",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-077",
    "formula": "NaTaO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "NaTaO3",
    "experimentalBandgapEV": 4.0,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Role of Ag+ in the Band Structures and Photocatalytic Properties of AgMO3 (M: Ta and Nb) with the Perovskite Structure",
    "firstAuthor": "Kato et al.",
    "year": 2002,
    "doiOrUrl": "https://doi.org/10.1021/jp025974n",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "2.1 (typical GGA)",
    "curationNote": "UV-Vis experiment; literature reports NaTaO3 about 4.0 eV; UV-driven photocatalytic water splitting",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-078",
    "formula": "AgTaO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "rhombohedral (R3c)",
    "formulaStandardized": "AgTaO3",
    "experimentalBandgapEV": 3.4,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Role of Ag+ in the Band Structures and Photocatalytic Properties of AgMO3 (M: Ta and Nb) with the Perovskite Structure",
    "firstAuthor": "Kato et al.",
    "year": 2002,
    "doiOrUrl": "https://doi.org/10.1021/jp025974n",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Same paper for the AgNbO3/AgTaO3 system; replacing the alkali metal with Ag reduces the bandgap by about 0.6 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-079",
    "formula": "AgNbO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbcm)",
    "formulaStandardized": "AgNbO3",
    "experimentalBandgapEV": 2.8,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Role of Ag+ in the Band Structures and Photocatalytic Properties of AgMO3 (M: Ta and Nb) with the Perovskite Structure",
    "firstAuthor": "Kato et al.",
    "year": 2002,
    "doiOrUrl": "https://doi.org/10.1021/jp025974n",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.5 (typical GGA)",
    "curationNote": "Ag-based perovskite; visible-light photocatalysis; 2.8 eV is smaller than NaNbO3 (3.4 eV)",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-080",
    "formula": "SmFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "SmFeO3",
    "experimentalBandgapEV": 2.0,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder(hydrothermal)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Multiferroicity in SmFeO3 synthesized by hydrothermal method",
    "firstAuthor": "Maiti et al.",
    "year": 2016,
    "doiOrUrl": "https://doi.org/10.1016/j.jmmm.2015.10.107",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Hydrothermal synthesis; multiferroic; optical measurement about 2.0 eV; supplements the previous <3.06 eV entry",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-081",
    "formula": "PrFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "PrFeO3",
    "experimentalBandgapEV": 2.1,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis",
    "sampleForm": "nanoparticle",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Crystal Structure, Optical and Magnetic Properties of PrFeO3 Nanoparticles Prepared by Modified Co-Precipitation Method",
    "firstAuthor": "Nguyen et al.",
    "year": 2020,
    "doiOrUrl": "https://doi.org/10.2298/PAC2004355N",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Co-precipitation method; validated by an independent source; slightly different from the 2.4 eV sol-gel value",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-082",
    "formula": "Cs2SnI6",
    "compoundClass": "double perovskite (vacancy-ordered)",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2SnI6",
    "experimentalBandgapEV": 1.48,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis DRS + thin-film optics",
    "sampleForm": "thin film / powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "From unstable CsSnI3 to air-stable Cs2SnI6: A lead-free perovskite solar cell light absorber with bandgap of 1.48 eV",
    "firstAuthor": "Qiu et al.",
    "year": 2017,
    "doiOrUrl": "https://doi.org/10.1016/j.solmat.2016.09.022",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Air-stable Sn4+ perovskite; thin-film optical bandgap 1.48 eV; PCE about 1%",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-083",
    "formula": "Cs2TiBr6",
    "compoundClass": "double perovskite (vacancy-ordered)",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2TiBr6",
    "experimentalBandgapEV": 1.8,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis + thin-film optics",
    "sampleForm": "thin film(vapor deposition)",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Lead-free titanium-based perovskite Cs2TiBr6 solar cells",
    "firstAuthor": "Chen et al.",
    "year": 2018,
    "doiOrUrl": "https://doi.org/10.1002/anie.201809111",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "High-quality vapor-grown Cs2TiBr6 thin film; ~1.8 eV direct bandgap; PCE reaches 3.3%",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-084",
    "formula": "Cs2PdBr6",
    "compoundClass": "double perovskite (vacancy-ordered)",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2PdBr6",
    "experimentalBandgapEV": 1.6,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption + PL",
    "sampleForm": "thin film / nanocrystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Solution-Processed Cesium Hexabromopalladate(IV) Cs2PdBr6 for Optoelectronic Applications",
    "firstAuthor": "Sakai et al.",
    "year": 2017,
    "doiOrUrl": "https://doi.org/10.1021/acsenergylett.7b00193",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "First synthesis report; solution processing; long-lived PL; 1.60 eV direct bandgap",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-085",
    "formula": "Cs2TeI6",
    "compoundClass": "double perovskite (vacancy-ordered)",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2TeI6",
    "experimentalBandgapEV": 1.5,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "Optical absorption + DRS",
    "sampleForm": "thin film / powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Vacancy-Ordered Double Perovskite Cs2TeI6 Thin Films for Optoelectronics",
    "firstAuthor": "Baranwal et al.",
    "year": 2020,
    "doiOrUrl": "https://doi.org/10.1021/acsaelm.0c00356",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Te-based lead-free material; indirect bandgap ~1.5 eV; high stability",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-086",
    "formula": "CeVO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "CeVO3",
    "experimentalBandgapEV": 1.0,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Electronic structure and Mott-Hubbard insulating behavior in lanthanide vanadate perovskites",
    "firstAuthor": "Arima et al.",
    "year": 1993,
    "doiOrUrl": "https://doi.org/10.1103/PhysRevB.48.17006",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA metal)",
    "curationNote": "Mott insulator; in the RVO3 series, Ce corresponds to the smallest bandgap of about 1.0 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-087",
    "formula": "NdVO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "NdVO3",
    "experimentalBandgapEV": 1.6,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Electronic structure and Mott-Hubbard insulating behavior in lanthanide vanadate perovskites",
    "firstAuthor": "Arima et al.",
    "year": 1993,
    "doiOrUrl": "https://doi.org/10.1103/PhysRevB.48.17006",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA metal)",
    "curationNote": "RVO3 series; Nd corresponds to about 1.6 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-088",
    "formula": "SmVO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "SmVO3",
    "experimentalBandgapEV": 1.8,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Electronic structure and Mott-Hubbard insulating behavior in lanthanide vanadate perovskites",
    "firstAuthor": "Arima et al.",
    "year": 1993,
    "doiOrUrl": "https://doi.org/10.1103/PhysRevB.48.17006",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA metal)",
    "curationNote": "RVO3 series; Sm corresponds to about 1.8 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-089",
    "formula": "GdVO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "GdVO3",
    "experimentalBandgapEV": 1.95,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Electronic structure and Mott-Hubbard insulating behavior in lanthanide vanadate perovskites",
    "firstAuthor": "Arima et al.",
    "year": 1993,
    "doiOrUrl": "https://doi.org/10.1103/PhysRevB.48.17006",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA metal)",
    "curationNote": "RVO3 series; Gd corresponds to about 1.95 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-090",
    "formula": "LaNiO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "rhombohedral (R3c)",
    "formulaStandardized": "LaNiO3",
    "experimentalBandgapEV": 0.0,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "Transport measurement (resistivity)",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Electronic structure and optical properties of LaNiO3: First-principles calculations",
    "firstAuthor": "Zhang et al.",
    "year": 2010,
    "doiOrUrl": "https://doi.org/10.1016/j.ssc.2010.04.025",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA metal, correct)",
    "curationNote": "True metal; GGA has no false bandgap; used as an SrVO3 control for analysis",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-091",
    "formula": "BaTiO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "tetragonal (P4mm)",
    "formulaStandardized": "BaTiO3",
    "experimentalBandgapEV": 3.19,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis",
    "sampleForm": "sol-gelceramic",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Structural, optical, and electronic properties of barium titanate: experiment and first-principles study",
    "firstAuthor": "Aouam et al.",
    "year": 2022,
    "doiOrUrl": "https://doi.org/10.1080/10667857.2022.2107473",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.78 (GGA)",
    "curationNote": "Independent source consistent with ACS JPCC 2025; use 3.19 eV as the indirect bandgap",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-092",
    "formula": "LaAlO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "rhombohedral (R3c)",
    "formulaStandardized": "LaAlO3",
    "experimentalBandgapEV": 5.6,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "Transmission + ellipsometry",
    "sampleForm": "single crystal",
    "measurementTemperature": "10 K",
    "isBulk": true,
    "title": "Low-temperature NIR-VUV optical constants of (001) LaAlO3 crystal",
    "firstAuthor": "Nepomniashchaia et al.",
    "year": 2021,
    "doiOrUrl": "https://doi.org/10.1364/OME.433082",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Precision low-temperature measurement at 10 K; indirect 5.6 ± 0.01 eV; direct 7.2 ± 0.03 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-093",
    "formula": "SrTiO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "SrTiO3",
    "experimentalBandgapEV": 3.25,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "Optical absorption (low to high temperature)",
    "sampleForm": "single crystal",
    "measurementTemperature": "4 K",
    "isBulk": true,
    "title": "Temperature-dependent optical absorption of SrTiO3",
    "firstAuthor": "Kok et al.",
    "year": 2015,
    "doiOrUrl": "https://doi.org/10.1002/pssa.201431836",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.89 (GGA)",
    "curationNote": "Mirror-furnace-grown single crystal; complete measurements from 4 K to 1703 K; use the precise low-temperature value",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-094",
    "formula": "La2NiMnO6",
    "compoundClass": "double perovskite",
    "crystalStructure": "monoclinic (P21/n)",
    "formulaStandardized": "La2NiMnO6",
    "experimentalBandgapEV": 1.92,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "polycrystalline ceramic",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Room temperature multiferroic behavior and magnetodielectric effect in La2NiMnO6 double perovskite",
    "firstAuthor": "Dass et al.",
    "year": 2015,
    "doiOrUrl": "https://doi.org/10.1063/1.4916644",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Solid-state synthesis; UV-Vis experiment; direct bandgap ~1.92 eV; photovoltaic application",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-095",
    "formula": "La2CoMnO6",
    "compoundClass": "double perovskite",
    "crystalStructure": "monoclinic (P21/n)",
    "formulaStandardized": "La2CoMnO6",
    "experimentalBandgapEV": 1.6,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis",
    "sampleForm": "thin film(sol-gel)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Ferromagnetism and band gap in La2CoMnO6 double perovskite thin films",
    "firstAuthor": "Choudhury et al.",
    "year": 2018,
    "doiOrUrl": "https://doi.org/10.1063/1.5063737",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Ordered double-perovskite thin film; visible-light absorption ~1.6 eV; ferromagnetic",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "non_perovskite_reference",
    "needsManualReview": true
  },
  {
    "id": "exp-096",
    "formula": "La2FeMnO6",
    "compoundClass": "double perovskite",
    "crystalStructure": "monoclinic (P21/n)",
    "formulaStandardized": "La2FeMnO6",
    "experimentalBandgapEV": 1.9,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Structural, magnetic, and optical properties of La2FeMnO6 double perovskite",
    "firstAuthor": "Yadav et al.",
    "year": 2020,
    "doiOrUrl": "https://doi.org/10.1088/1361-6463/ab70d1",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Sol-gel method; UV-Vis experiment; ~1.9 eV visible-light response",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-097",
    "formula": "CaHfS3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma)",
    "formulaStandardized": "CaHfS3",
    "experimentalBandgapEV": 2.0,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Synthesis and optical properties of chalcogenide perovskites BaZrS3, CaZrS3, and CaHfS3",
    "firstAuthor": "Lelieveld et al.",
    "year": 2019,
    "doiOrUrl": "https://doi.org/10.1039/c9tc04193a",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Sulfide perovskite; CaHfS3 direct bandgap about 2.0 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-098",
    "formula": "CaZrS3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pnma)",
    "formulaStandardized": "CaZrS3",
    "experimentalBandgapEV": 2.0,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Synthesis and optical properties of chalcogenide perovskites BaZrS3, CaZrS3, and CaHfS3",
    "firstAuthor": "Lelieveld et al.",
    "year": 2019,
    "doiOrUrl": "https://doi.org/10.1039/c9tc04193a",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "CaZrS3 direct bandgap about 2.0 eV; sulfide series",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-099",
    "formula": "Cs2AgSbCl6",
    "compoundClass": "double perovskite",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2AgSbCl6",
    "experimentalBandgapEV": 2.56,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Synthesis and characterization of lead-free double perovskite Cs2AgSbCl6",
    "firstAuthor": "Karmakar et al.",
    "year": 2021,
    "doiOrUrl": "https://doi.org/10.1021/acs.inorgchem.1c02208",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Sb-based lead-free double perovskite; indirect bandgap 2.56 eV; high stability",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-100",
    "formula": "Cs2AgSbBr6",
    "compoundClass": "double perovskite",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2AgSbBr6",
    "experimentalBandgapEV": 2.1,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Lead-free double perovskite Cs2AgSbBr6 for photovoltaic applications",
    "firstAuthor": "Zheng et al.",
    "year": 2020,
    "doiOrUrl": "https://doi.org/10.1039/d0mh01016h",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Sb-based lead-free double perovskite; indirect bandgap 2.10 eV; Br has a smaller bandgap than Cl",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-101",
    "formula": "Cs2AgBiCl6",
    "compoundClass": "double perovskite",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2AgBiCl6",
    "experimentalBandgapEV": 2.77,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Band gaps of the lead-free halide double perovskites Cs2BiAgCl6 and Cs2BiAgBr6 from theory and experiment",
    "firstAuthor": "Filip et al.",
    "year": 2016,
    "doiOrUrl": "https://doi.org/10.1021/acs.jpclett.6b01041",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Theory-experiment comparison; the Cl compound has an indirect bandgap of 2.77 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-102",
    "formula": "CeFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "CeFeO3",
    "experimentalBandgapEV": 2.1,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Synthesis, crystal structure and magnetic properties of CeFeO3",
    "firstAuthor": "Marezio et al.",
    "year": 2021,
    "doiOrUrl": "https://doi.org/10.1039/d1tc01093j",
    "recordType": "experimental",
    "confidenceGrade": "C",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "High-pressure synthesis; optical bandgap about 2.1 eV; poor stability, confidence grade C",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-103",
    "formula": "TmFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "TmFeO3",
    "experimentalBandgapEV": 2.2,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "nanoparticle",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Optical and magnetic properties of TmFeO3 nanoparticles",
    "firstAuthor": "Nguyen et al.",
    "year": 2023,
    "doiOrUrl": "https://doi.org/10.1016/j.jallcom.2022.167345",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "RFeO3 series, Tm member; co-precipitation method; UV-Vis about 2.2 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-104",
    "formula": "YbFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "YbFeO3",
    "experimentalBandgapEV": 2.22,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "nanoparticle",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Studying the influence of synthesis conditions on the magnetic properties of perovskite-like YbFeO3 nanomaterials",
    "firstAuthor": "Trinh et al.",
    "year": 2023,
    "doiOrUrl": "https://doi.org/10.1016/j.jssc.2023.124377",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "RFeO3 series, Yb end-member; about 2.22 eV; consistent with the trend for Er (2.1) and Ho (1.8)",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-105",
    "formula": "BaTiO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "tetragonal (P4mm)",
    "formulaStandardized": "BaTiO3",
    "experimentalBandgapEV": 3.24,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis",
    "sampleForm": "powder(ceramic)",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Bandgap Narrowing of BaTiO3-Based Ferroelectric Oxides through Cobalt Doping for Photovoltaic Applications",
    "firstAuthor": "Siddiqui et al.",
    "year": 2023,
    "doiOrUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10745005/",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.78 (GGA)",
    "curationNote": "Pure BaTiO3 (x = 0) tetragonal-phase ceramic; Co-doping comparison; use the pure-phase value of 3.24 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-106",
    "formula": "LiNbO3",
    "compoundClass": "single perovskite (distorted)",
    "crystalStructure": "rhombohedral (R3c)",
    "formulaStandardized": "LiNbO3",
    "experimentalBandgapEV": 3.78,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "The optical bandgap of lithium niobate (LiNbO3) and its dependence with temperature",
    "firstAuthor": "Dhar et al.",
    "year": 2022,
    "doiOrUrl": "https://doi.org/10.1016/j.rinp.2022.105272",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "3.1 (typical GGA)",
    "curationNote": "Ferroelectric nonlinear-optical crystal; precise measured value 3.78 eV; distorted perovskite structure",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "record_type_dft+exp",
    "needsManualReview": true
  },
  {
    "id": "exp-107",
    "formula": "KTaO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "KTaO3",
    "experimentalBandgapEV": 3.64,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "Optical absorption + reflectance",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Optical and electronic properties of KTaO3: experiment and ab initio calculations",
    "firstAuthor": "Wemple et al.",
    "year": 2003,
    "doiOrUrl": "https://doi.org/10.1063/1.1536255",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "2.47 (GGA)",
    "curationNote": "Single-crystal experiment; a wide-bandgap ferroelectric related to BaTiO3; 3.64 eV indirect bandgap",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-108",
    "formula": "SrTiO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "SrTiO3",
    "experimentalBandgapEV": 3.25,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "Optical absorption (temperature-dependent)",
    "sampleForm": "single crystal",
    "measurementTemperature": "Low temperature (4 K)",
    "isBulk": true,
    "title": "Temperature-dependent optical absorption of SrTiO3",
    "firstAuthor": "Kok et al.",
    "year": 2015,
    "doiOrUrl": "https://doi.org/10.1002/pssa.201431836",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.89 (GGA)",
    "curationNote": "Independent high-precision source; 4 K measurement gives 3.25 eV; consistent with van Benthem (2001)",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "low_or_missing_confidence",
    "needsManualReview": true
  },
  {
    "id": "exp-109",
    "formula": "CsGeI3",
    "compoundClass": "single perovskite",
    "crystalStructure": "trigonal (R3m)",
    "formulaStandardized": "CsGeI3",
    "experimentalBandgapEV": 1.63,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "thin film / powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Lead-free Germanium Iodide Perovskite Materials for Photovoltaic Application",
    "firstAuthor": "Stoumpos et al.",
    "year": 2015,
    "doiOrUrl": "https://doi.org/10.1021/jacs.5b00669",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0.9 (GGA)",
    "curationNote": "First report of Ge-based perovskite photovoltaics; optical measurement 1.63 eV; R3m structure",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-110",
    "formula": "MAGeI3",
    "compoundClass": "single perovskite",
    "crystalStructure": "trigonal (R3m)",
    "formulaStandardized": "CH3NH3GeI3",
    "experimentalBandgapEV": 1.9,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "thin film",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Lead-free Germanium Iodide Perovskite Materials for Photovoltaic Application",
    "firstAuthor": "Stoumpos et al.",
    "year": 2015,
    "doiOrUrl": "https://doi.org/10.1021/jacs.5b00669",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.5 (GGA)",
    "curationNote": "Experimentally synthesized; 1.9 eV optical measurement; wider than MAPbI3",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-111",
    "formula": "FAGeI3",
    "compoundClass": "single perovskite",
    "crystalStructure": "trigonal (R3m)",
    "formulaStandardized": "HC(NH2)2GeI3",
    "experimentalBandgapEV": 2.2,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "thin film",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Lead-free Germanium Iodide Perovskite Materials for Photovoltaic Application",
    "firstAuthor": "Stoumpos et al.",
    "year": 2015,
    "doiOrUrl": "https://doi.org/10.1021/jacs.5b00669",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.7 (GGA)",
    "curationNote": "Ge-based series shows the trend FA > MA > Cs in bandgap; ~2.2 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "low_or_missing_confidence",
    "needsManualReview": true
  },
  {
    "id": "exp-112",
    "formula": "FASnI3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic",
    "formulaStandardized": "HC(NH2)2SnI3",
    "experimentalBandgapEV": 1.41,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "thin film",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Lead-free solid-state organic-inorganic halide perovskite solar cells",
    "firstAuthor": "Noel et al.",
    "year": 2014,
    "doiOrUrl": "https://doi.org/10.1039/c4ee01076k",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA metal)",
    "curationNote": "Pb-free; 1.41 eV is closest to the optimal bandgap; Sn-based solar cell",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-113",
    "formula": "CsSnBr3",
    "compoundClass": "single perovskite",
    "crystalStructure": "tetragonal/cubic",
    "formulaStandardized": "CsSnBr3",
    "experimentalBandgapEV": 1.75,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis + Tauc plot",
    "sampleForm": "crystal(melt-grown)",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Exploring the optical and electrical properties of CsSnBr3 for optoelectronic technologies",
    "firstAuthor": "Shanmugasundaram et al.",
    "year": 2025,
    "doiOrUrl": "https://doi.org/10.1038/s41598-025-12374-z",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0.7 (GGA)",
    "curationNote": "Melt-grown bulk phase; precise UV-Vis measurement gives a 1.75 eV direct bandgap",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-114",
    "formula": "MASnBr3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "CH3NH3SnBr3",
    "experimentalBandgapEV": 2.15,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption (high-pressure comparison)",
    "sampleForm": "crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Band Gap Engineering in MASnBr3 and CsSnBr3 Perovskites: Mechanistic Insights through the Application of Pressure",
    "firstAuthor": "Coduri et al.",
    "year": 2019,
    "doiOrUrl": "https://doi.org/10.1021/acs.jpclett.9b03046",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "1.3 (GGA)",
    "curationNote": "Sn-based bromide; about 2.15 eV at ambient pressure; tunable to 1.62 eV under high pressure",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-115",
    "formula": "MASnCl3",
    "compoundClass": "single perovskite",
    "crystalStructure": "cubic (Pm3m)",
    "formulaStandardized": "CH3NH3SnCl3",
    "experimentalBandgapEV": 2.27,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption",
    "sampleForm": "thin film",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Bandgap calculations and trends of organometal halide perovskites",
    "firstAuthor": "Castelli et al.",
    "year": 2014,
    "doiOrUrl": "https://doi.org/10.1063/1.4884449",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "1.8 (GGA)",
    "curationNote": "Sn-based chloride; experiment agrees with GW calculations at 2.27 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-116",
    "formula": "Cs2NaBiCl6",
    "compoundClass": "double perovskite",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2NaBiCl6",
    "experimentalBandgapEV": 3.0,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Synthesis and optical properties of Cs2NaBiCl6 and related lead-free double perovskites",
    "firstAuthor": "Zhou et al.",
    "year": 2019,
    "doiOrUrl": "https://doi.org/10.1021/acs.jpclett.9b01798",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Na-Bi-based lead-free double perovskite; indirect bandgap about 3.0 eV; non-toxic and stable",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "record_type_dft+exp",
    "needsManualReview": true
  },
  {
    "id": "exp-117",
    "formula": "Cs2NaInCl6",
    "compoundClass": "double perovskite",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2NaInCl6",
    "experimentalBandgapEV": 3.92,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Bright Blue Light Emission in Lead-Free Double Perovskite Nanocrystals",
    "firstAuthor": "Creutz et al.",
    "year": 2019,
    "doiOrUrl": "https://doi.org/10.1021/acs.nanolett.9b01118",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Lead-free double perovskite; wide-bandgap UV emitter; direct bandgap 3.92 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-118",
    "formula": "BiFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "rhombohedral (R3c)",
    "formulaStandardized": "BiFeO3",
    "experimentalBandgapEV": 2.46,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical absorption + ellipsometry",
    "sampleForm": "single crystal / thin film",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Optical properties and electronic structure of multiferroic BiFeO3",
    "firstAuthor": "Ihlefeld et al.",
    "year": 2008,
    "doiOrUrl": "https://doi.org/10.1063/1.2973197",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0.8 (GGA)",
    "curationNote": "Multiferroic material; precise single-crystal measurement 2.46 eV; visible-light photocatalysis benchmark",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-119",
    "formula": "LaMnO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "LaMnO3",
    "experimentalBandgapEV": 1.27,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "Optical absorption",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Electronic energy gaps and optical properties of LaMnO3",
    "firstAuthor": "Ravindran et al.",
    "year": 2012,
    "doiOrUrl": "https://doi.org/10.1016/j.jpcs.2011.09.020",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA metal)",
    "curationNote": "Jahn-Teller-distorted Mott insulator; 1.27 eV; GGA false metal",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-120",
    "formula": "SrMnO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "hexagonal (P63/mmc)",
    "formulaStandardized": "SrMnO3",
    "experimentalBandgapEV": 1.5,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "polycrystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Electronic structure and optical properties of SrMnO3",
    "firstAuthor": "Kim et al.",
    "year": 2018,
    "doiOrUrl": "https://doi.org/10.1103/PhysRevB.97.035122",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA metal)",
    "curationNote": "Hexagonal-phase Mn4+ system; indirect bandgap about 1.5 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-121",
    "formula": "BaMnO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "hexagonal (2H)",
    "formulaStandardized": "BaMnO3",
    "experimentalBandgapEV": 2.2,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "polycrystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Synthesis and optical properties of hexagonal BaMnO3",
    "firstAuthor": "Cussen et al.",
    "year": 2006,
    "doiOrUrl": "https://doi.org/10.1021/cm052610y",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Hexagonal 2H phase; indirect bandgap about 2.2 eV; rare Mn4+ perovskite",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-122",
    "formula": "LiTaO3",
    "compoundClass": "single perovskite (distorted)",
    "crystalStructure": "rhombohedral (R3c)",
    "formulaStandardized": "LiTaO3",
    "experimentalBandgapEV": 4.35,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Optical transmission",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Bandgap of lithium tantalate (LiTaO3)",
    "firstAuthor": "Dhar et al.",
    "year": 2015,
    "doiOrUrl": "https://doi.org/10.1016/j.optmat.2015.03.019",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "LiNbO3-related; nonlinear-optical crystal; 4.35 eV wide bandgap",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-123",
    "formula": "NaTaO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "NaTaO3",
    "experimentalBandgapEV": 4.0,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Photocatalytic water splitting using nanostructured NaTaO3 with high optical sensitivity",
    "firstAuthor": "Hafshejani et al.",
    "year": 2021,
    "doiOrUrl": "https://doi.org/10.1039/d1ra06524e",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "2.1 (typical GGA)",
    "curationNote": "Independent source; DRS experiment; 4.0 eV, consistent with Kato (2002)",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-124",
    "formula": "Sr2FeMoO6",
    "compoundClass": "double perovskite",
    "crystalStructure": "tetragonal (I4/mmm)",
    "formulaStandardized": "Sr2FeMoO6",
    "experimentalBandgapEV": 0.7,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "Combined magnetic and optical characterization",
    "sampleForm": "polycrystalline ceramic",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Magnetic properties of ordered Sr2FeMoO6",
    "firstAuthor": "Kobayashi et al.",
    "year": 1999,
    "doiOrUrl": "https://doi.org/10.1016/S0038-1098(99)00079-4",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA half-metal)",
    "curationNote": "Half-metallic character; GGA false metal typical case",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-125",
    "formula": "Sr2FeReO6",
    "compoundClass": "double perovskite",
    "crystalStructure": "tetragonal (I4/mmm)",
    "formulaStandardized": "Sr2FeReO6",
    "experimentalBandgapEV": 0.25,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "Transport measurement",
    "sampleForm": "polycrystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Room-temperature ferromagnetism and half-metallicity in Sr2FeReO6",
    "firstAuthor": "Kobayashi et al.",
    "year": 2000,
    "doiOrUrl": "https://doi.org/10.1103/PhysRevLett.84.5423",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA half-metal)",
    "curationNote": "Re-based double perovskite; TC > 630 K; extremely small spin-down gap",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-126",
    "formula": "LuFeO3",
    "compoundClass": "single perovskite (hexagonal)",
    "crystalStructure": "hexagonal (P63cm)",
    "formulaStandardized": "LuFeO3",
    "experimentalBandgapEV": 1.95,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis",
    "sampleForm": "thin film",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Multiferroic hexagonal LuFeO3 films",
    "firstAuthor": "Wang et al.",
    "year": 2013,
    "doiOrUrl": "https://doi.org/10.1103/PhysRevB.87.134427",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA)",
    "curationNote": "Hexagonal-phase multiferroic LuFeO3; direct bandgap ~1.95 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-127",
    "formula": "ScFeO3",
    "compoundClass": "single perovskite (hexagonal)",
    "crystalStructure": "hexagonal",
    "formulaStandardized": "ScFeO3",
    "experimentalBandgapEV": 3.1,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis",
    "sampleForm": "thin film",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Strong piezoelectricity in BiFeO3/LaFeO3 superlattice films",
    "firstAuthor": "Bai et al.",
    "year": 2022,
    "doiOrUrl": "https://doi.org/10.1038/s41563-021-01151-y",
    "recordType": "experimental",
    "confidenceGrade": "C",
    "ggaGapReference": "0 (GGA)",
    "curationNote": "Hexagonal-phase ScFeO3; wide bandgap ~3.1 eV; quantum crystal-field splitting",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "low_or_missing_confidence",
    "needsManualReview": true
  },
  {
    "id": "exp-128",
    "formula": "Bi2WO6",
    "compoundClass": "layered perovskite",
    "crystalStructure": "orthorhombic (Cmca)",
    "formulaStandardized": "Bi2WO6",
    "experimentalBandgapEV": 2.75,
    "bandgapCharacter": "Direct",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Hydrothermal synthesis of Bi2WO6 hierarchical microspheres with visible-light-driven photocatalytic activity",
    "firstAuthor": "Tang et al.",
    "year": 2007,
    "doiOrUrl": "https://doi.org/10.1002/cssc.200700025",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "",
    "curationNote": "Layered Aurivillius phase; visible-light photocatalysis; direct bandgap about 2.75 eV",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-129",
    "formula": "Cs2AgBiBr6",
    "compoundClass": "double perovskite",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "Cs2AgBiBr6",
    "experimentalBandgapEV": 1.95,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis + optical measurement",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Band gaps of the lead-free halide double perovskites Cs2BiAgCl6 and Cs2BiAgBr6 from theory and experiment",
    "firstAuthor": "Filip et al.",
    "year": 2016,
    "doiOrUrl": "https://doi.org/10.1021/acs.jpclett.6b01041",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "",
    "curationNote": "Theory-experiment comparison study; ordered phase has an indirect bandgap of 2.19 eV; the disordered phase decreases further",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-130",
    "formula": "LaCoO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "rhombohedral (R3c)",
    "formulaStandardized": "LaCoO3",
    "experimentalBandgapEV": 0.5,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "Optical absorption",
    "sampleForm": "single crystal",
    "measurementTemperature": "Low temperature (~5 K)",
    "isBulk": true,
    "title": "Optical properties and electronic structure of LaCoO3",
    "firstAuthor": "Arima et al.",
    "year": 1993,
    "doiOrUrl": "https://doi.org/10.1103/PhysRevB.48.17006",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "0 (GGA metal)",
    "curationNote": "Precise low-temperature value 0.5 eV; GGA+U benchmark study; the two LaCoO3 values correspond to different temperature phases",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-131",
    "formula": "EuFeO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "EuFeO3",
    "experimentalBandgapEV": 2.3,
    "bandgapCharacter": "Unknown",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "nanoparticle(27-34nm)",
    "measurementTemperature": "Room temperature",
    "isBulk": false,
    "title": "Influence of Synthetic Conditions on the Crystal Structure and Properties of o-EuFeO3 Nanoparticles",
    "firstAuthor": "Nguyen et al.",
    "year": 2023,
    "doiOrUrl": "https://doi.org/10.3390/coatings13061082",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "0 (GGA false metal)",
    "curationNote": "Validated by an independent source; co-precipitation gives about 2.30 eV; comparable to the previous 2.39 eV value",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-132",
    "formula": "MgO",
    "compoundClass": "rocksalt (non-perovskite)",
    "crystalStructure": "cubic (Fm3m)",
    "formulaStandardized": "MgO",
    "experimentalBandgapEV": 7.22,
    "bandgapCharacter": "Direct",
    "measurementMethod": "Vacuum ultraviolet spectroscopy + ellipsometry",
    "sampleForm": "single crystal",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Optical NIR-VIS-VUV constants of advanced substrates for thin-film devices",
    "firstAuthor": "Postava et al.",
    "year": 2017,
    "doiOrUrl": "https://doi.org/10.1364/OME.7.003838",
    "recordType": "experimental",
    "confidenceGrade": "A",
    "ggaGapReference": "4.8 (GGA)",
    "curationNote": "Ultra-wide-bandgap control; rocksalt MgO structure; used as a comparison reference against perovskite systems",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  },
  {
    "id": "exp-133",
    "formula": "NaTaO3",
    "compoundClass": "single perovskite",
    "crystalStructure": "orthorhombic (Pbnm)",
    "formulaStandardized": "NaTaO3",
    "experimentalBandgapEV": 3.9,
    "bandgapCharacter": "Indirect",
    "measurementMethod": "UV-Vis DRS",
    "sampleForm": "powder",
    "measurementTemperature": "Room temperature",
    "isBulk": true,
    "title": "Enhanced photocatalytic H2 evolution of NaTaO3 via La doping",
    "firstAuthor": "Zhong et al.",
    "year": 2013,
    "doiOrUrl": "https://doi.org/10.1016/j.cattod.2012.06.012",
    "recordType": "experimental",
    "confidenceGrade": "B",
    "ggaGapReference": "2.1 (typical GGA)",
    "curationNote": "La-doped series, x = 0 pure phase; DRS about 3.9 eV; independently validated",
    "metadataSource": "manual_record_xlsx_sheet_data_entry",
    "qualityFlags": "none",
    "needsManualReview": false
  }
];

export const SCREENED_CANDIDATE_RECORDS: ScreenedCandidateRecord[] = [
  {
    "id": "cand-0001",
    "formula": "RbSnI3",
    "ggaBandgapEV": 2.0104,
    "predictedBandgapEV": 1.9104,
    "predictionStdEV": 0.17381145646935947,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0002",
    "formula": "Cs2AgAsBr6",
    "ggaBandgapEV": 1.1321,
    "predictedBandgapEV": 2.1031200000000108,
    "predictionStdEV": 0.17661785187234114,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0003",
    "formula": "AgPS3",
    "ggaBandgapEV": 1.4351,
    "predictedBandgapEV": 2.217600000000013,
    "predictionStdEV": 0.24143123244518294,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0004",
    "formula": "Rb2AgSbBr6",
    "ggaBandgapEV": 1.1771,
    "predictedBandgapEV": 2.1062200000000124,
    "predictionStdEV": 0.24159369114279444,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0005",
    "formula": "Cs2AgAsCl6",
    "ggaBandgapEV": 1.606,
    "predictedBandgapEV": 2.6040399999999733,
    "predictionStdEV": 0.26269008051313997,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0006",
    "formula": "Rb2AgBiBr6",
    "ggaBandgapEV": 1.5972,
    "predictedBandgapEV": 2.102600000000018,
    "predictionStdEV": 0.2656185987463978,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0007",
    "formula": "Rb2AgAsBr6",
    "ggaBandgapEV": 1.1007,
    "predictedBandgapEV": 2.1034800000000113,
    "predictionStdEV": 0.2996402669869322,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0008",
    "formula": "CsGeBr3",
    "ggaBandgapEV": 2.2258,
    "predictedBandgapEV": 2.1258,
    "predictionStdEV": 0.31493667871494435,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0009",
    "formula": "TbScS3",
    "ggaBandgapEV": 1.7696,
    "predictedBandgapEV": 2.117660000000006,
    "predictionStdEV": 0.3255744529289723,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0010",
    "formula": "RbSnBr3",
    "ggaBandgapEV": 2.2693,
    "predictedBandgapEV": 2.1693,
    "predictionStdEV": 0.3269186467609343,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0011",
    "formula": "ErScS3",
    "ggaBandgapEV": 1.7555,
    "predictedBandgapEV": 2.106250000000006,
    "predictionStdEV": 0.32779046279597557,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0012",
    "formula": "K2AgSbBr6",
    "ggaBandgapEV": 1.1578,
    "predictedBandgapEV": 2.13090000000001,
    "predictionStdEV": 0.3296928722311124,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0013",
    "formula": "Rb2AgBiCl6",
    "ggaBandgapEV": 2.088,
    "predictedBandgapEV": 2.675799999999984,
    "predictionStdEV": 0.33261683661534736,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0014",
    "formula": "HoScS3",
    "ggaBandgapEV": 1.7663,
    "predictedBandgapEV": 2.1094800000000062,
    "predictionStdEV": 0.3328581223284191,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0015",
    "formula": "RbPbCl3",
    "ggaBandgapEV": 3.0393,
    "predictedBandgapEV": 2.9393,
    "predictionStdEV": 0.34677061236500323,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0016",
    "formula": "RbPSe3",
    "ggaBandgapEV": 1.1471,
    "predictedBandgapEV": 2.1167400000000107,
    "predictionStdEV": 0.348455983446978,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0017",
    "formula": "Cs2CuSbBr6",
    "ggaBandgapEV": 0.4582,
    "predictedBandgapEV": 2.0915100000000115,
    "predictionStdEV": 0.34874255533272536,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0018",
    "formula": "K2AgAsBr6",
    "ggaBandgapEV": 1.0701,
    "predictedBandgapEV": 2.127680000000009,
    "predictionStdEV": 0.3617068116582816,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0019",
    "formula": "DyScS3",
    "ggaBandgapEV": 1.7737,
    "predictedBandgapEV": 2.123180000000006,
    "predictionStdEV": 0.36303069787553666,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0020",
    "formula": "NdScS3",
    "ggaBandgapEV": 1.8593,
    "predictedBandgapEV": 2.109500000000007,
    "predictionStdEV": 0.36319464478430796,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0021",
    "formula": "K2AgBiBr6",
    "ggaBandgapEV": 1.5861,
    "predictedBandgapEV": 2.152520000000016,
    "predictionStdEV": 0.3645924431471391,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0022",
    "formula": "SmScS3",
    "ggaBandgapEV": 1.8363,
    "predictedBandgapEV": 2.127260000000005,
    "predictionStdEV": 0.3672970084277852,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0023",
    "formula": "SmLuSe3",
    "ggaBandgapEV": 0.7935,
    "predictedBandgapEV": 1.6244400000000048,
    "predictionStdEV": 0.36938636466442587,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0024",
    "formula": "KSnI3",
    "ggaBandgapEV": 1.9402,
    "predictedBandgapEV": 1.8401999999999998,
    "predictionStdEV": 0.3714731839581419,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0025",
    "formula": "PrScS3",
    "ggaBandgapEV": 1.8377,
    "predictedBandgapEV": 2.1132600000000052,
    "predictionStdEV": 0.37168208512114337,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0026",
    "formula": "Cs2AgSbI6",
    "ggaBandgapEV": 1.0985,
    "predictedBandgapEV": 1.6251399999999978,
    "predictionStdEV": 0.37319509696672076,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0027",
    "formula": "LaScS3",
    "ggaBandgapEV": 1.6446,
    "predictedBandgapEV": 2.067380000000007,
    "predictionStdEV": 0.3744453706483763,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0028",
    "formula": "SrHfS3",
    "ggaBandgapEV": 2.0461,
    "predictedBandgapEV": 2.109750000000001,
    "predictionStdEV": 0.3860393600398801,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0029",
    "formula": "BaHfS3",
    "ggaBandgapEV": 0.8641,
    "predictedBandgapEV": 1.8244700000000085,
    "predictionStdEV": 0.3902689701987597,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0030",
    "formula": "Rb2AgSbI6",
    "ggaBandgapEV": 1.096,
    "predictedBandgapEV": 1.6070799999999985,
    "predictionStdEV": 0.39483955424957196,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0031",
    "formula": "Rb2CuSbBr6",
    "ggaBandgapEV": 0.4366,
    "predictedBandgapEV": 2.099950000000011,
    "predictionStdEV": 0.3985446618636366,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0032",
    "formula": "Cs2TlBiI6",
    "ggaBandgapEV": 1.3723,
    "predictedBandgapEV": 1.6504800000000048,
    "predictionStdEV": 0.4017145374516595,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0033",
    "formula": "Cs2CuBiBr6",
    "ggaBandgapEV": 0.8917,
    "predictedBandgapEV": 2.109120000000017,
    "predictionStdEV": 0.4032438785648219,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0034",
    "formula": "Cs2CuSbI6",
    "ggaBandgapEV": 0.7476,
    "predictedBandgapEV": 1.72672,
    "predictionStdEV": 0.4055465960897704,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0035",
    "formula": "Rb2CuBiBr6",
    "ggaBandgapEV": 0.9088,
    "predictedBandgapEV": 2.0851600000000152,
    "predictionStdEV": 0.4058770434503531,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0036",
    "formula": "Cs2AgBiI6",
    "ggaBandgapEV": 1.425,
    "predictedBandgapEV": 1.6856700000000036,
    "predictionStdEV": 0.4167014532012097,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0037",
    "formula": "CdPS3",
    "ggaBandgapEV": 2.1211,
    "predictedBandgapEV": 2.354759999999998,
    "predictionStdEV": 0.41995588149233015,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0038",
    "formula": "Cs2CuSbCl6",
    "ggaBandgapEV": 0.9493,
    "predictedBandgapEV": 2.5959299999999774,
    "predictionStdEV": 0.4199927202940549,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0039",
    "formula": "RbGeBr3",
    "ggaBandgapEV": 1.9851,
    "predictedBandgapEV": 1.9112600000000028,
    "predictionStdEV": 0.4219315257242584,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0040",
    "formula": "Rb2AgSbCl6",
    "ggaBandgapEV": 1.642,
    "predictedBandgapEV": 2.591059999999979,
    "predictionStdEV": 0.42404419156498196,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0041",
    "formula": "K2CuSbBr6",
    "ggaBandgapEV": 0.4312,
    "predictedBandgapEV": 2.1247100000000088,
    "predictionStdEV": 0.424142035054297,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0042",
    "formula": "AcFeO3",
    "ggaBandgapEV": 1.1671,
    "predictedBandgapEV": 2.0670099999999945,
    "predictionStdEV": 0.4242801078297207,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0043",
    "formula": "CaPSe3",
    "ggaBandgapEV": 2.1698,
    "predictedBandgapEV": 2.190610000000003,
    "predictionStdEV": 0.42435206833477296,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0044",
    "formula": "PrVO3",
    "ggaBandgapEV": 1.3016,
    "predictedBandgapEV": 1.6150800000000083,
    "predictionStdEV": 0.430500863646056,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0045",
    "formula": "Cs2TlAsI6",
    "ggaBandgapEV": 0.9989,
    "predictedBandgapEV": 1.6921300000000021,
    "predictionStdEV": 0.4362032933163169,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0046",
    "formula": "Rb2AgBiI6",
    "ggaBandgapEV": 1.42,
    "predictedBandgapEV": 1.6255300000000017,
    "predictionStdEV": 0.43930020384698315,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0047",
    "formula": "Cs2TlSbI6",
    "ggaBandgapEV": 0.9276,
    "predictedBandgapEV": 1.6619900000000025,
    "predictionStdEV": 0.44020664454321856,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0048",
    "formula": "MnPS3",
    "ggaBandgapEV": 0.2186,
    "predictedBandgapEV": 2.2721800000000023,
    "predictionStdEV": 0.44231781289023453,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0049",
    "formula": "Rb2CuSbI6",
    "ggaBandgapEV": 0.754,
    "predictedBandgapEV": 1.65956,
    "predictionStdEV": 0.4433921587037812,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0050",
    "formula": "RbPbI3",
    "ggaBandgapEV": 2.4576,
    "predictedBandgapEV": 2.3575999999999997,
    "predictionStdEV": 0.4502690289149377,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0051",
    "formula": "EuZrS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.978740000000006,
    "predictionStdEV": 0.4517337848777755,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0052",
    "formula": "CdPSe3",
    "ggaBandgapEV": 1.2818,
    "predictedBandgapEV": 2.203580000000004,
    "predictionStdEV": 0.45288561867208876,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0053",
    "formula": "SrPSe3",
    "ggaBandgapEV": 2.1432,
    "predictedBandgapEV": 2.145050000000004,
    "predictionStdEV": 0.4553653999811577,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0054",
    "formula": "Cs2SbAuBr6",
    "ggaBandgapEV": 0.3019,
    "predictedBandgapEV": 2.1309400000000145,
    "predictionStdEV": 0.45549480392206515,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0055",
    "formula": "Ca2NbCrO6",
    "ggaBandgapEV": 2.7019,
    "predictedBandgapEV": 3.4857400000000047,
    "predictionStdEV": 0.4558109831936922,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0056",
    "formula": "Cs2CuBiCl6",
    "ggaBandgapEV": 1.1557,
    "predictedBandgapEV": 2.6344299999999863,
    "predictionStdEV": 0.45922502664815557,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0057",
    "formula": "InSbS3",
    "ggaBandgapEV": 1.5012,
    "predictedBandgapEV": 2.1862799999999996,
    "predictionStdEV": 0.46117432886057375,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0058",
    "formula": "Rb2SbAuBr6",
    "ggaBandgapEV": 0.274,
    "predictedBandgapEV": 2.1197400000000126,
    "predictionStdEV": 0.4628428809002043,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0059",
    "formula": "KVO3",
    "ggaBandgapEV": 3.0727,
    "predictedBandgapEV": 2.9727,
    "predictionStdEV": 0.4640178203474503,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0060",
    "formula": "K2CuBiBr6",
    "ggaBandgapEV": 0.8929,
    "predictedBandgapEV": 2.124840000000013,
    "predictionStdEV": 0.4663511277996445,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0061",
    "formula": "SmGdS3",
    "ggaBandgapEV": 0.679,
    "predictedBandgapEV": 1.9658400000000047,
    "predictionStdEV": 0.4672073355588499,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0062",
    "formula": "Cs2InSbI6",
    "ggaBandgapEV": 0.6012,
    "predictedBandgapEV": 1.6084299999999954,
    "predictionStdEV": 0.47037600395853557,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0063",
    "formula": "KGeBr3",
    "ggaBandgapEV": 2.1307,
    "predictedBandgapEV": 2.0307,
    "predictionStdEV": 0.4714411823334902,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0064",
    "formula": "InGaS3",
    "ggaBandgapEV": 0.0422,
    "predictedBandgapEV": 2.1977199999999963,
    "predictionStdEV": 0.4719750010328945,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0065",
    "formula": "KSnBr3",
    "ggaBandgapEV": 2.2706,
    "predictedBandgapEV": 2.1706,
    "predictionStdEV": 0.473276891047937,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0066",
    "formula": "Cs2SbAuI6",
    "ggaBandgapEV": 0.519,
    "predictedBandgapEV": 1.7018300000000044,
    "predictionStdEV": 0.4739607590296909,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0067",
    "formula": "Rb2TlSbI6",
    "ggaBandgapEV": 0.8696,
    "predictedBandgapEV": 1.6172900000000001,
    "predictionStdEV": 0.4743533555272908,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0068",
    "formula": "Rb2TlAsI6",
    "ggaBandgapEV": 0.9094,
    "predictedBandgapEV": 1.6377700000000006,
    "predictionStdEV": 0.47605953104627613,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0069",
    "formula": "Rb2AsAuBr6",
    "ggaBandgapEV": 0.2061,
    "predictedBandgapEV": 2.1461800000000104,
    "predictionStdEV": 0.4779102505701254,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0070",
    "formula": "Cs2AsAuBr6",
    "ggaBandgapEV": 0.242,
    "predictedBandgapEV": 2.156020000000012,
    "predictionStdEV": 0.4803521204283376,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0071",
    "formula": "Cs2CuAsCl6",
    "ggaBandgapEV": 0.8879,
    "predictedBandgapEV": 2.6229299999999798,
    "predictionStdEV": 0.48150375398328804,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0072",
    "formula": "RbPbBr3",
    "ggaBandgapEV": 2.823,
    "predictedBandgapEV": 2.723,
    "predictionStdEV": 0.48261881272905105,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0073",
    "formula": "CsVO3",
    "ggaBandgapEV": 3.1287,
    "predictedBandgapEV": 3.0286999999999997,
    "predictionStdEV": 0.4829120578324776,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0074",
    "formula": "RbNbO3",
    "ggaBandgapEV": 1.409,
    "predictedBandgapEV": 3.0835699999999857,
    "predictionStdEV": 0.48691899233856306,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0075",
    "formula": "K2AgSbI6",
    "ggaBandgapEV": 1.0827,
    "predictedBandgapEV": 1.6820199999999998,
    "predictionStdEV": 0.4876795255083001,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0076",
    "formula": "SnPS3",
    "ggaBandgapEV": 1.2294,
    "predictedBandgapEV": 2.2788600000000065,
    "predictionStdEV": 0.48797797122411196,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0077",
    "formula": "Rb2SbAuI6",
    "ggaBandgapEV": 0.5175,
    "predictedBandgapEV": 1.675890000000003,
    "predictionStdEV": 0.488400509725369,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0078",
    "formula": "GePdS3",
    "ggaBandgapEV": 1.3728,
    "predictedBandgapEV": 2.2273200000000064,
    "predictionStdEV": 0.4884354794647898,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0079",
    "formula": "Rb2InSbI6",
    "ggaBandgapEV": 0.5548,
    "predictedBandgapEV": 1.622209999999996,
    "predictionStdEV": 0.4885869072130357,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0080",
    "formula": "Cs2InAsI6",
    "ggaBandgapEV": 0.1191,
    "predictedBandgapEV": 1.742619999999999,
    "predictionStdEV": 0.4886536970084225,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0081",
    "formula": "EuZrSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7921000000000014,
    "predictionStdEV": 0.4888220432836468,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0082",
    "formula": "ZrSnS3",
    "ggaBandgapEV": 1.0325,
    "predictedBandgapEV": 2.219640000000001,
    "predictionStdEV": 0.48974265732116823,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0083",
    "formula": "K2AgBiCl6",
    "ggaBandgapEV": 2.0727,
    "predictedBandgapEV": 2.765799999999987,
    "predictionStdEV": 0.49047279231370217,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0084",
    "formula": "Rb2AgAsCl6",
    "ggaBandgapEV": 1.5581,
    "predictedBandgapEV": 2.609299999999981,
    "predictionStdEV": 0.49281528994137197,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0085",
    "formula": "CsTeSe3",
    "ggaBandgapEV": 0.8689,
    "predictedBandgapEV": 1.868700000000005,
    "predictionStdEV": 0.49306035127558195,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0086",
    "formula": "Cs2TlAsCl6",
    "ggaBandgapEV": 2.076,
    "predictedBandgapEV": 2.9986599999999988,
    "predictionStdEV": 0.4932305793439804,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0087",
    "formula": "Cs2AsAuI6",
    "ggaBandgapEV": 0.2084,
    "predictedBandgapEV": 1.7443800000000045,
    "predictionStdEV": 0.496638717379143,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0088",
    "formula": "SrTiS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.100210000000001,
    "predictionStdEV": 0.4971333884381544,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0089",
    "formula": "Cs2CuBiI6",
    "ggaBandgapEV": 0.8132,
    "predictedBandgapEV": 1.7164300000000035,
    "predictionStdEV": 0.49746548131503515,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0090",
    "formula": "TbMgS3",
    "ggaBandgapEV": 0.1575,
    "predictedBandgapEV": 2.0823700000000023,
    "predictionStdEV": 0.4974676201523058,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0091",
    "formula": "Ba2TiVS6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.928760000000006,
    "predictionStdEV": 0.49776024590157875,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0092",
    "formula": "LuVO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3963800000000013,
    "predictionStdEV": 0.5003074011045616,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0093",
    "formula": "SrZrSe3",
    "ggaBandgapEV": 0.1669,
    "predictedBandgapEV": 1.839809999999996,
    "predictionStdEV": 0.5007170996680668,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0094",
    "formula": "PrTmS3",
    "ggaBandgapEV": 0.6419,
    "predictedBandgapEV": 1.847940000000002,
    "predictionStdEV": 0.5037550559547773,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0095",
    "formula": "Cs2DyAuCl6",
    "ggaBandgapEV": 2.1786,
    "predictedBandgapEV": 2.925999999999993,
    "predictionStdEV": 0.5054099326289494,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0096",
    "formula": "K2SbAuBr6",
    "ggaBandgapEV": 0.2596,
    "predictedBandgapEV": 2.1659800000000105,
    "predictionStdEV": 0.5057325771591149,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0097",
    "formula": "BaTiS3",
    "ggaBandgapEV": 0.0437,
    "predictedBandgapEV": 2.018720000000007,
    "predictionStdEV": 0.5062161214343147,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0098",
    "formula": "KZnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5533200000000016,
    "predictionStdEV": 0.506227002045523,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0099",
    "formula": "Cs2TlBiCl6",
    "ggaBandgapEV": 2.2076,
    "predictedBandgapEV": 2.9998600000000057,
    "predictionStdEV": 0.5077678410454917,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0100",
    "formula": "Rb2CuBiI6",
    "ggaBandgapEV": 0.84,
    "predictedBandgapEV": 1.6547900000000022,
    "predictionStdEV": 0.5079617169630017,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0101",
    "formula": "PrErS3",
    "ggaBandgapEV": 0.6391,
    "predictedBandgapEV": 1.8771000000000024,
    "predictionStdEV": 0.5084008162857341,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0102",
    "formula": "Cs2TlSbCl6",
    "ggaBandgapEV": 2.0339,
    "predictedBandgapEV": 3.0085000000000006,
    "predictionStdEV": 0.5089062290835119,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0103",
    "formula": "CsSnCl3",
    "ggaBandgapEV": 2.1315,
    "predictedBandgapEV": 2.8933999999999975,
    "predictionStdEV": 0.5090717434704074,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0104",
    "formula": "LaTmS3",
    "ggaBandgapEV": 0.8731,
    "predictedBandgapEV": 1.8967800000000044,
    "predictionStdEV": 0.5092019556128975,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0105",
    "formula": "Cs2TbAuCl6",
    "ggaBandgapEV": 2.2022,
    "predictedBandgapEV": 2.9576599999999953,
    "predictionStdEV": 0.5099720819809646,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0106",
    "formula": "K2AgBiI6",
    "ggaBandgapEV": 1.4194,
    "predictedBandgapEV": 1.6959700000000029,
    "predictionStdEV": 0.5100276552305762,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0107",
    "formula": "Rb2TlAsBr6",
    "ggaBandgapEV": 1.1354,
    "predictedBandgapEV": 2.116760000000007,
    "predictionStdEV": 0.5108771891560631,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0108",
    "formula": "Cs2TlGaI6",
    "ggaBandgapEV": 1.1177,
    "predictedBandgapEV": 1.7251200000000009,
    "predictionStdEV": 0.5122555862067293,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0109",
    "formula": "NdTmS3",
    "ggaBandgapEV": 0.6306,
    "predictedBandgapEV": 1.8331600000000023,
    "predictionStdEV": 0.5122593233900194,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0110",
    "formula": "K2CuSbI6",
    "ggaBandgapEV": 0.7581,
    "predictedBandgapEV": 1.7120199999999997,
    "predictionStdEV": 0.5123082271445577,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0111",
    "formula": "BaZrSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8431599999999988,
    "predictionStdEV": 0.5127802788719553,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0112",
    "formula": "Cs2RbSbCl6",
    "ggaBandgapEV": 3.5021,
    "predictedBandgapEV": 3.4021,
    "predictionStdEV": 0.5132577909783724,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0113",
    "formula": "SnPbS3",
    "ggaBandgapEV": 1.1473,
    "predictedBandgapEV": 2.1928199999999967,
    "predictionStdEV": 0.5133001535164383,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0114",
    "formula": "KPS3",
    "ggaBandgapEV": 1.7702,
    "predictedBandgapEV": 2.257880000000008,
    "predictionStdEV": 0.5142298178830168,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0115",
    "formula": "BaPSe3",
    "ggaBandgapEV": 2.1782,
    "predictedBandgapEV": 2.2004900000000034,
    "predictionStdEV": 0.5150664130964082,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0116",
    "formula": "PrLuS3",
    "ggaBandgapEV": 0.8091,
    "predictedBandgapEV": 1.792639999999999,
    "predictionStdEV": 0.5151809685925909,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0117",
    "formula": "CsSeBr3",
    "ggaBandgapEV": 1.205,
    "predictedBandgapEV": 2.061380000000006,
    "predictionStdEV": 0.5156261199745416,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0118",
    "formula": "PrMgS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0727800000000025,
    "predictionStdEV": 0.5167441064975969,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0119",
    "formula": "Cs2TlInI6",
    "ggaBandgapEV": 1.4067,
    "predictedBandgapEV": 1.708340000000002,
    "predictionStdEV": 0.5194969147165367,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0120",
    "formula": "NdLuS3",
    "ggaBandgapEV": 0.7232,
    "predictedBandgapEV": 1.7881200000000026,
    "predictionStdEV": 0.5205005913541303,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0121",
    "formula": "EuPS3",
    "ggaBandgapEV": 0.7967,
    "predictedBandgapEV": 2.153450000000002,
    "predictionStdEV": 0.5209291194586839,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0122",
    "formula": "YbNdSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.77466,
    "predictionStdEV": 0.5219364754450491,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0123",
    "formula": "SnPSe3",
    "ggaBandgapEV": 1.433,
    "predictedBandgapEV": 2.112520000000006,
    "predictionStdEV": 0.5220981225785064,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0124",
    "formula": "Yb2PrDyS6",
    "ggaBandgapEV": 1.2712,
    "predictedBandgapEV": 1.8468400000000014,
    "predictionStdEV": 0.5221804423760059,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0125",
    "formula": "Cs2NaSbCl6",
    "ggaBandgapEV": 3.1285,
    "predictedBandgapEV": 3.342080000000004,
    "predictionStdEV": 0.5228285317386583,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0126",
    "formula": "Cs2TlAsBr6",
    "ggaBandgapEV": 1.2309,
    "predictedBandgapEV": 2.1686200000000087,
    "predictionStdEV": 0.5237425852458436,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0127",
    "formula": "HoMgS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.102610000000003,
    "predictionStdEV": 0.5238095435365796,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0128",
    "formula": "Cs2InGaI6",
    "ggaBandgapEV": 0.9168,
    "predictedBandgapEV": 1.7594599999999985,
    "predictionStdEV": 0.5245995695766444,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0129",
    "formula": "SrSnS3",
    "ggaBandgapEV": 0.8722,
    "predictedBandgapEV": 2.290970000000001,
    "predictionStdEV": 0.525453051280511,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0130",
    "formula": "BaSnS3",
    "ggaBandgapEV": 0.8556,
    "predictedBandgapEV": 2.28063,
    "predictionStdEV": 0.5270361022738383,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0131",
    "formula": "Cs2BiAuI6",
    "ggaBandgapEV": 0.5611,
    "predictedBandgapEV": 1.670230000000006,
    "predictionStdEV": 0.527747569487535,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0132",
    "formula": "KPbI3",
    "ggaBandgapEV": 2.4304,
    "predictedBandgapEV": 2.3304,
    "predictionStdEV": 0.528343622654803,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0133",
    "formula": "ZnPS3",
    "ggaBandgapEV": 2.0946,
    "predictedBandgapEV": 2.3940999999999995,
    "predictionStdEV": 0.5318937769893529,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0134",
    "formula": "YbPrSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7734799999999935,
    "predictionStdEV": 0.5320856036391133,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0135",
    "formula": "Cs2KSbCl6",
    "ggaBandgapEV": 3.4088,
    "predictedBandgapEV": 3.3087999999999997,
    "predictionStdEV": 0.5321955351184383,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0136",
    "formula": "CrPSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2217800000000025,
    "predictionStdEV": 0.5322896125231089,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0137",
    "formula": "ErMgS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.105130000000004,
    "predictionStdEV": 0.5328284274510893,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0138",
    "formula": "Cs2HgPdCl6",
    "ggaBandgapEV": 1.2979,
    "predictedBandgapEV": 2.694699999999986,
    "predictionStdEV": 0.5335497258925339,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0139",
    "formula": "Cs2IBrCl6",
    "ggaBandgapEV": 1.1674,
    "predictedBandgapEV": 2.7081799999999903,
    "predictionStdEV": 0.5336763884602712,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0140",
    "formula": "Cs2RbAsCl6",
    "ggaBandgapEV": 3.4902,
    "predictedBandgapEV": 3.3902,
    "predictionStdEV": 0.5353224355470252,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0141",
    "formula": "K2AsAuBr6",
    "ggaBandgapEV": 0.1848,
    "predictedBandgapEV": 2.1800200000000096,
    "predictionStdEV": 0.5360686519467448,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0142",
    "formula": "Cs2BiAuBr6",
    "ggaBandgapEV": 0.4446,
    "predictedBandgapEV": 2.1172200000000134,
    "predictionStdEV": 0.5367241112526993,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0143",
    "formula": "Rb2TlInI6",
    "ggaBandgapEV": 1.4027,
    "predictedBandgapEV": 1.6657000000000004,
    "predictionStdEV": 0.5372523708649405,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0144",
    "formula": "RbInI3",
    "ggaBandgapEV": 0.7159,
    "predictedBandgapEV": 1.6326999999999954,
    "predictionStdEV": 0.5380867123429091,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0145",
    "formula": "LaErS3",
    "ggaBandgapEV": 0.6519,
    "predictedBandgapEV": 1.888580000000004,
    "predictionStdEV": 0.5381046214259824,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0146",
    "formula": "CaCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4920500000000008,
    "predictionStdEV": 0.5401711279770518,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0147",
    "formula": "Cs2ErAuCl6",
    "ggaBandgapEV": 2.1261,
    "predictedBandgapEV": 2.8966599999999936,
    "predictionStdEV": 0.5405025850076947,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0148",
    "formula": "NaZnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.565840000000001,
    "predictionStdEV": 0.5408736399566901,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0149",
    "formula": "Cs2InAsBr6",
    "ggaBandgapEV": 0.7401,
    "predictedBandgapEV": 2.1358400000000044,
    "predictionStdEV": 0.5416702819981899,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0150",
    "formula": "CsHgBr3",
    "ggaBandgapEV": 1.9018,
    "predictedBandgapEV": 2.2201200000000063,
    "predictionStdEV": 0.5419638231468976,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0151",
    "formula": "BaTeS3",
    "ggaBandgapEV": 1.949,
    "predictedBandgapEV": 2.230250000000001,
    "predictionStdEV": 0.5419728660182175,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0152",
    "formula": "Rb2TlGaI6",
    "ggaBandgapEV": 1.1037,
    "predictedBandgapEV": 1.6797800000000003,
    "predictionStdEV": 0.5433427570143916,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0153",
    "formula": "Cs2SbAuCl6",
    "ggaBandgapEV": 0.4246,
    "predictedBandgapEV": 2.5822099999999892,
    "predictionStdEV": 0.5441656603461859,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0154",
    "formula": "Rb2CuBiCl6",
    "ggaBandgapEV": 1.142,
    "predictedBandgapEV": 2.607789999999989,
    "predictionStdEV": 0.5444413337541508,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0155",
    "formula": "Rb2BiAuI6",
    "ggaBandgapEV": 0.5536,
    "predictedBandgapEV": 1.6250900000000037,
    "predictionStdEV": 0.5446019113995104,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0156",
    "formula": "CsGeCl3",
    "ggaBandgapEV": 2.848,
    "predictedBandgapEV": 3.008419999999998,
    "predictionStdEV": 0.5447984063853344,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0157",
    "formula": "Cs2NaAsCl6",
    "ggaBandgapEV": 3.1542,
    "predictedBandgapEV": 3.326120000000003,
    "predictionStdEV": 0.544817901321167,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0158",
    "formula": "Cs2LaAuCl6",
    "ggaBandgapEV": 2.3005,
    "predictedBandgapEV": 3.0075399999999957,
    "predictionStdEV": 0.5452699775340657,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0159",
    "formula": "Cs2InBiI6",
    "ggaBandgapEV": 0.5807,
    "predictedBandgapEV": 1.6807700000000028,
    "predictionStdEV": 0.545599355846393,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0160",
    "formula": "PrMgSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9374199999999981,
    "predictionStdEV": 0.5464389660337197,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0161",
    "formula": "Rb2BiAuBr6",
    "ggaBandgapEV": 0.4238,
    "predictedBandgapEV": 2.088720000000013,
    "predictionStdEV": 0.5469963999881531,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0162",
    "formula": "TlPS3",
    "ggaBandgapEV": 1.7793,
    "predictedBandgapEV": 2.3074400000000015,
    "predictionStdEV": 0.5471524891654975,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0163",
    "formula": "TmMgS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.090150000000004,
    "predictionStdEV": 0.54774266540046,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0164",
    "formula": "BaVS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8833800000000052,
    "predictionStdEV": 0.5477936432635921,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0165",
    "formula": "K2TlAsI6",
    "ggaBandgapEV": 0.8538,
    "predictedBandgapEV": 1.7067700000000015,
    "predictionStdEV": 0.5480527502896049,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0166",
    "formula": "CsAuSe3",
    "ggaBandgapEV": 1.3438,
    "predictedBandgapEV": 1.9859500000000057,
    "predictionStdEV": 0.5487969091567485,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0167",
    "formula": "K2AgSbCl6",
    "ggaBandgapEV": 1.6218,
    "predictedBandgapEV": 2.6696199999999823,
    "predictionStdEV": 0.5491776175337082,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0168",
    "formula": "K2TlAsBr6",
    "ggaBandgapEV": 1.5944,
    "predictedBandgapEV": 2.161800000000006,
    "predictionStdEV": 0.550065414291792,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0169",
    "formula": "CsPS3",
    "ggaBandgapEV": 1.9445,
    "predictedBandgapEV": 2.4806400000000006,
    "predictionStdEV": 0.5501781442405724,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0170",
    "formula": "CeTmS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8826400000000048,
    "predictionStdEV": 0.5506645352662543,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0171",
    "formula": "Cs2SmAuCl6",
    "ggaBandgapEV": 2.2743,
    "predictedBandgapEV": 2.950899999999994,
    "predictionStdEV": 0.5506866531885446,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0172",
    "formula": "ZnSnS3",
    "ggaBandgapEV": 0.4952,
    "predictedBandgapEV": 2.3338799999999984,
    "predictionStdEV": 0.5508028191648987,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0173",
    "formula": "Rb2DyAuCl6",
    "ggaBandgapEV": 2.2051,
    "predictedBandgapEV": 2.903399999999994,
    "predictionStdEV": 0.5513735938544756,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0174",
    "formula": "K2SbAuI6",
    "ggaBandgapEV": 0.5168,
    "predictedBandgapEV": 1.7406700000000037,
    "predictionStdEV": 0.551479193714505,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0175",
    "formula": "CeScS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.140380000000008,
    "predictionStdEV": 0.5520688866436873,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0176",
    "formula": "NdMgSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9547200000000002,
    "predictionStdEV": 0.552588926418183,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0177",
    "formula": "K2CuBiI6",
    "ggaBandgapEV": 0.8448,
    "predictedBandgapEV": 1.703370000000003,
    "predictionStdEV": 0.5531114653485315,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0178",
    "formula": "Cs2TlBiBr6",
    "ggaBandgapEV": 1.7293,
    "predictedBandgapEV": 2.2129600000000065,
    "predictionStdEV": 0.5537552152350355,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0179",
    "formula": "Rb2TlSbBr6",
    "ggaBandgapEV": 1.1569,
    "predictedBandgapEV": 2.1188800000000074,
    "predictionStdEV": 0.5537663276148167,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0180",
    "formula": "YbGdS3",
    "ggaBandgapEV": 0.1958,
    "predictedBandgapEV": 1.8403500000000013,
    "predictionStdEV": 0.5539622076459724,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0181",
    "formula": "YbMgS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.124670000000002,
    "predictionStdEV": 0.5544485919361686,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0182",
    "formula": "CeErS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.915040000000005,
    "predictionStdEV": 0.5544995927861441,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0183",
    "formula": "Cs2TlSbBr6",
    "ggaBandgapEV": 1.2264,
    "predictedBandgapEV": 2.1759600000000088,
    "predictionStdEV": 0.5545950580378446,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0184",
    "formula": "CsNbO3",
    "ggaBandgapEV": 3.319,
    "predictedBandgapEV": 3.223019999999997,
    "predictionStdEV": 0.5563102368283368,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0185",
    "formula": "Rb2InGaI6",
    "ggaBandgapEV": 0.8966,
    "predictedBandgapEV": 1.6951399999999976,
    "predictionStdEV": 0.5582366705976946,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0186",
    "formula": "Cs2InBiCl6",
    "ggaBandgapEV": 1.7793,
    "predictedBandgapEV": 3.0329200000000016,
    "predictionStdEV": 0.558260399455307,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0187",
    "formula": "PmMgSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9408599999999996,
    "predictionStdEV": 0.5590018429307724,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0188",
    "formula": "EuPSe3",
    "ggaBandgapEV": 0.4305,
    "predictedBandgapEV": 2.0727500000000028,
    "predictionStdEV": 0.5591090121792,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0189",
    "formula": "Cs2NdAuCl6",
    "ggaBandgapEV": 2.2249,
    "predictedBandgapEV": 2.932339999999994,
    "predictionStdEV": 0.5593720804616553,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0190",
    "formula": "Cs2HgSbI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6829900000000029,
    "predictionStdEV": 0.5605698082308749,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0191",
    "formula": "Cs2InSbBr6",
    "ggaBandgapEV": 0.7683,
    "predictedBandgapEV": 2.137920000000005,
    "predictionStdEV": 0.5623945888786626,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0192",
    "formula": "K2InSbI6",
    "ggaBandgapEV": 0.536,
    "predictedBandgapEV": 1.6917699999999978,
    "predictionStdEV": 0.5629169717640433,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0193",
    "formula": "YbSmSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.797880000000003,
    "predictionStdEV": 0.5632504821125315,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0194",
    "formula": "Cs2PrAuCl6",
    "ggaBandgapEV": 2.2164,
    "predictedBandgapEV": 2.930999999999994,
    "predictionStdEV": 0.5633096839217316,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0195",
    "formula": "Rb2TbAuCl6",
    "ggaBandgapEV": 2.2289,
    "predictedBandgapEV": 2.9283199999999963,
    "predictionStdEV": 0.5634837864570738,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0196",
    "formula": "Cs2KAsCl6",
    "ggaBandgapEV": 3.4842,
    "predictedBandgapEV": 3.3842,
    "predictionStdEV": 0.563556380143105,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0197",
    "formula": "Cs2BiAuCl6",
    "ggaBandgapEV": 1.0125,
    "predictedBandgapEV": 2.621289999999992,
    "predictionStdEV": 0.5638698306346953,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0198",
    "formula": "LaVS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8175400000000053,
    "predictionStdEV": 0.5640703399399756,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0199",
    "formula": "DyMgS3",
    "ggaBandgapEV": 0.1721,
    "predictedBandgapEV": 2.1033500000000025,
    "predictionStdEV": 0.5650269263495338,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0200",
    "formula": "TbMgSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9419400000000002,
    "predictionStdEV": 0.5661222804306507,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0201",
    "formula": "CeMgS3",
    "ggaBandgapEV": 0.33,
    "predictedBandgapEV": 2.0980900000000027,
    "predictionStdEV": 0.5670456788478327,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0202",
    "formula": "CeDyS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.934260000000005,
    "predictionStdEV": 0.5670721756531525,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0203",
    "formula": "Cs2AsAuCl6",
    "ggaBandgapEV": 0.3272,
    "predictedBandgapEV": 2.6073899999999903,
    "predictionStdEV": 0.5672949302611483,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0204",
    "formula": "YScS3",
    "ggaBandgapEV": 1.7758,
    "predictedBandgapEV": 2.2521200000000015,
    "predictionStdEV": 0.5676054136457819,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0205",
    "formula": "Rb2TlBiBr6",
    "ggaBandgapEV": 1.6668,
    "predictedBandgapEV": 2.1562800000000064,
    "predictionStdEV": 0.5683510900842896,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0206",
    "formula": "PmMgS3",
    "ggaBandgapEV": 0.1634,
    "predictedBandgapEV": 2.0836900000000025,
    "predictionStdEV": 0.5687519968316591,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0207",
    "formula": "Rb2HgSbI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6653700000000025,
    "predictionStdEV": 0.5688846219577397,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0208",
    "formula": "EuGeS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1791400000000003,
    "predictionStdEV": 0.5696267728960775,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0209",
    "formula": "Rb2TlSbCl6",
    "ggaBandgapEV": 1.9851,
    "predictedBandgapEV": 2.9431200000000004,
    "predictionStdEV": 0.5698746051545018,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0210",
    "formula": "VPS3",
    "ggaBandgapEV": 0.1437,
    "predictedBandgapEV": 2.084400000000003,
    "predictionStdEV": 0.5705672966443128,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0211",
    "formula": "YbCeSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7755999999999945,
    "predictionStdEV": 0.573150800400732,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0212",
    "formula": "Rb2ErAuCl6",
    "ggaBandgapEV": 2.1579,
    "predictedBandgapEV": 2.868859999999994,
    "predictionStdEV": 0.5733223355146733,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0213",
    "formula": "Rb2TmAuCl6",
    "ggaBandgapEV": 2.1332,
    "predictedBandgapEV": 2.870279999999994,
    "predictionStdEV": 0.5747343052228566,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0214",
    "formula": "Cs2AgAuCl6",
    "ggaBandgapEV": 0.7578,
    "predictedBandgapEV": 2.6343499999999866,
    "predictionStdEV": 0.5749855019911371,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0215",
    "formula": "Rb2SbAuCl6",
    "ggaBandgapEV": 0.3972,
    "predictedBandgapEV": 2.550029999999991,
    "predictionStdEV": 0.5768219388164776,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0216",
    "formula": "Rb2CuSbCl6",
    "ggaBandgapEV": 0.9346,
    "predictedBandgapEV": 2.6069299999999838,
    "predictionStdEV": 0.5770923887039239,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0217",
    "formula": "CsSnS3",
    "ggaBandgapEV": 1.7336,
    "predictedBandgapEV": 2.5010999999999997,
    "predictionStdEV": 0.5782191539546244,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0218",
    "formula": "Rb2BiAuCl6",
    "ggaBandgapEV": 0.999,
    "predictedBandgapEV": 2.5802499999999933,
    "predictionStdEV": 0.5789179453946826,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0219",
    "formula": "Rb2TlAsCl6",
    "ggaBandgapEV": 1.9956,
    "predictedBandgapEV": 2.9643200000000016,
    "predictionStdEV": 0.5791287746261633,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0220",
    "formula": "BaTiSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.96838,
    "predictionStdEV": 0.5808290416292899,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0221",
    "formula": "SmMgS3",
    "ggaBandgapEV": 0.1779,
    "predictedBandgapEV": 2.1150300000000013,
    "predictionStdEV": 0.5851474592784288,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0222",
    "formula": "Cs2DyCuCl6",
    "ggaBandgapEV": 2.3142,
    "predictedBandgapEV": 2.9791199999999898,
    "predictionStdEV": 0.5855530937498318,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0223",
    "formula": "Cs2YAuCl6",
    "ggaBandgapEV": 2.2507,
    "predictedBandgapEV": 2.9859399999999945,
    "predictionStdEV": 0.5862638624373844,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0224",
    "formula": "TiGeS3",
    "ggaBandgapEV": 0.3554,
    "predictedBandgapEV": 2.21582,
    "predictionStdEV": 0.5864257221507263,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0225",
    "formula": "CsSnSe3",
    "ggaBandgapEV": 1.0499,
    "predictedBandgapEV": 1.978340000000001,
    "predictionStdEV": 0.5869407503317517,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0226",
    "formula": "BaNdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0184799999999985,
    "predictionStdEV": 0.5879160565931171,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0227",
    "formula": "Cs2TmCuCl6",
    "ggaBandgapEV": 2.4663,
    "predictedBandgapEV": 2.9851599999999907,
    "predictionStdEV": 0.5879477650267929,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0228",
    "formula": "BaGeS3",
    "ggaBandgapEV": 2.4494,
    "predictedBandgapEV": 2.44981,
    "predictionStdEV": 0.5879563027130498,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0229",
    "formula": "BaCdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.386260000000002,
    "predictionStdEV": 0.5879586825619632,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0230",
    "formula": "NdMnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6302800000000015,
    "predictionStdEV": 0.5897317369787723,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0231",
    "formula": "YbNdS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8668200000000028,
    "predictionStdEV": 0.5900885421697318,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0232",
    "formula": "TbVO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4505500000000022,
    "predictionStdEV": 0.590370517133096,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0233",
    "formula": "In2GaBiS6",
    "ggaBandgapEV": 1.8707,
    "predictedBandgapEV": 2.2570399999999986,
    "predictionStdEV": 0.5911653223929835,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0234",
    "formula": "CrSbS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1774200000000032,
    "predictionStdEV": 0.5918675051056617,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0235",
    "formula": "Cs2TlGaCl6",
    "ggaBandgapEV": 2.6752,
    "predictedBandgapEV": 3.1895000000000038,
    "predictionStdEV": 0.5919776600514584,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0236",
    "formula": "Rb2SmAuCl6",
    "ggaBandgapEV": 2.3032,
    "predictedBandgapEV": 2.9177999999999944,
    "predictionStdEV": 0.5930938880143681,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0237",
    "formula": "Rb2InAsBr6",
    "ggaBandgapEV": 0.6417,
    "predictedBandgapEV": 2.154610000000004,
    "predictionStdEV": 0.5932201934357924,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0238",
    "formula": "LaYbSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7382099999999983,
    "predictionStdEV": 0.5932945692486994,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0239",
    "formula": "Cs2InBiBr6",
    "ggaBandgapEV": 0.848,
    "predictedBandgapEV": 2.179600000000009,
    "predictionStdEV": 0.5936947363755205,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0240",
    "formula": "K2TlGaI6",
    "ggaBandgapEV": 1.0958,
    "predictedBandgapEV": 1.745200000000001,
    "predictionStdEV": 0.5941273937464936,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0241",
    "formula": "CsCdCl3",
    "ggaBandgapEV": 1.8515,
    "predictedBandgapEV": 2.8998799999999916,
    "predictionStdEV": 0.5942009639844078,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0242",
    "formula": "BaZnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.440860000000004,
    "predictionStdEV": 0.5944730947654409,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0243",
    "formula": "K2BiAuBr6",
    "ggaBandgapEV": 0.4074,
    "predictedBandgapEV": 2.108640000000012,
    "predictionStdEV": 0.5946427922711256,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0244",
    "formula": "Cs2ErCuCl6",
    "ggaBandgapEV": 2.48,
    "predictedBandgapEV": 2.9831999999999907,
    "predictionStdEV": 0.5954367808592276,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0245",
    "formula": "HoMgSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9545300000000005,
    "predictionStdEV": 0.5954747090347325,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0246",
    "formula": "Rb2InAsI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6828799999999984,
    "predictionStdEV": 0.5958791031744605,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0247",
    "formula": "Rb2InSbBr6",
    "ggaBandgapEV": 0.7026,
    "predictedBandgapEV": 2.146920000000004,
    "predictionStdEV": 0.5960551263096386,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0248",
    "formula": "MgInS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.340819999999999,
    "predictionStdEV": 0.5965667838557553,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0249",
    "formula": "CsCuBr3",
    "ggaBandgapEV": 0.3765,
    "predictedBandgapEV": 2.157460000000006,
    "predictionStdEV": 0.5965742605912513,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0250",
    "formula": "Cs2InAgBr6",
    "ggaBandgapEV": 0.2597,
    "predictedBandgapEV": 2.219320000000008,
    "predictionStdEV": 0.5966729737469258,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0251",
    "formula": "SmMgSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.975199999999999,
    "predictionStdEV": 0.5980556495845519,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0252",
    "formula": "RbTaO3",
    "ggaBandgapEV": 3.5455,
    "predictedBandgapEV": 3.4905999999999926,
    "predictionStdEV": 0.5981722494399079,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0253",
    "formula": "La2MnCoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.055200000000002,
    "predictionStdEV": 0.5986853597675503,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0254",
    "formula": "BaVSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8142899999999997,
    "predictionStdEV": 0.5988754844706871,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0255",
    "formula": "MgScSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.122100000000002,
    "predictionStdEV": 0.599017353671828,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0256",
    "formula": "K2DyAuCl6",
    "ggaBandgapEV": 2.2181,
    "predictedBandgapEV": 2.948319999999995,
    "predictionStdEV": 0.6001432975548439,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0257",
    "formula": "MgScS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2440400000000036,
    "predictionStdEV": 0.60051118091173,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0258",
    "formula": "Rb2LaAuCl6",
    "ggaBandgapEV": 2.3287,
    "predictedBandgapEV": 2.987499999999996,
    "predictionStdEV": 0.6012529833605811,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0259",
    "formula": "Cs2ScAuCl6",
    "ggaBandgapEV": 2.0623,
    "predictedBandgapEV": 2.9425799999999938,
    "predictionStdEV": 0.6018361434809301,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0260",
    "formula": "DyCrS3",
    "ggaBandgapEV": 0.2217,
    "predictedBandgapEV": 2.124010000000001,
    "predictionStdEV": 0.6018467993601025,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0261",
    "formula": "Cs2TbCuCl6",
    "ggaBandgapEV": 2.6108,
    "predictedBandgapEV": 3.034279999999991,
    "predictionStdEV": 0.6018671627527112,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0262",
    "formula": "Cs2LiSbCl6",
    "ggaBandgapEV": 2.9461,
    "predictedBandgapEV": 3.1768799999999966,
    "predictionStdEV": 0.6027588784912262,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0263",
    "formula": "RbSeBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.081660000000004,
    "predictionStdEV": 0.6034317230640098,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0264",
    "formula": "Rb2AsAuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.721190000000004,
    "predictionStdEV": 0.6040407551647483,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0265",
    "formula": "K2TlInI6",
    "ggaBandgapEV": 1.3884,
    "predictedBandgapEV": 1.742840000000001,
    "predictionStdEV": 0.6050576289908248,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0266",
    "formula": "Cs2TlInCl6",
    "ggaBandgapEV": 2.7088,
    "predictedBandgapEV": 3.248280000000007,
    "predictionStdEV": 0.6050720962001134,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0267",
    "formula": "Cs2HgSbBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.059510000000012,
    "predictionStdEV": 0.6052216204829429,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0268",
    "formula": "Rb2HgSbBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0465700000000107,
    "predictionStdEV": 0.6066575517538709,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0269",
    "formula": "LaTiS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9481800000000058,
    "predictionStdEV": 0.6077263262357492,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0270",
    "formula": "YbPrS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.883600000000002,
    "predictionStdEV": 0.6101506699168658,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0271",
    "formula": "K2AgAsCl6",
    "ggaBandgapEV": 1.5315,
    "predictedBandgapEV": 2.685819999999985,
    "predictionStdEV": 0.6102598852947821,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0272",
    "formula": "Rb2NdAuCl6",
    "ggaBandgapEV": 2.2535,
    "predictedBandgapEV": 2.900299999999993,
    "predictionStdEV": 0.6105598332677973,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0273",
    "formula": "KInI3",
    "ggaBandgapEV": 0.6688,
    "predictedBandgapEV": 1.7212599999999982,
    "predictionStdEV": 0.6109646572429548,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0274",
    "formula": "K2InAsBr6",
    "ggaBandgapEV": 0.5837,
    "predictedBandgapEV": 2.1688100000000032,
    "predictionStdEV": 0.6115622894685382,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0275",
    "formula": "K2TlSbBr6",
    "ggaBandgapEV": 1.1034,
    "predictedBandgapEV": 2.1474400000000062,
    "predictionStdEV": 0.6115699848749935,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0276",
    "formula": "EuHfS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.747260000000002,
    "predictionStdEV": 0.6118142629916373,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0277",
    "formula": "CeMgSe3",
    "ggaBandgapEV": 0.0867,
    "predictedBandgapEV": 1.934549999999998,
    "predictionStdEV": 0.6119658058257831,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0278",
    "formula": "PrCrSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9715399999999994,
    "predictionStdEV": 0.6122279219375739,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0279",
    "formula": "Cs2HgBiI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6460600000000059,
    "predictionStdEV": 0.6124334873274004,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0280",
    "formula": "Cs2GaAgBr6",
    "ggaBandgapEV": 0.0571,
    "predictedBandgapEV": 2.223520000000007,
    "predictionStdEV": 0.6125891850171706,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0281",
    "formula": "K2ErAuCl6",
    "ggaBandgapEV": 2.176,
    "predictedBandgapEV": 2.916619999999995,
    "predictionStdEV": 0.6126179687211275,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0282",
    "formula": "K2TaNbO6",
    "ggaBandgapEV": 1.7028,
    "predictedBandgapEV": 3.427259999999983,
    "predictionStdEV": 0.6129239695100855,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0283",
    "formula": "DyMgSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9687200000000002,
    "predictionStdEV": 0.6142696163737877,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0284",
    "formula": "Rb2PrAuCl6",
    "ggaBandgapEV": 2.2437,
    "predictedBandgapEV": 2.8960399999999935,
    "predictionStdEV": 0.6144141261396908,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0285",
    "formula": "K2TbAuCl6",
    "ggaBandgapEV": 2.2368,
    "predictedBandgapEV": 2.9777799999999974,
    "predictionStdEV": 0.6148405253396999,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0286",
    "formula": "LuMgSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8699100000000004,
    "predictionStdEV": 0.615120835202321,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0287",
    "formula": "Rb2AsAuCl6",
    "ggaBandgapEV": 0.2814,
    "predictedBandgapEV": 2.597819999999994,
    "predictionStdEV": 0.6165429811456768,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0288",
    "formula": "Rb2HgBiI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5984600000000035,
    "predictionStdEV": 0.6169093356401735,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0289",
    "formula": "TlAgCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.7405800000000076,
    "predictionStdEV": 0.6172855608225436,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0290",
    "formula": "LaLuS3",
    "ggaBandgapEV": 2.2322,
    "predictedBandgapEV": 2.1322,
    "predictionStdEV": 0.6175369563030206,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0291",
    "formula": "YbDyS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.849100000000001,
    "predictionStdEV": 0.6182916706539071,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0292",
    "formula": "La2MnVO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3273600000000056,
    "predictionStdEV": 0.6184844625372574,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0293",
    "formula": "RbZnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4542400000000004,
    "predictionStdEV": 0.6187784921924803,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0294",
    "formula": "RbPS3",
    "ggaBandgapEV": 0.0016,
    "predictedBandgapEV": 2.185190000000005,
    "predictionStdEV": 0.6194222420126678,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0295",
    "formula": "SrSbSe3",
    "ggaBandgapEV": 0.4018,
    "predictedBandgapEV": 1.8791000000000009,
    "predictionStdEV": 0.6197186377703999,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0296",
    "formula": "TmMgSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9532500000000008,
    "predictionStdEV": 0.6199187749213608,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0297",
    "formula": "ErMgSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.958450000000001,
    "predictionStdEV": 0.6201484076412681,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0298",
    "formula": "K2InGaI6",
    "ggaBandgapEV": 0.8532,
    "predictedBandgapEV": 1.779899999999998,
    "predictionStdEV": 0.6201827069501383,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0299",
    "formula": "NdCrS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1051800000000034,
    "predictionStdEV": 0.6204567411189925,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0300",
    "formula": "LiCdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5199000000000007,
    "predictionStdEV": 0.620663024514913,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0301",
    "formula": "Cs2GaAgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8076499999999998,
    "predictionStdEV": 0.621142678858892,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0302",
    "formula": "LaMgS3",
    "ggaBandgapEV": 0.5412,
    "predictedBandgapEV": 2.0889400000000022,
    "predictionStdEV": 0.6217593396162213,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0303",
    "formula": "Cs2SmCuCl6",
    "ggaBandgapEV": 2.6071,
    "predictedBandgapEV": 3.03855999999999,
    "predictionStdEV": 0.6224965272192281,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0304",
    "formula": "Rb2GaAgBr6",
    "ggaBandgapEV": 0.4002,
    "predictedBandgapEV": 2.2318300000000058,
    "predictionStdEV": 0.6227823866327623,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0305",
    "formula": "HfSnS3",
    "ggaBandgapEV": 1.2463,
    "predictedBandgapEV": 2.1148799999999977,
    "predictionStdEV": 0.6237087345869049,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0306",
    "formula": "LaSbSe3",
    "ggaBandgapEV": 0.973,
    "predictedBandgapEV": 1.7895300000000014,
    "predictionStdEV": 0.6241202040472652,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0307",
    "formula": "LaMgSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8916800000000007,
    "predictionStdEV": 0.6244379693772631,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0308",
    "formula": "Cs2TlGaBr6",
    "ggaBandgapEV": 1.7562,
    "predictedBandgapEV": 2.240080000000007,
    "predictionStdEV": 0.6248551781012953,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0309",
    "formula": "CsCdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4083599999999996,
    "predictionStdEV": 0.624866794124955,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0310",
    "formula": "YbMgSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9765100000000004,
    "predictionStdEV": 0.6249493338663545,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0311",
    "formula": "NdCrSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9620600000000021,
    "predictionStdEV": 0.6257567869388231,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0312",
    "formula": "K2BiAuCl6",
    "ggaBandgapEV": 0.9908,
    "predictedBandgapEV": 2.592269999999994,
    "predictionStdEV": 0.6268059485199536,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0313",
    "formula": "Rb2TlGaBr6",
    "ggaBandgapEV": 1.6747,
    "predictedBandgapEV": 2.2078000000000055,
    "predictionStdEV": 0.62713376563537,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0314",
    "formula": "Rb2InBiCl6",
    "ggaBandgapEV": 1.7024,
    "predictedBandgapEV": 2.9502800000000007,
    "predictionStdEV": 0.6274092138309728,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0315",
    "formula": "Rb2NaSbCl6",
    "ggaBandgapEV": 3.1339,
    "predictedBandgapEV": 3.2777000000000034,
    "predictionStdEV": 0.6299531014289868,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0316",
    "formula": "HoVO3",
    "ggaBandgapEV": 1.5714,
    "predictedBandgapEV": 2.0582600000000038,
    "predictionStdEV": 0.6302853103158897,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0317",
    "formula": "CsTlI3",
    "ggaBandgapEV": 0.4981,
    "predictedBandgapEV": 1.6032000000000033,
    "predictionStdEV": 0.6304735997644958,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0318",
    "formula": "MgZnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.543740000000004,
    "predictionStdEV": 0.6310370927291024,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0319",
    "formula": "CdPbO3",
    "ggaBandgapEV": 0.0011,
    "predictedBandgapEV": 1.715920000000003,
    "predictionStdEV": 0.6312509434448386,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0320",
    "formula": "Cs2InSbCl6",
    "ggaBandgapEV": 1.384,
    "predictedBandgapEV": 3.0226799999999954,
    "predictionStdEV": 0.6313484122099307,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0321",
    "formula": "K2InSbBr6",
    "ggaBandgapEV": 0.662,
    "predictedBandgapEV": 2.1697600000000037,
    "predictionStdEV": 0.6313698934855861,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0322",
    "formula": "K2HgSbI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7246100000000026,
    "predictionStdEV": 0.6323398594901309,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0323",
    "formula": "YbCeS3",
    "ggaBandgapEV": 0.1269,
    "predictedBandgapEV": 1.9454700000000027,
    "predictionStdEV": 0.6338911019252451,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0324",
    "formula": "CsAuI3",
    "ggaBandgapEV": 0.9509,
    "predictedBandgapEV": 1.7757100000000032,
    "predictionStdEV": 0.6341326721593835,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0325",
    "formula": "CeLuS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8094800000000022,
    "predictionStdEV": 0.6343835823852944,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0326",
    "formula": "K2TmAuCl6",
    "ggaBandgapEV": 2.1446,
    "predictedBandgapEV": 2.900399999999995,
    "predictionStdEV": 0.6345485324228565,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0327",
    "formula": "K2NaSbCl6",
    "ggaBandgapEV": 3.1387,
    "predictedBandgapEV": 3.3477000000000046,
    "predictionStdEV": 0.6357915617558956,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0328",
    "formula": "Cs2GaAgCl6",
    "ggaBandgapEV": 1.3071,
    "predictedBandgapEV": 3.0085599999999872,
    "predictionStdEV": 0.6368179695957089,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0329",
    "formula": "RbTlI3",
    "ggaBandgapEV": 0.4949,
    "predictedBandgapEV": 1.5752800000000018,
    "predictionStdEV": 0.6380844157319635,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0330",
    "formula": "SmCrS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1451400000000023,
    "predictionStdEV": 0.6386803428946283,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0331",
    "formula": "KCdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.486179999999999,
    "predictionStdEV": 0.6403011850684031,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0332",
    "formula": "MgPSe3",
    "ggaBandgapEV": 2.2957,
    "predictedBandgapEV": 2.3722399999999997,
    "predictionStdEV": 0.6405274251739728,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0333",
    "formula": "LiVS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0999600000000034,
    "predictionStdEV": 0.6410104510848481,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0334",
    "formula": "Cs2GdAuCl6",
    "ggaBandgapEV": 1.8479,
    "predictedBandgapEV": 2.9070499999999946,
    "predictionStdEV": 0.6411339544120249,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0335",
    "formula": "K2CuBiCl6",
    "ggaBandgapEV": 1.1971,
    "predictedBandgapEV": 2.6663299999999914,
    "predictionStdEV": 0.6415895737151607,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0336",
    "formula": "KMnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3637,
    "predictionStdEV": 0.6417258838476122,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0337",
    "formula": "RbCdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.462160000000001,
    "predictionStdEV": 0.6431992960195159,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0338",
    "formula": "BaCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.361190000000003,
    "predictionStdEV": 0.6437571233780641,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0339",
    "formula": "K2TlAsCl6",
    "ggaBandgapEV": 1.9414,
    "predictedBandgapEV": 2.9984400000000013,
    "predictionStdEV": 0.6438446756788465,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0340",
    "formula": "K2SmAuCl6",
    "ggaBandgapEV": 2.3004,
    "predictedBandgapEV": 2.9764199999999965,
    "predictionStdEV": 0.6441495040749469,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0341",
    "formula": "K2HgSbBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.085590000000009,
    "predictionStdEV": 0.6445019021694195,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0342",
    "formula": "Cs2KAsI6",
    "ggaBandgapEV": 2.1792,
    "predictedBandgapEV": 2.0791999999999997,
    "predictionStdEV": 0.6445917390100504,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0343",
    "formula": "UVS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7885300000000033,
    "predictionStdEV": 0.6446115800231947,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0344",
    "formula": "Cs2RbAsI6",
    "ggaBandgapEV": 2.3035,
    "predictedBandgapEV": 2.2035,
    "predictionStdEV": 0.6452241939047235,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0345",
    "formula": "Rb2InAgBr6",
    "ggaBandgapEV": 0.2283,
    "predictedBandgapEV": 2.2423800000000056,
    "predictionStdEV": 0.6455354642465424,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0346",
    "formula": "Cs2GaHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.786330000000002,
    "predictionStdEV": 0.6461131333597844,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0347",
    "formula": "Rb2GaAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.167040000000009,
    "predictionStdEV": 0.6466214800020175,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0348",
    "formula": "SrZnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3032499999999985,
    "predictionStdEV": 0.6467647079889258,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0349",
    "formula": "Rb2ScAuBr6",
    "ggaBandgapEV": 1.7702,
    "predictedBandgapEV": 2.3687400000000065,
    "predictionStdEV": 0.6475259163925418,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0350",
    "formula": "LaYbS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9088600000000033,
    "predictionStdEV": 0.6475366401988376,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0351",
    "formula": "Cs2ScAuBr6",
    "ggaBandgapEV": 1.7497,
    "predictedBandgapEV": 2.3761400000000075,
    "predictionStdEV": 0.6485337311196687,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0352",
    "formula": "K2InAsI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.761919999999999,
    "predictionStdEV": 0.6488409000671894,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0353",
    "formula": "CaSnS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2800699999999994,
    "predictionStdEV": 0.6501398657981214,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0354",
    "formula": "KHgI3",
    "ggaBandgapEV": 1.7724,
    "predictedBandgapEV": 1.8118800000000002,
    "predictionStdEV": 0.6506394282550068,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0355",
    "formula": "Rb2YAuCl6",
    "ggaBandgapEV": 2.2798,
    "predictedBandgapEV": 2.9951199999999956,
    "predictionStdEV": 0.6513501252014924,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0356",
    "formula": "RbCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3666600000000004,
    "predictionStdEV": 0.651501837602935,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0357",
    "formula": "Cs2TlHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7144200000000047,
    "predictionStdEV": 0.6518000181037121,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0358",
    "formula": "K2SbAuCl6",
    "ggaBandgapEV": 0.3757,
    "predictedBandgapEV": 2.616349999999993,
    "predictionStdEV": 0.6519343736143992,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0359",
    "formula": "Cs2AsBrCl6",
    "ggaBandgapEV": 0.0665,
    "predictedBandgapEV": 2.6646199999999887,
    "predictionStdEV": 0.6525677402385135,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0360",
    "formula": "Cs2InAsCl6",
    "ggaBandgapEV": 1.3637,
    "predictedBandgapEV": 3.046539999999995,
    "predictionStdEV": 0.6526063349370723,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0361",
    "formula": "Cs2GaAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1801600000000096,
    "predictionStdEV": 0.6527673968574101,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0362",
    "formula": "BaNbS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.931150000000005,
    "predictionStdEV": 0.6532733176090993,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0363",
    "formula": "Cs2RbTlCl6",
    "ggaBandgapEV": 2.491,
    "predictedBandgapEV": 3.285620000000003,
    "predictionStdEV": 0.6537995224837652,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0364",
    "formula": "CsAgBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0933800000000087,
    "predictionStdEV": 0.6562805616502739,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0365",
    "formula": "EuMnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7345400000000015,
    "predictionStdEV": 0.6567985904369769,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0366",
    "formula": "Cs2KBiBr6",
    "ggaBandgapEV": 3.5275,
    "predictedBandgapEV": 3.4274999999999998,
    "predictionStdEV": 0.6570042483880897,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0367",
    "formula": "ZrPbS3",
    "ggaBandgapEV": 1.2471,
    "predictedBandgapEV": 2.030969999999996,
    "predictionStdEV": 0.6576829852596163,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0368",
    "formula": "K2TlGaBr6",
    "ggaBandgapEV": 1.6214,
    "predictedBandgapEV": 2.2422200000000045,
    "predictionStdEV": 0.6577790446646966,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0369",
    "formula": "Cs2InGaBr6",
    "ggaBandgapEV": 1.2639,
    "predictedBandgapEV": 2.2421200000000034,
    "predictionStdEV": 0.6579579816371249,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0370",
    "formula": "CeCrSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.96188,
    "predictionStdEV": 0.6591534461716779,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0371",
    "formula": "RbAuI3",
    "ggaBandgapEV": 0.8883,
    "predictedBandgapEV": 1.7483100000000025,
    "predictionStdEV": 0.6593135778216606,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0372",
    "formula": "CsPdBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0909000000000075,
    "predictionStdEV": 0.6594096526439394,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0373",
    "formula": "Cs2InHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7454700000000012,
    "predictionStdEV": 0.6598952410042045,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0374",
    "formula": "MgCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4200000000000004,
    "predictionStdEV": 0.6602666128163664,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0375",
    "formula": "RbAgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.385820000000001,
    "predictionStdEV": 0.6611062906976454,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0376",
    "formula": "RbMnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2311400000000012,
    "predictionStdEV": 0.6614548362511246,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0377",
    "formula": "CeCrS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1042000000000036,
    "predictionStdEV": 0.6615100603921298,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0378",
    "formula": "K2AsAuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7865700000000035,
    "predictionStdEV": 0.6624419107363301,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0379",
    "formula": "Cs2InAgI6",
    "ggaBandgapEV": 0.0001,
    "predictedBandgapEV": 1.747549999999997,
    "predictionStdEV": 0.6625402233072345,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0380",
    "formula": "CsTaO3",
    "ggaBandgapEV": 1.8627,
    "predictedBandgapEV": 3.29016999999999,
    "predictionStdEV": 0.6629755810736915,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0381",
    "formula": "Rb2GaAgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7764900000000008,
    "predictionStdEV": 0.6630421026601552,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0382",
    "formula": "K2LaAuCl6",
    "ggaBandgapEV": 2.348,
    "predictedBandgapEV": 3.062119999999998,
    "predictionStdEV": 0.6636896154076835,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0383",
    "formula": "Rb2TlGaCl6",
    "ggaBandgapEV": 2.5999,
    "predictedBandgapEV": 3.164880000000004,
    "predictionStdEV": 0.6641338612057078,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0384",
    "formula": "Cs2InAgCl6",
    "ggaBandgapEV": 1.3724,
    "predictedBandgapEV": 3.0361199999999884,
    "predictionStdEV": 0.6642569876184963,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0385",
    "formula": "Cs2KTlCl6",
    "ggaBandgapEV": 2.3781,
    "predictedBandgapEV": 3.274820000000002,
    "predictionStdEV": 0.6643265519305999,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0386",
    "formula": "Rb2GaHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.743410000000001,
    "predictionStdEV": 0.6645701030741584,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0387",
    "formula": "Y2MnCoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2050400000000023,
    "predictionStdEV": 0.6647220459710956,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0388",
    "formula": "Cs2ScInCl6",
    "ggaBandgapEV": 2.838,
    "predictedBandgapEV": 3.4956800000000077,
    "predictionStdEV": 0.6649085182188581,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0389",
    "formula": "EuVO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5867000000000016,
    "predictionStdEV": 0.665351343276619,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0390",
    "formula": "Rb2TmCuCl6",
    "ggaBandgapEV": 2.506,
    "predictedBandgapEV": 3.016839999999995,
    "predictionStdEV": 0.6659717819847911,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0391",
    "formula": "RbSnCl3",
    "ggaBandgapEV": 2.1018,
    "predictedBandgapEV": 2.855779999999999,
    "predictionStdEV": 0.6661426210654904,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0392",
    "formula": "K2TlSbCl6",
    "ggaBandgapEV": 1.9531,
    "predictedBandgapEV": 2.991980000000001,
    "predictionStdEV": 0.66636737585209,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0393",
    "formula": "K2InAgBr6",
    "ggaBandgapEV": 0.2035,
    "predictedBandgapEV": 2.2605600000000043,
    "predictionStdEV": 0.6664394844245055,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0394",
    "formula": "RbAgBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.099440000000007,
    "predictionStdEV": 0.66651233026854,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0395",
    "formula": "BaUS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7834100000000028,
    "predictionStdEV": 0.6671857476745131,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0396",
    "formula": "Cs2AgAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1353700000000115,
    "predictionStdEV": 0.6676075292415435,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0397",
    "formula": "Rb2DyCuCl6",
    "ggaBandgapEV": 2.5968,
    "predictedBandgapEV": 3.048459999999994,
    "predictionStdEV": 0.6679028585056365,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0398",
    "formula": "Rb2TlHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6816000000000015,
    "predictionStdEV": 0.6679853591209911,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0399",
    "formula": "Rb2ErCuCl6",
    "ggaBandgapEV": 2.5835,
    "predictedBandgapEV": 3.019059999999994,
    "predictionStdEV": 0.6681569549140373,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0400",
    "formula": "CaMnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.925529999999999,
    "predictionStdEV": 0.6683513066494275,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0401",
    "formula": "YMnO3",
    "ggaBandgapEV": 1.6026,
    "predictedBandgapEV": 1.7465999999999948,
    "predictionStdEV": 0.66857732537082,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0402",
    "formula": "Cs2GaAuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7986500000000027,
    "predictionStdEV": 0.6685838223439169,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0403",
    "formula": "Cs2LaCuCl6",
    "ggaBandgapEV": 2.2036,
    "predictedBandgapEV": 3.0178999999999916,
    "predictionStdEV": 0.6689533541286714,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0404",
    "formula": "ThMnSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.762640000000001,
    "predictionStdEV": 0.6696791996172502,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0405",
    "formula": "K2NdAuCl6",
    "ggaBandgapEV": 2.2669,
    "predictedBandgapEV": 2.965459999999996,
    "predictionStdEV": 0.6698808762757753,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0406",
    "formula": "Cs2TlInBr6",
    "ggaBandgapEV": 2.1952,
    "predictedBandgapEV": 2.255500000000006,
    "predictionStdEV": 0.6699163753783001,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0407",
    "formula": "K2GaAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2010600000000067,
    "predictionStdEV": 0.6701557851723737,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0408",
    "formula": "KAgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4074600000000004,
    "predictionStdEV": 0.6703262999465256,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0409",
    "formula": "Cs2PrCuCl6",
    "ggaBandgapEV": 2.3993,
    "predictedBandgapEV": 2.9934399999999894,
    "predictionStdEV": 0.6705288706685208,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0410",
    "formula": "Rb2TlInBr6",
    "ggaBandgapEV": 2.1675,
    "predictedBandgapEV": 2.207780000000005,
    "predictionStdEV": 0.6709069023344432,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0411",
    "formula": "AcVO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.306600000000004,
    "predictionStdEV": 0.671011058031088,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0412",
    "formula": "Cs2HgBiBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.032880000000011,
    "predictionStdEV": 0.6714177578825282,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0413",
    "formula": "Cs2RbBiBr6",
    "ggaBandgapEV": 3.5829,
    "predictedBandgapEV": 3.4829,
    "predictionStdEV": 0.6715581794602761,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0414",
    "formula": "Rb2AgAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.124310000000011,
    "predictionStdEV": 0.6715674753142827,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0415",
    "formula": "Rb2HgBiBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.00798000000001,
    "predictionStdEV": 0.6719748653037557,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0416",
    "formula": "K2HgBiI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.643740000000004,
    "predictionStdEV": 0.6720055895600867,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0417",
    "formula": "LaCrS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0710800000000047,
    "predictionStdEV": 0.6727305802473963,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0418",
    "formula": "CsGaSe3",
    "ggaBandgapEV": 1.7059,
    "predictedBandgapEV": 2.141380000000002,
    "predictionStdEV": 0.6728476020615659,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0419",
    "formula": "La2TiNiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3001000000000003,
    "predictionStdEV": 0.6730353556834886,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0420",
    "formula": "Cs2InAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1859600000000095,
    "predictionStdEV": 0.6733235317438403,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0421",
    "formula": "Rb2InAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1702600000000087,
    "predictionStdEV": 0.6733624821743496,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0422",
    "formula": "Cs2InAuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7729500000000034,
    "predictionStdEV": 0.6738948341544098,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0423",
    "formula": "BaEuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0817799999999993,
    "predictionStdEV": 0.6740102607527574,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0424",
    "formula": "NaAgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.45152,
    "predictionStdEV": 0.6740249918215218,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0425",
    "formula": "PPbS3",
    "ggaBandgapEV": 2.342,
    "predictedBandgapEV": 2.381700000000002,
    "predictionStdEV": 0.6741232157402677,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0426",
    "formula": "K2CuSbCl6",
    "ggaBandgapEV": 0.9407,
    "predictedBandgapEV": 2.6700499999999856,
    "predictionStdEV": 0.6743763396650276,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0427",
    "formula": "K2ScAuBr6",
    "ggaBandgapEV": 1.7813,
    "predictedBandgapEV": 2.3830400000000056,
    "predictionStdEV": 0.6761150481981605,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0428",
    "formula": "K2GaAgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2130500000000057,
    "predictionStdEV": 0.6765412385804734,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0429",
    "formula": "Ba2SmNbO6",
    "ggaBandgapEV": 2.8562,
    "predictedBandgapEV": 3.3131799999999965,
    "predictionStdEV": 0.6767357590670086,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0430",
    "formula": "Rb2NaYI6",
    "ggaBandgapEV": 3.1407,
    "predictedBandgapEV": 3.4171600000000213,
    "predictionStdEV": 0.6767643122978605,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0431",
    "formula": "Rb2InAgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7608899999999985,
    "predictionStdEV": 0.676804224203721,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0432",
    "formula": "Rb2InHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7248700000000003,
    "predictionStdEV": 0.6779872661783569,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0433",
    "formula": "NbMoS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0123200000000026,
    "predictionStdEV": 0.6785252519987747,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0434",
    "formula": "AgPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7805000000000044,
    "predictionStdEV": 0.6789432597794884,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0435",
    "formula": "Rb2TlInCl6",
    "ggaBandgapEV": 2.6353,
    "predictedBandgapEV": 3.1923000000000052,
    "predictionStdEV": 0.6789530985274309,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0436",
    "formula": "ScUS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9582100000000084,
    "predictionStdEV": 0.6789621829675065,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0437",
    "formula": "ErMnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6949,
    "predictionStdEV": 0.6790002871869794,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0438",
    "formula": "K2NaRhF6",
    "ggaBandgapEV": 2.066,
    "predictedBandgapEV": 3.2838599999999976,
    "predictionStdEV": 0.6792558431106787,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0439",
    "formula": "RbCuBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1265800000000064,
    "predictionStdEV": 0.6794876772981242,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0440",
    "formula": "Rb2TbCuCl6",
    "ggaBandgapEV": 2.5836,
    "predictedBandgapEV": 3.0645999999999955,
    "predictionStdEV": 0.6796926069923076,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0441",
    "formula": "K2RbSbCl6",
    "ggaBandgapEV": 3.3935,
    "predictedBandgapEV": 3.2935,
    "predictionStdEV": 0.6804178630812086,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0442",
    "formula": "K2PrAuCl6",
    "ggaBandgapEV": 2.2576,
    "predictedBandgapEV": 2.955839999999997,
    "predictionStdEV": 0.6807036759119194,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0443",
    "formula": "Rb2LiSbCl6",
    "ggaBandgapEV": 2.9382,
    "predictedBandgapEV": 3.180619999999997,
    "predictionStdEV": 0.681967312706407,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0444",
    "formula": "Na2LiYBr6",
    "ggaBandgapEV": 3.1288,
    "predictedBandgapEV": 3.452080000000016,
    "predictionStdEV": 0.6827615056518661,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0445",
    "formula": "Rb2ScAuCl6",
    "ggaBandgapEV": 2.0871,
    "predictedBandgapEV": 2.9772999999999956,
    "predictionStdEV": 0.6827747139430405,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0446",
    "formula": "K2RbBiBr6",
    "ggaBandgapEV": 3.5945,
    "predictedBandgapEV": 3.4945,
    "predictionStdEV": 0.6830757998933953,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0447",
    "formula": "UMnSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8126800000000007,
    "predictionStdEV": 0.6836174497480307,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0448",
    "formula": "RbPdBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1076000000000064,
    "predictionStdEV": 0.683629095343375,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0449",
    "formula": "K2SmAgCl6",
    "ggaBandgapEV": 3.5917,
    "predictedBandgapEV": 3.4917,
    "predictionStdEV": 0.6839539165762553,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0450",
    "formula": "Cs2ScAgCl6",
    "ggaBandgapEV": 3.4125,
    "predictedBandgapEV": 3.3125,
    "predictionStdEV": 0.6842778967641727,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0451",
    "formula": "Cs2TlAuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7332800000000046,
    "predictionStdEV": 0.6842842549701117,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0452",
    "formula": "Cs2TlAgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7250100000000024,
    "predictionStdEV": 0.6848389225942096,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0453",
    "formula": "UVSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7028000000000005,
    "predictionStdEV": 0.6850437650252716,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0454",
    "formula": "CsPrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1646999999999994,
    "predictionStdEV": 0.6854071125980523,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0455",
    "formula": "Rb2GaAuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7733300000000027,
    "predictionStdEV": 0.6859242386007366,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0456",
    "formula": "Sr2NbCrO6",
    "ggaBandgapEV": 2.3058,
    "predictedBandgapEV": 3.264600000000002,
    "predictionStdEV": 0.686634429663995,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0457",
    "formula": "RbPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.323760000000002,
    "predictionStdEV": 0.6875421895418494,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0458",
    "formula": "Rb2LuAuCl6",
    "ggaBandgapEV": 2.1098,
    "predictedBandgapEV": 2.8568199999999955,
    "predictionStdEV": 0.6875624245114038,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0459",
    "formula": "K2AsAuCl6",
    "ggaBandgapEV": 0.2579,
    "predictedBandgapEV": 2.6292599999999946,
    "predictionStdEV": 0.6876483493763348,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0460",
    "formula": "Cs2HgAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.111680000000009,
    "predictionStdEV": 0.6877313266094551,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0461",
    "formula": "Cs2InCuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2065500000000062,
    "predictionStdEV": 0.6879671849005589,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0462",
    "formula": "Cs2PrCuBr6",
    "ggaBandgapEV": 2.2451,
    "predictedBandgapEV": 2.3513000000000033,
    "predictionStdEV": 0.688039904366019,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0463",
    "formula": "Rb2LaAgCl6",
    "ggaBandgapEV": 3.5894,
    "predictedBandgapEV": 3.4894,
    "predictionStdEV": 0.6882595937580525,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0464",
    "formula": "CaMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.547720000000002,
    "predictionStdEV": 0.68909244778912,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0465",
    "formula": "KMgH3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9354200000000006,
    "predictionStdEV": 0.689105524284924,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0466",
    "formula": "K2NaYI6",
    "ggaBandgapEV": 3.1355,
    "predictedBandgapEV": 3.4124600000000203,
    "predictionStdEV": 0.6894932547893413,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0467",
    "formula": "Rb2InAuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7589700000000026,
    "predictionStdEV": 0.6896148846276443,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0468",
    "formula": "KAgBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.132760000000006,
    "predictionStdEV": 0.6900317256474527,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0469",
    "formula": "Rb2SmCuCl6",
    "ggaBandgapEV": 2.5875,
    "predictedBandgapEV": 3.045799999999993,
    "predictionStdEV": 0.6902700630912499,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0470",
    "formula": "Ba2TbNbO6",
    "ggaBandgapEV": 2.8523,
    "predictedBandgapEV": 3.4165399999999995,
    "predictionStdEV": 0.6902922775172844,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0471",
    "formula": "HgPSe3",
    "ggaBandgapEV": 1.2149,
    "predictedBandgapEV": 2.1697200000000048,
    "predictionStdEV": 0.6906523883981005,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0472",
    "formula": "K2TmCuCl6",
    "ggaBandgapEV": 2.5266,
    "predictedBandgapEV": 3.0978999999999943,
    "predictionStdEV": 0.6911672662966623,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0473",
    "formula": "K2LiSbCl6",
    "ggaBandgapEV": 2.9326,
    "predictedBandgapEV": 3.243319999999999,
    "predictionStdEV": 0.6912176050998694,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0474",
    "formula": "LaCrSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9173400000000012,
    "predictionStdEV": 0.6916139995691237,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0475",
    "formula": "K2NaAsCl6",
    "ggaBandgapEV": 3.1839,
    "predictedBandgapEV": 3.2979000000000047,
    "predictionStdEV": 0.6918009757148365,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0476",
    "formula": "CsBaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3197599999999996,
    "predictionStdEV": 0.692021634343899,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0477",
    "formula": "Cs2NdCuBr6",
    "ggaBandgapEV": 2.2676,
    "predictedBandgapEV": 2.3518000000000034,
    "predictionStdEV": 0.6922961505020828,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0478",
    "formula": "Rb2HgAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.093120000000008,
    "predictionStdEV": 0.6923212156217645,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0479",
    "formula": "CsCuCl3",
    "ggaBandgapEV": 0.5514,
    "predictedBandgapEV": 2.664119999999987,
    "predictionStdEV": 0.692461786382468,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0480",
    "formula": "Na2TmAgCl6",
    "ggaBandgapEV": 2.9882,
    "predictedBandgapEV": 3.325660000000006,
    "predictionStdEV": 0.6925761794921902,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0481",
    "formula": "SmMnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6740300000000001,
    "predictionStdEV": 0.6930369464177197,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0482",
    "formula": "YMgS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.220960000000002,
    "predictionStdEV": 0.6931985851110781,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0483",
    "formula": "Cs2NaTlCl6",
    "ggaBandgapEV": 1.9339,
    "predictedBandgapEV": 3.327770000000005,
    "predictionStdEV": 0.693916188815337,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0484",
    "formula": "K2InAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2134000000000063,
    "predictionStdEV": 0.6943786719074827,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0485",
    "formula": "K2RbAsCl6",
    "ggaBandgapEV": 3.5044,
    "predictedBandgapEV": 3.4044,
    "predictionStdEV": 0.6944426055477865,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0486",
    "formula": "Rb2InGaBr6",
    "ggaBandgapEV": 1.1626,
    "predictedBandgapEV": 2.2360600000000024,
    "predictionStdEV": 0.6953130779727933,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0487",
    "formula": "Rb2NaAsCl6",
    "ggaBandgapEV": 3.1733,
    "predictedBandgapEV": 3.2515200000000037,
    "predictionStdEV": 0.6957485821760614,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0488",
    "formula": "Ba2HoNbO6",
    "ggaBandgapEV": 2.8596,
    "predictedBandgapEV": 3.4613400000000003,
    "predictionStdEV": 0.6964469860657035,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0489",
    "formula": "K2LaAgCl6",
    "ggaBandgapEV": 3.4783,
    "predictedBandgapEV": 3.3783,
    "predictionStdEV": 0.6967082890277678,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0490",
    "formula": "Ba2DyNbO6",
    "ggaBandgapEV": 2.8597,
    "predictedBandgapEV": 3.437220000000001,
    "predictionStdEV": 0.6970245846453333,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0491",
    "formula": "K2DyCuCl6",
    "ggaBandgapEV": 2.5424,
    "predictedBandgapEV": 3.112139999999995,
    "predictionStdEV": 0.6970440591526487,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0492",
    "formula": "NaHgCl3",
    "ggaBandgapEV": 2.5237,
    "predictedBandgapEV": 3.015620000000003,
    "predictionStdEV": 0.6970835069057351,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0493",
    "formula": "RbMnBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.217630000000003,
    "predictionStdEV": 0.6973583247513429,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0494",
    "formula": "K2ErCuCl6",
    "ggaBandgapEV": 2.5013,
    "predictedBandgapEV": 3.0911199999999934,
    "predictionStdEV": 0.6973933937169173,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0495",
    "formula": "K2YAuCl6",
    "ggaBandgapEV": 2.2894,
    "predictedBandgapEV": 3.072399999999996,
    "predictionStdEV": 0.6980600547230872,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0496",
    "formula": "Cs2YCuCl6",
    "ggaBandgapEV": 2.566,
    "predictedBandgapEV": 3.1105399999999928,
    "predictionStdEV": 0.6986938588537902,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0497",
    "formula": "LaYS3",
    "ggaBandgapEV": 0.4398,
    "predictedBandgapEV": 2.0502300000000053,
    "predictionStdEV": 0.6988424694450096,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0498",
    "formula": "Y2MnNiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4166000000000032,
    "predictionStdEV": 0.6993414330639931,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0499",
    "formula": "SrCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.180159999999997,
    "predictionStdEV": 0.6993939336311112,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0500",
    "formula": "Rb2TlAgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7132500000000015,
    "predictionStdEV": 0.699396230687584,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0501",
    "formula": "Cs2LiSbBr6",
    "ggaBandgapEV": 2.3366,
    "predictedBandgapEV": 2.4979799999999996,
    "predictionStdEV": 0.6999117941569483,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0502",
    "formula": "Rb2GdAgCl6",
    "ggaBandgapEV": 2.1229,
    "predictedBandgapEV": 2.9409999999999914,
    "predictionStdEV": 0.7001015640605297,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0503",
    "formula": "K2AgAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.172450000000008,
    "predictionStdEV": 0.7004283314515463,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0504",
    "formula": "Rb2CeAgBr6",
    "ggaBandgapEV": 0.2817,
    "predictedBandgapEV": 2.2131700000000047,
    "predictionStdEV": 0.7005826868400326,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0505",
    "formula": "K2GaHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.801670000000001,
    "predictionStdEV": 0.7010027539888845,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0506",
    "formula": "Rb2GaHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.131870000000007,
    "predictionStdEV": 0.7012662497938994,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0507",
    "formula": "Cs2NaBiBr6",
    "ggaBandgapEV": 3.194,
    "predictedBandgapEV": 3.094,
    "predictionStdEV": 0.7020906753404431,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0508",
    "formula": "CsSiI3",
    "ggaBandgapEV": 2.0297,
    "predictedBandgapEV": 1.9470399999999994,
    "predictionStdEV": 0.7021387600752431,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0509",
    "formula": "Na2LiBiCl6",
    "ggaBandgapEV": 3.5062,
    "predictedBandgapEV": 3.4062,
    "predictionStdEV": 0.7023295166800266,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0510",
    "formula": "Cs2CeAgBr6",
    "ggaBandgapEV": 0.2804,
    "predictedBandgapEV": 2.227670000000005,
    "predictionStdEV": 0.7024722920514382,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0511",
    "formula": "BeZnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5066600000000037,
    "predictionStdEV": 0.702815370065284,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0512",
    "formula": "Cs2LiBiBr6",
    "ggaBandgapEV": 2.9097,
    "predictedBandgapEV": 2.8097,
    "predictionStdEV": 0.7030697180223318,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0513",
    "formula": "Cs2RbGaI6",
    "ggaBandgapEV": 0.9795,
    "predictedBandgapEV": 1.9423799999999973,
    "predictionStdEV": 0.7030989514997168,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0514",
    "formula": "K2GaAgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.83495,
    "predictionStdEV": 0.70312178710377,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0515",
    "formula": "CsPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.314520000000001,
    "predictionStdEV": 0.7032404777883594,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0516",
    "formula": "KAuI3",
    "ggaBandgapEV": 0.6537,
    "predictedBandgapEV": 1.821660000000004,
    "predictionStdEV": 0.7033429777853747,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0517",
    "formula": "K2TlInBr6",
    "ggaBandgapEV": 2.137,
    "predictedBandgapEV": 2.274760000000003,
    "predictionStdEV": 0.7033734018286449,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0518",
    "formula": "Rb2TlAuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7030000000000027,
    "predictionStdEV": 0.703408202966103,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0519",
    "formula": "DyVO3",
    "ggaBandgapEV": 1.67,
    "predictedBandgapEV": 2.1134399999999993,
    "predictionStdEV": 0.7037557576318639,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0520",
    "formula": "K2InGaBr6",
    "ggaBandgapEV": 1.0827,
    "predictedBandgapEV": 2.2644400000000022,
    "predictionStdEV": 0.7040942311935262,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0521",
    "formula": "Cs2CeCuI6",
    "ggaBandgapEV": 0.3674,
    "predictedBandgapEV": 1.9254699999999991,
    "predictionStdEV": 0.7042090095277135,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0522",
    "formula": "K2ScAuCl6",
    "ggaBandgapEV": 2.1007,
    "predictedBandgapEV": 3.025899999999996,
    "predictionStdEV": 0.7044255744931461,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0523",
    "formula": "CsInCl3",
    "ggaBandgapEV": 1.8017,
    "predictedBandgapEV": 3.1788999999999987,
    "predictionStdEV": 0.7049968723334863,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0524",
    "formula": "Na2ScAgCl6",
    "ggaBandgapEV": 3.1907,
    "predictedBandgapEV": 3.4548400000000097,
    "predictionStdEV": 0.7050788426835682,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0525",
    "formula": "KPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.33736,
    "predictionStdEV": 0.7056300945963108,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0526",
    "formula": "K2TbCuCl6",
    "ggaBandgapEV": 2.5232,
    "predictedBandgapEV": 3.121739999999995,
    "predictionStdEV": 0.7062050498261812,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0527",
    "formula": "AcMnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5175700000000008,
    "predictionStdEV": 0.7063826477908418,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0528",
    "formula": "K2TlGaCl6",
    "ggaBandgapEV": 2.5438,
    "predictedBandgapEV": 3.2038800000000043,
    "predictionStdEV": 0.7067393760078756,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0529",
    "formula": "Cs2AgMoBr6",
    "ggaBandgapEV": 0.5811,
    "predictedBandgapEV": 2.107450000000006,
    "predictionStdEV": 0.7070903389949551,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0530",
    "formula": "KBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.49594,
    "predictionStdEV": 0.7077042577235211,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0531",
    "formula": "CsEuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.158519999999999,
    "predictionStdEV": 0.7087362059327845,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0532",
    "formula": "Cs2NaGdCl6",
    "ggaBandgapEV": 3.0097,
    "predictedBandgapEV": 3.469140000000006,
    "predictionStdEV": 0.7091244322402098,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0533",
    "formula": "KMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5171600000000005,
    "predictionStdEV": 0.7096514175283514,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0534",
    "formula": "RbInBr3",
    "ggaBandgapEV": 1.3373,
    "predictedBandgapEV": 2.1484200000000016,
    "predictionStdEV": 0.7097696130435562,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0535",
    "formula": "K2ScAgF6",
    "ggaBandgapEV": 3.0581,
    "predictedBandgapEV": 3.4657400000000025,
    "predictionStdEV": 0.7104663626098005,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0536",
    "formula": "Rb2LiSbBr6",
    "ggaBandgapEV": 2.3242,
    "predictedBandgapEV": 2.4628599999999974,
    "predictionStdEV": 0.7107500407316204,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0537",
    "formula": "CsTbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1810999999999994,
    "predictionStdEV": 0.7109265714544654,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0538",
    "formula": "DyGaSe3",
    "ggaBandgapEV": 0.0176,
    "predictedBandgapEV": 1.8659400000000004,
    "predictionStdEV": 0.711212567661737,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0539",
    "formula": "TiMoS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0197300000000022,
    "predictionStdEV": 0.711297390055665,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0540",
    "formula": "Cs2TlAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.132090000000009,
    "predictionStdEV": 0.7114512505435654,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0541",
    "formula": "K2HgBiBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.003640000000009,
    "predictionStdEV": 0.7115653521638049,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0542",
    "formula": "Cs2GaHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1651700000000087,
    "predictionStdEV": 0.7117338836250525,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0543",
    "formula": "Rb2NdCuBr6",
    "ggaBandgapEV": 2.3191,
    "predictedBandgapEV": 2.3512000000000017,
    "predictionStdEV": 0.7118649871991173,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0544",
    "formula": "CsAuBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.123540000000008,
    "predictionStdEV": 0.7119837557135701,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0545",
    "formula": "Rb2PrCuBr6",
    "ggaBandgapEV": 2.3072,
    "predictedBandgapEV": 2.3545200000000017,
    "predictionStdEV": 0.7120533474396418,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0546",
    "formula": "RbAuBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.095480000000008,
    "predictionStdEV": 0.7130469617072924,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0547",
    "formula": "CsInBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.091660000000004,
    "predictionStdEV": 0.7132038589351577,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0548",
    "formula": "Cs2TlAgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.128560000000012,
    "predictionStdEV": 0.7133720813152147,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0549",
    "formula": "CsDyBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1434900000000052,
    "predictionStdEV": 0.713415075464488,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0550",
    "formula": "NaPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4041800000000006,
    "predictionStdEV": 0.7141117052674588,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0551",
    "formula": "ZnCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4741199999999997,
    "predictionStdEV": 0.7142317730260963,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0552",
    "formula": "Rb2TlAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1147100000000085,
    "predictionStdEV": 0.714332741724752,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0553",
    "formula": "CsNdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1474199999999986,
    "predictionStdEV": 0.7143718524690061,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0554",
    "formula": "Rb2InCuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.222170000000004,
    "predictionStdEV": 0.7145776662476949,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0555",
    "formula": "K2RbSbF6",
    "ggaBandgapEV": 3.5316,
    "predictedBandgapEV": 3.4316,
    "predictionStdEV": 0.7149810120555652,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0556",
    "formula": "MgInSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.142300000000001,
    "predictionStdEV": 0.7151780967003961,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0557",
    "formula": "Na2AgAsBr6",
    "ggaBandgapEV": 1.0386,
    "predictedBandgapEV": 2.447099999999999,
    "predictionStdEV": 0.715770207538706,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0558",
    "formula": "PbAuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7054600000000033,
    "predictionStdEV": 0.7158924419212698,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0559",
    "formula": "UPdSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8077600000000018,
    "predictionStdEV": 0.7175219734614398,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0560",
    "formula": "Rb2CeCuBr6",
    "ggaBandgapEV": 0.2735,
    "predictedBandgapEV": 2.230290000000003,
    "predictionStdEV": 0.7177331439330339,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0561",
    "formula": "Cs2NaRhF6",
    "ggaBandgapEV": 1.9597,
    "predictedBandgapEV": 3.185709999999995,
    "predictionStdEV": 0.7178033476517097,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0562",
    "formula": "YMgSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.127980000000001,
    "predictionStdEV": 0.7179956264490746,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0563",
    "formula": "RbGeCl3",
    "ggaBandgapEV": 2.5696,
    "predictedBandgapEV": 2.8803799999999966,
    "predictionStdEV": 0.7180716228900854,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0564",
    "formula": "K2HgAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1194000000000073,
    "predictionStdEV": 0.7187556191084702,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0565",
    "formula": "CsTmBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1262200000000058,
    "predictionStdEV": 0.7188767708028959,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0566",
    "formula": "K2TlInCl6",
    "ggaBandgapEV": 2.5978,
    "predictedBandgapEV": 3.251420000000007,
    "predictionStdEV": 0.7189284968618253,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0567",
    "formula": "CsMnBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.213380000000004,
    "predictionStdEV": 0.7191766650830659,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0568",
    "formula": "K2TlHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.742880000000002,
    "predictionStdEV": 0.7193374073409489,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0569",
    "formula": "Rb2NdCuCl6",
    "ggaBandgapEV": 2.4608,
    "predictedBandgapEV": 3.018779999999993,
    "predictionStdEV": 0.7193685506053219,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0570",
    "formula": "RbBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4388400000000012,
    "predictionStdEV": 0.7199040591634414,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0571",
    "formula": "Rb2TlAgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1030800000000105,
    "predictionStdEV": 0.7199724394725118,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0572",
    "formula": "CsTmH3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7518700000000007,
    "predictionStdEV": 0.7200642006793575,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0573",
    "formula": "Rb2LaCuCl6",
    "ggaBandgapEV": 2.1383,
    "predictedBandgapEV": 3.0296999999999947,
    "predictionStdEV": 0.7201367300728382,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0574",
    "formula": "K2GaHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1611900000000057,
    "predictionStdEV": 0.720326199648464,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0575",
    "formula": "K2NaIrF6",
    "ggaBandgapEV": 2.4562,
    "predictedBandgapEV": 3.338669999999998,
    "predictionStdEV": 0.7205659450043428,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0576",
    "formula": "Rb2NaRhF6",
    "ggaBandgapEV": 2.0182,
    "predictedBandgapEV": 3.214439999999995,
    "predictionStdEV": 0.7217239682870452,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0577",
    "formula": "K2GaAuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8339100000000028,
    "predictionStdEV": 0.7217631619167044,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0578",
    "formula": "LiVO3",
    "ggaBandgapEV": 3.0347,
    "predictedBandgapEV": 3.1462399999999984,
    "predictionStdEV": 0.7218710843357004,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0579",
    "formula": "KCaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5001199999999995,
    "predictionStdEV": 0.7220119012869509,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0580",
    "formula": "K2LiRhF6",
    "ggaBandgapEV": 1.8347,
    "predictedBandgapEV": 3.2032599999999936,
    "predictionStdEV": 0.7221207464129521,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0581",
    "formula": "ScCrO3",
    "ggaBandgapEV": 2.4331,
    "predictedBandgapEV": 3.255740000000007,
    "predictionStdEV": 0.7223769461991458,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0582",
    "formula": "K2NdAgCl6",
    "ggaBandgapEV": 3.529,
    "predictedBandgapEV": 3.429,
    "predictionStdEV": 0.7226692233657108,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0583",
    "formula": "Cs2KGaI6",
    "ggaBandgapEV": 0.8281,
    "predictedBandgapEV": 1.986779999999998,
    "predictionStdEV": 0.723345444168966,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0584",
    "formula": "Cs2KCrCl6",
    "ggaBandgapEV": 1.5968,
    "predictedBandgapEV": 3.003829999999993,
    "predictionStdEV": 0.7235277334698382,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0585",
    "formula": "BaBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.311280000000002,
    "predictionStdEV": 0.7239217924610356,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0586",
    "formula": "RbTmBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1026200000000053,
    "predictionStdEV": 0.7240342779178353,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0587",
    "formula": "NbMoSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8046999999999995,
    "predictionStdEV": 0.724204881231825,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0588",
    "formula": "Rb2AgMoBr6",
    "ggaBandgapEV": 0.6979,
    "predictedBandgapEV": 2.121300000000004,
    "predictionStdEV": 0.724228907183357,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0589",
    "formula": "K2InCuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.237670000000004,
    "predictionStdEV": 0.7245028095873749,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0590",
    "formula": "SrAgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2669,
    "predictionStdEV": 0.7247110389665645,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0591",
    "formula": "Cs2CuMoBr6",
    "ggaBandgapEV": 0.4383,
    "predictedBandgapEV": 2.0947100000000054,
    "predictionStdEV": 0.7247231650085426,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0592",
    "formula": "RbDyBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1210100000000045,
    "predictionStdEV": 0.7247304532721116,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0593",
    "formula": "CsMnI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.916559999999998,
    "predictionStdEV": 0.7247565566450582,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0594",
    "formula": "Sr2MnCrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7429099999999997,
    "predictionStdEV": 0.7248013396096905,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0595",
    "formula": "K2InAgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8231299999999995,
    "predictionStdEV": 0.7251050634908007,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0596",
    "formula": "K2RbAsI6",
    "ggaBandgapEV": 2.3254,
    "predictedBandgapEV": 2.2254,
    "predictionStdEV": 0.7253454559035988,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0597",
    "formula": "Cs2ScInI6",
    "ggaBandgapEV": 2.129,
    "predictedBandgapEV": 2.029,
    "predictionStdEV": 0.7256646729723031,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0598",
    "formula": "CsSmO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1806999999999985,
    "predictionStdEV": 0.7257361159540014,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0599",
    "formula": "Ba2NbCrO6",
    "ggaBandgapEV": 1.583,
    "predictedBandgapEV": 3.0901799999999984,
    "predictionStdEV": 0.7259400578560179,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0600",
    "formula": "K2SmCuCl6",
    "ggaBandgapEV": 2.408,
    "predictedBandgapEV": 3.0873799999999942,
    "predictionStdEV": 0.725944168376603,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0601",
    "formula": "Rb2CeAgI6",
    "ggaBandgapEV": 0.2547,
    "predictedBandgapEV": 1.8220399999999979,
    "predictionStdEV": 0.7263763063316425,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0602",
    "formula": "Cs2RbTlI6",
    "ggaBandgapEV": 0.6115,
    "predictedBandgapEV": 1.8747200000000017,
    "predictionStdEV": 0.7264693535174077,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0603",
    "formula": "Rb2LiBiBr6",
    "ggaBandgapEV": 2.9118,
    "predictedBandgapEV": 2.8118,
    "predictionStdEV": 0.7268106930969033,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0604",
    "formula": "Cs2NdCuI6",
    "ggaBandgapEV": 1.9946,
    "predictedBandgapEV": 1.937779999999998,
    "predictionStdEV": 0.727265612826565,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0605",
    "formula": "Cs2NaIrF6",
    "ggaBandgapEV": 2.3241,
    "predictedBandgapEV": 3.185429999999996,
    "predictionStdEV": 0.7274305225243171,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0606",
    "formula": "Cs2RbSbBr6",
    "ggaBandgapEV": 3.0252,
    "predictedBandgapEV": 2.9252,
    "predictionStdEV": 0.7275046237653762,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0607",
    "formula": "Rb2PrCuCl6",
    "ggaBandgapEV": 2.4089,
    "predictedBandgapEV": 3.000999999999993,
    "predictionStdEV": 0.7276896316425023,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0608",
    "formula": "NaBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.520360000000001,
    "predictionStdEV": 0.7279713389962539,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0609",
    "formula": "BeCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.416879999999999,
    "predictionStdEV": 0.7281553856149121,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0610",
    "formula": "K2InHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7887700000000009,
    "predictionStdEV": 0.7282725706080084,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0611",
    "formula": "Ce2VFeO6",
    "ggaBandgapEV": 0.0247,
    "predictedBandgapEV": 1.3416099999999997,
    "predictionStdEV": 0.7283432280868688,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0612",
    "formula": "MnVO3",
    "ggaBandgapEV": 0.3158,
    "predictedBandgapEV": 1.9624599999999974,
    "predictionStdEV": 0.7286088445798614,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0613",
    "formula": "BaCaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3128600000000015,
    "predictionStdEV": 0.7289935667754571,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0614",
    "formula": "K2ScInI6",
    "ggaBandgapEV": 2.04,
    "predictedBandgapEV": 1.94,
    "predictionStdEV": 0.7290927872363016,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0615",
    "formula": "KMnBr3",
    "ggaBandgapEV": 1.7859,
    "predictedBandgapEV": 2.303020000000002,
    "predictionStdEV": 0.7291476390965,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0616",
    "formula": "Cs2RbAuCl6",
    "ggaBandgapEV": 0.2226,
    "predictedBandgapEV": 2.6613899999999937,
    "predictionStdEV": 0.7296522582024939,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0617",
    "formula": "SrNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2671400000000013,
    "predictionStdEV": 0.7297313343964325,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0618",
    "formula": "EuTcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5192300000000007,
    "predictionStdEV": 0.7299910664521866,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0619",
    "formula": "CaBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4652800000000017,
    "predictionStdEV": 0.7299934394225749,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0620",
    "formula": "BaYbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.151819999999999,
    "predictionStdEV": 0.7301665478505562,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0621",
    "formula": "ErVO3",
    "ggaBandgapEV": 1.584,
    "predictedBandgapEV": 2.1104000000000007,
    "predictionStdEV": 0.7310438016972715,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0622",
    "formula": "Rb2YInCl6",
    "ggaBandgapEV": 3.3592,
    "predictedBandgapEV": 3.4768200000000093,
    "predictionStdEV": 0.7311476510254271,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0623",
    "formula": "Na2LiSbCl6",
    "ggaBandgapEV": 2.9201,
    "predictedBandgapEV": 3.3037600000000045,
    "predictionStdEV": 0.731408410123919,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0624",
    "formula": "Na2LiRhF6",
    "ggaBandgapEV": 1.9141,
    "predictedBandgapEV": 3.3187800000000007,
    "predictionStdEV": 0.7314923865632513,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0625",
    "formula": "Cs2KAsBr6",
    "ggaBandgapEV": 3.0211,
    "predictedBandgapEV": 2.9211,
    "predictionStdEV": 0.731501360217462,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0626",
    "formula": "KInBr3",
    "ggaBandgapEV": 0.9085,
    "predictedBandgapEV": 2.1900000000000017,
    "predictionStdEV": 0.7315974302852641,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0627",
    "formula": "BaPbO3",
    "ggaBandgapEV": 0.2052,
    "predictedBandgapEV": 1.9583999999999904,
    "predictionStdEV": 0.7319151180294048,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0628",
    "formula": "Rb2NaIrF6",
    "ggaBandgapEV": 2.4029,
    "predictedBandgapEV": 3.267929999999996,
    "predictionStdEV": 0.7322133330526022,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0629",
    "formula": "K2LiSbBr6",
    "ggaBandgapEV": 2.3158,
    "predictedBandgapEV": 2.4948799999999998,
    "predictionStdEV": 0.7322328766178151,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0630",
    "formula": "Cs2KAuCl6",
    "ggaBandgapEV": 0.2251,
    "predictedBandgapEV": 2.6601299999999934,
    "predictionStdEV": 0.7322413079716262,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0631",
    "formula": "Rb2ScInI6",
    "ggaBandgapEV": 2.062,
    "predictedBandgapEV": 1.9619999999999997,
    "predictionStdEV": 0.7322746137891155,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0632",
    "formula": "NbSeI3",
    "ggaBandgapEV": 0.6478,
    "predictedBandgapEV": 1.6471999999999987,
    "predictionStdEV": 0.7323762421051085,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0633",
    "formula": "KTmBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.143300000000005,
    "predictionStdEV": 0.7328770770054142,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0634",
    "formula": "K2PrAgCl6",
    "ggaBandgapEV": 3.4957,
    "predictedBandgapEV": 3.3956999999999997,
    "predictionStdEV": 0.7331939102311194,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0635",
    "formula": "MnAgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0015799999999997,
    "predictionStdEV": 0.7339867189534158,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0636",
    "formula": "Na2PrCuCl6",
    "ggaBandgapEV": 3.4305,
    "predictedBandgapEV": 3.4283400000000097,
    "predictionStdEV": 0.7342325547127424,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0637",
    "formula": "Na2AgSbCl6",
    "ggaBandgapEV": 1.5979,
    "predictedBandgapEV": 2.8334999999999897,
    "predictionStdEV": 0.7342797491419748,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0638",
    "formula": "Cs2RbAsBr6",
    "ggaBandgapEV": 3.0927,
    "predictedBandgapEV": 2.9926999999999997,
    "predictionStdEV": 0.7342836302138289,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0639",
    "formula": "BaTaS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5910400000000002,
    "predictionStdEV": 0.7345204002612862,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0640",
    "formula": "BaDyO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.166080000000001,
    "predictionStdEV": 0.7347545396933608,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0641",
    "formula": "K2RbGaCl6",
    "ggaBandgapEV": 3.5644,
    "predictedBandgapEV": 3.496060000000009,
    "predictionStdEV": 0.7349162376761033,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0642",
    "formula": "Cs2KBiI6",
    "ggaBandgapEV": 2.6824,
    "predictedBandgapEV": 2.5824,
    "predictionStdEV": 0.7353390358195347,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0643",
    "formula": "La2CoNiO6",
    "ggaBandgapEV": 1.0215,
    "predictedBandgapEV": 1.085660000000005,
    "predictionStdEV": 0.7357544864966832,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0644",
    "formula": "Cs2InGaCl6",
    "ggaBandgapEV": 2.0109,
    "predictedBandgapEV": 3.258420000000002,
    "predictionStdEV": 0.7359114781004576,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0645",
    "formula": "K2InAuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8264700000000027,
    "predictionStdEV": 0.7360179950925124,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0646",
    "formula": "La2TcNiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.154290000000004,
    "predictionStdEV": 0.7360530184028866,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0647",
    "formula": "Rb2NaBiBr6",
    "ggaBandgapEV": 3.1446,
    "predictedBandgapEV": 3.0446,
    "predictionStdEV": 0.7364330929554985,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0648",
    "formula": "KDyBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1642900000000043,
    "predictionStdEV": 0.7367005130309067,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0649",
    "formula": "K2TlAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1312900000000075,
    "predictionStdEV": 0.7367650818951714,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0650",
    "formula": "K2CeAgBr6",
    "ggaBandgapEV": 0.2827,
    "predictedBandgapEV": 2.251450000000003,
    "predictionStdEV": 0.7368321705110334,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0651",
    "formula": "K2RbRhF6",
    "ggaBandgapEV": 2.2526,
    "predictedBandgapEV": 3.1490999999999953,
    "predictionStdEV": 0.7368800377266291,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0652",
    "formula": "Cs2CeAgI6",
    "ggaBandgapEV": 0.3756,
    "predictedBandgapEV": 1.856689999999997,
    "predictionStdEV": 0.737058948727984,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0653",
    "formula": "Rb2CuMoBr6",
    "ggaBandgapEV": 0.4489,
    "predictedBandgapEV": 2.092790000000005,
    "predictionStdEV": 0.7373922062918749,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0654",
    "formula": "TaTlSe3",
    "ggaBandgapEV": 0.3226,
    "predictedBandgapEV": 1.0931599999999948,
    "predictionStdEV": 0.7375159756913757,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0655",
    "formula": "K2CeCuBr6",
    "ggaBandgapEV": 0.2711,
    "predictedBandgapEV": 2.253650000000003,
    "predictionStdEV": 0.7378102923516312,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0656",
    "formula": "La2FeNiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1846700000000063,
    "predictionStdEV": 0.7379572081767335,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0657",
    "formula": "BeAgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.381419999999999,
    "predictionStdEV": 0.7380123194093704,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0658",
    "formula": "CsTeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3485199999999997,
    "predictionStdEV": 0.7380145050065071,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0659",
    "formula": "Cs2PrCuI6",
    "ggaBandgapEV": 2.0962,
    "predictedBandgapEV": 1.9962,
    "predictionStdEV": 0.7380504793034128,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0660",
    "formula": "MnCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0782599999999993,
    "predictionStdEV": 0.7386601196761611,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0661",
    "formula": "RbMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4636800000000005,
    "predictionStdEV": 0.7388109755546397,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0662",
    "formula": "K2LuAuCl6",
    "ggaBandgapEV": 2.0993,
    "predictedBandgapEV": 2.8854399999999965,
    "predictionStdEV": 0.7388518162662941,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0663",
    "formula": "Rb2NaTlCl6",
    "ggaBandgapEV": 1.9723,
    "predictedBandgapEV": 3.3566300000000076,
    "predictionStdEV": 0.7388938307361896,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0664",
    "formula": "Cs2NaScBr6",
    "ggaBandgapEV": 3.1426,
    "predictedBandgapEV": 3.3310800000000116,
    "predictionStdEV": 0.7392501833614935,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0665",
    "formula": "Cs2RbAuBr6",
    "ggaBandgapEV": 0.0344,
    "predictedBandgapEV": 2.1542600000000087,
    "predictionStdEV": 0.7392978103579101,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0666",
    "formula": "Rb2ScTlCl6",
    "ggaBandgapEV": 3.4899,
    "predictedBandgapEV": 3.3899,
    "predictionStdEV": 0.7397006451261215,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0667",
    "formula": "Cs2ScAuI6",
    "ggaBandgapEV": 1.1227,
    "predictedBandgapEV": 1.9092200000000024,
    "predictionStdEV": 0.739894311101255,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0668",
    "formula": "Rb2InSbCl6",
    "ggaBandgapEV": 1.2945,
    "predictedBandgapEV": 2.9700599999999966,
    "predictionStdEV": 0.7399266155504879,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0669",
    "formula": "K2TlAgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7705100000000018,
    "predictionStdEV": 0.7399364769356908,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0670",
    "formula": "KCuH3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9784700000000004,
    "predictionStdEV": 0.7401211448810249,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0671",
    "formula": "RbCaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3951200000000004,
    "predictionStdEV": 0.7411354704775636,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0672",
    "formula": "K2TlAgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1463600000000085,
    "predictionStdEV": 0.7412153198632626,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0673",
    "formula": "KBaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.38248,
    "predictionStdEV": 0.7414927171591098,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0674",
    "formula": "LuNiO3",
    "ggaBandgapEV": 0.0202,
    "predictedBandgapEV": 1.275980000000002,
    "predictionStdEV": 0.7418615366764877,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0675",
    "formula": "Cs2InHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1331700000000064,
    "predictionStdEV": 0.7427306383205173,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0676",
    "formula": "Cs2KRhF6",
    "ggaBandgapEV": 2.1444,
    "predictedBandgapEV": 3.139639999999996,
    "predictionStdEV": 0.7427763259555319,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0677",
    "formula": "Cs2YAuBr6",
    "ggaBandgapEV": 1.8854,
    "predictedBandgapEV": 2.510890000000005,
    "predictionStdEV": 0.7428514373008909,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0678",
    "formula": "Cs2TlHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1091800000000074,
    "predictionStdEV": 0.7428548496173385,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0679",
    "formula": "PuVO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3769200000000017,
    "predictionStdEV": 0.7428985217376598,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0680",
    "formula": "BaLiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3910800000000014,
    "predictionStdEV": 0.74294201227283,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0681",
    "formula": "Cs2TlCuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1477200000000103,
    "predictionStdEV": 0.7430858642175876,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0682",
    "formula": "Sr2TiMnO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7575200000000004,
    "predictionStdEV": 0.7432266475308841,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0683",
    "formula": "K2RbGaI6",
    "ggaBandgapEV": 0.9897,
    "predictedBandgapEV": 1.9444399999999975,
    "predictionStdEV": 0.7433918794283402,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0684",
    "formula": "La2VFeO6",
    "ggaBandgapEV": 1.2552,
    "predictedBandgapEV": 1.4323299999999968,
    "predictionStdEV": 0.7436089167700988,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0685",
    "formula": "Cs2RbBiI6",
    "ggaBandgapEV": 2.801,
    "predictedBandgapEV": 2.701,
    "predictionStdEV": 0.7446494702878671,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0686",
    "formula": "Rb2TlCuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1289800000000088,
    "predictionStdEV": 0.7449191631311409,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0687",
    "formula": "K2PrCuBr6",
    "ggaBandgapEV": 2.2646,
    "predictedBandgapEV": 2.4090200000000017,
    "predictionStdEV": 0.744964992197621,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0688",
    "formula": "NbSeBr3",
    "ggaBandgapEV": 0.7718,
    "predictedBandgapEV": 2.0310400000000026,
    "predictionStdEV": 0.7450557820727253,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0689",
    "formula": "KLiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.491299999999999,
    "predictionStdEV": 0.7455683134361333,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0690",
    "formula": "K2TlAuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7602000000000029,
    "predictionStdEV": 0.7459086137054605,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0691",
    "formula": "Cs2KSbBr6",
    "ggaBandgapEV": 2.9647,
    "predictedBandgapEV": 2.8647,
    "predictionStdEV": 0.7459410046377667,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0692",
    "formula": "Rb2InHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.099290000000005,
    "predictionStdEV": 0.7460140386748764,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0693",
    "formula": "KAuBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1197000000000066,
    "predictionStdEV": 0.7460448444966293,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0694",
    "formula": "Rb2NaGdCl6",
    "ggaBandgapEV": 3.0565,
    "predictedBandgapEV": 3.4817400000000074,
    "predictionStdEV": 0.746270709863384,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0695",
    "formula": "K2RbAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.186480000000006,
    "predictionStdEV": 0.7464124929286756,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0696",
    "formula": "K2LaCuCl6",
    "ggaBandgapEV": 2.1427,
    "predictedBandgapEV": 3.080159999999995,
    "predictionStdEV": 0.7464732911497902,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0697",
    "formula": "NaMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.55494,
    "predictionStdEV": 0.7469019991940042,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0698",
    "formula": "Rb2NdCuI6",
    "ggaBandgapEV": 2.0401,
    "predictedBandgapEV": 1.9400999999999997,
    "predictionStdEV": 0.7474162371797932,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0699",
    "formula": "Rb2GaAgCl6",
    "ggaBandgapEV": 1.2397,
    "predictedBandgapEV": 2.975539999999989,
    "predictionStdEV": 0.7474716773229609,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0700",
    "formula": "Rb2YAuBr6",
    "ggaBandgapEV": 1.9119,
    "predictedBandgapEV": 2.4965800000000034,
    "predictionStdEV": 0.7475889937659607,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0701",
    "formula": "CsCdBr3",
    "ggaBandgapEV": 2.901,
    "predictedBandgapEV": 2.8009999999999997,
    "predictionStdEV": 0.7476172526099158,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0702",
    "formula": "Cs2RbInI6",
    "ggaBandgapEV": 1.3992,
    "predictedBandgapEV": 1.8862799999999957,
    "predictionStdEV": 0.7479380733723883,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0703",
    "formula": "TcPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.482750000000001,
    "predictionStdEV": 0.7479808737527974,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0704",
    "formula": "Cs2KAuBr6",
    "ggaBandgapEV": 0.0077,
    "predictedBandgapEV": 2.1836400000000085,
    "predictionStdEV": 0.7482983030850733,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0705",
    "formula": "Cs2RbGdCl6",
    "ggaBandgapEV": 3.1649,
    "predictedBandgapEV": 3.2659599999999998,
    "predictionStdEV": 0.748479310602504,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0706",
    "formula": "RbLiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.427939999999999,
    "predictionStdEV": 0.7485150341843508,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0707",
    "formula": "RbBaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3548599999999995,
    "predictionStdEV": 0.7486209858132488,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0708",
    "formula": "K2ScAgCl6",
    "ggaBandgapEV": 3.2762,
    "predictedBandgapEV": 3.2782999999999998,
    "predictionStdEV": 0.7490082175784171,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0709",
    "formula": "Na2AgAsCl6",
    "ggaBandgapEV": 1.4963,
    "predictedBandgapEV": 2.837159999999991,
    "predictionStdEV": 0.7496948275131702,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0710",
    "formula": "K2RbSbBr6",
    "ggaBandgapEV": 3.0359,
    "predictedBandgapEV": 2.9358999999999997,
    "predictionStdEV": 0.7497749166249826,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0711",
    "formula": "Rb2InAgCl6",
    "ggaBandgapEV": 1.3232,
    "predictedBandgapEV": 3.0209799999999922,
    "predictionStdEV": 0.7507740269881479,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0712",
    "formula": "KTlBr3",
    "ggaBandgapEV": 0.943,
    "predictedBandgapEV": 2.0622200000000035,
    "predictionStdEV": 0.7511367862114064,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0713",
    "formula": "Rb2PrCuI6",
    "ggaBandgapEV": 2.0897,
    "predictedBandgapEV": 1.9897,
    "predictionStdEV": 0.751373169603494,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0714",
    "formula": "BaTaSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5598799999999968,
    "predictionStdEV": 0.7515905039314953,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0715",
    "formula": "RbCdCl3",
    "ggaBandgapEV": 3.5695,
    "predictedBandgapEV": 3.4695,
    "predictionStdEV": 0.7518060398799685,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0716",
    "formula": "NaCaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.53192,
    "predictionStdEV": 0.7518225279944734,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0717",
    "formula": "HgGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.880720000000006,
    "predictionStdEV": 0.7525954302279543,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0718",
    "formula": "KNaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5115399999999997,
    "predictionStdEV": 0.7527569517447178,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0719",
    "formula": "Rb2TlHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0804400000000056,
    "predictionStdEV": 0.7527924059128122,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0720",
    "formula": "Rb2LuCuCl6",
    "ggaBandgapEV": 2.4709,
    "predictedBandgapEV": 2.997439999999997,
    "predictionStdEV": 0.7530212788494088,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0721",
    "formula": "K2LiBiBr6",
    "ggaBandgapEV": 2.913,
    "predictedBandgapEV": 2.8129999999999997,
    "predictionStdEV": 0.7532568568556139,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0722",
    "formula": "CsKO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3824599999999996,
    "predictionStdEV": 0.7532764090292483,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0723",
    "formula": "MnCdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9634,
    "predictionStdEV": 0.7532808506792131,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0724",
    "formula": "RbVBr3",
    "ggaBandgapEV": 0.5888,
    "predictedBandgapEV": 2.158490000000002,
    "predictionStdEV": 0.7535506418947571,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0725",
    "formula": "Ba2NdTaO6",
    "ggaBandgapEV": 3.5087,
    "predictedBandgapEV": 3.4087,
    "predictionStdEV": 0.7536856986834773,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0726",
    "formula": "LiBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.517020000000001,
    "predictionStdEV": 0.7537170023291246,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0727",
    "formula": "Cs2KGdCl6",
    "ggaBandgapEV": 3.1441,
    "predictedBandgapEV": 3.298619999999999,
    "predictionStdEV": 0.7538465995147834,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0728",
    "formula": "RbTbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2315799999999983,
    "predictionStdEV": 0.7543127359391458,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0729",
    "formula": "UCrS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.013100000000003,
    "predictionStdEV": 0.7544681504212086,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0730",
    "formula": "K2NaBiBr6",
    "ggaBandgapEV": 3.1512,
    "predictedBandgapEV": 3.0511999999999997,
    "predictionStdEV": 0.7546204055019969,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0731",
    "formula": "Rb2ScAgCl6",
    "ggaBandgapEV": 3.3213,
    "predictedBandgapEV": 3.2213,
    "predictionStdEV": 0.7546814880464473,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0732",
    "formula": "ThCrSe3",
    "ggaBandgapEV": 0.0624,
    "predictedBandgapEV": 1.8376299999999994,
    "predictionStdEV": 0.7547059249138046,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0733",
    "formula": "K2NdCuCl6",
    "ggaBandgapEV": 2.4588,
    "predictedBandgapEV": 3.079879999999994,
    "predictionStdEV": 0.7550170763631766,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0734",
    "formula": "Rb2ScAuI6",
    "ggaBandgapEV": 1.1491,
    "predictedBandgapEV": 1.8568600000000013,
    "predictionStdEV": 0.7552715673186684,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0735",
    "formula": "Rb2AgAsF6",
    "ggaBandgapEV": 2.503,
    "predictedBandgapEV": 3.1328399999999914,
    "predictionStdEV": 0.7552742113961001,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0736",
    "formula": "Cs2ScTlI6",
    "ggaBandgapEV": 2.4279,
    "predictedBandgapEV": 2.3279,
    "predictionStdEV": 0.7553793163702593,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0737",
    "formula": "K2NdCuBr6",
    "ggaBandgapEV": 2.2959,
    "predictedBandgapEV": 2.4018200000000016,
    "predictionStdEV": 0.7556454774561947,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0738",
    "formula": "CsYbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.178479999999999,
    "predictionStdEV": 0.7558227236594569,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0739",
    "formula": "MgInBr3",
    "ggaBandgapEV": 2.0596,
    "predictedBandgapEV": 2.2793800000000015,
    "predictionStdEV": 0.7561078068635457,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0740",
    "formula": "Cs2KTlI6",
    "ggaBandgapEV": 0.5433,
    "predictedBandgapEV": 1.9236000000000013,
    "predictionStdEV": 0.7562424478961771,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0741",
    "formula": "Cs2RbGaBr6",
    "ggaBandgapEV": 2.1443,
    "predictedBandgapEV": 2.4266400000000012,
    "predictionStdEV": 0.7562657670422492,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0742",
    "formula": "K2AgMoBr6",
    "ggaBandgapEV": 0.7097,
    "predictedBandgapEV": 2.145720000000004,
    "predictionStdEV": 0.7563302728305941,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0743",
    "formula": "NaLiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5211600000000005,
    "predictionStdEV": 0.7563596065364657,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0744",
    "formula": "BeCdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.37376,
    "predictionStdEV": 0.7566007285219862,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0745",
    "formula": "K2ScTlCl6",
    "ggaBandgapEV": 3.4271,
    "predictedBandgapEV": 3.431500000000007,
    "predictionStdEV": 0.756610566936519,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0746",
    "formula": "LiMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5273199999999996,
    "predictionStdEV": 0.7566912300271496,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0747",
    "formula": "Nd2MnCoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2492800000000006,
    "predictionStdEV": 0.756753051926453,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0748",
    "formula": "KRbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3995999999999995,
    "predictionStdEV": 0.7568031712407124,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0749",
    "formula": "Cs2AlAgCl6",
    "ggaBandgapEV": 2.4879,
    "predictedBandgapEV": 3.308279999999996,
    "predictionStdEV": 0.756854703096967,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0750",
    "formula": "Na2ScAgF6",
    "ggaBandgapEV": 2.0718,
    "predictedBandgapEV": 3.451680000000005,
    "predictionStdEV": 0.7572785336981364,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0751",
    "formula": "RbBSe3",
    "ggaBandgapEV": 1.5901,
    "predictedBandgapEV": 2.370609999999999,
    "predictionStdEV": 0.7577077786983587,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0752",
    "formula": "CsRbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.367279999999999,
    "predictionStdEV": 0.758314843320372,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0753",
    "formula": "K2CeCuI6",
    "ggaBandgapEV": 0.3576,
    "predictedBandgapEV": 1.930249999999999,
    "predictionStdEV": 0.7583770088155356,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0754",
    "formula": "KTlI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.692400000000002,
    "predictionStdEV": 0.7586534386661662,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0755",
    "formula": "Cs2NaCrCl6",
    "ggaBandgapEV": 1.3791,
    "predictedBandgapEV": 3.177289999999999,
    "predictionStdEV": 0.7588082141753602,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0756",
    "formula": "K2RbAsBr6",
    "ggaBandgapEV": 3.1205,
    "predictedBandgapEV": 3.0204999999999997,
    "predictionStdEV": 0.7590165160258365,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0757",
    "formula": "K2CeAgI6",
    "ggaBandgapEV": 0.3818,
    "predictedBandgapEV": 1.9089799999999988,
    "predictionStdEV": 0.7591776205869085,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0758",
    "formula": "CsTlBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0827800000000063,
    "predictionStdEV": 0.7591962009915492,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0759",
    "formula": "Rb2LiRhF6",
    "ggaBandgapEV": 1.7868,
    "predictedBandgapEV": 3.1167299999999933,
    "predictionStdEV": 0.7595112619968197,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0760",
    "formula": "Na2CuBiBr6",
    "ggaBandgapEV": 0.8913,
    "predictedBandgapEV": 2.3471100000000056,
    "predictionStdEV": 0.7595172795269383,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0761",
    "formula": "EuPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4801599999999984,
    "predictionStdEV": 0.7596298272184943,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0762",
    "formula": "Rb2AgSbF6",
    "ggaBandgapEV": 2.3859,
    "predictedBandgapEV": 3.11075999999999,
    "predictionStdEV": 0.7598854008335735,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0763",
    "formula": "Cs2YAgF6",
    "ggaBandgapEV": 3.5148,
    "predictedBandgapEV": 3.4148,
    "predictionStdEV": 0.7601139482998579,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0764",
    "formula": "Na2LiIrF6",
    "ggaBandgapEV": 2.2678,
    "predictedBandgapEV": 3.4285900000000002,
    "predictionStdEV": 0.7602126425547002,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0765",
    "formula": "MnInBr3",
    "ggaBandgapEV": 1.6361,
    "predictedBandgapEV": 2.1375600000000015,
    "predictionStdEV": 0.7605232714388173,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0766",
    "formula": "PrMnO3",
    "ggaBandgapEV": 1.402,
    "predictedBandgapEV": 1.7579599999999964,
    "predictionStdEV": 0.7605586357408616,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0767",
    "formula": "CsMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4001800000000006,
    "predictionStdEV": 0.7607744525153308,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0768",
    "formula": "BaTbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0670800000000007,
    "predictionStdEV": 0.7608292013323377,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0769",
    "formula": "RbSrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3231600000000006,
    "predictionStdEV": 0.7612229728535531,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0770",
    "formula": "CsVBr3",
    "ggaBandgapEV": 0.6867,
    "predictedBandgapEV": 2.184540000000002,
    "predictionStdEV": 0.7617873642953132,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0771",
    "formula": "Rb2YAgF6",
    "ggaBandgapEV": 3.0725,
    "predictedBandgapEV": 3.3320400000000006,
    "predictionStdEV": 0.7619216747146663,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0772",
    "formula": "RbVF3",
    "ggaBandgapEV": 2.8467,
    "predictedBandgapEV": 2.907400000000002,
    "predictionStdEV": 0.7619330941755968,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0773",
    "formula": "Ba2TiFeO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0627699999999982,
    "predictionStdEV": 0.7628708783929308,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0774",
    "formula": "Cs2CuMoI6",
    "ggaBandgapEV": 0.1737,
    "predictedBandgapEV": 1.7655499999999997,
    "predictionStdEV": 0.7629111661917134,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0775",
    "formula": "K2GdAuCl6",
    "ggaBandgapEV": 1.5993,
    "predictedBandgapEV": 2.839649999999996,
    "predictionStdEV": 0.7633236715181831,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0776",
    "formula": "Y2MnFeO6",
    "ggaBandgapEV": 0.8626,
    "predictedBandgapEV": 1.4631600000000018,
    "predictionStdEV": 0.7637028312111964,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0777",
    "formula": "CsPtBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.063810000000008,
    "predictionStdEV": 0.763803858264673,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0778",
    "formula": "K2MoSeO6",
    "ggaBandgapEV": 3.5119,
    "predictedBandgapEV": 3.4722900000000005,
    "predictionStdEV": 0.7648305733298069,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0779",
    "formula": "Cs2RbIrF6",
    "ggaBandgapEV": 2.5533,
    "predictedBandgapEV": 3.082389999999997,
    "predictionStdEV": 0.76484281908115,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0780",
    "formula": "K2InHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.138990000000004,
    "predictionStdEV": 0.7648447096633415,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0781",
    "formula": "K2AgAsF6",
    "ggaBandgapEV": 2.4127,
    "predictedBandgapEV": 3.1716199999999906,
    "predictionStdEV": 0.7648793209389304,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0782",
    "formula": "K2ScAuI6",
    "ggaBandgapEV": 1.1644,
    "predictedBandgapEV": 1.8784100000000008,
    "predictionStdEV": 0.764982301690698,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0783",
    "formula": "Cs2KInI6",
    "ggaBandgapEV": 1.266,
    "predictedBandgapEV": 1.993419999999997,
    "predictionStdEV": 0.7650117016098507,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0784",
    "formula": "RbCdBr3",
    "ggaBandgapEV": 2.7555,
    "predictedBandgapEV": 2.6555,
    "predictionStdEV": 0.7660128654272061,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0785",
    "formula": "K2LiBiI6",
    "ggaBandgapEV": 2.0274,
    "predictedBandgapEV": 1.9497200000000006,
    "predictionStdEV": 0.7660184864609992,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0786",
    "formula": "Cs2TlAgCl6",
    "ggaBandgapEV": 0.0527,
    "predictedBandgapEV": 2.815009999999994,
    "predictionStdEV": 0.7660194840211308,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0787",
    "formula": "K2TlCuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1588400000000076,
    "predictionStdEV": 0.7660629572039099,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0788",
    "formula": "K2CuMoBr6",
    "ggaBandgapEV": 0.4557,
    "predictedBandgapEV": 2.1180300000000027,
    "predictionStdEV": 0.7661115905010185,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0789",
    "formula": "Rb2LiBiI6",
    "ggaBandgapEV": 2.0367,
    "predictedBandgapEV": 1.9429999999999996,
    "predictionStdEV": 0.7662635316912836,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0790",
    "formula": "K2RbIrF6",
    "ggaBandgapEV": 2.4212,
    "predictedBandgapEV": 3.180149999999996,
    "predictionStdEV": 0.7663055705787346,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0791",
    "formula": "CrSbSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9464400000000022,
    "predictionStdEV": 0.7663083755251544,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0792",
    "formula": "PPbSe3",
    "ggaBandgapEV": 1.6765,
    "predictedBandgapEV": 2.028520000000001,
    "predictionStdEV": 0.7663483604732246,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0793",
    "formula": "RbTlBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.053160000000005,
    "predictionStdEV": 0.7663879007395663,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0794",
    "formula": "Cs2KTlBr6",
    "ggaBandgapEV": 1.3745,
    "predictedBandgapEV": 2.3768900000000053,
    "predictionStdEV": 0.7668478192575117,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0795",
    "formula": "K2PrCuCl6",
    "ggaBandgapEV": 2.3373,
    "predictedBandgapEV": 3.053499999999994,
    "predictionStdEV": 0.7673702821975843,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0796",
    "formula": "RbNaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4597600000000006,
    "predictionStdEV": 0.7680590748113064,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0797",
    "formula": "K2YAgF6",
    "ggaBandgapEV": 2.6607,
    "predictedBandgapEV": 3.3466999999999985,
    "predictionStdEV": 0.7688454396040859,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0798",
    "formula": "Cs2ScCuCl6",
    "ggaBandgapEV": 1.9632,
    "predictedBandgapEV": 3.038509999999994,
    "predictionStdEV": 0.7691678814797196,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0799",
    "formula": "K2NaTlCl6",
    "ggaBandgapEV": 2.0027,
    "predictedBandgapEV": 3.3996700000000057,
    "predictionStdEV": 0.7692001957228025,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0800",
    "formula": "Cs2RbTlBr6",
    "ggaBandgapEV": 1.5141,
    "predictedBandgapEV": 2.3715500000000067,
    "predictionStdEV": 0.7697511594664875,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0801",
    "formula": "Rb2InAsCl6",
    "ggaBandgapEV": 1.238,
    "predictedBandgapEV": 2.980559999999995,
    "predictionStdEV": 0.7700018742834339,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0802",
    "formula": "RbSmO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.232059999999997,
    "predictionStdEV": 0.7704040215367517,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0803",
    "formula": "KCrF3",
    "ggaBandgapEV": 1.4964,
    "predictedBandgapEV": 3.0829799999999947,
    "predictionStdEV": 0.7704207419326151,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0804",
    "formula": "RbRhO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.281880000000003,
    "predictionStdEV": 0.7704240816589267,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0805",
    "formula": "Cs2LiBiI6",
    "ggaBandgapEV": 2.0413,
    "predictedBandgapEV": 2.01222,
    "predictionStdEV": 0.7704941736314435,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0806",
    "formula": "Cs2KGaBr6",
    "ggaBandgapEV": 2.1457,
    "predictedBandgapEV": 2.4919800000000008,
    "predictionStdEV": 0.7709930476988756,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0807",
    "formula": "Cs2RbSbI6",
    "ggaBandgapEV": 2.5506,
    "predictedBandgapEV": 2.4506,
    "predictionStdEV": 0.7714291721214602,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0808",
    "formula": "Rb2TiHgF6",
    "ggaBandgapEV": 2.3093,
    "predictedBandgapEV": 3.2690399999999986,
    "predictionStdEV": 0.7716972712145618,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0809",
    "formula": "Rb2AgMoI6",
    "ggaBandgapEV": 0.711,
    "predictedBandgapEV": 1.7242699999999975,
    "predictionStdEV": 0.7717306635737629,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0810",
    "formula": "NbTeI3",
    "ggaBandgapEV": 0.5118,
    "predictedBandgapEV": 1.5824599999999978,
    "predictionStdEV": 0.7719607168761893,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0811",
    "formula": "CsVI3",
    "ggaBandgapEV": 0.6412,
    "predictedBandgapEV": 1.8679399999999968,
    "predictionStdEV": 0.7720146736947435,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0812",
    "formula": "BaTmO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1512399999999996,
    "predictionStdEV": 0.7723403151461143,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0813",
    "formula": "YbZnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.197989999999998,
    "predictionStdEV": 0.7725434679679845,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0814",
    "formula": "Cs2LiGdCl6",
    "ggaBandgapEV": 2.7824,
    "predictedBandgapEV": 3.365739999999999,
    "predictionStdEV": 0.7725614877794509,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0815",
    "formula": "RbTlCl3",
    "ggaBandgapEV": 1.1694,
    "predictedBandgapEV": 2.7873800000000006,
    "predictionStdEV": 0.7741184247904181,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0816",
    "formula": "K2YAuBr6",
    "ggaBandgapEV": 1.9279,
    "predictedBandgapEV": 2.5234600000000014,
    "predictionStdEV": 0.774292082098223,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0817",
    "formula": "RbDyO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.26283,
    "predictionStdEV": 0.7744501540447907,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0818",
    "formula": "K2TlHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.085380000000005,
    "predictionStdEV": 0.7747556102410617,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0819",
    "formula": "EuHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8217899999999985,
    "predictionStdEV": 0.7750807995944674,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0820",
    "formula": "CsSmBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.234070000000001,
    "predictionStdEV": 0.7752872274841119,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0821",
    "formula": "FePS3",
    "ggaBandgapEV": 0.2284,
    "predictedBandgapEV": 2.3042200000000017,
    "predictionStdEV": 0.7758521067832441,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0822",
    "formula": "K2RbTlBr6",
    "ggaBandgapEV": 1.5406,
    "predictedBandgapEV": 2.3791300000000053,
    "predictionStdEV": 0.7764012449114188,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0823",
    "formula": "TbCrO3",
    "ggaBandgapEV": 2.5126,
    "predictedBandgapEV": 3.32972000000001,
    "predictionStdEV": 0.7765067427910729,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0824",
    "formula": "BaCoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0402700000000018,
    "predictionStdEV": 0.7765827561181098,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0825",
    "formula": "Cs2SBrCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4459999999999953,
    "predictionStdEV": 0.7767347681158595,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0826",
    "formula": "CsPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.927119999999998,
    "predictionStdEV": 0.7769124182300098,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0827",
    "formula": "Rb2YCuCl6",
    "ggaBandgapEV": 2.6382,
    "predictedBandgapEV": 3.0710999999999955,
    "predictionStdEV": 0.7769554620439958,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0828",
    "formula": "K2LuCuCl6",
    "ggaBandgapEV": 2.5016,
    "predictedBandgapEV": 3.059859999999996,
    "predictionStdEV": 0.7776946575616944,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0829",
    "formula": "CsSnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.509480000000001,
    "predictionStdEV": 0.7778738519837254,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0830",
    "formula": "SrNdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1016100000000004,
    "predictionStdEV": 0.7781011874428675,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0831",
    "formula": "Li2CuSbCl6",
    "ggaBandgapEV": 0.6312,
    "predictedBandgapEV": 2.745729999999992,
    "predictionStdEV": 0.7782069243459606,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0832",
    "formula": "UCrSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8967400000000008,
    "predictionStdEV": 0.7783076335228898,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0833",
    "formula": "CsEuBr3",
    "ggaBandgapEV": 1.0355,
    "predictedBandgapEV": 2.315530000000002,
    "predictionStdEV": 0.7784634025437551,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0834",
    "formula": "BaErO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.121290000000001,
    "predictionStdEV": 0.7788337344388707,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0835",
    "formula": "ThCrS3",
    "ggaBandgapEV": 0.0337,
    "predictedBandgapEV": 1.975020000000002,
    "predictionStdEV": 0.7788651998901982,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0836",
    "formula": "Cs2KSbI6",
    "ggaBandgapEV": 2.4707,
    "predictedBandgapEV": 2.3707,
    "predictionStdEV": 0.7791284618084487,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0837",
    "formula": "K2YCuCl6",
    "ggaBandgapEV": 2.6468,
    "predictedBandgapEV": 3.128719999999997,
    "predictionStdEV": 0.7792696334389011,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0838",
    "formula": "VAgO3",
    "ggaBandgapEV": 1.6427,
    "predictedBandgapEV": 2.3183599999999993,
    "predictionStdEV": 0.7795986854786254,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0839",
    "formula": "Cs2AlAuCl6",
    "ggaBandgapEV": 0.8882,
    "predictedBandgapEV": 2.921589999999994,
    "predictionStdEV": 0.7796284511868449,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0840",
    "formula": "Cs2NaAsBr6",
    "ggaBandgapEV": 2.5774,
    "predictedBandgapEV": 2.7871000000000006,
    "predictionStdEV": 0.77985062031135,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0841",
    "formula": "Rb2AgBiF6",
    "ggaBandgapEV": 2.7248,
    "predictedBandgapEV": 3.0251199999999936,
    "predictionStdEV": 0.779956784443856,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0842",
    "formula": "RbVI3",
    "ggaBandgapEV": 0.6301,
    "predictedBandgapEV": 1.7855799999999968,
    "predictionStdEV": 0.7803462459703384,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0843",
    "formula": "NbSeCl3",
    "ggaBandgapEV": 0.9018,
    "predictedBandgapEV": 2.4250599999999998,
    "predictionStdEV": 0.7804059177120591,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0844",
    "formula": "SrHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8943099999999955,
    "predictionStdEV": 0.7807306666834615,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0845",
    "formula": "KSrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.345279999999999,
    "predictionStdEV": 0.7808124753101748,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0846",
    "formula": "CrInBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1564000000000028,
    "predictionStdEV": 0.7812291853227192,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0847",
    "formula": "CuPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8936000000000037,
    "predictionStdEV": 0.7814095853008208,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0848",
    "formula": "K2LiIrF6",
    "ggaBandgapEV": 2.1838,
    "predictedBandgapEV": 3.264009999999996,
    "predictionStdEV": 0.7819579719524571,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0849",
    "formula": "SrPrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9962700000000022,
    "predictionStdEV": 0.7826104631935347,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0850",
    "formula": "Rb2CuMoI6",
    "ggaBandgapEV": 0.1706,
    "predictedBandgapEV": 1.7185599999999985,
    "predictionStdEV": 0.7828120632693407,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0851",
    "formula": "Ba2NdNbO6",
    "ggaBandgapEV": 2.9943,
    "predictedBandgapEV": 3.4002799999999986,
    "predictionStdEV": 0.7839994397957181,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0852",
    "formula": "Rb2ScAgF6",
    "ggaBandgapEV": 3.3067,
    "predictedBandgapEV": 3.414560000000002,
    "predictionStdEV": 0.7842140054857477,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0853",
    "formula": "RbAgCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4526699999999932,
    "predictionStdEV": 0.7842555202865968,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0854",
    "formula": "NiPS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.923200000000004,
    "predictionStdEV": 0.7854883576476486,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0855",
    "formula": "PaCoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.010740000000004,
    "predictionStdEV": 0.7857482754674024,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0856",
    "formula": "CsSnF3",
    "ggaBandgapEV": 3.3417,
    "predictedBandgapEV": 3.3291799999999983,
    "predictionStdEV": 0.7864263014421634,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0857",
    "formula": "Rb2ScTlI6",
    "ggaBandgapEV": 2.4154,
    "predictedBandgapEV": 2.3154,
    "predictionStdEV": 0.7865031580356177,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0858",
    "formula": "RbTmI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7607700000000006,
    "predictionStdEV": 0.7866937505154087,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0859",
    "formula": "Cs2NaPrI6",
    "ggaBandgapEV": 3.1134,
    "predictedBandgapEV": 3.279080000000018,
    "predictionStdEV": 0.787039486684119,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0860",
    "formula": "Cs2AlAgBr6",
    "ggaBandgapEV": 1.4771,
    "predictedBandgapEV": 2.454040000000001,
    "predictionStdEV": 0.7870621820415464,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0861",
    "formula": "SrEuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0810399999999993,
    "predictionStdEV": 0.7874180709127776,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0862",
    "formula": "Rb2ScInCl6",
    "ggaBandgapEV": 2.6637,
    "predictedBandgapEV": 3.361940000000005,
    "predictionStdEV": 0.7876110946399886,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0863",
    "formula": "Na2LuAgCl6",
    "ggaBandgapEV": 3.0501,
    "predictedBandgapEV": 3.3272200000000063,
    "predictionStdEV": 0.7877078592981033,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0864",
    "formula": "UFeS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.139550000000003,
    "predictionStdEV": 0.7877489114559274,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0865",
    "formula": "K2AgRhF6",
    "ggaBandgapEV": 1.4955,
    "predictedBandgapEV": 2.978269999999991,
    "predictionStdEV": 0.7878104195172851,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0866",
    "formula": "Y2VFeO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3916000000000006,
    "predictionStdEV": 0.788047105191054,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0867",
    "formula": "K2RbBiI6",
    "ggaBandgapEV": 2.8223,
    "predictedBandgapEV": 2.7222999999999997,
    "predictionStdEV": 0.7881030501146407,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0868",
    "formula": "KTcCl3",
    "ggaBandgapEV": 1.7152,
    "predictedBandgapEV": 2.8527599999999955,
    "predictionStdEV": 0.7887957799075749,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0869",
    "formula": "NaPS3",
    "ggaBandgapEV": 2.0008,
    "predictedBandgapEV": 2.5553800000000026,
    "predictionStdEV": 0.7888594650506509,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0870",
    "formula": "AcCrO3",
    "ggaBandgapEV": 2.0832,
    "predictedBandgapEV": 3.175760000000011,
    "predictionStdEV": 0.7889760594593489,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0871",
    "formula": "SrBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2704099999999987,
    "predictionStdEV": 0.7890759671286398,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0872",
    "formula": "Cs2ScHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8281800000000004,
    "predictionStdEV": 0.7891039143230755,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0873",
    "formula": "Rb2MoSeO6",
    "ggaBandgapEV": 3.1304,
    "predictedBandgapEV": 3.2803900000000006,
    "predictionStdEV": 0.7895703248603002,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0874",
    "formula": "SrCaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2775199999999995,
    "predictionStdEV": 0.7897140302666532,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0875",
    "formula": "Cs2AgMoCl6",
    "ggaBandgapEV": 0.9802,
    "predictedBandgapEV": 2.615689999999986,
    "predictionStdEV": 0.7899330186161373,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0876",
    "formula": "Ca2FeMoO6",
    "ggaBandgapEV": 1.2807,
    "predictedBandgapEV": 1.1806999999999999,
    "predictionStdEV": 0.7907131527930958,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0877",
    "formula": "PrPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4874899999999982,
    "predictionStdEV": 0.7907889414376,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0878",
    "formula": "OsPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.36521,
    "predictionStdEV": 0.7908038352840743,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0879",
    "formula": "TlBS3",
    "ggaBandgapEV": 1.7414,
    "predictedBandgapEV": 2.1904799999999955,
    "predictionStdEV": 0.7909006066504195,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0880",
    "formula": "VCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8671400000000011,
    "predictionStdEV": 0.7909048112130795,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0881",
    "formula": "K2InAgCl6",
    "ggaBandgapEV": 1.3083,
    "predictedBandgapEV": 3.0577199999999918,
    "predictionStdEV": 0.7909710497862739,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0882",
    "formula": "K2InSbCl6",
    "ggaBandgapEV": 1.2577,
    "predictedBandgapEV": 2.9951399999999953,
    "predictionStdEV": 0.7911734199276408,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0883",
    "formula": "RbYbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2380299999999997,
    "predictionStdEV": 0.7915372190238442,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0884",
    "formula": "Rb2AlAgBr6",
    "ggaBandgapEV": 1.4966,
    "predictedBandgapEV": 2.3879,
    "predictionStdEV": 0.7919112260853489,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0885",
    "formula": "Cs2RbEuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5215599999999974,
    "predictionStdEV": 0.7920126049501975,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0886",
    "formula": "K2PrCuI6",
    "ggaBandgapEV": 2.1159,
    "predictedBandgapEV": 2.0159,
    "predictionStdEV": 0.7923886632202659,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0887",
    "formula": "K2AgSbF6",
    "ggaBandgapEV": 2.2199,
    "predictedBandgapEV": 3.1715199999999895,
    "predictionStdEV": 0.7924188851863643,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0888",
    "formula": "Cs2KMoCl6",
    "ggaBandgapEV": 1.6914,
    "predictedBandgapEV": 2.8849999999999913,
    "predictionStdEV": 0.7926450025074275,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0889",
    "formula": "K2NdCuI6",
    "ggaBandgapEV": 2.0879,
    "predictedBandgapEV": 1.9878999999999998,
    "predictionStdEV": 0.7926663671432013,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0890",
    "formula": "Na2CuSbCl6",
    "ggaBandgapEV": 0.9352,
    "predictedBandgapEV": 2.806019999999992,
    "predictionStdEV": 0.7927357438642462,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0891",
    "formula": "CsSmCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.477919999999999,
    "predictionStdEV": 0.7931716545616085,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0892",
    "formula": "SrLiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3720999999999988,
    "predictionStdEV": 0.7933865325300136,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0893",
    "formula": "Rb2NaScBr6",
    "ggaBandgapEV": 3.1403,
    "predictedBandgapEV": 3.23474000000001,
    "predictionStdEV": 0.7935679759163681,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0894",
    "formula": "CrGaSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0158799999999997,
    "predictionStdEV": 0.7937643388311164,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0895",
    "formula": "HfPbS3",
    "ggaBandgapEV": 1.4886,
    "predictedBandgapEV": 1.5022899999999928,
    "predictionStdEV": 0.7937679798908496,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0896",
    "formula": "LaSiAs3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8303000000000014,
    "predictionStdEV": 0.7940350810889898,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0897",
    "formula": "Rb2AgRhF6",
    "ggaBandgapEV": 1.4695,
    "predictedBandgapEV": 2.890089999999992,
    "predictionStdEV": 0.7944758283925314,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0898",
    "formula": "KVF3",
    "ggaBandgapEV": 2.4535,
    "predictedBandgapEV": 2.9736800000000034,
    "predictionStdEV": 0.7949214159902859,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0899",
    "formula": "CeMnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6506800000000008,
    "predictionStdEV": 0.7950415948867093,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0900",
    "formula": "Cs2NaSbBr6",
    "ggaBandgapEV": 2.567,
    "predictedBandgapEV": 2.7835799999999997,
    "predictionStdEV": 0.7954401194307468,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0901",
    "formula": "CsSrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3383599999999998,
    "predictionStdEV": 0.7955413945232526,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0902",
    "formula": "KRhO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3001400000000007,
    "predictionStdEV": 0.795901866061388,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0903",
    "formula": "TmVO3",
    "ggaBandgapEV": 1.5818,
    "predictedBandgapEV": 2.1728600000000005,
    "predictionStdEV": 0.7959050322745799,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0904",
    "formula": "Na2TmCuCl6",
    "ggaBandgapEV": 1.7724,
    "predictedBandgapEV": 3.113500000000003,
    "predictionStdEV": 0.796067553666144,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0905",
    "formula": "K2RbGaBr6",
    "ggaBandgapEV": 2.3279,
    "predictedBandgapEV": 2.47884,
    "predictionStdEV": 0.7961968691222042,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0906",
    "formula": "SbPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6971600000000027,
    "predictionStdEV": 0.7965419853341066,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0907",
    "formula": "Cs2YCuBr6",
    "ggaBandgapEV": 2.3867,
    "predictedBandgapEV": 2.54044,
    "predictionStdEV": 0.7966046738502108,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0908",
    "formula": "CsTmI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.812250000000001,
    "predictionStdEV": 0.7967300593676634,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0909",
    "formula": "K2AlAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.249840000000005,
    "predictionStdEV": 0.7970796537360608,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0910",
    "formula": "VCdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7291800000000024,
    "predictionStdEV": 0.7971413473155187,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0911",
    "formula": "Nd2CoNiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1914100000000036,
    "predictionStdEV": 0.797150965564239,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0912",
    "formula": "MnFeO3",
    "ggaBandgapEV": 0.0572,
    "predictedBandgapEV": 2.570209999999999,
    "predictionStdEV": 0.7973497387595979,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0913",
    "formula": "Na2LiBiBr6",
    "ggaBandgapEV": 2.9154,
    "predictedBandgapEV": 2.8154,
    "predictionStdEV": 0.7976716264228038,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0914",
    "formula": "KTlCl3",
    "ggaBandgapEV": 1.124,
    "predictedBandgapEV": 2.7951800000000016,
    "predictionStdEV": 0.7977627263792167,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0915",
    "formula": "KGeCl3",
    "ggaBandgapEV": 2.5104,
    "predictedBandgapEV": 2.9550399999999986,
    "predictionStdEV": 0.7979061338277817,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0916",
    "formula": "RbErO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2688099999999998,
    "predictionStdEV": 0.7982724058239773,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0917",
    "formula": "Sr2FeCoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0196999999999996,
    "predictionStdEV": 0.7983536246551389,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0918",
    "formula": "Rb2LiRhCl6",
    "ggaBandgapEV": 1.6499,
    "predictedBandgapEV": 2.997809999999992,
    "predictionStdEV": 0.7989183023939315,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0919",
    "formula": "SbPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2452199999999998,
    "predictionStdEV": 0.7990134864944386,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0920",
    "formula": "K2CuAsF6",
    "ggaBandgapEV": 1.1258,
    "predictedBandgapEV": 2.9754399999999923,
    "predictionStdEV": 0.7990949921004386,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0921",
    "formula": "Rb2SBrCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4276999999999958,
    "predictionStdEV": 0.7991704511554466,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0922",
    "formula": "CuGeI3",
    "ggaBandgapEV": 0.1474,
    "predictedBandgapEV": 1.528220000000002,
    "predictionStdEV": 0.7994682180049433,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0923",
    "formula": "KCdCl3",
    "ggaBandgapEV": 3.5288,
    "predictedBandgapEV": 3.4288,
    "predictionStdEV": 0.7999034251708133,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0924",
    "formula": "Cs2KEuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.528219999999997,
    "predictionStdEV": 0.8000206444836283,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0925",
    "formula": "Rb2AlAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2400200000000066,
    "predictionStdEV": 0.8001813541941596,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0926",
    "formula": "RbDyI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7905399999999998,
    "predictionStdEV": 0.8007273620902418,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0927",
    "formula": "Na2CuBiCl6",
    "ggaBandgapEV": 1.1858,
    "predictedBandgapEV": 2.723739999999996,
    "predictionStdEV": 0.801267129239681,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0928",
    "formula": "CsNaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4127599999999996,
    "predictionStdEV": 0.80133412656644,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0929",
    "formula": "SrBiSe3",
    "ggaBandgapEV": 0.4969,
    "predictedBandgapEV": 1.587710000000002,
    "predictionStdEV": 0.8013980945198215,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0930",
    "formula": "AgRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9461100000000013,
    "predictionStdEV": 0.801687668546798,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0931",
    "formula": "RbCuCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.460409999999994,
    "predictionStdEV": 0.8020406984062586,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0932",
    "formula": "Ba2PrNbO6",
    "ggaBandgapEV": 2.9817,
    "predictedBandgapEV": 3.3493000000000004,
    "predictionStdEV": 0.8023593396976199,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0933",
    "formula": "HoNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3927800000000023,
    "predictionStdEV": 0.8027106400191788,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0934",
    "formula": "Rb2YCuBr6",
    "ggaBandgapEV": 2.3529,
    "predictedBandgapEV": 2.507259999999999,
    "predictionStdEV": 0.8027913131069618,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0935",
    "formula": "Na2ErCuCl6",
    "ggaBandgapEV": 1.7461,
    "predictedBandgapEV": 3.090340000000002,
    "predictionStdEV": 0.802835527614467,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0936",
    "formula": "Rb2NaCrCl6",
    "ggaBandgapEV": 1.4031,
    "predictedBandgapEV": 3.130400000000001,
    "predictionStdEV": 0.803098399948599,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0937",
    "formula": "GdCoO3",
    "ggaBandgapEV": 0.1754,
    "predictedBandgapEV": 1.0793600000000028,
    "predictionStdEV": 0.8032967635936274,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0938",
    "formula": "K2NaScBr6",
    "ggaBandgapEV": 3.1349,
    "predictedBandgapEV": 3.2496800000000103,
    "predictionStdEV": 0.8033616231809942,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0939",
    "formula": "Cs2LiTlCl6",
    "ggaBandgapEV": 1.5311,
    "predictedBandgapEV": 3.173180000000001,
    "predictionStdEV": 0.8033713883379218,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0940",
    "formula": "BaClO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.329960000000001,
    "predictionStdEV": 0.8036837676598925,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0941",
    "formula": "SrMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.317289999999998,
    "predictionStdEV": 0.8037217838904197,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0942",
    "formula": "Cs2AlAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2633000000000076,
    "predictionStdEV": 0.803736094747523,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0943",
    "formula": "CsPdCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3950899999999935,
    "predictionStdEV": 0.8041057404968572,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0944",
    "formula": "Cs2RbInBr6",
    "ggaBandgapEV": 2.5058,
    "predictedBandgapEV": 2.47518,
    "predictionStdEV": 0.8041540695662743,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0945",
    "formula": "CsDyI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8409999999999995,
    "predictionStdEV": 0.8042948464338177,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0946",
    "formula": "Rb2NaAsBr6",
    "ggaBandgapEV": 2.5867,
    "predictedBandgapEV": 2.6859199999999963,
    "predictionStdEV": 0.8045310146911666,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0947",
    "formula": "PrNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.376790000000003,
    "predictionStdEV": 0.8046717628325232,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0948",
    "formula": "Cs2KMoBr6",
    "ggaBandgapEV": 1.6471,
    "predictedBandgapEV": 2.385719999999999,
    "predictionStdEV": 0.8047454141528249,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0949",
    "formula": "Na2DyCuCl6",
    "ggaBandgapEV": 1.6869,
    "predictedBandgapEV": 3.1133000000000015,
    "predictionStdEV": 0.8048048893986666,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0950",
    "formula": "K2RbMoBr6",
    "ggaBandgapEV": 1.6226,
    "predictedBandgapEV": 2.360160000000001,
    "predictionStdEV": 0.8048112041963628,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0951",
    "formula": "K2RbSbI6",
    "ggaBandgapEV": 2.5635,
    "predictedBandgapEV": 2.4635,
    "predictionStdEV": 0.804822736010857,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0952",
    "formula": "CsCrBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2049800000000017,
    "predictionStdEV": 0.8048247632870144,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0953",
    "formula": "Ba2CoMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.041979999999998,
    "predictionStdEV": 0.8050874981019162,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0954",
    "formula": "Na2TbCuCl6",
    "ggaBandgapEV": 1.6684,
    "predictedBandgapEV": 3.125600000000002,
    "predictionStdEV": 0.8051108246694998,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0955",
    "formula": "Rb2ScHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.787179999999999,
    "predictionStdEV": 0.8052643960836732,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0956",
    "formula": "TaCuS3",
    "ggaBandgapEV": 0.4201,
    "predictedBandgapEV": 1.8480499999999973,
    "predictionStdEV": 0.8053224493952731,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0957",
    "formula": "Ba2PrTaO6",
    "ggaBandgapEV": 3.4939,
    "predictedBandgapEV": 3.3939,
    "predictionStdEV": 0.8057077882210143,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0958",
    "formula": "CsTmCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.439170000000002,
    "predictionStdEV": 0.8058387934940837,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0959",
    "formula": "TlGeI3",
    "ggaBandgapEV": 1.9175,
    "predictedBandgapEV": 1.8175,
    "predictionStdEV": 0.8060848651972069,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0960",
    "formula": "PrSiP3",
    "ggaBandgapEV": 0.2512,
    "predictedBandgapEV": 2.0472800000000015,
    "predictionStdEV": 0.8061097950031363,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0961",
    "formula": "AgSbO3",
    "ggaBandgapEV": 0.0948,
    "predictedBandgapEV": 2.5035199999999986,
    "predictionStdEV": 0.8061387036980667,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0962",
    "formula": "K2LiSbI6",
    "ggaBandgapEV": 1.9111,
    "predictedBandgapEV": 2.014099999999998,
    "predictionStdEV": 0.8062901400860616,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0963",
    "formula": "RbHoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.25236,
    "predictionStdEV": 0.8064350751300453,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0964",
    "formula": "SbAuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7300400000000036,
    "predictionStdEV": 0.8065526631287008,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0965",
    "formula": "RbSeO3",
    "ggaBandgapEV": 0.0407,
    "predictedBandgapEV": 2.320549999999998,
    "predictionStdEV": 0.8070531255747658,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0966",
    "formula": "K2AlAgBr6",
    "ggaBandgapEV": 1.4968,
    "predictedBandgapEV": 2.4052200000000004,
    "predictionStdEV": 0.8071920165611172,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0967",
    "formula": "RbCrI3",
    "ggaBandgapEV": 0.1919,
    "predictedBandgapEV": 1.8891699999999978,
    "predictionStdEV": 0.807254087075439,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0968",
    "formula": "RbTeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.413950000000001,
    "predictionStdEV": 0.8072984872400049,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0969",
    "formula": "Rb2NaSbBr6",
    "ggaBandgapEV": 2.5714,
    "predictedBandgapEV": 2.7124799999999976,
    "predictionStdEV": 0.8076255627455071,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0970",
    "formula": "TlSnI3",
    "ggaBandgapEV": 1.6359,
    "predictedBandgapEV": 1.5358999999999998,
    "predictionStdEV": 0.807717665709994,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0971",
    "formula": "KTiBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.268640000000002,
    "predictionStdEV": 0.8077191036492811,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0972",
    "formula": "CeSiP3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9840900000000024,
    "predictionStdEV": 0.8078087161574832,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0973",
    "formula": "VCrO3",
    "ggaBandgapEV": 1.3713,
    "predictedBandgapEV": 2.516199999999999,
    "predictionStdEV": 0.8082096015267334,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0974",
    "formula": "BaBiSe3",
    "ggaBandgapEV": 0.7327,
    "predictedBandgapEV": 1.6382200000000038,
    "predictionStdEV": 0.8085936752164224,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0975",
    "formula": "Rb2ScCuCl6",
    "ggaBandgapEV": 1.9245,
    "predictedBandgapEV": 2.977779999999996,
    "predictionStdEV": 0.8088122597982794,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0976",
    "formula": "SmCrO3",
    "ggaBandgapEV": 2.4814,
    "predictedBandgapEV": 3.113880000000007,
    "predictionStdEV": 0.8090592967144006,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0977",
    "formula": "CsTaSe3",
    "ggaBandgapEV": 0.0872,
    "predictedBandgapEV": 1.7126799999999973,
    "predictionStdEV": 0.8091066169547744,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0978",
    "formula": "K2NaCrCl6",
    "ggaBandgapEV": 1.4165,
    "predictedBandgapEV": 3.162340000000001,
    "predictionStdEV": 0.8097418875172511,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0979",
    "formula": "MnHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6806100000000022,
    "predictionStdEV": 0.810103498264266,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0980",
    "formula": "YbCoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0397100000000048,
    "predictionStdEV": 0.8102973934920434,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0981",
    "formula": "BaVO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.798030000000005,
    "predictionStdEV": 0.8103677986568811,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0982",
    "formula": "PrCoO3",
    "ggaBandgapEV": 0.089,
    "predictedBandgapEV": 1.091770000000004,
    "predictionStdEV": 0.8105081227847131,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0983",
    "formula": "Ca2TiCrO6",
    "ggaBandgapEV": 1.1709,
    "predictedBandgapEV": 3.105819999999998,
    "predictionStdEV": 0.8105118923248449,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0984",
    "formula": "Rb2LiIrF6",
    "ggaBandgapEV": 2.1225,
    "predictedBandgapEV": 3.1920499999999943,
    "predictionStdEV": 0.8105521250974551,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0985",
    "formula": "Rb2LiSbI6",
    "ggaBandgapEV": 1.9173,
    "predictedBandgapEV": 2.0062799999999976,
    "predictionStdEV": 0.8115618039311605,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0986",
    "formula": "Na2SmCuCl6",
    "ggaBandgapEV": 1.5331,
    "predictedBandgapEV": 3.0831400000000007,
    "predictionStdEV": 0.8117442580024825,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0987",
    "formula": "CrCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.08003,
    "predictionStdEV": 0.8120782284361511,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0988",
    "formula": "CsTiI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9976499999999986,
    "predictionStdEV": 0.8130378389103424,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0989",
    "formula": "SmBiTe3",
    "ggaBandgapEV": 1.0552,
    "predictedBandgapEV": 1.0114100000000001,
    "predictionStdEV": 0.8131331145021728,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0990",
    "formula": "KCuCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.478409999999996,
    "predictionStdEV": 0.8138477264820493,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0991",
    "formula": "KAgCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4653899999999935,
    "predictionStdEV": 0.8138730846391222,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0992",
    "formula": "Cs2ScAgBr6",
    "ggaBandgapEV": 2.888,
    "predictedBandgapEV": 2.788,
    "predictionStdEV": 0.8139936537836144,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0993",
    "formula": "CrFeO3",
    "ggaBandgapEV": 0.0942,
    "predictedBandgapEV": 2.550289999999999,
    "predictionStdEV": 0.8140001019041719,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0994",
    "formula": "Cs2NdAgBr6",
    "ggaBandgapEV": 3.4075,
    "predictedBandgapEV": 3.3075,
    "predictionStdEV": 0.8140162199858194,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0995",
    "formula": "ZrCoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1103700000000025,
    "predictionStdEV": 0.8141832797963856,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-0996",
    "formula": "K2ScCuCl6",
    "ggaBandgapEV": 1.9109,
    "predictedBandgapEV": 3.0101799999999965,
    "predictionStdEV": 0.8145841685179005,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0997",
    "formula": "TlInCl3",
    "ggaBandgapEV": 1.7591,
    "predictedBandgapEV": 2.6832200000000026,
    "predictionStdEV": 0.8146207900612404,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0998",
    "formula": "CsIO3",
    "ggaBandgapEV": 3.0624,
    "predictedBandgapEV": 3.1120199999999953,
    "predictionStdEV": 0.8147888803855875,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-0999",
    "formula": "K2ScHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.803579999999999,
    "predictionStdEV": 0.8155127734131447,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1000",
    "formula": "MnZnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1590599999999975,
    "predictionStdEV": 0.8155555875597924,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1001",
    "formula": "Cs2LiSbI6",
    "ggaBandgapEV": 1.9191,
    "predictedBandgapEV": 2.0872399999999973,
    "predictionStdEV": 0.8156798283640467,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1002",
    "formula": "KDyI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8838200000000014,
    "predictionStdEV": 0.8156881803728674,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1003",
    "formula": "K2RbAuCl6",
    "ggaBandgapEV": 0.2009,
    "predictedBandgapEV": 2.692389999999995,
    "predictionStdEV": 0.8157467976645705,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1004",
    "formula": "Cs2KInBr6",
    "ggaBandgapEV": 2.3646,
    "predictedBandgapEV": 2.5255599999999996,
    "predictionStdEV": 0.8160344884868532,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1005",
    "formula": "KTmI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8533300000000017,
    "predictionStdEV": 0.8161592743453938,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1006",
    "formula": "CsBSe3",
    "ggaBandgapEV": 1.6938,
    "predictedBandgapEV": 2.4583500000000007,
    "predictionStdEV": 0.81658063135247,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1007",
    "formula": "KTeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4473299999999996,
    "predictionStdEV": 0.8167150795105957,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1008",
    "formula": "CuNCl3",
    "ggaBandgapEV": 0.2529,
    "predictedBandgapEV": 2.4676800000000005,
    "predictionStdEV": 0.8167676031773055,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1009",
    "formula": "NbTeBr3",
    "ggaBandgapEV": 0.6276,
    "predictedBandgapEV": 1.9621800000000027,
    "predictionStdEV": 0.8172403854435972,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1010",
    "formula": "NdNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3948700000000032,
    "predictionStdEV": 0.8175884864037664,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1011",
    "formula": "Na2AgAsF6",
    "ggaBandgapEV": 2.0986,
    "predictedBandgapEV": 3.2425199999999976,
    "predictionStdEV": 0.8176080048531812,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1012",
    "formula": "Rb2CuAsF6",
    "ggaBandgapEV": 1.2065,
    "predictedBandgapEV": 2.957149999999991,
    "predictionStdEV": 0.8176356936313379,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1013",
    "formula": "Cs2NaNF6",
    "ggaBandgapEV": 2.8339,
    "predictedBandgapEV": 3.380520000000001,
    "predictionStdEV": 0.8177376899715448,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1014",
    "formula": "VHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.478890000000001,
    "predictionStdEV": 0.8177850682789447,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1015",
    "formula": "UIrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.14409,
    "predictionStdEV": 0.8179944510202999,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1016",
    "formula": "AuNCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3742800000000033,
    "predictionStdEV": 0.8181875589374352,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1017",
    "formula": "K2SBrCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.430299999999998,
    "predictionStdEV": 0.8182411686049541,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1018",
    "formula": "Cs2EuAgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.457419999999995,
    "predictionStdEV": 0.8183266729124754,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1019",
    "formula": "Cs2EuCuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.459179999999996,
    "predictionStdEV": 0.8185873976552525,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1020",
    "formula": "K2AgMoI6",
    "ggaBandgapEV": 0.7205,
    "predictedBandgapEV": 1.775979999999998,
    "predictionStdEV": 0.8190155917929759,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1021",
    "formula": "TbUTe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4254000000000033,
    "predictionStdEV": 0.8191534898906302,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1022",
    "formula": "DyNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.434830000000002,
    "predictionStdEV": 0.8192449701401894,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1023",
    "formula": "Rb2ScInBr6",
    "ggaBandgapEV": 2.4482,
    "predictedBandgapEV": 2.4121599999999965,
    "predictionStdEV": 0.8192804979980904,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1024",
    "formula": "K2TiHgF6",
    "ggaBandgapEV": 2.1811,
    "predictedBandgapEV": 3.283989999999998,
    "predictionStdEV": 0.8196423182705972,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1025",
    "formula": "CsTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.315960000000003,
    "predictionStdEV": 0.8196587572886661,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1026",
    "formula": "LuBiTe3",
    "ggaBandgapEV": 1.1847,
    "predictedBandgapEV": 1.0847,
    "predictionStdEV": 0.8198981933752475,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1027",
    "formula": "Cs2LiEuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5401199999999977,
    "predictionStdEV": 0.8201731436715041,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1028",
    "formula": "NdVSb3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5645000000000042,
    "predictionStdEV": 0.8204615469356247,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1029",
    "formula": "TbBiTe3",
    "ggaBandgapEV": 1.1108,
    "predictedBandgapEV": 1.0108,
    "predictionStdEV": 0.8204694068032025,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1030",
    "formula": "CdNCl3",
    "ggaBandgapEV": 0.8648,
    "predictedBandgapEV": 2.659999999999997,
    "predictionStdEV": 0.8209406799519671,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1031",
    "formula": "Ba2NaIO6",
    "ggaBandgapEV": 2.2419,
    "predictedBandgapEV": 3.3182799999999966,
    "predictionStdEV": 0.8210706678477799,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1032",
    "formula": "Cs2LiInBr6",
    "ggaBandgapEV": 1.5789,
    "predictedBandgapEV": 2.5793,
    "predictionStdEV": 0.821073267132722,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1033",
    "formula": "CuHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0039500000000015,
    "predictionStdEV": 0.821227281268712,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1034",
    "formula": "Ba2GdNbO6",
    "ggaBandgapEV": 2.7024,
    "predictedBandgapEV": 3.3972800000000025,
    "predictionStdEV": 0.8213190619972245,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1035",
    "formula": "TlGeCl3",
    "ggaBandgapEV": 2.4098,
    "predictedBandgapEV": 2.777720000000003,
    "predictionStdEV": 0.8223279161015994,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1036",
    "formula": "CdHCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.446059999999999,
    "predictionStdEV": 0.8228530102029162,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1037",
    "formula": "DyCrO3",
    "ggaBandgapEV": 2.5425,
    "predictedBandgapEV": 3.33750000000001,
    "predictionStdEV": 0.822934717945476,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1038",
    "formula": "EuReO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3355800000000007,
    "predictionStdEV": 0.8229417133673573,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1039",
    "formula": "Cs2GaAgF6",
    "ggaBandgapEV": 2.731,
    "predictedBandgapEV": 3.4748399999999973,
    "predictionStdEV": 0.8238411099235098,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1040",
    "formula": "PrVSb3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5654000000000032,
    "predictionStdEV": 0.8240041504749834,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1041",
    "formula": "Cs2NdAgF6",
    "ggaBandgapEV": 3.3433,
    "predictedBandgapEV": 3.2433,
    "predictionStdEV": 0.8242893324555403,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1042",
    "formula": "CsCrI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9219599999999972,
    "predictionStdEV": 0.8244511255374696,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1043",
    "formula": "K2CuMoI6",
    "ggaBandgapEV": 0.1684,
    "predictedBandgapEV": 1.7607499999999987,
    "predictionStdEV": 0.8248086368970682,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1044",
    "formula": "VHO3",
    "ggaBandgapEV": 2.104,
    "predictedBandgapEV": 2.6991399999999994,
    "predictionStdEV": 0.8248288673415838,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1045",
    "formula": "Rb2ScAgBr6",
    "ggaBandgapEV": 2.9083,
    "predictedBandgapEV": 2.8083,
    "predictionStdEV": 0.8248289546324141,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1046",
    "formula": "BaCrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.095530000000005,
    "predictionStdEV": 0.8252830236349222,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1047",
    "formula": "TiFeO3",
    "ggaBandgapEV": 2.0201,
    "predictedBandgapEV": 2.612809999999998,
    "predictionStdEV": 0.8256112002026119,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1048",
    "formula": "RbGdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2177199999999995,
    "predictionStdEV": 0.8256924376546029,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1049",
    "formula": "PuIrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0524400000000003,
    "predictionStdEV": 0.8257217729962076,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1050",
    "formula": "Rb2PrAgBr6",
    "ggaBandgapEV": 3.3066,
    "predictedBandgapEV": 3.2066,
    "predictionStdEV": 0.8260316843802065,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1051",
    "formula": "EuNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4818500000000032,
    "predictionStdEV": 0.826064481441974,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1052",
    "formula": "NaSrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4124,
    "predictionStdEV": 0.826406582742419,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1053",
    "formula": "RbTiI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.941899999999998,
    "predictionStdEV": 0.8266898995391204,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1054",
    "formula": "LiSnCl3",
    "ggaBandgapEV": 3.4153,
    "predictedBandgapEV": 3.3152999999999997,
    "predictionStdEV": 0.8267858208750317,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1055",
    "formula": "Na2AgRhF6",
    "ggaBandgapEV": 1.5232,
    "predictedBandgapEV": 3.088439999999999,
    "predictionStdEV": 0.8271045679960911,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1056",
    "formula": "LiPrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2450399999999973,
    "predictionStdEV": 0.8273546992674907,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1057",
    "formula": "Rb2NdAgBr6",
    "ggaBandgapEV": 3.3158,
    "predictedBandgapEV": 3.2157999999999998,
    "predictionStdEV": 0.8275111842144488,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1058",
    "formula": "EuCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.028499999999999,
    "predictionStdEV": 0.8277600799748686,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1059",
    "formula": "Cs2KPdF6",
    "ggaBandgapEV": 0.7041,
    "predictedBandgapEV": 2.9064999999999945,
    "predictionStdEV": 0.8281359489842235,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1060",
    "formula": "URhS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8876600000000028,
    "predictionStdEV": 0.828187855742885,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1061",
    "formula": "Ba2EuSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0741900000000024,
    "predictionStdEV": 0.8282253279754236,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1062",
    "formula": "LaSiP3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9644200000000034,
    "predictionStdEV": 0.8283002858867061,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1063",
    "formula": "K2NaSbBr6",
    "ggaBandgapEV": 2.5732,
    "predictedBandgapEV": 2.7384400000000007,
    "predictionStdEV": 0.8283269682921108,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1064",
    "formula": "K2NaAsBr6",
    "ggaBandgapEV": 2.5909,
    "predictedBandgapEV": 2.7160599999999984,
    "predictionStdEV": 0.8287237636269398,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1065",
    "formula": "HoUTe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4246600000000038,
    "predictionStdEV": 0.8287917014545919,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1066",
    "formula": "Ba2VFeO6",
    "ggaBandgapEV": 0.6851,
    "predictedBandgapEV": 1.0958499999999993,
    "predictionStdEV": 0.8289851793005703,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1067",
    "formula": "Cs2ScAgI6",
    "ggaBandgapEV": 2.2099,
    "predictedBandgapEV": 2.1099,
    "predictionStdEV": 0.8291517120527464,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1068",
    "formula": "K2YCuBr6",
    "ggaBandgapEV": 2.3589,
    "predictedBandgapEV": 2.5629999999999997,
    "predictionStdEV": 0.8295243215240897,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1069",
    "formula": "Rb2HgSbCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3350599999999986,
    "predictionStdEV": 0.8296961470321508,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1070",
    "formula": "NaTeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.474369999999999,
    "predictionStdEV": 0.8298609239505138,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1071",
    "formula": "K2RbGdCl6",
    "ggaBandgapEV": 3.2296,
    "predictedBandgapEV": 3.3537000000000012,
    "predictionStdEV": 0.8302749604799609,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1072",
    "formula": "KTiI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9861999999999989,
    "predictionStdEV": 0.8304239640087465,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1073",
    "formula": "PrBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0295899999999993,
    "predictionStdEV": 0.8307121534562979,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1074",
    "formula": "Rb2ScHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.088620000000004,
    "predictionStdEV": 0.8310120911274391,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1075",
    "formula": "Cs2NaMoCl6",
    "ggaBandgapEV": 1.6673,
    "predictedBandgapEV": 3.0809399999999965,
    "predictionStdEV": 0.8311604035323155,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1076",
    "formula": "Cs2CeAgCl6",
    "ggaBandgapEV": 0.3084,
    "predictedBandgapEV": 2.6443499999999927,
    "predictionStdEV": 0.8313516870133848,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1077",
    "formula": "Rb2AgMoCl6",
    "ggaBandgapEV": 1.0256,
    "predictedBandgapEV": 2.642469999999989,
    "predictionStdEV": 0.8314125625103345,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1078",
    "formula": "Cs2HgSbCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3647399999999976,
    "predictionStdEV": 0.831734532408027,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1079",
    "formula": "HoCrO3",
    "ggaBandgapEV": 2.3516,
    "predictedBandgapEV": 3.306580000000009,
    "predictionStdEV": 0.8319202507452274,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1080",
    "formula": "KYbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2970399999999995,
    "predictionStdEV": 0.8323558964769809,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1081",
    "formula": "RbHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0346999999999977,
    "predictionStdEV": 0.832482017823808,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1082",
    "formula": "NaClO3",
    "ggaBandgapEV": 0.0001,
    "predictedBandgapEV": 2.4035,
    "predictionStdEV": 0.8324822820937393,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1083",
    "formula": "SrAuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9607499999999962,
    "predictionStdEV": 0.8325261482379995,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1084",
    "formula": "Cs2ScInBr6",
    "ggaBandgapEV": 2.5285,
    "predictedBandgapEV": 2.4546599999999983,
    "predictionStdEV": 0.8325426622101719,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1085",
    "formula": "EuCoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.207880000000004,
    "predictionStdEV": 0.8325503021439606,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1086",
    "formula": "MnTlI3",
    "ggaBandgapEV": 0.0018,
    "predictedBandgapEV": 1.6051600000000004,
    "predictionStdEV": 0.832704253862077,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1087",
    "formula": "LuReO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3146500000000005,
    "predictionStdEV": 0.8327570639148003,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1088",
    "formula": "LuPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8598799999999998,
    "predictionStdEV": 0.8327985864541322,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1089",
    "formula": "ZnPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8792000000000029,
    "predictionStdEV": 0.8332318764905711,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1090",
    "formula": "HoBiTe3",
    "ggaBandgapEV": 1.1407,
    "predictedBandgapEV": 1.0407,
    "predictionStdEV": 0.8336973275116103,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1091",
    "formula": "RbPdCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4158499999999954,
    "predictionStdEV": 0.8340861631150582,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1092",
    "formula": "K2GaAgCl6",
    "ggaBandgapEV": 1.2184,
    "predictedBandgapEV": 3.0473999999999903,
    "predictionStdEV": 0.8342781550538159,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1093",
    "formula": "K2AlInI6",
    "ggaBandgapEV": 1.383,
    "predictedBandgapEV": 1.9521399999999989,
    "predictionStdEV": 0.834314341480477,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1094",
    "formula": "Na2InAgBr6",
    "ggaBandgapEV": 0.1837,
    "predictedBandgapEV": 2.5475900000000005,
    "predictionStdEV": 0.8343686486799472,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1095",
    "formula": "RbSmI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9544799999999967,
    "predictionStdEV": 0.8346907987991716,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1096",
    "formula": "K2RbInBr6",
    "ggaBandgapEV": 2.527,
    "predictedBandgapEV": 2.5390199999999994,
    "predictionStdEV": 0.8350159517039182,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1097",
    "formula": "Ba2TaCrO6",
    "ggaBandgapEV": 2.1562,
    "predictedBandgapEV": 3.454550000000002,
    "predictionStdEV": 0.8350215251716567,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1098",
    "formula": "SmVSb3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5785200000000035,
    "predictionStdEV": 0.8350421603727556,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1099",
    "formula": "Cs2CuMoCl6",
    "ggaBandgapEV": 0.8945,
    "predictedBandgapEV": 2.627859999999988,
    "predictionStdEV": 0.8352469218141436,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1100",
    "formula": "Nd2VFeO6",
    "ggaBandgapEV": 0.8554,
    "predictedBandgapEV": 1.4195799999999963,
    "predictionStdEV": 0.8353117523416024,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1101",
    "formula": "Rb2NdAgF6",
    "ggaBandgapEV": 2.8843,
    "predictedBandgapEV": 3.199519999999994,
    "predictionStdEV": 0.8354582991388614,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1102",
    "formula": "K2NdAgF6",
    "ggaBandgapEV": 2.6065,
    "predictedBandgapEV": 3.2115799999999934,
    "predictionStdEV": 0.8354850708420827,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1103",
    "formula": "La2FeCoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.407490000000005,
    "predictionStdEV": 0.8356792745425728,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1104",
    "formula": "RbSnF3",
    "ggaBandgapEV": 3.4835,
    "predictedBandgapEV": 3.4250400000000027,
    "predictionStdEV": 0.8357960267912254,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1105",
    "formula": "Cs2KNF6",
    "ggaBandgapEV": 3.0365,
    "predictedBandgapEV": 3.3044599999999993,
    "predictionStdEV": 0.8358889330527107,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1106",
    "formula": "SrYbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1267399999999985,
    "predictionStdEV": 0.8359908327248584,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1107",
    "formula": "CsTlCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.558580000000004,
    "predictionStdEV": 0.836056088788307,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1108",
    "formula": "Rb2LiGdCl6",
    "ggaBandgapEV": 2.8195,
    "predictedBandgapEV": 3.356959999999999,
    "predictionStdEV": 0.8361186269902129,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1109",
    "formula": "NpTcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4023900000000007,
    "predictionStdEV": 0.8363059475455141,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1110",
    "formula": "Rb2EuCuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4865899999999974,
    "predictionStdEV": 0.8365351886800706,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1111",
    "formula": "LaVSb3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5259600000000035,
    "predictionStdEV": 0.8366667666400998,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1112",
    "formula": "Cs2ScHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.109740000000006,
    "predictionStdEV": 0.8369160844433567,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1113",
    "formula": "KDyO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.330470000000001,
    "predictionStdEV": 0.8373497650922233,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1114",
    "formula": "KMnCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.455180000000001,
    "predictionStdEV": 0.8374390530659529,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1115",
    "formula": "SiHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.813650000000003,
    "predictionStdEV": 0.8374975388023532,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1116",
    "formula": "Rb2PrAgF6",
    "ggaBandgapEV": 2.8478,
    "predictedBandgapEV": 3.1627199999999953,
    "predictionStdEV": 0.8376344080802791,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1117",
    "formula": "K2PrAgBr6",
    "ggaBandgapEV": 3.2103,
    "predictedBandgapEV": 3.1103,
    "predictionStdEV": 0.8376648062321843,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1118",
    "formula": "KTbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3178400000000003,
    "predictionStdEV": 0.8377928946941484,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1119",
    "formula": "YbBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1905300000000003,
    "predictionStdEV": 0.8382053859884203,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1120",
    "formula": "Y2CrFeO6",
    "ggaBandgapEV": 0.446,
    "predictedBandgapEV": 1.4693800000000017,
    "predictionStdEV": 0.8386030739271102,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1121",
    "formula": "UNiSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5678600000000011,
    "predictionStdEV": 0.8386272237412772,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1122",
    "formula": "AgAuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.862480000000004,
    "predictionStdEV": 0.8390438901511632,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1123",
    "formula": "Rb2EuAgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4533399999999963,
    "predictionStdEV": 0.8393028323555217,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1124",
    "formula": "HfHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2813299999999999,
    "predictionStdEV": 0.8393913754024412,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1125",
    "formula": "Cs2PrAgF6",
    "ggaBandgapEV": 3.3116,
    "predictedBandgapEV": 3.2116,
    "predictionStdEV": 0.8394064483907663,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1126",
    "formula": "UCoS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.151490000000003,
    "predictionStdEV": 0.8394828943462762,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1127",
    "formula": "MnPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.558320000000001,
    "predictionStdEV": 0.8403186167163019,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1128",
    "formula": "YCrO3",
    "ggaBandgapEV": 1.8423,
    "predictedBandgapEV": 2.8772400000000067,
    "predictionStdEV": 0.8412347962370563,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1129",
    "formula": "Na2YAgF6",
    "ggaBandgapEV": 1.6823,
    "predictedBandgapEV": 3.3115800000000046,
    "predictionStdEV": 0.8414488122280521,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1130",
    "formula": "NaVF3",
    "ggaBandgapEV": 2.0187,
    "predictedBandgapEV": 3.0360200000000046,
    "predictionStdEV": 0.841460373160851,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1131",
    "formula": "K2NdAgBr6",
    "ggaBandgapEV": 3.2269,
    "predictedBandgapEV": 3.1269,
    "predictionStdEV": 0.8416340905643029,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1132",
    "formula": "Cs2RbNF6",
    "ggaBandgapEV": 3.0158,
    "predictedBandgapEV": 3.2846399999999982,
    "predictionStdEV": 0.842087210685448,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1133",
    "formula": "TmNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4432700000000034,
    "predictionStdEV": 0.842096702938564,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1134",
    "formula": "KPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.047259999999998,
    "predictionStdEV": 0.8423153164937718,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1135",
    "formula": "K2NaPdF6",
    "ggaBandgapEV": 0.5881,
    "predictedBandgapEV": 3.0296099999999955,
    "predictionStdEV": 0.8424125461435148,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1136",
    "formula": "PuPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.31163,
    "predictionStdEV": 0.8425607948985041,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1137",
    "formula": "CsSmI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.978559999999996,
    "predictionStdEV": 0.8427934067136506,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1138",
    "formula": "Rb2LiEuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5511399999999975,
    "predictionStdEV": 0.8428967317530658,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1139",
    "formula": "DyVSb3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.549320000000004,
    "predictionStdEV": 0.8429146680417896,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1140",
    "formula": "K2PrAgF6",
    "ggaBandgapEV": 2.5595,
    "predictedBandgapEV": 3.185079999999995,
    "predictionStdEV": 0.8429233616409025,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1141",
    "formula": "K2ScInCl6",
    "ggaBandgapEV": 2.5779,
    "predictedBandgapEV": 3.3953000000000055,
    "predictionStdEV": 0.8430127579105796,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1142",
    "formula": "Rb2CuMoCl6",
    "ggaBandgapEV": 0.9332,
    "predictedBandgapEV": 2.6529399999999925,
    "predictionStdEV": 0.8432436518587022,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1143",
    "formula": "Cs2CeCuCl6",
    "ggaBandgapEV": 0.2594,
    "predictedBandgapEV": 2.670049999999993,
    "predictionStdEV": 0.8433133151444953,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1144",
    "formula": "KInCl3",
    "ggaBandgapEV": 1.6214,
    "predictedBandgapEV": 3.139159999999998,
    "predictionStdEV": 0.8433886971023512,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1145",
    "formula": "InSnCl3",
    "ggaBandgapEV": 1.649,
    "predictedBandgapEV": 2.7872800000000018,
    "predictionStdEV": 0.8435578235070774,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1146",
    "formula": "Rb2AlInI6",
    "ggaBandgapEV": 1.444,
    "predictedBandgapEV": 1.922379999999998,
    "predictionStdEV": 0.8438268398196411,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1147",
    "formula": "URuS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8450400000000018,
    "predictionStdEV": 0.8439464428504926,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1148",
    "formula": "DySbTe3",
    "ggaBandgapEV": 0.9462,
    "predictedBandgapEV": 1.2627200000000034,
    "predictionStdEV": 0.8442152578578533,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1149",
    "formula": "YbPrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9656200000000013,
    "predictionStdEV": 0.8442749644517463,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1150",
    "formula": "YbTcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5640800000000012,
    "predictionStdEV": 0.8443928313291149,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1151",
    "formula": "EuMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1998999999999986,
    "predictionStdEV": 0.8444483347132604,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1152",
    "formula": "La2VReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1597200000000027,
    "predictionStdEV": 0.844512357280815,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1153",
    "formula": "K2ScInBr6",
    "ggaBandgapEV": 2.3577,
    "predictedBandgapEV": 2.4299199999999974,
    "predictionStdEV": 0.8447615010167063,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1154",
    "formula": "Rb2AgAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3831799999999963,
    "predictionStdEV": 0.8447955892403802,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1155",
    "formula": "Cs2CuAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3982399999999946,
    "predictionStdEV": 0.844812406632384,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1156",
    "formula": "MgBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4603800000000007,
    "predictionStdEV": 0.8448425034288927,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1157",
    "formula": "Cs2KCeBr6",
    "ggaBandgapEV": 0.4768,
    "predictedBandgapEV": 2.393370000000001,
    "predictionStdEV": 0.8454790908709706,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1158",
    "formula": "CsMnCl3",
    "ggaBandgapEV": 1.5002,
    "predictedBandgapEV": 2.691309999999994,
    "predictionStdEV": 0.8456582843560405,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1159",
    "formula": "Cs2AsAuF6",
    "ggaBandgapEV": 1.0666,
    "predictedBandgapEV": 2.707509999999993,
    "predictionStdEV": 0.8461951015575553,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1160",
    "formula": "Ba2AgIO6",
    "ggaBandgapEV": 0.1267,
    "predictedBandgapEV": 2.684139999999993,
    "predictionStdEV": 0.8464353846573289,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1161",
    "formula": "K2LiGdCl6",
    "ggaBandgapEV": 2.8081,
    "predictedBandgapEV": 3.3999200000000016,
    "predictionStdEV": 0.8464525938290938,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1162",
    "formula": "InFeBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1101900000000064,
    "predictionStdEV": 0.8465270898795862,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1163",
    "formula": "InBiS3",
    "ggaBandgapEV": 1.4018,
    "predictedBandgapEV": 1.950400000000001,
    "predictionStdEV": 0.8466974902525688,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1164",
    "formula": "Cs2YAgBr6",
    "ggaBandgapEV": 3.3675,
    "predictedBandgapEV": 3.2675,
    "predictionStdEV": 0.8467506088571759,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1165",
    "formula": "CsEuCl3",
    "ggaBandgapEV": 0.7364,
    "predictedBandgapEV": 2.836519999999996,
    "predictionStdEV": 0.8467648372482174,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1166",
    "formula": "Li2ScCuCl6",
    "ggaBandgapEV": 1.8184,
    "predictedBandgapEV": 3.040239999999998,
    "predictionStdEV": 0.8468765803822897,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1167",
    "formula": "Li2AgAsF6",
    "ggaBandgapEV": 1.9723,
    "predictedBandgapEV": 3.1854799999999943,
    "predictionStdEV": 0.8469401216142729,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1168",
    "formula": "YbNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.343110000000004,
    "predictionStdEV": 0.8471741130960034,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1169",
    "formula": "RbFeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.730670000000003,
    "predictionStdEV": 0.8473597235531086,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1170",
    "formula": "InPbCl3",
    "ggaBandgapEV": 2.5143,
    "predictedBandgapEV": 2.7880600000000033,
    "predictionStdEV": 0.8474559790337194,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1171",
    "formula": "Cs2SbAuF6",
    "ggaBandgapEV": 1.0143,
    "predictedBandgapEV": 2.6267499999999937,
    "predictionStdEV": 0.8475785435580583,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1172",
    "formula": "HgBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3824000000000056,
    "predictionStdEV": 0.8477062226974609,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1173",
    "formula": "RbCrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.133309999999999,
    "predictionStdEV": 0.847749192804097,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1174",
    "formula": "Na2AgSbF6",
    "ggaBandgapEV": 1.8237,
    "predictedBandgapEV": 3.199959999999997,
    "predictionStdEV": 0.8477844056126539,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1175",
    "formula": "Cs2KYbCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4941599999999995,
    "predictionStdEV": 0.8479361971280623,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1176",
    "formula": "Rb2InGaCl6",
    "ggaBandgapEV": 1.8529,
    "predictedBandgapEV": 3.140999999999999,
    "predictionStdEV": 0.8479439839989417,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1177",
    "formula": "K2ScAgI6",
    "ggaBandgapEV": 2.1951,
    "predictedBandgapEV": 2.0951,
    "predictionStdEV": 0.8481553857637156,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1178",
    "formula": "Rb2NaPrI6",
    "ggaBandgapEV": 3.1088,
    "predictedBandgapEV": 3.218180000000017,
    "predictionStdEV": 0.8483579949526022,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1179",
    "formula": "Ba2LiIO6",
    "ggaBandgapEV": 2.0784,
    "predictedBandgapEV": 3.3019199999999964,
    "predictionStdEV": 0.8484668017076447,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1180",
    "formula": "InGaSe3",
    "ggaBandgapEV": 1.3286,
    "predictedBandgapEV": 1.7152000000000023,
    "predictionStdEV": 0.8485272888952946,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1181",
    "formula": "Rb2ScAgI6",
    "ggaBandgapEV": 2.192,
    "predictedBandgapEV": 2.092,
    "predictionStdEV": 0.8490168667346942,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1182",
    "formula": "CaHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0477599999999954,
    "predictionStdEV": 0.8491186503663672,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1183",
    "formula": "BaAuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9905399999999975,
    "predictionStdEV": 0.849190913988133,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1184",
    "formula": "K2ScAgBr6",
    "ggaBandgapEV": 2.8835,
    "predictedBandgapEV": 2.7835,
    "predictionStdEV": 0.8492032887359776,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1185",
    "formula": "Na2ScCuCl6",
    "ggaBandgapEV": 1.9059,
    "predictedBandgapEV": 3.1578400000000038,
    "predictionStdEV": 0.8492628182135379,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1186",
    "formula": "RuPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.632980000000002,
    "predictionStdEV": 0.8494199312472028,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1187",
    "formula": "YbVO3",
    "ggaBandgapEV": 0.4165,
    "predictedBandgapEV": 2.0785300000000024,
    "predictionStdEV": 0.8494979041174838,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1188",
    "formula": "InSbSe3",
    "ggaBandgapEV": 1.1027,
    "predictedBandgapEV": 1.6470200000000035,
    "predictionStdEV": 0.8498141676860873,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1189",
    "formula": "K2RbMoCl6",
    "ggaBandgapEV": 1.6653,
    "predictedBandgapEV": 2.880009999999994,
    "predictionStdEV": 0.8498548404874803,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1190",
    "formula": "UHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3928800000000008,
    "predictionStdEV": 0.8498682872069061,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1191",
    "formula": "RbCrF3",
    "ggaBandgapEV": 0.9717,
    "predictedBandgapEV": 2.921959999999995,
    "predictionStdEV": 0.8508970316084087,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1192",
    "formula": "TmBiTe3",
    "ggaBandgapEV": 1.1969,
    "predictedBandgapEV": 1.0969,
    "predictionStdEV": 0.8509604279283476,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1193",
    "formula": "LiGaI3",
    "ggaBandgapEV": 2.2483,
    "predictedBandgapEV": 2.1483,
    "predictionStdEV": 0.8510093252133005,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1194",
    "formula": "NiPSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9072800000000028,
    "predictionStdEV": 0.8518040276965131,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1195",
    "formula": "Na2GaAgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.450520000000001,
    "predictionStdEV": 0.8521431978253423,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1196",
    "formula": "Na2NdCuCl6",
    "ggaBandgapEV": 1.4587,
    "predictedBandgapEV": 3.054040000000001,
    "predictionStdEV": 0.85233378344402,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1197",
    "formula": "KHoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3008400000000004,
    "predictionStdEV": 0.8526309837203895,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1198",
    "formula": "La2ZnCoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0334000000000019,
    "predictionStdEV": 0.8526542910230365,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1199",
    "formula": "UCoSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1467300000000025,
    "predictionStdEV": 0.8528341908600999,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1200",
    "formula": "Cs2InAsF6",
    "ggaBandgapEV": 2.4404,
    "predictedBandgapEV": 3.4378400000000022,
    "predictionStdEV": 0.853198297232243,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1201",
    "formula": "K2EuAgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4744399999999973,
    "predictionStdEV": 0.8533693727806281,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1202",
    "formula": "Rb2AlAuCl6",
    "ggaBandgapEV": 0.8758,
    "predictedBandgapEV": 2.9610299999999956,
    "predictionStdEV": 0.8534443093137362,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1203",
    "formula": "K2LiCuF6",
    "ggaBandgapEV": 0.9081,
    "predictedBandgapEV": 3.029159999999994,
    "predictionStdEV": 0.8538953650184534,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1204",
    "formula": "RbAuCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.417549999999999,
    "predictionStdEV": 0.8543693858630466,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1205",
    "formula": "K2RbCeBr6",
    "ggaBandgapEV": 0.4786,
    "predictedBandgapEV": 2.389910000000001,
    "predictionStdEV": 0.8546112811682285,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1206",
    "formula": "K2GdCuCl6",
    "ggaBandgapEV": 0.2586,
    "predictedBandgapEV": 2.7651199999999956,
    "predictionStdEV": 0.854816989536356,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1207",
    "formula": "ErIrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2628300000000003,
    "predictionStdEV": 0.8549980942084013,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1208",
    "formula": "Cs2AlInI6",
    "ggaBandgapEV": 1.4695,
    "predictedBandgapEV": 2.0469999999999984,
    "predictionStdEV": 0.855204186145038,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1209",
    "formula": "Rb2AlTlI6",
    "ggaBandgapEV": 1.8525,
    "predictedBandgapEV": 1.8886799999999995,
    "predictionStdEV": 0.8553051838963688,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1210",
    "formula": "Cs2InAgF6",
    "ggaBandgapEV": 2.1889,
    "predictedBandgapEV": 3.3653799999999956,
    "predictionStdEV": 0.8554115124312964,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1211",
    "formula": "Rb2LiTlCl6",
    "ggaBandgapEV": 1.5623,
    "predictedBandgapEV": 3.1824600000000003,
    "predictionStdEV": 0.8555912858368756,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1212",
    "formula": "Nd2FeNiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4187800000000013,
    "predictionStdEV": 0.8556325797911145,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1213",
    "formula": "VPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4109500000000001,
    "predictionStdEV": 0.8557055261595544,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1214",
    "formula": "Rb2NaNdI6",
    "ggaBandgapEV": 3.1242,
    "predictedBandgapEV": 3.2075000000000164,
    "predictionStdEV": 0.8559434268688539,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1215",
    "formula": "NpHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4633800000000012,
    "predictionStdEV": 0.8559864342383005,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1216",
    "formula": "LiVF3",
    "ggaBandgapEV": 2.5474,
    "predictedBandgapEV": 3.0820600000000016,
    "predictionStdEV": 0.8564841833916135,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1217",
    "formula": "VIrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.333750000000002,
    "predictionStdEV": 0.8565436284860205,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1218",
    "formula": "Sr2LaCoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1814999999999993,
    "predictionStdEV": 0.8568078839506555,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1219",
    "formula": "K2AlTlI6",
    "ggaBandgapEV": 1.8657,
    "predictedBandgapEV": 1.9155999999999995,
    "predictionStdEV": 0.8570622731167211,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1220",
    "formula": "NbFeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.288680000000004,
    "predictionStdEV": 0.8571095948593759,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1221",
    "formula": "Cs2AlCuCl6",
    "ggaBandgapEV": 0.9102,
    "predictedBandgapEV": 3.160079999999993,
    "predictionStdEV": 0.8571839905177898,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1222",
    "formula": "K2ScHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.110760000000004,
    "predictionStdEV": 0.8571901903311784,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1223",
    "formula": "ErZnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.095179999999998,
    "predictionStdEV": 0.8572951461427961,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1224",
    "formula": "Pr2VFeO6",
    "ggaBandgapEV": 1.1295,
    "predictedBandgapEV": 1.4964499999999952,
    "predictionStdEV": 0.857342549684782,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1225",
    "formula": "EuBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.162259999999998,
    "predictionStdEV": 0.8576691042587479,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1226",
    "formula": "NpOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1373700000000002,
    "predictionStdEV": 0.8577477094693997,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1227",
    "formula": "RbCrCl3",
    "ggaBandgapEV": 0.5143,
    "predictedBandgapEV": 2.741959999999996,
    "predictionStdEV": 0.8577676599172993,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1228",
    "formula": "K2NaPrI6",
    "ggaBandgapEV": 3.1007,
    "predictedBandgapEV": 3.2080600000000152,
    "predictionStdEV": 0.8577939358610537,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1229",
    "formula": "NbAgO3",
    "ggaBandgapEV": 1.7645,
    "predictedBandgapEV": 2.451079999999998,
    "predictionStdEV": 0.8579778747730017,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1230",
    "formula": "TiVO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8680000000000028,
    "predictionStdEV": 0.8581869260248601,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1231",
    "formula": "K2AlHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.235980000000004,
    "predictionStdEV": 0.858418394257719,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1232",
    "formula": "K2NaNdI6",
    "ggaBandgapEV": 3.1244,
    "predictedBandgapEV": 3.2076600000000157,
    "predictionStdEV": 0.8585210098768697,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1233",
    "formula": "BePdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.15042,
    "predictionStdEV": 0.8588192030922467,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1234",
    "formula": "BaNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4651600000000047,
    "predictionStdEV": 0.8589244870185037,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1235",
    "formula": "FePSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1858000000000044,
    "predictionStdEV": 0.8590082421024853,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1236",
    "formula": "CsAuCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.407369999999999,
    "predictionStdEV": 0.8592755862352902,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1237",
    "formula": "Na2InCuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4665,
    "predictionStdEV": 0.8597010236122794,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1238",
    "formula": "SrDyO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.205610000000001,
    "predictionStdEV": 0.8597689095914077,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1239",
    "formula": "Cs2GaCuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6961399999999944,
    "predictionStdEV": 0.8597792160781752,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1240",
    "formula": "RbBS3",
    "ggaBandgapEV": 2.3467,
    "predictedBandgapEV": 2.594960000000001,
    "predictionStdEV": 0.8599761615300745,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1241",
    "formula": "Rb2CuAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.410479999999996,
    "predictionStdEV": 0.8604494578997656,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1242",
    "formula": "Cs2NaEuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6333599999999993,
    "predictionStdEV": 0.8604844626139391,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1243",
    "formula": "Cs2AlTlI6",
    "ggaBandgapEV": 1.8437,
    "predictedBandgapEV": 1.9605399999999997,
    "predictionStdEV": 0.860535303401319,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1244",
    "formula": "Rb2YAgBr6",
    "ggaBandgapEV": 3.3533,
    "predictedBandgapEV": 3.2533,
    "predictionStdEV": 0.8607992739309205,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1245",
    "formula": "Mn2CdTeO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.05874,
    "predictionStdEV": 0.8608225208485217,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1246",
    "formula": "Rb2AlHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2191800000000055,
    "predictionStdEV": 0.8610860744431988,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1247",
    "formula": "HoCoO3",
    "ggaBandgapEV": 1.159,
    "predictedBandgapEV": 1.1426000000000045,
    "predictionStdEV": 0.8610903785317764,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1248",
    "formula": "Na2LiNF6",
    "ggaBandgapEV": 2.73,
    "predictedBandgapEV": 3.4243400000000035,
    "predictionStdEV": 0.8611980982329216,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1249",
    "formula": "K2SbPO6",
    "ggaBandgapEV": 2.5161,
    "predictedBandgapEV": 3.4790400000000012,
    "predictionStdEV": 0.8612329989033162,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1250",
    "formula": "Cs2LiNF6",
    "ggaBandgapEV": 2.7104,
    "predictedBandgapEV": 3.298579999999997,
    "predictionStdEV": 0.8612396783706622,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1251",
    "formula": "KErO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.309370000000001,
    "predictionStdEV": 0.8615742876270156,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1252",
    "formula": "K2AgMoCl6",
    "ggaBandgapEV": 1.0522,
    "predictedBandgapEV": 2.691979999999991,
    "predictionStdEV": 0.8617193160188527,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1253",
    "formula": "SmBiS3",
    "ggaBandgapEV": 1.6505,
    "predictedBandgapEV": 1.7494199999999989,
    "predictionStdEV": 0.8618558252979436,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1254",
    "formula": "Cs2LiMoCl6",
    "ggaBandgapEV": 1.5922,
    "predictedBandgapEV": 2.956479999999995,
    "predictionStdEV": 0.8619328915872724,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1255",
    "formula": "LiNdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.251999999999998,
    "predictionStdEV": 0.861985150684163,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1256",
    "formula": "KTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.400009999999999,
    "predictionStdEV": 0.8620550155877521,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1257",
    "formula": "SrTcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5927400000000012,
    "predictionStdEV": 0.8621381515743304,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1258",
    "formula": "Na2YCuBr6",
    "ggaBandgapEV": 1.7338,
    "predictedBandgapEV": 2.8396800000000053,
    "predictionStdEV": 0.8625663438831808,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1259",
    "formula": "K2LiPdF6",
    "ggaBandgapEV": 0.3787,
    "predictedBandgapEV": 2.9449899999999944,
    "predictionStdEV": 0.8626678097042911,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1260",
    "formula": "KCdF3",
    "ggaBandgapEV": 3.5644,
    "predictedBandgapEV": 3.4644,
    "predictionStdEV": 0.8627596420788355,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1261",
    "formula": "Cs2CuBiF6",
    "ggaBandgapEV": 1.2414,
    "predictedBandgapEV": 2.693799999999994,
    "predictionStdEV": 0.8627629222445758,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1262",
    "formula": "YbMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.247329999999999,
    "predictionStdEV": 0.86278428422173,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1263",
    "formula": "Rb2InCuCl6",
    "ggaBandgapEV": 0.055,
    "predictedBandgapEV": 2.961059999999993,
    "predictionStdEV": 0.863206450624646,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1264",
    "formula": "Rb2CeAgCl6",
    "ggaBandgapEV": 0.3111,
    "predictedBandgapEV": 2.635969999999994,
    "predictionStdEV": 0.8636664339315262,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1265",
    "formula": "RbInH3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1721000000000013,
    "predictionStdEV": 0.8642365937635381,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1266",
    "formula": "EuAgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9711399999999997,
    "predictionStdEV": 0.8642842705961975,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1267",
    "formula": "EuHO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.181739999999997,
    "predictionStdEV": 0.8643131217330919,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1268",
    "formula": "Rb2AlAgCl6",
    "ggaBandgapEV": 2.4798,
    "predictedBandgapEV": 3.216679999999996,
    "predictionStdEV": 0.8647102275329008,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1269",
    "formula": "HoCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9281600000000008,
    "predictionStdEV": 0.864784952690552,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1270",
    "formula": "PaHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4338000000000013,
    "predictionStdEV": 0.8649385874153155,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1271",
    "formula": "Cs2AlHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.263440000000006,
    "predictionStdEV": 0.8651967790046378,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1272",
    "formula": "Cs2RbPdF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.35809,
    "predictionStdEV": 0.8653744865085864,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1273",
    "formula": "KTmO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.322160000000001,
    "predictionStdEV": 0.8653776253174079,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1274",
    "formula": "Na2YCuCl6",
    "ggaBandgapEV": 1.732,
    "predictedBandgapEV": 3.1404600000000036,
    "predictionStdEV": 0.8657634713938901,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1275",
    "formula": "Ba2CaMoO6",
    "ggaBandgapEV": 2.2862,
    "predictedBandgapEV": 3.333159999999999,
    "predictionStdEV": 0.8658576756026357,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1276",
    "formula": "NaVO3",
    "ggaBandgapEV": 0.2361,
    "predictedBandgapEV": 2.651039999999996,
    "predictionStdEV": 0.8662750824074298,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1277",
    "formula": "MgNiH3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7155800000000019,
    "predictionStdEV": 0.8663276306340456,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1278",
    "formula": "Cs2InSbF6",
    "ggaBandgapEV": 2.237,
    "predictedBandgapEV": 3.3915800000000003,
    "predictionStdEV": 0.8663967356817558,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1279",
    "formula": "DyMnO3",
    "ggaBandgapEV": 1.1957,
    "predictedBandgapEV": 1.9452399999999925,
    "predictionStdEV": 0.8664096850797554,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1280",
    "formula": "Ti2VHO6",
    "ggaBandgapEV": 1.3491,
    "predictedBandgapEV": 2.6582399999999984,
    "predictionStdEV": 0.8665887735252511,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1281",
    "formula": "Cs2ScTlBr6",
    "ggaBandgapEV": 3.1775,
    "predictedBandgapEV": 3.0775,
    "predictionStdEV": 0.8670299821805456,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1282",
    "formula": "K2NaCuF6",
    "ggaBandgapEV": 0.7775,
    "predictedBandgapEV": 3.0370399999999953,
    "predictionStdEV": 0.8674945754297255,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1283",
    "formula": "Nd2MnFeO6",
    "ggaBandgapEV": 0.6755,
    "predictedBandgapEV": 1.5238499999999948,
    "predictionStdEV": 0.8676910899046985,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1284",
    "formula": "Rb2AlInBr6",
    "ggaBandgapEV": 2.12,
    "predictedBandgapEV": 2.400940000000001,
    "predictionStdEV": 0.8676942528333346,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1285",
    "formula": "RbNiBr3",
    "ggaBandgapEV": 0.4675,
    "predictedBandgapEV": 1.7113300000000047,
    "predictionStdEV": 0.8679157108268069,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1286",
    "formula": "CdTcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9453800000000019,
    "predictionStdEV": 0.867926929873706,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1287",
    "formula": "Cs2ScCuF6",
    "ggaBandgapEV": 1.8406,
    "predictedBandgapEV": 3.2039699999999978,
    "predictionStdEV": 0.8679427913751,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1288",
    "formula": "ZnCrO3",
    "ggaBandgapEV": 0.028,
    "predictedBandgapEV": 2.2184399999999984,
    "predictionStdEV": 0.8680071234730742,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1289",
    "formula": "ZrCoH3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2963700000000016,
    "predictionStdEV": 0.8681106341359935,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1290",
    "formula": "ZrNiH3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.640710000000002,
    "predictionStdEV": 0.868249932853438,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1291",
    "formula": "DyCoO3",
    "ggaBandgapEV": 1.1834,
    "predictedBandgapEV": 1.1496100000000047,
    "predictionStdEV": 0.8683274715797019,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1292",
    "formula": "K2HgSbCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3715199999999985,
    "predictionStdEV": 0.8685514317528924,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1293",
    "formula": "K2EuCuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.511669999999998,
    "predictionStdEV": 0.8686099015668655,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1294",
    "formula": "RbMnCl3",
    "ggaBandgapEV": 1.3114,
    "predictedBandgapEV": 2.593459999999995,
    "predictionStdEV": 0.8687479659832312,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1295",
    "formula": "K2AlInBr6",
    "ggaBandgapEV": 2.0567,
    "predictedBandgapEV": 2.4150600000000013,
    "predictionStdEV": 0.8688416405766927,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1296",
    "formula": "NdBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0892099999999996,
    "predictionStdEV": 0.8689540988452743,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1297",
    "formula": "Rb2SbAuF6",
    "ggaBandgapEV": 0.9769,
    "predictedBandgapEV": 2.6920299999999937,
    "predictionStdEV": 0.8690409824053177,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1298",
    "formula": "Cs2LiMoBr6",
    "ggaBandgapEV": 1.2713,
    "predictedBandgapEV": 2.4326499999999984,
    "predictionStdEV": 0.8691374617976136,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1299",
    "formula": "Cs2RbAuF6",
    "ggaBandgapEV": 0.8026,
    "predictedBandgapEV": 2.656829999999996,
    "predictionStdEV": 0.8696960969787084,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1300",
    "formula": "TbTeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9313199999999993,
    "predictionStdEV": 0.8697115944955549,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1301",
    "formula": "Cs2KCuF6",
    "ggaBandgapEV": 0.9406,
    "predictedBandgapEV": 2.9623699999999915,
    "predictionStdEV": 0.8701200107456439,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1302",
    "formula": "Dy2VFeO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2678899999999986,
    "predictionStdEV": 0.8701826807630687,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1303",
    "formula": "Rb2CeCuCl6",
    "ggaBandgapEV": 0.3068,
    "predictedBandgapEV": 2.6835099999999947,
    "predictionStdEV": 0.8701922947831695,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1304",
    "formula": "K2LiEuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.576379999999999,
    "predictionStdEV": 0.8704258128065833,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1305",
    "formula": "UReO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2453400000000001,
    "predictionStdEV": 0.870450678901455,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1306",
    "formula": "RbVCl3",
    "ggaBandgapEV": 0.4028,
    "predictedBandgapEV": 2.5315899999999987,
    "predictionStdEV": 0.8705225568013717,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1307",
    "formula": "Cs2AlInBr6",
    "ggaBandgapEV": 2.2444,
    "predictedBandgapEV": 2.526140000000001,
    "predictionStdEV": 0.8710359925973213,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1308",
    "formula": "Cs2RbCuF6",
    "ggaBandgapEV": 0.9363,
    "predictedBandgapEV": 2.9258299999999937,
    "predictionStdEV": 0.8710383809568891,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1309",
    "formula": "BaPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0304600000000037,
    "predictionStdEV": 0.8710522305809221,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1310",
    "formula": "EuPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8523600000000013,
    "predictionStdEV": 0.8710701638788931,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1311",
    "formula": "K2YAgBr6",
    "ggaBandgapEV": 3.312,
    "predictedBandgapEV": 3.2119999999999997,
    "predictionStdEV": 0.8710871026481785,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1312",
    "formula": "Ho2VFeO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2627299999999988,
    "predictionStdEV": 0.8711313317175555,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1313",
    "formula": "ScMnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9932000000000034,
    "predictionStdEV": 0.8713078445647088,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1314",
    "formula": "PrFeSb3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9489699999999996,
    "predictionStdEV": 0.871332880763719,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1315",
    "formula": "RbIO3",
    "ggaBandgapEV": 3.1942,
    "predictedBandgapEV": 3.2469999999999954,
    "predictionStdEV": 0.8717826564000916,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1316",
    "formula": "Cs2ScAuF6",
    "ggaBandgapEV": 1.8813,
    "predictedBandgapEV": 3.0861199999999984,
    "predictionStdEV": 0.8718523072172267,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1317",
    "formula": "Rb2NaEuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.662620000000001,
    "predictionStdEV": 0.8723534464882918,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1318",
    "formula": "Rb2BiAuF6",
    "ggaBandgapEV": 1.3553,
    "predictedBandgapEV": 2.6591799999999965,
    "predictionStdEV": 0.872539241295198,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1319",
    "formula": "TiCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0143799999999996,
    "predictionStdEV": 0.8729035545809171,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1320",
    "formula": "NdFeSb3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.94177,
    "predictionStdEV": 0.8729078514367942,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1321",
    "formula": "Rb2NaPdF6",
    "ggaBandgapEV": 0.6025,
    "predictedBandgapEV": 2.985209999999995,
    "predictionStdEV": 0.8730757732866031,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1322",
    "formula": "KAuCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.45659,
    "predictionStdEV": 0.8732263291380998,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1323",
    "formula": "KCrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.242349999999998,
    "predictionStdEV": 0.8732536444241149,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1324",
    "formula": "Cs2KAuF6",
    "ggaBandgapEV": 0.8094,
    "predictedBandgapEV": 2.6898899999999957,
    "predictionStdEV": 0.8737725893503405,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1325",
    "formula": "ErCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9480400000000024,
    "predictionStdEV": 0.8737838167418764,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1326",
    "formula": "Rb2AlInCl6",
    "ggaBandgapEV": 3.0157,
    "predictedBandgapEV": 3.4531400000000056,
    "predictionStdEV": 0.8741628797884282,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1327",
    "formula": "Cs2KAgF6",
    "ggaBandgapEV": 0.691,
    "predictedBandgapEV": 2.897689999999993,
    "predictionStdEV": 0.8742262372521215,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1328",
    "formula": "LiEuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2532199999999967,
    "predictionStdEV": 0.874243805582858,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1329",
    "formula": "NdReO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2687400000000004,
    "predictionStdEV": 0.8743961415742866,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1330",
    "formula": "Cs2NaGaBr6",
    "ggaBandgapEV": 1.6198,
    "predictedBandgapEV": 2.807600000000002,
    "predictionStdEV": 0.8744926757840803,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1331",
    "formula": "UFeSe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.167360000000004,
    "predictionStdEV": 0.8744938709905291,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1332",
    "formula": "Na2VPO6",
    "ggaBandgapEV": 3.0162,
    "predictedBandgapEV": 3.488780000000004,
    "predictionStdEV": 0.8748681681259174,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1333",
    "formula": "Cs2InCuCl6",
    "ggaBandgapEV": 0.0005,
    "predictedBandgapEV": 2.715959999999995,
    "predictionStdEV": 0.8750594713503779,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1334",
    "formula": "YbEuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9169100000000006,
    "predictionStdEV": 0.8753024059717869,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1335",
    "formula": "MgVO3",
    "ggaBandgapEV": 0.6836,
    "predictedBandgapEV": 2.372119999999996,
    "predictionStdEV": 0.8753935718292672,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1336",
    "formula": "Dy2MnCoO6",
    "ggaBandgapEV": 0.391,
    "predictedBandgapEV": 1.2316800000000012,
    "predictionStdEV": 0.8754368495785392,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1337",
    "formula": "TlBSe3",
    "ggaBandgapEV": 1.0289,
    "predictedBandgapEV": 1.882939999999998,
    "predictionStdEV": 0.8758702280589296,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1338",
    "formula": "Cs2YAuI6",
    "ggaBandgapEV": 1.2458,
    "predictedBandgapEV": 2.044659999999999,
    "predictionStdEV": 0.8762433933559781,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1339",
    "formula": "CaNiH3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6092900000000023,
    "predictionStdEV": 0.8763953137140794,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1340",
    "formula": "BaTcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.774130000000006,
    "predictionStdEV": 0.8764463435373557,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1341",
    "formula": "TaAgS3",
    "ggaBandgapEV": 0.006,
    "predictedBandgapEV": 1.7791099999999977,
    "predictionStdEV": 0.8767747475264083,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1342",
    "formula": "HfFeO3",
    "ggaBandgapEV": 2.1447,
    "predictedBandgapEV": 2.2122100000000073,
    "predictionStdEV": 0.8767858152935633,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1343",
    "formula": "Rb2AlAuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8980800000000015,
    "predictionStdEV": 0.8770787385406166,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1344",
    "formula": "MgHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9892199999999978,
    "predictionStdEV": 0.8771161790777771,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1345",
    "formula": "BaSrBi3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1959500000000007,
    "predictionStdEV": 0.8774990299139942,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1346",
    "formula": "Na2InAgCl6",
    "ggaBandgapEV": 1.2893,
    "predictedBandgapEV": 3.2101600000000006,
    "predictionStdEV": 0.8775196718022917,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1347",
    "formula": "ScVO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9141000000000052,
    "predictionStdEV": 0.8775934081338594,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1348",
    "formula": "Cs2RbScBr6",
    "ggaBandgapEV": 3.2669,
    "predictedBandgapEV": 3.1669,
    "predictionStdEV": 0.8776410425680868,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1349",
    "formula": "BaFeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6630000000000016,
    "predictionStdEV": 0.8777382867347197,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1350",
    "formula": "BaInO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.609200000000003,
    "predictionStdEV": 0.8781859484186703,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1351",
    "formula": "K2AgAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4191999999999965,
    "predictionStdEV": 0.8786087069907753,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1352",
    "formula": "Lu2FeCoO6",
    "ggaBandgapEV": 0.4362,
    "predictedBandgapEV": 1.5393400000000066,
    "predictionStdEV": 0.8794183102483156,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1353",
    "formula": "Na2CuAsF6",
    "ggaBandgapEV": 0.8743,
    "predictedBandgapEV": 3.010919999999998,
    "predictionStdEV": 0.8794898257512701,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1354",
    "formula": "Cs2TaAgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.709650000000001,
    "predictionStdEV": 0.8796226051551885,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1355",
    "formula": "YbMnO3",
    "ggaBandgapEV": 1.1038,
    "predictedBandgapEV": 2.0055799999999966,
    "predictionStdEV": 0.8796302993871908,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1356",
    "formula": "LiPmO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.250179999999998,
    "predictionStdEV": 0.8796416131584514,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1357",
    "formula": "Cs2GaAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.534259999999997,
    "predictionStdEV": 0.8802084141838206,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1358",
    "formula": "K2ScCuF6",
    "ggaBandgapEV": 1.2547,
    "predictedBandgapEV": 3.126659999999998,
    "predictionStdEV": 0.8804093618311886,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1359",
    "formula": "YbPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.756000000000002,
    "predictionStdEV": 0.8804683980700285,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1360",
    "formula": "KGdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2861799999999994,
    "predictionStdEV": 0.8806000270270278,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1361",
    "formula": "Sr2YCoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.199869999999999,
    "predictionStdEV": 0.8806993999657312,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1362",
    "formula": "ThWO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.274470000000001,
    "predictionStdEV": 0.880929434801676,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1363",
    "formula": "Cs2KScBr6",
    "ggaBandgapEV": 3.2299,
    "predictedBandgapEV": 3.1299,
    "predictionStdEV": 0.8809577231626935,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1364",
    "formula": "ReSbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4110100000000014,
    "predictionStdEV": 0.8811333780421684,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1365",
    "formula": "Rb2LiMoBr6",
    "ggaBandgapEV": 1.2722,
    "predictedBandgapEV": 2.407409999999997,
    "predictionStdEV": 0.8812344988140206,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1366",
    "formula": "LiIO3",
    "ggaBandgapEV": 3.5594,
    "predictedBandgapEV": 3.4938600000000015,
    "predictionStdEV": 0.8812391845577462,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1367",
    "formula": "Na2LuCuCl6",
    "ggaBandgapEV": 1.8198,
    "predictedBandgapEV": 3.0934600000000043,
    "predictionStdEV": 0.8813724685965636,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1368",
    "formula": "K2AlAuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9168000000000014,
    "predictionStdEV": 0.8813810526667791,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1369",
    "formula": "Rb2ScTlBr6",
    "ggaBandgapEV": 3.11,
    "predictedBandgapEV": 3.01,
    "predictionStdEV": 0.8819596478297641,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1370",
    "formula": "Ba2TiMnO6",
    "ggaBandgapEV": 1.2929,
    "predictedBandgapEV": 2.505660000000008,
    "predictionStdEV": 0.8822068716576648,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1371",
    "formula": "Na2TiHgF6",
    "ggaBandgapEV": 1.9101,
    "predictedBandgapEV": 3.329870000000002,
    "predictionStdEV": 0.8822405755234787,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1372",
    "formula": "Cs2NdAgI6",
    "ggaBandgapEV": 2.7392,
    "predictedBandgapEV": 2.6391999999999998,
    "predictionStdEV": 0.8823358115819628,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1373",
    "formula": "Rb2NaCuF6",
    "ggaBandgapEV": 0.7829,
    "predictedBandgapEV": 3.0038599999999938,
    "predictionStdEV": 0.8824430295492169,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1374",
    "formula": "Ba2PuMnO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8692600000000044,
    "predictionStdEV": 0.8834814386278875,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1375",
    "formula": "CsGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.604690000000002,
    "predictionStdEV": 0.883635702028839,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1376",
    "formula": "RbTiCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.465940000000002,
    "predictionStdEV": 0.884121776906326,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1377",
    "formula": "Cs2LiTlBr6",
    "ggaBandgapEV": 0.5547,
    "predictedBandgapEV": 2.421930000000005,
    "predictionStdEV": 0.8843987364871122,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1378",
    "formula": "LiSmO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2306199999999956,
    "predictionStdEV": 0.8844561128738951,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1379",
    "formula": "EuWO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2770300000000006,
    "predictionStdEV": 0.8845450407412843,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1380",
    "formula": "Ba2CdMoO6",
    "ggaBandgapEV": 2.5833,
    "predictedBandgapEV": 3.2561800000000014,
    "predictionStdEV": 0.8850952534049663,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1381",
    "formula": "Rb2InSbF6",
    "ggaBandgapEV": 2.2559,
    "predictedBandgapEV": 3.470500000000004,
    "predictionStdEV": 0.8851996102574825,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1382",
    "formula": "EuIrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.298310000000001,
    "predictionStdEV": 0.8852219461242474,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1383",
    "formula": "Cs2AlAuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9589600000000025,
    "predictionStdEV": 0.885417934311247,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1384",
    "formula": "KVCl3",
    "ggaBandgapEV": 0.3413,
    "predictedBandgapEV": 2.5663699999999996,
    "predictionStdEV": 0.8855097250171794,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1385",
    "formula": "Na2GaHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.346470000000002,
    "predictionStdEV": 0.8859152268134908,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1386",
    "formula": "Cs2AlTlBr6",
    "ggaBandgapEV": 2.9654,
    "predictedBandgapEV": 2.8653999999999997,
    "predictionStdEV": 0.8867596643961644,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1387",
    "formula": "Rb2NaMoCl6",
    "ggaBandgapEV": 1.6326,
    "predictedBandgapEV": 3.0561899999999986,
    "predictionStdEV": 0.887000188218694,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1388",
    "formula": "K2CeAuCl6",
    "ggaBandgapEV": 0.157,
    "predictedBandgapEV": 2.645879999999999,
    "predictionStdEV": 0.8871815065701039,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1389",
    "formula": "Rb2TlSbF6",
    "ggaBandgapEV": 2.8446,
    "predictedBandgapEV": 3.3131000000000017,
    "predictionStdEV": 0.887182388238179,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1390",
    "formula": "Na2GaAgCl6",
    "ggaBandgapEV": 1.1867,
    "predictedBandgapEV": 3.189200000000001,
    "predictionStdEV": 0.8874560045433234,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1391",
    "formula": "RbEuCl3",
    "ggaBandgapEV": 0.5872,
    "predictedBandgapEV": 2.796379999999997,
    "predictionStdEV": 0.8874923636854577,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1392",
    "formula": "Cs2NaInBr6",
    "ggaBandgapEV": 1.9899,
    "predictedBandgapEV": 2.885660000000005,
    "predictionStdEV": 0.8876558817469771,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1393",
    "formula": "CsTaS3",
    "ggaBandgapEV": 0.5344,
    "predictedBandgapEV": 1.9252999999999996,
    "predictionStdEV": 0.8877910846589989,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1394",
    "formula": "CaPrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1498000000000026,
    "predictionStdEV": 0.8885059144428918,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1395",
    "formula": "TlFeO3",
    "ggaBandgapEV": 0.7037,
    "predictedBandgapEV": 2.2086800000000073,
    "predictionStdEV": 0.8888299936433296,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1396",
    "formula": "IClO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2311600000000014,
    "predictionStdEV": 0.8888396111785307,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1397",
    "formula": "Na2TlCuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3651200000000037,
    "predictionStdEV": 0.8894314957319637,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1398",
    "formula": "K2CuAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.419299999999997,
    "predictionStdEV": 0.8896952343358929,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1399",
    "formula": "BeVO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.908660000000001,
    "predictionStdEV": 0.8899662939684846,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1400",
    "formula": "K2RbScBr6",
    "ggaBandgapEV": 3.267,
    "predictedBandgapEV": 3.167,
    "predictionStdEV": 0.8902592815579062,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1401",
    "formula": "MnBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.244660000000001,
    "predictionStdEV": 0.8903047143534625,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1402",
    "formula": "CsVCl3",
    "ggaBandgapEV": 0.4776,
    "predictedBandgapEV": 2.553249999999998,
    "predictionStdEV": 0.8903152742147014,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1403",
    "formula": "K2InAsCl6",
    "ggaBandgapEV": 0.4823,
    "predictedBandgapEV": 2.9509899999999933,
    "predictionStdEV": 0.8906783201021571,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1404",
    "formula": "TlCdCl3",
    "ggaBandgapEV": 3.3343,
    "predictedBandgapEV": 3.2342999999999997,
    "predictionStdEV": 0.8906820925560353,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1405",
    "formula": "CdIrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.542420000000001,
    "predictionStdEV": 0.8908447920934379,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1406",
    "formula": "PrCrSb3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7357200000000035,
    "predictionStdEV": 0.890972548174185,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1407",
    "formula": "DyCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.906650000000001,
    "predictionStdEV": 0.8912287178384678,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1408",
    "formula": "MnTlCl3",
    "ggaBandgapEV": 1.9565,
    "predictedBandgapEV": 2.604190000000001,
    "predictionStdEV": 0.8912971972916766,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1409",
    "formula": "Sm2MnNiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.57687,
    "predictionStdEV": 0.8914655086429312,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1410",
    "formula": "HgOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4402000000000021,
    "predictionStdEV": 0.8914684290539958,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1411",
    "formula": "SrTmO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.18703,
    "predictionStdEV": 0.8915428924622758,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1412",
    "formula": "Cs2KMoI6",
    "ggaBandgapEV": 1.5167,
    "predictedBandgapEV": 2.0285299999999977,
    "predictionStdEV": 0.8917748533682692,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1413",
    "formula": "RbInCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6961399999999993,
    "predictionStdEV": 0.8925000842576989,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1414",
    "formula": "Rb2LiTlBr6",
    "ggaBandgapEV": 0.5512,
    "predictedBandgapEV": 2.4093500000000025,
    "predictionStdEV": 0.8928908261932135,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1415",
    "formula": "SrFeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4741800000000005,
    "predictionStdEV": 0.8932939200509535,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1416",
    "formula": "LaLuC3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5392099999999993,
    "predictionStdEV": 0.8933244236558175,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1417",
    "formula": "Rb2GaAgF6",
    "ggaBandgapEV": 2.4256,
    "predictedBandgapEV": 3.4783200000000005,
    "predictionStdEV": 0.8937856441004184,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1418",
    "formula": "K2LiTlCl6",
    "ggaBandgapEV": 1.5833,
    "predictedBandgapEV": 3.22638,
    "predictionStdEV": 0.8938493136989029,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1419",
    "formula": "K2AlAgCl6",
    "ggaBandgapEV": 2.4813,
    "predictedBandgapEV": 3.283219999999998,
    "predictionStdEV": 0.8939641109127373,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1420",
    "formula": "Rb2InAgF6",
    "ggaBandgapEV": 1.8556,
    "predictedBandgapEV": 3.3834799999999974,
    "predictionStdEV": 0.8941312485312212,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1421",
    "formula": "NaGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.7018900000000046,
    "predictionStdEV": 0.8944162777476696,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1422",
    "formula": "NaCrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.278859999999996,
    "predictionStdEV": 0.8946955350285359,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1423",
    "formula": "Rb2GaAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.558099999999999,
    "predictionStdEV": 0.8950828956024148,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1424",
    "formula": "Cs2GdAgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.419669999999997,
    "predictionStdEV": 0.8951708446436346,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1425",
    "formula": "Na2LaCuCl6",
    "ggaBandgapEV": 1.4187,
    "predictedBandgapEV": 3.0896200000000027,
    "predictionStdEV": 0.8952050355086261,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1426",
    "formula": "Rb2AlTlBr6",
    "ggaBandgapEV": 2.9088,
    "predictedBandgapEV": 2.8087999999999997,
    "predictionStdEV": 0.8952574521331853,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1427",
    "formula": "PmEuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9389600000000031,
    "predictionStdEV": 0.8953089513681849,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1428",
    "formula": "Er2VFeO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2687200000000005,
    "predictionStdEV": 0.8954041889560278,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1429",
    "formula": "VZnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.90666,
    "predictionStdEV": 0.8955174171393887,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1430",
    "formula": "Rb2TaAgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6766000000000003,
    "predictionStdEV": 0.8955262921880089,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1431",
    "formula": "BaSbTe3",
    "ggaBandgapEV": 0.376,
    "predictedBandgapEV": 1.3762800000000015,
    "predictionStdEV": 0.8956789947296956,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1432",
    "formula": "MoNCl3",
    "ggaBandgapEV": 1.6837,
    "predictedBandgapEV": 2.5645399999999996,
    "predictionStdEV": 0.8956863225482459,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1433",
    "formula": "K2InGaCl6",
    "ggaBandgapEV": 1.7609,
    "predictedBandgapEV": 3.1742599999999985,
    "predictionStdEV": 0.8958075978690968,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1434",
    "formula": "Cs2TlAsF6",
    "ggaBandgapEV": 3.0006,
    "predictedBandgapEV": 3.286420000000001,
    "predictionStdEV": 0.8958206202136676,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1435",
    "formula": "Rb2LiCeBr6",
    "ggaBandgapEV": 0.4452,
    "predictedBandgapEV": 2.47094,
    "predictionStdEV": 0.8958334758201437,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1436",
    "formula": "Rb2NaGaBr6",
    "ggaBandgapEV": 1.6327,
    "predictedBandgapEV": 2.7371800000000004,
    "predictionStdEV": 0.8959780396862419,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1437",
    "formula": "Na2AgAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3768100000000034,
    "predictionStdEV": 0.8961081820293798,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1438",
    "formula": "SrAsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3604999999999996,
    "predictionStdEV": 0.896383037545893,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1439",
    "formula": "Cs2NaTlBr6",
    "ggaBandgapEV": 1.0215,
    "predictedBandgapEV": 2.6352200000000052,
    "predictionStdEV": 0.8967037702608374,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1440",
    "formula": "Na2AlAgCl6",
    "ggaBandgapEV": 2.4849,
    "predictedBandgapEV": 3.406520000000006,
    "predictionStdEV": 0.8967228610892016,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1441",
    "formula": "NdMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1659600000000006,
    "predictionStdEV": 0.8969143093963892,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1442",
    "formula": "NbHO3",
    "ggaBandgapEV": 2.5186,
    "predictedBandgapEV": 2.9941599999999973,
    "predictionStdEV": 0.8970664938565016,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1443",
    "formula": "UTcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5391000000000015,
    "predictionStdEV": 0.8972924216775713,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1444",
    "formula": "Sr2PrNbO6",
    "ggaBandgapEV": 2.888,
    "predictedBandgapEV": 3.4776200000000053,
    "predictionStdEV": 0.8973949719047911,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1445",
    "formula": "NdCoO3",
    "ggaBandgapEV": 1.24,
    "predictedBandgapEV": 1.2059100000000043,
    "predictionStdEV": 0.8975018227836629,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1446",
    "formula": "VNCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.173060000000001,
    "predictionStdEV": 0.8979062514539023,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1447",
    "formula": "CuPbBr3",
    "ggaBandgapEV": 0.2824,
    "predictedBandgapEV": 1.9225000000000079,
    "predictionStdEV": 0.8979743036412566,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1448",
    "formula": "CeNiO3",
    "ggaBandgapEV": 0.9315,
    "predictedBandgapEV": 1.534270000000001,
    "predictionStdEV": 0.8981309576559519,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1449",
    "formula": "Cs2TaCuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.730300000000001,
    "predictionStdEV": 0.8981738194803954,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1450",
    "formula": "K2LiMoBr6",
    "ggaBandgapEV": 1.2749,
    "predictedBandgapEV": 2.4314699999999974,
    "predictionStdEV": 0.8984060268609061,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1451",
    "formula": "MgPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7594499999999984,
    "predictionStdEV": 0.8990273341228284,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1452",
    "formula": "AgTeO3",
    "ggaBandgapEV": 1.6613,
    "predictedBandgapEV": 2.642420000000001,
    "predictionStdEV": 0.8993686360997915,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1453",
    "formula": "SmCoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0837300000000043,
    "predictionStdEV": 0.8994430705164184,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1454",
    "formula": "Cs2YCuI6",
    "ggaBandgapEV": 1.7819,
    "predictedBandgapEV": 2.134879999999997,
    "predictionStdEV": 0.8995628858506762,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1455",
    "formula": "TiCrO3",
    "ggaBandgapEV": 0.4282,
    "predictedBandgapEV": 2.6324299999999994,
    "predictionStdEV": 0.8996184441750839,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1456",
    "formula": "LiGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6664200000000045,
    "predictionStdEV": 0.8996231342067622,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1457",
    "formula": "Rb2NaTlBr6",
    "ggaBandgapEV": 1.0394,
    "predictedBandgapEV": 2.629770000000003,
    "predictionStdEV": 0.8999209949212219,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1458",
    "formula": "K2LiTlBr6",
    "ggaBandgapEV": 0.5625,
    "predictedBandgapEV": 2.430130000000003,
    "predictionStdEV": 0.8999230150962916,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1459",
    "formula": "Eu2TiCuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9297799999999992,
    "predictionStdEV": 0.9001611809004001,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1460",
    "formula": "K2NaGaBr6",
    "ggaBandgapEV": 1.6543,
    "predictedBandgapEV": 2.7396800000000017,
    "predictionStdEV": 0.9004331722010247,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1461",
    "formula": "KIO3",
    "ggaBandgapEV": 2.8131,
    "predictedBandgapEV": 3.299219999999996,
    "predictionStdEV": 0.9005107393029812,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1462",
    "formula": "SrErO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1573200000000003,
    "predictionStdEV": 0.9007445351485611,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1463",
    "formula": "RbNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8512900000000005,
    "predictionStdEV": 0.9011585797738385,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1464",
    "formula": "Rb2YAuI6",
    "ggaBandgapEV": 1.2703,
    "predictedBandgapEV": 2.012719999999999,
    "predictionStdEV": 0.9012152914814523,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1465",
    "formula": "NaTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4241199999999994,
    "predictionStdEV": 0.9012412693613174,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1466",
    "formula": "SrHoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1666800000000004,
    "predictionStdEV": 0.9013255114552114,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1467",
    "formula": "Na2AlAgBr6",
    "ggaBandgapEV": 1.4971,
    "predictedBandgapEV": 2.6609,
    "predictionStdEV": 0.9013695080265366,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1468",
    "formula": "K2LiCeBr6",
    "ggaBandgapEV": 0.4447,
    "predictedBandgapEV": 2.489640000000002,
    "predictionStdEV": 0.9014189760594126,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1469",
    "formula": "K2NaEuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6901400000000013,
    "predictionStdEV": 0.9014882031396747,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1470",
    "formula": "Nd2MnNiO6",
    "ggaBandgapEV": 1.5129,
    "predictedBandgapEV": 1.760959999999995,
    "predictionStdEV": 0.9017272749562368,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1471",
    "formula": "K2CeCuCl6",
    "ggaBandgapEV": 0.3046,
    "predictedBandgapEV": 2.7419599999999957,
    "predictionStdEV": 0.9019046836556511,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1472",
    "formula": "Ba2YbMoO6",
    "ggaBandgapEV": 2.2667,
    "predictedBandgapEV": 3.338819999999999,
    "predictionStdEV": 0.901950501746077,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1473",
    "formula": "Cs2LiCeBr6",
    "ggaBandgapEV": 0.4452,
    "predictedBandgapEV": 2.4831900000000005,
    "predictionStdEV": 0.9019975465044229,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1474",
    "formula": "Pr2CoRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1176100000000024,
    "predictionStdEV": 0.9022126899462224,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1475",
    "formula": "CoPS3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4196600000000028,
    "predictionStdEV": 0.9024283264614416,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1476",
    "formula": "K2VPO6",
    "ggaBandgapEV": 3.3922,
    "predictedBandgapEV": 3.4282600000000016,
    "predictionStdEV": 0.9025095968464827,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1477",
    "formula": "NaYbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.329429999999999,
    "predictionStdEV": 0.9026641264058275,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1478",
    "formula": "K2AlAuCl6",
    "ggaBandgapEV": 0.8758,
    "predictedBandgapEV": 2.995169999999995,
    "predictionStdEV": 0.9026928165771574,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1479",
    "formula": "Rb2TaCuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6924900000000003,
    "predictionStdEV": 0.902713825029838,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1480",
    "formula": "Cs2PrAgI6",
    "ggaBandgapEV": 2.7826,
    "predictedBandgapEV": 2.6826,
    "predictionStdEV": 0.9028006369071732,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1481",
    "formula": "K2CeAgCl6",
    "ggaBandgapEV": 0.313,
    "predictedBandgapEV": 2.699249999999995,
    "predictionStdEV": 0.902866871415715,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1482",
    "formula": "K2RbMoI6",
    "ggaBandgapEV": 1.4896,
    "predictedBandgapEV": 1.9753299999999985,
    "predictionStdEV": 0.9029474741644712,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1483",
    "formula": "InSnBr3",
    "ggaBandgapEV": 1.8479,
    "predictedBandgapEV": 1.8103600000000033,
    "predictionStdEV": 0.9030574014978218,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1484",
    "formula": "LiScI3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1291200000000012,
    "predictionStdEV": 0.9033643924795818,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1485",
    "formula": "NaPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.034599999999997,
    "predictionStdEV": 0.9039095308713154,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1486",
    "formula": "K2TlIrF6",
    "ggaBandgapEV": 2.296,
    "predictedBandgapEV": 3.2890999999999995,
    "predictionStdEV": 0.9042569269848043,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1487",
    "formula": "Rb2NdAgI6",
    "ggaBandgapEV": 2.7663,
    "predictedBandgapEV": 2.6663,
    "predictionStdEV": 0.9043296080522841,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1488",
    "formula": "Ca2MnNiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.74188,
    "predictionStdEV": 0.9043728576201296,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1489",
    "formula": "LiDyO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.31875,
    "predictionStdEV": 0.9044856480342829,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1490",
    "formula": "Cs2YInBr6",
    "ggaBandgapEV": 3.2242,
    "predictedBandgapEV": 3.1242,
    "predictionStdEV": 0.9045561251796396,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1491",
    "formula": "K2AlTlBr6",
    "ggaBandgapEV": 2.8743,
    "predictedBandgapEV": 2.7742999999999998,
    "predictionStdEV": 0.9046964615825581,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1492",
    "formula": "Tb2VFeO6",
    "ggaBandgapEV": 1.4907,
    "predictedBandgapEV": 1.3906999999999998,
    "predictionStdEV": 0.905215972627528,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1493",
    "formula": "PrCrO3",
    "ggaBandgapEV": 2.0419,
    "predictedBandgapEV": 2.8789600000000037,
    "predictionStdEV": 0.9053757884988956,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1494",
    "formula": "BeHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9921899999999986,
    "predictionStdEV": 0.905398284679178,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1495",
    "formula": "CsCrCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4424599999999974,
    "predictionStdEV": 0.9054168368215824,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1496",
    "formula": "CrRhO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9978599999999997,
    "predictionStdEV": 0.905509812426126,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1497",
    "formula": "K2GaAgF6",
    "ggaBandgapEV": 2.2432,
    "predictedBandgapEV": 3.495439999999999,
    "predictionStdEV": 0.905776355619862,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1498",
    "formula": "CsHgF3",
    "ggaBandgapEV": 1.2673,
    "predictedBandgapEV": 2.683919999999997,
    "predictionStdEV": 0.9058612110030996,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1499",
    "formula": "NiPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4004300000000034,
    "predictionStdEV": 0.9060346930995523,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1500",
    "formula": "Cs2NaYbCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5917,
    "predictionStdEV": 0.9061077253836869,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1501",
    "formula": "Rb2TlAsF6",
    "ggaBandgapEV": 3.0371,
    "predictedBandgapEV": 3.368080000000002,
    "predictionStdEV": 0.9061840395857774,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1502",
    "formula": "MnNCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2621400000000005,
    "predictionStdEV": 0.906366493423052,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1503",
    "formula": "GaCuBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1498800000000045,
    "predictionStdEV": 0.9064104950848713,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1504",
    "formula": "Cs2NaBiI6",
    "ggaBandgapEV": 2.2463,
    "predictedBandgapEV": 2.323360000000004,
    "predictionStdEV": 0.9064117775051264,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1505",
    "formula": "Cs2TlSbF6",
    "ggaBandgapEV": 2.7774,
    "predictedBandgapEV": 3.2437400000000016,
    "predictionStdEV": 0.9066058748982377,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1506",
    "formula": "Rb2EuAuCl6",
    "ggaBandgapEV": 0.0002,
    "predictedBandgapEV": 2.402539999999998,
    "predictionStdEV": 0.9069607204283996,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1507",
    "formula": "EuOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2522100000000007,
    "predictionStdEV": 0.9069665737501023,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1508",
    "formula": "PmMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1085599999999993,
    "predictionStdEV": 0.9076053803278168,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1509",
    "formula": "Cs2EuAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.411279999999998,
    "predictionStdEV": 0.9076393345376778,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1510",
    "formula": "Rb2ScAuF6",
    "ggaBandgapEV": 1.722,
    "predictedBandgapEV": 3.1213899999999972,
    "predictionStdEV": 0.908111346642028,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1511",
    "formula": "Sr2NbFeO6",
    "ggaBandgapEV": 1.8391,
    "predictedBandgapEV": 1.7390999999999999,
    "predictionStdEV": 0.9081221183849684,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1512",
    "formula": "ZnAuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.150819999999999,
    "predictionStdEV": 0.908222399855894,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1513",
    "formula": "K2ScTlBr6",
    "ggaBandgapEV": 3.0664,
    "predictedBandgapEV": 2.9663999999999997,
    "predictionStdEV": 0.9082683028709077,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1514",
    "formula": "NaSeO3",
    "ggaBandgapEV": 3.0887,
    "predictedBandgapEV": 3.3511800000000043,
    "predictionStdEV": 0.9083952925901807,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1515",
    "formula": "Cs2TlCuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5496199999999978,
    "predictionStdEV": 0.9084169503042104,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1516",
    "formula": "NdBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.14318,
    "predictionStdEV": 0.9085472401587055,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1517",
    "formula": "Cs2YHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9227599999999996,
    "predictionStdEV": 0.9086553155074797,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1518",
    "formula": "Rb2NaInBr6",
    "ggaBandgapEV": 0.0116,
    "predictedBandgapEV": 2.5723300000000004,
    "predictionStdEV": 0.9087659880849434,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1519",
    "formula": "AgBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5496800000000042,
    "predictionStdEV": 0.9088088344641025,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1520",
    "formula": "TiMnO3",
    "ggaBandgapEV": 1.5365,
    "predictedBandgapEV": 2.1440999999999937,
    "predictionStdEV": 0.9089984543441203,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1521",
    "formula": "EuAuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.68278,
    "predictionStdEV": 0.9091360578043314,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1522",
    "formula": "Rb2TlAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4894899999999995,
    "predictionStdEV": 0.9091682407013577,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1523",
    "formula": "CdFeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2151900000000055,
    "predictionStdEV": 0.9092643806396471,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1524",
    "formula": "K2NaInBr6",
    "ggaBandgapEV": 2.0334,
    "predictedBandgapEV": 2.8186800000000054,
    "predictionStdEV": 0.9092864551944021,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1525",
    "formula": "Rb2NaAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3791900000000026,
    "predictionStdEV": 0.9093289800176823,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1526",
    "formula": "K2SnOF6",
    "ggaBandgapEV": 0.8861,
    "predictedBandgapEV": 3.1908599999999976,
    "predictionStdEV": 0.90950462362761,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1527",
    "formula": "VOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.413180000000002,
    "predictionStdEV": 0.9095100261129625,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1528",
    "formula": "Na2CuSbF6",
    "ggaBandgapEV": 0.6049,
    "predictedBandgapEV": 2.9936899999999955,
    "predictionStdEV": 0.9098526440583659,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1529",
    "formula": "K2NaTlBr6",
    "ggaBandgapEV": 1.0547,
    "predictedBandgapEV": 2.632570000000003,
    "predictionStdEV": 0.9099657384209582,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1530",
    "formula": "Cs2InAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5646799999999974,
    "predictionStdEV": 0.9100117019027839,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1531",
    "formula": "Rb2InBiF6",
    "ggaBandgapEV": 2.5854,
    "predictedBandgapEV": 3.3158800000000035,
    "predictionStdEV": 0.9102447064388776,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1532",
    "formula": "CuPO3",
    "ggaBandgapEV": 0.8371,
    "predictedBandgapEV": 2.640380000000001,
    "predictionStdEV": 0.9103026175948293,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1533",
    "formula": "KTiCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4857600000000013,
    "predictionStdEV": 0.9105130544918072,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1534",
    "formula": "Ba2MgMoO6",
    "ggaBandgapEV": 2.2639,
    "predictedBandgapEV": 3.324130000000002,
    "predictionStdEV": 0.9105390673112265,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1535",
    "formula": "Cs2RbCeCl6",
    "ggaBandgapEV": 0.3612,
    "predictedBandgapEV": 2.816989999999997,
    "predictionStdEV": 0.9107998627031079,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1536",
    "formula": "PmWO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3051000000000006,
    "predictionStdEV": 0.911125507271089,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1537",
    "formula": "CeBS3",
    "ggaBandgapEV": 0.1451,
    "predictedBandgapEV": 2.2006200000000007,
    "predictionStdEV": 0.9111624529138579,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1538",
    "formula": "K2NaMoCl6",
    "ggaBandgapEV": 1.5998,
    "predictedBandgapEV": 3.0898099999999973,
    "predictionStdEV": 0.9113354014302315,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1539",
    "formula": "GdCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9473400000000018,
    "predictionStdEV": 0.9117376401136477,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1540",
    "formula": "Rb2YAuF6",
    "ggaBandgapEV": 1.675,
    "predictedBandgapEV": 3.057209999999996,
    "predictionStdEV": 0.9118366991408059,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1541",
    "formula": "SrTlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.016899999999995,
    "predictionStdEV": 0.9120658364394522,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1542",
    "formula": "PaOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2822200000000006,
    "predictionStdEV": 0.9123047580715541,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1543",
    "formula": "NpTaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.394740000000001,
    "predictionStdEV": 0.9128550445716984,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1544",
    "formula": "MgMnO3",
    "ggaBandgapEV": 0.5349,
    "predictedBandgapEV": 2.2930799999999953,
    "predictionStdEV": 0.9129335756778799,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1545",
    "formula": "Lu2MnCoO6",
    "ggaBandgapEV": 1.3163,
    "predictedBandgapEV": 1.2215000000000016,
    "predictionStdEV": 0.9129959200346975,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1546",
    "formula": "Nd2TiCuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.925260000000001,
    "predictionStdEV": 0.9130518782632238,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1547",
    "formula": "Ba2PrPbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8681099999999995,
    "predictionStdEV": 0.9132991721774433,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1548",
    "formula": "MoPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5683200000000015,
    "predictionStdEV": 0.9133153221095105,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1549",
    "formula": "YbBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1779599999999997,
    "predictionStdEV": 0.9134578470843638,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1550",
    "formula": "LiTiCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5290399999999993,
    "predictionStdEV": 0.9141121804242625,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1551",
    "formula": "Na2EuCuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6374900000000028,
    "predictionStdEV": 0.9143262819694054,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1552",
    "formula": "Cs2NaAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3938700000000064,
    "predictionStdEV": 0.9144597711764039,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1553",
    "formula": "K2NaAuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.392190000000003,
    "predictionStdEV": 0.9145134520060384,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1554",
    "formula": "AlInS3",
    "ggaBandgapEV": 2.3873,
    "predictedBandgapEV": 2.5175399999999932,
    "predictionStdEV": 0.9146309356237626,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1555",
    "formula": "LaCoN3",
    "ggaBandgapEV": 0.4929,
    "predictedBandgapEV": 1.1821500000000036,
    "predictionStdEV": 0.9147108436549762,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1556",
    "formula": "LiYbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2745899999999977,
    "predictionStdEV": 0.91487970897818,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1557",
    "formula": "HgNCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2605200000000027,
    "predictionStdEV": 0.9149954259994952,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1558",
    "formula": "Ca2CrSbO6",
    "ggaBandgapEV": 2.1014,
    "predictedBandgapEV": 3.474300000000008,
    "predictionStdEV": 0.9150204970381799,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1559",
    "formula": "TlFeF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.158350000000008,
    "predictionStdEV": 0.9151215370102488,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1560",
    "formula": "RbGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6371100000000016,
    "predictionStdEV": 0.9151884493917093,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1561",
    "formula": "LiGaBr3",
    "ggaBandgapEV": 2.9371,
    "predictedBandgapEV": 2.8371,
    "predictionStdEV": 0.9152529302875797,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1562",
    "formula": "PuNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3066000000000038,
    "predictionStdEV": 0.9154089468647315,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1563",
    "formula": "Cs2TlAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.482869999999999,
    "predictionStdEV": 0.9155667715136907,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1564",
    "formula": "CsHgCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.366029999999999,
    "predictionStdEV": 0.9155775713176919,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1565",
    "formula": "Na2LiTlCl6",
    "ggaBandgapEV": 1.6361,
    "predictedBandgapEV": 3.2958900000000058,
    "predictionStdEV": 0.9155876571361159,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1566",
    "formula": "Rb2YInBr6",
    "ggaBandgapEV": 3.0981,
    "predictedBandgapEV": 2.9981,
    "predictionStdEV": 0.9157147809225329,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1567",
    "formula": "K2AlInCl6",
    "ggaBandgapEV": 2.9506,
    "predictedBandgapEV": 3.4891200000000038,
    "predictionStdEV": 0.9158685634958766,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1568",
    "formula": "Rb2TlAgCl6",
    "ggaBandgapEV": 0.0113,
    "predictedBandgapEV": 2.5042999999999975,
    "predictionStdEV": 0.9159920359915802,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1569",
    "formula": "KCrCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4717499999999983,
    "predictionStdEV": 0.9160116743251705,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1570",
    "formula": "Cs2LiYI6",
    "ggaBandgapEV": 3.0024,
    "predictedBandgapEV": 3.1196200000000136,
    "predictionStdEV": 0.9160781929508007,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1571",
    "formula": "Rb2HgBiCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.25023,
    "predictionStdEV": 0.9160938800690667,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1572",
    "formula": "Rb2AsAuF6",
    "ggaBandgapEV": 1.032,
    "predictedBandgapEV": 2.799249999999994,
    "predictionStdEV": 0.916156420869276,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1573",
    "formula": "Rb2InAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.570919999999998,
    "predictionStdEV": 0.9162839917842063,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1574",
    "formula": "CoPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1063100000000023,
    "predictionStdEV": 0.9163423671859766,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1575",
    "formula": "K2TlAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.51427,
    "predictionStdEV": 0.9163636380280473,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1576",
    "formula": "Y2MnCrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8656599999999999,
    "predictionStdEV": 0.9164220449116216,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1577",
    "formula": "Rb2LiYbCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5241700000000002,
    "predictionStdEV": 0.9166784393122812,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1578",
    "formula": "HoMnO3",
    "ggaBandgapEV": 1.543,
    "predictedBandgapEV": 2.008339999999993,
    "predictionStdEV": 0.9167160107688738,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1579",
    "formula": "Nd2CoRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1365500000000024,
    "predictionStdEV": 0.9167268663566067,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1580",
    "formula": "Na2InHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.331090000000001,
    "predictionStdEV": 0.9167813599217647,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1581",
    "formula": "ThPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6015000000000021,
    "predictionStdEV": 0.9175257217102962,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1582",
    "formula": "FeNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.335520000000003,
    "predictionStdEV": 0.9176460263086168,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1583",
    "formula": "BaPuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.798890000000001,
    "predictionStdEV": 0.9180250094087861,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1584",
    "formula": "CaHoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3510900000000006,
    "predictionStdEV": 0.9181685367621778,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1585",
    "formula": "Rb2TlRhF6",
    "ggaBandgapEV": 1.9971,
    "predictedBandgapEV": 3.2052299999999994,
    "predictionStdEV": 0.9181697539670959,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1586",
    "formula": "K2TaAgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7087200000000002,
    "predictionStdEV": 0.9182836498598895,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1587",
    "formula": "K2TaCuI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.710669999999999,
    "predictionStdEV": 0.9189643089369683,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1588",
    "formula": "YCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8689600000000017,
    "predictionStdEV": 0.9190554490344958,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1589",
    "formula": "K2TlBiF6",
    "ggaBandgapEV": 3.2043,
    "predictedBandgapEV": 3.3638400000000033,
    "predictionStdEV": 0.9192201338090903,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1590",
    "formula": "K2GaAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.569219999999999,
    "predictionStdEV": 0.9192305432262337,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1591",
    "formula": "Ba2LiTeO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3512100000000022,
    "predictionStdEV": 0.9193560713347143,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1592",
    "formula": "YbAuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6798100000000002,
    "predictionStdEV": 0.9196062820033363,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1593",
    "formula": "ErTaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4692100000000008,
    "predictionStdEV": 0.9196755546930668,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1594",
    "formula": "TlHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.870880000000002,
    "predictionStdEV": 0.9197104031161095,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1595",
    "formula": "CsNiBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.702840000000005,
    "predictionStdEV": 0.9198844136085788,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1596",
    "formula": "GeBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3995000000000044,
    "predictionStdEV": 0.9199393186509647,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1597",
    "formula": "Ba2ZnMoO6",
    "ggaBandgapEV": 2.4114,
    "predictedBandgapEV": 3.3086200000000012,
    "predictionStdEV": 0.9200771139420866,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1598",
    "formula": "TbMnO3",
    "ggaBandgapEV": 1.494,
    "predictedBandgapEV": 1.996839999999994,
    "predictionStdEV": 0.9202512778583919,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1599",
    "formula": "RbHgF3",
    "ggaBandgapEV": 1.1991,
    "predictedBandgapEV": 2.699819999999997,
    "predictionStdEV": 0.9203762641441815,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1600",
    "formula": "Rb2YHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8793599999999988,
    "predictionStdEV": 0.9203836647833329,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1601",
    "formula": "Rb2InAsF6",
    "ggaBandgapEV": 2.4102,
    "predictedBandgapEV": 3.4910600000000036,
    "predictionStdEV": 0.9209581295585596,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1602",
    "formula": "Gd2VFeO6",
    "ggaBandgapEV": 1.6148,
    "predictedBandgapEV": 1.5148,
    "predictionStdEV": 0.9209770781078114,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1603",
    "formula": "GdTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9612600000000076,
    "predictionStdEV": 0.9210349680658163,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1604",
    "formula": "GdBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1205000000000025,
    "predictionStdEV": 0.9212699658623417,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1605",
    "formula": "RbCoBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.189750000000003,
    "predictionStdEV": 0.9214962221843358,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1606",
    "formula": "K2NaBiI6",
    "ggaBandgapEV": 2.2588,
    "predictedBandgapEV": 2.2723800000000027,
    "predictionStdEV": 0.9220460593701385,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1607",
    "formula": "Rb2TlCuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.552319999999999,
    "predictionStdEV": 0.9220912740070802,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1608",
    "formula": "K2BiAuF6",
    "ggaBandgapEV": 1.2889,
    "predictedBandgapEV": 2.764679999999995,
    "predictionStdEV": 0.9221388711034799,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1609",
    "formula": "CaTcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7034899999999997,
    "predictionStdEV": 0.9222598711317765,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1610",
    "formula": "MgCrO3",
    "ggaBandgapEV": 0.6547,
    "predictedBandgapEV": 2.749739999999997,
    "predictionStdEV": 0.9224453004921213,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1611",
    "formula": "Cs2HgBiCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2669300000000003,
    "predictionStdEV": 0.9225744550441444,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1612",
    "formula": "AgIO3",
    "ggaBandgapEV": 2.4582,
    "predictedBandgapEV": 2.872539999999999,
    "predictionStdEV": 0.9226373872762796,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1613",
    "formula": "Rb2NaBiI6",
    "ggaBandgapEV": 2.2536,
    "predictedBandgapEV": 2.266060000000003,
    "predictionStdEV": 0.923253960944658,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1614",
    "formula": "CsScCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6311200000000037,
    "predictionStdEV": 0.9234868410540571,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1615",
    "formula": "CsLaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.16396,
    "predictionStdEV": 0.9241854350724215,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1616",
    "formula": "RbPbF3",
    "ggaBandgapEV": 1.7164,
    "predictedBandgapEV": 2.761119999999999,
    "predictionStdEV": 0.9242523170649878,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1617",
    "formula": "SmBS3",
    "ggaBandgapEV": 2.3886,
    "predictedBandgapEV": 2.514519999999997,
    "predictionStdEV": 0.9243302275702133,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1618",
    "formula": "Sm2TiMnO6",
    "ggaBandgapEV": 1.6987,
    "predictedBandgapEV": 2.125299999999992,
    "predictionStdEV": 0.9245946733569268,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1619",
    "formula": "TlPbI3",
    "ggaBandgapEV": 2.3962,
    "predictedBandgapEV": 2.2962,
    "predictionStdEV": 0.9246238527639216,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1620",
    "formula": "Rb2PrAgI6",
    "ggaBandgapEV": 2.8103,
    "predictedBandgapEV": 2.7102999999999997,
    "predictionStdEV": 0.9247028928255827,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1621",
    "formula": "CdInBr3",
    "ggaBandgapEV": 2.2578,
    "predictedBandgapEV": 2.1578,
    "predictionStdEV": 0.9248857391051063,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1622",
    "formula": "Ca2CoRhO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1321100000000017,
    "predictionStdEV": 0.9252442909307785,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1623",
    "formula": "Yb2MnCoO6",
    "ggaBandgapEV": 0.1182,
    "predictedBandgapEV": 1.2414700000000047,
    "predictionStdEV": 0.9252469341208333,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1624",
    "formula": "K2YAuI6",
    "ggaBandgapEV": 1.279,
    "predictedBandgapEV": 2.0667899999999997,
    "predictionStdEV": 0.9254884904200591,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1625",
    "formula": "ReTeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4853600000000027,
    "predictionStdEV": 0.9259248729783643,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1626",
    "formula": "SrPuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6951300000000005,
    "predictionStdEV": 0.9259519064724676,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1627",
    "formula": "YbCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9021000000000017,
    "predictionStdEV": 0.925982067860929,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1628",
    "formula": "Cs2YHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1779700000000055,
    "predictionStdEV": 0.926087268619973,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1629",
    "formula": "Cs2InBiF6",
    "ggaBandgapEV": 2.5924,
    "predictedBandgapEV": 3.252800000000003,
    "predictionStdEV": 0.926209997786679,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1630",
    "formula": "CsAuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.872459999999999,
    "predictionStdEV": 0.926371819735466,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1631",
    "formula": "K2EuAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.437619999999998,
    "predictionStdEV": 0.9268238967570925,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1632",
    "formula": "TbOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2125099999999998,
    "predictionStdEV": 0.9269008846149617,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1633",
    "formula": "TbCoO3",
    "ggaBandgapEV": 1.4222,
    "predictedBandgapEV": 1.3221999999999998,
    "predictionStdEV": 0.9269246042154691,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1634",
    "formula": "LiErO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2991700000000006,
    "predictionStdEV": 0.9274244773025988,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1635",
    "formula": "LaMnN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.854900000000002,
    "predictionStdEV": 0.9276041127550049,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1636",
    "formula": "VNiO3",
    "ggaBandgapEV": 0.9167,
    "predictedBandgapEV": 1.820190000000003,
    "predictionStdEV": 0.9279883156053215,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1637",
    "formula": "K2InCuCl6",
    "ggaBandgapEV": 0.0549,
    "predictedBandgapEV": 3.0199399999999925,
    "predictionStdEV": 0.9280369046541208,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1638",
    "formula": "MnNF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1085100000000008,
    "predictionStdEV": 0.92824847422444,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1639",
    "formula": "Rb2LiMoCl6",
    "ggaBandgapEV": 1.5319,
    "predictedBandgapEV": 2.9560499999999945,
    "predictionStdEV": 0.9284781351760537,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1640",
    "formula": "HgRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.721000000000003,
    "predictionStdEV": 0.928737853218011,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1641",
    "formula": "Cs2KCeCl6",
    "ggaBandgapEV": 0.3596,
    "predictedBandgapEV": 2.8420499999999973,
    "predictionStdEV": 0.9289505086386467,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1642",
    "formula": "PrBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.984360000000002,
    "predictionStdEV": 0.9292378545883717,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1643",
    "formula": "TlCdN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9443400000000024,
    "predictionStdEV": 0.9295619206916784,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1644",
    "formula": "Cs2RbAlBr6",
    "ggaBandgapEV": 3.2316,
    "predictedBandgapEV": 3.1315999999999997,
    "predictionStdEV": 0.9296476889660938,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1645",
    "formula": "Li2InCuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.76474,
    "predictionStdEV": 0.9300366296012217,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1646",
    "formula": "BaTlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0688199999999966,
    "predictionStdEV": 0.9304024976320736,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1647",
    "formula": "SrPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9007400000000005,
    "predictionStdEV": 0.9305045149809865,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1648",
    "formula": "Gd2TiCuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9541400000000022,
    "predictionStdEV": 0.9308685516226238,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1649",
    "formula": "CrTcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0396099999999997,
    "predictionStdEV": 0.9310211049702373,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1650",
    "formula": "Na2LiBiI6",
    "ggaBandgapEV": 2.0294,
    "predictedBandgapEV": 2.206300000000001,
    "predictionStdEV": 0.9311022016943147,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1651",
    "formula": "Ba2PrSnO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2891500000000007,
    "predictionStdEV": 0.9312630280967895,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1652",
    "formula": "GdCrO3",
    "ggaBandgapEV": 0.8661,
    "predictedBandgapEV": 2.634480000000004,
    "predictionStdEV": 0.9313106515014181,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1653",
    "formula": "LiCrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.287439999999996,
    "predictionStdEV": 0.9316217292442248,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1654",
    "formula": "YbSmO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9708999999999999,
    "predictionStdEV": 0.9322674455326655,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1655",
    "formula": "TiCoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2499000000000045,
    "predictionStdEV": 0.9324267746048479,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1656",
    "formula": "SrSbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4110200000000006,
    "predictionStdEV": 0.9326306126221654,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1657",
    "formula": "Cs2NaMoBr6",
    "ggaBandgapEV": 1.4759,
    "predictedBandgapEV": 2.7223099999999985,
    "predictionStdEV": 0.9328412586823122,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1658",
    "formula": "Cs2TlBiF6",
    "ggaBandgapEV": 3.3686,
    "predictedBandgapEV": 3.2685999999999997,
    "predictionStdEV": 0.9328488106869184,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1659",
    "formula": "Rb2YCuI6",
    "ggaBandgapEV": 1.8315,
    "predictedBandgapEV": 2.0790199999999963,
    "predictionStdEV": 0.9331010875569694,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1660",
    "formula": "Ba2YbSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.064830000000002,
    "predictionStdEV": 0.93317968318004,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1661",
    "formula": "YbNiH3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4389300000000012,
    "predictionStdEV": 0.9333550798597509,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1662",
    "formula": "RbScCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.597440000000003,
    "predictionStdEV": 0.9337564170596102,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1663",
    "formula": "AgAsO3",
    "ggaBandgapEV": 0.2921,
    "predictedBandgapEV": 2.6396400000000004,
    "predictionStdEV": 0.9340296946029075,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1664",
    "formula": "Rb2YHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.163600000000004,
    "predictionStdEV": 0.9342249407931685,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1665",
    "formula": "Cs2GaHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.534089999999999,
    "predictionStdEV": 0.9343374240069802,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1666",
    "formula": "SmNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5077900000000013,
    "predictionStdEV": 0.9348724864386594,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1667",
    "formula": "Rb2TlBiF6",
    "ggaBandgapEV": 3.3671,
    "predictedBandgapEV": 3.2671,
    "predictionStdEV": 0.9349290668280676,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1668",
    "formula": "LaCdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9826199999999996,
    "predictionStdEV": 0.9353318852685369,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1669",
    "formula": "AgSnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.404040000000002,
    "predictionStdEV": 0.9355593398603846,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1670",
    "formula": "Cs2KAlBr6",
    "ggaBandgapEV": 3.2703,
    "predictedBandgapEV": 3.1703,
    "predictionStdEV": 0.9355605060069607,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1671",
    "formula": "K2AgIrF6",
    "ggaBandgapEV": 1.6239,
    "predictedBandgapEV": 2.999669999999993,
    "predictionStdEV": 0.9356793473728064,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1672",
    "formula": "PrCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9502899999999996,
    "predictionStdEV": 0.9359285046946705,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1673",
    "formula": "GaFeO3",
    "ggaBandgapEV": 0.1963,
    "predictedBandgapEV": 2.675579999999996,
    "predictionStdEV": 0.9360467208425001,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1674",
    "formula": "AlInSe3",
    "ggaBandgapEV": 1.6053,
    "predictedBandgapEV": 2.2106800000000004,
    "predictionStdEV": 0.9361123530858882,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1675",
    "formula": "Rb2NaMoBr6",
    "ggaBandgapEV": 1.4894,
    "predictedBandgapEV": 2.6726499999999964,
    "predictionStdEV": 0.9361770812725537,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1676",
    "formula": "K2LiMoCl6",
    "ggaBandgapEV": 1.4802,
    "predictedBandgapEV": 2.990409999999993,
    "predictionStdEV": 0.9361925453131943,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1677",
    "formula": "La2NiWO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0576600000000012,
    "predictionStdEV": 0.9364890412599597,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1678",
    "formula": "RbAuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8945599999999996,
    "predictionStdEV": 0.9375776268661701,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1679",
    "formula": "BaScO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.488040000000007,
    "predictionStdEV": 0.9376405272811109,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1680",
    "formula": "CdOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4968800000000013,
    "predictionStdEV": 0.9380224760633413,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1681",
    "formula": "AlFeO3",
    "ggaBandgapEV": 0.6706,
    "predictedBandgapEV": 2.9475799999999928,
    "predictionStdEV": 0.9380323787588571,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1682",
    "formula": "K2YTlBr6",
    "ggaBandgapEV": 3.5875,
    "predictedBandgapEV": 3.4875,
    "predictionStdEV": 0.9381358016833167,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1683",
    "formula": "CaCrO3",
    "ggaBandgapEV": 0.3959,
    "predictedBandgapEV": 2.814559999999997,
    "predictionStdEV": 0.9382133586770126,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1684",
    "formula": "Sr2CoMoO6",
    "ggaBandgapEV": 0.434,
    "predictedBandgapEV": 1.110669999999999,
    "predictionStdEV": 0.9384571386589765,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1685",
    "formula": "K2HgBiCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.269510000000001,
    "predictionStdEV": 0.9385894788990555,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1686",
    "formula": "RbPuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8225500000000003,
    "predictionStdEV": 0.9386779785954275,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1687",
    "formula": "K2NdAgI6",
    "ggaBandgapEV": 2.7823,
    "predictedBandgapEV": 2.6823,
    "predictionStdEV": 0.9386802179656281,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1688",
    "formula": "Na2LiTlBr6",
    "ggaBandgapEV": 0.577,
    "predictedBandgapEV": 2.6244100000000037,
    "predictionStdEV": 0.9387053861036478,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1689",
    "formula": "CaTmO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.288490000000001,
    "predictionStdEV": 0.9391410809351273,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1690",
    "formula": "AcPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8859199999999994,
    "predictionStdEV": 0.9391602917500306,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1691",
    "formula": "La2MgFeO6",
    "ggaBandgapEV": 0.6817,
    "predictedBandgapEV": 1.2177999999999993,
    "predictionStdEV": 0.9391983070683215,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1692",
    "formula": "BePbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8346300000000006,
    "predictionStdEV": 0.9399804322963321,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1693",
    "formula": "PmBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.069529999999999,
    "predictionStdEV": 0.9400615028284056,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1694",
    "formula": "Cs2AgIrF6",
    "ggaBandgapEV": 1.4802,
    "predictedBandgapEV": 2.766159999999994,
    "predictionStdEV": 0.9401532079400687,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1695",
    "formula": "Na2GaAgF6",
    "ggaBandgapEV": 1.5788,
    "predictedBandgapEV": 3.490340000000005,
    "predictionStdEV": 0.9405407404254218,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1696",
    "formula": "NdTaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6005800000000017,
    "predictionStdEV": 0.9405877224374115,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1697",
    "formula": "NpTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6530200000000037,
    "predictionStdEV": 0.9406383893930763,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1698",
    "formula": "K2TlHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4813800000000015,
    "predictionStdEV": 0.9411019050028551,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1699",
    "formula": "CuAsO3",
    "ggaBandgapEV": 0.0781,
    "predictedBandgapEV": 2.5996600000000023,
    "predictionStdEV": 0.9413314423729828,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1700",
    "formula": "Gd2MnCoO6",
    "ggaBandgapEV": 1.3117,
    "predictedBandgapEV": 1.3528500000000006,
    "predictionStdEV": 0.9415465084104975,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1701",
    "formula": "Sm2TiCuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.961879999999998,
    "predictionStdEV": 0.9416511379486565,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1702",
    "formula": "Rb2TlHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4547600000000007,
    "predictionStdEV": 0.941721955993381,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1703",
    "formula": "YOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1642600000000012,
    "predictionStdEV": 0.9419317132361552,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1704",
    "formula": "ZnFeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.323050000000002,
    "predictionStdEV": 0.9420788435688385,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1705",
    "formula": "Na2GaAgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1783400000000017,
    "predictionStdEV": 0.9421635444019254,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1706",
    "formula": "ThReO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4324499999999996,
    "predictionStdEV": 0.9424225949647013,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1707",
    "formula": "K2ScAuF6",
    "ggaBandgapEV": 1.6087,
    "predictedBandgapEV": 3.140909999999997,
    "predictionStdEV": 0.9424273562986155,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1708",
    "formula": "K2TlAgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5431199999999987,
    "predictionStdEV": 0.9425768751672187,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1709",
    "formula": "Rb2TaAgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.994370000000005,
    "predictionStdEV": 0.9427271891167667,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1710",
    "formula": "PPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.777250000000003,
    "predictionStdEV": 0.9432255761481457,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1711",
    "formula": "K2TlSbF6",
    "ggaBandgapEV": 2.6775,
    "predictedBandgapEV": 3.4101200000000005,
    "predictionStdEV": 0.9432566912564149,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1712",
    "formula": "TbCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.920450000000001,
    "predictionStdEV": 0.944088633286091,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1713",
    "formula": "YbRhO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7273000000000025,
    "predictionStdEV": 0.9441363831565857,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1714",
    "formula": "YbReO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4044000000000003,
    "predictionStdEV": 0.9445528783503879,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1715",
    "formula": "CsTlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.116959999999998,
    "predictionStdEV": 0.9448275813078295,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1716",
    "formula": "EuTmO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.961400000000002,
    "predictionStdEV": 0.9450627704020508,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1717",
    "formula": "BaRhO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.008850000000004,
    "predictionStdEV": 0.9451848641932444,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1718",
    "formula": "CaSbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4617300000000006,
    "predictionStdEV": 0.945708970614109,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1719",
    "formula": "VCoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3069800000000047,
    "predictionStdEV": 0.9462759003588764,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1720",
    "formula": "K2NaMoBr6",
    "ggaBandgapEV": 1.5008,
    "predictedBandgapEV": 2.695949999999997,
    "predictionStdEV": 0.9463319436117532,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1721",
    "formula": "Cs2LiAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.368369999999997,
    "predictionStdEV": 0.9463782505425612,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1722",
    "formula": "CaNiO3",
    "ggaBandgapEV": 0.0087,
    "predictedBandgapEV": 1.5368000000000017,
    "predictionStdEV": 0.9464814631042717,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1723",
    "formula": "La2MnNiO6",
    "ggaBandgapEV": 1.6424,
    "predictedBandgapEV": 1.6453499999999968,
    "predictionStdEV": 0.9465894714711339,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1724",
    "formula": "Rb2NaCeBr6",
    "ggaBandgapEV": 0.3459,
    "predictedBandgapEV": 2.7251800000000013,
    "predictionStdEV": 0.9468379310103704,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1725",
    "formula": "K2InAgF6",
    "ggaBandgapEV": 1.6679,
    "predictedBandgapEV": 3.418939999999996,
    "predictionStdEV": 0.9468507149492993,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1726",
    "formula": "K2TlCuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5636200000000002,
    "predictionStdEV": 0.9471061163354414,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1727",
    "formula": "Cs2TaAgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0255600000000062,
    "predictionStdEV": 0.9472070979463786,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1728",
    "formula": "InFeO3",
    "ggaBandgapEV": 1.2548,
    "predictedBandgapEV": 2.635919999999995,
    "predictionStdEV": 0.9472337375748403,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1729",
    "formula": "K2NaCeBr6",
    "ggaBandgapEV": 0.3465,
    "predictedBandgapEV": 2.739700000000003,
    "predictionStdEV": 0.9473670935809433,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1730",
    "formula": "ScAgO3",
    "ggaBandgapEV": 0.3819,
    "predictedBandgapEV": 2.613309999999999,
    "predictionStdEV": 0.9474284637374988,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1731",
    "formula": "K2YHgI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9419599999999988,
    "predictionStdEV": 0.9476979784720426,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1732",
    "formula": "LiTmO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.27425,
    "predictionStdEV": 0.9479894975684068,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1733",
    "formula": "Rb2GaHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5420100000000008,
    "predictionStdEV": 0.948070941385717,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1734",
    "formula": "TiHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5593500000000016,
    "predictionStdEV": 0.9484257627774556,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1735",
    "formula": "LuTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.843030000000001,
    "predictionStdEV": 0.948466061121851,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1736",
    "formula": "KHgF3",
    "ggaBandgapEV": 1.1609,
    "predictedBandgapEV": 2.8090199999999963,
    "predictionStdEV": 0.9486136935549703,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1737",
    "formula": "ThCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7700400000000032,
    "predictionStdEV": 0.9486208401674505,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1738",
    "formula": "K2InAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.602619999999999,
    "predictionStdEV": 0.9486540652946154,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1739",
    "formula": "NdCrO3",
    "ggaBandgapEV": 1.8472,
    "predictedBandgapEV": 2.78528,
    "predictionStdEV": 0.9491308242808286,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1740",
    "formula": "Cs2TlHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4752200000000006,
    "predictionStdEV": 0.949159550128429,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1741",
    "formula": "RbTlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1408799999999983,
    "predictionStdEV": 0.9492238543146716,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1742",
    "formula": "CsFeBr3",
    "ggaBandgapEV": 0.3844,
    "predictedBandgapEV": 1.6294000000000042,
    "predictionStdEV": 0.9497904716304529,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1743",
    "formula": "K2TlRhF6",
    "ggaBandgapEV": 2.0029,
    "predictedBandgapEV": 3.3190099999999996,
    "predictionStdEV": 0.9500091946397162,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1744",
    "formula": "GdThO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9081400000000026,
    "predictionStdEV": 0.9501275390177869,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1745",
    "formula": "Rb2TlIrF6",
    "ggaBandgapEV": 2.2788,
    "predictedBandgapEV": 3.1404000000000023,
    "predictionStdEV": 0.9501769519410587,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1746",
    "formula": "Cs2LiCeCl6",
    "ggaBandgapEV": 0.4757,
    "predictedBandgapEV": 2.911889999999998,
    "predictionStdEV": 0.9502079129853619,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1747",
    "formula": "NbCrN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.15297,
    "predictionStdEV": 0.9502718185340454,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1748",
    "formula": "La2ZnFeO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.257740000000003,
    "predictionStdEV": 0.9503011061763511,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1749",
    "formula": "CsAsO3",
    "ggaBandgapEV": 2.1939,
    "predictedBandgapEV": 3.333299999999993,
    "predictionStdEV": 0.9503532553740226,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1750",
    "formula": "CsSbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2659800000000017,
    "predictionStdEV": 0.950534870270417,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1751",
    "formula": "K2PrAgI6",
    "ggaBandgapEV": 2.8222,
    "predictedBandgapEV": 2.7222,
    "predictionStdEV": 0.9508754069803251,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1752",
    "formula": "Cs2NaCeBr6",
    "ggaBandgapEV": 0.3452,
    "predictedBandgapEV": 2.724040000000001,
    "predictionStdEV": 0.9509582421957337,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1753",
    "formula": "Rb2NaMnF6",
    "ggaBandgapEV": 1.7085,
    "predictedBandgapEV": 3.003239999999998,
    "predictionStdEV": 0.9511991917574353,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1754",
    "formula": "Na2LiEuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6818000000000026,
    "predictionStdEV": 0.9512112068305332,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1755",
    "formula": "BaNpO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.029200000000002,
    "predictionStdEV": 0.9512690786523033,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1756",
    "formula": "CoMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2914000000000034,
    "predictionStdEV": 0.9514172270880933,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1757",
    "formula": "K2TlAsF6",
    "ggaBandgapEV": 3.0494,
    "predictedBandgapEV": 3.470760000000002,
    "predictionStdEV": 0.9517318017172698,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1758",
    "formula": "GeNCl3",
    "ggaBandgapEV": 0.4525,
    "predictedBandgapEV": 2.7270800000000013,
    "predictionStdEV": 0.9518320616579384,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1759",
    "formula": "NaFeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8775200000000054,
    "predictionStdEV": 0.9518644071505139,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1760",
    "formula": "K2YCuI6",
    "ggaBandgapEV": 1.851,
    "predictedBandgapEV": 2.148749999999999,
    "predictionStdEV": 0.9520235750757415,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1761",
    "formula": "FePbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9607800000000095,
    "predictionStdEV": 0.9521937258772492,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1762",
    "formula": "Ba2NbFeO6",
    "ggaBandgapEV": 1.7475,
    "predictedBandgapEV": 1.6475,
    "predictionStdEV": 0.952307790317816,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1763",
    "formula": "NdBS3",
    "ggaBandgapEV": 2.4077,
    "predictedBandgapEV": 2.5089999999999972,
    "predictionStdEV": 0.952401700964463,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1764",
    "formula": "YbTmO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.945990000000001,
    "predictionStdEV": 0.9524041001066729,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1765",
    "formula": "Cs2TaCuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.013500000000006,
    "predictionStdEV": 0.9526010969970591,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1766",
    "formula": "CsNpO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.065860000000001,
    "predictionStdEV": 0.9529292525681001,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1767",
    "formula": "CrSiTe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7045600000000047,
    "predictionStdEV": 0.953155184846625,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1768",
    "formula": "ErCoO3",
    "ggaBandgapEV": 1.4581,
    "predictedBandgapEV": 1.3580999999999999,
    "predictionStdEV": 0.9531855787306093,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1769",
    "formula": "RbSnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.7437100000000014,
    "predictionStdEV": 0.9532393644305709,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1770",
    "formula": "Lu2TiCuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8091199999999987,
    "predictionStdEV": 0.9535068041707928,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1771",
    "formula": "Rb2LiYI6",
    "ggaBandgapEV": 3.0067,
    "predictedBandgapEV": 3.0486400000000136,
    "predictionStdEV": 0.9535605646208314,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1772",
    "formula": "Rb2AgIrF6",
    "ggaBandgapEV": 1.5839,
    "predictedBandgapEV": 2.891459999999993,
    "predictionStdEV": 0.9542427722545251,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1773",
    "formula": "InSiTe3",
    "ggaBandgapEV": 0.564,
    "predictedBandgapEV": 1.5256600000000038,
    "predictionStdEV": 0.9543700353636403,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1774",
    "formula": "Rb2YCuF6",
    "ggaBandgapEV": 0.9442,
    "predictedBandgapEV": 2.941869999999997,
    "predictionStdEV": 0.9544250379678861,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1775",
    "formula": "LiGdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2751199999999985,
    "predictionStdEV": 0.9547832139286917,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1776",
    "formula": "Na2AlHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.405250000000002,
    "predictionStdEV": 0.9548804571777574,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1777",
    "formula": "Ca2CuRhO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1251899999999986,
    "predictionStdEV": 0.9548880635446207,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1778",
    "formula": "EuErO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9483800000000022,
    "predictionStdEV": 0.9551010290016451,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1779",
    "formula": "Tm2TiCuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.874160000000001,
    "predictionStdEV": 0.9552310162468562,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1780",
    "formula": "Rb2TaCuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9898700000000047,
    "predictionStdEV": 0.955473198525212,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1781",
    "formula": "Cs2RhAuF6",
    "ggaBandgapEV": 0.7084,
    "predictedBandgapEV": 2.5692199999999965,
    "predictionStdEV": 0.9554955214965687,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1782",
    "formula": "K2YHgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1935800000000016,
    "predictionStdEV": 0.9556234528306637,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1783",
    "formula": "Cs2InHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5670499999999987,
    "predictionStdEV": 0.95565184429268,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1784",
    "formula": "CrPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7922400000000007,
    "predictionStdEV": 0.9558236670013974,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1785",
    "formula": "Rb2CeAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3652900000000003,
    "predictionStdEV": 0.9559257114964527,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1786",
    "formula": "MnNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7123100000000024,
    "predictionStdEV": 0.9559316993907041,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1787",
    "formula": "BaBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5787499999999999,
    "predictionStdEV": 0.9563078413879087,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1788",
    "formula": "TlVCl3",
    "ggaBandgapEV": 0.277,
    "predictedBandgapEV": 2.4257300000000033,
    "predictionStdEV": 0.9564124199841817,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1789",
    "formula": "NaNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9709499999999998,
    "predictionStdEV": 0.956964966704632,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1790",
    "formula": "K2RbAuF6",
    "ggaBandgapEV": 0.7777,
    "predictedBandgapEV": 2.802869999999997,
    "predictionStdEV": 0.9569868928569494,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1791",
    "formula": "PuUC3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.427449999999999,
    "predictionStdEV": 0.9570337755272799,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1792",
    "formula": "CaCoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.175650000000002,
    "predictionStdEV": 0.9571850017107473,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1793",
    "formula": "Cs2TlRhF6",
    "ggaBandgapEV": 1.9553,
    "predictedBandgapEV": 3.0769599999999975,
    "predictionStdEV": 0.9571908160863227,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1794",
    "formula": "RbAcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1445100000000012,
    "predictionStdEV": 0.9572773422054867,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1795",
    "formula": "LiSeO3",
    "ggaBandgapEV": 0.5305,
    "predictedBandgapEV": 2.8541200000000004,
    "predictionStdEV": 0.9576006608184855,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1796",
    "formula": "K2RbTaI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8964800000000004,
    "predictionStdEV": 0.9577144718547388,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1797",
    "formula": "EuCrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.025299999999997,
    "predictionStdEV": 0.958008564679878,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1798",
    "formula": "CuBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6104700000000036,
    "predictionStdEV": 0.9580746469351952,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1799",
    "formula": "Ba2NaReO6",
    "ggaBandgapEV": 1.9174,
    "predictedBandgapEV": 3.378989999999999,
    "predictionStdEV": 0.9582894290870576,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1800",
    "formula": "CaScO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5658400000000046,
    "predictionStdEV": 0.9583489418786867,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1801",
    "formula": "TbBS3",
    "ggaBandgapEV": 2.3421,
    "predictedBandgapEV": 2.516159999999998,
    "predictionStdEV": 0.9586113156018985,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1802",
    "formula": "CsTlF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2518600000000024,
    "predictionStdEV": 0.9587071713510856,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1803",
    "formula": "K2RbAlBr6",
    "ggaBandgapEV": 3.3849,
    "predictedBandgapEV": 3.2849,
    "predictionStdEV": 0.9588109509178527,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1804",
    "formula": "Cs2LiMoI6",
    "ggaBandgapEV": 1.2701,
    "predictedBandgapEV": 2.1699900000000003,
    "predictionStdEV": 0.9593003439486516,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1805",
    "formula": "LuCrO3",
    "ggaBandgapEV": 2.7412,
    "predictedBandgapEV": 3.1640800000000056,
    "predictionStdEV": 0.9594315783837857,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1806",
    "formula": "CaVO3",
    "ggaBandgapEV": 0.2587,
    "predictedBandgapEV": 2.4442599999999968,
    "predictionStdEV": 0.9597476503748263,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1807",
    "formula": "TlCdI3",
    "ggaBandgapEV": 2.4254,
    "predictedBandgapEV": 2.3253999999999997,
    "predictionStdEV": 0.9599511589138269,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1808",
    "formula": "Ba2InSbO6",
    "ggaBandgapEV": 0.524,
    "predictedBandgapEV": 3.1174399999999927,
    "predictionStdEV": 0.9600613763713224,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1809",
    "formula": "FeAsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.376930000000001,
    "predictionStdEV": 0.960128233675066,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1810",
    "formula": "BaPS3",
    "ggaBandgapEV": 3.1164,
    "predictedBandgapEV": 3.0164,
    "predictionStdEV": 0.9604327099802453,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1811",
    "formula": "LiTeO3",
    "ggaBandgapEV": 2.1355,
    "predictedBandgapEV": 3.272980000000001,
    "predictionStdEV": 0.9609004733061605,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1812",
    "formula": "TmCoO3",
    "ggaBandgapEV": 1.1884,
    "predictedBandgapEV": 1.209750000000005,
    "predictionStdEV": 0.9610998322234774,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1813",
    "formula": "AgNO3",
    "ggaBandgapEV": 2.0191,
    "predictedBandgapEV": 2.8820600000000005,
    "predictionStdEV": 0.961135555684005,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1814",
    "formula": "ScCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.185040000000002,
    "predictionStdEV": 0.961153368823101,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1815",
    "formula": "Sr2UCoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1266899999999986,
    "predictionStdEV": 0.9612239041451272,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1816",
    "formula": "MgUO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9211000000000036,
    "predictionStdEV": 0.9613880538055378,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1817",
    "formula": "FeSiO3",
    "ggaBandgapEV": 0.0336,
    "predictedBandgapEV": 2.6241999999999983,
    "predictionStdEV": 0.9615254338809743,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1818",
    "formula": "SrTbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0953100000000013,
    "predictionStdEV": 0.9615709302490375,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1819",
    "formula": "BeSbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3903999999999996,
    "predictionStdEV": 0.9621613897886351,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1820",
    "formula": "Sr2CaMoO6",
    "ggaBandgapEV": 2.2556,
    "predictedBandgapEV": 3.352680000000003,
    "predictionStdEV": 0.9621640284275854,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1821",
    "formula": "MgTiO3",
    "ggaBandgapEV": 1.6075,
    "predictedBandgapEV": 3.0010799999999964,
    "predictionStdEV": 0.962339874264806,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1822",
    "formula": "TmCrO3",
    "ggaBandgapEV": 2.0034,
    "predictedBandgapEV": 3.154460000000005,
    "predictionStdEV": 0.9624927575831432,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1823",
    "formula": "SbTeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.13444,
    "predictionStdEV": 0.9625166421418383,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1824",
    "formula": "RbMnF3",
    "ggaBandgapEV": 3.4282,
    "predictedBandgapEV": 3.3282,
    "predictionStdEV": 0.9625528330434647,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1825",
    "formula": "Cs2KCeI6",
    "ggaBandgapEV": 0.4412,
    "predictedBandgapEV": 2.22395,
    "predictionStdEV": 0.9627779845322594,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1826",
    "formula": "Sm2CoNiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2769100000000029,
    "predictionStdEV": 0.9628635946487962,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1827",
    "formula": "Rb2NaAuF6",
    "ggaBandgapEV": 0.6445,
    "predictedBandgapEV": 2.8586799999999952,
    "predictionStdEV": 0.9634781043697885,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1828",
    "formula": "Nd2MnCrO6",
    "ggaBandgapEV": 0.8221,
    "predictedBandgapEV": 2.222039999999995,
    "predictionStdEV": 0.9638787467311449,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1829",
    "formula": "HfThO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6942300000000006,
    "predictionStdEV": 0.9639002837949584,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1830",
    "formula": "CaInI3",
    "ggaBandgapEV": 2.8019,
    "predictedBandgapEV": 2.7018999999999997,
    "predictionStdEV": 0.9642027512924842,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1831",
    "formula": "KFeI3",
    "ggaBandgapEV": 0.5441,
    "predictedBandgapEV": 1.6117900000000032,
    "predictionStdEV": 0.964275088291718,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1832",
    "formula": "Cs2YAgI6",
    "ggaBandgapEV": 2.5216,
    "predictedBandgapEV": 2.4215999999999998,
    "predictionStdEV": 0.9643736711462016,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1833",
    "formula": "Cs2NaUBr6",
    "ggaBandgapEV": 0.5204,
    "predictedBandgapEV": 2.686290000000003,
    "predictionStdEV": 0.9645921863150241,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1834",
    "formula": "BaUO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.016780000000004,
    "predictionStdEV": 0.9647740313669314,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1835",
    "formula": "Rb2LiAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.395849999999998,
    "predictionStdEV": 0.9652569748517734,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1836",
    "formula": "MoHO3",
    "ggaBandgapEV": 0.7651,
    "predictedBandgapEV": 2.502909999999997,
    "predictionStdEV": 0.9654653706373929,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1837",
    "formula": "Cs2NaAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4363799999999975,
    "predictionStdEV": 0.9655771308393758,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1838",
    "formula": "Ba2MnNbO6",
    "ggaBandgapEV": 0.8069,
    "predictedBandgapEV": 2.4926800000000005,
    "predictionStdEV": 0.9655797831355007,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1839",
    "formula": "SmBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.113809999999999,
    "predictionStdEV": 0.965961145129555,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1840",
    "formula": "KTaTe3",
    "ggaBandgapEV": 0.4181,
    "predictedBandgapEV": 1.4554300000000013,
    "predictionStdEV": 0.966056346752094,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1841",
    "formula": "PrBS3",
    "ggaBandgapEV": 2.4637,
    "predictedBandgapEV": 2.536919999999997,
    "predictionStdEV": 0.9661785102143388,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1842",
    "formula": "Rb2LiVCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.483919999999998,
    "predictionStdEV": 0.9662566085673107,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1843",
    "formula": "K2LiYI6",
    "ggaBandgapEV": 3.0237,
    "predictedBandgapEV": 3.0412600000000123,
    "predictionStdEV": 0.9662580464865477,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1844",
    "formula": "Rb2InHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5545299999999993,
    "predictionStdEV": 0.9664290088257913,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1845",
    "formula": "K2RbCeI6",
    "ggaBandgapEV": 0.444,
    "predictedBandgapEV": 2.1921299999999992,
    "predictionStdEV": 0.9664504711054774,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1846",
    "formula": "SrCrO3",
    "ggaBandgapEV": 0.682,
    "predictedBandgapEV": 2.675189999999997,
    "predictionStdEV": 0.9666645301757979,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1847",
    "formula": "Eu2CoRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1678300000000024,
    "predictionStdEV": 0.9667054572619309,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1848",
    "formula": "Rb2LiMoI6",
    "ggaBandgapEV": 1.2741,
    "predictedBandgapEV": 2.0874199999999985,
    "predictionStdEV": 0.9667347845195193,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1849",
    "formula": "Li2CrTeO6",
    "ggaBandgapEV": 0.8229,
    "predictedBandgapEV": 3.1390699999999967,
    "predictionStdEV": 0.9668748549321147,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1850",
    "formula": "Rb2YInI6",
    "ggaBandgapEV": 2.6766,
    "predictedBandgapEV": 2.5766,
    "predictionStdEV": 0.9670239575108761,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1851",
    "formula": "Rb2RhAuF6",
    "ggaBandgapEV": 0.7776,
    "predictedBandgapEV": 2.678619999999996,
    "predictionStdEV": 0.9672172432292564,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1852",
    "formula": "Cs2KMnF6",
    "ggaBandgapEV": 1.7793,
    "predictedBandgapEV": 2.9428299999999967,
    "predictionStdEV": 0.9675084708156308,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1853",
    "formula": "K2NaMnF6",
    "ggaBandgapEV": 1.5447,
    "predictedBandgapEV": 3.034599999999997,
    "predictionStdEV": 0.967508780321914,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1854",
    "formula": "Cs2KTaI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9199700000000008,
    "predictionStdEV": 0.96787346750492,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1855",
    "formula": "NaMnCl3",
    "ggaBandgapEV": 0.3063,
    "predictedBandgapEV": 2.6721099999999987,
    "predictionStdEV": 0.9684746759208509,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1856",
    "formula": "CaNCl3",
    "ggaBandgapEV": 1.4827,
    "predictedBandgapEV": 2.8790599999999973,
    "predictionStdEV": 0.9684898122334578,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1857",
    "formula": "Cs2NaCeCl6",
    "ggaBandgapEV": 0.4223,
    "predictedBandgapEV": 3.016410000000001,
    "predictionStdEV": 0.9688048110429689,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1858",
    "formula": "K2TaAgBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0222500000000045,
    "predictionStdEV": 0.9691169111619096,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1859",
    "formula": "SmTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.889000000000003,
    "predictionStdEV": 0.9692501225174035,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1860",
    "formula": "PaTaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4934000000000014,
    "predictionStdEV": 0.9701362481631122,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1861",
    "formula": "Eu2CoPtO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0328200000000018,
    "predictionStdEV": 0.9703861332479998,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1862",
    "formula": "K2GaHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5567700000000015,
    "predictionStdEV": 0.9704022449994627,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1863",
    "formula": "K2SbAuF6",
    "ggaBandgapEV": 0.9331,
    "predictedBandgapEV": 2.7962699999999936,
    "predictionStdEV": 0.9708119473409871,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1864",
    "formula": "LaTcN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6904500000000027,
    "predictionStdEV": 0.9710481695055109,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1865",
    "formula": "HfNpO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.629430000000001,
    "predictionStdEV": 0.9715711631681956,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1866",
    "formula": "La2NbNiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4752200000000013,
    "predictionStdEV": 0.9718007777317317,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1867",
    "formula": "K2InBiF6",
    "ggaBandgapEV": 2.4141,
    "predictedBandgapEV": 3.3930400000000027,
    "predictionStdEV": 0.9719343385229269,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1868",
    "formula": "Eu2MnRhO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8732499999999994,
    "predictionStdEV": 0.9723928668496082,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1869",
    "formula": "PuTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6389600000000026,
    "predictionStdEV": 0.9727981899654212,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1870",
    "formula": "KMnF3",
    "ggaBandgapEV": 3.1383,
    "predictedBandgapEV": 3.0383,
    "predictionStdEV": 0.9728597711900723,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1871",
    "formula": "Cs2KYI6",
    "ggaBandgapEV": 3.2834,
    "predictedBandgapEV": 3.1834,
    "predictionStdEV": 0.9729641051960722,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1872",
    "formula": "CoTeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2290000000000036,
    "predictionStdEV": 0.9730742006650878,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1873",
    "formula": "Cs2NaCaCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6406099999999992,
    "predictionStdEV": 0.9731792629829316,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1874",
    "formula": "MgAgF3",
    "ggaBandgapEV": 2.1161,
    "predictedBandgapEV": 3.1732000000000014,
    "predictionStdEV": 0.9734448931500953,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1875",
    "formula": "K2LiMoI6",
    "ggaBandgapEV": 1.2812,
    "predictedBandgapEV": 2.097439999999999,
    "predictionStdEV": 0.9735124274502093,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1876",
    "formula": "LiCeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.27648,
    "predictionStdEV": 0.9741808916212632,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1877",
    "formula": "CoWN3",
    "ggaBandgapEV": 0.1811,
    "predictedBandgapEV": 1.075380000000002,
    "predictionStdEV": 0.9742649309094509,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1878",
    "formula": "Cs2YInI6",
    "ggaBandgapEV": 2.7342,
    "predictedBandgapEV": 2.6342,
    "predictionStdEV": 0.974396601800315,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1879",
    "formula": "Ba2UCoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2009099999999995,
    "predictionStdEV": 0.9747272551334537,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1880",
    "formula": "CsFeCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7168000000000012,
    "predictionStdEV": 0.9747589753369801,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1881",
    "formula": "Cs2GaAuF6",
    "ggaBandgapEV": 0.9634,
    "predictedBandgapEV": 2.9070199999999966,
    "predictionStdEV": 0.9749576501571748,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1882",
    "formula": "PrTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.860400000000005,
    "predictionStdEV": 0.9750859654409976,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1883",
    "formula": "Ba2CaBiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8505600000000006,
    "predictionStdEV": 0.9751682861947464,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1884",
    "formula": "Cs2NaUCl6",
    "ggaBandgapEV": 0.5018,
    "predictedBandgapEV": 2.8581999999999987,
    "predictionStdEV": 0.9751719130491807,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1885",
    "formula": "RbInO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.748090000000003,
    "predictionStdEV": 0.9757843009087597,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1886",
    "formula": "NdTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9661600000000066,
    "predictionStdEV": 0.9758157891733445,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1887",
    "formula": "Ba2YbBiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7150799999999995,
    "predictionStdEV": 0.9760547083027679,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1888",
    "formula": "KFeO3",
    "ggaBandgapEV": 0.5336,
    "predictedBandgapEV": 1.836960000000003,
    "predictionStdEV": 0.9761122673135505,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1889",
    "formula": "TmBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.19457,
    "predictionStdEV": 0.9762586056470917,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1890",
    "formula": "CdCoO3",
    "ggaBandgapEV": 0.1313,
    "predictedBandgapEV": 1.287790000000004,
    "predictionStdEV": 0.9763445426180226,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1891",
    "formula": "K2NaInI6",
    "ggaBandgapEV": 0.6797,
    "predictedBandgapEV": 2.367500000000001,
    "predictionStdEV": 0.976375312059864,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1892",
    "formula": "CrMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9171899999999995,
    "predictionStdEV": 0.9764377368270842,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1893",
    "formula": "NClO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.348120000000001,
    "predictionStdEV": 0.9764863878211523,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1894",
    "formula": "K2TaCuBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0084900000000045,
    "predictionStdEV": 0.977012881133099,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1895",
    "formula": "K2AsAuF6",
    "ggaBandgapEV": 0.997,
    "predictedBandgapEV": 2.8474799999999947,
    "predictionStdEV": 0.9770860502535059,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1896",
    "formula": "UBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8687400000000038,
    "predictionStdEV": 0.9771915945197216,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1897",
    "formula": "Cs2NaSbI6",
    "ggaBandgapEV": 2.0974,
    "predictedBandgapEV": 2.427160000000002,
    "predictionStdEV": 0.9773488294360411,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1898",
    "formula": "Rb2NaInI6",
    "ggaBandgapEV": 0.6782,
    "predictedBandgapEV": 2.3546799999999997,
    "predictionStdEV": 0.9773654882386614,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1899",
    "formula": "CdNF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2950200000000005,
    "predictionStdEV": 0.9779143109700367,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1900",
    "formula": "Cs2NaInI6",
    "ggaBandgapEV": 0.6987,
    "predictedBandgapEV": 2.446260000000002,
    "predictionStdEV": 0.9779534817157712,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1901",
    "formula": "Mg2CrSbO6",
    "ggaBandgapEV": 2.1541,
    "predictedBandgapEV": 3.2963000000000044,
    "predictionStdEV": 0.9780616084889534,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1902",
    "formula": "PuSbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4165500000000018,
    "predictionStdEV": 0.978088261610371,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1903",
    "formula": "YbCrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0083900000000026,
    "predictionStdEV": 0.9783259977635271,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1904",
    "formula": "EuLuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.833040000000002,
    "predictionStdEV": 0.9788766819165736,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1905",
    "formula": "MnCoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3240700000000043,
    "predictionStdEV": 0.97898635593148,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1906",
    "formula": "RbNpO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0705800000000014,
    "predictionStdEV": 0.9789922183551829,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1907",
    "formula": "Sr2NiIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0436800000000004,
    "predictionStdEV": 0.9790325620733975,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1908",
    "formula": "CrCoBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4087700000000047,
    "predictionStdEV": 0.9790428167858651,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1909",
    "formula": "CrGeTe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5110200000000047,
    "predictionStdEV": 0.9791502232037722,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1910",
    "formula": "Cs2KTaBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1379100000000038,
    "predictionStdEV": 0.979337164565912,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1911",
    "formula": "KLuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.224390000000001,
    "predictionStdEV": 0.9796893782725221,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1912",
    "formula": "ScRhO3",
    "ggaBandgapEV": 1.0436,
    "predictedBandgapEV": 2.5872199999999994,
    "predictionStdEV": 0.979694478702419,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1913",
    "formula": "YbWO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4433100000000003,
    "predictionStdEV": 0.9798049774827648,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1914",
    "formula": "K2NaSbI6",
    "ggaBandgapEV": 2.1042,
    "predictedBandgapEV": 2.3283600000000013,
    "predictionStdEV": 0.9798565764437159,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1915",
    "formula": "RbMgF3",
    "ggaBandgapEV": 2.2028,
    "predictedBandgapEV": 3.3887000000000036,
    "predictionStdEV": 0.9799476057422675,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1916",
    "formula": "RbFeF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8268600000000037,
    "predictionStdEV": 0.9799533358277833,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1917",
    "formula": "Pr2MnNiO6",
    "ggaBandgapEV": 1.7909,
    "predictedBandgapEV": 1.8459999999999948,
    "predictionStdEV": 0.9801895224904201,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1918",
    "formula": "YTcN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8784300000000016,
    "predictionStdEV": 0.9803322320009689,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1919",
    "formula": "AlSBr3",
    "ggaBandgapEV": 0.1479,
    "predictedBandgapEV": 2.335720000000001,
    "predictionStdEV": 0.9810113565091877,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1920",
    "formula": "InBiSe3",
    "ggaBandgapEV": 1.0506,
    "predictedBandgapEV": 1.3661500000000035,
    "predictionStdEV": 0.9811297709783345,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1921",
    "formula": "VPtO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6643100000000013,
    "predictionStdEV": 0.9811450830025095,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1922",
    "formula": "VWN3",
    "ggaBandgapEV": 0.0564,
    "predictedBandgapEV": 1.849039999999999,
    "predictionStdEV": 0.9811575196674593,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1923",
    "formula": "Rb2NaTlI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1698000000000013,
    "predictionStdEV": 0.9815786570621828,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1924",
    "formula": "Cs2PbClF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.214230000000002,
    "predictionStdEV": 0.9819662708565903,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1925",
    "formula": "KTcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.01996,
    "predictionStdEV": 0.9824126416124753,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1926",
    "formula": "InGeCl3",
    "ggaBandgapEV": 2.7338,
    "predictedBandgapEV": 2.9784600000000037,
    "predictionStdEV": 0.9826764617105669,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1927",
    "formula": "NaPF3",
    "ggaBandgapEV": 1.0381,
    "predictedBandgapEV": 2.984519999999998,
    "predictionStdEV": 0.982718051935549,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1928",
    "formula": "K2NaTlI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1918600000000015,
    "predictionStdEV": 0.9831147646129595,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1929",
    "formula": "Na2AgAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4545299999999997,
    "predictionStdEV": 0.98315234277298,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1930",
    "formula": "Yb2TiCuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.839950000000002,
    "predictionStdEV": 0.983185967912479,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1931",
    "formula": "VMoN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9517900000000004,
    "predictionStdEV": 0.9833827565602322,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1932",
    "formula": "K2RbTaBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.150750000000003,
    "predictionStdEV": 0.983744930101293,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1933",
    "formula": "ZnGaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.7710800000000075,
    "predictionStdEV": 0.9844899357535338,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1934",
    "formula": "K2RbCeCl6",
    "ggaBandgapEV": 0.3618,
    "predictedBandgapEV": 2.8654599999999997,
    "predictionStdEV": 0.9846615603343097,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1935",
    "formula": "CsSiTe3",
    "ggaBandgapEV": 1.2613,
    "predictedBandgapEV": 1.7577000000000043,
    "predictionStdEV": 0.9847231133674074,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1936",
    "formula": "Cs2NaScI6",
    "ggaBandgapEV": 2.2218,
    "predictedBandgapEV": 2.917440000000013,
    "predictionStdEV": 0.9847532921498662,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1937",
    "formula": "Cs2RbPbF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2146000000000003,
    "predictionStdEV": 0.984906310265093,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1938",
    "formula": "Na2ScCuF6",
    "ggaBandgapEV": 0.1117,
    "predictedBandgapEV": 2.984700000000003,
    "predictionStdEV": 0.9851938438703308,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1939",
    "formula": "LiNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9671100000000001,
    "predictionStdEV": 0.9852044954728935,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1940",
    "formula": "Ca2MnNbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9768599999999987,
    "predictionStdEV": 0.9853133209289323,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1941",
    "formula": "Cs2KPbF6",
    "ggaBandgapEV": 0.0031,
    "predictedBandgapEV": 2.237060000000001,
    "predictionStdEV": 0.9854030426175883,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1942",
    "formula": "SrRhO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8462000000000003,
    "predictionStdEV": 0.9855822441582428,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1943",
    "formula": "BaNbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1735000000000033,
    "predictionStdEV": 0.9856546809101059,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1944",
    "formula": "Ba2NbRhO6",
    "ggaBandgapEV": 0.9328,
    "predictedBandgapEV": 2.748069999999999,
    "predictionStdEV": 0.9858179979590546,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1945",
    "formula": "Rb2YAgI6",
    "ggaBandgapEV": 2.5563,
    "predictedBandgapEV": 2.4562999999999997,
    "predictionStdEV": 0.9859673917528935,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1946",
    "formula": "UTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7514800000000044,
    "predictionStdEV": 0.9863574451485626,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1947",
    "formula": "Cs2KScI6",
    "ggaBandgapEV": 2.3657,
    "predictedBandgapEV": 2.429720000000002,
    "predictionStdEV": 0.9864728691656982,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1948",
    "formula": "Cs2KAlI6",
    "ggaBandgapEV": 1.7456,
    "predictedBandgapEV": 2.2926200000000008,
    "predictionStdEV": 0.9864837229270446,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1949",
    "formula": "LaReN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.43678,
    "predictionStdEV": 0.986935576215589,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1950",
    "formula": "KInO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.7790700000000035,
    "predictionStdEV": 0.9870441657291757,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1951",
    "formula": "Ba2CuTeO6",
    "ggaBandgapEV": 0.0117,
    "predictedBandgapEV": 2.2258300000000033,
    "predictionStdEV": 0.9870974425556983,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1952",
    "formula": "Sr2ZrCoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2244999999999997,
    "predictionStdEV": 0.9871523945166721,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1953",
    "formula": "RbYO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.250020000000001,
    "predictionStdEV": 0.9871799226078287,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1954",
    "formula": "Cs2AlAuF6",
    "ggaBandgapEV": 1.5296,
    "predictedBandgapEV": 3.188539999999996,
    "predictionStdEV": 0.9876762467529531,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1955",
    "formula": "K2YAuF6",
    "ggaBandgapEV": 1.5401,
    "predictedBandgapEV": 3.0831099999999965,
    "predictionStdEV": 0.9877050055051865,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1956",
    "formula": "Eu2ZnPtO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.73242,
    "predictionStdEV": 0.9877984832950498,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1957",
    "formula": "Rb2NaSbI6",
    "ggaBandgapEV": 2.101,
    "predictedBandgapEV": 2.3046800000000007,
    "predictionStdEV": 0.9878437617356293,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1958",
    "formula": "Sm2CoRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1420300000000017,
    "predictionStdEV": 0.9879560360157715,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1959",
    "formula": "Cs2AlHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.55422,
    "predictionStdEV": 0.9880959425076087,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1960",
    "formula": "K2RbAlI6",
    "ggaBandgapEV": 1.9213,
    "predictedBandgapEV": 2.211279999999999,
    "predictionStdEV": 0.9887644621445498,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1961",
    "formula": "Dy2MnNiO6",
    "ggaBandgapEV": 0.5673,
    "predictedBandgapEV": 1.751829999999996,
    "predictionStdEV": 0.9888407865273364,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1962",
    "formula": "Ba2TbSnO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2945699999999993,
    "predictionStdEV": 0.9888589712896354,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1963",
    "formula": "K2NaAuF6",
    "ggaBandgapEV": 0.6316,
    "predictedBandgapEV": 2.8797399999999955,
    "predictionStdEV": 0.9890682142299385,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1964",
    "formula": "La2MgCoO6",
    "ggaBandgapEV": 0.5022,
    "predictedBandgapEV": 1.2805799999999985,
    "predictionStdEV": 0.9894703955146928,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1965",
    "formula": "NpBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9001200000000034,
    "predictionStdEV": 0.9896288120300463,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1966",
    "formula": "Ba2ZnTeO6",
    "ggaBandgapEV": 0.4444,
    "predictedBandgapEV": 2.811629999999996,
    "predictionStdEV": 0.9896539259256237,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1967",
    "formula": "CeTaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5465400000000016,
    "predictionStdEV": 0.9898171691782265,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1968",
    "formula": "La2CrFeO6",
    "ggaBandgapEV": 2.2546,
    "predictedBandgapEV": 2.1546,
    "predictionStdEV": 0.9900486737529637,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1969",
    "formula": "MgRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8814799999999994,
    "predictionStdEV": 0.9900714669153942,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1970",
    "formula": "Cs2RbScI6",
    "ggaBandgapEV": 2.4133,
    "predictedBandgapEV": 2.4205400000000012,
    "predictionStdEV": 0.9905173942945172,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1971",
    "formula": "Rb2NaAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.469399999999999,
    "predictionStdEV": 0.9906513715732705,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1972",
    "formula": "TiBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2036200000000017,
    "predictionStdEV": 0.9906946530591564,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1973",
    "formula": "BaPaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.113190000000004,
    "predictionStdEV": 0.9908153076633412,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1974",
    "formula": "HoSbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6132600000000001,
    "predictionStdEV": 0.9908402355576802,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1975",
    "formula": "KPuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8994100000000005,
    "predictionStdEV": 0.9908446911095594,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1976",
    "formula": "ErNiO3",
    "ggaBandgapEV": 0.3644,
    "predictedBandgapEV": 1.694040000000003,
    "predictionStdEV": 0.9908912041187979,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1977",
    "formula": "ScPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0248200000000027,
    "predictionStdEV": 0.9909734949028662,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1978",
    "formula": "CdGeO3",
    "ggaBandgapEV": 1.3882,
    "predictedBandgapEV": 3.3009200000000103,
    "predictionStdEV": 0.9910509339080409,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1979",
    "formula": "ErBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.133329999999999,
    "predictionStdEV": 0.9911528444695117,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1980",
    "formula": "AgPO3",
    "ggaBandgapEV": 2.0266,
    "predictedBandgapEV": 2.8945000000000025,
    "predictionStdEV": 0.9913586384351522,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1981",
    "formula": "HoBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.122829999999999,
    "predictionStdEV": 0.9918297440085168,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1982",
    "formula": "LaTaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5117700000000018,
    "predictionStdEV": 0.9920368022911265,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1983",
    "formula": "CaRhO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9301299999999992,
    "predictionStdEV": 0.9921480399113829,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1984",
    "formula": "YbInBr3",
    "ggaBandgapEV": 2.9827,
    "predictedBandgapEV": 2.8827,
    "predictionStdEV": 0.9922534023121301,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1985",
    "formula": "Tb2CoPtO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.013950000000001,
    "predictionStdEV": 0.9923595354003503,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1986",
    "formula": "NaCoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4319500000000007,
    "predictionStdEV": 0.9928540413877558,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1987",
    "formula": "K2InHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.58589,
    "predictionStdEV": 0.9931740320306421,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1988",
    "formula": "TaFeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.109270000000011,
    "predictionStdEV": 0.9932432315903279,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1989",
    "formula": "TlAgF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2804300000000026,
    "predictionStdEV": 0.9940328289850383,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1990",
    "formula": "NbBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.23822,
    "predictionStdEV": 0.9940881910575127,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1991",
    "formula": "MgMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9174100000000005,
    "predictionStdEV": 0.9943237611060086,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1992",
    "formula": "Cs2RbAlI6",
    "ggaBandgapEV": 1.8888,
    "predictedBandgapEV": 2.312520000000001,
    "predictionStdEV": 0.9943796305234746,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1993",
    "formula": "TlAgBr3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.023970000000007,
    "predictionStdEV": 0.9944660321499181,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1994",
    "formula": "Zn2AgSbO6",
    "ggaBandgapEV": 0.0441,
    "predictedBandgapEV": 2.4068400000000008,
    "predictionStdEV": 0.9946008316907833,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1995",
    "formula": "CsMnF3",
    "ggaBandgapEV": 3.4556,
    "predictedBandgapEV": 3.3556,
    "predictionStdEV": 0.994857113559532,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1996",
    "formula": "Zn2CuSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4409800000000015,
    "predictionStdEV": 0.9953094190250591,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1997",
    "formula": "YbPtO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6698100000000007,
    "predictionStdEV": 0.9953228189386606,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-1998",
    "formula": "CsSO3",
    "ggaBandgapEV": 0.4741,
    "predictedBandgapEV": 2.801099999999996,
    "predictionStdEV": 0.9954133764421671,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-1999",
    "formula": "YbTaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5942399999999999,
    "predictionStdEV": 0.9957878902657927,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2000",
    "formula": "Ba2LuSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.900210000000004,
    "predictionStdEV": 0.9959830349458757,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2001",
    "formula": "AgBrO3",
    "ggaBandgapEV": 2.5145,
    "predictedBandgapEV": 2.941120000000001,
    "predictionStdEV": 0.9960576015472205,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2002",
    "formula": "Ba2EuNbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.190840000000003,
    "predictionStdEV": 0.9961160044894363,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2003",
    "formula": "LaVN3",
    "ggaBandgapEV": 0.7304,
    "predictedBandgapEV": 2.0057200000000024,
    "predictionStdEV": 0.9961719136775533,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2004",
    "formula": "Ba2PrPtO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8774900000000014,
    "predictionStdEV": 0.9967207482038277,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2005",
    "formula": "Cs2NaTlI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2321000000000013,
    "predictionStdEV": 0.9969409661559724,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2006",
    "formula": "Cs2TlAgF6",
    "ggaBandgapEV": 1.013,
    "predictedBandgapEV": 2.8512799999999974,
    "predictionStdEV": 0.9969514840753292,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2007",
    "formula": "DySbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6687400000000006,
    "predictionStdEV": 0.9969530642913937,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2008",
    "formula": "LiBrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2337099999999994,
    "predictionStdEV": 0.9970595197379131,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2009",
    "formula": "RbRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0158200000000015,
    "predictionStdEV": 0.9971447375381371,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2010",
    "formula": "CsThO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.117029999999999,
    "predictionStdEV": 0.9971614859690474,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2011",
    "formula": "Ba2LiReO6",
    "ggaBandgapEV": 1.8665,
    "predictedBandgapEV": 3.4026499999999973,
    "predictionStdEV": 0.99730117191348,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2012",
    "formula": "KFeBr3",
    "ggaBandgapEV": 0.0821,
    "predictedBandgapEV": 1.6582100000000048,
    "predictionStdEV": 0.9973159709440143,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2013",
    "formula": "NaMnF3",
    "ggaBandgapEV": 2.7477,
    "predictedBandgapEV": 3.0110800000000015,
    "predictionStdEV": 0.9973605334080554,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2014",
    "formula": "Na2InCuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.8403200000000015,
    "predictionStdEV": 0.9974171632772327,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2015",
    "formula": "Cs2ScHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3649600000000013,
    "predictionStdEV": 0.9977314760996563,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2016",
    "formula": "Ba2EuRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.007290000000003,
    "predictionStdEV": 0.9978244865205479,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2017",
    "formula": "Ba2NbVO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.009230000000002,
    "predictionStdEV": 0.9978510194913849,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2018",
    "formula": "La2TiCuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7704000000000015,
    "predictionStdEV": 0.9978802733795268,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2019",
    "formula": "KAuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9647299999999999,
    "predictionStdEV": 0.9984789818018196,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2020",
    "formula": "K2LiCeCl6",
    "ggaBandgapEV": 0.4763,
    "predictedBandgapEV": 2.92686,
    "predictionStdEV": 0.9985405051373731,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2021",
    "formula": "TaCuO3",
    "ggaBandgapEV": 1.5961,
    "predictedBandgapEV": 2.4636299999999993,
    "predictionStdEV": 0.9987441479678377,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2022",
    "formula": "Cs2LiCeI6",
    "ggaBandgapEV": 0.4237,
    "predictedBandgapEV": 2.3729100000000027,
    "predictionStdEV": 0.9988693517672872,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2023",
    "formula": "NaSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.699520000000002,
    "predictionStdEV": 0.9990456293883704,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2024",
    "formula": "Cs2LiPrI6",
    "ggaBandgapEV": 2.9665,
    "predictedBandgapEV": 2.873760000000009,
    "predictionStdEV": 0.999675278477967,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2025",
    "formula": "CoNF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2549900000000038,
    "predictionStdEV": 0.9996770227928621,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2026",
    "formula": "HIO3",
    "ggaBandgapEV": 3.0727,
    "predictedBandgapEV": 3.295500000000002,
    "predictionStdEV": 0.9997399411847068,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2027",
    "formula": "Cs2YTlI6",
    "ggaBandgapEV": 3.2366,
    "predictedBandgapEV": 3.1366,
    "predictionStdEV": 1.0000960601862212,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2028",
    "formula": "LaWN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.47568,
    "predictionStdEV": 1.0001415087876309,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2029",
    "formula": "Rb2LiCeCl6",
    "ggaBandgapEV": 0.4763,
    "predictedBandgapEV": 2.894589999999998,
    "predictionStdEV": 1.0003380338165697,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2030",
    "formula": "LiSbO3",
    "ggaBandgapEV": 1.1981,
    "predictedBandgapEV": 3.38256,
    "predictionStdEV": 1.000345063665534,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2031",
    "formula": "Cs2InAuF6",
    "ggaBandgapEV": 0.9082,
    "predictedBandgapEV": 2.8648999999999973,
    "predictionStdEV": 1.0005550909370253,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2032",
    "formula": "Na2CuAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.469690000000001,
    "predictionStdEV": 1.0006182858113284,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2033",
    "formula": "Na2CeCuCl6",
    "ggaBandgapEV": 0.0203,
    "predictedBandgapEV": 2.599890000000004,
    "predictionStdEV": 1.0008992146564997,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2034",
    "formula": "KCoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4496100000000003,
    "predictionStdEV": 1.000902991253399,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2035",
    "formula": "Gd2MgIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4709500000000006,
    "predictionStdEV": 1.0012482446925948,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2036",
    "formula": "Ba2NaUO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1132300000000024,
    "predictionStdEV": 1.0013565883839763,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2037",
    "formula": "GeSbTe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.1188600000000017,
    "predictionStdEV": 1.0015618305426797,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2038",
    "formula": "KTlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.243849999999999,
    "predictionStdEV": 1.0015795662352545,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2039",
    "formula": "TaSnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5775400000000008,
    "predictionStdEV": 1.0020586052721658,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2040",
    "formula": "Cs2LiNdI6",
    "ggaBandgapEV": 2.9795,
    "predictedBandgapEV": 2.8794999999999997,
    "predictionStdEV": 1.002434755981655,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2041",
    "formula": "MgPS3",
    "ggaBandgapEV": 3.0294,
    "predictedBandgapEV": 2.9294,
    "predictionStdEV": 1.002605160768686,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2042",
    "formula": "CeCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.87401,
    "predictionStdEV": 1.002653963189697,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2043",
    "formula": "SrNbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0516300000000003,
    "predictionStdEV": 1.0026822493192964,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2044",
    "formula": "BiSbS3",
    "ggaBandgapEV": 1.3483,
    "predictedBandgapEV": 1.7449000000000028,
    "predictionStdEV": 1.0027203947262657,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2045",
    "formula": "TlCuF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.379350000000003,
    "predictionStdEV": 1.0027748638154026,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2046",
    "formula": "TmRhO3",
    "ggaBandgapEV": 0.9562,
    "predictedBandgapEV": 2.444879999999999,
    "predictionStdEV": 1.0028114905604137,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2047",
    "formula": "K2LiCeI6",
    "ggaBandgapEV": 0.4169,
    "predictedBandgapEV": 2.3271400000000004,
    "predictionStdEV": 1.0030983602817818,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2048",
    "formula": "Rb2NaVCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5746,
    "predictionStdEV": 1.0035485239887496,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2049",
    "formula": "TmTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9551800000000028,
    "predictionStdEV": 1.0035688653998789,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2050",
    "formula": "YThC3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7523899999999994,
    "predictionStdEV": 1.0036062165510933,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2051",
    "formula": "SrPtO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7074899999999993,
    "predictionStdEV": 1.0038457301298844,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2052",
    "formula": "Tm2NiRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4809900000000022,
    "predictionStdEV": 1.0042938165198458,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2053",
    "formula": "ZnNF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.38971,
    "predictionStdEV": 1.0042998386438182,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2054",
    "formula": "K2RbYI6",
    "ggaBandgapEV": 3.1286,
    "predictedBandgapEV": 3.0286,
    "predictionStdEV": 1.0046954123514245,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2055",
    "formula": "KYO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2839399999999985,
    "predictionStdEV": 1.0049349612785896,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2056",
    "formula": "K2LiAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4042699999999986,
    "predictionStdEV": 1.0050360277621875,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2057",
    "formula": "MgBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6119800000000002,
    "predictionStdEV": 1.0057973352519884,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2058",
    "formula": "Ba2LiUO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0999900000000027,
    "predictionStdEV": 1.0059083705288454,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2059",
    "formula": "LaTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.764160000000006,
    "predictionStdEV": 1.006136518768703,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2060",
    "formula": "YBiTe3",
    "ggaBandgapEV": 1.0982,
    "predictedBandgapEV": 1.1689500000000015,
    "predictionStdEV": 1.0062865136232322,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2061",
    "formula": "AgClO3",
    "ggaBandgapEV": 2.6499,
    "predictedBandgapEV": 2.9239000000000015,
    "predictionStdEV": 1.0065206356553245,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2062",
    "formula": "PdSeO3",
    "ggaBandgapEV": 1.0809,
    "predictedBandgapEV": 2.651460000000002,
    "predictionStdEV": 1.0067200546328672,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2063",
    "formula": "Rb2NaCeCl6",
    "ggaBandgapEV": 0.3613,
    "predictedBandgapEV": 3.001030000000001,
    "predictionStdEV": 1.006832056055029,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2064",
    "formula": "BiPtO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.498180000000003,
    "predictionStdEV": 1.007941708433575,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2065",
    "formula": "LaOsN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4220099999999993,
    "predictionStdEV": 1.0079496068256577,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2066",
    "formula": "Ca2TiMnO6",
    "ggaBandgapEV": 1.2164,
    "predictedBandgapEV": 2.7186399999999957,
    "predictionStdEV": 1.0083714347401957,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2067",
    "formula": "FeNCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.192950000000006,
    "predictionStdEV": 1.0083720779057683,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2068",
    "formula": "LaZnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0141199999999984,
    "predictionStdEV": 1.008601916317832,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2069",
    "formula": "NbMoN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0362399999999994,
    "predictionStdEV": 1.0090021617419855,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2070",
    "formula": "Pr2MnRhO6",
    "ggaBandgapEV": 0.9657,
    "predictedBandgapEV": 2.2078299999999964,
    "predictionStdEV": 1.0090267296261282,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2071",
    "formula": "YbPuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7730500000000013,
    "predictionStdEV": 1.0092035708914224,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2072",
    "formula": "Cs2NaGaH6",
    "ggaBandgapEV": 1.1469,
    "predictedBandgapEV": 2.74616,
    "predictionStdEV": 1.0092266615582448,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2073",
    "formula": "SmRhO3",
    "ggaBandgapEV": 0.7366,
    "predictedBandgapEV": 2.4948299999999954,
    "predictionStdEV": 1.0093623339019542,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2074",
    "formula": "VTeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7807200000000014,
    "predictionStdEV": 1.0095226008366533,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2075",
    "formula": "Sr2ReNiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0214200000000002,
    "predictionStdEV": 1.0098572095103349,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2076",
    "formula": "Nd2MnRhO6",
    "ggaBandgapEV": 0.835,
    "predictedBandgapEV": 2.154909999999995,
    "predictionStdEV": 1.0100940262668607,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2077",
    "formula": "NaBrO3",
    "ggaBandgapEV": 0.0753,
    "predictedBandgapEV": 2.83157,
    "predictionStdEV": 1.0102895055873844,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2078",
    "formula": "Cs2KPrI6",
    "ggaBandgapEV": 3.2604,
    "predictedBandgapEV": 3.1604,
    "predictionStdEV": 1.0103445897316399,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2079",
    "formula": "ZnAgF3",
    "ggaBandgapEV": 1.6926,
    "predictedBandgapEV": 2.95804,
    "predictionStdEV": 1.010502527656412,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2080",
    "formula": "PaBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.889810000000004,
    "predictionStdEV": 1.0109891264993913,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2081",
    "formula": "Ba2UTiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.136410000000006,
    "predictionStdEV": 1.0111926927643415,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2082",
    "formula": "Sm2MnRhO6",
    "ggaBandgapEV": 1.0511,
    "predictedBandgapEV": 2.3321899999999918,
    "predictionStdEV": 1.0117387280815144,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2083",
    "formula": "LiFeO3",
    "ggaBandgapEV": 0.1489,
    "predictedBandgapEV": 1.8892000000000073,
    "predictionStdEV": 1.011826941724718,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2084",
    "formula": "ZnMoO3",
    "ggaBandgapEV": 0.8663,
    "predictedBandgapEV": 2.485,
    "predictionStdEV": 1.011948714115495,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2085",
    "formula": "CsMgI3",
    "ggaBandgapEV": 3.1807,
    "predictedBandgapEV": 3.0806999999999998,
    "predictionStdEV": 1.0122192323800199,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2086",
    "formula": "CaInBr3",
    "ggaBandgapEV": 3.1362,
    "predictedBandgapEV": 3.0362,
    "predictionStdEV": 1.0122573449474195,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2087",
    "formula": "RbBiF3",
    "ggaBandgapEV": 1.4753,
    "predictedBandgapEV": 2.6331600000000006,
    "predictionStdEV": 1.0125617089343237,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2088",
    "formula": "HgSN3",
    "ggaBandgapEV": 0.8282,
    "predictedBandgapEV": 2.3712699999999987,
    "predictionStdEV": 1.0125706084515782,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2089",
    "formula": "Sr2MnNbO6",
    "ggaBandgapEV": 1.5063,
    "predictedBandgapEV": 2.616049999999996,
    "predictionStdEV": 1.0126881294357104,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2090",
    "formula": "TbTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.941190000000004,
    "predictionStdEV": 1.0127604030075403,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2091",
    "formula": "CsMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0305800000000023,
    "predictionStdEV": 1.013660872086913,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2092",
    "formula": "Cs2KNdI6",
    "ggaBandgapEV": 3.2681,
    "predictedBandgapEV": 3.1681,
    "predictionStdEV": 1.0138021810984637,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2093",
    "formula": "PuMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7776900000000015,
    "predictionStdEV": 1.0140400948187402,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2094",
    "formula": "K2NaCeCl6",
    "ggaBandgapEV": 0.3621,
    "predictedBandgapEV": 3.0366800000000036,
    "predictionStdEV": 1.014339281305817,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2095",
    "formula": "Mg2TaCrO6",
    "ggaBandgapEV": 2.8254,
    "predictedBandgapEV": 3.414080000000002,
    "predictionStdEV": 1.0144500744738512,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2096",
    "formula": "RbPtO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8740300000000005,
    "predictionStdEV": 1.0145662172081227,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2097",
    "formula": "CsRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.034820000000002,
    "predictionStdEV": 1.0146205042280587,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2098",
    "formula": "RbNO3",
    "ggaBandgapEV": 3.1341,
    "predictedBandgapEV": 3.354280000000003,
    "predictionStdEV": 1.014660180355964,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2099",
    "formula": "LuRhO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6510100000000005,
    "predictionStdEV": 1.0148264038248114,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2100",
    "formula": "SrIrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4237299999999997,
    "predictionStdEV": 1.0151233605330927,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2101",
    "formula": "K2YAgI6",
    "ggaBandgapEV": 2.5807,
    "predictedBandgapEV": 2.4807,
    "predictionStdEV": 1.0153483343168497,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2102",
    "formula": "RbFeCl3",
    "ggaBandgapEV": 0.4083,
    "predictedBandgapEV": 1.7598000000000003,
    "predictionStdEV": 1.0158115277944033,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2103",
    "formula": "SNO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3717000000000024,
    "predictionStdEV": 1.0158317331133155,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2104",
    "formula": "Cs2NaPbF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2852200000000007,
    "predictionStdEV": 1.0158563636656501,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2105",
    "formula": "Ca2TaFeO6",
    "ggaBandgapEV": 1.2256,
    "predictedBandgapEV": 1.1256,
    "predictionStdEV": 1.0160134976957724,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2106",
    "formula": "Rb2LiCeI6",
    "ggaBandgapEV": 0.2746,
    "predictedBandgapEV": 2.32398,
    "predictionStdEV": 1.0160324107035172,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2107",
    "formula": "Mg2AgSbO6",
    "ggaBandgapEV": 0.288,
    "predictedBandgapEV": 3.006820000000005,
    "predictionStdEV": 1.0161075177361876,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2108",
    "formula": "Rb2ScHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3835300000000013,
    "predictionStdEV": 1.0165819146040327,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2109",
    "formula": "Gd2MnNiO6",
    "ggaBandgapEV": 1.868,
    "predictedBandgapEV": 1.8738799999999984,
    "predictionStdEV": 1.0166838965971672,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2110",
    "formula": "LiSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.684300000000002,
    "predictionStdEV": 1.0171352466609338,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2111",
    "formula": "NaInO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.8271000000000024,
    "predictionStdEV": 1.0171476736442928,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2112",
    "formula": "NaTcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.004689999999998,
    "predictionStdEV": 1.0177914589443162,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2113",
    "formula": "AcTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7542100000000043,
    "predictionStdEV": 1.0178835031082885,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2114",
    "formula": "TlSnF3",
    "ggaBandgapEV": 0.0224,
    "predictedBandgapEV": 2.1324400000000034,
    "predictionStdEV": 1.0179318476204602,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2115",
    "formula": "ZrNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6056700000000035,
    "predictionStdEV": 1.017975835223999,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2116",
    "formula": "KSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.606240000000002,
    "predictionStdEV": 1.018203399326482,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2117",
    "formula": "KNO3",
    "ggaBandgapEV": 3.3129,
    "predictedBandgapEV": 3.471780000000002,
    "predictionStdEV": 1.018205397550023,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2118",
    "formula": "Na2LiCeCl6",
    "ggaBandgapEV": 0.4745,
    "predictedBandgapEV": 2.998480000000005,
    "predictionStdEV": 1.0182393086107013,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2119",
    "formula": "RbMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.034460000000001,
    "predictionStdEV": 1.0189554496640172,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2120",
    "formula": "NaNO3",
    "ggaBandgapEV": 2.5717,
    "predictedBandgapEV": 3.441780000000003,
    "predictionStdEV": 1.0189825472499527,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2121",
    "formula": "AsAuO3",
    "ggaBandgapEV": 0.3768,
    "predictedBandgapEV": 2.280769999999997,
    "predictionStdEV": 1.019052430986748,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2122",
    "formula": "YReN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.58054,
    "predictionStdEV": 1.0191693717925383,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2123",
    "formula": "Rb2InAuF6",
    "ggaBandgapEV": 0.5337,
    "predictedBandgapEV": 2.906769999999997,
    "predictionStdEV": 1.0195107243673314,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2124",
    "formula": "Na2InAgF6",
    "ggaBandgapEV": 1.0818,
    "predictedBandgapEV": 3.4040600000000043,
    "predictionStdEV": 1.0195893861746503,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2125",
    "formula": "Na2TlCuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.617360000000002,
    "predictionStdEV": 1.0196252401740555,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2126",
    "formula": "TaFeTe3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8077500000000064,
    "predictionStdEV": 1.0196497376550424,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2127",
    "formula": "CaLaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.260660000000002,
    "predictionStdEV": 1.0199090961453363,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2128",
    "formula": "PrRhO3",
    "ggaBandgapEV": 0.6044,
    "predictedBandgapEV": 2.395149999999997,
    "predictionStdEV": 1.0200891762488207,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2129",
    "formula": "TlPbCl3",
    "ggaBandgapEV": 2.6023,
    "predictedBandgapEV": 2.508879999999999,
    "predictionStdEV": 1.0212313869050413,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2130",
    "formula": "NaSbO3",
    "ggaBandgapEV": 1.2828,
    "predictedBandgapEV": 3.405140000000001,
    "predictionStdEV": 1.0215694691992312,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2131",
    "formula": "DyTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0291800000000046,
    "predictionStdEV": 1.0216447169148393,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2132",
    "formula": "HfZnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7737200000000002,
    "predictionStdEV": 1.0219411243315337,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2133",
    "formula": "BiSbSe3",
    "ggaBandgapEV": 1.0106,
    "predictedBandgapEV": 1.1150500000000025,
    "predictionStdEV": 1.0219876454732695,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2134",
    "formula": "K2LiTaI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.928049999999998,
    "predictionStdEV": 1.022026099226434,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2135",
    "formula": "ZnBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6569000000000014,
    "predictionStdEV": 1.0225281365321945,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2136",
    "formula": "MoRuN3",
    "ggaBandgapEV": 0.1051,
    "predictedBandgapEV": 2.2803999999999998,
    "predictionStdEV": 1.0226275177208954,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2137",
    "formula": "CaPS3",
    "ggaBandgapEV": 3.1332,
    "predictedBandgapEV": 3.0332,
    "predictionStdEV": 1.0228002933124332,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2138",
    "formula": "TbMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0661000000000005,
    "predictionStdEV": 1.0228034953010277,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2139",
    "formula": "ErTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.043880000000004,
    "predictionStdEV": 1.0228820780520107,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2140",
    "formula": "K2RhAuF6",
    "ggaBandgapEV": 0.8132,
    "predictedBandgapEV": 2.7831999999999963,
    "predictionStdEV": 1.0230588741612066,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2141",
    "formula": "Rb2LiTaI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9254899999999988,
    "predictionStdEV": 1.023067158059529,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2142",
    "formula": "Rb2AlHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5966600000000013,
    "predictionStdEV": 1.0234443044934083,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2143",
    "formula": "Cs2LiTaI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9690399999999997,
    "predictionStdEV": 1.0237276387789875,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2144",
    "formula": "Rb2YTlI6",
    "ggaBandgapEV": 3.2251,
    "predictedBandgapEV": 3.1250999999999998,
    "predictionStdEV": 1.0237495131134373,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2145",
    "formula": "K2NaScI6",
    "ggaBandgapEV": 2.196,
    "predictedBandgapEV": 2.783460000000009,
    "predictionStdEV": 1.0239112404891364,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2146",
    "formula": "AcMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0400500000000004,
    "predictionStdEV": 1.0239439669728025,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2147",
    "formula": "TlGeBr3",
    "ggaBandgapEV": 2.2918,
    "predictedBandgapEV": 2.1917999999999997,
    "predictionStdEV": 1.0240414481357698,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2148",
    "formula": "BaRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9732300000000036,
    "predictionStdEV": 1.0246911325370196,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2149",
    "formula": "CsNO3",
    "ggaBandgapEV": 3.2977,
    "predictedBandgapEV": 3.4574999999999987,
    "predictionStdEV": 1.0247717550752462,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2150",
    "formula": "K2AlCuF6",
    "ggaBandgapEV": 1.1157,
    "predictedBandgapEV": 3.390379999999998,
    "predictionStdEV": 1.0249858806832413,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2151",
    "formula": "K2RbPrI6",
    "ggaBandgapEV": 3.125,
    "predictedBandgapEV": 3.025,
    "predictionStdEV": 1.0251835884367269,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2152",
    "formula": "BaPtO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7969700000000008,
    "predictionStdEV": 1.025403173927212,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2153",
    "formula": "SmSbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6758,
    "predictionStdEV": 1.0260736620730488,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2154",
    "formula": "BiMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3918200000000014,
    "predictionStdEV": 1.0260923387298024,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2155",
    "formula": "TiPN3",
    "ggaBandgapEV": 0.5324,
    "predictedBandgapEV": 2.5320599999999995,
    "predictionStdEV": 1.0263997059625471,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2156",
    "formula": "CaFeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7554000000000025,
    "predictionStdEV": 1.0264287797991638,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2157",
    "formula": "NbOF3",
    "ggaBandgapEV": 3.2785,
    "predictedBandgapEV": 3.317720000000003,
    "predictionStdEV": 1.026737942028051,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2158",
    "formula": "Y2NiRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5315200000000033,
    "predictionStdEV": 1.0267792311884778,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2159",
    "formula": "DyPaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7778200000000044,
    "predictionStdEV": 1.026973732672846,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2160",
    "formula": "KNpO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.12808,
    "predictionStdEV": 1.027095425751668,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2161",
    "formula": "HoRhO3",
    "ggaBandgapEV": 0.965,
    "predictedBandgapEV": 2.496569999999998,
    "predictionStdEV": 1.0273518798834207,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2162",
    "formula": "MgReO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5363400000000007,
    "predictionStdEV": 1.027433114319371,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2163",
    "formula": "BiPtPb3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.05101,
    "predictionStdEV": 1.0277209883523817,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2164",
    "formula": "K2RbNdI6",
    "ggaBandgapEV": 3.1283,
    "predictedBandgapEV": 3.0282999999999998,
    "predictionStdEV": 1.0277599556316621,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2165",
    "formula": "DyRhO3",
    "ggaBandgapEV": 0.912,
    "predictedBandgapEV": 2.5105499999999976,
    "predictionStdEV": 1.0279259445602114,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2166",
    "formula": "Cs2YHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.304440000000001,
    "predictionStdEV": 1.0280176002384402,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2167",
    "formula": "LiYO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3372399999999995,
    "predictionStdEV": 1.0284020528956572,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2168",
    "formula": "SrReO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4040100000000006,
    "predictionStdEV": 1.0286712642530653,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2169",
    "formula": "TlGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8061800000000021,
    "predictionStdEV": 1.0288082462733268,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2170",
    "formula": "Cs2RbYI6",
    "ggaBandgapEV": 3.3299,
    "predictedBandgapEV": 3.2298999999999998,
    "predictionStdEV": 1.0292537871681617,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2171",
    "formula": "Mg2CuSbO6",
    "ggaBandgapEV": 0.2475,
    "predictedBandgapEV": 2.967960000000006,
    "predictionStdEV": 1.029302986685649,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2172",
    "formula": "MnPO3",
    "ggaBandgapEV": 0.6749,
    "predictedBandgapEV": 2.420799999999998,
    "predictionStdEV": 1.0293540498778835,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2173",
    "formula": "K2NaAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.482459999999999,
    "predictionStdEV": 1.0296126691139733,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2174",
    "formula": "Cu2BiAsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8692000000000029,
    "predictionStdEV": 1.029678085617053,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2175",
    "formula": "TbBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.00518,
    "predictionStdEV": 1.0296786720137499,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2176",
    "formula": "EuPtO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7001000000000004,
    "predictionStdEV": 1.0297395738729298,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2177",
    "formula": "LiTcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0772099999999973,
    "predictionStdEV": 1.0303254660057657,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2178",
    "formula": "KRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.01071,
    "predictionStdEV": 1.0304561833964598,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2179",
    "formula": "Cs2KTaCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.33794,
    "predictionStdEV": 1.030457207456961,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2180",
    "formula": "Ba2UFeO6",
    "ggaBandgapEV": 0.518,
    "predictedBandgapEV": 1.156279999999999,
    "predictionStdEV": 1.030639491577922,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2181",
    "formula": "ZnNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9035100000000003,
    "predictionStdEV": 1.030816681034993,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2182",
    "formula": "InSbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1811600000000015,
    "predictionStdEV": 1.031061906191862,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2183",
    "formula": "Rb2AlCuF6",
    "ggaBandgapEV": 1.2716,
    "predictedBandgapEV": 3.3657399999999993,
    "predictionStdEV": 1.0311428865099141,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2184",
    "formula": "NiNCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8081800000000028,
    "predictionStdEV": 1.031581982975662,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2185",
    "formula": "Cs2NaInH6",
    "ggaBandgapEV": 1.3022,
    "predictedBandgapEV": 2.7116400000000005,
    "predictionStdEV": 1.0316441781932377,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2186",
    "formula": "CrOF3",
    "ggaBandgapEV": 2.2005,
    "predictedBandgapEV": 3.040080000000002,
    "predictionStdEV": 1.031657885929244,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2187",
    "formula": "Sr2CaSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.294429999999999,
    "predictionStdEV": 1.0318621638087127,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2188",
    "formula": "BaGeO3",
    "ggaBandgapEV": 1.4247,
    "predictedBandgapEV": 3.4390499999999906,
    "predictionStdEV": 1.0321154719797585,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2189",
    "formula": "EuUO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0506000000000038,
    "predictionStdEV": 1.032284863785186,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2190",
    "formula": "Cs2NaCeI6",
    "ggaBandgapEV": 0.3068,
    "predictedBandgapEV": 2.6892900000000055,
    "predictionStdEV": 1.0323031269447922,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2191",
    "formula": "VBiO3",
    "ggaBandgapEV": 1.2434,
    "predictedBandgapEV": 1.6888399999999981,
    "predictionStdEV": 1.0325013096359748,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2192",
    "formula": "PrHfO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.90779,
    "predictionStdEV": 1.0331835102729812,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2193",
    "formula": "TlPdF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.140090000000003,
    "predictionStdEV": 1.033301138052214,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2194",
    "formula": "KSnN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5109900000000005,
    "predictionStdEV": 1.0333015387097817,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2195",
    "formula": "Cs2TlSiH6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0180700000000007,
    "predictionStdEV": 1.0334661218927326,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2196",
    "formula": "Rb2LiRuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4302099999999967,
    "predictionStdEV": 1.033937912014063,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2197",
    "formula": "UPdO3",
    "ggaBandgapEV": 0.6628,
    "predictedBandgapEV": 2.0581799999999992,
    "predictionStdEV": 1.0340589865186605,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2198",
    "formula": "Rb2NaScI6",
    "ggaBandgapEV": 2.2025,
    "predictedBandgapEV": 2.7754800000000093,
    "predictionStdEV": 1.0340893431420712,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2199",
    "formula": "KFeCl3",
    "ggaBandgapEV": 0.0492,
    "predictedBandgapEV": 1.7684000000000026,
    "predictionStdEV": 1.0351911127902902,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2200",
    "formula": "Li2CrPO6",
    "ggaBandgapEV": 0.8996,
    "predictedBandgapEV": 3.185779999999997,
    "predictionStdEV": 1.0362194707686203,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2201",
    "formula": "Cu2BiPO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9227700000000019,
    "predictionStdEV": 1.0362457127052447,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2202",
    "formula": "Rb2LiNdI6",
    "ggaBandgapEV": 2.9612,
    "predictedBandgapEV": 2.8611999999999997,
    "predictionStdEV": 1.0365617504037075,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2203",
    "formula": "NdSbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.661200000000001,
    "predictionStdEV": 1.0367222193046706,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2204",
    "formula": "ZnSbO3",
    "ggaBandgapEV": 0.3524,
    "predictedBandgapEV": 2.9478500000000096,
    "predictionStdEV": 1.0367385531077746,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2205",
    "formula": "La2MnCrO6",
    "ggaBandgapEV": 0.8858,
    "predictedBandgapEV": 2.1410199999999926,
    "predictionStdEV": 1.037264267002385,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2206",
    "formula": "ErRhO3",
    "ggaBandgapEV": 0.9962,
    "predictedBandgapEV": 2.512989999999999,
    "predictionStdEV": 1.0376422841711879,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2207",
    "formula": "La2NiMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4097900000000028,
    "predictionStdEV": 1.0378455115767482,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2208",
    "formula": "Zn2CoIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0550400000000013,
    "predictionStdEV": 1.0379297656392736,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2209",
    "formula": "Ba2YSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0417300000000047,
    "predictionStdEV": 1.0380536388356822,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2210",
    "formula": "LiMnF3",
    "ggaBandgapEV": 3.5584,
    "predictedBandgapEV": 3.4583999999999997,
    "predictionStdEV": 1.0381521191039398,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2211",
    "formula": "NdNpO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8052300000000032,
    "predictionStdEV": 1.038366070853627,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2212",
    "formula": "MgGeO3",
    "ggaBandgapEV": 1.0993,
    "predictedBandgapEV": 3.4587200000000076,
    "predictionStdEV": 1.0383887333749346,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2213",
    "formula": "TaHO3",
    "ggaBandgapEV": 2.7471,
    "predictedBandgapEV": 3.2968099999999985,
    "predictionStdEV": 1.0384322192131765,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2214",
    "formula": "Rb2LiPrI6",
    "ggaBandgapEV": 2.9487,
    "predictedBandgapEV": 2.8487,
    "predictionStdEV": 1.0384978187747902,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2215",
    "formula": "LaCrN3",
    "ggaBandgapEV": 1.4343,
    "predictedBandgapEV": 2.641999999999998,
    "predictionStdEV": 1.0385320409115955,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2216",
    "formula": "Ba2PrRuO6",
    "ggaBandgapEV": 0.1796,
    "predictedBandgapEV": 2.5598399999999972,
    "predictionStdEV": 1.0388644639220272,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2217",
    "formula": "CsCoCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2972300000000032,
    "predictionStdEV": 1.0389430095534569,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2218",
    "formula": "Mg2MnIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5861500000000002,
    "predictionStdEV": 1.0392257346216949,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2219",
    "formula": "Eu2MgPtO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7652800000000002,
    "predictionStdEV": 1.0392866888399936,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2220",
    "formula": "EuNpO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.895480000000002,
    "predictionStdEV": 1.0393715262599799,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2221",
    "formula": "ErCrO3",
    "ggaBandgapEV": 0.2464,
    "predictedBandgapEV": 2.6942099999999987,
    "predictionStdEV": 1.039580552867357,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2222",
    "formula": "Eu2MgIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5553700000000004,
    "predictionStdEV": 1.039839176555682,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2223",
    "formula": "KTlF3",
    "ggaBandgapEV": 1.9743,
    "predictedBandgapEV": 3.064630000000002,
    "predictionStdEV": 1.039877114422661,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2224",
    "formula": "LaYC3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7675000000000005,
    "predictionStdEV": 1.040548821536019,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2225",
    "formula": "Pr2MgIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5069700000000004,
    "predictionStdEV": 1.0408408471519544,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2226",
    "formula": "Rb2TlAgF6",
    "ggaBandgapEV": 0.5524,
    "predictedBandgapEV": 2.867929999999996,
    "predictionStdEV": 1.0408417099155851,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2227",
    "formula": "Ba2SmMoO6",
    "ggaBandgapEV": 0.9311,
    "predictedBandgapEV": 2.7549399999999977,
    "predictionStdEV": 1.040967096694223,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2228",
    "formula": "La2TiCrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8415800000000044,
    "predictionStdEV": 1.0410545151912083,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2229",
    "formula": "NaIO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.22241,
    "predictionStdEV": 1.0412125824729563,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2230",
    "formula": "CdBiO3",
    "ggaBandgapEV": 0.7926,
    "predictedBandgapEV": 1.82774,
    "predictionStdEV": 1.0414473545983962,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2231",
    "formula": "LiLaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2018799999999987,
    "predictionStdEV": 1.0415515664622639,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2232",
    "formula": "Na2AsAuF6",
    "ggaBandgapEV": 0.8626,
    "predictedBandgapEV": 2.8973799999999965,
    "predictionStdEV": 1.0415609610579688,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2233",
    "formula": "Rb2YHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2925800000000014,
    "predictionStdEV": 1.0417795561441971,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2234",
    "formula": "K2GaCuF6",
    "ggaBandgapEV": 0.219,
    "predictedBandgapEV": 3.1907999999999994,
    "predictionStdEV": 1.042331070245918,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2235",
    "formula": "Cs2TlGaH6",
    "ggaBandgapEV": 0.6594,
    "predictedBandgapEV": 2.277549999999999,
    "predictionStdEV": 1.0426078109720847,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2236",
    "formula": "MgTlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.142559999999998,
    "predictionStdEV": 1.0426914435248824,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2237",
    "formula": "TiMoN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0172700000000003,
    "predictionStdEV": 1.0427659359127532,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2238",
    "formula": "TmGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9663000000000008,
    "predictionStdEV": 1.0428100546120556,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2239",
    "formula": "TaMoN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.80768,
    "predictionStdEV": 1.0429878319520323,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2240",
    "formula": "PaAgO3",
    "ggaBandgapEV": 1.5216,
    "predictedBandgapEV": 2.3874199999999988,
    "predictionStdEV": 1.0430543339634808,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2241",
    "formula": "CaNbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.102949999999999,
    "predictionStdEV": 1.0430769614462778,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2242",
    "formula": "SrScO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3843400000000035,
    "predictionStdEV": 1.0431236572909282,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2243",
    "formula": "TlHgCl3",
    "ggaBandgapEV": 2.6787,
    "predictedBandgapEV": 2.6136800000000004,
    "predictionStdEV": 1.0432650945948496,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2244",
    "formula": "Cs2TlInH6",
    "ggaBandgapEV": 0.6858,
    "predictedBandgapEV": 2.2457599999999984,
    "predictionStdEV": 1.043354792196787,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2245",
    "formula": "CaPbO3",
    "ggaBandgapEV": 0.9343,
    "predictedBandgapEV": 2.2861399999999876,
    "predictionStdEV": 1.0435290127255643,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2246",
    "formula": "CeTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8474600000000059,
    "predictionStdEV": 1.0435400080495212,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2247",
    "formula": "BeInO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6992800000000052,
    "predictionStdEV": 1.0440738870405681,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2248",
    "formula": "SnNF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5208600000000008,
    "predictionStdEV": 1.0443797491334275,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2249",
    "formula": "ZnWO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.653430000000001,
    "predictionStdEV": 1.0445643518232852,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2250",
    "formula": "K2AlHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5830400000000013,
    "predictionStdEV": 1.0447075946885802,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2251",
    "formula": "K2NaCeI6",
    "ggaBandgapEV": 0.3061,
    "predictedBandgapEV": 2.6437200000000036,
    "predictionStdEV": 1.044920504918915,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2252",
    "formula": "NdRhO3",
    "ggaBandgapEV": 0.6491,
    "predictedBandgapEV": 2.3962799999999946,
    "predictionStdEV": 1.0449863451739463,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2253",
    "formula": "Cu2NiTeO6",
    "ggaBandgapEV": 0.2889,
    "predictedBandgapEV": 2.0959899999999987,
    "predictionStdEV": 1.0459118843860595,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2254",
    "formula": "SrRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7942600000000002,
    "predictionStdEV": 1.046325882505062,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2255",
    "formula": "PrNbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8654399999999993,
    "predictionStdEV": 1.0463512825050683,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2256",
    "formula": "Rb2AlAuF6",
    "ggaBandgapEV": 1.4098,
    "predictedBandgapEV": 3.291359999999999,
    "predictionStdEV": 1.046392684607456,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2257",
    "formula": "SrOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3741399999999997,
    "predictionStdEV": 1.0464881558813728,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2258",
    "formula": "CaMoO3",
    "ggaBandgapEV": 1.1542,
    "predictedBandgapEV": 2.865359999999999,
    "predictionStdEV": 1.0465092786975179,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2259",
    "formula": "RbCoCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3137700000000032,
    "predictionStdEV": 1.0467749218910416,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2260",
    "formula": "K2ScHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.401410000000001,
    "predictionStdEV": 1.046831248052904,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2261",
    "formula": "K2LiPrI6",
    "ggaBandgapEV": 2.9364,
    "predictedBandgapEV": 2.8364,
    "predictionStdEV": 1.0468947079816575,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2262",
    "formula": "K2LiNdI6",
    "ggaBandgapEV": 2.9479,
    "predictedBandgapEV": 2.8479,
    "predictionStdEV": 1.0474963484423219,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2263",
    "formula": "TbRhO3",
    "ggaBandgapEV": 0.8749,
    "predictedBandgapEV": 2.5187299999999997,
    "predictionStdEV": 1.0476148324169523,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2264",
    "formula": "Cs2TlPdF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2327399999999997,
    "predictionStdEV": 1.0476685508308434,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2265",
    "formula": "Ba2NiTeO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7487200000000045,
    "predictionStdEV": 1.047676124381958,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2266",
    "formula": "Gd2ZnPtO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6966400000000004,
    "predictionStdEV": 1.0478577243118437,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2267",
    "formula": "Ho2NiRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.496420000000001,
    "predictionStdEV": 1.0480729858173041,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2268",
    "formula": "LaBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9917199999999995,
    "predictionStdEV": 1.0484608917837623,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2269",
    "formula": "Ba2PrIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7026800000000013,
    "predictionStdEV": 1.0485235417481107,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2270",
    "formula": "Ba2CeNbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1597700000000035,
    "predictionStdEV": 1.0489266404758728,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2271",
    "formula": "SrPS3",
    "ggaBandgapEV": 3.1922,
    "predictedBandgapEV": 3.0922,
    "predictionStdEV": 1.0491377737933172,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2272",
    "formula": "K2IrAuF6",
    "ggaBandgapEV": 0.6664,
    "predictedBandgapEV": 2.6875599999999977,
    "predictionStdEV": 1.0493064120646556,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2273",
    "formula": "ReMoN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.77018,
    "predictionStdEV": 1.0493939048803351,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2274",
    "formula": "BeReO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6083000000000005,
    "predictionStdEV": 1.0495069842549878,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2275",
    "formula": "Zn2CrSbO6",
    "ggaBandgapEV": 1.5217,
    "predictedBandgapEV": 3.1786600000000083,
    "predictionStdEV": 1.0498592307542978,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2276",
    "formula": "Na2LiAuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4674500000000004,
    "predictionStdEV": 1.0499612123788205,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2277",
    "formula": "Rb2LiTaBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1549000000000014,
    "predictionStdEV": 1.0502760541876615,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2278",
    "formula": "Rb2GaCuF6",
    "ggaBandgapEV": 0.3579,
    "predictedBandgapEV": 3.1889699999999968,
    "predictionStdEV": 1.0502856702345311,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2279",
    "formula": "SiBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4970500000000038,
    "predictionStdEV": 1.050304359459675,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2280",
    "formula": "CaYO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.323620000000002,
    "predictionStdEV": 1.0504996409328273,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2281",
    "formula": "SmPuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7930200000000018,
    "predictionStdEV": 1.0505206231197932,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2282",
    "formula": "PuPtO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4232300000000013,
    "predictionStdEV": 1.0508061272661096,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2283",
    "formula": "UOF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.993980000000003,
    "predictionStdEV": 1.0509979826812237,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2284",
    "formula": "K2LiTaBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.157380000000002,
    "predictionStdEV": 1.0511527651107615,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2285",
    "formula": "NaPuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9206700000000019,
    "predictionStdEV": 1.051179671179005,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2286",
    "formula": "Na2SbAuF6",
    "ggaBandgapEV": 0.7666,
    "predictedBandgapEV": 2.855519999999996,
    "predictionStdEV": 1.0512818031336784,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2287",
    "formula": "KAlH3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.25682,
    "predictionStdEV": 1.0519371119986227,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2288",
    "formula": "BeBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6346400000000005,
    "predictionStdEV": 1.0520718465960397,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2289",
    "formula": "CeCrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0865199999999975,
    "predictionStdEV": 1.0521630527632118,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2290",
    "formula": "HfCrO3",
    "ggaBandgapEV": 1.5871,
    "predictedBandgapEV": 2.8665999999999996,
    "predictionStdEV": 1.0524736766304408,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2291",
    "formula": "CaRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8975799999999992,
    "predictionStdEV": 1.0525775712981926,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2292",
    "formula": "CePbO3",
    "ggaBandgapEV": 0.7299,
    "predictedBandgapEV": 1.832789999999993,
    "predictionStdEV": 1.0527169923108495,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2293",
    "formula": "CuSiO3",
    "ggaBandgapEV": 0.1122,
    "predictedBandgapEV": 2.811060000000001,
    "predictionStdEV": 1.0528478885385109,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2294",
    "formula": "EuAsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8400899999999998,
    "predictionStdEV": 1.0531079440874054,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2295",
    "formula": "SbHO3",
    "ggaBandgapEV": 1.0708,
    "predictedBandgapEV": 2.9240999999999997,
    "predictionStdEV": 1.053218396155328,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2296",
    "formula": "KAsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3751799999999994,
    "predictionStdEV": 1.0532476288129011,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2297",
    "formula": "La2NiRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.391630000000004,
    "predictionStdEV": 1.0532716615859352,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2298",
    "formula": "CoAuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2066900000000036,
    "predictionStdEV": 1.053377659673869,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2299",
    "formula": "Ba2NdRuO6",
    "ggaBandgapEV": 0.1414,
    "predictedBandgapEV": 2.5669999999999966,
    "predictionStdEV": 1.0534391297080241,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2300",
    "formula": "SnPbO3",
    "ggaBandgapEV": 1.1196,
    "predictedBandgapEV": 2.139909999999998,
    "predictionStdEV": 1.0538953657265984,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2301",
    "formula": "Rb2GaAuF6",
    "ggaBandgapEV": 0.7907,
    "predictedBandgapEV": 2.9785999999999975,
    "predictionStdEV": 1.0539475983178666,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2302",
    "formula": "ZnOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.663910000000001,
    "predictionStdEV": 1.0540091849220286,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2303",
    "formula": "YRhO3",
    "ggaBandgapEV": 0.813,
    "predictedBandgapEV": 2.452239999999999,
    "predictionStdEV": 1.0544240998763257,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2304",
    "formula": "Sr2TaFeO6",
    "ggaBandgapEV": 1.5015,
    "predictedBandgapEV": 1.4015,
    "predictionStdEV": 1.0544636141659884,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2305",
    "formula": "MgSbO3",
    "ggaBandgapEV": 0.5651,
    "predictedBandgapEV": 2.9353400000000023,
    "predictionStdEV": 1.054514525457095,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2306",
    "formula": "KFeF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.943820000000005,
    "predictionStdEV": 1.0545293773053466,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2307",
    "formula": "Sr2CuMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8117500000000006,
    "predictionStdEV": 1.0545530273532944,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2308",
    "formula": "Sr2MgMoO6",
    "ggaBandgapEV": 2.2149,
    "predictedBandgapEV": 3.3080000000000016,
    "predictionStdEV": 1.0549612315151677,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2309",
    "formula": "BaIrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5039800000000008,
    "predictionStdEV": 1.054979838480338,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2310",
    "formula": "Mg2TaNiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3436200000000011,
    "predictionStdEV": 1.0556341201382242,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2311",
    "formula": "TlSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9271899999999997,
    "predictionStdEV": 1.0558117985228248,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2312",
    "formula": "LiNO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.301350000000001,
    "predictionStdEV": 1.0559493489273037,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2313",
    "formula": "BaNiCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8072400000000022,
    "predictionStdEV": 1.0562993337118032,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2314",
    "formula": "GdRhO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8412700000000013,
    "predictionStdEV": 1.0566543602805964,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2315",
    "formula": "TeHO3",
    "ggaBandgapEV": 2.0457,
    "predictedBandgapEV": 3.00838,
    "predictionStdEV": 1.057187199884675,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2316",
    "formula": "Cs2NaMoI6",
    "ggaBandgapEV": 1.3989,
    "predictedBandgapEV": 2.509770000000004,
    "predictionStdEV": 1.057197473086273,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2317",
    "formula": "Er2NiRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5072100000000022,
    "predictionStdEV": 1.0578376368327989,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2318",
    "formula": "CoNiO3",
    "ggaBandgapEV": 1.0203,
    "predictedBandgapEV": 1.6907500000000064,
    "predictionStdEV": 1.0578633595602038,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2319",
    "formula": "K2RbTaCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.374160000000001,
    "predictionStdEV": 1.058105285120531,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2320",
    "formula": "EuRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8853699999999995,
    "predictionStdEV": 1.0581106336768387,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2321",
    "formula": "Sr2NiOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0461100000000003,
    "predictionStdEV": 1.0582623105355295,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2322",
    "formula": "Rb2NaCeI6",
    "ggaBandgapEV": 0.4272,
    "predictedBandgapEV": 2.637860000000004,
    "predictionStdEV": 1.0583010537649484,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2323",
    "formula": "BaMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9605700000000046,
    "predictionStdEV": 1.0585127420584037,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2324",
    "formula": "Mn2CrSbO6",
    "ggaBandgapEV": 1.3894,
    "predictedBandgapEV": 2.5062999999999978,
    "predictionStdEV": 1.0585662520598325,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2325",
    "formula": "Yb2MgTiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.056750000000002,
    "predictionStdEV": 1.0585908026711737,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2326",
    "formula": "Cs2LiTaBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1543300000000025,
    "predictionStdEV": 1.0589054259470014,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2327",
    "formula": "Sr2ZnMoO6",
    "ggaBandgapEV": 2.3708,
    "predictedBandgapEV": 3.3618600000000023,
    "predictionStdEV": 1.059086559446393,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2328",
    "formula": "Ba2ScSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.190390000000004,
    "predictionStdEV": 1.059341586977496,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2329",
    "formula": "CePuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.734700000000002,
    "predictionStdEV": 1.0599424088128555,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2330",
    "formula": "BaReO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5137600000000018,
    "predictionStdEV": 1.0600833280454895,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2331",
    "formula": "YbNbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.921740000000003,
    "predictionStdEV": 1.060193648537851,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2332",
    "formula": "FeGeO3",
    "ggaBandgapEV": 1.968,
    "predictedBandgapEV": 2.5629700000000004,
    "predictionStdEV": 1.060226829079517,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2333",
    "formula": "KMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.029639999999999,
    "predictionStdEV": 1.060313053017833,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2334",
    "formula": "Ba2SrIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7460300000000015,
    "predictionStdEV": 1.0604110000844011,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2335",
    "formula": "MgInO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.7474000000000065,
    "predictionStdEV": 1.060929988265012,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2336",
    "formula": "MgIrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5374,
    "predictionStdEV": 1.0609742880956152,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2337",
    "formula": "Ca2NbFeO6",
    "ggaBandgapEV": 2.0995,
    "predictedBandgapEV": 1.9994999999999998,
    "predictionStdEV": 1.0611421488189021,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2338",
    "formula": "ZnBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.7266500000000087,
    "predictionStdEV": 1.0614952790756986,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2339",
    "formula": "CdSiO3",
    "ggaBandgapEV": 1.1638,
    "predictedBandgapEV": 3.2892600000000076,
    "predictionStdEV": 1.0617677958951284,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2340",
    "formula": "Ba2CrMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9841000000000033,
    "predictionStdEV": 1.0621553040869305,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2341",
    "formula": "Ba2MnMoO6",
    "ggaBandgapEV": 1.3696,
    "predictedBandgapEV": 2.5049600000000014,
    "predictionStdEV": 1.0622429563899234,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2342",
    "formula": "RbMgH3",
    "ggaBandgapEV": 2.5466,
    "predictedBandgapEV": 2.543059999999999,
    "predictionStdEV": 1.0625358518186572,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2343",
    "formula": "Eu2NiPtO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4793200000000015,
    "predictionStdEV": 1.0625724152263696,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2344",
    "formula": "FeBO3",
    "ggaBandgapEV": 1.5459,
    "predictedBandgapEV": 2.6703399999999977,
    "predictionStdEV": 1.0626299376546862,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2345",
    "formula": "Sc2MnNiO6",
    "ggaBandgapEV": 1.8476,
    "predictedBandgapEV": 2.120449999999998,
    "predictionStdEV": 1.0628886336300716,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2346",
    "formula": "KCoCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3360100000000028,
    "predictionStdEV": 1.0629199075659477,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2347",
    "formula": "NaRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.002819999999998,
    "predictionStdEV": 1.0634519488909704,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2348",
    "formula": "TaBeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7182700000000024,
    "predictionStdEV": 1.0634671396427833,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2349",
    "formula": "Cs2TlHgF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.161330000000001,
    "predictionStdEV": 1.063822485708964,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2350",
    "formula": "BPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8526399999999998,
    "predictionStdEV": 1.0640046195388422,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2351",
    "formula": "RbBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6472600000000004,
    "predictionStdEV": 1.0641118326566998,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2352",
    "formula": "FeBiO3",
    "ggaBandgapEV": 0.037,
    "predictedBandgapEV": 1.954040000000009,
    "predictionStdEV": 1.064709574672831,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2353",
    "formula": "Sr2TiRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8115299999999994,
    "predictionStdEV": 1.064804023799683,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2354",
    "formula": "Na2GaHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5593400000000015,
    "predictionStdEV": 1.0648901654161325,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2355",
    "formula": "NaGeAu3",
    "ggaBandgapEV": 0.0853,
    "predictedBandgapEV": 1.7777799999999992,
    "predictionStdEV": 1.0654495162136957,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2356",
    "formula": "Ba2BiIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5022299999999997,
    "predictionStdEV": 1.0662093495650842,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2357",
    "formula": "Mn2NbFeO6",
    "ggaBandgapEV": 1.5088,
    "predictedBandgapEV": 1.6240000000000057,
    "predictionStdEV": 1.0663157130981409,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2358",
    "formula": "Dy2NiRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.507420000000001,
    "predictionStdEV": 1.066357699648669,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2359",
    "formula": "BeOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6115300000000012,
    "predictionStdEV": 1.0664555823380555,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2360",
    "formula": "K2YHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3250800000000016,
    "predictionStdEV": 1.0665657474342594,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2361",
    "formula": "Ba2VMoO6",
    "ggaBandgapEV": 0.4061,
    "predictedBandgapEV": 2.499110000000001,
    "predictionStdEV": 1.0667259057039906,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2362",
    "formula": "LiAcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.16523,
    "predictionStdEV": 1.0670743634349016,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2363",
    "formula": "Eu2NiRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5295500000000006,
    "predictionStdEV": 1.0672084836150806,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2364",
    "formula": "Ba2NdMoO6",
    "ggaBandgapEV": 1.1069,
    "predictedBandgapEV": 2.833479999999998,
    "predictionStdEV": 1.067350078277976,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2365",
    "formula": "InPtO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9721200000000028,
    "predictionStdEV": 1.0678480723398822,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2366",
    "formula": "CsBiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6684500000000007,
    "predictionStdEV": 1.0681311003336624,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2367",
    "formula": "Rb2TlHgF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1480900000000016,
    "predictionStdEV": 1.0682837646898866,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2368",
    "formula": "RbTlF3",
    "ggaBandgapEV": 2.1049,
    "predictedBandgapEV": 2.9328500000000015,
    "predictionStdEV": 1.0684334923148022,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2369",
    "formula": "CdBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5551900000000036,
    "predictionStdEV": 1.0687105847234792,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2370",
    "formula": "NpSnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7890200000000034,
    "predictionStdEV": 1.0687286089555201,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2371",
    "formula": "EuNbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9285799999999982,
    "predictionStdEV": 1.0688330008004057,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2372",
    "formula": "Mg2VSbO6",
    "ggaBandgapEV": 0.8578,
    "predictedBandgapEV": 2.780650000000001,
    "predictionStdEV": 1.0692943596129176,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2373",
    "formula": "Sm2MgIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6221200000000002,
    "predictionStdEV": 1.069451217026751,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2374",
    "formula": "TaWN3",
    "ggaBandgapEV": 0.3175,
    "predictedBandgapEV": 1.6216399999999966,
    "predictionStdEV": 1.0704472945456025,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2375",
    "formula": "Li2FeTeO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2413200000000018,
    "predictionStdEV": 1.0705834659661064,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2376",
    "formula": "Rb2AlInH6",
    "ggaBandgapEV": 0.5159,
    "predictedBandgapEV": 2.5247100000000002,
    "predictionStdEV": 1.0711384905323862,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2377",
    "formula": "NaBeH3",
    "ggaBandgapEV": 1.6472,
    "predictedBandgapEV": 2.5953200000000014,
    "predictionStdEV": 1.071294776240415,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2378",
    "formula": "NbWN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7813999999999999,
    "predictionStdEV": 1.0716731497989485,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2379",
    "formula": "K2NaMoI6",
    "ggaBandgapEV": 1.4155,
    "predictedBandgapEV": 2.4201400000000044,
    "predictionStdEV": 1.071854645182825,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2380",
    "formula": "Cs2TaAuF6",
    "ggaBandgapEV": 1.1917,
    "predictedBandgapEV": 2.8146899999999966,
    "predictionStdEV": 1.0720050624414041,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2381",
    "formula": "Ba2GdSbO6",
    "ggaBandgapEV": 3.4808,
    "predictedBandgapEV": 3.4971399999999977,
    "predictionStdEV": 1.0721753683050175,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2382",
    "formula": "Sr2TaMnO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.678540000000002,
    "predictionStdEV": 1.0724159493405552,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2383",
    "formula": "Ba2TaMnO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8476800000000047,
    "predictionStdEV": 1.0724204947687273,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2384",
    "formula": "NiBiO3",
    "ggaBandgapEV": 0.3548,
    "predictedBandgapEV": 1.355000000000002,
    "predictionStdEV": 1.0724588103978636,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2385",
    "formula": "CaInO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.834120000000006,
    "predictionStdEV": 1.0726060906036272,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2386",
    "formula": "TlCuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0970800000000027,
    "predictionStdEV": 1.0731195057401568,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2387",
    "formula": "BaTeO3",
    "ggaBandgapEV": 2.8464,
    "predictedBandgapEV": 3.401239999999992,
    "predictionStdEV": 1.0734501676370451,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2388",
    "formula": "Sr2LaCrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0614000000000035,
    "predictionStdEV": 1.0735906296163358,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2389",
    "formula": "SrMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8211800000000014,
    "predictionStdEV": 1.0736641968511391,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2390",
    "formula": "Rb2TlPdF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.28914,
    "predictionStdEV": 1.0740075234373372,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2391",
    "formula": "Na2AgIrF6",
    "ggaBandgapEV": 1.1109,
    "predictedBandgapEV": 3.0014699999999976,
    "predictionStdEV": 1.074065262961241,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2392",
    "formula": "Rb2TaAuF6",
    "ggaBandgapEV": 1.1852,
    "predictedBandgapEV": 2.8494099999999962,
    "predictionStdEV": 1.0741778725611517,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2393",
    "formula": "YMoN3",
    "ggaBandgapEV": 1.8386,
    "predictedBandgapEV": 2.61497,
    "predictionStdEV": 1.0743844512556937,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2394",
    "formula": "CsMgH3",
    "ggaBandgapEV": 2.919,
    "predictedBandgapEV": 2.819,
    "predictionStdEV": 1.0749882053306439,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2395",
    "formula": "Ba2TbMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0177400000000034,
    "predictionStdEV": 1.0751107349478009,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2396",
    "formula": "Ba2EuTaO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.025120000000001,
    "predictionStdEV": 1.0752512662629157,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2397",
    "formula": "Ba2NdIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7073600000000013,
    "predictionStdEV": 1.0756302944785436,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2398",
    "formula": "RbAsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.35556,
    "predictionStdEV": 1.0757475477081044,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2399",
    "formula": "Cs2TaAgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2808999999999973,
    "predictionStdEV": 1.075900316014454,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2400",
    "formula": "LaMgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.145620000000001,
    "predictionStdEV": 1.076112733685461,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2401",
    "formula": "Rb2NaMoI6",
    "ggaBandgapEV": 1.4146,
    "predictedBandgapEV": 2.4194700000000036,
    "predictionStdEV": 1.0763361320238214,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2402",
    "formula": "Nd2NiRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.541540000000002,
    "predictionStdEV": 1.0764785777710577,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2403",
    "formula": "LiLuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1218999999999992,
    "predictionStdEV": 1.0771556944100513,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2404",
    "formula": "ScMoN3",
    "ggaBandgapEV": 1.2463,
    "predictedBandgapEV": 2.501349999999998,
    "predictionStdEV": 1.0772069566708147,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2405",
    "formula": "FeSnO3",
    "ggaBandgapEV": 0.8562,
    "predictedBandgapEV": 2.563499999999998,
    "predictionStdEV": 1.0775342917977133,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2406",
    "formula": "Ba2CaNbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1919500000000025,
    "predictionStdEV": 1.0776073716804278,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2407",
    "formula": "Ca2MnIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4780199999999992,
    "predictionStdEV": 1.0778820805635465,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2408",
    "formula": "Sr2NbCoO6",
    "ggaBandgapEV": 1.5007,
    "predictedBandgapEV": 1.4109100000000012,
    "predictionStdEV": 1.0780127651841596,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2409",
    "formula": "K2AlAuF6",
    "ggaBandgapEV": 1.3275,
    "predictedBandgapEV": 3.317779999999998,
    "predictionStdEV": 1.0781190897113366,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2410",
    "formula": "Ba2NdReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.767910000000001,
    "predictionStdEV": 1.0784374724108958,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2411",
    "formula": "Cs2AlInH6",
    "ggaBandgapEV": 0.888,
    "predictedBandgapEV": 2.6157999999999997,
    "predictionStdEV": 1.0786215091495257,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2412",
    "formula": "KPtO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9354900000000013,
    "predictionStdEV": 1.0787198477361946,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2413",
    "formula": "Mg2NiIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3306800000000008,
    "predictionStdEV": 1.0789305063812047,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2414",
    "formula": "CaMoN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9823900000000008,
    "predictionStdEV": 1.0790817568191953,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2415",
    "formula": "Ba2YbNbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1597600000000017,
    "predictionStdEV": 1.07940948782193,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2416",
    "formula": "K2TaAuF6",
    "ggaBandgapEV": 1.1965,
    "predictedBandgapEV": 2.9569499999999946,
    "predictionStdEV": 1.0796291712898471,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2417",
    "formula": "Mn2FeWO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0734000000000012,
    "predictionStdEV": 1.079726002280209,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2418",
    "formula": "PuCrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7690800000000004,
    "predictionStdEV": 1.0798705726150712,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2419",
    "formula": "Nd2MgIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5178200000000004,
    "predictionStdEV": 1.0805861592672745,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2420",
    "formula": "ZnCoO3",
    "ggaBandgapEV": 0.2146,
    "predictedBandgapEV": 1.3811200000000032,
    "predictionStdEV": 1.0806525091813757,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2421",
    "formula": "NaAsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.353179999999999,
    "predictionStdEV": 1.080865850880673,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2422",
    "formula": "KHfO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.26618,
    "predictionStdEV": 1.0811414836181248,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2423",
    "formula": "Na2AlCuF6",
    "ggaBandgapEV": 0.2373,
    "predictedBandgapEV": 3.316560000000005,
    "predictionStdEV": 1.081147430464505,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2424",
    "formula": "KPO3",
    "ggaBandgapEV": 0.8334,
    "predictedBandgapEV": 3.1317599999999954,
    "predictionStdEV": 1.0816839198213133,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2425",
    "formula": "Cs2RbTaF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1873400000000016,
    "predictionStdEV": 1.0820979273614755,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2426",
    "formula": "Rb2NaPbF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3517499999999996,
    "predictionStdEV": 1.0822139287128028,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2427",
    "formula": "Ba2EuReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7917000000000012,
    "predictionStdEV": 1.0827716795335935,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2428",
    "formula": "Na2ScAuF6",
    "ggaBandgapEV": 1.0515,
    "predictedBandgapEV": 3.0975200000000007,
    "predictionStdEV": 1.0828130261499436,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2429",
    "formula": "Gd2NiPtO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4540900000000019,
    "predictionStdEV": 1.082940174663401,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2430",
    "formula": "Mn2FeReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.060280000000001,
    "predictionStdEV": 1.082963490428001,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2431",
    "formula": "BaOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.522520000000001,
    "predictionStdEV": 1.0831439191538677,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2432",
    "formula": "AlOF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.7119000000000026,
    "predictionStdEV": 1.0838288564159946,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2433",
    "formula": "SrWO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5197600000000022,
    "predictionStdEV": 1.0839242789051282,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2434",
    "formula": "SrInO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.756590000000001,
    "predictionStdEV": 1.084620773312036,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2435",
    "formula": "Ho2CoPtO6",
    "ggaBandgapEV": 0.9466,
    "predictedBandgapEV": 1.2112100000000017,
    "predictionStdEV": 1.0846503058128927,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2436",
    "formula": "Gd2NiRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5457000000000019,
    "predictionStdEV": 1.0854670930065098,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2437",
    "formula": "FeSO3",
    "ggaBandgapEV": 3.0662,
    "predictedBandgapEV": 2.9661999999999997,
    "predictionStdEV": 1.0856034771499197,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2438",
    "formula": "MgFeO3",
    "ggaBandgapEV": 0.1031,
    "predictedBandgapEV": 1.9845100000000069,
    "predictionStdEV": 1.0856159587533698,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2439",
    "formula": "EuMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8400499999999995,
    "predictionStdEV": 1.0857652819555426,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2440",
    "formula": "PmRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7742599999999997,
    "predictionStdEV": 1.0859353352755405,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2441",
    "formula": "Ca2TaNiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2595700000000019,
    "predictionStdEV": 1.086012967279859,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2442",
    "formula": "ZrTiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9956200000000026,
    "predictionStdEV": 1.0860851787958439,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2443",
    "formula": "LiRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.036169999999998,
    "predictionStdEV": 1.0871560518619199,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2444",
    "formula": "Na2CuBiF6",
    "ggaBandgapEV": 0.5465,
    "predictedBandgapEV": 2.7737299999999965,
    "predictionStdEV": 1.0875544294884745,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2445",
    "formula": "PrRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9172399999999996,
    "predictionStdEV": 1.0877848511539403,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2446",
    "formula": "Ba2MnTeO6",
    "ggaBandgapEV": 0.9487,
    "predictedBandgapEV": 2.58571,
    "predictionStdEV": 1.0882249978290328,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2447",
    "formula": "CaTlI3",
    "ggaBandgapEV": 3.2379,
    "predictedBandgapEV": 3.1378999999999997,
    "predictionStdEV": 1.0883621169445403,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2448",
    "formula": "Sr2CrSbO6",
    "ggaBandgapEV": 1.8579,
    "predictedBandgapEV": 3.3591100000000003,
    "predictionStdEV": 1.0892086383700779,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2449",
    "formula": "Cs2TaCuCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2864099999999983,
    "predictionStdEV": 1.0896663075914568,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2450",
    "formula": "Zn2CuIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8860099999999993,
    "predictionStdEV": 1.0903105199437455,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2451",
    "formula": "Ba2TlSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.99679,
    "predictionStdEV": 1.090584497368269,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2452",
    "formula": "RbCaI3",
    "ggaBandgapEV": 3.5948,
    "predictedBandgapEV": 3.4948,
    "predictionStdEV": 1.0907830836605439,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2453",
    "formula": "Pr2NiPtO6",
    "ggaBandgapEV": 0.0195,
    "predictedBandgapEV": 1.4372300000000007,
    "predictionStdEV": 1.0912002461051769,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2454",
    "formula": "BaWO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6208300000000024,
    "predictionStdEV": 1.092735997897021,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2455",
    "formula": "Rb2TaAgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.269869999999998,
    "predictionStdEV": 1.0929242119653142,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2456",
    "formula": "TlWO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4270299999999994,
    "predictionStdEV": 1.0929702324857709,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2457",
    "formula": "SrBiO3",
    "ggaBandgapEV": 0.3106,
    "predictedBandgapEV": 1.8287299999999957,
    "predictionStdEV": 1.0932339352124039,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2458",
    "formula": "NaMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0169399999999977,
    "predictionStdEV": 1.0934891569649885,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2459",
    "formula": "TiCdO3",
    "ggaBandgapEV": 2.1222,
    "predictedBandgapEV": 2.8122200000000004,
    "predictionStdEV": 1.093496077542118,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2460",
    "formula": "Cs2LiCeF6",
    "ggaBandgapEV": 0.6874,
    "predictedBandgapEV": 2.9517499999999974,
    "predictionStdEV": 1.0940682736922773,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2461",
    "formula": "Sr2VMoO6",
    "ggaBandgapEV": 1.2141,
    "predictedBandgapEV": 2.593209999999999,
    "predictionStdEV": 1.0941133149267461,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2462",
    "formula": "Na2RhAuF6",
    "ggaBandgapEV": 0.8379,
    "predictedBandgapEV": 2.897559999999998,
    "predictionStdEV": 1.0942094161539646,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2463",
    "formula": "TaAgO3",
    "ggaBandgapEV": 1.8015,
    "predictedBandgapEV": 2.5979899999999976,
    "predictionStdEV": 1.0944941342465009,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2464",
    "formula": "LaMoN3",
    "ggaBandgapEV": 0.9989,
    "predictedBandgapEV": 2.3278499999999975,
    "predictionStdEV": 1.0946932115894392,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2465",
    "formula": "MgCoO3",
    "ggaBandgapEV": 0.1653,
    "predictedBandgapEV": 1.424030000000005,
    "predictionStdEV": 1.0947062661280442,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2466",
    "formula": "K2InAuF6",
    "ggaBandgapEV": 0.4187,
    "predictedBandgapEV": 2.975189999999998,
    "predictionStdEV": 1.0947062683204112,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2467",
    "formula": "Ba2UCrO6",
    "ggaBandgapEV": 0.9559,
    "predictedBandgapEV": 2.779799999999999,
    "predictionStdEV": 1.0947084817429698,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2468",
    "formula": "EuSeO3",
    "ggaBandgapEV": 0.1233,
    "predictedBandgapEV": 2.383859999999995,
    "predictionStdEV": 1.0949557070493767,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2469",
    "formula": "Cs2NaCeF6",
    "ggaBandgapEV": 0.4573,
    "predictedBandgapEV": 2.9604499999999976,
    "predictionStdEV": 1.0950005696345557,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2470",
    "formula": "Cs2KCeF6",
    "ggaBandgapEV": 0.482,
    "predictedBandgapEV": 2.888869999999998,
    "predictionStdEV": 1.0951005310472632,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2471",
    "formula": "Sr2TiMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.828540000000001,
    "predictionStdEV": 1.095522372386797,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2472",
    "formula": "PaSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9846000000000021,
    "predictionStdEV": 1.0959198602087639,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2473",
    "formula": "Sr2YCrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0503200000000006,
    "predictionStdEV": 1.097047263156879,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2474",
    "formula": "MgOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4741600000000004,
    "predictionStdEV": 1.097325610017373,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2475",
    "formula": "HoSnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.005660000000003,
    "predictionStdEV": 1.0974194113464548,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2476",
    "formula": "Ba2DyMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0070500000000036,
    "predictionStdEV": 1.0979464228731728,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2477",
    "formula": "ZrWN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6165100000000001,
    "predictionStdEV": 1.0985118888296124,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2478",
    "formula": "CdTeO3",
    "ggaBandgapEV": 2.9734,
    "predictedBandgapEV": 3.2880400000000023,
    "predictionStdEV": 1.0989939755976825,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2479",
    "formula": "VNO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9158000000000013,
    "predictionStdEV": 1.0990140399467145,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2480",
    "formula": "YMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8003500000000012,
    "predictionStdEV": 1.0992966967566118,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2481",
    "formula": "Cs2NaTaCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.446870000000001,
    "predictionStdEV": 1.1001934162228018,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2482",
    "formula": "Cs2KTaF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2223200000000025,
    "predictionStdEV": 1.1006835229074712,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2483",
    "formula": "LaYbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.969500000000003,
    "predictionStdEV": 1.1006957118113985,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2484",
    "formula": "Ca2VMoO6",
    "ggaBandgapEV": 0.6882,
    "predictedBandgapEV": 2.608299999999998,
    "predictionStdEV": 1.1009694409928013,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2485",
    "formula": "Cs2LiTaCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.34713,
    "predictionStdEV": 1.1012623271046735,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2486",
    "formula": "Mg2TiSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.21671,
    "predictionStdEV": 1.1017793907584228,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2487",
    "formula": "SrTcN3",
    "ggaBandgapEV": 1.5638,
    "predictedBandgapEV": 2.515060000000001,
    "predictionStdEV": 1.1018227155037243,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2488",
    "formula": "LiBeH3",
    "ggaBandgapEV": 2.3832,
    "predictedBandgapEV": 2.5342800000000008,
    "predictionStdEV": 1.1018807928265195,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2489",
    "formula": "LuGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7679300000000004,
    "predictionStdEV": 1.1019039727217597,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2490",
    "formula": "Ba2GdMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9944700000000033,
    "predictionStdEV": 1.102172658479605,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2491",
    "formula": "KSbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.34908,
    "predictionStdEV": 1.1025468940593854,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2492",
    "formula": "MnTlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8257900000000005,
    "predictionStdEV": 1.1025895092463025,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2493",
    "formula": "Rb2NaTaBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.406080000000002,
    "predictionStdEV": 1.1026302796495293,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2494",
    "formula": "CeRhO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8368499999999994,
    "predictionStdEV": 1.1030853219493035,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2495",
    "formula": "BPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.47403,
    "predictionStdEV": 1.1031747862872867,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2496",
    "formula": "K2NaTaBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.424560000000002,
    "predictionStdEV": 1.103596351208176,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2497",
    "formula": "Ba2YbRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9707400000000026,
    "predictionStdEV": 1.1039671880993576,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2498",
    "formula": "ThMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6922100000000002,
    "predictionStdEV": 1.104007004461477,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2499",
    "formula": "Ba2TbWO6",
    "ggaBandgapEV": 1.7174,
    "predictedBandgapEV": 2.9404499999999945,
    "predictionStdEV": 1.1040170956556792,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2500",
    "formula": "Ba2CaIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.800420000000001,
    "predictionStdEV": 1.1041930644592897,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2501",
    "formula": "Dy2CoPtO6",
    "ggaBandgapEV": 0.9062,
    "predictedBandgapEV": 1.2046600000000014,
    "predictionStdEV": 1.1042223890140965,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2502",
    "formula": "Ba2CeTaO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0420400000000023,
    "predictionStdEV": 1.104450378423584,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2503",
    "formula": "CeTmO3",
    "ggaBandgapEV": 0.0291,
    "predictedBandgapEV": 2.2088500000000044,
    "predictionStdEV": 1.1046750325321926,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2504",
    "formula": "CaTcN3",
    "ggaBandgapEV": 1.5504,
    "predictedBandgapEV": 2.5944199999999995,
    "predictionStdEV": 1.104742759016777,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2505",
    "formula": "BTeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.30553,
    "predictionStdEV": 1.1068742788139951,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2506",
    "formula": "Sr2LuIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5530000000000013,
    "predictionStdEV": 1.1069294015428441,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2507",
    "formula": "YbTiO3",
    "ggaBandgapEV": 1.9649,
    "predictedBandgapEV": 3.112519999999999,
    "predictionStdEV": 1.1071482509582902,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2508",
    "formula": "InPF3",
    "ggaBandgapEV": 1.2527,
    "predictedBandgapEV": 3.075080000000004,
    "predictionStdEV": 1.1074577163937223,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2509",
    "formula": "AlSiP3",
    "ggaBandgapEV": 0.2886,
    "predictedBandgapEV": 2.280460000000001,
    "predictionStdEV": 1.1075390685659823,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2510",
    "formula": "Ba2EuMoO6",
    "ggaBandgapEV": 0.055,
    "predictedBandgapEV": 2.582669999999999,
    "predictionStdEV": 1.1075900961547105,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2511",
    "formula": "GeTeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.271240000000002,
    "predictionStdEV": 1.1076824736358346,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2512",
    "formula": "Ba2CePtO6",
    "ggaBandgapEV": 1.5239,
    "predictedBandgapEV": 2.697259999999996,
    "predictionStdEV": 1.1081705159405757,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2513",
    "formula": "Ca2TiRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9408299999999994,
    "predictionStdEV": 1.1082111085438546,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2514",
    "formula": "La2MnRhO6",
    "ggaBandgapEV": 0.3539,
    "predictedBandgapEV": 2.0110299999999954,
    "predictionStdEV": 1.1084819299835236,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2515",
    "formula": "Sr2LiReO6",
    "ggaBandgapEV": 1.7065,
    "predictedBandgapEV": 3.458769999999998,
    "predictionStdEV": 1.1090086731401152,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2516",
    "formula": "BaWN3",
    "ggaBandgapEV": 1.4868,
    "predictedBandgapEV": 2.207059999999998,
    "predictionStdEV": 1.109016571742732,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2517",
    "formula": "Ca2TaMnO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7871200000000007,
    "predictionStdEV": 1.1092094958122187,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2518",
    "formula": "USiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8939100000000015,
    "predictionStdEV": 1.1093935108427486,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2519",
    "formula": "CoSbO3",
    "ggaBandgapEV": 0.3011,
    "predictedBandgapEV": 1.3510900000000035,
    "predictionStdEV": 1.1095144261793084,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2520",
    "formula": "Ti2MnFeO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8123300000000064,
    "predictionStdEV": 1.109778275647889,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2521",
    "formula": "CsYbH3",
    "ggaBandgapEV": 3.3325,
    "predictedBandgapEV": 3.2325,
    "predictionStdEV": 1.1097884373158695,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2522",
    "formula": "Ba2SmReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7872100000000013,
    "predictionStdEV": 1.1101456507593954,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2523",
    "formula": "Cs2NbAuF6",
    "ggaBandgapEV": 0.1702,
    "predictedBandgapEV": 2.6168099999999965,
    "predictionStdEV": 1.1102034831056875,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2524",
    "formula": "RbNiCl3",
    "ggaBandgapEV": 0.7182,
    "predictedBandgapEV": 2.0396799999999993,
    "predictionStdEV": 1.1106241927853013,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2525",
    "formula": "ZnGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.639420000000005,
    "predictionStdEV": 1.1107850663382186,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2526",
    "formula": "Cs2NaTaBr6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.406420000000004,
    "predictionStdEV": 1.1108520529755523,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2527",
    "formula": "K2TaAgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.301889999999997,
    "predictionStdEV": 1.111061194489305,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2528",
    "formula": "Sr2CeIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6441900000000016,
    "predictionStdEV": 1.111269766483368,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2529",
    "formula": "KBeH3",
    "ggaBandgapEV": 3.1035,
    "predictedBandgapEV": 3.0035,
    "predictionStdEV": 1.1112895853016882,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2530",
    "formula": "INO3",
    "ggaBandgapEV": 1.6497,
    "predictedBandgapEV": 2.9385700000000012,
    "predictionStdEV": 1.1124817324792342,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2531",
    "formula": "Sm2MgPtO6",
    "ggaBandgapEV": 2.08,
    "predictedBandgapEV": 2.9162899999999987,
    "predictionStdEV": 1.1131155761644873,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2532",
    "formula": "TlTcO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7039200000000008,
    "predictionStdEV": 1.113273386729423,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2533",
    "formula": "Ba2HoMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0056600000000033,
    "predictionStdEV": 1.1134770156586076,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2534",
    "formula": "Zn2NiIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4993600000000014,
    "predictionStdEV": 1.113490633278968,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2535",
    "formula": "LiCaH3",
    "ggaBandgapEV": 2.5159,
    "predictedBandgapEV": 2.5333599999999983,
    "predictionStdEV": 1.113559477711001,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2536",
    "formula": "Ba2PrBiO6",
    "ggaBandgapEV": 1.9422,
    "predictedBandgapEV": 2.744499999999992,
    "predictionStdEV": 1.1136849868791454,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2537",
    "formula": "Rb2TaAgF6",
    "ggaBandgapEV": 0.3198,
    "predictedBandgapEV": 2.7365199999999956,
    "predictionStdEV": 1.113772413736308,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2538",
    "formula": "La2ReNiO6",
    "ggaBandgapEV": 0.3112,
    "predictedBandgapEV": 1.3242400000000003,
    "predictionStdEV": 1.114170777933077,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2539",
    "formula": "Mg2TaCuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7729699999999993,
    "predictionStdEV": 1.1145383928335533,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2540",
    "formula": "Sm2ZnPtO6",
    "ggaBandgapEV": 1.7036,
    "predictedBandgapEV": 2.6926299999999945,
    "predictionStdEV": 1.1146172137106083,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2541",
    "formula": "CsNiCl3",
    "ggaBandgapEV": 0.8174,
    "predictedBandgapEV": 2.0786199999999972,
    "predictionStdEV": 1.114637876442389,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2542",
    "formula": "Sm2NiRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5854800000000004,
    "predictionStdEV": 1.114639255364713,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2543",
    "formula": "ZrOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2846100000000005,
    "predictionStdEV": 1.114833932879692,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2544",
    "formula": "Eu2DyTaO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8174900000000007,
    "predictionStdEV": 1.1153372359515312,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2545",
    "formula": "MnClO3",
    "ggaBandgapEV": 2.0439,
    "predictedBandgapEV": 2.5808799999999943,
    "predictionStdEV": 1.115407381004805,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2546",
    "formula": "BaTaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8930900000000033,
    "predictionStdEV": 1.115458785388327,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2547",
    "formula": "Ba2LaRuO6",
    "ggaBandgapEV": 0.238,
    "predictedBandgapEV": 2.6869299999999985,
    "predictionStdEV": 1.1159956653589633,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2548",
    "formula": "NpSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9152900000000013,
    "predictionStdEV": 1.1172746600097927,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2549",
    "formula": "K2TlAgF6",
    "ggaBandgapEV": 0.4761,
    "predictedBandgapEV": 2.975769999999999,
    "predictionStdEV": 1.1174363772045373,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2550",
    "formula": "Na2AlHgCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.644900000000002,
    "predictionStdEV": 1.1176428275616495,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2551",
    "formula": "Rb2TiAuF6",
    "ggaBandgapEV": 0.0564,
    "predictedBandgapEV": 2.6945199999999976,
    "predictionStdEV": 1.1180844197107838,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2552",
    "formula": "RbIrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.778480000000001,
    "predictionStdEV": 1.1182963782468405,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2553",
    "formula": "Ba2NbCoO6",
    "ggaBandgapEV": 1.5346,
    "predictedBandgapEV": 1.4948400000000022,
    "predictionStdEV": 1.1185318387958376,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2554",
    "formula": "K2GaAuF6",
    "ggaBandgapEV": 0.6783,
    "predictedBandgapEV": 3.0301799999999974,
    "predictionStdEV": 1.119436852886306,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2555",
    "formula": "Ca2CuSbO6",
    "ggaBandgapEV": 0.3382,
    "predictedBandgapEV": 3.0923400000000028,
    "predictionStdEV": 1.120742755675895,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2556",
    "formula": "BeGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5809400000000045,
    "predictionStdEV": 1.1207953053077993,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2557",
    "formula": "Zn2SbMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.20218,
    "predictionStdEV": 1.120976425978707,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2558",
    "formula": "CrWO3",
    "ggaBandgapEV": 0.8932,
    "predictedBandgapEV": 2.3931699999999982,
    "predictionStdEV": 1.1213867758717315,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2559",
    "formula": "ZrHgO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5791800000000007,
    "predictionStdEV": 1.121457768977503,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2560",
    "formula": "Zn2FeIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.0746100000000016,
    "predictionStdEV": 1.1216135243032694,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2561",
    "formula": "Cs2TaAgF6",
    "ggaBandgapEV": 0.3133,
    "predictedBandgapEV": 2.6418999999999953,
    "predictionStdEV": 1.1218575622600224,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2562",
    "formula": "Sr2TbIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6292600000000004,
    "predictionStdEV": 1.1225989722069054,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2563",
    "formula": "Ba2UMnO6",
    "ggaBandgapEV": 1.0552,
    "predictedBandgapEV": 2.465639999999999,
    "predictionStdEV": 1.1226383613613051,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2564",
    "formula": "Zn2CrIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8751399999999994,
    "predictionStdEV": 1.122654345914184,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2565",
    "formula": "Eu2HoTaO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8724800000000008,
    "predictionStdEV": 1.122686443135392,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2566",
    "formula": "Mg2TaTiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8370200000000014,
    "predictionStdEV": 1.122731900143574,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2567",
    "formula": "Rb2NaTaCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.487260000000001,
    "predictionStdEV": 1.1230707869052612,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2568",
    "formula": "CsPaO3",
    "ggaBandgapEV": 3.0169,
    "predictedBandgapEV": 3.2785399999999973,
    "predictionStdEV": 1.1231525579368091,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2569",
    "formula": "Ti2MnZnO6",
    "ggaBandgapEV": 2.3043,
    "predictedBandgapEV": 2.7282599999999952,
    "predictionStdEV": 1.1234986303507444,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2570",
    "formula": "Zn2NiSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.052119999999999,
    "predictionStdEV": 1.123504430609866,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2571",
    "formula": "Rb2NbAuF6",
    "ggaBandgapEV": 0.1593,
    "predictedBandgapEV": 2.691309999999998,
    "predictionStdEV": 1.123806849018105,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2572",
    "formula": "SnCCl3",
    "ggaBandgapEV": 0.8074,
    "predictedBandgapEV": 2.681399999999999,
    "predictionStdEV": 1.1238159279882098,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2573",
    "formula": "Na2TaAuF6",
    "ggaBandgapEV": 1.1919,
    "predictedBandgapEV": 3.0547599999999977,
    "predictionStdEV": 1.1245887881354677,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2574",
    "formula": "Ba2PuTaO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7695500000000022,
    "predictionStdEV": 1.1246133324391996,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2575",
    "formula": "KZrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5825,
    "predictionStdEV": 1.1248302760861295,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2576",
    "formula": "K2NaTaI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2229300000000003,
    "predictionStdEV": 1.125003495594569,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2577",
    "formula": "SrLiH3",
    "ggaBandgapEV": 2.1487,
    "predictedBandgapEV": 2.407739999999998,
    "predictionStdEV": 1.1252547233404515,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2578",
    "formula": "La2NbCrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8956999999999995,
    "predictionStdEV": 1.1256034870237377,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2579",
    "formula": "Cs2NaTaI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.260590000000002,
    "predictionStdEV": 1.1257579233121127,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2580",
    "formula": "NpRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7556900000000006,
    "predictionStdEV": 1.1264100380855977,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2581",
    "formula": "Ba2NiOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.217770000000001,
    "predictionStdEV": 1.1264326775711018,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2582",
    "formula": "Ba2LuIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.615070000000002,
    "predictionStdEV": 1.1265531701167042,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2583",
    "formula": "Ba2NbBiO6",
    "ggaBandgapEV": 2.1946,
    "predictedBandgapEV": 3.136249999999998,
    "predictionStdEV": 1.127519839071578,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2584",
    "formula": "Ba2YbTaO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0107600000000017,
    "predictionStdEV": 1.127807351634133,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2585",
    "formula": "Ca2AgSbO6",
    "ggaBandgapEV": 0.5704,
    "predictedBandgapEV": 3.1891100000000043,
    "predictionStdEV": 1.1279044542424668,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2586",
    "formula": "Ca2VSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0828599999999997,
    "predictionStdEV": 1.1280141490247364,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2587",
    "formula": "SrTaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7830700000000026,
    "predictionStdEV": 1.128185988700445,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2588",
    "formula": "Li2CuIrF6",
    "ggaBandgapEV": 0.8048,
    "predictedBandgapEV": 2.829839999999996,
    "predictionStdEV": 1.1285510951658335,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2589",
    "formula": "Ba2NdBiO6",
    "ggaBandgapEV": 1.8717,
    "predictedBandgapEV": 2.7461599999999913,
    "predictionStdEV": 1.1286265788116088,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2590",
    "formula": "Ba2ErMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0137600000000035,
    "predictionStdEV": 1.1286492645636204,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2591",
    "formula": "CaGeO3",
    "ggaBandgapEV": 0.5743,
    "predictedBandgapEV": 3.49578000000001,
    "predictionStdEV": 1.1288901592271932,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2592",
    "formula": "HoGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9917500000000012,
    "predictionStdEV": 1.1289266085534522,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2593",
    "formula": "Pr2ZnPtO6",
    "ggaBandgapEV": 1.6651,
    "predictedBandgapEV": 2.676769999999995,
    "predictionStdEV": 1.1294049836528963,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2594",
    "formula": "BeSiO3",
    "ggaBandgapEV": 0.4142,
    "predictedBandgapEV": 3.301580000000008,
    "predictionStdEV": 1.1302336500033956,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2595",
    "formula": "Sr2CaIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7488400000000004,
    "predictionStdEV": 1.130296666543788,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2596",
    "formula": "Ca2NiOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.195340000000001,
    "predictionStdEV": 1.1303074733894312,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2597",
    "formula": "Zn2SnIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0278700000000005,
    "predictionStdEV": 1.1304739771883288,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2598",
    "formula": "ScWN3",
    "ggaBandgapEV": 1.2406,
    "predictedBandgapEV": 2.15385,
    "predictionStdEV": 1.1306917473387699,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2599",
    "formula": "La2TiMnO6",
    "ggaBandgapEV": 2.1709,
    "predictedBandgapEV": 2.179319999999996,
    "predictionStdEV": 1.1310202198015749,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2600",
    "formula": "Sr2UMnO6",
    "ggaBandgapEV": 0.6798,
    "predictedBandgapEV": 2.3256599999999996,
    "predictionStdEV": 1.1314703992593,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2601",
    "formula": "YWN3",
    "ggaBandgapEV": 1.7779,
    "predictedBandgapEV": 2.1792399999999987,
    "predictionStdEV": 1.131512979333423,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2602",
    "formula": "Eu2TmTaO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8669700000000007,
    "predictionStdEV": 1.1315331498016312,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2603",
    "formula": "Zn2SbWO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8533000000000006,
    "predictionStdEV": 1.1318723028681297,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2604",
    "formula": "Rb2LiTaCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3682399999999992,
    "predictionStdEV": 1.132086216858063,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2605",
    "formula": "Rb2NaTaI6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.212990000000001,
    "predictionStdEV": 1.1321217734413564,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2606",
    "formula": "Rb2NaCeF6",
    "ggaBandgapEV": 0.2806,
    "predictedBandgapEV": 2.961329999999998,
    "predictionStdEV": 1.1324233665462762,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2607",
    "formula": "Ba2UCdO6",
    "ggaBandgapEV": 1.8841,
    "predictedBandgapEV": 2.839329999999997,
    "predictionStdEV": 1.1325880103108983,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2608",
    "formula": "Ba2YRuO6",
    "ggaBandgapEV": 0.1063,
    "predictedBandgapEV": 2.651769999999999,
    "predictionStdEV": 1.132685224190729,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2609",
    "formula": "Mg2CuIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7850699999999993,
    "predictionStdEV": 1.1328802430530769,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2610",
    "formula": "GaTeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.236680000000002,
    "predictionStdEV": 1.1331750869128754,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2611",
    "formula": "NpMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7651900000000005,
    "predictionStdEV": 1.1332421691324408,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2612",
    "formula": "Sm2VFeO6",
    "ggaBandgapEV": 1.3222,
    "predictedBandgapEV": 1.6735799999999925,
    "predictionStdEV": 1.1337079798607765,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2613",
    "formula": "Ba2UGeO6",
    "ggaBandgapEV": 0.6344,
    "predictedBandgapEV": 2.593729999999996,
    "predictionStdEV": 1.1337854457965124,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2614",
    "formula": "ThSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.892740000000001,
    "predictionStdEV": 1.134316222400086,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2615",
    "formula": "Ba2CdReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6752900000000017,
    "predictionStdEV": 1.1345383933124502,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2616",
    "formula": "Rb2LiCeF6",
    "ggaBandgapEV": 0.7089,
    "predictedBandgapEV": 2.9928299999999965,
    "predictionStdEV": 1.1352205253165584,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2617",
    "formula": "RbPO3",
    "ggaBandgapEV": 0.2343,
    "predictedBandgapEV": 2.930169999999997,
    "predictionStdEV": 1.1352402922289178,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2618",
    "formula": "Ba2TbReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7882700000000016,
    "predictionStdEV": 1.1357203252121537,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2619",
    "formula": "BaLiH3",
    "ggaBandgapEV": 2.5084,
    "predictedBandgapEV": 2.5474799999999984,
    "predictionStdEV": 1.1360929757726717,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2620",
    "formula": "Zn2SnSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.7278600000000064,
    "predictionStdEV": 1.1361874935062442,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2621",
    "formula": "KNiCl3",
    "ggaBandgapEV": 0.6991,
    "predictedBandgapEV": 2.051169999999999,
    "predictionStdEV": 1.1364072250298307,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2622",
    "formula": "HgAsO3",
    "ggaBandgapEV": 1.6293,
    "predictedBandgapEV": 2.5153599999999954,
    "predictionStdEV": 1.1365032205849657,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2623",
    "formula": "Mg2CrIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.770970000000001,
    "predictionStdEV": 1.1368360519881475,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2624",
    "formula": "Ba2DyReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7849000000000017,
    "predictionStdEV": 1.137051313705762,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2625",
    "formula": "LaTaN3",
    "ggaBandgapEV": 0.5216,
    "predictedBandgapEV": 1.9473199999999977,
    "predictionStdEV": 1.1375108428494198,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2626",
    "formula": "DySnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9754800000000028,
    "predictionStdEV": 1.1379618489211327,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2627",
    "formula": "SnPO3",
    "ggaBandgapEV": 0.6786,
    "predictedBandgapEV": 2.9597199999999995,
    "predictionStdEV": 1.1380131464970002,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2628",
    "formula": "SrWN3",
    "ggaBandgapEV": 1.0807,
    "predictedBandgapEV": 2.0595199999999982,
    "predictionStdEV": 1.1381184778396316,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2629",
    "formula": "Ba2PuZnO6",
    "ggaBandgapEV": 0.6604,
    "predictedBandgapEV": 2.28418,
    "predictionStdEV": 1.1390783237337097,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2630",
    "formula": "TmSeO3",
    "ggaBandgapEV": 1.8238,
    "predictedBandgapEV": 2.707589999999999,
    "predictionStdEV": 1.1391917493995471,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2631",
    "formula": "Ba2HoReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7853600000000016,
    "predictionStdEV": 1.139364195681082,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2632",
    "formula": "Cs2AlGaH6",
    "ggaBandgapEV": 1.0708,
    "predictedBandgapEV": 2.7890200000000007,
    "predictionStdEV": 1.1401086086860315,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2633",
    "formula": "Ti2MnNiO6",
    "ggaBandgapEV": 2.2455,
    "predictedBandgapEV": 2.2055499999999952,
    "predictionStdEV": 1.1401127345574202,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2634",
    "formula": "InOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6070200000000003,
    "predictionStdEV": 1.1402574356696829,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2635",
    "formula": "Nd2ZnPtO6",
    "ggaBandgapEV": 1.7004,
    "predictedBandgapEV": 2.691589999999996,
    "predictionStdEV": 1.1403807793452152,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2636",
    "formula": "K2NaTaCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5248000000000017,
    "predictionStdEV": 1.1405694454964144,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2637",
    "formula": "Ba2YbUO6",
    "ggaBandgapEV": 2.1708,
    "predictedBandgapEV": 3.237819999999994,
    "predictionStdEV": 1.1409143033549887,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2638",
    "formula": "KCaH3",
    "ggaBandgapEV": 3.3241,
    "predictedBandgapEV": 3.2241,
    "predictionStdEV": 1.1409173605480822,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2639",
    "formula": "RbPaO3",
    "ggaBandgapEV": 3.2138,
    "predictedBandgapEV": 3.3097199999999973,
    "predictionStdEV": 1.1413740498189018,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2640",
    "formula": "Mg2SbWO6",
    "ggaBandgapEV": 2.7126,
    "predictedBandgapEV": 3.4276700000000044,
    "predictionStdEV": 1.1414165852571092,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2641",
    "formula": "NaCaH3",
    "ggaBandgapEV": 3.3367,
    "predictedBandgapEV": 3.2367,
    "predictionStdEV": 1.1422041365710411,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2642",
    "formula": "Sr2UFeO6",
    "ggaBandgapEV": 1.1307,
    "predictedBandgapEV": 1.1737599999999992,
    "predictionStdEV": 1.1422090274551313,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2643",
    "formula": "BiRhO3",
    "ggaBandgapEV": 0.3794,
    "predictedBandgapEV": 1.8623099999999992,
    "predictionStdEV": 1.1426394505267172,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2644",
    "formula": "K2TaAgF6",
    "ggaBandgapEV": 0.3172,
    "predictedBandgapEV": 2.8016499999999946,
    "predictionStdEV": 1.14333565828238,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2645",
    "formula": "TiTeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.929780000000001,
    "predictionStdEV": 1.1434201990519488,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2646",
    "formula": "La2ZnIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4243900000000012,
    "predictionStdEV": 1.1436438597308185,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2647",
    "formula": "Ba2ErReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7883300000000024,
    "predictionStdEV": 1.1441555668264691,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2648",
    "formula": "Rb2InHgF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.33501,
    "predictionStdEV": 1.1443105565798122,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2649",
    "formula": "YbScO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1806900000000042,
    "predictionStdEV": 1.144906054617584,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2650",
    "formula": "Sr2MnMoO6",
    "ggaBandgapEV": 1.2193,
    "predictedBandgapEV": 2.382129999999998,
    "predictionStdEV": 1.1452162735047051,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2651",
    "formula": "PrTlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7913899999999998,
    "predictionStdEV": 1.145221602092801,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2652",
    "formula": "Ba2UZnO6",
    "ggaBandgapEV": 1.8086,
    "predictedBandgapEV": 2.8696499999999983,
    "predictionStdEV": 1.145261248580427,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2653",
    "formula": "Mg2SnWO6",
    "ggaBandgapEV": 2.2892,
    "predictedBandgapEV": 3.4553100000000043,
    "predictionStdEV": 1.1455567440768704,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2654",
    "formula": "LuSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0711699999999995,
    "predictionStdEV": 1.1471158969781559,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2655",
    "formula": "Ba2TmMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0100800000000034,
    "predictionStdEV": 1.1474026292457247,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2656",
    "formula": "ZnSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.680660000000007,
    "predictionStdEV": 1.1475184374989362,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2657",
    "formula": "Ba2HoRuO6",
    "ggaBandgapEV": 0.0919,
    "predictedBandgapEV": 2.582909999999998,
    "predictionStdEV": 1.149033890666417,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2658",
    "formula": "LaRuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7002700000000022,
    "predictionStdEV": 1.1491934028265212,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2659",
    "formula": "DySeO3",
    "ggaBandgapEV": 1.7962,
    "predictedBandgapEV": 2.6623499999999987,
    "predictionStdEV": 1.1493016694932614,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2660",
    "formula": "Ba2YbReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7749200000000023,
    "predictionStdEV": 1.1495370344621356,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2661",
    "formula": "NaMgH3",
    "ggaBandgapEV": 3.3726,
    "predictedBandgapEV": 3.2725999999999997,
    "predictionStdEV": 1.1498082224440742,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2662",
    "formula": "ZrMoN3",
    "ggaBandgapEV": 0.0304,
    "predictedBandgapEV": 2.0453800000000006,
    "predictionStdEV": 1.1499422401146937,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2663",
    "formula": "ThTaN3",
    "ggaBandgapEV": 0.4422,
    "predictedBandgapEV": 1.8175499999999978,
    "predictionStdEV": 1.1507080200902413,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2664",
    "formula": "Sr2TaVO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7549200000000014,
    "predictionStdEV": 1.1509960441287372,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2665",
    "formula": "Sr2UCrO6",
    "ggaBandgapEV": 0.9965,
    "predictedBandgapEV": 2.81758,
    "predictionStdEV": 1.1510672628478318,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2666",
    "formula": "K2RbTaF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2699600000000006,
    "predictionStdEV": 1.1516188598664043,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2667",
    "formula": "Nd2MgPtO6",
    "ggaBandgapEV": 2.0682,
    "predictedBandgapEV": 2.905639999999999,
    "predictionStdEV": 1.1517812684707118,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2668",
    "formula": "Mg2AgWO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7301500000000007,
    "predictionStdEV": 1.1521375037294823,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2669",
    "formula": "Mg2SbMoO6",
    "ggaBandgapEV": 0.6537,
    "predictedBandgapEV": 2.7857400000000014,
    "predictionStdEV": 1.1528437675591605,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2670",
    "formula": "BaReN3",
    "ggaBandgapEV": 1.8285,
    "predictedBandgapEV": 2.3658499999999987,
    "predictionStdEV": 1.1528511731789146,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2671",
    "formula": "Sr2YbRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8845000000000003,
    "predictionStdEV": 1.1530517984895559,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2672",
    "formula": "Ba2GdReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.778440000000001,
    "predictionStdEV": 1.1533620274657923,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2673",
    "formula": "KIrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8464800000000017,
    "predictionStdEV": 1.1534655649823273,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2674",
    "formula": "CdSO3",
    "ggaBandgapEV": 3.2216,
    "predictedBandgapEV": 3.4609400000000066,
    "predictionStdEV": 1.1538863533294774,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2675",
    "formula": "RbBeH3",
    "ggaBandgapEV": 3.3515,
    "predictedBandgapEV": 3.2515,
    "predictionStdEV": 1.1540467623107824,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2676",
    "formula": "K2LiTaCl6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.40274,
    "predictionStdEV": 1.1545327160370995,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2677",
    "formula": "Mg2MnSbO6",
    "ggaBandgapEV": 1.0825,
    "predictedBandgapEV": 2.756590000000001,
    "predictionStdEV": 1.1546338908502558,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2678",
    "formula": "BeNF3",
    "ggaBandgapEV": 2.6792,
    "predictedBandgapEV": 3.264880000000002,
    "predictionStdEV": 1.1546745799574878,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2679",
    "formula": "BrNO3",
    "ggaBandgapEV": 2.5676,
    "predictedBandgapEV": 3.221480000000005,
    "predictionStdEV": 1.15498926817525,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2680",
    "formula": "Mg2TaMoO6",
    "ggaBandgapEV": 1.8233,
    "predictedBandgapEV": 3.0083700000000015,
    "predictionStdEV": 1.1551733606260133,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2681",
    "formula": "Ba2YMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0414800000000044,
    "predictionStdEV": 1.1557824231229685,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2682",
    "formula": "Ba2InBiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9108899999999993,
    "predictionStdEV": 1.1559493318913237,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2683",
    "formula": "Sr2YbReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6834300000000018,
    "predictionStdEV": 1.1560581235820266,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2684",
    "formula": "Mg2TaFeO6",
    "ggaBandgapEV": 1.6839,
    "predictedBandgapEV": 1.5838999999999999,
    "predictionStdEV": 1.1562427831558575,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2685",
    "formula": "KPaO3",
    "ggaBandgapEV": 3.2738,
    "predictedBandgapEV": 3.4586799999999975,
    "predictionStdEV": 1.156509514703619,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2686",
    "formula": "NaCO3",
    "ggaBandgapEV": 0.6661,
    "predictedBandgapEV": 3.0484,
    "predictionStdEV": 1.156734904807492,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2687",
    "formula": "Mg2TaVO6",
    "ggaBandgapEV": 1.4812,
    "predictedBandgapEV": 2.6926099999999993,
    "predictionStdEV": 1.156888991174176,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2688",
    "formula": "K2NbAuF6",
    "ggaBandgapEV": 0.1706,
    "predictedBandgapEV": 2.7597699999999956,
    "predictionStdEV": 1.1569751497331302,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2689",
    "formula": "Zn2CrWO6",
    "ggaBandgapEV": 1.8015,
    "predictedBandgapEV": 2.8444800000000003,
    "predictionStdEV": 1.157829404359727,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2690",
    "formula": "TlCoCl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.3721500000000055,
    "predictionStdEV": 1.157846892943967,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2691",
    "formula": "Zn2MoWO6",
    "ggaBandgapEV": 1.6804,
    "predictedBandgapEV": 2.6892199999999993,
    "predictionStdEV": 1.1582249313496913,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2692",
    "formula": "Sr2ErRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9217399999999998,
    "predictionStdEV": 1.1583063378916656,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2693",
    "formula": "KAlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.929560000000003,
    "predictionStdEV": 1.1584077893384521,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2694",
    "formula": "La2ZnRhO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7707100000000022,
    "predictionStdEV": 1.1587658287592004,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2695",
    "formula": "Zn2IrWO6",
    "ggaBandgapEV": 0.9651,
    "predictedBandgapEV": 2.19904,
    "predictionStdEV": 1.1589995161344973,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2696",
    "formula": "HoSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2463399999999987,
    "predictionStdEV": 1.1590908525219241,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2697",
    "formula": "TbGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0635800000000013,
    "predictionStdEV": 1.159341918331259,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2698",
    "formula": "La2MgRhO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7835500000000026,
    "predictionStdEV": 1.1594148728992577,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2699",
    "formula": "Rb2AlTlH6",
    "ggaBandgapEV": 1.0396,
    "predictedBandgapEV": 2.3920399999999984,
    "predictionStdEV": 1.159756801402778,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2700",
    "formula": "Cs2AlTlH6",
    "ggaBandgapEV": 1.3568,
    "predictedBandgapEV": 2.4824599999999983,
    "predictionStdEV": 1.160356388528973,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2701",
    "formula": "Sr2YbNbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0913500000000003,
    "predictionStdEV": 1.1611071559076722,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2702",
    "formula": "Ho2MnNiO6",
    "ggaBandgapEV": 1.8799,
    "predictedBandgapEV": 1.9991599999999947,
    "predictionStdEV": 1.1617005614184759,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2703",
    "formula": "La2MgIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.4621900000000008,
    "predictionStdEV": 1.162376855370064,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2704",
    "formula": "Pr2MgPtO6",
    "ggaBandgapEV": 2.0528,
    "predictedBandgapEV": 2.8729199999999984,
    "predictionStdEV": 1.1630443558179553,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2705",
    "formula": "K2TlPdF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3751800000000003,
    "predictionStdEV": 1.1631237542067474,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2706",
    "formula": "Ca2TiSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1916799999999985,
    "predictionStdEV": 1.163292000144419,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2707",
    "formula": "Mn2FeSbO6",
    "ggaBandgapEV": 1.2977,
    "predictedBandgapEV": 1.6047600000000033,
    "predictionStdEV": 1.1633628593005707,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2708",
    "formula": "YbInO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0879300000000005,
    "predictionStdEV": 1.1633798885574733,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2709",
    "formula": "Sr2GdRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9106000000000016,
    "predictionStdEV": 1.1635325264039686,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2710",
    "formula": "Ba2CdOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6624100000000013,
    "predictionStdEV": 1.1636118948773269,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2711",
    "formula": "Ba2CePbO6",
    "ggaBandgapEV": 2.3311,
    "predictedBandgapEV": 2.8709199999999924,
    "predictionStdEV": 1.1639566373366323,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2712",
    "formula": "CsOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7440400000000011,
    "predictionStdEV": 1.1639863738034064,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2713",
    "formula": "InAsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3201600000000004,
    "predictionStdEV": 1.1648692520622228,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2714",
    "formula": "SbOF3",
    "ggaBandgapEV": 1.4817,
    "predictedBandgapEV": 2.934620000000003,
    "predictionStdEV": 1.1656651558659552,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2715",
    "formula": "CsBeH3",
    "ggaBandgapEV": 3.3425,
    "predictedBandgapEV": 3.2424999999999997,
    "predictionStdEV": 1.16580627189941,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2716",
    "formula": "Ba2ErRuO6",
    "ggaBandgapEV": 0.0875,
    "predictedBandgapEV": 2.6005299999999982,
    "predictionStdEV": 1.1663269134766636,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2717",
    "formula": "MnGeO3",
    "ggaBandgapEV": 1.1052,
    "predictedBandgapEV": 2.6400599999999987,
    "predictionStdEV": 1.1663410292020087,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2718",
    "formula": "GaGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.466780000000001,
    "predictionStdEV": 1.16635630559448,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2719",
    "formula": "La2CuIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.537100000000001,
    "predictionStdEV": 1.1664835575352104,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2720",
    "formula": "Mg2CrWO6",
    "ggaBandgapEV": 1.8177,
    "predictedBandgapEV": 2.9475000000000007,
    "predictionStdEV": 1.1674266358105765,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2721",
    "formula": "Ca2NiSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7725400000000013,
    "predictionStdEV": 1.1678855031209168,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2722",
    "formula": "Ba2ZnOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7269800000000024,
    "predictionStdEV": 1.1687753760239799,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2723",
    "formula": "K2LiTaF6",
    "ggaBandgapEV": 0.3299,
    "predictedBandgapEV": 2.894789999999996,
    "predictionStdEV": 1.169201567694809,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2724",
    "formula": "Ba2BiRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7296699999999996,
    "predictionStdEV": 1.1697110930054504,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2725",
    "formula": "RbReO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8459500000000022,
    "predictionStdEV": 1.1698750136232503,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2726",
    "formula": "NaFeF3",
    "ggaBandgapEV": 2.2672,
    "predictedBandgapEV": 2.1672,
    "predictionStdEV": 1.169924936865608,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2727",
    "formula": "LiAlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.955680000000003,
    "predictionStdEV": 1.1703687186523744,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2728",
    "formula": "TlNiCl3",
    "ggaBandgapEV": 0.5729,
    "predictedBandgapEV": 2.068650000000004,
    "predictionStdEV": 1.1703993025886499,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2729",
    "formula": "Ba2ZnReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.712120000000003,
    "predictionStdEV": 1.1704165948926057,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2730",
    "formula": "SrReN3",
    "ggaBandgapEV": 2.0124,
    "predictedBandgapEV": 2.365479999999999,
    "predictionStdEV": 1.1704885175002768,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2731",
    "formula": "Mg2MoWO6",
    "ggaBandgapEV": 1.8446,
    "predictedBandgapEV": 2.89625,
    "predictionStdEV": 1.170860959935039,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2732",
    "formula": "Mg2TaMnO6",
    "ggaBandgapEV": 1.0133,
    "predictedBandgapEV": 2.294399999999996,
    "predictionStdEV": 1.1709995900938672,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2733",
    "formula": "RbAlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.858320000000004,
    "predictionStdEV": 1.171019204624758,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2734",
    "formula": "Mg2VWO6",
    "ggaBandgapEV": 1.8851,
    "predictedBandgapEV": 2.7374400000000003,
    "predictionStdEV": 1.1710602232165528,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2735",
    "formula": "TlNiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5713800000000033,
    "predictionStdEV": 1.1710642149771286,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2736",
    "formula": "CsUO3",
    "ggaBandgapEV": 0.5027,
    "predictedBandgapEV": 2.671389999999997,
    "predictionStdEV": 1.1715958850644699,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2737",
    "formula": "Ba2TbBiO6",
    "ggaBandgapEV": 1.8275,
    "predictedBandgapEV": 2.756019999999991,
    "predictionStdEV": 1.172433818857168,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2738",
    "formula": "Dy2CrFeO6",
    "ggaBandgapEV": 2.2669,
    "predictedBandgapEV": 2.1669,
    "predictionStdEV": 1.1724436792869841,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2739",
    "formula": "GdZrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.083220000000005,
    "predictionStdEV": 1.17252114334881,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2740",
    "formula": "ErTlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.745929999999999,
    "predictionStdEV": 1.1727989107685937,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2741",
    "formula": "TbSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.25892,
    "predictionStdEV": 1.1728945534872253,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2742",
    "formula": "TlCoF3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2687000000000044,
    "predictionStdEV": 1.1730062276049509,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2743",
    "formula": "ZrCrO3",
    "ggaBandgapEV": 1.3886,
    "predictedBandgapEV": 3.019000000000003,
    "predictionStdEV": 1.1735666150670787,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2744",
    "formula": "CsCaH3",
    "ggaBandgapEV": 3.4935,
    "predictedBandgapEV": 3.3935,
    "predictionStdEV": 1.1739682235904014,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2745",
    "formula": "RbBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.682530000000003,
    "predictionStdEV": 1.1742077963886979,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2746",
    "formula": "TlBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7852500000000011,
    "predictionStdEV": 1.174606907650383,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2747",
    "formula": "FeCO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.326280000000003,
    "predictionStdEV": 1.17475944839784,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2748",
    "formula": "CrGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3774900000000008,
    "predictionStdEV": 1.1748913779154224,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2749",
    "formula": "SiSnO3",
    "ggaBandgapEV": 1.0352,
    "predictedBandgapEV": 3.238060000000007,
    "predictionStdEV": 1.1749628234118739,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2750",
    "formula": "Tb2MnNiO6",
    "ggaBandgapEV": 1.9445,
    "predictedBandgapEV": 1.9878399999999978,
    "predictionStdEV": 1.175446312853123,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2751",
    "formula": "Ba2TmReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8060900000000022,
    "predictionStdEV": 1.1769359633811871,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2752",
    "formula": "BAuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.037890000000001,
    "predictionStdEV": 1.1770081978898863,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2753",
    "formula": "Ba2MgUO6",
    "ggaBandgapEV": 2.0589,
    "predictedBandgapEV": 3.3205799999999948,
    "predictionStdEV": 1.1774945705182678,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2754",
    "formula": "MgBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6495100000000043,
    "predictionStdEV": 1.1777637326306165,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2755",
    "formula": "RbCaH3",
    "ggaBandgapEV": 3.5765,
    "predictedBandgapEV": 3.4764999999999997,
    "predictionStdEV": 1.178180735880536,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2756",
    "formula": "Na2AlAuF6",
    "ggaBandgapEV": 0.9055,
    "predictedBandgapEV": 3.2401600000000035,
    "predictionStdEV": 1.1788897634639128,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2757",
    "formula": "RbOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.734610000000001,
    "predictionStdEV": 1.1790643739423246,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2758",
    "formula": "Sr2TbReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7378400000000014,
    "predictionStdEV": 1.1791166330774907,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2759",
    "formula": "Ba2PuTiO6",
    "ggaBandgapEV": 0.2462,
    "predictedBandgapEV": 2.3615700000000013,
    "predictionStdEV": 1.1791455317729023,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2760",
    "formula": "TeCF3",
    "ggaBandgapEV": 2.5076,
    "predictedBandgapEV": 3.0627200000000023,
    "predictionStdEV": 1.1793679670060582,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2761",
    "formula": "Ba2DyBiO6",
    "ggaBandgapEV": 1.735,
    "predictedBandgapEV": 2.736519999999991,
    "predictionStdEV": 1.1794185811661624,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2762",
    "formula": "Zn2SnWO6",
    "ggaBandgapEV": 2.1632,
    "predictedBandgapEV": 3.179260000000004,
    "predictionStdEV": 1.1801984377213872,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2763",
    "formula": "Na2GaAuF6",
    "ggaBandgapEV": 0.3061,
    "predictedBandgapEV": 3.031420000000001,
    "predictionStdEV": 1.1803850149845188,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2764",
    "formula": "CsFeF3",
    "ggaBandgapEV": 3.4247,
    "predictedBandgapEV": 3.3247,
    "predictionStdEV": 1.1803999976279225,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2765",
    "formula": "KCO3",
    "ggaBandgapEV": 0.0964,
    "predictedBandgapEV": 2.9251400000000007,
    "predictionStdEV": 1.180808147160241,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2766",
    "formula": "Gd2MgPtO6",
    "ggaBandgapEV": 2.0334,
    "predictedBandgapEV": 2.7682100000000016,
    "predictionStdEV": 1.1808931560052334,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2767",
    "formula": "BeBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.629450000000003,
    "predictionStdEV": 1.181178711076356,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2768",
    "formula": "RbUO3",
    "ggaBandgapEV": 0.5077,
    "predictedBandgapEV": 2.674289999999996,
    "predictionStdEV": 1.1814842554600535,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2769",
    "formula": "CaReN3",
    "ggaBandgapEV": 1.81,
    "predictedBandgapEV": 2.4442600000000003,
    "predictionStdEV": 1.182091896766068,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2770",
    "formula": "TlCdBr3",
    "ggaBandgapEV": 2.9081,
    "predictedBandgapEV": 2.8081,
    "predictionStdEV": 1.182331197423126,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2771",
    "formula": "Ca2MoWO6",
    "ggaBandgapEV": 1.8178,
    "predictedBandgapEV": 3.2005,
    "predictionStdEV": 1.1831008198796928,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2772",
    "formula": "WOF3",
    "ggaBandgapEV": 2.3593,
    "predictedBandgapEV": 2.8193100000000006,
    "predictionStdEV": 1.1833430922179766,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2773",
    "formula": "Na2TaAgF6",
    "ggaBandgapEV": 0.2887,
    "predictedBandgapEV": 2.911859999999997,
    "predictionStdEV": 1.1835902755599177,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2774",
    "formula": "EuGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.08795,
    "predictionStdEV": 1.183593108927218,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2775",
    "formula": "YbSnO3",
    "ggaBandgapEV": 1.7685,
    "predictedBandgapEV": 3.0335799999999966,
    "predictionStdEV": 1.1841149368199022,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2776",
    "formula": "Na2TlHgF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.23745,
    "predictionStdEV": 1.1843175450444035,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2777",
    "formula": "Ba2UHgO6",
    "ggaBandgapEV": 1.6892,
    "predictedBandgapEV": 2.650989999999994,
    "predictionStdEV": 1.1843466004088492,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2778",
    "formula": "SiBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3772500000000014,
    "predictionStdEV": 1.1845047857649211,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2779",
    "formula": "KSiH3",
    "ggaBandgapEV": 2.5734,
    "predictedBandgapEV": 2.627999999999999,
    "predictionStdEV": 1.1853964737588847,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2780",
    "formula": "Sr2TmRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8936199999999999,
    "predictionStdEV": 1.1854114035220011,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2781",
    "formula": "Ba2UPbO6",
    "ggaBandgapEV": 1.2179,
    "predictedBandgapEV": 2.512259999999991,
    "predictionStdEV": 1.1856618372875125,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2782",
    "formula": "Ba2TmRuO6",
    "ggaBandgapEV": 0.0806,
    "predictedBandgapEV": 2.595449999999999,
    "predictionStdEV": 1.186519973493914,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2783",
    "formula": "AlPbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.037459999999998,
    "predictionStdEV": 1.186568391792063,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2784",
    "formula": "LaBeAl3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9996400000000032,
    "predictionStdEV": 1.187716409922842,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2785",
    "formula": "NaAlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.946840000000004,
    "predictionStdEV": 1.187922057375818,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2786",
    "formula": "Ba2LaReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7591300000000014,
    "predictionStdEV": 1.188659620370778,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2787",
    "formula": "Sr2HoReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7577000000000012,
    "predictionStdEV": 1.188927882590026,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2788",
    "formula": "Sr2DyReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.724440000000002,
    "predictionStdEV": 1.1889409936577995,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2789",
    "formula": "TcSnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.244660000000002,
    "predictionStdEV": 1.1891650787001782,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2790",
    "formula": "Ba2InRuO6",
    "ggaBandgapEV": 0.3662,
    "predictedBandgapEV": 3.0402899999999993,
    "predictionStdEV": 1.1896725036328264,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2791",
    "formula": "CaPtO3",
    "ggaBandgapEV": 1.3668,
    "predictedBandgapEV": 2.7785799999999985,
    "predictionStdEV": 1.1901796014047628,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2792",
    "formula": "Cs2NbTlF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1962499999999996,
    "predictionStdEV": 1.1908099711960753,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2793",
    "formula": "LaRhO3",
    "ggaBandgapEV": 0.5966,
    "predictedBandgapEV": 2.4078799999999965,
    "predictionStdEV": 1.1913904085563227,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2794",
    "formula": "CoSeO3",
    "ggaBandgapEV": 1.8578,
    "predictedBandgapEV": 1.7577999999999998,
    "predictionStdEV": 1.1922320621422646,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2795",
    "formula": "CdSeO3",
    "ggaBandgapEV": 3.1181,
    "predictedBandgapEV": 3.4227600000000065,
    "predictionStdEV": 1.1925419834957578,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2796",
    "formula": "Ba2SmUO6",
    "ggaBandgapEV": 0.8623,
    "predictedBandgapEV": 2.7001599999999955,
    "predictionStdEV": 1.1925521684186398,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2797",
    "formula": "MgSiO3",
    "ggaBandgapEV": 0.2182,
    "predictedBandgapEV": 3.233680000000007,
    "predictionStdEV": 1.1928879484679173,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2798",
    "formula": "GdSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1578400000000015,
    "predictionStdEV": 1.192975663792015,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2799",
    "formula": "Ba2CaUO6",
    "ggaBandgapEV": 2.1979,
    "predictedBandgapEV": 3.3114199999999956,
    "predictionStdEV": 1.1933479725545282,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2800",
    "formula": "Ba2CuOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7331000000000008,
    "predictionStdEV": 1.1934830497330071,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2801",
    "formula": "MnSiO3",
    "ggaBandgapEV": 0.0318,
    "predictedBandgapEV": 2.285340000000001,
    "predictionStdEV": 1.193708039848941,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2802",
    "formula": "Ca2TiIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6353000000000009,
    "predictionStdEV": 1.1937225431397378,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2803",
    "formula": "CaWN3",
    "ggaBandgapEV": 0.6021,
    "predictedBandgapEV": 2.1131599999999993,
    "predictionStdEV": 1.1937637179944771,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2804",
    "formula": "NiAgF3",
    "ggaBandgapEV": 1.8303,
    "predictedBandgapEV": 2.1942899999999983,
    "predictionStdEV": 1.1940191982962418,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2805",
    "formula": "Ca2CrWO6",
    "ggaBandgapEV": 1.7417,
    "predictedBandgapEV": 3.2024600000000008,
    "predictionStdEV": 1.1942433790480043,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2806",
    "formula": "CSN3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.116460000000001,
    "predictionStdEV": 1.1943484702548075,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2807",
    "formula": "LiBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.7007200000000027,
    "predictionStdEV": 1.1947207965043551,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2808",
    "formula": "La2CrMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9172200000000008,
    "predictionStdEV": 1.195052915815865,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2809",
    "formula": "TlCoO3",
    "ggaBandgapEV": 0.5969,
    "predictedBandgapEV": 1.2726400000000029,
    "predictionStdEV": 1.195242163914908,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2810",
    "formula": "TiZnO3",
    "ggaBandgapEV": 3.1255,
    "predictedBandgapEV": 3.2788800000000022,
    "predictionStdEV": 1.195457881148473,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2811",
    "formula": "Ba2UBeO6",
    "ggaBandgapEV": 1.7668,
    "predictedBandgapEV": 3.091529999999997,
    "predictionStdEV": 1.195484298976778,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2812",
    "formula": "InRhO3",
    "ggaBandgapEV": 0.3223,
    "predictedBandgapEV": 2.992520000000003,
    "predictionStdEV": 1.195526013769672,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2813",
    "formula": "Ba2LuReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7798700000000036,
    "predictionStdEV": 1.1956579916932768,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2814",
    "formula": "LuNpO3",
    "ggaBandgapEV": 0.0523,
    "predictedBandgapEV": 2.0446299999999993,
    "predictionStdEV": 1.1957682104404688,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2815",
    "formula": "Zn2AgWO6",
    "ggaBandgapEV": 0.1432,
    "predictedBandgapEV": 2.3598999999999983,
    "predictionStdEV": 1.1961563819166783,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2816",
    "formula": "Ba2MgReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8412600000000046,
    "predictionStdEV": 1.1964394311455973,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2817",
    "formula": "TiGeO3",
    "ggaBandgapEV": 1.1228,
    "predictedBandgapEV": 2.9910200000000007,
    "predictionStdEV": 1.1966974386201383,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2818",
    "formula": "Sr2YRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9235300000000009,
    "predictionStdEV": 1.1967650517541015,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2819",
    "formula": "Sr2GdReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7244800000000013,
    "predictionStdEV": 1.1971838328343736,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2820",
    "formula": "LiFeF3",
    "ggaBandgapEV": 3.0058,
    "predictedBandgapEV": 2.9057999999999997,
    "predictionStdEV": 1.198843564899107,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2821",
    "formula": "Zn2CuWO6",
    "ggaBandgapEV": 0.464,
    "predictedBandgapEV": 2.3815799999999983,
    "predictionStdEV": 1.1991490331063952,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2822",
    "formula": "Ba2ZrUO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1921900000000023,
    "predictionStdEV": 1.1992610866279287,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2823",
    "formula": "Eu2GdTaO6",
    "ggaBandgapEV": 0.6783,
    "predictedBandgapEV": 2.3186299999999997,
    "predictionStdEV": 1.199351605285122,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2824",
    "formula": "Sr2ErReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7142300000000021,
    "predictionStdEV": 1.1995499810762362,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2825",
    "formula": "La2MgWO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.569390000000002,
    "predictionStdEV": 1.201584819269952,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2826",
    "formula": "YbGeO3",
    "ggaBandgapEV": 1.0937,
    "predictedBandgapEV": 2.849919999999994,
    "predictionStdEV": 1.201884683985946,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2827",
    "formula": "Ba2NaOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.961980000000004,
    "predictionStdEV": 1.2019511968461964,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2828",
    "formula": "Sr2TmReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7083300000000021,
    "predictionStdEV": 1.2021308835147682,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2829",
    "formula": "Na2TlAgF6",
    "ggaBandgapEV": 0.1884,
    "predictedBandgapEV": 3.019520000000001,
    "predictionStdEV": 1.202657212010138,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2830",
    "formula": "MgAlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.9859200000000077,
    "predictionStdEV": 1.2031080390388866,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2831",
    "formula": "SiMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.21402,
    "predictionStdEV": 1.2045901957097285,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2832",
    "formula": "Zn2TeWO6",
    "ggaBandgapEV": 1.9427,
    "predictedBandgapEV": 2.91648,
    "predictionStdEV": 1.2047629682223795,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2833",
    "formula": "Sr2TaCoO6",
    "ggaBandgapEV": 0.8935,
    "predictedBandgapEV": 1.0240299999999996,
    "predictionStdEV": 1.2048780888953041,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2834",
    "formula": "GaSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4735800000000028,
    "predictionStdEV": 1.2050758414307372,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2835",
    "formula": "Sr2YIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.602720000000001,
    "predictionStdEV": 1.2054223747716002,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2836",
    "formula": "Ca2IrPtO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.64492,
    "predictionStdEV": 1.2055697796477827,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2837",
    "formula": "Mg2TiWO6",
    "ggaBandgapEV": 1.4033,
    "predictedBandgapEV": 2.736350000000001,
    "predictionStdEV": 1.2059246359122116,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2838",
    "formula": "Sr2NdBiO6",
    "ggaBandgapEV": 1.7308,
    "predictedBandgapEV": 2.8035599999999965,
    "predictionStdEV": 1.2062722853485446,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2839",
    "formula": "Ba2YIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6588500000000008,
    "predictionStdEV": 1.2065296214764063,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2840",
    "formula": "Ba2MgOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7461900000000035,
    "predictionStdEV": 1.2068074966207318,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2841",
    "formula": "KUO3",
    "ggaBandgapEV": 0.4966,
    "predictedBandgapEV": 2.7772099999999957,
    "predictionStdEV": 1.2068878431320775,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2842",
    "formula": "AsCF3",
    "ggaBandgapEV": 3.4402,
    "predictedBandgapEV": 3.3402,
    "predictionStdEV": 1.2078986687218423,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2843",
    "formula": "Na2LiAlH6",
    "ggaBandgapEV": 2.8483,
    "predictedBandgapEV": 3.0628200000000048,
    "predictionStdEV": 1.2092957651459788,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2844",
    "formula": "Sr2CuTeO6",
    "ggaBandgapEV": 0.229,
    "predictedBandgapEV": 3.0093899999999953,
    "predictionStdEV": 1.2096828831970803,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2845",
    "formula": "KReO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8931600000000026,
    "predictionStdEV": 1.2106252989261381,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2846",
    "formula": "Cd2BiAsO6",
    "ggaBandgapEV": 2.0633,
    "predictedBandgapEV": 2.679929999999998,
    "predictionStdEV": 1.2107136924558175,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2847",
    "formula": "GdErO3",
    "ggaBandgapEV": 0.3671,
    "predictedBandgapEV": 2.2813199999999996,
    "predictionStdEV": 1.2107952170371357,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2848",
    "formula": "TlGeF3",
    "ggaBandgapEV": 3.2618,
    "predictedBandgapEV": 3.450880000000006,
    "predictionStdEV": 1.2111034743571663,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2849",
    "formula": "Cs2NaAlH6",
    "ggaBandgapEV": 2.1846,
    "predictedBandgapEV": 2.9441800000000002,
    "predictionStdEV": 1.2122484595164487,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2850",
    "formula": "Sr2ErMoO6",
    "ggaBandgapEV": 1.2818,
    "predictedBandgapEV": 3.009380000000001,
    "predictionStdEV": 1.2123790725676542,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2851",
    "formula": "La2MgNbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9627500000000022,
    "predictionStdEV": 1.2150720914826418,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2852",
    "formula": "HgClO3",
    "ggaBandgapEV": 3.0919,
    "predictedBandgapEV": 3.048370000000001,
    "predictionStdEV": 1.2151156295184415,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2853",
    "formula": "Sr2CrOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5819900000000007,
    "predictionStdEV": 1.2151445962929655,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2854",
    "formula": "Sn2PCO6",
    "ggaBandgapEV": 2.3293,
    "predictedBandgapEV": 3.3409100000000085,
    "predictionStdEV": 1.215163619394524,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2855",
    "formula": "Ca2VWO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.631850000000001,
    "predictionStdEV": 1.21563721047852,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2856",
    "formula": "HgTeO3",
    "ggaBandgapEV": 2.1965,
    "predictedBandgapEV": 2.6053699999999953,
    "predictionStdEV": 1.2158138069211104,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2857",
    "formula": "VOF3",
    "ggaBandgapEV": 2.8875,
    "predictedBandgapEV": 2.997100000000002,
    "predictionStdEV": 1.2164266480145856,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2858",
    "formula": "Sr2YbTaO6",
    "ggaBandgapEV": 0.4899,
    "predictedBandgapEV": 2.8206100000000034,
    "predictionStdEV": 1.2171741773057798,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2859",
    "formula": "Cs2TaTlF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1032200000000003,
    "predictionStdEV": 1.217922752722847,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2860",
    "formula": "Ca2CuIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7071799999999988,
    "predictionStdEV": 1.2184082844432735,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2861",
    "formula": "Sr2FeWO6",
    "ggaBandgapEV": 2.3908,
    "predictedBandgapEV": 2.2908,
    "predictionStdEV": 1.2189882596235297,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2862",
    "formula": "LuSeO3",
    "ggaBandgapEV": 1.6851,
    "predictedBandgapEV": 2.382669999999995,
    "predictionStdEV": 1.219032370817117,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2863",
    "formula": "CeLuO3",
    "ggaBandgapEV": 0.0989,
    "predictedBandgapEV": 2.332500000000001,
    "predictionStdEV": 1.2192853439617803,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2864",
    "formula": "Sr2HfCrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0065000000000013,
    "predictionStdEV": 1.2194325114576878,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2865",
    "formula": "GeBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.32084,
    "predictionStdEV": 1.2202983218869057,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2866",
    "formula": "NaIrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7988,
    "predictionStdEV": 1.2209048529676678,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2867",
    "formula": "Ca2TaCuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.82613,
    "predictionStdEV": 1.221132127617646,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2868",
    "formula": "K2LiAlH6",
    "ggaBandgapEV": 2.6679,
    "predictedBandgapEV": 2.83924,
    "predictionStdEV": 1.2216219637842145,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2869",
    "formula": "HgNO3",
    "ggaBandgapEV": 2.5913,
    "predictedBandgapEV": 2.9804099999999982,
    "predictionStdEV": 1.2217645771178671,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2870",
    "formula": "GaMoN3",
    "ggaBandgapEV": 1.1848,
    "predictedBandgapEV": 2.7363600000000017,
    "predictionStdEV": 1.222549937793954,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2871",
    "formula": "K2InHgF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4012700000000007,
    "predictionStdEV": 1.2227083614255703,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2872",
    "formula": "K2NaAlH6",
    "ggaBandgapEV": 2.3908,
    "predictedBandgapEV": 2.969640000000002,
    "predictionStdEV": 1.223089641195609,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2873",
    "formula": "LaIO3",
    "ggaBandgapEV": 1.5216,
    "predictedBandgapEV": 2.5574199999999956,
    "predictionStdEV": 1.2230986647037108,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2874",
    "formula": "Sr2CuWO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.699870000000001,
    "predictionStdEV": 1.223545599109407,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2875",
    "formula": "SmGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0962799999999993,
    "predictionStdEV": 1.2237129408484662,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2876",
    "formula": "Ba2LaBiO6",
    "ggaBandgapEV": 1.9996,
    "predictedBandgapEV": 2.9182799999999944,
    "predictionStdEV": 1.2238632855021017,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2877",
    "formula": "Ba2TaTlO6",
    "ggaBandgapEV": 2.4628,
    "predictedBandgapEV": 3.4486799999999995,
    "predictionStdEV": 1.2243203247516559,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2878",
    "formula": "ScAsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.163180000000001,
    "predictionStdEV": 1.2245811069912853,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2879",
    "formula": "Sr2CuOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6069,
    "predictionStdEV": 1.2247309459632363,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2880",
    "formula": "Ba2LuMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9484100000000042,
    "predictionStdEV": 1.2248597560129078,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2881",
    "formula": "KOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8421100000000026,
    "predictionStdEV": 1.2258045512641893,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2882",
    "formula": "Ba2LiOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9040000000000032,
    "predictionStdEV": 1.2258220914961535,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2883",
    "formula": "TiSnO3",
    "ggaBandgapEV": 1.1078,
    "predictedBandgapEV": 3.1695000000000046,
    "predictionStdEV": 1.2259681684285284,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2884",
    "formula": "Rb2NbTlF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.24028,
    "predictionStdEV": 1.2259888342069025,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2885",
    "formula": "Eu2LuTaO6",
    "ggaBandgapEV": 0.5686,
    "predictedBandgapEV": 2.271889999999997,
    "predictionStdEV": 1.2266626993187673,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2886",
    "formula": "Ba2ZrInO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3956000000000026,
    "predictionStdEV": 1.2268620297327648,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2887",
    "formula": "AcSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.02081,
    "predictionStdEV": 1.2276104406121693,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2888",
    "formula": "Eu2ErTaO6",
    "ggaBandgapEV": 0.6359,
    "predictedBandgapEV": 2.375279999999998,
    "predictionStdEV": 1.227753852203282,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2889",
    "formula": "HgSeO3",
    "ggaBandgapEV": 2.5864,
    "predictedBandgapEV": 2.8414899999999967,
    "predictionStdEV": 1.22878485907827,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2890",
    "formula": "CaBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.647720000000003,
    "predictionStdEV": 1.2288045416582745,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2891",
    "formula": "Ba2ErUO6",
    "ggaBandgapEV": 0.8926,
    "predictedBandgapEV": 2.8136199999999936,
    "predictionStdEV": 1.2293842749929749,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2892",
    "formula": "AlPdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6797200000000028,
    "predictionStdEV": 1.23036024057997,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2893",
    "formula": "Tl2InGaF6",
    "ggaBandgapEV": 2.5494,
    "predictedBandgapEV": 3.221160000000004,
    "predictionStdEV": 1.2304250706158424,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2894",
    "formula": "Sr2UZnO6",
    "ggaBandgapEV": 1.8577,
    "predictedBandgapEV": 2.9620499999999987,
    "predictionStdEV": 1.230917482002752,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2895",
    "formula": "EuInO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1929699999999985,
    "predictionStdEV": 1.2310594742334753,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2896",
    "formula": "Ba2MnWO6",
    "ggaBandgapEV": 2.3107,
    "predictedBandgapEV": 2.866660000000002,
    "predictionStdEV": 1.231156141356571,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2897",
    "formula": "GaSnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4042599999999994,
    "predictionStdEV": 1.2312104825739558,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2898",
    "formula": "Ba2DyUO6",
    "ggaBandgapEV": 0.8819,
    "predictedBandgapEV": 2.7921399999999936,
    "predictionStdEV": 1.2312541250286222,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2899",
    "formula": "BaBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.514870000000003,
    "predictionStdEV": 1.2321937076206817,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2900",
    "formula": "Sr2CrWO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.709260000000001,
    "predictionStdEV": 1.232207674217298,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2901",
    "formula": "GaBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2979099999999986,
    "predictionStdEV": 1.2323692149270864,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2902",
    "formula": "Mg2VIrO6",
    "ggaBandgapEV": 0.3314,
    "predictedBandgapEV": 2.136559999999998,
    "predictionStdEV": 1.2325706739980464,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2903",
    "formula": "SnGeO3",
    "ggaBandgapEV": 2.6342,
    "predictedBandgapEV": 3.475400000000012,
    "predictionStdEV": 1.2325716368633512,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2904",
    "formula": "MnSnO3",
    "ggaBandgapEV": 0.3073,
    "predictedBandgapEV": 2.8284799999999986,
    "predictionStdEV": 1.2335813267069198,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2905",
    "formula": "Ca2YbRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9730200000000004,
    "predictionStdEV": 1.2336189766698633,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2906",
    "formula": "Mn2BiPO6",
    "ggaBandgapEV": 1.9982,
    "predictedBandgapEV": 2.382569999999995,
    "predictionStdEV": 1.23394580314534,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2907",
    "formula": "Ca2TmRuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.00471,
    "predictionStdEV": 1.233969880467105,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2908",
    "formula": "Ca2TaCoO6",
    "ggaBandgapEV": 0.8022,
    "predictedBandgapEV": 1.0688699999999995,
    "predictionStdEV": 1.2342098172920182,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2909",
    "formula": "Mg2MnWO6",
    "ggaBandgapEV": 2.2942,
    "predictedBandgapEV": 2.803579999999998,
    "predictionStdEV": 1.2344190470014627,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2910",
    "formula": "KWO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9833400000000037,
    "predictionStdEV": 1.2344894671077602,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2911",
    "formula": "Ba2BiSbO6",
    "ggaBandgapEV": 1.9838,
    "predictedBandgapEV": 2.7737999999999916,
    "predictionStdEV": 1.2347361904471728,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2912",
    "formula": "Ca2MnSbO6",
    "ggaBandgapEV": 0.8803,
    "predictedBandgapEV": 2.7730899999999985,
    "predictionStdEV": 1.2349984218208538,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2913",
    "formula": "BaSiO3",
    "ggaBandgapEV": 1.0186,
    "predictedBandgapEV": 3.4419099999999974,
    "predictionStdEV": 1.2357518366969966,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2914",
    "formula": "Ba2GdUO6",
    "ggaBandgapEV": 0.857,
    "predictedBandgapEV": 2.7415799999999955,
    "predictionStdEV": 1.23764130651817,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2915",
    "formula": "Ba2YZrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.214590000000002,
    "predictionStdEV": 1.2378803180841031,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2916",
    "formula": "VGeO3",
    "ggaBandgapEV": 0.013,
    "predictedBandgapEV": 2.0861500000000004,
    "predictionStdEV": 1.2380040498722142,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2917",
    "formula": "TaOF3",
    "ggaBandgapEV": 2.8024,
    "predictedBandgapEV": 3.418510000000001,
    "predictionStdEV": 1.2382686420563194,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2918",
    "formula": "CrInO3",
    "ggaBandgapEV": 1.4759,
    "predictedBandgapEV": 3.375600000000008,
    "predictionStdEV": 1.2383042598650766,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2919",
    "formula": "Rb2TaTlF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1101100000000006,
    "predictionStdEV": 1.2383762101639413,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2920",
    "formula": "TaInO3",
    "ggaBandgapEV": 0.0116,
    "predictedBandgapEV": 1.662159999999998,
    "predictionStdEV": 1.2391418943769117,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2921",
    "formula": "AlSiTe3",
    "ggaBandgapEV": 1.3431,
    "predictedBandgapEV": 1.7891000000000032,
    "predictionStdEV": 1.2394491478072012,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2922",
    "formula": "Gd2TiZnO6",
    "ggaBandgapEV": 2.7602,
    "predictedBandgapEV": 3.0732000000000066,
    "predictionStdEV": 1.2395309435427588,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2923",
    "formula": "La2ZrCuO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.913540000000001,
    "predictionStdEV": 1.2401846912456238,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2924",
    "formula": "Ca2PdWO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7450800000000004,
    "predictionStdEV": 1.2402734350134252,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2925",
    "formula": "YbGaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1790400000000014,
    "predictionStdEV": 1.240287941729664,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2926",
    "formula": "Ba2HoUO6",
    "ggaBandgapEV": 0.8868,
    "predictedBandgapEV": 2.798979999999993,
    "predictionStdEV": 1.2402892241731363,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2927",
    "formula": "Mg2TaWO6",
    "ggaBandgapEV": 1.7109,
    "predictedBandgapEV": 2.7940699999999996,
    "predictionStdEV": 1.2406255217026598,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2928",
    "formula": "Nd2NiPtO6",
    "ggaBandgapEV": 1.6725,
    "predictedBandgapEV": 2.038909999999998,
    "predictionStdEV": 1.2426634145656652,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2929",
    "formula": "Ca2TaWO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6962500000000014,
    "predictionStdEV": 1.242781633071555,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2930",
    "formula": "Ba2SrUO6",
    "ggaBandgapEV": 2.2733,
    "predictedBandgapEV": 3.314719999999992,
    "predictionStdEV": 1.2435388701604797,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2931",
    "formula": "Mg2SnSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6237600000000043,
    "predictionStdEV": 1.24443330974384,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2932",
    "formula": "TiPbO3",
    "ggaBandgapEV": 1.9569,
    "predictedBandgapEV": 2.3953499999999948,
    "predictionStdEV": 1.2447135523886599,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2933",
    "formula": "Sr2FeSnO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.2028900000000007,
    "predictionStdEV": 1.244859910953837,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2934",
    "formula": "CdCO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.184020000000001,
    "predictionStdEV": 1.2449525451196934,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2935",
    "formula": "InSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4174400000000005,
    "predictionStdEV": 1.245257823263921,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2936",
    "formula": "Sr2FeSbO6",
    "ggaBandgapEV": 1.805,
    "predictedBandgapEV": 1.7049999999999998,
    "predictionStdEV": 1.2454702059463316,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2937",
    "formula": "BaCeO3",
    "ggaBandgapEV": 2.2291,
    "predictedBandgapEV": 3.306439999999995,
    "predictionStdEV": 1.2456579491979352,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2938",
    "formula": "Ba2LaUO6",
    "ggaBandgapEV": 0.8614,
    "predictedBandgapEV": 2.752459999999996,
    "predictionStdEV": 1.2456760607798485,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2939",
    "formula": "Ca2CrIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6936999999999995,
    "predictionStdEV": 1.2460021308167977,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2940",
    "formula": "InGaO3",
    "ggaBandgapEV": 1.3362,
    "predictedBandgapEV": 3.3515000000000064,
    "predictionStdEV": 1.2461892111553536,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2941",
    "formula": "Ca2FeSbO6",
    "ggaBandgapEV": 1.5056,
    "predictedBandgapEV": 1.4056,
    "predictionStdEV": 1.2474926693171373,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2942",
    "formula": "Ba2TaBiO6",
    "ggaBandgapEV": 2.7412,
    "predictedBandgapEV": 3.1963599999999976,
    "predictionStdEV": 1.248221715241327,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2943",
    "formula": "PCF3",
    "ggaBandgapEV": 0.9724,
    "predictedBandgapEV": 2.8392500000000034,
    "predictionStdEV": 1.2486361709881693,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2944",
    "formula": "Zn2BiWO6",
    "ggaBandgapEV": 1.5721,
    "predictedBandgapEV": 2.4574099999999977,
    "predictionStdEV": 1.2516242414958239,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2945",
    "formula": "Ba2LuUO6",
    "ggaBandgapEV": 0.8354,
    "predictedBandgapEV": 2.6740699999999977,
    "predictionStdEV": 1.2516562567654115,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2946",
    "formula": "Ba2LuRuO6",
    "ggaBandgapEV": 0.0716,
    "predictedBandgapEV": 2.5064200000000016,
    "predictionStdEV": 1.2520850145257711,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2947",
    "formula": "Ca2MgReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8225899999999995,
    "predictionStdEV": 1.2530454269099724,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2948",
    "formula": "NaUO3",
    "ggaBandgapEV": 0.4297,
    "predictedBandgapEV": 2.815239999999999,
    "predictionStdEV": 1.2532556572383768,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2949",
    "formula": "NdGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0788500000000005,
    "predictionStdEV": 1.2532686573516465,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2950",
    "formula": "Ba2SmOsO6",
    "ggaBandgapEV": 0.0726,
    "predictedBandgapEV": 2.3102299999999962,
    "predictionStdEV": 1.2553546897590322,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2951",
    "formula": "Mg2SnIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.066449999999999,
    "predictionStdEV": 1.2555975260807104,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2952",
    "formula": "CaBiO3",
    "ggaBandgapEV": 0.6887,
    "predictedBandgapEV": 2.101759999999996,
    "predictionStdEV": 1.2563781287494618,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2953",
    "formula": "PuInO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8732900000000015,
    "predictionStdEV": 1.2565790965554067,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2954",
    "formula": "La2ZnCrO6",
    "ggaBandgapEV": 0.997,
    "predictedBandgapEV": 2.7581999999999987,
    "predictionStdEV": 1.2568724517627068,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2955",
    "formula": "AlSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6857200000000057,
    "predictionStdEV": 1.260164307382175,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2956",
    "formula": "Sr2ScIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6616700000000026,
    "predictionStdEV": 1.2605763606779223,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2957",
    "formula": "Sm2NiPtO6",
    "ggaBandgapEV": 1.7147,
    "predictedBandgapEV": 2.1202499999999955,
    "predictionStdEV": 1.2608623190102877,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2958",
    "formula": "Eu2MgWO6",
    "ggaBandgapEV": 0.2766,
    "predictedBandgapEV": 2.2270499999999998,
    "predictionStdEV": 1.2615821604239648,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2959",
    "formula": "Sr2CaOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7251100000000017,
    "predictionStdEV": 1.2623123376961831,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2960",
    "formula": "Mn2InSbO6",
    "ggaBandgapEV": 0.4702,
    "predictedBandgapEV": 2.7694199999999993,
    "predictionStdEV": 1.2623507688435898,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2961",
    "formula": "Ba2HfUO6",
    "ggaBandgapEV": 0.1901,
    "predictedBandgapEV": 2.625349999999996,
    "predictionStdEV": 1.2623711924390568,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2962",
    "formula": "K2TaTlF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1861899999999994,
    "predictionStdEV": 1.2625792386618744,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2963",
    "formula": "Eu2YTaO6",
    "ggaBandgapEV": 0.5364,
    "predictedBandgapEV": 2.39991,
    "predictionStdEV": 1.2626002304371717,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2964",
    "formula": "LaAuO3",
    "ggaBandgapEV": 1.8372,
    "predictedBandgapEV": 2.649179999999996,
    "predictionStdEV": 1.2627843155503629,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2965",
    "formula": "SnBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.34041,
    "predictionStdEV": 1.2631434526212757,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2966",
    "formula": "Ba2NiMoO6",
    "ggaBandgapEV": 2.3773,
    "predictedBandgapEV": 2.3896900000000043,
    "predictionStdEV": 1.2636264692938346,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2967",
    "formula": "CoGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6197500000000045,
    "predictionStdEV": 1.2646616098783137,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2968",
    "formula": "Ba2TaFeO6",
    "ggaBandgapEV": 1.8623,
    "predictedBandgapEV": 1.7623,
    "predictionStdEV": 1.2646701378620426,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2969",
    "formula": "Ba2YBiO6",
    "ggaBandgapEV": 1.8249,
    "predictedBandgapEV": 2.9107499999999957,
    "predictionStdEV": 1.267253324122686,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2970",
    "formula": "Ca2SbMoO6",
    "ggaBandgapEV": 0.4616,
    "predictedBandgapEV": 2.8976400000000027,
    "predictionStdEV": 1.2673950569573804,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2971",
    "formula": "Mg2TeWO6",
    "ggaBandgapEV": 1.629,
    "predictedBandgapEV": 2.9546800000000015,
    "predictionStdEV": 1.2677719422672216,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2972",
    "formula": "TmScO3",
    "ggaBandgapEV": 0.061,
    "predictedBandgapEV": 2.973830000000006,
    "predictionStdEV": 1.2682576162199843,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2973",
    "formula": "MnTeO3",
    "ggaBandgapEV": 3.0072,
    "predictedBandgapEV": 2.9486999999999988,
    "predictionStdEV": 1.2688246963233336,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2974",
    "formula": "La2ZnMoO6",
    "ggaBandgapEV": 1.5078,
    "predictedBandgapEV": 2.786769999999999,
    "predictionStdEV": 1.2688939345351145,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2975",
    "formula": "Sr2TbRuO6",
    "ggaBandgapEV": 0.1901,
    "predictedBandgapEV": 2.647819999999998,
    "predictionStdEV": 1.269716049989128,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2976",
    "formula": "Sr2ZrCrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2172100000000015,
    "predictionStdEV": 1.2704137380790568,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2977",
    "formula": "Sr2MgOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.665300000000002,
    "predictionStdEV": 1.2709737644813892,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2978",
    "formula": "Zn2BiSbO6",
    "ggaBandgapEV": 1.0912,
    "predictedBandgapEV": 2.5295299999999976,
    "predictionStdEV": 1.2712746473913492,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2979",
    "formula": "MnCO3",
    "ggaBandgapEV": 0.1575,
    "predictedBandgapEV": 2.3543799999999973,
    "predictionStdEV": 1.2721513336077588,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2980",
    "formula": "Ti2AgBiO6",
    "ggaBandgapEV": 1.4561,
    "predictedBandgapEV": 2.511779999999998,
    "predictionStdEV": 1.273282738279288,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2981",
    "formula": "VSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.141210000000002,
    "predictionStdEV": 1.2734049575449269,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2982",
    "formula": "Ca2SnWO6",
    "ggaBandgapEV": 1.4744,
    "predictedBandgapEV": 3.405250000000006,
    "predictionStdEV": 1.2745022116497116,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2983",
    "formula": "CoBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.487150000000004,
    "predictionStdEV": 1.2748326664703902,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2984",
    "formula": "TlGaO3",
    "ggaBandgapEV": 0.2374,
    "predictedBandgapEV": 2.3880599999999954,
    "predictionStdEV": 1.2753973641183358,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2985",
    "formula": "Na2InHgF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4272999999999985,
    "predictionStdEV": 1.2758321245367672,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2986",
    "formula": "ZrCdO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.064820000000001,
    "predictionStdEV": 1.2769705429648721,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2987",
    "formula": "Zn2FeWO6",
    "ggaBandgapEV": 2.1255,
    "predictedBandgapEV": 2.0255,
    "predictionStdEV": 1.2770745614880916,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2988",
    "formula": "Li2MnWO6",
    "ggaBandgapEV": 1.1271,
    "predictedBandgapEV": 2.769299999999994,
    "predictionStdEV": 1.2785833605987518,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2989",
    "formula": "Mg2TaAgO6",
    "ggaBandgapEV": 0.4205,
    "predictedBandgapEV": 2.5251099999999993,
    "predictionStdEV": 1.278703459720041,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2990",
    "formula": "MnBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3325399999999985,
    "predictionStdEV": 1.28032482144181,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2991",
    "formula": "BIrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8468600000000008,
    "predictionStdEV": 1.280455442567215,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2992",
    "formula": "Ba2ScUO6",
    "ggaBandgapEV": 0.8497,
    "predictedBandgapEV": 2.9845999999999986,
    "predictionStdEV": 1.2817214752043433,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2993",
    "formula": "Ca2TaTiO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0450900000000027,
    "predictionStdEV": 1.2817328278155329,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2994",
    "formula": "ZrTlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.621269999999999,
    "predictionStdEV": 1.281798984669594,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2995",
    "formula": "LiReO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8417200000000002,
    "predictionStdEV": 1.2818491493151598,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2996",
    "formula": "Mg2VBiO6",
    "ggaBandgapEV": 3.1906,
    "predictedBandgapEV": 3.325160000000003,
    "predictionStdEV": 1.2822295326500628,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-2997",
    "formula": "La2CuSnO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1743800000000024,
    "predictionStdEV": 1.2828603258344229,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2998",
    "formula": "NaOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7707500000000012,
    "predictionStdEV": 1.2835860265288015,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-2999",
    "formula": "CsAlTe3",
    "ggaBandgapEV": 1.3547,
    "predictedBandgapEV": 2.0161200000000044,
    "predictionStdEV": 1.2839883744021998,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3000",
    "formula": "Na2TaHgF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.05505,
    "predictionStdEV": 1.2841475178109407,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3001",
    "formula": "Sm2CoPtO6",
    "ggaBandgapEV": 1.7717,
    "predictedBandgapEV": 1.6717,
    "predictionStdEV": 1.2846265052146493,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3002",
    "formula": "MgWO3",
    "ggaBandgapEV": 0.819,
    "predictedBandgapEV": 2.3193799999999998,
    "predictionStdEV": 1.2846312372038917,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3003",
    "formula": "Sr2YbUO6",
    "ggaBandgapEV": 2.1813,
    "predictedBandgapEV": 3.380699999999998,
    "predictionStdEV": 1.2849305467611873,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3004",
    "formula": "Sr2SmUO6",
    "ggaBandgapEV": 0.674,
    "predictedBandgapEV": 2.7346399999999984,
    "predictionStdEV": 1.2861055829130055,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3005",
    "formula": "LiUO3",
    "ggaBandgapEV": 0.4853,
    "predictedBandgapEV": 2.8685999999999967,
    "predictionStdEV": 1.286377720578213,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3006",
    "formula": "K2NbTlF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3237799999999993,
    "predictionStdEV": 1.287829573973201,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3007",
    "formula": "Ba2YUO6",
    "ggaBandgapEV": 0.8788,
    "predictedBandgapEV": 2.8280399999999943,
    "predictionStdEV": 1.2891837954302723,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3008",
    "formula": "CrBiO3",
    "ggaBandgapEV": 1.8454,
    "predictedBandgapEV": 2.494499999999996,
    "predictionStdEV": 1.289283929163781,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3009",
    "formula": "BiOF3",
    "ggaBandgapEV": 1.6746,
    "predictedBandgapEV": 2.454740000000001,
    "predictionStdEV": 1.2897845294466832,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3010",
    "formula": "Mg2IrWO6",
    "ggaBandgapEV": 1.1814,
    "predictedBandgapEV": 2.379919999999999,
    "predictionStdEV": 1.2900932887198497,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3011",
    "formula": "Sr2ZrVO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0688900000000032,
    "predictionStdEV": 1.2903217497585635,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3012",
    "formula": "Mg2NiSbO6",
    "ggaBandgapEV": 0.084,
    "predictedBandgapEV": 2.3242000000000003,
    "predictionStdEV": 1.2903903905407865,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3013",
    "formula": "BOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8213400000000013,
    "predictionStdEV": 1.2903996297271605,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3014",
    "formula": "CaCO3",
    "ggaBandgapEV": 1.4948,
    "predictedBandgapEV": 3.3918100000000053,
    "predictionStdEV": 1.2905248056120435,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3015",
    "formula": "Na2GaHgF6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4179999999999997,
    "predictionStdEV": 1.290631899497296,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3016",
    "formula": "MnInF3",
    "ggaBandgapEV": 2.464,
    "predictedBandgapEV": 3.069220000000005,
    "predictionStdEV": 1.2908202011124554,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3017",
    "formula": "PNO3",
    "ggaBandgapEV": 1.7656,
    "predictedBandgapEV": 3.0811000000000033,
    "predictionStdEV": 1.2915484466329554,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3018",
    "formula": "BaAlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.8317500000000018,
    "predictionStdEV": 1.2917277528566127,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3019",
    "formula": "Ba2LuBiO6",
    "ggaBandgapEV": 1.4518,
    "predictedBandgapEV": 2.4856499999999953,
    "predictionStdEV": 1.2921651316685498,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3020",
    "formula": "Ca2TaVO6",
    "ggaBandgapEV": 0.7927,
    "predictedBandgapEV": 2.7753499999999973,
    "predictionStdEV": 1.2925350778605584,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3021",
    "formula": "PuGaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8686300000000016,
    "predictionStdEV": 1.292985720377452,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3022",
    "formula": "TlHgF3",
    "ggaBandgapEV": 2.1243,
    "predictedBandgapEV": 2.9167400000000003,
    "predictionStdEV": 1.2937025826672843,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3023",
    "formula": "NaWO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9518300000000017,
    "predictionStdEV": 1.2938123902251042,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3024",
    "formula": "Mg2FeWO6",
    "ggaBandgapEV": 2.3885,
    "predictedBandgapEV": 2.2885,
    "predictionStdEV": 1.2957149742130785,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3025",
    "formula": "HgBrO3",
    "ggaBandgapEV": 3.2228,
    "predictedBandgapEV": 3.1228,
    "predictionStdEV": 1.295764079761437,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3026",
    "formula": "BMoN3",
    "ggaBandgapEV": 1.0443,
    "predictedBandgapEV": 2.747860000000001,
    "predictionStdEV": 1.2962993560131089,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3027",
    "formula": "ZrZnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.13776,
    "predictionStdEV": 1.2964663444918259,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3028",
    "formula": "YSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2683700000000018,
    "predictionStdEV": 1.2975592445433826,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3029",
    "formula": "ThBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1252700000000004,
    "predictionStdEV": 1.298820995018171,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3030",
    "formula": "SiCCl3",
    "ggaBandgapEV": 3.4247,
    "predictedBandgapEV": 3.3247,
    "predictionStdEV": 1.2989551622746645,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3031",
    "formula": "VGaO3",
    "ggaBandgapEV": 1.4157,
    "predictedBandgapEV": 2.8651200000000023,
    "predictionStdEV": 1.2998966826636644,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3032",
    "formula": "Mg2CClO6",
    "ggaBandgapEV": 0.0014,
    "predictedBandgapEV": 2.338630000000001,
    "predictionStdEV": 1.3001869762076517,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3033",
    "formula": "NaReO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8144500000000008,
    "predictionStdEV": 1.3003079433349636,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3034",
    "formula": "SrAlH3",
    "ggaBandgapEV": 0.2953,
    "predictedBandgapEV": 2.482690000000001,
    "predictionStdEV": 1.3010295976264352,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3035",
    "formula": "Ti2ZnSnO6",
    "ggaBandgapEV": 0.0271,
    "predictedBandgapEV": 2.3920600000000003,
    "predictionStdEV": 1.3016802819433027,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3036",
    "formula": "CaWO3",
    "ggaBandgapEV": 1.4138,
    "predictedBandgapEV": 2.7723400000000007,
    "predictionStdEV": 1.3025725409358215,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3037",
    "formula": "Mg2FeSbO6",
    "ggaBandgapEV": 1.3722,
    "predictedBandgapEV": 1.5006900000000027,
    "predictionStdEV": 1.303631724798074,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3038",
    "formula": "LaSnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1084200000000033,
    "predictionStdEV": 1.30557608112281,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3039",
    "formula": "Sr2CoSbO6",
    "ggaBandgapEV": 0.5515,
    "predictedBandgapEV": 1.3772500000000023,
    "predictionStdEV": 1.3060320775157104,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3040",
    "formula": "Sr2MnTeO6",
    "ggaBandgapEV": 1.4865,
    "predictedBandgapEV": 2.8249499999999967,
    "predictionStdEV": 1.30611674344218,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3041",
    "formula": "Zn2FeSbO6",
    "ggaBandgapEV": 1.4461,
    "predictedBandgapEV": 1.7381200000000026,
    "predictionStdEV": 1.3077966071220697,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3042",
    "formula": "La2VZnO6",
    "ggaBandgapEV": 1.7339,
    "predictedBandgapEV": 2.4858599999999957,
    "predictionStdEV": 1.310624072875207,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3043",
    "formula": "BSbO3",
    "ggaBandgapEV": 2.4005,
    "predictedBandgapEV": 3.3685000000000054,
    "predictionStdEV": 1.3117388269011485,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3044",
    "formula": "LiOsO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7770100000000006,
    "predictionStdEV": 1.3124589174141812,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3045",
    "formula": "AlAuO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.1922200000000003,
    "predictionStdEV": 1.3129615651647972,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3046",
    "formula": "Sr2MnWO6",
    "ggaBandgapEV": 1.9449,
    "predictedBandgapEV": 2.6464499999999997,
    "predictionStdEV": 1.313120614223996,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3047",
    "formula": "Ba2ScOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.7915000000000036,
    "predictionStdEV": 1.3133947045728476,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3048",
    "formula": "Ba2UInO6",
    "ggaBandgapEV": 1.0328,
    "predictedBandgapEV": 2.9332199999999973,
    "predictionStdEV": 1.3135221473580105,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3049",
    "formula": "Sr2DyUO6",
    "ggaBandgapEV": 0.9196,
    "predictedBandgapEV": 2.8767999999999985,
    "predictionStdEV": 1.3144279592278911,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3050",
    "formula": "Mg2TaSbO6",
    "ggaBandgapEV": 1.1038,
    "predictedBandgapEV": 2.9030500000000004,
    "predictionStdEV": 1.3154161879420525,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3051",
    "formula": "Ba2ScReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9089900000000042,
    "predictionStdEV": 1.3156290624260323,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3052",
    "formula": "MnSO3",
    "ggaBandgapEV": 3.3879,
    "predictedBandgapEV": 3.2879,
    "predictionStdEV": 1.3173202471684724,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3053",
    "formula": "Sr2CoWO6",
    "ggaBandgapEV": 1.7013,
    "predictedBandgapEV": 1.6013,
    "predictionStdEV": 1.3174665135782406,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3054",
    "formula": "VSnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2641599999999995,
    "predictionStdEV": 1.3174898460329778,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3055",
    "formula": "YSeO3",
    "ggaBandgapEV": 1.822,
    "predictedBandgapEV": 2.820240000000001,
    "predictionStdEV": 1.317852777209958,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3056",
    "formula": "Ba2MnReO6",
    "ggaBandgapEV": 0.3665,
    "predictedBandgapEV": 2.172870000000002,
    "predictionStdEV": 1.3179423405824706,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3057",
    "formula": "Ba2UNiO6",
    "ggaBandgapEV": 1.6511,
    "predictedBandgapEV": 2.1851000000000007,
    "predictionStdEV": 1.3181984638133961,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3058",
    "formula": "ZrCuF3",
    "ggaBandgapEV": 0.4729,
    "predictedBandgapEV": 2.8767599999999978,
    "predictionStdEV": 1.318329360364851,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3059",
    "formula": "DyInO3",
    "ggaBandgapEV": 2.0164,
    "predictedBandgapEV": 3.4941000000000093,
    "predictionStdEV": 1.3186484709732156,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3060",
    "formula": "SrAlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.8944900000000016,
    "predictionStdEV": 1.3189063992186878,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3061",
    "formula": "Mg2BiWO6",
    "ggaBandgapEV": 1.9223,
    "predictedBandgapEV": 2.6982299999999975,
    "predictionStdEV": 1.319913412728276,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3062",
    "formula": "SrGeO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.40996,
    "predictionStdEV": 1.3199940145318845,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3063",
    "formula": "TiNiO3",
    "ggaBandgapEV": 2.7244,
    "predictedBandgapEV": 2.6244,
    "predictionStdEV": 1.3200453008893298,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3064",
    "formula": "Sr2NiMoO6",
    "ggaBandgapEV": 2.3233,
    "predictedBandgapEV": 2.3545800000000034,
    "predictionStdEV": 1.3206914566241434,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3065",
    "formula": "Ca2TaMoO6",
    "ggaBandgapEV": 0.978,
    "predictedBandgapEV": 2.9105799999999986,
    "predictionStdEV": 1.320765181097685,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3066",
    "formula": "Ca2MnWO6",
    "ggaBandgapEV": 2.1993,
    "predictedBandgapEV": 2.9102299999999994,
    "predictionStdEV": 1.3218875886776449,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3067",
    "formula": "Sr2ErUO6",
    "ggaBandgapEV": 0.9311,
    "predictedBandgapEV": 2.8954999999999975,
    "predictionStdEV": 1.3223237689764167,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3068",
    "formula": "NaCoF3",
    "ggaBandgapEV": 2.0686,
    "predictedBandgapEV": 1.9686,
    "predictionStdEV": 1.3224263268704244,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3069",
    "formula": "Li2CrWO6",
    "ggaBandgapEV": 0.4978,
    "predictedBandgapEV": 2.8192299999999944,
    "predictionStdEV": 1.3225536877949415,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3070",
    "formula": "ErInO3",
    "ggaBandgapEV": 1.9574,
    "predictedBandgapEV": 3.402540000000006,
    "predictionStdEV": 1.3235619171009718,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3071",
    "formula": "GePbO3",
    "ggaBandgapEV": 2.6967,
    "predictedBandgapEV": 2.802829999999996,
    "predictionStdEV": 1.3235959508475392,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3072",
    "formula": "Ca2CoWO6",
    "ggaBandgapEV": 1.2916,
    "predictedBandgapEV": 1.1916,
    "predictionStdEV": 1.323629094988473,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3073",
    "formula": "Sr2LuRuO6",
    "ggaBandgapEV": 0.1195,
    "predictedBandgapEV": 2.447619999999998,
    "predictionStdEV": 1.323956772557171,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3074",
    "formula": "HfBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.058909999999998,
    "predictionStdEV": 1.3240798925669104,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3075",
    "formula": "TlNO3",
    "ggaBandgapEV": 2.7867,
    "predictedBandgapEV": 3.1897300000000013,
    "predictionStdEV": 1.3241852502954417,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3076",
    "formula": "Ca2SbWO6",
    "ggaBandgapEV": 1.4767,
    "predictedBandgapEV": 3.1708600000000033,
    "predictionStdEV": 1.3245990942168133,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3077",
    "formula": "Ca2TaBiO6",
    "ggaBandgapEV": 1.8254,
    "predictedBandgapEV": 3.0579000000000005,
    "predictionStdEV": 1.3257586846783238,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3078",
    "formula": "Sr2HoUO6",
    "ggaBandgapEV": 0.926,
    "predictedBandgapEV": 2.883679999999998,
    "predictionStdEV": 1.3267701600503359,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3079",
    "formula": "La2MgVO6",
    "ggaBandgapEV": 1.74,
    "predictedBandgapEV": 2.732619999999997,
    "predictionStdEV": 1.326944511123205,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3080",
    "formula": "HfCoO3",
    "ggaBandgapEV": 2.4807,
    "predictedBandgapEV": 2.3807,
    "predictionStdEV": 1.327930136867148,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3081",
    "formula": "HoInO3",
    "ggaBandgapEV": 1.9695,
    "predictedBandgapEV": 3.4566400000000073,
    "predictionStdEV": 1.3279892734506522,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3082",
    "formula": "Zn2BiPO6",
    "ggaBandgapEV": 2.8963,
    "predictedBandgapEV": 3.3255500000000064,
    "predictionStdEV": 1.3285096339507667,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3083",
    "formula": "Ba2InIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.97755,
    "predictionStdEV": 1.3293192797443336,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3084",
    "formula": "Sr2ScOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.6726100000000026,
    "predictionStdEV": 1.3304579429279224,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3085",
    "formula": "MnTlF3",
    "ggaBandgapEV": 3.1078,
    "predictedBandgapEV": 3.03183,
    "predictionStdEV": 1.3335577606913032,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3086",
    "formula": "CoSnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.5870200000000025,
    "predictionStdEV": 1.3337297775786519,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3087",
    "formula": "EuHfO3",
    "ggaBandgapEV": 0.5973,
    "predictedBandgapEV": 2.511609999999998,
    "predictionStdEV": 1.3344459741405814,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3088",
    "formula": "MnSeO3",
    "ggaBandgapEV": 3.5632,
    "predictedBandgapEV": 3.4632,
    "predictionStdEV": 1.3348075653066989,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3089",
    "formula": "Ba2ZrWO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8607600000000024,
    "predictionStdEV": 1.3350425170757676,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3090",
    "formula": "EuGaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3600299999999996,
    "predictionStdEV": 1.3355023957672252,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3091",
    "formula": "HfSnO3",
    "ggaBandgapEV": 2.3785,
    "predictedBandgapEV": 3.1350800000000003,
    "predictionStdEV": 1.3356525721908363,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3092",
    "formula": "Ca2TeWO6",
    "ggaBandgapEV": 1.5348,
    "predictedBandgapEV": 3.1722300000000025,
    "predictionStdEV": 1.3364044960639707,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3093",
    "formula": "Ca2ScReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.857140000000001,
    "predictionStdEV": 1.3365245678250741,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3094",
    "formula": "ReClO3",
    "ggaBandgapEV": 3.5923,
    "predictedBandgapEV": 3.4922999999999997,
    "predictionStdEV": 1.3381363112926876,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3095",
    "formula": "EuSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3065200000000003,
    "predictionStdEV": 1.3400277197132913,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3096",
    "formula": "Sr2LuBiO6",
    "ggaBandgapEV": 1.9569,
    "predictedBandgapEV": 2.743579999999997,
    "predictionStdEV": 1.3403501347036157,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3097",
    "formula": "TlSbO3",
    "ggaBandgapEV": 2.3226,
    "predictedBandgapEV": 2.8705099999999955,
    "predictionStdEV": 1.340657969021181,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3098",
    "formula": "Ca2SnSbO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.65268,
    "predictionStdEV": 1.3410219676053015,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3099",
    "formula": "Sr2ScReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8172400000000026,
    "predictionStdEV": 1.3415559930170626,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3100",
    "formula": "Sr2ScBiO6",
    "ggaBandgapEV": 1.839,
    "predictedBandgapEV": 3.173559999999997,
    "predictionStdEV": 1.341977803989321,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3101",
    "formula": "MnGaO3",
    "ggaBandgapEV": 1.2819,
    "predictedBandgapEV": 2.955280000000002,
    "predictionStdEV": 1.3433381263107234,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3102",
    "formula": "NaBiO3",
    "ggaBandgapEV": 1.0783,
    "predictedBandgapEV": 2.6175099999999936,
    "predictionStdEV": 1.3441120302638454,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3103",
    "formula": "La2MnZnO6",
    "ggaBandgapEV": 1.6382,
    "predictedBandgapEV": 2.3163399999999936,
    "predictionStdEV": 1.344796343094373,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3104",
    "formula": "CrBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4713000000000007,
    "predictionStdEV": 1.3450228288025443,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3105",
    "formula": "HfMnO3",
    "ggaBandgapEV": 3.0309,
    "predictedBandgapEV": 2.9309,
    "predictionStdEV": 1.3452469648358254,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3106",
    "formula": "Sr2MnSbO6",
    "ggaBandgapEV": 0.9533,
    "predictedBandgapEV": 2.7301499999999983,
    "predictionStdEV": 1.3455254094590712,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3107",
    "formula": "TlPO3",
    "ggaBandgapEV": 3.4619,
    "predictedBandgapEV": 3.4186800000000037,
    "predictionStdEV": 1.3455657017031903,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3108",
    "formula": "GdAsO3",
    "ggaBandgapEV": 2.1317,
    "predictedBandgapEV": 2.9012900000000013,
    "predictionStdEV": 1.3469662155748365,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3109",
    "formula": "MnInO3",
    "ggaBandgapEV": 0.9358,
    "predictedBandgapEV": 2.828320000000001,
    "predictionStdEV": 1.3489168905458926,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3110",
    "formula": "Ca2CoSbO6",
    "ggaBandgapEV": 0.6848,
    "predictedBandgapEV": 1.4916000000000025,
    "predictionStdEV": 1.350047495460805,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3111",
    "formula": "Sr2MnReO6",
    "ggaBandgapEV": 0.3264,
    "predictedBandgapEV": 2.090849999999999,
    "predictionStdEV": 1.351737595652351,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3112",
    "formula": "LaZrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.129520000000004,
    "predictionStdEV": 1.3523665810718626,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3113",
    "formula": "Mg2TaBiO6",
    "ggaBandgapEV": 2.0843,
    "predictedBandgapEV": 2.9411,
    "predictionStdEV": 1.353095299674048,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3114",
    "formula": "Sr2UNiO6",
    "ggaBandgapEV": 1.594,
    "predictedBandgapEV": 2.138630000000001,
    "predictionStdEV": 1.3539091081383559,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3115",
    "formula": "TePbO3",
    "ggaBandgapEV": 2.7778,
    "predictedBandgapEV": 2.7370499999999947,
    "predictionStdEV": 1.3539663760596155,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3116",
    "formula": "HfMgO3",
    "ggaBandgapEV": 0.7867,
    "predictedBandgapEV": 2.866289999999997,
    "predictionStdEV": 1.3539800906586468,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3117",
    "formula": "YbCeO3",
    "ggaBandgapEV": 1.8093,
    "predictedBandgapEV": 3.034840000000003,
    "predictionStdEV": 1.355104340779707,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3118",
    "formula": "Mg2BiSbO6",
    "ggaBandgapEV": 1.3848,
    "predictedBandgapEV": 2.7613099999999977,
    "predictionStdEV": 1.3554694145940742,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3119",
    "formula": "AlSbO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.49058,
    "predictionStdEV": 1.3563323573519863,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3120",
    "formula": "Ba2FeWO6",
    "ggaBandgapEV": 2.5062,
    "predictedBandgapEV": 2.4062,
    "predictionStdEV": 1.35656218504719,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3121",
    "formula": "PrGaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3430400000000002,
    "predictionStdEV": 1.35747558298483,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3122",
    "formula": "ScSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4982600000000024,
    "predictionStdEV": 1.361040180303286,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3123",
    "formula": "AlCuO3",
    "ggaBandgapEV": 0.0695,
    "predictedBandgapEV": 3.4211600000000066,
    "predictionStdEV": 1.3620213854415084,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3124",
    "formula": "TbErO3",
    "ggaBandgapEV": 2.2006,
    "predictedBandgapEV": 3.0312799999999966,
    "predictionStdEV": 1.3632841089076035,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3125",
    "formula": "Mg2TaSnO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.11394,
    "predictionStdEV": 1.3637589509880395,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3126",
    "formula": "Ca2TaAgO6",
    "ggaBandgapEV": 0.4497,
    "predictedBandgapEV": 2.7641799999999987,
    "predictionStdEV": 1.3651174043282868,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3127",
    "formula": "PmInO3",
    "ggaBandgapEV": 1.7849,
    "predictedBandgapEV": 3.2624399999999993,
    "predictionStdEV": 1.3651504116396862,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3128",
    "formula": "TlIO3",
    "ggaBandgapEV": 3.0753,
    "predictedBandgapEV": 3.018079999999995,
    "predictionStdEV": 1.3653863605588004,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3129",
    "formula": "GdTmO3",
    "ggaBandgapEV": 3.2167,
    "predictedBandgapEV": 3.488560000000008,
    "predictionStdEV": 1.3667011108505038,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3130",
    "formula": "LiBiO3",
    "ggaBandgapEV": 0.1446,
    "predictedBandgapEV": 2.419629999999997,
    "predictionStdEV": 1.3674604246924298,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3131",
    "formula": "NdGaO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.3291,
    "predictionStdEV": 1.3678260817808678,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3132",
    "formula": "CeBeO3",
    "ggaBandgapEV": 0.8563,
    "predictedBandgapEV": 2.7313799999999997,
    "predictionStdEV": 1.3685052778853277,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3133",
    "formula": "GdInO3",
    "ggaBandgapEV": 1.8357,
    "predictedBandgapEV": 3.275020000000006,
    "predictionStdEV": 1.3688650041549018,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3134",
    "formula": "Ca2MnReO6",
    "ggaBandgapEV": 0.1672,
    "predictedBandgapEV": 2.161409999999997,
    "predictionStdEV": 1.3694520297914798,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3135",
    "formula": "HfCdO3",
    "ggaBandgapEV": 2.3235,
    "predictedBandgapEV": 3.0237200000000004,
    "predictionStdEV": 1.3711210601547905,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3136",
    "formula": "Sr2UInO6",
    "ggaBandgapEV": 1.0608,
    "predictedBandgapEV": 3.016589999999998,
    "predictionStdEV": 1.3712784261046338,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3137",
    "formula": "PaBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.033620000000002,
    "predictionStdEV": 1.3713126906727,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3138",
    "formula": "Ca2ScOsO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.761710000000001,
    "predictionStdEV": 1.3734134577395096,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3139",
    "formula": "PmErO3",
    "ggaBandgapEV": 2.1804,
    "predictedBandgapEV": 2.999259999999995,
    "predictionStdEV": 1.3738279558954973,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3140",
    "formula": "Rb2NaCoF6",
    "ggaBandgapEV": 2.9462,
    "predictedBandgapEV": 2.8462,
    "predictionStdEV": 1.3758920845764024,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3141",
    "formula": "CeAsO3",
    "ggaBandgapEV": 0.2861,
    "predictedBandgapEV": 2.436759999999998,
    "predictionStdEV": 1.3783441886553598,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3142",
    "formula": "SmSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.2141699999999993,
    "predictionStdEV": 1.3785940885917072,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3143",
    "formula": "PbSeO3",
    "ggaBandgapEV": 3.3187,
    "predictedBandgapEV": 3.2187,
    "predictionStdEV": 1.3787594255706843,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3144",
    "formula": "Ca2IrWO6",
    "ggaBandgapEV": 1.1287,
    "predictedBandgapEV": 2.517639999999998,
    "predictionStdEV": 1.3803348616911775,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3145",
    "formula": "PbSO3",
    "ggaBandgapEV": 3.2251,
    "predictedBandgapEV": 3.128739999999998,
    "predictionStdEV": 1.3807504526162588,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3146",
    "formula": "K2LiCoF6",
    "ggaBandgapEV": 2.6277,
    "predictedBandgapEV": 2.5277,
    "predictionStdEV": 1.381653916724445,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3147",
    "formula": "CoCO3",
    "ggaBandgapEV": 1.5603,
    "predictedBandgapEV": 1.6308300000000036,
    "predictionStdEV": 1.3834916194541962,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3148",
    "formula": "La2MgMnO6",
    "ggaBandgapEV": 2.1288,
    "predictedBandgapEV": 2.7024399999999984,
    "predictionStdEV": 1.3841073825393753,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3149",
    "formula": "NpBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.0160500000000026,
    "predictionStdEV": 1.3847582631997546,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3150",
    "formula": "Ca2VIrO6",
    "ggaBandgapEV": 0.4188,
    "predictedBandgapEV": 2.304779999999998,
    "predictionStdEV": 1.3848949604933938,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3151",
    "formula": "NdInO3",
    "ggaBandgapEV": 1.811,
    "predictedBandgapEV": 3.239539999999998,
    "predictionStdEV": 1.3851073562724319,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3152",
    "formula": "Cs2KCoF6",
    "ggaBandgapEV": 3.0416,
    "predictedBandgapEV": 2.9415999999999998,
    "predictionStdEV": 1.3856472278325391,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3153",
    "formula": "Ca2BiWO6",
    "ggaBandgapEV": 0.5267,
    "predictedBandgapEV": 2.305739999999998,
    "predictionStdEV": 1.3862016276141076,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3154",
    "formula": "Ca2TaSbO6",
    "ggaBandgapEV": 0.816,
    "predictedBandgapEV": 2.9654700000000007,
    "predictionStdEV": 1.3864110606526474,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3155",
    "formula": "Sr2ZrMoO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.023940000000003,
    "predictionStdEV": 1.3868986539758434,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3156",
    "formula": "La2TiZnO6",
    "ggaBandgapEV": 2.9631,
    "predictedBandgapEV": 3.2726000000000033,
    "predictionStdEV": 1.3871907006608728,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3157",
    "formula": "La2ZnNiO6",
    "ggaBandgapEV": 1.1374,
    "predictedBandgapEV": 2.099029999999997,
    "predictionStdEV": 1.3877227421570908,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3158",
    "formula": "ZrMnO3",
    "ggaBandgapEV": 2.6175,
    "predictedBandgapEV": 2.607699999999995,
    "predictionStdEV": 1.3882132797232574,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3159",
    "formula": "Cs2NaCoF6",
    "ggaBandgapEV": 2.801,
    "predictedBandgapEV": 2.701,
    "predictionStdEV": 1.3909047488595316,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3160",
    "formula": "TlVO3",
    "ggaBandgapEV": 3.0073,
    "predictedBandgapEV": 2.981999999999997,
    "predictionStdEV": 1.3923151941999334,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3161",
    "formula": "Zn2CoSbO6",
    "ggaBandgapEV": 1.2626,
    "predictedBandgapEV": 1.734210000000001,
    "predictionStdEV": 1.3928900623882723,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3162",
    "formula": "Ba2InReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.026070000000001,
    "predictionStdEV": 1.3943061375106962,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3163",
    "formula": "AlInO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.601220000000001,
    "predictionStdEV": 1.3943758143341405,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3164",
    "formula": "UBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9434900000000015,
    "predictionStdEV": 1.3954306037564177,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3165",
    "formula": "SiPbO3",
    "ggaBandgapEV": 3.1566,
    "predictedBandgapEV": 3.1913599999999986,
    "predictionStdEV": 1.3959696810461177,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3166",
    "formula": "AlMoN3",
    "ggaBandgapEV": 1.5102,
    "predictedBandgapEV": 3.030039999999999,
    "predictionStdEV": 1.3963836143409867,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3167",
    "formula": "NbTlO3",
    "ggaBandgapEV": 0.751,
    "predictedBandgapEV": 2.4019299999999943,
    "predictionStdEV": 1.3967400349027002,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3168",
    "formula": "Ca2SnIrO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.971939999999999,
    "predictionStdEV": 1.397378630293165,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3169",
    "formula": "NiSnO3",
    "ggaBandgapEV": 1.7885,
    "predictedBandgapEV": 2.4517199999999986,
    "predictionStdEV": 1.3976327634969086,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3170",
    "formula": "HfBeO3",
    "ggaBandgapEV": 1.5174,
    "predictedBandgapEV": 3.0992299999999986,
    "predictionStdEV": 1.3977096826952295,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3171",
    "formula": "La2MgNiO6",
    "ggaBandgapEV": 1.3899,
    "predictedBandgapEV": 2.178969999999996,
    "predictionStdEV": 1.398356459955757,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3172",
    "formula": "PuBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.8604000000000016,
    "predictionStdEV": 1.4004449435804336,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3173",
    "formula": "La2ZnWO6",
    "ggaBandgapEV": 2.1243,
    "predictedBandgapEV": 2.853489999999999,
    "predictionStdEV": 1.4013375645789268,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3174",
    "formula": "Mg2CoSbO6",
    "ggaBandgapEV": 1.5898,
    "predictedBandgapEV": 1.714240000000002,
    "predictionStdEV": 1.4022417845721207,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3175",
    "formula": "HoErO3",
    "ggaBandgapEV": 2.2124,
    "predictedBandgapEV": 3.0918199999999953,
    "predictionStdEV": 1.4025924880734246,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3176",
    "formula": "Ba2TaCoO6",
    "ggaBandgapEV": 1.5328,
    "predictedBandgapEV": 1.4327999999999999,
    "predictionStdEV": 1.4041624229411669,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3177",
    "formula": "Ca2FeWO6",
    "ggaBandgapEV": 2.8209,
    "predictedBandgapEV": 2.7209,
    "predictionStdEV": 1.4095854032657937,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3178",
    "formula": "TiBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.5037600000000007,
    "predictionStdEV": 1.4101645869897592,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3179",
    "formula": "VBO3",
    "ggaBandgapEV": 1.8733,
    "predictedBandgapEV": 2.93377,
    "predictionStdEV": 1.4106336296501654,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3180",
    "formula": "TmTlO3",
    "ggaBandgapEV": 0.7357,
    "predictedBandgapEV": 2.464009999999992,
    "predictionStdEV": 1.421824029161133,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3181",
    "formula": "SmTlO3",
    "ggaBandgapEV": 0.8895,
    "predictedBandgapEV": 2.4521199999999923,
    "predictionStdEV": 1.4233276171001537,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3182",
    "formula": "Sr2ZrMnO6",
    "ggaBandgapEV": 1.5061,
    "predictedBandgapEV": 2.9783000000000004,
    "predictionStdEV": 1.424109971174975,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3183",
    "formula": "YSbO3",
    "ggaBandgapEV": 0.716,
    "predictedBandgapEV": 2.6163599999999994,
    "predictionStdEV": 1.4242485563973737,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3184",
    "formula": "Ca2TaSnO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.192329999999999,
    "predictionStdEV": 1.4242574630662794,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3185",
    "formula": "Ca2TiWO6",
    "ggaBandgapEV": 0.4078,
    "predictedBandgapEV": 2.6280099999999993,
    "predictionStdEV": 1.424840794580222,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3186",
    "formula": "GaBiO3",
    "ggaBandgapEV": 1.6117,
    "predictedBandgapEV": 2.375769999999996,
    "predictionStdEV": 1.4251966029639564,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3187",
    "formula": "EuCO3",
    "ggaBandgapEV": 0.3334,
    "predictedBandgapEV": 2.6406499999999977,
    "predictionStdEV": 1.4252570040171693,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3188",
    "formula": "Ba2YOsO6",
    "ggaBandgapEV": 0.0727,
    "predictedBandgapEV": 2.4375500000000003,
    "predictionStdEV": 1.4256319817891296,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3189",
    "formula": "MnAlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.667759999999998,
    "predictionStdEV": 1.4268259117355566,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3190",
    "formula": "Ca2BiSbO6",
    "ggaBandgapEV": 0.8348,
    "predictedBandgapEV": 2.730219999999996,
    "predictionStdEV": 1.4268631509713876,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3191",
    "formula": "Sr2InReO6",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9251699999999996,
    "predictionStdEV": 1.4283809789758481,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3192",
    "formula": "AlSnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.7718600000000033,
    "predictionStdEV": 1.428650111258876,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3193",
    "formula": "ScSnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.6141000000000063,
    "predictionStdEV": 1.428858631915696,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3194",
    "formula": "Ca2AgWO6",
    "ggaBandgapEV": 0.0529,
    "predictedBandgapEV": 2.547100000000001,
    "predictionStdEV": 1.4300850639035398,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3195",
    "formula": "TbGdO3",
    "ggaBandgapEV": 3.0938,
    "predictedBandgapEV": 3.4651600000000027,
    "predictionStdEV": 1.4303877007301202,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3196",
    "formula": "GdLuO3",
    "ggaBandgapEV": 3.1967,
    "predictedBandgapEV": 3.2649400000000024,
    "predictionStdEV": 1.4314505218134503,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3197",
    "formula": "ZrSiO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.28443,
    "predictionStdEV": 1.4360046744701083,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3198",
    "formula": "NiSeO3",
    "ggaBandgapEV": 2.9171,
    "predictedBandgapEV": 2.8171,
    "predictionStdEV": 1.436073549648487,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3199",
    "formula": "PbCO3",
    "ggaBandgapEV": 3.3647,
    "predictedBandgapEV": 3.2647,
    "predictionStdEV": 1.438186203382581,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3200",
    "formula": "AlWN3",
    "ggaBandgapEV": 1.5621,
    "predictedBandgapEV": 2.6571499999999975,
    "predictionStdEV": 1.4385189701564607,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3201",
    "formula": "BiCO3",
    "ggaBandgapEV": 1.4108,
    "predictedBandgapEV": 2.258899999999997,
    "predictionStdEV": 1.4426152952190687,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3202",
    "formula": "Nd2MnGaO6",
    "ggaBandgapEV": 2.3974,
    "predictedBandgapEV": 3.1997000000000013,
    "predictionStdEV": 1.4428219952579044,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3203",
    "formula": "Ba2InOsO6",
    "ggaBandgapEV": 0.4451,
    "predictedBandgapEV": 2.794089999999996,
    "predictionStdEV": 1.443990035249553,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3204",
    "formula": "AlIrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9667699999999997,
    "predictionStdEV": 1.444156091667382,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3205",
    "formula": "InCoO3",
    "ggaBandgapEV": 1.2726,
    "predictedBandgapEV": 1.749930000000003,
    "predictionStdEV": 1.4452803344334264,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3206",
    "formula": "UTlO3",
    "ggaBandgapEV": 0.3286,
    "predictedBandgapEV": 2.234739999999995,
    "predictionStdEV": 1.4514985816045431,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3207",
    "formula": "Mg2NiWO6",
    "ggaBandgapEV": 1.9868,
    "predictedBandgapEV": 2.192249999999999,
    "predictionStdEV": 1.45191459373477,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3208",
    "formula": "Ca2CoTeO6",
    "ggaBandgapEV": 1.6341,
    "predictedBandgapEV": 1.6199200000000031,
    "predictionStdEV": 1.45280906990561,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3209",
    "formula": "AlCrO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.693299999999999,
    "predictionStdEV": 1.4551416803871688,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3210",
    "formula": "Sr2CoTeO6",
    "ggaBandgapEV": 1.4844,
    "predictedBandgapEV": 1.545190000000004,
    "predictionStdEV": 1.46178240990238,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3211",
    "formula": "MgZrO3",
    "ggaBandgapEV": 0.643,
    "predictedBandgapEV": 3.3538600000000045,
    "predictionStdEV": 1.4671352018133834,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3212",
    "formula": "La2GaFeO6",
    "ggaBandgapEV": 2.3289,
    "predictedBandgapEV": 2.2289,
    "predictionStdEV": 1.4707262713027214,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3213",
    "formula": "BiSbO3",
    "ggaBandgapEV": 2.1974,
    "predictedBandgapEV": 2.3580899999999967,
    "predictionStdEV": 1.4796613132402963,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3214",
    "formula": "Zn2CoWO6",
    "ggaBandgapEV": 2.6091,
    "predictedBandgapEV": 2.5091,
    "predictionStdEV": 1.4824015968690782,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3215",
    "formula": "Cs2TlFeF6",
    "ggaBandgapEV": 2.9884,
    "predictedBandgapEV": 2.8884,
    "predictionStdEV": 1.4912536298027905,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3216",
    "formula": "AlMoO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.4363999999999995,
    "predictionStdEV": 1.4916925085284836,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3217",
    "formula": "ScBiO3",
    "ggaBandgapEV": 1.0351,
    "predictedBandgapEV": 1.8730299999999973,
    "predictionStdEV": 1.4926860584530202,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3218",
    "formula": "EuZrO3",
    "ggaBandgapEV": 0.3448,
    "predictedBandgapEV": 2.874879999999993,
    "predictionStdEV": 1.49375050982418,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3219",
    "formula": "NdZrO3",
    "ggaBandgapEV": 0.0717,
    "predictedBandgapEV": 2.7149599999999947,
    "predictionStdEV": 1.4961766601574835,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3220",
    "formula": "ZrBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.340260000000001,
    "predictionStdEV": 1.4969368832385674,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3221",
    "formula": "LuTlO3",
    "ggaBandgapEV": 0.6919,
    "predictedBandgapEV": 2.2606499999999907,
    "predictionStdEV": 1.4984586839482772,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3222",
    "formula": "La2ZrNiO6",
    "ggaBandgapEV": 1.9916,
    "predictedBandgapEV": 2.254349999999993,
    "predictionStdEV": 1.5069292377215318,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3223",
    "formula": "Zn2NiWO6",
    "ggaBandgapEV": 2.9376,
    "predictedBandgapEV": 2.8376,
    "predictionStdEV": 1.5098476154566052,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3224",
    "formula": "CoSiO3",
    "ggaBandgapEV": 2.6041,
    "predictedBandgapEV": 2.5040999999999998,
    "predictionStdEV": 1.5148546915133483,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3225",
    "formula": "HfPbO3",
    "ggaBandgapEV": 2.7053,
    "predictedBandgapEV": 2.6635199999999943,
    "predictionStdEV": 1.515400412300326,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3226",
    "formula": "ZrBeO3",
    "ggaBandgapEV": 1.0767,
    "predictedBandgapEV": 3.412449999999998,
    "predictionStdEV": 1.5185026333530005,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3227",
    "formula": "HfNiO3",
    "ggaBandgapEV": 2.9501,
    "predictedBandgapEV": 2.8501,
    "predictionStdEV": 1.5186683146757236,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3228",
    "formula": "InBiO3",
    "ggaBandgapEV": 2.3887,
    "predictedBandgapEV": 2.6611099999999963,
    "predictionStdEV": 1.520490518845809,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3229",
    "formula": "TaTlO3",
    "ggaBandgapEV": 0.9695,
    "predictedBandgapEV": 2.2256599999999924,
    "predictionStdEV": 1.5212410605817859,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3230",
    "formula": "La2HfNiO6",
    "ggaBandgapEV": 2.1094,
    "predictedBandgapEV": 2.1419099999999958,
    "predictionStdEV": 1.5256915815131182,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3231",
    "formula": "AlWO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 1.9550399999999986,
    "predictionStdEV": 1.5297801470799652,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3232",
    "formula": "Sr2InOsO6",
    "ggaBandgapEV": 0.407,
    "predictedBandgapEV": 2.7859199999999986,
    "predictionStdEV": 1.5300506702720642,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3233",
    "formula": "EuBO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.292999999999999,
    "predictionStdEV": 1.5306171304411804,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3234",
    "formula": "YZrO3",
    "ggaBandgapEV": 0.4505,
    "predictedBandgapEV": 2.7719,
    "predictionStdEV": 1.5316331773633027,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3235",
    "formula": "LaTlO3",
    "ggaBandgapEV": 0.3504,
    "predictedBandgapEV": 2.4229799999999924,
    "predictionStdEV": 1.5330748577939721,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3236",
    "formula": "Mg2CoWO6",
    "ggaBandgapEV": 2.5275,
    "predictedBandgapEV": 2.4274999999999998,
    "predictionStdEV": 1.5365983464783493,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3237",
    "formula": "AlVO3",
    "ggaBandgapEV": 1.5969,
    "predictedBandgapEV": 3.1703399999999995,
    "predictionStdEV": 1.541835816291735,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3238",
    "formula": "YSnO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.315680000000001,
    "predictionStdEV": 1.5425129294757955,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3239",
    "formula": "Tb2AlFeO6",
    "ggaBandgapEV": 2.5417,
    "predictedBandgapEV": 2.4417,
    "predictionStdEV": 1.547454235963055,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3240",
    "formula": "AlTlO3",
    "ggaBandgapEV": 0.7377,
    "predictedBandgapEV": 2.7662599999999955,
    "predictionStdEV": 1.5483061106900018,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3241",
    "formula": "Sr2NiTeO6",
    "ggaBandgapEV": 1.9572,
    "predictedBandgapEV": 2.528879999999999,
    "predictionStdEV": 1.5566402428306918,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3242",
    "formula": "BiBO3",
    "ggaBandgapEV": 3.0329,
    "predictedBandgapEV": 3.157460000000004,
    "predictionStdEV": 1.5588965483315433,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3243",
    "formula": "ZrPbO3",
    "ggaBandgapEV": 2.8612,
    "predictedBandgapEV": 3.1264399999999957,
    "predictionStdEV": 1.5761686858962778,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3244",
    "formula": "TiAlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.796559999999999,
    "predictionStdEV": 1.5780843343750672,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3245",
    "formula": "NpAlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.475120000000002,
    "predictionStdEV": 1.5813181165091337,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3246",
    "formula": "ScTlO3",
    "ggaBandgapEV": 0.928,
    "predictedBandgapEV": 2.6945999999999968,
    "predictionStdEV": 1.595484860473454,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3247",
    "formula": "PaTlO3",
    "ggaBandgapEV": 2.9186,
    "predictedBandgapEV": 3.149000000000001,
    "predictionStdEV": 1.5987625840005157,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3248",
    "formula": "HoBiO3",
    "ggaBandgapEV": 2.7472,
    "predictedBandgapEV": 2.6471999999999998,
    "predictionStdEV": 1.600481745319201,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3249",
    "formula": "UAlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.478280000000001,
    "predictionStdEV": 1.602613690694051,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3250",
    "formula": "ErBiO3",
    "ggaBandgapEV": 2.5928,
    "predictedBandgapEV": 2.5436299999999967,
    "predictionStdEV": 1.6045939901108919,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3251",
    "formula": "TmBiO3",
    "ggaBandgapEV": 3.2028,
    "predictedBandgapEV": 3.1028,
    "predictionStdEV": 1.6058723406298523,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3252",
    "formula": "La2MnGaO6",
    "ggaBandgapEV": 1.1499,
    "predictedBandgapEV": 2.746279999999995,
    "predictionStdEV": 1.6078986788974006,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3253",
    "formula": "Eu2TaAlO6",
    "ggaBandgapEV": 0.3728,
    "predictedBandgapEV": 2.864369999999999,
    "predictionStdEV": 1.6093348480350524,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3254",
    "formula": "NiCO3",
    "ggaBandgapEV": 3.3914,
    "predictedBandgapEV": 3.2914,
    "predictionStdEV": 1.6128578886870357,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3255",
    "formula": "YbAlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.637899999999997,
    "predictionStdEV": 1.6192413316118148,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3256",
    "formula": "TlNiF3",
    "ggaBandgapEV": 3.5507,
    "predictedBandgapEV": 3.4507,
    "predictionStdEV": 1.6212281332372716,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3257",
    "formula": "GdBO3",
    "ggaBandgapEV": 0.1767,
    "predictedBandgapEV": 3.166320000000004,
    "predictionStdEV": 1.6257811530461292,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3258",
    "formula": "LuBiO3",
    "ggaBandgapEV": 2.4498,
    "predictedBandgapEV": 2.3695699999999955,
    "predictionStdEV": 1.6365979546302725,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3259",
    "formula": "La2GaNiO6",
    "ggaBandgapEV": 0.6708,
    "predictedBandgapEV": 2.4094799999999954,
    "predictionStdEV": 1.6504959344391004,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3260",
    "formula": "Ba2NiWO6",
    "ggaBandgapEV": 3.3607,
    "predictedBandgapEV": 3.2607,
    "predictionStdEV": 1.655194818110541,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3261",
    "formula": "La2GaCoO6",
    "ggaBandgapEV": 1.8573,
    "predictedBandgapEV": 1.908840000000001,
    "predictionStdEV": 1.6686399115447281,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3262",
    "formula": "Ca2NiWO6",
    "ggaBandgapEV": 3.0021,
    "predictedBandgapEV": 2.9021,
    "predictionStdEV": 1.6739327877486598,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3263",
    "formula": "AlBiO3",
    "ggaBandgapEV": 1.9384,
    "predictedBandgapEV": 2.957329999999998,
    "predictionStdEV": 1.6755684769951926,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3264",
    "formula": "ZrAlO3",
    "ggaBandgapEV": 0.0,
    "predictedBandgapEV": 2.721119999999998,
    "predictionStdEV": 1.6851146980547052,
    "isFalseMetalRescued": true
  },
  {
    "id": "cand-3265",
    "formula": "LaBiO3",
    "ggaBandgapEV": 2.7481,
    "predictedBandgapEV": 2.7491899999999965,
    "predictionStdEV": 1.7200184283605773,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3266",
    "formula": "Sr2NiWO6",
    "ggaBandgapEV": 3.368,
    "predictedBandgapEV": 3.268,
    "predictionStdEV": 1.7301065927855432,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3267",
    "formula": "CeBO3",
    "ggaBandgapEV": 0.1106,
    "predictedBandgapEV": 3.14812,
    "predictionStdEV": 1.7632298674875035,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3268",
    "formula": "AlCoO3",
    "ggaBandgapEV": 2.5206,
    "predictedBandgapEV": 2.4206,
    "predictionStdEV": 1.7640402907813653,
    "isFalseMetalRescued": false
  },
  {
    "id": "cand-3269",
    "formula": "AcBO3",
    "ggaBandgapEV": 0.8127,
    "predictedBandgapEV": 3.147319999999996,
    "predictionStdEV": 1.815321629243698,
    "isFalseMetalRescued": false
  }
];
