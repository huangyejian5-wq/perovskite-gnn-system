import React, { useEffect, useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  Activity,
  AlertCircle,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle,
  Database,
  Download,
  Eye,
  Filter,
  LineChart as LineChartIcon,
  Microscope,
  RefreshCw,
  Target,
  TrendingUp,
} from 'lucide-react';
import {
  EXPERIMENTAL_BANDGAP_RECORDS,
  RESEARCH_DATASET_SUMMARY,
  SCREENED_CANDIDATE_RECORDS,
} from '../data/researchDatasets';
import { RESEARCH_PROJECT_PROFILE } from '../data/researchProjectProfile';
import { ALL_LUMINESCENCE_RECORDS, LUMINESCENCE_DATASET_SUMMARY } from '../data/luminescenceDatasets';
import { MP_FULL_RECORDS, MP_FULL_SUMMARY } from '../data/mpFullLibrary';
import { SUPPLEMENTARY_LITERATURE_SUMMARY } from '../data/supplementaryDatasets';
import { MODEL_BENCHMARK_SUMMARY } from '../data/modelBenchmarkData';

type AnalysisMode = 'overview' | 'experimental' | 'candidates';
type MetricMode = 'bandgap' | 'confidence' | 'priority';

const CLASS_COLORS = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#06b6d4', '#84cc16'];

const bucketBandgap = (value: number, step: number, max: number) => {
  const lower = Math.floor(Math.min(value, max - 0.0001) / step) * step;
  const upper = lower + step;
  return `${lower.toFixed(1)}-${upper.toFixed(1)}`;
};

const formatNumber = (value: number, digits = 2) => value.toFixed(digits);

