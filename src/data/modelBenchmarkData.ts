// Auto-generated from advanced ensemble benchmark results in the current workspace.

export interface BenchmarkRecord {
  id: string;
  formula: string;
  experimentalGapEV: number | null;
  ggaGapEV: number | null;
  predictedFinalGapEV: number | null;
  uncertaintyEV: number | null;
  absoluteErrorEV: number | null;
  isMetal: boolean;
}

export interface ModelBenchmarkSummary {
  totalRecords: number;
  meanAbsoluteErrorEV: number;
  medianAbsoluteErrorEV: number;
  recordsWithinPoint1EV: number;
  recordsWithinPoint3EV: number;
  recordsWithinPoint5EV: number;
  zeroErrorRecords: number;
  metalCount: number;
  nonMetalCount: number;
  meanPredictedGapEV: number;
  sourceFile: string;
}

export const MODEL_BENCHMARK_SUMMARY: ModelBenchmarkSummary = {
  "totalRecords": 257,
  "meanAbsoluteErrorEV": 0.2216,
  "medianAbsoluteErrorEV": 0.0,
  "recordsWithinPoint1EV": 162,
  "recordsWithinPoint3EV": 203,
  "recordsWithinPoint5EV": 216,
  "zeroErrorRecords": 131,
  "metalCount": 142,
  "nonMetalCount": 115,
  "meanPredictedGapEV": 0.8895,
  "sourceFile": "\u591a\u4efb\u52a1\u5b66\u4e60+GGA\u8bef\u5dee/Core_Data/advanced_ensemble_results.csv"
};

export const BENCHMARK_EXAMPLES: BenchmarkRecord[] = [
  {
    "id": "bench-005",
    "formula": "AgGeO3",
    "experimentalGapEV": 0.0,
    "ggaGapEV": 0.0,
    "predictedFinalGapEV": 0.0,
    "uncertaintyEV": 1.078470009778159,
    "absoluteErrorEV": 0.0,
    "isMetal": true
  },
  {
    "id": "bench-006",
    "formula": "AgGeO3",
    "experimentalGapEV": 0.0,
    "ggaGapEV": 0.0,
    "predictedFinalGapEV": 0.0,
    "uncertaintyEV": 1.1085420765464291,
    "absoluteErrorEV": 0.0,
    "isMetal": true
  },
  {
    "id": "bench-007",
    "formula": "AgGeO3",
    "experimentalGapEV": 0.0,
    "ggaGapEV": 0.0,
    "predictedFinalGapEV": 0.0,
    "uncertaintyEV": 1.0431132349432266,
    "absoluteErrorEV": 0.0,
    "isMetal": true
  },
  {
    "id": "bench-008",
    "formula": "AgGeO3",
    "experimentalGapEV": 0.0,
    "ggaGapEV": 0.0,
    "predictedFinalGapEV": 0.0,
    "uncertaintyEV": 1.0327521644093451,
    "absoluteErrorEV": 0.0,
    "isMetal": true
  },
  {
    "id": "bench-009",
    "formula": "Ba2CoWO6",
    "experimentalGapEV": 0.0,
    "ggaGapEV": 0.0,
    "predictedFinalGapEV": 0.0,
    "uncertaintyEV": 0.982924948476099,
    "absoluteErrorEV": 0.0,
    "isMetal": true
  },
  {
    "id": "bench-010",
    "formula": "Ba2CuWO6",
    "experimentalGapEV": 0.0,
    "ggaGapEV": 0.0,
    "predictedFinalGapEV": 0.0,
    "uncertaintyEV": 1.2199791643147488,
    "absoluteErrorEV": 0.0,
    "isMetal": true
  },
  {
    "id": "bench-011",
    "formula": "Ba2CuWO6",
    "experimentalGapEV": 0.0,
    "ggaGapEV": 0.0,
    "predictedFinalGapEV": 0.0,
    "uncertaintyEV": 1.2199791643147488,
    "absoluteErrorEV": 0.0,
    "isMetal": true
  },
  {
    "id": "bench-012",
    "formula": "Ba2CaOsO6",
    "experimentalGapEV": 0.0,
    "ggaGapEV": 0.0,
    "predictedFinalGapEV": 0.0,
    "uncertaintyEV": 1.1719647223723537,
    "absoluteErrorEV": 0.0,
    "isMetal": true
  },
  {
    "id": "bench-013",
    "formula": "Ba2CaReO6",
    "experimentalGapEV": 0.0,
    "ggaGapEV": 0.0,
    "predictedFinalGapEV": 0.0,
    "uncertaintyEV": 1.3655407071159027,
    "absoluteErrorEV": 0.0,
    "isMetal": true
  },
  {
    "id": "bench-014",
    "formula": "Ba2CaReO6",
    "experimentalGapEV": 0.0,
    "ggaGapEV": 0.0,
    "predictedFinalGapEV": 0.0,
    "uncertaintyEV": 1.2007488272548383,
    "absoluteErrorEV": 0.0,
    "isMetal": true
  }
];
