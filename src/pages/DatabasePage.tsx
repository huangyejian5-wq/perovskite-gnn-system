import React, { useEffect, useMemo, useState } from 'react';
import {
  Atom,
  BarChart3,
  Beaker,
  BookOpen,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Database,
  Download,
  ExternalLink,
  Filter,
  Layers,
  Lightbulb,
  Microscope,
  RefreshCw,
  Search,
  Target,
} from 'lucide-react';
import {
  EXPERIMENTAL_BANDGAP_RECORDS,
  RESEARCH_DATASET_SUMMARY,
  SCREENED_CANDIDATE_RECORDS,
  ExperimentalBandgapRecord,
  ScreenedCandidateRecord,
} from '../data/researchDatasets';
import {
  ALL_LUMINESCENCE_RECORDS,
  LUMINESCENCE_DATASET_SUMMARY,
  LuminescenceSampleRecord,
} from '../data/luminescenceDatasets';
import {
  MP_FULL_RECORDS,
  MP_FULL_SUMMARY,
  MPFullRecord,
} from '../data/mpFullLibrary';
import {
  SUPPLEMENTARY_LITERATURE_RECORDS,
  SUPPLEMENTARY_LITERATURE_SUMMARY,
  SupplementaryLiteratureRecord,
} from '../data/supplementaryDatasets';

type DatasetTab = 'experimental' | 'supplementary' | 'screened' | 'luminescence' | 'mp';

const PAGE_SIZE = 15;

const confidenceWeight = (grade: string) => {
  if (grade === 'A') return 3;
  if (grade === 'B') return 2;
  if (grade === 'C') return 1;
  return 0;
};

const formatNumber = (value: number | null | undefined, digits = 2) => {
  if (value === null || value === undefined || Number.isNaN(value)) return 'N/A';
  return value.toFixed(digits);
};

interface MultiScaleMeta {
  primaryScale: string;
  dimensionality: string;
  dataDomain: string;
}

const inferFormulaFamily = (formula: string) => {
  const elements = Array.from(new Set((formula.match(/[A-Z][a-z]?/g) || [])));
  if (elements.length === 3) return '单钙钛矿';
  if (elements.length === 4) return '双钙钛矿';
  return '复杂钙钛矿';
};

const getExperimentalScaleMeta = (record: ExperimentalBandgapRecord): MultiScaleMeta => {
  const compound = `${record.compoundClass} ${record.crystalStructure}`.toLowerCase();
  let dimensionality = '3D 体相';
  if (compound.includes('2d') || compound.includes('layer')) dimensionality = '2D 层状';
  else if (compound.includes('double')) dimensionality = '双钙钛矿';
  else if (compound.includes('vacancy')) dimensionality = '空位有序';
  else if (!record.isBulk) dimensionality = '薄膜/纳米尺度';

  return {
    primaryScale: '材料尺度',
    dimensionality,
    dataDomain: '实验文献',
  };
};

const getScreenedScaleMeta = (record: ScreenedCandidateRecord): MultiScaleMeta => ({
  primaryScale: '筛选尺度',
  dimensionality: inferFormulaFamily(record.formula),
  dataDomain: '计算筛选',
});

const getLuminescenceScaleMeta = (record: LuminescenceSampleRecord): MultiScaleMeta => {
  const phase = `${record.phase_type} ${record.n_value}`.toLowerCase();
  let dimensionality = '发光体系';
  if (phase.includes('quasi') || phase.includes('mqw')) dimensionality = '准 2D / 多量子阱';
  else if (phase.includes('2d') || record.n_value === '1') dimensionality = '2D 层状';
  else if (phase.includes('3d')) dimensionality = '3D 体相';

  return {
    primaryScale: record.data_category === 'Device Performance' ? '器件尺度' : '材料尺度',
    dimensionality,
    dataDomain: record.data_category === 'Device Performance' ? '器件发光' : '材料发光',
  };
};

const getMPScaleMeta = (record: MPFullRecord): MultiScaleMeta => ({
  primaryScale: '组成-晶体尺度',
  dimensionality: record.family,
  dataDomain: 'MP 计算',
});

const getSupplementaryScaleMeta = (record: SupplementaryLiteratureRecord): MultiScaleMeta => {
  const text = `${record.structureType} ${record.formula}`.toLowerCase();
  let dimensionality = '材料补充';
  if (text.includes('2d') || text.includes('layer')) dimensionality = '2D 层状';
  else if (text.includes('double')) dimensionality = '双钙钛矿';
  else if (
    text.includes('3d') ||
    text.includes('cubic') ||
    text.includes('orthorhombic') ||
    text.includes('tetragonal') ||
    text.includes('hexagonal')
  ) {
    dimensionality = '3D 体相';
  } else {
    const family = inferFormulaFamily(record.formula);
    dimensionality = family === '复杂钙钛矿' ? '材料补充' : family;
  }

  return {
    primaryScale: '材料尺度',
    dimensionality,
    dataDomain: record.sourceCategory === 'manual supplement' ? '公开文献补充' : '自动抽取补充',
  };
};

