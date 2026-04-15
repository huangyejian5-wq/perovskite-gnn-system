import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Activity,
  AlertCircle,
  Award,
  BarChart3,
  Brain,
  CheckCircle,
  Clock,
  Database,
  Download,
  Flame,
  Lightbulb,
  Globe,
  Loader,
  Microscope,
  Target,
  TrendingUp,
  Upload,
  Zap,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { MultiScaleGNN } from '../models/graphNeuralNetwork';
import { PerformancePredictionModel } from '../models/performancePrediction';
import { MolecularGraphBuilder } from '../utils/molecularGraphBuilder';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  EXPERIMENTAL_BANDGAP_RECORDS,
  RESEARCH_DATASET_SUMMARY,
  SCREENED_CANDIDATE_RECORDS,
} from '../data/researchDatasets';
import { RESEARCH_PROJECT_PROFILE } from '../data/researchProjectProfile';
import {
  LUMINESCENCE_DATASET_SUMMARY,
  ALL_LUMINESCENCE_RECORDS,
  TOP_CURRENT_EFFICIENCY_SAMPLES,
  TOP_FWHM_SAMPLES,
  TOP_POWER_EFFICIENCY_SAMPLES,
  TOP_TURN_ON_VOLTAGE_SAMPLES,
  TOP_EQE_SAMPLES,
  TOP_PLQY_SAMPLES,
} from '../data/luminescenceDatasets';
import { MP_FULL_RECORDS } from '../data/mpFullLibrary';
import {
  SUPPLEMENTARY_LITERATURE_RECORDS,
  SUPPLEMENTARY_LITERATURE_SUMMARY,
} from '../data/supplementaryDatasets';
import { MODEL_BENCHMARK_SUMMARY } from '../data/modelBenchmarkData';

interface PredictionForm {
  A_site: string;
  B_site: string;
  X_site: string;
  temperature: number;
  pressure: number;
  humidity: number;
  structure_file?: FileList;
}

interface PredictionResults {
  bandgap: number;
  plqy: number;
  stability: number;
  emissionWavelength: number;
  efficiency: number;
  confidence: number;
  processingTime: number;
}

interface TemplateMaterial {
  key: string;
  A: string;
  B: string;
  X: string;
  name: string;
  referenceFormula: string;
}

interface PredictionScaleProfile {
  inputScale: string;
  outputScale: string;
  dimensionality: string;
  dataDomain: string;
  recommendation: string;
}