export const AnalysisPage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [analysisMode, setAnalysisMode] = useState<AnalysisMode>('overview');
  const [selectedMetric, setSelectedMetric] = useState<MetricMode>('bandgap');
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const experimentalAverageBandgap = useMemo(
    () =>
      EXPERIMENTAL_BANDGAP_RECORDS.reduce((sum, record) => sum + (record.experimentalBandgapEV ?? 0), 0) /
      EXPERIMENTAL_BANDGAP_RECORDS.length,
    []
  );

  const candidateAverageBandgap = useMemo(
    () =>
      SCREENED_CANDIDATE_RECORDS.reduce((sum, record) => sum + (record.predictedBandgapEV ?? 0), 0) /
      SCREENED_CANDIDATE_RECORDS.length,
    []
  );

  const candidateAverageStd = useMemo(
    () =>
      SCREENED_CANDIDATE_RECORDS.reduce((sum, record) => sum + (record.predictionStdEV ?? 0), 0) /
      SCREENED_CANDIDATE_RECORDS.length,
    []
  );

  const aGradeCount = useMemo(
    () => EXPERIMENTAL_BANDGAP_RECORDS.filter((record) => record.confidenceGrade === 'A').length,
    []
  );

  const experimentalYearTrend = useMemo(() => {
    const counts = new Map<number, number>();
    EXPERIMENTAL_BANDGAP_RECORDS.forEach((record) => {
      if (!record.year) return;
      counts.set(record.year, (counts.get(record.year) || 0) + 1);
    });

    return Array.from(counts.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([year, count]) => ({ year: String(year), count }));
  }, []);

  const classDistribution = useMemo(() => {
    const counts = new Map<string, number>();
    EXPERIMENTAL_BANDGAP_RECORDS.forEach((record) => {
      counts.set(record.compoundClass, (counts.get(record.compoundClass) || 0) + 1);
    });

    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([name, count], index) => ({
        name,
        count,
        color: CLASS_COLORS[index % CLASS_COLORS.length],
      }));
  }, []);

  const methodDistribution = useMemo(() => {
    const counts = new Map<string, number>();
    EXPERIMENTAL_BANDGAP_RECORDS.forEach((record) => {
      if (!record.measurementMethod) return;
      counts.set(record.measurementMethod, (counts.get(record.measurementMethod) || 0) + 1);
    });

    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([name, count]) => ({
        name: name.length > 18 ? `${name.slice(0, 18)}...` : name,
        fullName: name,
        count,
      }));
  }, []);

  const experimentalBandgapDistribution = useMemo(() => {
    const counts = new Map<string, number>();
    EXPERIMENTAL_BANDGAP_RECORDS.forEach((record) => {
      if (record.experimentalBandgapEV === null) return;
      const bucket = bucketBandgap(record.experimentalBandgapEV, 1, 8);
      counts.set(bucket, (counts.get(bucket) || 0) + 1);
    });

    return Array.from(counts.entries())
      .sort((a, b) => Number(a[0].split('-')[0]) - Number(b[0].split('-')[0]))
      .map(([bucket, count]) => ({ bucket, count }));
  }, []);

  const candidateBandgapDistribution = useMemo(() => {
    const counts = new Map<string, number>();
    SCREENED_CANDIDATE_RECORDS.forEach((record) => {
      if (record.predictedBandgapEV === null) return;
      const bucket = bucketBandgap(record.predictedBandgapEV, 0.5, 4);
      counts.set(bucket, (counts.get(bucket) || 0) + 1);
    });

    return Array.from(counts.entries())
      .sort((a, b) => Number(a[0].split('-')[0]) - Number(b[0].split('-')[0]))
      .map(([bucket, count]) => ({ bucket, count }));
  }, []);

  const candidateUncertaintyDistribution = useMemo(() => {
    const buckets = [
      { label: '<=0.6', min: 0, max: 0.6 },
      { label: '0.6-0.8', min: 0.6, max: 0.8 },
      { label: '0.8-1.0', min: 0.8, max: 1.0 },
      { label: '1.0-1.2', min: 1.0, max: 1.2 },
      { label: '>1.2', min: 1.2, max: Number.POSITIVE_INFINITY },
    ];

    return buckets.map((bucket) => ({
      label: bucket.label,
      count: SCREENED_CANDIDATE_RECORDS.filter((record) => {
        if (record.predictionStdEV === null) return false;
        return record.predictionStdEV > bucket.min && record.predictionStdEV <= bucket.max;
      }).length,
    }));
  }, []);

  const rescuedPriorityMatrix = useMemo(() => {
    return SCREENED_CANDIDATE_RECORDS.filter((record) => record.isFalseMetalRescued)
      .map((record) => {
        const predicted = record.predictedBandgapEV ?? 0;
        const std = record.predictionStdEV ?? 1.5;
        const feasibility = Math.max(10, Math.min(100, 100 - std * 45));
        const impact = Math.max(10, Math.min(100, predicted / 3.5 * 100));
        const urgency = record.ggaBandgapEV !== null && record.ggaBandgapEV <= 0.05 ? 95 : 82;
        const priorityScore = impact * 0.5 + feasibility * 0.35 + urgency * 0.15;

        return {
          formula: record.formula,
          impact: Number(formatNumber(impact, 1)),
          feasibility: Number(formatNumber(feasibility, 1)),
          urgency: Number(formatNumber(urgency, 1)),
          predictedBandgapEV: predicted,
          predictionStdEV: std,
          priorityScore,
        };
      })
      .sort((a, b) => b.priorityScore - a.priorityScore)
      .slice(0, 20);
  }, []);

  const priorityTable = rescuedPriorityMatrix.slice(0, 8);

  const recentHighConfidenceSamples = useMemo(() => {
    return [...EXPERIMENTAL_BANDGAP_RECORDS]
      .filter((record) => record.confidenceGrade === 'A')
      .sort((a, b) => (b.year || 0) - (a.year || 0))
      .slice(0, 6);
  }, []);

  const multiscaleDistribution = useMemo(
    () => [
      {
        label: '组成-晶体尺度',
        count: MP_FULL_SUMMARY.totalRecords,
        color: '#38bdf8',
        description: 'Materials Project 全量主库',
      },
      {
        label: '材料尺度',
        count:
          RESEARCH_DATASET_SUMMARY.experimentalRecordCount +
          LUMINESCENCE_DATASET_SUMMARY.materialPropertyCount +
          SUPPLEMENTARY_LITERATURE_SUMMARY.totalRecords,
        color: '#10b981',
        description: '实验带隙 + 发光材料属性 + 文献补充',
      },
      {
        label: '器件尺度',
        count: LUMINESCENCE_DATASET_SUMMARY.devicePerformanceCount,
        color: '#f59e0b',
        description: 'PeLED 器件性能记录',
      },
      {
        label: '筛选尺度',
        count: RESEARCH_DATASET_SUMMARY.screenedCandidateCount,
        color: '#8b5cf6',
        description: '假金属筛选与候选排序',
      },
    ],
    []
  );

  const dimensionalityDistribution = useMemo(() => {
    const abx3Count = MP_FULL_SUMMARY.familyCounts.find((item) => item.label === 'ABX3-like')?.count || 0;
    const doubleCount = MP_FULL_SUMMARY.familyCounts.find((item) => item.label === 'A2B1B2X6-like')?.count || 0;
    const quasi2DCount = LUMINESCENCE_DATASET_SUMMARY.topPhases.find((item) => item.label === 'Quasi-2D')?.count || 0;
    const lumOtherCount = Math.max(LUMINESCENCE_DATASET_SUMMARY.totalRecords - quasi2DCount, 0);
    return [
      { label: '单钙钛矿 / ABX3', count: abx3Count, color: '#3b82f6' },
      { label: '双钙钛矿 / A2B1B2X6', count: doubleCount, color: '#8b5cf6' },
      { label: '准 2D / 多量子阱', count: quasi2DCount, color: '#10b981' },
      { label: '其他发光体系', count: lumOtherCount, color: '#f59e0b' },
    ];
  }, []);

  const multiscaleFlowCards = useMemo(
    () => [
      {
        title: '组成-晶体 -> 材料',
        value: MP_FULL_SUMMARY.totalRecords,
        note: '从 MP 主库到结构/能带表征',
        accent: 'text-sky-300',
      },
      {
        title: '材料 -> 器件',
        value: LUMINESCENCE_DATASET_SUMMARY.devicePerformanceCount,
        note: '从发光材料属性到 PeLED 器件性能',
        accent: 'text-amber-300',
      },
      {
        title: '材料 -> 筛选',
        value: RESEARCH_DATASET_SUMMARY.screenedCandidateCount,
        note: '从候选空间到假金属优先验证',
        accent: 'text-purple-300',
      },
      {
        title: '理论 -> 文献',
        value: RESEARCH_DATASET_SUMMARY.experimentalRecordCount,
        note: '以实验整理表做真实对照',
        accent: 'text-emerald-300',
      },
    ],
    []
  );

  const emissionBandgapCorrelation = useMemo(() => {
    return ALL_LUMINESCENCE_RECORDS.filter(
      (record) => record.emission_peak_nm !== null && record.bandgap_eV !== null
    )
      .slice(0, 120)
      .map((record) => ({
        emission: record.emission_peak_nm,
        bandgap: record.bandgap_eV,
        category: record.data_category,
        halide: record.X_halide || 'Unknown',
      }));
  }, []);

  const eqeLuminanceCorrelation = useMemo(() => {
    return ALL_LUMINESCENCE_RECORDS.filter(
      (record) => record.EQE_pct !== null && record.luminance_cd_m2 !== null
    )
      .slice(0, 120)
      .map((record) => ({
        eqe: record.EQE_pct,
        luminance: record.luminance_cd_m2,
        emission: record.emission_peak_nm,
        category: record.data_category,
      }));
  }, []);

  const toleranceGapCorrelation = useMemo(() => {
    return MP_FULL_RECORDS.filter(
      (record) => record.toleranceFactor !== null && record.finalPredictedBandgapEV !== null
    )
      .slice(0, 160)
      .map((record) => ({
        tolerance: record.toleranceFactor,
        finalGap: record.finalPredictedBandgapEV,
        family: record.family,
      }));
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setCurrentTime(new Date());
    setIsRefreshing(false);
  };

  const exportAnalysis = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      summary: RESEARCH_DATASET_SUMMARY,
      analysisMode,
      selectedMetric,
      experimentalYearTrend,
      classDistribution,
      methodDistribution,
      experimentalBandgapDistribution,
      candidateBandgapDistribution,
      candidateUncertaintyDistribution,
      rescuedPriorityMatrix,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `research_analysis_${Date.now()}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container-fluid space-y-8 py-8">
      <div className="page-hero animate-fade-in-up">
        <div className="absolute inset-0 neural-glow opacity-5 rounded-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center animate-pulse-glow">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="page-kicker mb-2">Research Analytics Workspace</div>
                  <h1 className="page-title">
                    研究分析中心
                  </h1>
                  <p className="page-description mt-2">
                    论文目标是发光性能多任务预测；当前分析页优先展示已接入的多尺度数据、补充文献与真实验证基线
                  </p>
                </div>
              </div>

              <div className="hero-chip-row">
                <span className="hero-chip text-green-300">
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                  {currentTime.toLocaleTimeString('zh-CN')} | 真实数据统计
                </span>
                <span className="hero-chip">
                  <Database className="w-4 h-4 text-blue-400" />
                  {RESEARCH_DATASET_SUMMARY.experimentalRecordCount} 条实验记录
                </span>
                <span className="hero-chip">
                  <Target className="w-4 h-4 text-purple-400" />
                  {RESEARCH_DATASET_SUMMARY.screenedCandidateCount} 条候选
                </span>
                <span className="hero-chip">
                  <Award className="w-4 h-4 text-amber-400" />
                  {RESEARCH_DATASET_SUMMARY.rescuedFalseMetalCount} 条拯救候选
                </span>
              </div>
            </div>

            <div className="hidden xl:block w-72">
              <div className="data-card rounded-2xl p-5">
                <div className="text-sm text-gray-400 mb-2">当前分析基线</div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-gray-400">实验均值</div>
                    <div className="text-blue-300 font-semibold">{formatNumber(experimentalAverageBandgap)} eV</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-gray-400">候选均值</div>
                    <div className="text-purple-300 font-semibold">{formatNumber(candidateAverageBandgap)} eV</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-gray-400">平均标准差</div>
                    <div className="text-amber-300 font-semibold">{formatNumber(candidateAverageStd, 3)}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-gray-400">A 级记录</div>
                    <div className="text-emerald-300 font-semibold">{aGradeCount}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-panel animate-fade-in-up animate-delay-50">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 data-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">论文方法与目标</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RESEARCH_PROJECT_PROFILE.coreMethod.map((item) => (
                <div key={item} className="bg-white/5 rounded-xl p-4">
                  <div className="text-white font-medium mb-1">{item.split('：')[0]}</div>
                  <div className="text-sm text-gray-400 leading-relaxed">
                    {item.includes('：') ? item.split('：').slice(1).join('：') : item}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {RESEARCH_PROJECT_PROFILE.validationTargets.map((item) => (
                <div key={item.label} className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-xl">
                  <span className="text-sm text-gray-300">{item.label}</span>
                  <span className="text-sm font-medium text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="data-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">真实性说明</h3>
            <div className="space-y-3">
              {RESEARCH_PROJECT_PROFILE.currentReality.map((item) => (
                <div key={item} className="text-sm text-gray-300 leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 text-sm text-gray-400 leading-relaxed">
              因此，本页当前图表围绕已接入的实验带隙、补充文献、候选筛选、发光材料/器件统计以及先进集成验证基线展开，不虚构尚未整理完成的观测项。
            </div>
          </div>
        </div>
      </div>

      <div className="toolbar-panel animate-fade-in-up animate-delay-100">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-200">分析模式</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { key: 'overview', label: '概览', icon: Eye },
                { key: 'experimental', label: '实验', icon: Microscope },
                { key: 'candidates', label: '候选', icon: TrendingUp },
              ].map((mode) => (
                <button
                  key={mode.key}
                  onClick={() => setAnalysisMode(mode.key as AnalysisMode)}
                  className={`p-3 rounded-lg border transition-all flex items-center justify-center gap-2 ${
                    analysisMode === mode.key
                      ? 'bg-green-500/30 border-green-400 text-green-200'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <mode.icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{mode.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-200">聚焦指标</label>
            <select
              value={selectedMetric}
              onChange={(event) => setSelectedMetric(event.target.value as MetricMode)}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
            >
              <option value="bandgap" className="bg-slate-800">带隙</option>
              <option value="confidence" className="bg-slate-800">置信度 / 不确定性</option>
              <option value="priority" className="bg-slate-800">优先级</option>
            </select>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-200">当前来源</label>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-blue-200">
                实验元数据表
              </div>
              <div className="px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-purple-200">
                候选筛选结果表
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-200">操作</label>
            <div className="flex gap-2">
              <button onClick={handleRefresh} disabled={isRefreshing} className="btn-control">
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              </button>
              <button onClick={exportAnalysis} className="btn-control">
                <Download className="w-4 h-4" />
              </button>
              <button className="btn-control">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animate-delay-200">
        {[
          {
            label: '实验带隙均值',
            value: `${formatNumber(experimentalAverageBandgap)} eV`,
            description: '基于清洗后实验记录',
            icon: Microscope,
            accent: 'text-blue-300',
          },
          {
            label: '候选预测均值',
            value: `${formatNumber(candidateAverageBandgap)} eV`,
            description: '基于筛选候选预测值',
            icon: TrendingUp,
            accent: 'text-violet-300',
          },
          {
            label: '高可信实验记录',
            value: aGradeCount.toString(),
            description: 'A 级文献条目',
            icon: CheckCircle,
            accent: 'text-emerald-300',
          },
          {
            label: '平均不确定性',
            value: formatNumber(candidateAverageStd, 3),
            description: '候选预测标准差均值',
            icon: Activity,
            accent: 'text-amber-300',
          },
        ].map((card) => (
          <div key={card.label} className="metric-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <card.icon className={`w-5 h-5 ${card.accent}`} />
              </div>
            </div>
            <div className={`text-2xl font-bold ${card.accent} mb-1`}>{card.value}</div>
            <div className="text-gray-200 font-medium">{card.label}</div>
            <div className="text-gray-400 text-xs mt-1">{card.description}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-fade-in-up animate-delay-220">
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-amber-400" />
            补充文献层
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="data-card rounded-2xl p-4">
              <div className="text-2xl font-bold text-amber-300">{SUPPLEMENTARY_LITERATURE_SUMMARY.totalRecords}</div>
              <div className="text-white font-medium mt-1">补充记录</div>
              <div className="text-sm text-gray-400 mt-1">自动抽取 + 人工补充分库展示</div>
            </div>
            <div className="data-card rounded-2xl p-4">
              <div className="text-2xl font-bold text-emerald-300">{SUPPLEMENTARY_LITERATURE_SUMMARY.uniqueFormulaCount}</div>
              <div className="text-white font-medium mt-1">唯一化学式</div>
              <div className="text-sm text-gray-400 mt-1">补足材料尺度检索范围</div>
            </div>
            <div className="data-card rounded-2xl p-4">
              <div className="text-2xl font-bold text-blue-300">{SUPPLEMENTARY_LITERATURE_SUMMARY.autoExtractedCount}</div>
              <div className="text-white font-medium mt-1">自动抽取</div>
              <div className="text-sm text-gray-400 mt-1">公开文献快速补充</div>
            </div>
            <div className="data-card rounded-2xl p-4">
              <div className="text-2xl font-bold text-violet-300">
                {SUPPLEMENTARY_LITERATURE_SUMMARY.yearRange.min}-{SUPPLEMENTARY_LITERATURE_SUMMARY.yearRange.max}
              </div>
              <div className="text-white font-medium mt-1">时间跨度</div>
              <div className="text-sm text-gray-400 mt-1">覆盖历史到近期补充线索</div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-cyan-400" />
            验证基线
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="data-card rounded-2xl p-4">
              <div className="text-2xl font-bold text-cyan-300">{MODEL_BENCHMARK_SUMMARY.totalRecords}</div>
              <div className="text-white font-medium mt-1">验证样本</div>
              <div className="text-sm text-gray-400 mt-1">来自 advanced ensemble 结果表</div>
            </div>
            <div className="data-card rounded-2xl p-4">
              <div className="text-2xl font-bold text-emerald-300">{MODEL_BENCHMARK_SUMMARY.meanAbsoluteErrorEV.toFixed(3)} eV</div>
              <div className="text-white font-medium mt-1">平均绝对误差</div>
              <div className="text-sm text-gray-400 mt-1">真实集成基线而非演示指标</div>
            </div>
            <div className="data-card rounded-2xl p-4">
              <div className="text-2xl font-bold text-amber-300">{MODEL_BENCHMARK_SUMMARY.recordsWithinPoint3EV}</div>
              <div className="text-white font-medium mt-1">{'|误差| <= 0.3 eV'}</div>
              <div className="text-sm text-gray-400 mt-1">说明修正后结果具备可用性</div>
            </div>
            <div className="data-card rounded-2xl p-4">
              <div className="text-2xl font-bold text-violet-300">{MODEL_BENCHMARK_SUMMARY.metalCount}</div>
              <div className="text-white font-medium mt-1">金属样本</div>
              <div className="text-sm text-gray-400 mt-1">覆盖 false-metal 相关验证口径</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 animate-fade-in-up animate-delay-250">
        <div className="xl:col-span-2 glass-card rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Database className="w-6 h-6 text-sky-400" />
            多尺度数据分布
          </h3>
          <div className="chart-container h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={multiscaleDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="label" tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                <YAxis tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {multiscaleDistribution.map((item) => (
                    <Cell key={item.label} fill={item.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Microscope className="w-6 h-6 text-cyan-400" />
            结构维度分布
          </h3>
          <div className="chart-container h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={dimensionalityDistribution} dataKey="count" nameKey="label" cx="50%" cy="50%" outerRadius={105}>
                  {dimensionalityDistribution.map((item) => (
                    <Cell key={item.label} fill={item.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-fade-in-up animate-delay-260">
        {multiscaleFlowCards.map((card) => (
          <div key={card.title} className="data-card rounded-2xl p-6">
            <div className={`text-2xl font-bold mb-2 ${card.accent}`}>{card.value}</div>
            <div className="text-white font-medium">{card.title}</div>
            <div className="text-gray-400 text-sm mt-1">{card.note}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 animate-fade-in-up animate-delay-270">
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Microscope className="w-6 h-6 text-emerald-400" />
            材料尺度关联
          </h3>
          <div className="chart-container h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="bandgap" type="number" tick={{ fill: '#e5e7eb', fontSize: 12 }} name="Bandgap" />
                <YAxis dataKey="emission" type="number" tick={{ fill: '#e5e7eb', fontSize: 12 }} name="Emission" />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                  formatter={(value: number, name: string) => [formatNumber(value, name === 'bandgap' ? 2 : 0), name === 'bandgap' ? 'Bandgap (eV)' : 'Emission (nm)']}
                  labelFormatter={(_, payload) => payload && payload[0] ? `${payload[0].payload.halide} | ${payload[0].payload.category}` : ''}
                />
                <Scatter data={emissionBandgapCorrelation} fill="#10b981" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-amber-400" />
            器件尺度关联
          </h3>
          <div className="chart-container h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="eqe" type="number" tick={{ fill: '#e5e7eb', fontSize: 12 }} name="EQE" />
                <YAxis dataKey="luminance" type="number" tick={{ fill: '#e5e7eb', fontSize: 12 }} name="Luminance" />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                  formatter={(value: number, name: string) => [formatNumber(value, name === 'eqe' ? 2 : 0), name === 'eqe' ? 'EQE (%)' : 'Luminance (cd m^-2)']}
                  labelFormatter={(_, payload) => payload && payload[0] ? `${payload[0].payload.category} | ${payload[0].payload.emission || 'N/A'} nm` : ''}
                />
                <Scatter data={eqeLuminanceCorrelation} fill="#f59e0b" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Database className="w-6 h-6 text-sky-400" />
            组成-晶体关联
          </h3>
          <div className="chart-container h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="tolerance" type="number" tick={{ fill: '#e5e7eb', fontSize: 12 }} name="Tolerance" />
                <YAxis dataKey="finalGap" type="number" tick={{ fill: '#e5e7eb', fontSize: 12 }} name="Final gap" />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                  formatter={(value: number, name: string) => [formatNumber(value, 3), name === 'tolerance' ? 'Tolerance factor' : 'Final predicted gap (eV)']}
                  labelFormatter={(_, payload: any) => payload && payload[0] ? payload[0].payload.family : ''}
                />
                <Scatter data={toleranceGapCorrelation} fill="#38bdf8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {analysisMode === 'overview' && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-fade-in-up animate-delay-300">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <LineChartIcon className="w-6 h-6 text-blue-400" />
              实验记录年度分布
            </h3>
            <div className="chart-container h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={experimentalYearTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="count" stroke="#3b82f6" fill="#3b82f644" strokeWidth={3} name="记录数" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-purple-400" />
              实验类别结构
            </h3>
            <div className="chart-container h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={classDistribution} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={110}>
                    {classDistribution.map((item) => (
                      <Cell key={item.name} fill={item.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {analysisMode === 'experimental' && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-fade-in-up animate-delay-300">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Microscope className="w-6 h-6 text-emerald-400" />
              实验带隙分布
            </h3>
            <div className="chart-container h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={experimentalBandgapDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="bucket" tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                  />
                  <Bar dataKey="count" fill="#10b981" radius={[6, 6, 0, 0]} name="记录数" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-amber-400" />
              主流测试方法
            </h3>
            <div className="chart-container h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={methodDistribution} layout="vertical" margin={{ left: 10, right: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis type="number" tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                  <YAxis dataKey="name" type="category" tick={{ fill: '#e5e7eb', fontSize: 11 }} width={120} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                    labelFormatter={(label, payload) => payload && payload[0] ? payload[0].payload.fullName : label}
                  />
                  <Bar dataKey="count" fill="#f59e0b" radius={[0, 6, 6, 0]} name="记录数" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {analysisMode === 'candidates' && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-fade-in-up animate-delay-300">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-purple-400" />
              候选预测带隙分布
            </h3>
            <div className="chart-container h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={candidateBandgapDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="bucket" tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                  />
                  <Bar dataKey="count" fill="#8b5cf6" radius={[6, 6, 0, 0]} name="候选数" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Activity className="w-6 h-6 text-cyan-400" />
              不确定性分布
            </h3>
            <div className="chart-container h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={candidateUncertaintyDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="label" tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                  />
                  <Bar dataKey="count" fill="#06b6d4" radius={[6, 6, 0, 0]} name="候选数" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 animate-fade-in-up animate-delay-400">
        <div className="xl:col-span-2 glass-card rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-yellow-400" />
            假金属拯救优先级矩阵
          </h3>
          <div className="chart-container h-96">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  type="number"
                  dataKey="feasibility"
                  tick={{ fill: '#e5e7eb', fontSize: 12 }}
                  label={{ value: '可复核性 / 低不确定性', position: 'insideBottom', offset: -8, fill: '#e5e7eb' }}
                  domain={[0, 100]}
                />
                <YAxis
                  type="number"
                  dataKey="impact"
                  tick={{ fill: '#e5e7eb', fontSize: 12 }}
                  label={{ value: '潜在影响 / 高预测带隙', angle: -90, position: 'insideLeft', fill: '#e5e7eb' }}
                  domain={[0, 100]}
                />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                  formatter={(value: number, name: string) => [formatNumber(value, 1), name === 'impact' ? '影响力' : '可复核性']}
                  labelFormatter={(_, payload: any) => payload && payload[0] ? payload[0].payload.formula : ''}
                />
                <Scatter data={rescuedPriorityMatrix} dataKey="impact" fill="#8b5cf6" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="data-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">优先验证 Top 8</h3>
            <div className="space-y-3">
              {priorityTable.map((item, index) => (
                <div key={item.formula} className="bg-white/5 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-medium">{index + 1}. {item.formula}</span>
                    <span className="text-purple-300 text-sm">{formatNumber(item.predictedBandgapEV)} eV</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    std {formatNumber(item.predictionStdEV, 3)} | score {formatNumber(item.priorityScore, 1)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="data-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">高可信近期实验样本</h3>
            <div className="space-y-3">
              {recentHighConfidenceSamples.map((record) => (
                <div key={record.id} className="bg-white/5 rounded-xl p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{record.formula}</span>
                    <span className="text-emerald-300 text-sm">{record.confidenceGrade}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {formatNumber(record.experimentalBandgapEV ?? 0)} eV | {record.measurementMethod || 'N/A'} | {record.year || 'N/A'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-8 animate-fade-in-up animate-delay-500">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Eye className="w-6 h-6 text-pink-400" />
          研究洞察
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="data-card rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-2">实验数据结构清晰</h4>
                  <p className="text-gray-300 leading-relaxed">
                    当前实验带隙库以 `single perovskite` 为主，但已覆盖双钙钛矿和 vacancy-ordered 体系，足以支撑分层展示、方法对比和文献回溯。
                  </p>
                </div>
              </div>
            </div>

            <div className="data-card rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-2">候选不确定性仍需二次筛选</h4>
                  <p className="text-gray-300 leading-relaxed">
                    候选池体量足够大，但预测标准差整体不低，因此更适合先做“高预测带隙 + 低标准差 + rescued”联合排序，再进入实验或高精度计算验证。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="data-card rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-2">优先级矩阵更贴近当前工作流</h4>
                  <p className="text-gray-300 leading-relaxed">
                    现在分析页不再展示演示性质的“模型精度”与随机趋势，而是直接围绕假金属拯救候选的影响力、可复核性和紧迫度进行排序。
                  </p>
                </div>
              </div>
            </div>

            <div className="data-card rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-2">验证基线已开始闭环</h4>
                  <p className="text-gray-300 leading-relaxed">
                    现在这里已经接入先进集成结果表，可直接展示真实 MAE 与误差覆盖率；后续继续接入训练日志或残差文件后，还能补完整的 R²、残差分布和模型迭代轨迹。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