export const DatabasePage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeDataset, setActiveDataset] = useState<DatasetTab>('experimental');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedConfidence, setSelectedConfidence] = useState('all');
  const [bandgapMin, setBandgapMin] = useState(0);
  const [bandgapMax, setBandgapMax] = useState(6);
  const [rescuedOnly, setRescuedOnly] = useState(false);
  const [maxUncertainty, setMaxUncertainty] = useState(0.4);
  const [emissionMin, setEmissionMin] = useState(400);
  const [emissionMax, setEmissionMax] = useState(850);
  const [selectedPhase, setSelectedPhase] = useState('all');
  const [selectedHalide, setSelectedHalide] = useState('all');
  const [requireCie, setRequireCie] = useState(false);
  const [requireLuminance, setRequireLuminance] = useState(false);
  const [luminescenceMode, setLuminescenceMode] = useState<'all' | 'material' | 'device'>('all');
  const [selectedSupplementarySource, setSelectedSupplementarySource] = useState('all');
  const [selectedMPFamily, setSelectedMPFamily] = useState('all');
  const [mpRescuedOnly, setMpRescuedOnly] = useState(false);
  const [selectedPrimaryScale, setSelectedPrimaryScale] = useState('all');
  const [selectedDimensionality, setSelectedDimensionality] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isExporting, setIsExporting] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedExperimentalRecord, setSelectedExperimentalRecord] = useState<ExperimentalBandgapRecord | null>(null);
  const [selectedSupplementaryRecord, setSelectedSupplementaryRecord] = useState<SupplementaryLiteratureRecord | null>(null);
  const [selectedCandidateRecord, setSelectedCandidateRecord] = useState<ScreenedCandidateRecord | null>(null);
  const [selectedLuminescenceRecord, setSelectedLuminescenceRecord] = useState<LuminescenceSampleRecord | null>(null);
  const [selectedMPRecord, setSelectedMPRecord] = useState<MPFullRecord | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    activeDataset,
    searchQuery,
    selectedClass,
    selectedConfidence,
    bandgapMin,
    bandgapMax,
    rescuedOnly,
    maxUncertainty,
    emissionMin,
    emissionMax,
    selectedPhase,
    selectedHalide,
    requireCie,
    requireLuminance,
    luminescenceMode,
    selectedSupplementarySource,
    selectedMPFamily,
    mpRescuedOnly,
    selectedPrimaryScale,
    selectedDimensionality,
  ]);

  const experimentalClasses = useMemo(
    () => Array.from(new Set(EXPERIMENTAL_BANDGAP_RECORDS.map((record) => record.compoundClass))).sort(),
    []
  );

  const confidenceGrades = useMemo(
    () => Array.from(new Set(EXPERIMENTAL_BANDGAP_RECORDS.map((record) => record.confidenceGrade))).sort(),
    []
  );

  const experimentalOverview = useMemo(() => {
    const bulkCount = EXPERIMENTAL_BANDGAP_RECORDS.filter((record) => record.isBulk).length;
    const aGradeCount = EXPERIMENTAL_BANDGAP_RECORDS.filter((record) => record.confidenceGrade === 'A').length;
    const years = EXPERIMENTAL_BANDGAP_RECORDS.map((record) => record.year).filter(
      (year): year is number => year !== null
    );
    const avgBandgap =
      EXPERIMENTAL_BANDGAP_RECORDS.reduce((sum, record) => sum + (record.experimentalBandgapEV || 0), 0) /
      EXPERIMENTAL_BANDGAP_RECORDS.length;

    return {
      bulkCount,
      aGradeCount,
      avgBandgap,
      minYear: years.length ? Math.min(...years) : 0,
      maxYear: years.length ? Math.max(...years) : 0,
    };
  }, []);

  const candidateOverview = useMemo(() => {
    const rescuedCount = SCREENED_CANDIDATE_RECORDS.filter((record) => record.isFalseMetalRescued).length;
    const avgPredictedBandgap =
      SCREENED_CANDIDATE_RECORDS.reduce((sum, record) => sum + (record.predictedBandgapEV || 0), 0) /
      SCREENED_CANDIDATE_RECORDS.length;
    const lowUncertaintyCount = SCREENED_CANDIDATE_RECORDS.filter(
      (record) => record.predictionStdEV !== null && record.predictionStdEV <= 0.3
    ).length;

    return {
      rescuedCount,
      avgPredictedBandgap,
      lowUncertaintyCount,
    };
  }, []);

  const luminescencePhases = useMemo(
    () => Array.from(new Set(ALL_LUMINESCENCE_RECORDS.map((record) => record.phase_type).filter(Boolean))).sort(),
    []
  );

  const supplementarySources = useMemo(
    () => Array.from(new Set(SUPPLEMENTARY_LITERATURE_RECORDS.map((record) => record.sourceCategory))).sort(),
    []
  );

  const luminescenceHalides = useMemo(
    () => Array.from(new Set(ALL_LUMINESCENCE_RECORDS.map((record) => record.X_halide).filter(Boolean))).sort(),
    []
  );

  const luminescenceOverview = useMemo(() => {
    const withLuminance = ALL_LUMINESCENCE_RECORDS.filter((record) => record.luminance_cd_m2 !== null).length;
    const withCie = ALL_LUMINESCENCE_RECORDS.filter(
      (record) => record.cie_x !== null && record.cie_y !== null
    ).length;
    const withT50 = ALL_LUMINESCENCE_RECORDS.filter((record) => record.t50_minutes !== null).length;
    const avgEmission =
      ALL_LUMINESCENCE_RECORDS.reduce((sum, record) => sum + (record.emission_peak_nm || 0), 0) /
      ALL_LUMINESCENCE_RECORDS.length;

    return {
      withLuminance,
      withCie,
      withT50,
      avgEmission,
    };
  }, []);

  const mpFamilies = useMemo(
    () => Array.from(new Set(MP_FULL_RECORDS.map((record) => record.family))).sort(),
    []
  );

  const supplementaryOverview = useMemo(() => {
    const averageBandgap =
      SUPPLEMENTARY_LITERATURE_RECORDS.reduce((sum, record) => sum + (record.extractedBandgapEV || 0), 0) /
      SUPPLEMENTARY_LITERATURE_RECORDS.length;

    return {
      averageBandgap,
      autoExtracted: SUPPLEMENTARY_LITERATURE_SUMMARY.autoExtractedCount,
      manualSupplement: SUPPLEMENTARY_LITERATURE_SUMMARY.manualSupplementCount,
      uniqueFormulaCount: SUPPLEMENTARY_LITERATURE_SUMMARY.uniqueFormulaCount,
    };
  }, []);

  const supplementaryTopFormulas = useMemo(() => {
    const counts = new Map<string, number>();
    SUPPLEMENTARY_LITERATURE_RECORDS.forEach((record) => {
      counts.set(record.formula, (counts.get(record.formula) || 0) + 1);
    });

    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([label, count]) => ({ label, count }));
  }, []);

  const supplementarySourceMix = useMemo(
    () => [
      { label: '自动抽取补充', count: SUPPLEMENTARY_LITERATURE_SUMMARY.autoExtractedCount },
      { label: '人工补充记录', count: SUPPLEMENTARY_LITERATURE_SUMMARY.manualSupplementCount },
    ],
    []
  );

  const multiscaleCoverageCards = useMemo(
    () => [
      {
        label: '组成-晶体尺度',
        value: MP_FULL_SUMMARY.totalRecords.toLocaleString(),
        description: 'MP 主库与结构家族、形成能、容忍因子',
        accent: 'text-sky-300',
      },
      {
        label: '材料尺度',
        value: (
          RESEARCH_DATASET_SUMMARY.experimentalRecordCount +
          LUMINESCENCE_DATASET_SUMMARY.materialPropertyCount +
          SUPPLEMENTARY_LITERATURE_SUMMARY.totalRecords
        ).toLocaleString(),
        description: '实验带隙 + 发光材料属性 + 文献补充记录',
        accent: 'text-emerald-300',
      },
      {
        label: '器件尺度',
        value: LUMINESCENCE_DATASET_SUMMARY.devicePerformanceCount.toLocaleString(),
        description: 'PeLED EQE、亮度、寿命与器件参数',
        accent: 'text-amber-300',
      },
      {
        label: '筛选尺度',
        value: RESEARCH_DATASET_SUMMARY.screenedCandidateCount.toLocaleString(),
        description: '假金属拯救与候选排序结果',
        accent: 'text-violet-300',
      },
    ],
    []
  );

  const mpOverview = useMemo(() => {
    const rescuedCount = MP_FULL_RECORDS.filter((record) => record.rescuedFalseMetal).length;
    const avgPredictedGap =
      MP_FULL_RECORDS.reduce((sum, record) => sum + (record.finalPredictedBandgapEV || 0), 0) /
      MP_FULL_RECORDS.length;
    const nonMetalPredicted = MP_FULL_RECORDS.filter((record) => !record.predictedIsMetal).length;
    return {
      rescuedCount,
      avgPredictedGap,
      nonMetalPredicted,
    };
  }, []);

  const activeScaleOptions = useMemo(() => {
    const metas =
      activeDataset === 'experimental'
        ? EXPERIMENTAL_BANDGAP_RECORDS.map(getExperimentalScaleMeta)
        : activeDataset === 'supplementary'
          ? SUPPLEMENTARY_LITERATURE_RECORDS.map(getSupplementaryScaleMeta)
        : activeDataset === 'screened'
          ? SCREENED_CANDIDATE_RECORDS.map(getScreenedScaleMeta)
          : activeDataset === 'luminescence'
            ? ALL_LUMINESCENCE_RECORDS.map(getLuminescenceScaleMeta)
            : MP_FULL_RECORDS.map(getMPScaleMeta);

    return {
      primaryScales: Array.from(new Set(metas.map((meta) => meta.primaryScale))).sort(),
      dimensionalities: Array.from(new Set(metas.map((meta) => meta.dimensionality))).sort(),
    };
  }, [activeDataset]);

  const filteredExperimentalRecords = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return [...EXPERIMENTAL_BANDGAP_RECORDS]
      .filter((record) => {
        const scaleMeta = getExperimentalScaleMeta(record);
        if (selectedClass !== 'all' && record.compoundClass !== selectedClass) return false;
        if (selectedConfidence !== 'all' && record.confidenceGrade !== selectedConfidence) return false;
        if (selectedPrimaryScale !== 'all' && scaleMeta.primaryScale !== selectedPrimaryScale) return false;
        if (selectedDimensionality !== 'all' && scaleMeta.dimensionality !== selectedDimensionality) return false;
        if (
          record.experimentalBandgapEV !== null &&
          (record.experimentalBandgapEV < bandgapMin || record.experimentalBandgapEV > bandgapMax)
        ) {
          return false;
        }
        if (!normalizedQuery) return true;

        const searchable = [
          record.formula,
          record.formulaStandardized,
          record.compoundClass,
          record.crystalStructure,
          record.measurementMethod,
          record.title,
          record.firstAuthor,
        ]
          .join(' ')
          .toLowerCase();

        return searchable.includes(normalizedQuery);
      })
      .sort((a, b) => {
        const yearDelta = (b.year || 0) - (a.year || 0);
        if (yearDelta !== 0) return yearDelta;

        const confidenceDelta = confidenceWeight(b.confidenceGrade) - confidenceWeight(a.confidenceGrade);
        if (confidenceDelta !== 0) return confidenceDelta;

        return (a.experimentalBandgapEV || 0) - (b.experimentalBandgapEV || 0);
      });
  }, [bandgapMax, bandgapMin, searchQuery, selectedClass, selectedConfidence, selectedDimensionality, selectedPrimaryScale]);

  const filteredSupplementaryRecords = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return [...SUPPLEMENTARY_LITERATURE_RECORDS]
      .filter((record) => {
        const scaleMeta = getSupplementaryScaleMeta(record);
        if (selectedSupplementarySource !== 'all' && record.sourceCategory !== selectedSupplementarySource) return false;
        if (selectedPrimaryScale !== 'all' && scaleMeta.primaryScale !== selectedPrimaryScale) return false;
        if (selectedDimensionality !== 'all' && scaleMeta.dimensionality !== selectedDimensionality) return false;
        if (
          record.extractedBandgapEV !== null &&
          (record.extractedBandgapEV < bandgapMin || record.extractedBandgapEV > bandgapMax)
        ) {
          return false;
        }
        if (!normalizedQuery) return true;

        const searchable = [
          record.formula,
          record.title,
          record.doi,
          record.measurementMethod,
          record.structureType,
          record.evidenceSnippet,
        ]
          .join(' ')
          .toLowerCase();

        return searchable.includes(normalizedQuery);
      })
      .sort((a, b) => {
        const yearDelta = (b.year || 0) - (a.year || 0);
        if (yearDelta !== 0) return yearDelta;
        return (b.extractedBandgapEV || 0) - (a.extractedBandgapEV || 0);
      });
  }, [
    bandgapMax,
    bandgapMin,
    searchQuery,
    selectedDimensionality,
    selectedPrimaryScale,
    selectedSupplementarySource,
  ]);

  const filteredCandidateRecords = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return [...SCREENED_CANDIDATE_RECORDS]
      .filter((record) => {
        const scaleMeta = getScreenedScaleMeta(record);
        if (rescuedOnly && !record.isFalseMetalRescued) return false;
        if (selectedPrimaryScale !== 'all' && scaleMeta.primaryScale !== selectedPrimaryScale) return false;
        if (selectedDimensionality !== 'all' && scaleMeta.dimensionality !== selectedDimensionality) return false;
        if (
          record.predictedBandgapEV !== null &&
          (record.predictedBandgapEV < bandgapMin || record.predictedBandgapEV > bandgapMax)
        ) {
          return false;
        }
        if (record.predictionStdEV !== null && record.predictionStdEV > maxUncertainty) return false;
        if (!normalizedQuery) return true;
        return record.formula.toLowerCase().includes(normalizedQuery);
      })
      .sort((a, b) => {
        if (a.isFalseMetalRescued !== b.isFalseMetalRescued) {
          return a.isFalseMetalRescued ? -1 : 1;
        }

        const uncertaintyDelta = (a.predictionStdEV || 0) - (b.predictionStdEV || 0);
        if (uncertaintyDelta !== 0) return uncertaintyDelta;

        return (b.predictedBandgapEV || 0) - (a.predictedBandgapEV || 0);
      });
  }, [bandgapMax, bandgapMin, maxUncertainty, rescuedOnly, searchQuery, selectedDimensionality, selectedPrimaryScale]);

  const filteredLuminescenceRecords = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return [...ALL_LUMINESCENCE_RECORDS]
      .filter((record) => {
        const scaleMeta = getLuminescenceScaleMeta(record);
        if (selectedPhase !== 'all' && record.phase_type !== selectedPhase) return false;
        if (selectedHalide !== 'all' && record.X_halide !== selectedHalide) return false;
        if (luminescenceMode === 'material' && record.data_category !== 'Material Property') return false;
        if (luminescenceMode === 'device' && record.data_category !== 'Device Performance') return false;
        if (selectedPrimaryScale !== 'all' && scaleMeta.primaryScale !== selectedPrimaryScale) return false;
        if (selectedDimensionality !== 'all' && scaleMeta.dimensionality !== selectedDimensionality) return false;
        if (requireCie && (record.cie_x === null || record.cie_y === null)) return false;
        if (requireLuminance && record.luminance_cd_m2 === null) return false;
        if (
          record.emission_peak_nm !== null &&
          (record.emission_peak_nm < emissionMin || record.emission_peak_nm > emissionMax)
        ) {
          return false;
        }
        if (!normalizedQuery) return true;

        const searchable = [
          record.spacer_abbr,
          record.spacer_name,
          record.phase_type,
          record.B_site,
          record.X_halide,
          record.journal,
          record.doi,
          record.source_sentence,
        ]
          .join(' ')
          .toLowerCase();

        return searchable.includes(normalizedQuery);
      })
      .sort((a, b) => {
        const eqeDelta = (b.EQE_pct || 0) - (a.EQE_pct || 0);
        if (eqeDelta !== 0) return eqeDelta;
        const plqyDelta = (b.PLQY_pct || 0) - (a.PLQY_pct || 0);
        if (plqyDelta !== 0) return plqyDelta;
        return (b.luminance_cd_m2 || 0) - (a.luminance_cd_m2 || 0);
      });
  }, [
    emissionMax,
    emissionMin,
    requireCie,
    requireLuminance,
    searchQuery,
    selectedHalide,
    selectedPhase,
    luminescenceMode,
    selectedDimensionality,
    selectedPrimaryScale,
  ]);

  const filteredMPRecords = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return [...MP_FULL_RECORDS]
      .filter((record) => {
        const scaleMeta = getMPScaleMeta(record);
        if (selectedMPFamily !== 'all' && record.family !== selectedMPFamily) return false;
        if (mpRescuedOnly && !record.rescuedFalseMetal) return false;
        if (selectedPrimaryScale !== 'all' && scaleMeta.primaryScale !== selectedPrimaryScale) return false;
        if (selectedDimensionality !== 'all' && scaleMeta.dimensionality !== selectedDimensionality) return false;
        if (
          record.finalPredictedBandgapEV !== null &&
          (record.finalPredictedBandgapEV < bandgapMin || record.finalPredictedBandgapEV > bandgapMax)
        ) {
          return false;
        }
        if (!normalizedQuery) return true;
        return [record.formula, record.family].join(' ').toLowerCase().includes(normalizedQuery);
      })
      .sort((a, b) => {
        if (a.rescuedFalseMetal !== b.rescuedFalseMetal) return a.rescuedFalseMetal ? -1 : 1;
        return (b.finalPredictedBandgapEV || 0) - (a.finalPredictedBandgapEV || 0);
      });
  }, [bandgapMax, bandgapMin, mpRescuedOnly, searchQuery, selectedDimensionality, selectedMPFamily, selectedPrimaryScale]);

  const activeRecords =
    activeDataset === 'experimental'
      ? filteredExperimentalRecords
      : activeDataset === 'supplementary'
        ? filteredSupplementaryRecords
      : activeDataset === 'screened'
        ? filteredCandidateRecords
        : activeDataset === 'luminescence'
          ? filteredLuminescenceRecords
          : filteredMPRecords;
  const totalPages = Math.max(1, Math.ceil(activeRecords.length / PAGE_SIZE));
  const pagedRecords = activeRecords.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setCurrentTime(new Date());
    setIsRefreshing(false);
  };

  const handleExportDatabase = () => {
    setIsExporting(true);

    const activeSummary =
      activeDataset === 'experimental'
        ? RESEARCH_DATASET_SUMMARY
        : activeDataset === 'supplementary'
          ? SUPPLEMENTARY_LITERATURE_SUMMARY
          : activeDataset === 'luminescence'
            ? LUMINESCENCE_DATASET_SUMMARY
            : activeDataset === 'mp'
              ? MP_FULL_SUMMARY
              : RESEARCH_DATASET_SUMMARY;

    const payload = {
      exportedAt: new Date().toISOString(),
      activeDataset,
      filters: {
        searchQuery,
        selectedClass,
        selectedConfidence,
        bandgapMin,
        bandgapMax,
        rescuedOnly,
        maxUncertainty,
      },
      summary: activeSummary,
      records: activeRecords,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `perovskite_research_${activeDataset}_${Date.now()}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);

    setTimeout(() => setIsExporting(false), 300);
  };

  return (
    <div className="container-fluid space-y-8 py-8">
      <div className="page-hero animate-fade-in-up">
        <div className="absolute inset-0 neural-glow opacity-5 rounded-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center animate-pulse-glow">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="page-kicker mb-2">Multiscale Research Database</div>
                  <h1 className="page-title">
                    研究数据库中心
                  </h1>
                  <p className="page-description mt-2">实验、补充文献、发光、筛选与 MP 多子库检索</p>
                </div>
              </div>

              <div className="hero-chip-row">
                <span className="hero-chip text-green-300">
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                  {currentTime.toLocaleTimeString('zh-CN')} | 数据已集成
                </span>
                <span className="hero-chip">
                  <Microscope className="w-4 h-4 text-blue-400" />
                  {RESEARCH_DATASET_SUMMARY.experimentalRecordCount} 条实验记录
                </span>
                <span className="hero-chip">
                  <Target className="w-4 h-4 text-purple-400" />
                  {RESEARCH_DATASET_SUMMARY.screenedCandidateCount} 条筛选候选
                </span>
                <span className="hero-chip">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  {SUPPLEMENTARY_LITERATURE_SUMMARY.totalRecords} 条补充文献
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  '实验主库',
                  '补充文献库',
                  '发光材料/器件库',
                  '筛选候选库',
                  'MP 全量主库',
                ].map((label) => (
                  <span key={label} className="soft-pill">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden xl:grid w-72 grid-cols-2 gap-3">
              <div className="data-card rounded-2xl p-4">
                <div className="text-xs text-gray-400">实验</div>
                <div className="text-2xl font-semibold text-blue-300 mt-1">{RESEARCH_DATASET_SUMMARY.experimentalRecordCount}</div>
              </div>
              <div className="data-card rounded-2xl p-4">
                <div className="text-xs text-gray-400">候选</div>
                <div className="text-2xl font-semibold text-violet-300 mt-1">{RESEARCH_DATASET_SUMMARY.screenedCandidateCount}</div>
              </div>
              <div className="data-card rounded-2xl p-4">
                <div className="text-xs text-gray-400">发光</div>
                <div className="text-2xl font-semibold text-cyan-300 mt-1">{LUMINESCENCE_DATASET_SUMMARY.totalRecords}</div>
              </div>
              <div className="data-card rounded-2xl p-4">
                <div className="text-xs text-gray-400">MP</div>
                <div className="text-2xl font-semibold text-sky-300 mt-1">{MP_FULL_SUMMARY.totalRecords}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 animate-fade-in-up animate-delay-50">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-sm uppercase tracking-[0.24em] text-sky-300/80">Scale Coverage</div>
              <h2 className="text-2xl font-semibold text-white mt-1">多尺度覆盖</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {multiscaleCoverageCards.map((card) => (
              <div key={card.label} className="data-card rounded-2xl p-5">
                <div className={`text-2xl font-bold ${card.accent}`}>{card.value}</div>
                <div className="text-white font-medium mt-2">{card.label}</div>
                <div className="text-sm text-gray-400 mt-1">{card.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animate-delay-100">
        {(activeDataset === 'experimental'
          ? [
              {
                label: '实验记录',
                value: RESEARCH_DATASET_SUMMARY.experimentalRecordCount.toLocaleString(),
                description: '文献整理后可检索条目',
                icon: BookOpen,
                accent: 'text-blue-300',
              },
              {
                label: '平均实验带隙',
                value: `${formatNumber(experimentalOverview.avgBandgap)} eV`,
                description: '来自清洗后的实验元数据',
                icon: Atom,
                accent: 'text-violet-300',
              },
              {
                label: 'A 级置信度',
                value: experimentalOverview.aGradeCount.toString(),
                description: '高可信文献记录',
                icon: CheckCircle,
                accent: 'text-emerald-300',
              },
              {
                label: '时间跨度',
                value: `${experimentalOverview.minYear}-${experimentalOverview.maxYear}`,
                description: '实验文献覆盖区间',
                icon: Layers,
                accent: 'text-amber-300',
              },
            ]
          : activeDataset === 'supplementary'
            ? [
                {
                  label: '补充文献记录',
                  value: SUPPLEMENTARY_LITERATURE_SUMMARY.totalRecords.toLocaleString(),
                  description: '公开文献补充与自动抽取结果',
                  icon: BookOpen,
                  accent: 'text-amber-300',
                },
                {
                  label: '平均补充带隙',
                  value: `${formatNumber(supplementaryOverview.averageBandgap)} eV`,
                  description: '按首个可解析 bandgap 统计',
                  icon: Atom,
                  accent: 'text-blue-300',
                },
                {
                  label: '人工补充',
                  value: supplementaryOverview.manualSupplement.toString(),
                  description: '人工整理且可直接回溯来源',
                  icon: Microscope,
                  accent: 'text-emerald-300',
                },
                {
                  label: '唯一化学式',
                  value: supplementaryOverview.uniqueFormulaCount.toString(),
                  description: '补充文献覆盖材料数量',
                  icon: Layers,
                  accent: 'text-violet-300',
                },
              ]
          : activeDataset === 'screened'
            ? [
              {
                label: '筛选候选',
                value: RESEARCH_DATASET_SUMMARY.screenedCandidateCount.toLocaleString(),
                description: '来自 current work 的候选空间',
                icon: Database,
                accent: 'text-blue-300',
              },
              {
                label: '拯救候选',
                value: candidateOverview.rescuedCount.toString(),
                description: '预测为可拯救假金属',
                icon: Target,
                accent: 'text-emerald-300',
              },
              {
                label: '平均预测带隙',
                value: `${formatNumber(candidateOverview.avgPredictedBandgap)} eV`,
                description: '基于筛选结果统计',
                icon: BarChart3,
                accent: 'text-violet-300',
              },
              {
                label: '低不确定性',
                value: candidateOverview.lowUncertaintyCount.toString(),
                description: '预测标准差 <= 0.30 eV',
                icon: Beaker,
                accent: 'text-amber-300',
              },
            ]
            : activeDataset === 'luminescence'
              ? [
              {
                label: '发光记录',
                value: LUMINESCENCE_DATASET_SUMMARY.totalRecords.toLocaleString(),
                description: '结构化发光材料/器件记录',
                icon: Lightbulb,
                accent: 'text-cyan-300',
              },
              {
                label: '平均发光峰位',
                value: `${formatNumber(luminescenceOverview.avgEmission)} nm`,
                description: '来自 pelED 结构化数据',
                icon: Atom,
                accent: 'text-violet-300',
              },
              {
                label: '亮度记录',
                value: luminescenceOverview.withLuminance.toString(),
                description: '含最大亮度字段',
                icon: BarChart3,
                accent: 'text-pink-300',
              },
              {
                label: 'CIE / T50',
                value: `${luminescenceOverview.withCie}/${luminescenceOverview.withT50}`,
                description: '可直接检索的颜色/寿命字段',
                icon: CheckCircle,
                accent: 'text-amber-300',
              },
              ]
              : [
                {
                  label: 'MP 全量记录',
                  value: MP_FULL_SUMMARY.totalRecords.toLocaleString(),
                  description: '来自 Materials Project 的全量钙钛矿主库',
                  icon: Database,
                  accent: 'text-sky-300',
                },
                {
                  label: '平均最终带隙',
                  value: `${formatNumber(mpOverview.avgPredictedGap)} eV`,
                  description: 'Two-step 最终预测结果',
                  icon: Atom,
                  accent: 'text-violet-300',
                },
                {
                  label: 'GGA 金属',
                  value: MP_FULL_SUMMARY.metalGGACount.toString(),
                  description: '初始 GGA 判定为金属的记录',
                  icon: BarChart3,
                  accent: 'text-pink-300',
                },
                {
                  label: '假金属拯救',
                  value: mpOverview.rescuedCount.toString(),
                  description: 'GGA 金属但最终预测开隙',
                  icon: CheckCircle,
                  accent: 'text-amber-300',
                },
              ]
        ).map((card) => (
          <div key={card.label} className="metric-card rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center">
                <card.icon className={`w-5 h-5 ${card.accent}`} />
              </div>
              <div className="text-[11px] px-2.5 py-1 rounded-full bg-white/6 border border-white/10 text-gray-400 uppercase tracking-[0.16em]">
                {activeDataset === 'experimental'
                  ? 'EXP'
                  : activeDataset === 'supplementary'
                    ? 'SUP'
                    : activeDataset === 'screened'
                      ? 'SCR'
                      : activeDataset === 'luminescence'
                        ? 'LUM'
                        : 'MP'}
              </div>
            </div>
            <div className={`text-3xl font-semibold tracking-tight ${card.accent} mb-2`}>{card.value}</div>
            <div className="text-gray-200 font-medium">{card.label}</div>
          </div>
        ))}
      </div>

      <div className="toolbar-panel animate-fade-in-up animate-delay-200">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5">
              <button
                onClick={() => setActiveDataset('experimental')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeDataset === 'experimental'
                    ? 'bg-blue-500/20 text-blue-200 shadow-[inset_0_0_0_1px_rgba(96,165,250,0.28)]'
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                实验
              </button>
              <button
                onClick={() => setActiveDataset('supplementary')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeDataset === 'supplementary'
                    ? 'bg-amber-500/20 text-amber-200 shadow-[inset_0_0_0_1px_rgba(251,191,36,0.24)]'
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                补充
              </button>
              <button
                onClick={() => setActiveDataset('screened')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeDataset === 'screened'
                    ? 'bg-purple-500/20 text-purple-200 shadow-[inset_0_0_0_1px_rgba(192,132,252,0.24)]'
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                筛选
              </button>
              <button
                onClick={() => setActiveDataset('luminescence')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeDataset === 'luminescence'
                    ? 'bg-cyan-500/20 text-cyan-200 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.24)]'
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                发光
              </button>
              <button
                onClick={() => setActiveDataset('mp')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeDataset === 'mp'
                    ? 'bg-sky-500/20 text-sky-200 shadow-[inset_0_0_0_1px_rgba(56,189,248,0.24)]'
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                MP
              </button>
            </div>

            <div className="flex gap-2">
              <button onClick={handleRefresh} className="btn-control" title="刷新统计">
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              </button>
              <button onClick={handleExportDatabase} disabled={isExporting} className="btn-control" title="导出当前结果">
                <Download className={`w-4 h-4 ${isExporting ? 'animate-pulse' : ''}`} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <label className="block text-sm text-gray-300 mb-2">搜索</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder={
                    activeDataset === 'experimental'
                      ? '搜索化学式、标题、作者、方法...'
                      : activeDataset === 'screened'
                        ? '搜索化学式...'
                        : activeDataset === 'luminescence'
                          ? '搜索 spacer、卤素、DOI、文献句子...'
                          : '搜索 formula 或家族类型...'
                  }
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                />
              </div>
            </div>

            {activeDataset === 'experimental' ? (
              <>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">化合物类别</label>
                  <select
                    value={selectedClass}
                    onChange={(event) => setSelectedClass(event.target.value)}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                  >
                    <option value="all" className="bg-slate-800">全部</option>
                    {experimentalClasses.map((option) => (
                      <option key={option} value={option} className="bg-slate-800">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">置信度</label>
                  <select
                    value={selectedConfidence}
                    onChange={(event) => setSelectedConfidence(event.target.value)}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                  >
                    <option value="all" className="bg-slate-800">全部</option>
                    {confidenceGrades.map((option) => (
                      <option key={option} value={option} className="bg-slate-800">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">带隙区间 (eV)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      step="0.1"
                      value={bandgapMin}
                      onChange={(event) => setBandgapMin(Number(event.target.value))}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    />
                    <input
                      type="number"
                      step="0.1"
                      value={bandgapMax}
                      onChange={(event) => setBandgapMax(Number(event.target.value))}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    />
                  </div>
                </div>
              </>
            ) : activeDataset === 'supplementary' ? (
              <>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">补充来源</label>
                  <select
                    value={selectedSupplementarySource}
                    onChange={(event) => setSelectedSupplementarySource(event.target.value)}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                  >
                    <option value="all" className="bg-slate-800">全部</option>
                    {supplementarySources.map((option) => (
                      <option key={option} value={option} className="bg-slate-800">
                        {option === 'auto-extracted literature' ? '自动抽取补充' : '人工补充记录'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">带隙区间 (eV)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      step="0.1"
                      value={bandgapMin}
                      onChange={(event) => setBandgapMin(Number(event.target.value))}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    />
                    <input
                      type="number"
                      step="0.1"
                      value={bandgapMax}
                      onChange={(event) => setBandgapMax(Number(event.target.value))}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    />
                  </div>
                </div>
              </>
            ) : activeDataset === 'screened' ? (
              <>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">筛选条件</label>
                  <button
                    onClick={() => setRescuedOnly((value) => !value)}
                    className={`w-full p-3 rounded-xl border transition-all ${
                      rescuedOnly
                        ? 'bg-emerald-500/25 border-emerald-400 text-emerald-200'
                        : 'bg-white/10 border-white/20 text-gray-300'
                    }`}
                  >
                    仅看拯救候选
                  </button>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">最大不确定性</label>
                  <input
                    type="number"
                    step="0.05"
                    value={maxUncertainty}
                    onChange={(event) => setMaxUncertainty(Number(event.target.value))}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">预测带隙区间 (eV)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      step="0.1"
                      value={bandgapMin}
                      onChange={(event) => setBandgapMin(Number(event.target.value))}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    />
                    <input
                      type="number"
                      step="0.1"
                      value={bandgapMax}
                      onChange={(event) => setBandgapMax(Number(event.target.value))}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    />
                  </div>
                </div>
              </>
            ) : activeDataset === 'luminescence' ? (
              <>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">相类型</label>
                  <select
                    value={selectedPhase}
                    onChange={(event) => setSelectedPhase(event.target.value)}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                  >
                    <option value="all" className="bg-slate-800">全部</option>
                    {luminescencePhases.map((option) => (
                      <option key={option} value={option} className="bg-slate-800">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">卤素体系</label>
                  <select
                    value={selectedHalide}
                    onChange={(event) => setSelectedHalide(event.target.value)}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                  >
                    <option value="all" className="bg-slate-800">全部</option>
                    {luminescenceHalides.map((option) => (
                      <option key={option} value={option} className="bg-slate-800">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">发光模式</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: 'all', label: '全部' },
                      { key: 'material', label: '材料' },
                      { key: 'device', label: '器件' },
                    ].map((mode) => (
                      <button
                        key={mode.key}
                        onClick={() => setLuminescenceMode(mode.key as 'all' | 'material' | 'device')}
                        className={`p-3 rounded-xl border transition-all ${
                          luminescenceMode === mode.key
                            ? 'bg-cyan-500/25 border-cyan-400 text-cyan-200'
                            : 'bg-white/10 border-white/20 text-gray-300'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">发光峰位区间 (nm)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      step="1"
                      value={emissionMin}
                      onChange={(event) => setEmissionMin(Number(event.target.value))}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    />
                    <input
                      type="number"
                      step="1"
                      value={emissionMax}
                      onChange={(event) => setEmissionMax(Number(event.target.value))}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setRequireCie((value) => !value)}
                    className={`flex-1 p-3 rounded-xl border transition-all ${
                      requireCie
                        ? 'bg-amber-500/25 border-amber-400 text-amber-200'
                        : 'bg-white/10 border-white/20 text-gray-300'
                    }`}
                  >
                    仅看 CIE
                  </button>
                  <button
                    onClick={() => setRequireLuminance((value) => !value)}
                    className={`flex-1 p-3 rounded-xl border transition-all ${
                      requireLuminance
                        ? 'bg-pink-500/25 border-pink-400 text-pink-200'
                        : 'bg-white/10 border-white/20 text-gray-300'
                    }`}
                  >
                    仅看亮度
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">结构家族</label>
                  <select
                    value={selectedMPFamily}
                    onChange={(event) => setSelectedMPFamily(event.target.value)}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                  >
                    <option value="all" className="bg-slate-800">全部</option>
                    {mpFamilies.map((option) => (
                      <option key={option} value={option} className="bg-slate-800">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">最终带隙区间 (eV)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      step="0.1"
                      value={bandgapMin}
                      onChange={(event) => setBandgapMin(Number(event.target.value))}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    />
                    <input
                      type="number"
                      step="0.1"
                      value={bandgapMax}
                      onChange={(event) => setBandgapMax(Number(event.target.value))}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">筛选条件</label>
                  <button
                    onClick={() => setMpRescuedOnly((value) => !value)}
                    className={`w-full p-3 rounded-xl border transition-all ${
                      mpRescuedOnly
                        ? 'bg-indigo-500/25 border-indigo-400 text-indigo-200'
                        : 'bg-white/10 border-white/20 text-gray-300'
                    }`}
                  >
                    仅看 MP 拯救候选
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2">主尺度</label>
              <select
                value={selectedPrimaryScale}
                onChange={(event) => setSelectedPrimaryScale(event.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
              >
                <option value="all" className="bg-slate-800">全部尺度</option>
                {activeScaleOptions.primaryScales.map((option) => (
                  <option key={option} value={option} className="bg-slate-800">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">结构维度</label>
              <select
                value={selectedDimensionality}
                onChange={(event) => setSelectedDimensionality(event.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
              >
                <option value="all" className="bg-slate-800">全部维度</option>
                {activeScaleOptions.dimensionalities.map((option) => (
                  <option key={option} value={option} className="bg-slate-800">
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 animate-fade-in-up animate-delay-300">
        <div className="xl:col-span-3 glass-card rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center">
                <Filter className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-semibold">结果</div>
                <div className="text-sm text-gray-400">{activeRecords.length.toLocaleString()} 条记录</div>
              </div>
            </div>
            <div className="soft-pill">第 {currentPage} / {totalPages} 页</div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left text-[11px] uppercase tracking-[0.16em] text-gray-500 bg-white/[0.03]">
                  {activeDataset === 'experimental' ? (
                    <>
                      <th className="py-3 pr-4">Formula</th>
                      <th className="py-3 pr-4">Class</th>
                      <th className="py-3 pr-4">Scale</th>
                      <th className="py-3 pr-4">Bandgap</th>
                      <th className="py-3 pr-4">Method</th>
                      <th className="py-3 pr-4">Confidence</th>
                      <th className="py-3 pr-4">Year</th>
                    </>
                  ) : activeDataset === 'supplementary' ? (
                    <>
                      <th className="py-3 pr-4">Formula</th>
                      <th className="py-3 pr-4">Scale</th>
                      <th className="py-3 pr-4">Bandgap</th>
                      <th className="py-3 pr-4">Source</th>
                      <th className="py-3 pr-4">Method</th>
                      <th className="py-3 pr-4">Structure</th>
                      <th className="py-3 pr-4">Year</th>
                    </>
                  ) : activeDataset === 'screened' ? (
                    <>
                      <th className="py-3 pr-4">Formula</th>
                      <th className="py-3 pr-4">Scale</th>
                      <th className="py-3 pr-4">GGA Eg</th>
                      <th className="py-3 pr-4">Pred Eg</th>
                      <th className="py-3 pr-4">Std</th>
                      <th className="py-3 pr-4">Rescued</th>
                    </>
                  ) : activeDataset === 'luminescence' ? (
                    <>
                      <th className="py-3 pr-4">Emission</th>
                      <th className="py-3 pr-4">Scale</th>
                      <th className="py-3 pr-4">Phase</th>
                      <th className="py-3 pr-4">Halide</th>
                      <th className="py-3 pr-4">EQE / PLQY</th>
                      <th className="py-3 pr-4">Luminance</th>
                      <th className="py-3 pr-4">CIE / T50</th>
                    </>
                  ) : (
                    <>
                      <th className="py-3 pr-4">Formula</th>
                      <th className="py-3 pr-4">Family</th>
                      <th className="py-3 pr-4">Scale</th>
                      <th className="py-3 pr-4">GGA Eg</th>
                      <th className="py-3 pr-4">Final Eg</th>
                      <th className="py-3 pr-4">Formation E</th>
                      <th className="py-3 pr-4">Rescued</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {pagedRecords.length === 0 ? (
                  <tr>
                    <td
                      colSpan={activeDataset === 'screened' ? 6 : 7}
                      className="py-12 text-center text-gray-500"
                    >
                      未找到符合条件的记录
                    </td>
                  </tr>
                ) : (
                  pagedRecords.map((record) =>
                    activeDataset === 'experimental' ? (
                      <tr
                        key={record.id}
                        className="border-b border-white/5 hover:bg-white/[0.04] cursor-pointer transition-colors"
                        onClick={() => setSelectedExperimentalRecord(record as ExperimentalBandgapRecord)}
                      >
                        {(() => {
                          const scaleMeta = getExperimentalScaleMeta(record as ExperimentalBandgapRecord);
                          return (
                            <>
                        <td className="py-4 pr-4 text-white font-mono">{(record as ExperimentalBandgapRecord).formula}</td>
                        <td className="py-4 pr-4 text-gray-300">{(record as ExperimentalBandgapRecord).compoundClass}</td>
                        <td className="py-4 pr-4 text-xs text-gray-300">
                          <div>{scaleMeta.primaryScale}</div>
                          <div className="text-gray-500">{scaleMeta.dimensionality}</div>
                        </td>
                        <td className="py-4 pr-4 text-blue-300">
                          {formatNumber((record as ExperimentalBandgapRecord).experimentalBandgapEV)} eV
                        </td>
                        <td className="py-4 pr-4 text-gray-300">{(record as ExperimentalBandgapRecord).measurementMethod}</td>
                        <td className="py-4 pr-4">
                          <span className="px-2 py-1 rounded-full bg-white/10 text-emerald-300 text-xs">
                            {(record as ExperimentalBandgapRecord).confidenceGrade || 'N/A'}
                          </span>
                        </td>
                        <td className="py-4 pr-4 text-gray-300">{(record as ExperimentalBandgapRecord).year || 'N/A'}</td>
                            </>
                          );
                        })()}
                      </tr>
                    ) : activeDataset === 'supplementary' ? (
                      <tr
                        key={record.id}
                        className="border-b border-white/5 hover:bg-white/[0.04] cursor-pointer transition-colors"
                        onClick={() => setSelectedSupplementaryRecord(record as SupplementaryLiteratureRecord)}
                      >
                        {(() => {
                          const scaleMeta = getSupplementaryScaleMeta(record as SupplementaryLiteratureRecord);
                          return (
                            <>
                              <td className="py-4 pr-4 text-white font-mono">{(record as SupplementaryLiteratureRecord).formula}</td>
                              <td className="py-4 pr-4 text-xs text-gray-300">
                                <div>{scaleMeta.primaryScale}</div>
                                <div className="text-gray-500">{scaleMeta.dimensionality}</div>
                              </td>
                              <td className="py-4 pr-4 text-amber-300">
                                {formatNumber((record as SupplementaryLiteratureRecord).extractedBandgapEV)} eV
                              </td>
                              <td className="py-4 pr-4 text-gray-300">
                                {(record as SupplementaryLiteratureRecord).sourceCategory === 'manual supplement'
                                  ? '人工补充'
                                  : '自动抽取'}
                              </td>
                              <td className="py-4 pr-4 text-gray-300">
                                {(record as SupplementaryLiteratureRecord).measurementMethod || 'N/A'}
                              </td>
                              <td className="py-4 pr-4 text-gray-300">
                                {(record as SupplementaryLiteratureRecord).structureType || 'N/A'}
                              </td>
                              <td className="py-4 pr-4 text-gray-300">
                                {(record as SupplementaryLiteratureRecord).year || 'N/A'}
                              </td>
                            </>
                          );
                        })()}
                      </tr>
                    ) : activeDataset === 'screened' ? (
                      <tr
                        key={record.id}
                        className="border-b border-white/5 hover:bg-white/[0.04] cursor-pointer transition-colors"
                        onClick={() => setSelectedCandidateRecord(record as ScreenedCandidateRecord)}
                      >
                        {(() => {
                          const scaleMeta = getScreenedScaleMeta(record as ScreenedCandidateRecord);
                          return (
                            <>
                        <td className="py-4 pr-4 text-white font-mono">{(record as ScreenedCandidateRecord).formula}</td>
                        <td className="py-4 pr-4 text-xs text-gray-300">
                          <div>{scaleMeta.primaryScale}</div>
                          <div className="text-gray-500">{scaleMeta.dimensionality}</div>
                        </td>
                        <td className="py-4 pr-4 text-gray-300">
                          {formatNumber((record as ScreenedCandidateRecord).ggaBandgapEV)} eV
                        </td>
                        <td className="py-4 pr-4 text-purple-300">
                          {formatNumber((record as ScreenedCandidateRecord).predictedBandgapEV)} eV
                        </td>
                        <td className="py-4 pr-4 text-gray-300">
                          {formatNumber((record as ScreenedCandidateRecord).predictionStdEV, 3)}
                        </td>
                        <td className="py-4 pr-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              (record as ScreenedCandidateRecord).isFalseMetalRescued
                                ? 'bg-emerald-500/20 text-emerald-300'
                                : 'bg-white/10 text-gray-300'
                            }`}
                          >
                            {(record as ScreenedCandidateRecord).isFalseMetalRescued ? 'Yes' : 'No'}
                          </span>
                        </td>
                            </>
                          );
                        })()}
                      </tr>
                    ) : activeDataset === 'luminescence' ? (
                      <tr
                        key={record.id}
                        className="border-b border-white/5 hover:bg-white/[0.04] cursor-pointer transition-colors"
                        onClick={() => setSelectedLuminescenceRecord(record as LuminescenceSampleRecord)}
                      >
                        {(() => {
                          const scaleMeta = getLuminescenceScaleMeta(record as LuminescenceSampleRecord);
                          return (
                            <>
                        <td className="py-4 pr-4 text-white font-medium">
                          {(record as LuminescenceSampleRecord).emission_peak_nm !== null
                            ? `${formatNumber((record as LuminescenceSampleRecord).emission_peak_nm, 0)} nm`
                            : 'N/A'}
                        </td>
                        <td className="py-4 pr-4 text-xs text-gray-300">
                          <div>{scaleMeta.primaryScale}</div>
                          <div className="text-gray-500">{scaleMeta.dimensionality}</div>
                        </td>
                        <td className="py-4 pr-4 text-gray-300">{(record as LuminescenceSampleRecord).phase_type || 'N/A'}</td>
                        <td className="py-4 pr-4 text-gray-300">{(record as LuminescenceSampleRecord).X_halide || 'N/A'}</td>
                        <td className="py-4 pr-4 text-cyan-300">
                          {(record as LuminescenceSampleRecord).EQE_pct !== null
                            ? `${formatNumber((record as LuminescenceSampleRecord).EQE_pct)}% EQE`
                            : (record as LuminescenceSampleRecord).PLQY_pct !== null
                              ? `${formatNumber((record as LuminescenceSampleRecord).PLQY_pct)}% PLQY`
                              : 'N/A'}
                        </td>
                        <td className="py-4 pr-4 text-pink-300">
                          {(record as LuminescenceSampleRecord).luminance_cd_m2 !== null
                            ? `${formatNumber((record as LuminescenceSampleRecord).luminance_cd_m2, 0)}`
                            : 'N/A'}
                        </td>
                        <td className="py-4 pr-4 text-gray-300">
                          {(record as LuminescenceSampleRecord).cie_x !== null && (record as LuminescenceSampleRecord).cie_y !== null
                            ? `(${formatNumber((record as LuminescenceSampleRecord).cie_x, 3)}, ${formatNumber((record as LuminescenceSampleRecord).cie_y, 3)})`
                            : (record as LuminescenceSampleRecord).t50_minutes !== null
                              ? `${formatNumber((record as LuminescenceSampleRecord).t50_minutes)} min`
                              : 'N/A'}
                        </td>
                            </>
                          );
                        })()}
                      </tr>
                    ) : (
                      <tr
                        key={record.id}
                        className="border-b border-white/5 hover:bg-white/[0.04] cursor-pointer transition-colors"
                        onClick={() => setSelectedMPRecord(record as MPFullRecord)}
                      >
                        {(() => {
                          const scaleMeta = getMPScaleMeta(record as MPFullRecord);
                          return (
                            <>
                        <td className="py-4 pr-4 text-white font-mono">{(record as MPFullRecord).formula}</td>
                        <td className="py-4 pr-4 text-gray-300">{(record as MPFullRecord).family}</td>
                        <td className="py-4 pr-4 text-xs text-gray-300">
                          <div>{scaleMeta.primaryScale}</div>
                          <div className="text-gray-500">{scaleMeta.dimensionality}</div>
                        </td>
                        <td className="py-4 pr-4 text-gray-300">
                          {formatNumber((record as MPFullRecord).ggaBandgapEV)} eV
                        </td>
                        <td className="py-4 pr-4 text-sky-300">
                          {formatNumber((record as MPFullRecord).finalPredictedBandgapEV)} eV
                        </td>
                        <td className="py-4 pr-4 text-gray-300">
                          {formatNumber((record as MPFullRecord).formationEnergyPerAtom, 3)}
                        </td>
                        <td className="py-4 pr-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              (record as MPFullRecord).rescuedFalseMetal
                                ? 'bg-indigo-500/20 text-indigo-300'
                                : 'bg-white/10 text-gray-300'
                            }`}
                          >
                            {(record as MPFullRecord).rescuedFalseMetal ? 'Yes' : 'No'}
                          </span>
                        </td>
                            </>
                          );
                        })()}
                      </tr>
                    )
                  )
                )}
              </tbody>
            </table>
          </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              当前显示 {(currentPage - 1) * PAGE_SIZE + 1}-{Math.min(currentPage * PAGE_SIZE, activeRecords.length)} / {activeRecords.length}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="btn-control disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="btn-control disabled:opacity-40"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="data-card rounded-2xl p-6">
            <h3 className="text-base font-semibold text-white mb-4">概览</h3>
            <div className="space-y-3 text-sm">
              {(activeDataset === 'luminescence'
                ? LUMINESCENCE_DATASET_SUMMARY.topPhases
                : activeDataset === 'supplementary'
                  ? supplementaryTopFormulas
                  : activeDataset === 'mp'
                    ? MP_FULL_SUMMARY.familyCounts
                    : RESEARCH_DATASET_SUMMARY.topExperimentalClasses
              ).map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-gray-300">{item.label}</span>
                  <span className="text-white font-medium">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="data-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              {activeDataset === 'luminescence' ? '分布' : activeDataset === 'supplementary' ? '来源' : '分布'}
            </h3>
            <div className="space-y-3">
              {(activeDataset === 'luminescence'
                ? LUMINESCENCE_DATASET_SUMMARY.topHalides
                : activeDataset === 'supplementary'
                  ? supplementarySourceMix
                  : activeDataset === 'mp'
                    ? MP_FULL_SUMMARY.familyCounts
                    : RESEARCH_DATASET_SUMMARY.confidenceDistribution
              ).map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-300">
                      {activeDataset === 'luminescence'
                        ? item.label
                        : activeDataset === 'supplementary'
                          ? item.label
                          : activeDataset === 'mp'
                            ? item.label
                            : `等级 ${item.label}`}
                    </span>
                    <span className="text-white">{item.count}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-blue-400"
                      style={{
                        width: `${
                          (item.count /
                            (activeDataset === 'luminescence'
                              ? LUMINESCENCE_DATASET_SUMMARY.totalRecords
                              : activeDataset === 'supplementary'
                                ? SUPPLEMENTARY_LITERATURE_SUMMARY.totalRecords
                              : activeDataset === 'mp'
                                ? MP_FULL_SUMMARY.totalRecords
                                : RESEARCH_DATASET_SUMMARY.experimentalRecordCount)) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="data-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              {activeDataset === 'luminescence' ? '字段' : activeDataset === 'supplementary' ? '字段' : '摘要'}
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              {activeDataset === 'luminescence' ? (
                <>
                  <div className="flex items-center justify-between">
                    <span>PLQY 记录</span>
                    <span className="text-cyan-300 font-medium">{LUMINESCENCE_DATASET_SUMMARY.plqyRecordCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>EQE 记录</span>
                    <span className="text-purple-300 font-medium">{LUMINESCENCE_DATASET_SUMMARY.eqeRecordCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>亮度记录</span>
                    <span className="text-pink-300 font-medium">{LUMINESCENCE_DATASET_SUMMARY.luminanceRecordCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>CIE / T50</span>
                    <span className="text-amber-300 font-medium">{LUMINESCENCE_DATASET_SUMMARY.cieMentionCount} / {LUMINESCENCE_DATASET_SUMMARY.t50RecordCount}</span>
                  </div>
                </>
              ) : activeDataset === 'supplementary' ? (
                <>
                  <div className="flex items-center justify-between">
                    <span>自动抽取补充</span>
                    <span className="text-amber-300 font-medium">{SUPPLEMENTARY_LITERATURE_SUMMARY.autoExtractedCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>人工补充记录</span>
                    <span className="text-emerald-300 font-medium">{SUPPLEMENTARY_LITERATURE_SUMMARY.manualSupplementCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>年份跨度</span>
                    <span className="text-blue-300 font-medium">
                      {SUPPLEMENTARY_LITERATURE_SUMMARY.yearRange.min}-{SUPPLEMENTARY_LITERATURE_SUMMARY.yearRange.max}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>唯一化学式</span>
                    <span className="text-violet-300 font-medium">{SUPPLEMENTARY_LITERATURE_SUMMARY.uniqueFormulaCount}</span>
                  </div>
                </>
              ) : activeDataset === 'mp' ? (
                <>
                  <div className="flex items-center justify-between">
                    <span>GGA 金属</span>
                    <span className="text-pink-300 font-medium">{MP_FULL_SUMMARY.metalGGACount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>最终开隙</span>
                    <span className="text-sky-300 font-medium">{MP_FULL_SUMMARY.nonZeroPredictedGapCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>拯救候选</span>
                    <span className="text-indigo-300 font-medium">{MP_FULL_SUMMARY.rescuedFalseMetalCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>结构家族</span>
                    <span className="text-amber-300 font-medium">{MP_FULL_SUMMARY.familyCounts.length}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <span>对齐基准池</span>
                    <span className="text-amber-300 font-medium">{RESEARCH_DATASET_SUMMARY.alignedGroundTruthCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>实验整理表</span>
                    <span className="text-blue-300 font-medium">{RESEARCH_DATASET_SUMMARY.experimentalRecordCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>筛选候选表</span>
                    <span className="text-purple-300 font-medium">{RESEARCH_DATASET_SUMMARY.screenedCandidateCount}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {(selectedExperimentalRecord || selectedSupplementaryRecord || selectedCandidateRecord || selectedLuminescenceRecord || selectedMPRecord) && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="glass-card rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-white/10 shadow-[0_24px_80px_rgba(2,6,23,0.5)]">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-sky-300/70 mb-2">Record Details</div>
                <h2 className="text-2xl font-semibold text-white">
                  {selectedExperimentalRecord?.formula || selectedSupplementaryRecord?.formula || selectedCandidateRecord?.formula || selectedMPRecord?.formula || `${selectedLuminescenceRecord?.emission_peak_nm?.toFixed(0) || 'N/A'} nm`}
                </h2>
                <p className="text-gray-500 mt-1 text-sm">
                  {selectedExperimentalRecord
                    ? '实验文献条目'
                    : selectedSupplementaryRecord
                      ? '补充文献条目'
                      : selectedCandidateRecord
                        ? '筛选候选条目'
                        : selectedLuminescenceRecord
                          ? '发光材料/器件条目'
                          : 'Materials Project 条目'}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedExperimentalRecord(null);
                  setSelectedSupplementaryRecord(null);
                  setSelectedCandidateRecord(null);
                  setSelectedLuminescenceRecord(null);
                  setSelectedMPRecord(null);
                }}
                className="btn-control"
              >
                关闭
              </button>
            </div>

            {selectedExperimentalRecord && (
              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">核心属性</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-gray-300">Formula</span><span className="text-white font-mono">{selectedExperimentalRecord.formula}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Class</span><span className="text-white">{selectedExperimentalRecord.compoundClass}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Structure</span><span className="text-white">{selectedExperimentalRecord.crystalStructure}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Bandgap</span><span className="text-blue-300">{formatNumber(selectedExperimentalRecord.experimentalBandgapEV)} eV</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Character</span><span className="text-white">{selectedExperimentalRecord.bandgapCharacter || 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Confidence</span><span className="text-emerald-300">{selectedExperimentalRecord.confidenceGrade || 'N/A'}</span></div>
                  </div>
                </div>

                <div className="data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">上下文</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-gray-300">Method</span><span className="text-white text-right max-w-[65%]">{selectedExperimentalRecord.measurementMethod || 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Sample</span><span className="text-white">{selectedExperimentalRecord.sampleForm || 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Temperature</span><span className="text-white">{selectedExperimentalRecord.measurementTemperature || 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Bulk</span><span className="text-white">{selectedExperimentalRecord.isBulk ? 'Yes' : 'No'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Year</span><span className="text-white">{selectedExperimentalRecord.year || 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Author</span><span className="text-white">{selectedExperimentalRecord.firstAuthor || 'N/A'}</span></div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 text-sm">
                    {(() => {
                      const scaleMeta = getExperimentalScaleMeta(selectedExperimentalRecord);
                      return (
                        <div className="space-y-2">
                          <div className="text-white font-medium">尺度</div>
                          <div className="flex justify-between"><span className="text-gray-300">主尺度</span><span className="text-white">{scaleMeta.primaryScale}</span></div>
                          <div className="flex justify-between"><span className="text-gray-300">结构维度</span><span className="text-white">{scaleMeta.dimensionality}</span></div>
                          <div className="flex justify-between"><span className="text-gray-300">数据域</span><span className="text-white">{scaleMeta.dataDomain}</span></div>
                        </div>
                      );
                    })()}
                  </div>
                </div>

                <div className="lg:col-span-2 data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">来源</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                      <div className="text-gray-400 mb-1">Title</div>
                      <div className="text-white">{selectedExperimentalRecord.title || 'N/A'}</div>
                    </div>
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                      <div className="text-gray-400 mb-1">GGA Reference</div>
                      <div className="text-white">{selectedExperimentalRecord.ggaGapReference || 'N/A'}</div>
                    </div>
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                      <div className="text-gray-400 mb-1">Curation Note</div>
                      <div className="text-white leading-relaxed">{selectedExperimentalRecord.curationNote || 'N/A'}</div>
                    </div>
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                      <div className="text-gray-400 mb-1">Quality Flags</div>
                      <div className="text-white">{selectedExperimentalRecord.qualityFlags || 'N/A'}</div>
                    </div>
                    {selectedExperimentalRecord.doiOrUrl && (
                      <button
                        onClick={() => window.open(selectedExperimentalRecord.doiOrUrl, '_blank', 'noopener,noreferrer')}
                        className="md:col-span-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-blue-500/16 border border-blue-400/24 text-blue-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        打开文献链接
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {selectedSupplementaryRecord && (
              <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">补充记录摘要</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-gray-300">Formula</span><span className="text-white font-mono">{selectedSupplementaryRecord.formula}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Bandgap</span><span className="text-amber-300">{formatNumber(selectedSupplementaryRecord.extractedBandgapEV)} eV</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Source</span><span className="text-white">{selectedSupplementaryRecord.sourceCategory === 'manual supplement' ? '人工补充' : '自动抽取'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Method</span><span className="text-white">{selectedSupplementaryRecord.measurementMethod || 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Structure</span><span className="text-white">{selectedSupplementaryRecord.structureType || 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Year</span><span className="text-white">{selectedSupplementaryRecord.year || 'N/A'}</span></div>
                  </div>
                </div>

                <div className="data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">尺度</h3>
                  <div className="space-y-3 text-sm">
                    {(() => {
                      const scaleMeta = getSupplementaryScaleMeta(selectedSupplementaryRecord);
                      return (
                        <>
                          <div className="flex justify-between"><span className="text-gray-300">主尺度</span><span className="text-white">{scaleMeta.primaryScale}</span></div>
                          <div className="flex justify-between"><span className="text-gray-300">结构维度</span><span className="text-white">{scaleMeta.dimensionality}</span></div>
                          <div className="flex justify-between"><span className="text-gray-300">数据域</span><span className="text-white">{scaleMeta.dataDomain}</span></div>
                        </>
                      );
                    })()}
                  </div>
                </div>

                <div className="data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">文献回溯</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-gray-400 mb-1">Title</div>
                      <div className="text-white">{selectedSupplementaryRecord.title || 'N/A'}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1">Reported Raw Value</div>
                      <div className="text-white">{selectedSupplementaryRecord.reportedBandgapRaw || 'N/A'}</div>
                    </div>
                  </div>
                  {selectedSupplementaryRecord.doi && (
                    <button
                      onClick={() => window.open(selectedSupplementaryRecord.doi, '_blank', 'noopener,noreferrer')}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-400/30 text-amber-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      打开来源链接
                    </button>
                  )}
                </div>

                <div className="lg:col-span-3 data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">证据</h3>
                  <div className="text-sm text-gray-300 leading-relaxed">
                    {selectedSupplementaryRecord.evidenceSnippet || '该条记录来自人工补充库，当前文件未附带可直接展示的摘要片段。'}
                  </div>
                </div>
              </div>
            )}

            {selectedCandidateRecord && (
              <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">候选概要</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-gray-300">Formula</span><span className="text-white font-mono">{selectedCandidateRecord.formula}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">GGA Eg</span><span className="text-white">{formatNumber(selectedCandidateRecord.ggaBandgapEV)} eV</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Pred Eg</span><span className="text-purple-300">{formatNumber(selectedCandidateRecord.predictedBandgapEV)} eV</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Std</span><span className="text-white">{formatNumber(selectedCandidateRecord.predictionStdEV, 3)}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Rescued</span><span className="text-emerald-300">{selectedCandidateRecord.isFalseMetalRescued ? 'Yes' : 'No'}</span></div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 text-sm">
                    {(() => {
                      const scaleMeta = getScreenedScaleMeta(selectedCandidateRecord);
                      return (
                        <div className="space-y-2">
                          <div className="text-white font-medium">尺度</div>
                          <div className="flex justify-between"><span className="text-gray-300">主尺度</span><span className="text-white">{scaleMeta.primaryScale}</span></div>
                          <div className="flex justify-between"><span className="text-gray-300">结构维度</span><span className="text-white">{scaleMeta.dimensionality}</span></div>
                          <div className="flex justify-between"><span className="text-gray-300">数据域</span><span className="text-white">{scaleMeta.dataDomain}</span></div>
                        </div>
                      );
                    })()}
                  </div>
                </div>

                <div className="lg:col-span-2 data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">判断</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                        <div className="text-gray-400 mb-1">修正幅度</div>
                        <div className="text-white font-semibold">
                          {selectedCandidateRecord.predictedBandgapEV !== null && selectedCandidateRecord.ggaBandgapEV !== null
                            ? `${formatNumber(selectedCandidateRecord.predictedBandgapEV - selectedCandidateRecord.ggaBandgapEV)} eV`
                            : 'N/A'}
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                        <div className="text-gray-400 mb-1">预测可信度</div>
                        <div className="text-white font-semibold">
                          {selectedCandidateRecord.predictionStdEV !== null && selectedCandidateRecord.predictionStdEV <= 0.3
                            ? 'High'
                            : selectedCandidateRecord.predictionStdEV !== null && selectedCandidateRecord.predictionStdEV <= 0.5
                              ? 'Medium'
                              : 'Review'}
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                        <div className="text-gray-400 mb-1">推荐动作</div>
                        <div className="text-white font-semibold">
                          {selectedCandidateRecord.isFalseMetalRescued ? 'Priority check' : 'General screening'}
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            )}

            {selectedLuminescenceRecord && (
              <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">发光核心字段</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-gray-300">Emission</span><span className="text-cyan-300">{selectedLuminescenceRecord.emission_peak_nm !== null ? `${formatNumber(selectedLuminescenceRecord.emission_peak_nm, 0)} nm` : 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">PLQY</span><span className="text-white">{selectedLuminescenceRecord.PLQY_pct !== null ? `${formatNumber(selectedLuminescenceRecord.PLQY_pct)}%` : 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">EQE</span><span className="text-white">{selectedLuminescenceRecord.EQE_pct !== null ? `${formatNumber(selectedLuminescenceRecord.EQE_pct)}%` : 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Luminance</span><span className="text-pink-300">{selectedLuminescenceRecord.luminance_cd_m2 !== null ? `${formatNumber(selectedLuminescenceRecord.luminance_cd_m2, 0)} cd m^-2` : 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">T50</span><span className="text-amber-300">{selectedLuminescenceRecord.t50_minutes !== null ? `${formatNumber(selectedLuminescenceRecord.t50_minutes)} min` : 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Turn-on V</span><span className="text-white">{selectedLuminescenceRecord.turnOnVoltageV !== null ? `${formatNumber(selectedLuminescenceRecord.turnOnVoltageV)} V` : 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">FWHM</span><span className="text-white">{selectedLuminescenceRecord.fwhmNm !== null ? `${formatNumber(selectedLuminescenceRecord.fwhmNm, 0)} nm` : 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Current Eff.</span><span className="text-white">{selectedLuminescenceRecord.currentEfficiencyCdA !== null ? `${formatNumber(selectedLuminescenceRecord.currentEfficiencyCdA)} cd/A` : 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Power Eff.</span><span className="text-white">{selectedLuminescenceRecord.powerEfficiencyLmW !== null ? `${formatNumber(selectedLuminescenceRecord.powerEfficiencyLmW)} lm/W` : 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">CIE</span><span className="text-white">{selectedLuminescenceRecord.cie_x !== null && selectedLuminescenceRecord.cie_y !== null ? `(${formatNumber(selectedLuminescenceRecord.cie_x, 3)}, ${formatNumber(selectedLuminescenceRecord.cie_y, 3)})` : 'N/A'}</span></div>
                  </div>
                </div>

                <div className="data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">材料/器件上下文</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-gray-300">Phase</span><span className="text-white">{selectedLuminescenceRecord.phase_type || 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Spacer</span><span className="text-white">{selectedLuminescenceRecord.spacer_abbr || selectedLuminescenceRecord.spacer_name || 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">B Site</span><span className="text-white">{selectedLuminescenceRecord.B_site || 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Halide</span><span className="text-white">{selectedLuminescenceRecord.X_halide || 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Sample</span><span className="text-white">{selectedLuminescenceRecord.sample_type || 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Quality</span><span className="text-white">{selectedLuminescenceRecord.data_quality || 'N/A'}</span></div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 text-sm">
                    {(() => {
                      const scaleMeta = getLuminescenceScaleMeta(selectedLuminescenceRecord);
                      return (
                        <div className="space-y-2">
                          <div className="text-white font-medium">尺度</div>
                          <div className="flex justify-between"><span className="text-gray-300">主尺度</span><span className="text-white">{scaleMeta.primaryScale}</span></div>
                          <div className="flex justify-between"><span className="text-gray-300">结构维度</span><span className="text-white">{scaleMeta.dimensionality}</span></div>
                          <div className="flex justify-between"><span className="text-gray-300">数据域</span><span className="text-white">{scaleMeta.dataDomain}</span></div>
                        </div>
                      );
                    })()}
                  </div>
                </div>

                <div className="data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">来源信息</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-gray-300">Journal</span><span className="text-white text-right max-w-[60%]">{selectedLuminescenceRecord.journal || 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Year</span><span className="text-white">{selectedLuminescenceRecord.pub_year || 'N/A'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Category</span><span className="text-white">{selectedLuminescenceRecord.data_category || 'N/A'}</span></div>
                  </div>
                </div>

                <div className="lg:col-span-3 data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">原始文献句子</h3>
                  <div className="text-sm text-gray-300 leading-relaxed">{selectedLuminescenceRecord.source_sentence || 'N/A'}</div>
                  {selectedLuminescenceRecord.doi && (
                    <button
                      onClick={() => window.open(selectedLuminescenceRecord.doi, '_blank', 'noopener,noreferrer')}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      打开 DOI / 链接
                    </button>
                  )}
                </div>
              </div>
            )}

            {selectedMPRecord && (
              <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">核心预测字段</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-gray-300">Formula</span><span className="text-white font-mono">{selectedMPRecord.formula}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Family</span><span className="text-white">{selectedMPRecord.family}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">GGA Eg</span><span className="text-white">{formatNumber(selectedMPRecord.ggaBandgapEV)} eV</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Raw Pred Eg</span><span className="text-sky-300">{formatNumber(selectedMPRecord.predictedRawGapEV)} eV</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Final Pred Eg</span><span className="text-indigo-300">{formatNumber(selectedMPRecord.finalPredictedBandgapEV)} eV</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">False-metal rescued</span><span className="text-white">{selectedMPRecord.rescuedFalseMetal ? 'Yes' : 'No'}</span></div>
                  </div>
                </div>

                <div className="data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">结构与稳定性代理</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-gray-300">Formation E/atom</span><span className="text-white">{formatNumber(selectedMPRecord.formationEnergyPerAtom, 3)}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Volume</span><span className="text-white">{formatNumber(selectedMPRecord.volume, 3)}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Tolerance factor</span><span className="text-white">{formatNumber(selectedMPRecord.toleranceFactor, 3)}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Octahedral factor</span><span className="text-white">{formatNumber(selectedMPRecord.octahedralFactor, 3)}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Space group</span><span className="text-white">{formatNumber(selectedMPRecord.spaceGroupNumber, 0)}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Avg dev EN</span><span className="text-white">{formatNumber(selectedMPRecord.avgElectronegativityDeviation, 3)}</span></div>
                  </div>
                </div>

                <div className="data-card rounded-2xl p-5">
                  <h3 className="text-lg text-white font-semibold mb-4">状态</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-gray-300">Metal in GGA</span><span className="text-white">{selectedMPRecord.isMetalGGA ? 'Yes' : 'No'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Predicted metal</span><span className="text-white">{selectedMPRecord.predictedIsMetal ? 'Yes' : 'No'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Rescued</span><span className="text-indigo-300">{selectedMPRecord.rescuedFalseMetal ? 'Yes' : 'No'}</span></div>
                    <div className="flex justify-between"><span className="text-gray-300">Record ID</span><span className="text-white">{selectedMPRecord.rawRecordIndex}</span></div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 text-sm">
                    {(() => {
                      const scaleMeta = getMPScaleMeta(selectedMPRecord);
                      return (
                        <div className="space-y-2">
                          <div className="text-white font-medium">尺度</div>
                          <div className="flex justify-between"><span className="text-gray-300">主尺度</span><span className="text-white">{scaleMeta.primaryScale}</span></div>
                          <div className="flex justify-between"><span className="text-gray-300">结构维度</span><span className="text-white">{scaleMeta.dimensionality}</span></div>
                          <div className="flex justify-between"><span className="text-gray-300">数据域</span><span className="text-white">{scaleMeta.dataDomain}</span></div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