export const PredictionPage: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<PredictionForm>();
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<PredictionResults | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [predictionHistory, setPredictionHistory] = useState<Array<{
    id: string;
    formula: string;
    results: PredictionResults;
    timestamp: Date;
  }>>([]);
  const [activeTab, setActiveTab] = useState<'single' | 'candidates' | 'validation'>('single');
  const [currentTime, setCurrentTime] = useState(new Date());
  const fileInputRef = useRef<HTMLInputElement>(null);
  const gnnModel = useMemo(() => new MultiScaleGNN(), []);
  const predictionModel = useMemo(() => new PerformancePredictionModel(), []);
  const graphBuilder = useMemo(() => new MolecularGraphBuilder(), []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const templateMaterials: TemplateMaterial[] = useMemo(
    () => [
      { key: 'Cs-Pb-Br', A: 'Cs', B: 'Pb', X: 'Br', name: 'CsPbBr3', referenceFormula: 'CsPbBr3' },
      { key: 'MA-Pb-Br', A: 'MA', B: 'Pb', X: 'Br', name: 'MAPbBr3', referenceFormula: 'MAPbBr3' },
      { key: 'MA-Pb-I', A: 'MA', B: 'Pb', X: 'I', name: 'MAPbI3', referenceFormula: 'MAPbI3' },
      { key: 'FA-Pb-I', A: 'FA', B: 'Pb', X: 'I', name: 'FAPbI3', referenceFormula: 'FAPbI3' },
      { key: 'MA-Sn-I', A: 'MA', B: 'Sn', X: 'I', name: 'MASnI3', referenceFormula: 'MASnI3' },
    ],
    []
  );

  const validationReferences = useMemo(() => {
    return templateMaterials
      .map((template) => {
        const reference = EXPERIMENTAL_BANDGAP_RECORDS.find((record) => record.formula === template.referenceFormula);
        return reference
          ? {
              ...template,
              experimentalBandgapEV: reference.experimentalBandgapEV ?? 0,
              measurementMethod: reference.measurementMethod,
              confidenceGrade: reference.confidenceGrade,
              year: reference.year,
              doiOrUrl: reference.doiOrUrl,
            }
          : null;
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);
  }, [templateMaterials]);

  const experimentalValidationSamples = useMemo(
    () =>
      [...EXPERIMENTAL_BANDGAP_RECORDS]
        .filter((record) => record.confidenceGrade === 'A')
        .sort((a, b) => (b.year || 0) - (a.year || 0))
        .slice(0, 10),
    []
  );

  const candidateQueue = useMemo(() => {
    return SCREENED_CANDIDATE_RECORDS.filter((record) => record.isFalseMetalRescued)
      .map((record) => {
        const predicted = record.predictedBandgapEV ?? 0;
        const std = record.predictionStdEV ?? 1.5;
        const score = predicted * 0.7 + Math.max(0, 1.2 - std) * 0.8;
        return {
          ...record,
          score,
        };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 15);
  }, []);

  const candidateStats = useMemo(() => {
    const rescued = SCREENED_CANDIDATE_RECORDS.filter((record) => record.isFalseMetalRescued);
    const highGap = rescued.filter((record) => (record.predictedBandgapEV ?? 0) >= 2.5).length;
    const lowStd = rescued.filter((record) => (record.predictionStdEV ?? 99) <= 0.9).length;
    const avgGap =
      SCREENED_CANDIDATE_RECORDS.reduce((sum, record) => sum + (record.predictedBandgapEV ?? 0), 0) /
      SCREENED_CANDIDATE_RECORDS.length;

    return {
      rescuedCount: rescued.length,
      highGapCount: highGap,
      lowStdCount: lowStd,
      avgGap,
    };
  }, []);

  const modelMetrics = useMemo(
    () => ({
      validationCorpus: RESEARCH_DATASET_SUMMARY.experimentalRecordCount,
      candidatePool: RESEARCH_DATASET_SUMMARY.screenedCandidateCount,
      rescuedCount: RESEARCH_DATASET_SUMMARY.rescuedFalseMetalCount,
      alignedGroundTruth: RESEARCH_DATASET_SUMMARY.alignedGroundTruthCount,
      averageCandidateGap: candidateStats.avgGap,
    }),
    [candidateStats.avgGap]
  );

  const watchedA = watch('A_site');
  const watchedB = watch('B_site');
  const watchedX = watch('X_site');
  const currentKey = `${watchedA || ''}-${watchedB || ''}-${watchedX || ''}`;
  const currentFormula = `${watchedA || ''}${watchedB || ''}${watchedX || ''}3`;
  const matchedReference = useMemo(
    () => validationReferences.find((item) => item.key === currentKey) || null,
    [currentKey, validationReferences]
  );

  const matchedMPRecords = useMemo(
    () => MP_FULL_RECORDS.filter((record) => record.formula === currentFormula),
    [currentFormula]
  );

  const matchedSupplementaryRecords = useMemo(
    () => SUPPLEMENTARY_LITERATURE_RECORDS.filter((record) => record.formula === currentFormula),
    [currentFormula]
  );

  const matchedLuminescenceRecords = useMemo(
    () =>
      ALL_LUMINESCENCE_RECORDS.filter((record) => {
        const sameB = !watchedB || record.B_site === watchedB;
        const sameHalide =
          !watchedX ||
          (record.X_halide || '')
            .toLowerCase()
            .includes((watchedX || '').toLowerCase());
        return sameB && sameHalide;
      }),
    [watchedB, watchedX]
  );

  const predictionScaleProfile = useMemo<PredictionScaleProfile>(() => {
    const a = watchedA;
    const b = watchedB;
    const x = watchedX;
    const isComplete = Boolean(a && b && x);
    const dimensionality =
      a === 'MA' || a === 'FA' || a === 'Cs' || a === 'Rb' || a === 'K'
        ? '默认单钙钛矿 / 3D 体相输入'
        : '钙钛矿组成输入';

    return {
      inputScale: isComplete ? '组成-晶体尺度输入' : '等待完整组分输入',
      outputScale: '材料尺度输出为主，器件尺度参考为辅',
      dimensionality,
      dataDomain: '预测结果主要对应带隙、发光波长、PLQY proxy、稳定性 proxy',
      recommendation:
        matchedLuminescenceRecords.length > 0
          ? '当前输入可映射到真实发光材料/器件参考，适合结合 PeLED 数据交叉查看。'
          : matchedSupplementaryRecords.length > 0
            ? '当前输入可映射到补充文献库，适合先查看公开文献中的 bandgap 补充记录。'
          : matchedMPRecords.length > 0
            ? '当前输入可映射到 MP 组成-晶体尺度记录，适合先做结构/能带级复核。'
            : '当前输入暂未直接命中已接入参考库，建议先作为组成级预测结果使用。',
    };
  }, [matchedLuminescenceRecords.length, matchedMPRecords.length, matchedSupplementaryRecords.length, watchedA, watchedB, watchedX]);

  const referenceComparisonData = useMemo(() => {
    if (!results || !matchedReference) return [];

    return [
      { name: '预测带隙', value: Number(results.bandgap.toFixed(2)), color: '#3b82f6' },
      { name: '实验带隙', value: Number(matchedReference.experimentalBandgapEV.toFixed(2)), color: '#10b981' },
    ];
  }, [matchedReference, results]);

  const resultRadarLikeData = useMemo(() => {
    if (!results) return [];
    return [
      { name: '带隙', value: Math.min(100, results.bandgap / 4 * 100), color: '#ef4444' },
      { name: 'PLQY', value: results.plqy, color: '#3b82f6' },
      { name: '稳定性', value: results.stability, color: '#10b981' },
      { name: '效率', value: results.efficiency, color: '#f59e0b' },
    ];
  }, [results]);

  const onSubmit = async (data: PredictionForm) => {
    setIsLoading(true);
    const startTime = Date.now();
    
    try {
      // Create molecular formula
      const formula = `${data.A_site}${data.B_site}${data.X_site}₃`;
      
      // Build molecular graph from composition
      const molecularGraph = graphBuilder.buildFromComposition(
        data.A_site,
        data.B_site,
        data.X_site
      );

      // Add environmental conditions
      const conditions = {
        temperature: data.temperature,
        pressure: data.pressure,
        humidity: data.humidity
      };

      // Run GNN inference
      const gnnFeatures = gnnModel.forward(molecularGraph);
      
      // Predict performance properties
      const predictions = await predictionModel.predict(gnnFeatures.global, conditions);
      
      const processingTime = Date.now() - startTime;
      
      const predictionResults: PredictionResults = {
        bandgap: predictions.bandgap,
        plqy: predictions.plqy,
        stability: predictions.stability,
        emissionWavelength: predictions.emissionWavelength,
        efficiency: predictions.efficiency,
        confidence: predictions.confidence,
        processingTime
      };

      setResults(predictionResults);
      
      // Add to history
      const historyEntry = {
        id: `pred_${Date.now()}`,
        formula,
        results: predictionResults,
        timestamp: new Date()
      };
      setPredictionHistory(prev => [historyEntry, ...prev.slice(0, 9)]); // Keep last 10
      
      toast.success(`预测完成！置信度: ${(predictions.confidence * 100).toFixed(1)}%`);
    } catch (error) {
      console.error('Prediction error:', error);
      toast.error('预测失败，请检查输入参数');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast.error('文件大小不能超过10MB');
        return;
      }
      
      const allowedTypes = ['.cif', '.xyz', '.pdb', '.mol', '.json'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (!allowedTypes.includes(fileExtension)) {
        toast.error('支持的文件格式: CIF, XYZ, PDB, MOL, JSON');
        return;
      }
      
      setUploadedFile(file);
      toast.success(`已上传文件: ${file.name}`);
    }
  };

  const downloadResults = () => {
    if (!results) return;
    
    const data = {
      prediction: results,
      formula: `${watch('A_site')}${watch('B_site')}${watch('X_site')}₃`,
      conditions: {
        temperature: watch('temperature'),
        pressure: watch('pressure'),
        humidity: watch('humidity')
      },
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `perovskite_prediction_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('结果已导出');
  };

  const loadTemplate = (template: TemplateMaterial) => {
    reset({
      A_site: template.A,
      B_site: template.B,
      X_site: template.X,
      temperature: 298,
      pressure: 1.0,
      humidity: 45
    });
    toast.success(`已加载真实参考模板: ${template.name}`);
  };

  const exportCandidateQueue = () => {
    const blob = new Blob([JSON.stringify(candidateQueue, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `candidate_queue_${Date.now()}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
    toast.success('候选队列已导出');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 neural-glow opacity-10 rounded-2xl"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 animate-pulse" />
                  <span className="text-green-400 font-medium text-sm">
                    {currentTime.toLocaleTimeString('zh-CN')} | 研究数据在线
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm">{modelMetrics.validationCorpus} 条实验参考</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 text-sm">{modelMetrics.candidatePool} 条候选池</span>
                </div>
              </div>
              <div className="page-kicker mb-2">Multiscale Prediction Entry</div>
              <h1 className="page-title mb-2">
                钙钛矿性能预测
              </h1>
              <p className="page-description mb-4">
                面向钙钛矿发光材料的多尺度物理约束预测入口，当前已接入真实研究样本、补充文献和验证基线
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 bg-blue-500/10 px-3 py-2 rounded-lg border border-blue-500/20">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 font-medium text-sm">参考 {modelMetrics.validationCorpus}</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/10 px-3 py-2 rounded-lg border border-green-500/20">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-medium text-sm">Ground Truth {modelMetrics.alignedGroundTruth}</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-500/10 px-3 py-2 rounded-lg border border-purple-500/20">
                  <Database className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 font-medium text-sm">拯救 {modelMetrics.rescuedCount}</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-500/10 px-3 py-2 rounded-lg border border-orange-500/20">
                  <Award className="w-4 h-4 text-orange-400" />
                  <span className="text-orange-400 font-medium text-sm">均值 {modelMetrics.averageCandidateGap.toFixed(2)} eV</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-panel">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-cyan-400" />
              论文对齐的预测任务
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RESEARCH_PROJECT_PROFILE.targetOutputs.map((item) => (
                <div key={item.label} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-white font-medium mb-1">{item.label}</div>
                  <div className="text-sm text-gray-400 leading-relaxed">{item.description}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              {RESEARCH_PROJECT_PROFILE.validationTargets.map((item) => (
                <div key={item.label} className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-gray-300">{item.label}</span>
                  <span className="text-white font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Microscope className="w-5 h-5 text-amber-400" />
              当前实现状态
            </h3>
            <div className="space-y-3">
              {RESEARCH_PROJECT_PROFILE.currentReality.map((item) => (
                <div key={item} className="text-sm text-gray-300 leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 text-sm text-gray-400 leading-relaxed">
              当前页面中的单材料推断保留发光性能预测交互，但与真实文献严格对齐的部分，现阶段主要是实验参考、候选队列和方法口径说明。
            </div>
          </div>
        </div>
      </div>

      <div className="section-panel">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Microscope className="w-5 h-5 text-emerald-400" />
              多尺度输出说明
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400 mb-1">输入尺度</div>
                <div className="text-white font-medium">{predictionScaleProfile.inputScale}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400 mb-1">输出尺度</div>
                <div className="text-white font-medium">{predictionScaleProfile.outputScale}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400 mb-1">结构维度</div>
                <div className="text-white font-medium">{predictionScaleProfile.dimensionality}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400 mb-1">数据域</div>
                <div className="text-white font-medium">{predictionScaleProfile.dataDomain}</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400 leading-relaxed">
              {predictionScaleProfile.recommendation}
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" />
              参考库映射
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">实验带隙参考</span>
                <span className="text-white">{matchedReference ? 1 : 0}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">发光材料/器件参考</span>
                <span className="text-white">{matchedLuminescenceRecords.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">补充文献参考</span>
                <span className="text-white">{matchedSupplementaryRecords.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">MP 组成-晶体参考</span>
                <span className="text-white">{matchedMPRecords.length}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 text-sm text-gray-400 leading-relaxed">
              当前输入模式最适合先做组成-晶体尺度预测，再结合材料尺度实验记录、补充文献记录和器件尺度发光数据做交叉判断。
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="glass-card rounded-xl p-4 hover:scale-105 transition-transform">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-xl">{modelMetrics.validationCorpus}</p>
              <p className="text-gray-400 text-xs">实验参考条目</p>
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-4 hover:scale-105 transition-transform">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-xl">{modelMetrics.candidatePool.toLocaleString()}</p>
              <p className="text-gray-400 text-xs">候选总数</p>
            </div>
          </div>
          <p className="text-green-400 text-sm">来自筛选结果表</p>
        </div>

        <div className="glass-card rounded-xl p-4 hover:scale-105 transition-transform">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-xl">{modelMetrics.rescuedCount}</p>
              <p className="text-gray-400 text-xs">假金属拯救</p>
            </div>
          </div>
          <p className="text-purple-400 text-sm">优先复核对象</p>
        </div>

        <div className="glass-card rounded-xl p-4 hover:scale-105 transition-transform">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Microscope className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-xl">{modelMetrics.averageCandidateGap.toFixed(2)}</p>
              <p className="text-gray-400 text-xs">候选均值带隙</p>
            </div>
          </div>
          <p className="text-orange-400 text-sm">Predicted Eg</p>
        </div>
      </div>

      <div className="section-panel">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" />
              真实发光数据支撑
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400 text-sm">发光记录</div>
                <div className="text-2xl font-bold text-blue-300">{LUMINESCENCE_DATASET_SUMMARY.totalRecords}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400 text-sm">PLQY 记录</div>
                <div className="text-2xl font-bold text-cyan-300">{LUMINESCENCE_DATASET_SUMMARY.plqyRecordCount}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400 text-sm">EQE 记录</div>
                <div className="text-2xl font-bold text-purple-300">{LUMINESCENCE_DATASET_SUMMARY.eqeRecordCount}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400 text-sm">CIE / 稳定性提及</div>
                <div className="text-2xl font-bold text-amber-300">{LUMINESCENCE_DATASET_SUMMARY.cieMentionCount}/{LUMINESCENCE_DATASET_SUMMARY.stabilityMentionCount}</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400">Turn-on voltage</div>
                <div className="text-white font-semibold">{LUMINESCENCE_DATASET_SUMMARY.turnOnVoltageCount}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400">FWHM</div>
                <div className="text-white font-semibold">{LUMINESCENCE_DATASET_SUMMARY.fwhmRecordCount}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400">Current efficiency</div>
                <div className="text-white font-semibold">{LUMINESCENCE_DATASET_SUMMARY.currentEfficiencyCount}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400">Power efficiency</div>
                <div className="text-white font-semibold">{LUMINESCENCE_DATASET_SUMMARY.powerEfficiencyCount}</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400">补充文献</div>
                <div className="text-white font-semibold">{SUPPLEMENTARY_LITERATURE_SUMMARY.totalRecords}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400">验证样本</div>
                <div className="text-white font-semibold">{MODEL_BENCHMARK_SUMMARY.totalRecords}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400">基线 MAE</div>
                <div className="text-white font-semibold">{MODEL_BENCHMARK_SUMMARY.meanAbsoluteErrorEV.toFixed(3)} eV</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-gray-400">{'|误差| <= 0.3'}</div>
                <div className="text-white font-semibold">{MODEL_BENCHMARK_SUMMARY.recordsWithinPoint3EV}</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400 leading-relaxed">
              当前预测页保留单材料推断交互；与论文目标直接相关的真实参考现阶段来自实验主表、补充文献库、pelED 发光数据以及 advanced ensemble 验证结果。
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              发光范围
            </h3>
            <div className="space-y-3 text-sm">
              {LUMINESCENCE_DATASET_SUMMARY.emissionColorBuckets.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-gray-300 capitalize">{item.label}</span>
                  <span className="text-white font-medium">{item.count}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 text-sm text-gray-400">
              发光峰位覆盖 {LUMINESCENCE_DATASET_SUMMARY.emissionRangeNm.min}-{LUMINESCENCE_DATASET_SUMMARY.emissionRangeNm.max} nm。
            </div>
          </div>
        </div>
      </div>

      <div className="toolbar-panel">
        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab('single')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'single' 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Brain className="w-4 h-4" />
            单一预测
          </button>
          <button
            onClick={() => setActiveTab('candidates')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'candidates' 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Database className="w-4 h-4" />
            候选队列
          </button>
          <button
            onClick={() => setActiveTab('validation')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
              activeTab === 'validation' 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            实验参考
          </button>
        </div>

        {activeTab === 'single' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  真实参考模板
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {validationReferences.map((material) => (
                    <button
                      key={material.key}
                      onClick={() => loadTemplate(material)}
                      className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 hover:scale-105 text-center group"
                    >
                      <div className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                        {material.name}
                      </div>
                      <div className="text-gray-400 text-xs mt-1">
                        {material.experimentalBandgapEV.toFixed(2)} eV
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6">材料组成与条件设置</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        A位阳离子 (A-site)
                      </label>
                      <select
                        {...register('A_site', { required: 'A位阳离子不能为空' })}
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                      >
                        <option value="">选择A位</option>
                        <option value="Cs">Cs (铯)</option>
                        <option value="MA">MA (甲胺)</option>
                        <option value="FA">FA (甲脒)</option>
                        <option value="K">K (钾)</option>
                        <option value="Rb">Rb (铷)</option>
                      </select>
                      {errors.A_site && (
                        <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.A_site.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        B位金属 (B-site)
                      </label>
                      <select
                        {...register('B_site', { required: 'B位金属不能为空' })}
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                      >
                        <option value="">选择B位</option>
                        <option value="Pb">Pb (铅)</option>
                        <option value="Sn">Sn (锡)</option>
                        <option value="Ge">Ge (锗)</option>
                        <option value="Ti">Ti (钛)</option>
                        <option value="Zr">Zr (锆)</option>
                      </select>
                      {errors.B_site && (
                        <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.B_site.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        X位卤素 (X-site)
                      </label>
                      <select
                        {...register('X_site', { required: 'X位卤素不能为空' })}
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                      >
                        <option value="">选择X位</option>
                        <option value="I">I (碘)</option>
                        <option value="Br">Br (溴)</option>
                        <option value="Cl">Cl (氯)</option>
                        <option value="F">F (氟)</option>
                      </select>
                      {errors.X_site && (
                        <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.X_site.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        温度 (K)
                      </label>
                      <input
                        type="number"
                        {...register('temperature', { 
                          required: '温度不能为空',
                          min: { value: 200, message: '温度不能低于200K' },
                          max: { value: 600, message: '温度不能高于600K' }
                        })}
                        placeholder="298"
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                      />
                      {errors.temperature && (
                        <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.temperature.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        压力 (atm)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        {...register('pressure', { 
                          required: '压力不能为空',
                          min: { value: 0.1, message: '压力不能低于0.1 atm' },
                          max: { value: 10, message: '压力不能高于10 atm' }
                        })}
                        placeholder="1.0"
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                      />
                      {errors.pressure && (
                        <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.pressure.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        湿度 (%)
                      </label>
                      <input
                        type="number"
                        {...register('humidity', { 
                          required: '湿度不能为空',
                          min: { value: 0, message: '湿度不能低于0%' },
                          max: { value: 100, message: '湿度不能高于100%' }
                        })}
                        placeholder="45"
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                      />
                      {errors.humidity && (
                        <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.humidity.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      结构文件 (可选)
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept=".cif,.xyz,.pdb,.mol,.json"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors"
                      >
                        <Upload className="w-4 h-4" />
                        选择文件
                      </button>
                      {uploadedFile && (
                        <div className="flex items-center gap-2 text-green-400">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">{uploadedFile.name}</span>
                        </div>
                      )}
                    </div>
                    <p className="mt-1 text-gray-400 text-xs">
                      支持格式: CIF, XYZ, PDB, MOL, JSON (最大10MB)
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2 relative z-10">
                        <Loader className="w-5 h-5 animate-spin" />
                        预测中...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2 relative z-10">
                        <Brain className="w-5 h-5" />
                        开始预测
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              {matchedReference && (
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Microscope className="w-5 h-5 text-cyan-400" />
                    对应实验参考
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Formula</span>
                      <span className="text-white">{matchedReference.referenceFormula}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Experimental Eg</span>
                      <span className="text-cyan-300">{matchedReference.experimentalBandgapEV.toFixed(2)} eV</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Method</span>
                      <span className="text-white text-right max-w-[60%]">{matchedReference.measurementMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Confidence</span>
                      <span className="text-emerald-300">{matchedReference.confidenceGrade}</span>
                    </div>
                  </div>
                </div>
              )}

              {results && (
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <Target className="w-5 h-5 text-green-400" />
                      预测结果
                    </h3>
                    <button
                      onClick={downloadResults}
                      className="flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      导出
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-gradient-to-r from-red-500/20 to-red-600/10 rounded-lg p-4 border border-red-500/30">
                        <div className="flex items-center justify-between">
                          <span className="text-red-300 flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            发光波长 (nm)
                          </span>
                          <span className="text-white font-bold text-xl">{results.emissionWavelength.toFixed(0)}</span>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 rounded-lg p-4 border border-blue-500/30">
                        <div className="flex items-center justify-between">
                          <span className="text-blue-300 flex items-center gap-2">
                            <Database className="w-4 h-4" />
                            PLQY (%)
                          </span>
                          <span className="text-white font-bold text-xl">{results.plqy.toFixed(1)}</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/20 to-green-600/10 rounded-lg p-4 border border-green-500/30">
                        <div className="flex items-center justify-between">
                          <span className="text-green-300 flex items-center gap-2">
                            <Activity className="w-4 h-4" />
                            稳定性
                          </span>
                          <span className="text-white font-bold text-xl">{results.stability.toFixed(0)}</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/10 rounded-lg p-4 border border-purple-500/30">
                        <div className="flex items-center justify-between">
                          <span className="text-purple-300 flex items-center gap-2">
                            <Flame className="w-4 h-4" />
                            带隙 (eV)
                          </span>
                          <span className="text-white font-bold text-xl">{results.bandgap.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/10 rounded-lg p-4 border border-orange-500/30">
                        <div className="flex items-center justify-between">
                          <span className="text-orange-300 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            效率 (%)
                          </span>
                          <span className="text-white font-bold text-xl">{results.efficiency.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Confidence */}
                    <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-medium">预测置信度</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-700 rounded-full h-3">
                          <div 
                            className="bg-green-500 h-3 rounded-full transition-all duration-500 relative overflow-hidden"
                            style={{ width: `${results.confidence * 100}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 animate-pulse"></div>
                          </div>
                        </div>
                        <span className="text-white font-bold">{(results.confidence * 100).toFixed(1)}%</span>
                      </div>
                    </div>

                    {/* Processing Time */}
                    <div className="text-center">
                      <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4" />
                        处理时间: {results.processingTime}ms
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-white font-medium mb-2">器件尺度说明</div>
                      <div className="text-sm text-gray-400 leading-relaxed">
                        当前结果中的发光波长、PLQY、稳定性和效率主要作为材料尺度到器件尺度之间的代理输出；若需要直接对照器件级指标，可优先参考已接入的 EQE、亮度、turn-on voltage、FWHM 和 power efficiency 样本。
                      </div>
                    </div>

                    {matchedReference && (
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300">与实验参考差值</span>
                          <span className="text-white font-semibold">
                            {(results.bandgap - matchedReference.experimentalBandgapEV).toFixed(2)} eV
                          </span>
                        </div>
                        <div className="chart-container h-48">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={referenceComparisonData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                              <XAxis dataKey="name" tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                              <YAxis tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                              <Tooltip
                                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                              />
                              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                                {referenceComparisonData.map((item) => (
                                  <Cell key={item.name} fill={item.color} />
                                ))}
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Prediction History */}
              {predictionHistory.length > 0 && (
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    预测历史
                  </h3>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {predictionHistory.map((entry) => (
                      <div key={entry.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">{entry.formula}</span>
                          <span className="text-gray-400 text-sm">
                            {entry.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="text-gray-300">
                            PLQY: <span className="text-white">{entry.results.plqy.toFixed(1)}%</span>
                          </div>
                          <div className="text-gray-300">
                            带隙: <span className="text-white">{entry.results.bandgap.toFixed(2)} eV</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'candidates' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-gray-400 text-sm">拯救候选</div>
                <div className="text-2xl font-bold text-emerald-300">{candidateStats.rescuedCount}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-gray-400 text-sm">Pred Eg {'>='} 2.5</div>
                <div className="text-2xl font-bold text-purple-300">{candidateStats.highGapCount}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-gray-400 text-sm">Std {'<='} 0.9</div>
                <div className="text-2xl font-bold text-blue-300">{candidateStats.lowStdCount}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-gray-400 text-sm">导出</div>
                <button onClick={exportCandidateQueue} className="mt-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
                  候选队列
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">优先候选表</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-2 text-gray-300">Formula</th>
                        <th className="text-center p-2 text-gray-300">Pred Eg</th>
                        <th className="text-center p-2 text-gray-300">Std</th>
                        <th className="text-center p-2 text-gray-300">Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidateQueue.map((item) => (
                        <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-2 text-white font-medium">{item.formula}</td>
                          <td className="p-2 text-center text-purple-300">{(item.predictedBandgapEV ?? 0).toFixed(2)}</td>
                          <td className="p-2 text-center text-blue-300">{(item.predictionStdEV ?? 0).toFixed(3)}</td>
                          <td className="p-2 text-center text-emerald-300">{item.score.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">候选组成</h3>
                <div className="chart-container h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: '高带隙候选', value: candidateStats.highGapCount, color: '#8b5cf6' },
                          { name: '低标准差候选', value: candidateStats.lowStdCount, color: '#3b82f6' },
                          {
                            name: '其他拯救候选',
                            value: Math.max(candidateStats.rescuedCount - candidateStats.highGapCount - candidateStats.lowStdCount, 0),
                            color: '#10b981',
                          },
                        ]}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                      >
                        {[
                          { name: '高带隙候选', value: candidateStats.highGapCount, color: '#8b5cf6' },
                          { name: '低标准差候选', value: candidateStats.lowStdCount, color: '#3b82f6' },
                          {
                            name: '其他拯救候选',
                            value: Math.max(candidateStats.rescuedCount - candidateStats.highGapCount - candidateStats.lowStdCount, 0),
                            color: '#10b981',
                          },
                        ].map((item) => (
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
          </div>
        )}

        {activeTab === 'validation' && (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                <Microscope className="w-5 h-5 text-cyan-400" />
                实验参考与验证样本
              </h3>
              <p className="text-gray-400">
                这里同时展示当前工作中的实验带隙参考样本与真实发光器件/材料样本，便于把论文目标能力和当前数据现状对应起来
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">实验参考表</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-2 text-gray-300">材料</th>
                        <th className="text-center p-2 text-gray-300">实验带隙</th>
                        <th className="text-center p-2 text-gray-300">方法</th>
                        <th className="text-center p-2 text-gray-300">等级</th>
                      </tr>
                    </thead>
                    <tbody>
                      {validationReferences.map((item) => (
                        <tr key={item.key} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-2 text-white font-medium">{item.referenceFormula}</td>
                          <td className="p-2 text-center text-green-300">{item.experimentalBandgapEV.toFixed(2)}</td>
                          <td className="p-2 text-center text-blue-300">{item.measurementMethod}</td>
                          <td className="p-2 text-center">
                            <span className="px-2 py-1 rounded-full text-xs bg-emerald-500/20 text-emerald-400">
                              {item.confidenceGrade}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">参考统计</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-400">{modelMetrics.validationCorpus}</p>
                      <p className="text-gray-400 text-sm">实验条目</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-400">{validationReferences.length}</p>
                      <p className="text-gray-400 text-sm">模板参考</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-400">{RESEARCH_DATASET_SUMMARY.alignedGroundTruthCount}</p>
                      <p className="text-gray-400 text-sm">Ground Truth</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-400">{candidateQueue.length}</p>
                      <p className="text-gray-400 text-sm">优先候选展示</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">近期高可信样本</h4>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {experimentalValidationSamples.map((record) => (
                    <div key={record.id} className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">{record.formula}</span>
                        <span className="text-emerald-300">{record.confidenceGrade}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {record.experimentalBandgapEV?.toFixed(2)} eV | {record.measurementMethod} | {record.year || 'N/A'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">高 EQE 发光样本</h4>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {TOP_EQE_SAMPLES.slice(0, 6).map((sample) => (
                      <div key={`${sample.doi}-${sample.emission_peak_nm}`} className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">{sample.emission_peak_nm?.toFixed(0)} nm</span>
                          <span className="text-purple-300">{sample.EQE_pct?.toFixed(2)}%</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {sample.journal} | {sample.pub_year || 'N/A'} | {sample.sample_type || 'N/A'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">高 PLQY 发光样本</h4>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {TOP_PLQY_SAMPLES.slice(0, 6).map((sample) => (
                      <div key={`${sample.doi}-${sample.emission_peak_nm}`} className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">{sample.emission_peak_nm?.toFixed(0)} nm</span>
                          <span className="text-cyan-300">{sample.PLQY_pct?.toFixed(1)}%</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {sample.journal} | {sample.pub_year || 'N/A'} | {sample.sample_type || 'N/A'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">器件级补充样本</h4>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {[...TOP_TURN_ON_VOLTAGE_SAMPLES, ...TOP_CURRENT_EFFICIENCY_SAMPLES, ...TOP_POWER_EFFICIENCY_SAMPLES, ...TOP_FWHM_SAMPLES]
                      .slice(0, 8)
                      .map((sample) => (
                        <div key={`${sample.id}-device`} className="bg-white/5 rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium">{sample.emission_peak_nm?.toFixed(0) || 'N/A'} nm</span>
                            <span className="text-amber-300">
                              {sample.turnOnVoltageV !== null
                                ? `${sample.turnOnVoltageV.toFixed(2)} V`
                                : sample.currentEfficiencyCdA !== null
                                  ? `${sample.currentEfficiencyCdA.toFixed(2)} cd/A`
                                  : sample.powerEfficiencyLmW !== null
                                    ? `${sample.powerEfficiencyLmW.toFixed(2)} lm/W`
                                    : sample.fwhmNm !== null
                                      ? `${sample.fwhmNm.toFixed(0)} nm FWHM`
                                      : 'N/A'}
                            </span>
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {sample.journal} | {sample.pub_year || 'N/A'} | {sample.sample_type || 'N/A'}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {results && (
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-400" />
            性能分析图表
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="chart-container h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'PLQY', value: results.plqy, color: '#3b82f6' },
                        { name: 'Loss', value: 100 - results.plqy, color: '#6b7280' },
                      ]}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                    >
                      <Cell fill="#3b82f6" />
                      <Cell fill="#6b7280" />
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div>
              <div className="chart-container h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={resultRadarLikeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', color: '#fff' }}
                    />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                      {resultRadarLikeData.map((item) => (
                        <Cell key={item.name} fill={item.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
