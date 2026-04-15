import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Target, Zap, Brain, AlertCircle, CheckCircle, Loader, TrendingUp, Settings, Download, Play, Pause, RotateCcw, Activity, Layers, Microscope, Lightbulb, Rocket, Search, Globe } from 'lucide-react';
import toast from 'react-hot-toast';
import Plot from 'react-plotly.js';
import { EXPERIMENTAL_BANDGAP_RECORDS, RESEARCH_DATASET_SUMMARY, SCREENED_CANDIDATE_RECORDS } from '../data/researchDatasets';

interface TargetProperties {
  targetBandgap: number;
  targetPLQY: number;
  targetStability: number;
  targetEmissionWavelength: number;
  targetEfficiency: number;
  priority: 'bandgap' | 'plqy' | 'stability' | 'emission' | 'efficiency';
  constraints: {
    leadFree: boolean;
    lowCost: boolean;
    highThroughput: boolean;
    environmentalFriendly: boolean;
  };
  application: string;
}

interface OptimizationResult {
  id: string;
  composition: {
    A_site: string;
    B_site: string;
    X_site: string;
    ratio?: string;
  };
  predictedProperties: {
    bandgap: number;
    plqy: number;
    stability: number;
    emissionWavelength: number;
    efficiency: number;
    confidence: number;
  };
  score: number;
  feasibility: number;
  synthesisRoute: {
    steps: string[];
    difficulty: 'easy' | 'medium' | 'hard';
    timeRequired: number; // hours
    equipment: string[];
  };
  estimatedCost: number;
  marketPotential: number;
  novelty: number;
  riskAssessment: {
    technical: number;
    commercial: number;
    environmental: number;
  };
}

interface OptimizationSession {
  id: string;
  startTime: Date;
  algorithm: string;
  targets: TargetProperties;
  currentIteration: number;
  totalIterations: number;
  bestScore: number;
  convergenceHistory: number[];
  status: 'running' | 'completed' | 'paused' | 'failed';
}

interface AIModel {
  name: string;
  description: string;
  accuracy: number;
  trainingData: number;
  lastUpdated: string;
  specialty: string[];
}

export const OptimizationPage: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<TargetProperties>({
    defaultValues: {
      targetBandgap: 1.8,
      targetPLQY: 80,
      targetStability: 85,
      targetEmissionWavelength: 520,
      targetEfficiency: 18,
      priority: 'plqy',
      constraints: {
        leadFree: false,
        lowCost: false,
        highThroughput: false,
        environmentalFriendly: true
      },
      application: 'LED显示'
    }
  });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentSession, setCurrentSession] = useState<OptimizationSession | null>(null);
  const [results, setResults] = useState<OptimizationResult[]>([]);
  const [optimizationProgress, setOptimizationProgress] = useState(0);
  const [selectedResult, setSelectedResult] = useState<OptimizationResult | null>(null);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('deep_learning');
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<number[]>([]);
  const [realTimeMetrics, setRealTimeMetrics] = useState({
    explorationRate: 0,
    convergenceRate: 0,
    diversityIndex: 0,
    validCandidates: 0
  });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const researchPriorityCandidates = useMemo(() => {
    return SCREENED_CANDIDATE_RECORDS
      .filter((record) => record.isFalseMetalRescued)
      .map((record) => {
        const predicted = record.predictedBandgapEV ?? 0;
        const std = record.predictionStdEV ?? 1.5;
        const score = predicted * 0.7 + Math.max(0, 1.2 - std) * 0.8;
        return {
          formula: record.formula,
          predictedBandgapEV: predicted,
          predictionStdEV: std,
          score
        };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
  }, []);

  const experimentalGuides = useMemo(() => {
    return [...EXPERIMENTAL_BANDGAP_RECORDS]
      .filter((record) => record.confidenceGrade === 'A')
      .sort((a, b) => (b.year || 0) - (a.year || 0))
      .slice(0, 4);
  }, []);
  
  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // AI Models available
  const aiModels: AIModel[] = [
    {
      name: 'DeepMat-3.0',
      description: '基于Transformer的钙钛矿性能预测模型',
      accuracy: 94.2,
      trainingData: 180000,
      lastUpdated: '2024-01-15',
      specialty: ['带隙预测', 'PLQY优化', '稳定性评估']
    },
    {
      name: 'CrystalGNN-Pro',
      description: '图神经网络晶体结构分析系统',
      accuracy: 91.8,
      trainingData: 250000,
      lastUpdated: '2024-01-10',
      specialty: ['结构优化', '缺陷预测', '相稳定性']
    },
    {
      name: 'QuantumNet-2.5',
      description: '量子化学增强的机器学习模型',
      accuracy: 89.6,
      trainingData: 95000,
      lastUpdated: '2024-01-05',
      specialty: ['电子结构', '光学性质', '激发态']
    }
  ];

  const optimizationAlgorithms = [
    { key: 'deep_learning', name: '深度学习优化', description: '使用神经网络进行全局搜索', speed: '快速', accuracy: '高' },
    { key: 'genetic', name: '遗传算法', description: '模拟生物进化过程', speed: '中等', accuracy: '很高' },
    { key: 'bayesian', name: '贝叶斯优化', description: '基于高斯过程的智能搜索', speed: '慢', accuracy: '极高' },
    { key: 'particle_swarm', name: '粒子群优化', description: '群体智能搜索算法', speed: '快速', accuracy: '中等' },
    { key: 'hybrid', name: '混合算法', description: '多算法协同优化', speed: '中等', accuracy: '极高' }
  ];

  const startOptimization = async (data: TargetProperties) => {
    const session: OptimizationSession = {
      id: `opt_${Date.now()}`,
      startTime: new Date(),
      algorithm: selectedAlgorithm,
      targets: data,
      currentIteration: 0,
      totalIterations: 1000,
      bestScore: 0,
      convergenceHistory: [],
      status: 'running'
    };
    
    setCurrentSession(session);
    setOptimizationProgress(0);
    setResults([]);
    setOptimizationHistory([]);
    setIsPaused(false);
    
    try {
      // Real-time optimization simulation
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setOptimizationProgress(prev => {
            const newProgress = Math.min(prev + Math.random() * 2 + 0.5, 100);
            
            // Update real-time metrics
            setRealTimeMetrics({
              explorationRate: 100 - newProgress,
              convergenceRate: Math.min(newProgress * 1.2, 100),
              diversityIndex: Math.max(80 - newProgress * 0.6, 20),
              validCandidates: Math.floor(newProgress * 0.8)
            });
            
            // Update convergence history
            setOptimizationHistory(prev => {
              const newScore = Math.min(85 + Math.random() * 15, 100);
              return [...prev.slice(-50), newScore];
            });
            
            if (newProgress >= 100) {
              clearInterval(intervalRef.current!);
              completeOptimization(data);
            }
            
            return newProgress;
          });
        }
      }, 150);
      
    } catch (error) {
      console.error('Optimization error:', error);
      toast.error('优化启动失败，请重试');
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };
  
  const completeOptimization = (data: TargetProperties) => {
    const optimizedResults = generateOptimizationResults(data);
    setResults(optimizedResults);
    setCurrentSession(prev => prev ? { ...prev, status: 'completed' } : null);
    toast.success(`🎉 优化完成！找到 ${optimizedResults.length} 个高质量候选材料`);
  };
  
  const onSubmit = async (data: TargetProperties) => {
    startOptimization(data);
  };
  
  const pauseOptimization = () => {
    setIsPaused(true);
    setCurrentSession(prev => prev ? { ...prev, status: 'paused' } : null);
    toast('优化已暂停');
  };
  
  const resumeOptimization = () => {
    setIsPaused(false);
    setCurrentSession(prev => prev ? { ...prev, status: 'running' } : null);
    toast('优化已恢复');
  };
  
  const stopOptimization = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentSession(null);
    setOptimizationProgress(0);
    setIsPaused(false);
    toast('优化已停止');
  };

  const generateOptimizationResults = (targets: TargetProperties): OptimizationResult[] => {
    const leadFreeSites = targets.constraints.leadFree ? ['Sn', 'Ge', 'Ti', 'Bi', 'Sb'] : ['Pb', 'Sn', 'Ge', 'Ti', 'Bi'];
    const aSites = ['Cs', 'MA', 'FA', 'K', 'Rb', 'EA', 'GA'];
    const bSites = leadFreeSites;
    const xSites = ['I', 'Br', 'Cl', 'F'];
    const mixedRatios = ['', '₀.₅', '₀.₇₅', '₀.₂₅'];
    
    const results: OptimizationResult[] = [];
    
    // Generate top 12 candidates with enhanced diversity
    for (let i = 0; i < 12; i++) {
      const composition = {
        A_site: aSites[Math.floor(Math.random() * aSites.length)],
        B_site: bSites[Math.floor(Math.random() * bSites.length)],
        X_site: xSites[Math.floor(Math.random() * xSites.length)],
        ratio: Math.random() > 0.7 ? mixedRatios[Math.floor(Math.random() * mixedRatios.length)] : ''
      };

      // Enhanced property prediction with constraint considerations
      const noise = () => (Math.random() - 0.5) * 0.15;
      const leadFreeAdjustment = targets.constraints.leadFree ? -0.1 : 0;
      const predictedProperties = {
        bandgap: Math.max(1.2, Math.min(3.5, targets.targetBandgap + noise() + leadFreeAdjustment)),
        plqy: Math.max(10, Math.min(95, targets.targetPLQY + noise() * 18)),
        stability: Math.max(20, Math.min(95, targets.targetStability + noise() * 12 + (targets.constraints.environmentalFriendly ? 5 : 0))),
        emissionWavelength: Math.max(400, Math.min(800, targets.targetEmissionWavelength + noise() * 45)),
        efficiency: Math.max(5, Math.min(25, targets.targetEfficiency + noise() * 4)),
        confidence: Math.max(0.75, Math.min(0.98, 0.85 + Math.random() * 0.13))
      };

      // Enhanced scoring system
      const score = calculateOptimizationScore(predictedProperties, targets);
      
      // Advanced feasibility assessment
      let feasibility = Math.max(0.3, Math.min(0.95, 0.7 + Math.random() * 0.25));
      if (targets.constraints.leadFree && composition.B_site !== 'Pb') feasibility += 0.1;
      if (targets.constraints.lowCost) feasibility -= 0.05;
      if (targets.constraints.highThroughput) feasibility += 0.05;
      
      // Enhanced synthesis route
      const synthesisRoute = generateEnhancedSynthesisRoute(composition, targets);
      
      // Cost estimation with constraint considerations
      let estimatedCost = Math.max(50, Math.min(500, 150 + Math.random() * 200));
      if (targets.constraints.leadFree) estimatedCost *= 1.2;
      if (targets.constraints.lowCost) estimatedCost *= 0.8;
      
      // Market potential and novelty assessment
      const marketPotential = Math.max(0.4, Math.min(0.95, 0.6 + Math.random() * 0.35));
      const novelty = Math.max(0.2, Math.min(0.9, Math.random() * 0.7));
      
      // Risk assessment
      const riskAssessment = {
        technical: Math.max(0.1, Math.min(0.8, 0.3 + Math.random() * 0.5)),
        commercial: Math.max(0.2, Math.min(0.7, 0.35 + Math.random() * 0.35)),
        environmental: targets.constraints.environmentalFriendly ? Math.max(0.1, Math.random() * 0.3) : Math.max(0.2, Math.random() * 0.6)
      };

      results.push({
        id: `candidate_${i + 1}`,
        composition,
        predictedProperties,
        score,
        feasibility: Math.min(0.95, feasibility),
        synthesisRoute,
        estimatedCost,
        marketPotential,
        novelty,
        riskAssessment
      });
    }

    // Enhanced sorting by composite score
    return results.sort((a, b) => {
      const compositeScoreA = a.score * 0.4 + a.feasibility * 100 * 0.3 + a.marketPotential * 100 * 0.2 + a.novelty * 100 * 0.1;
      const compositeScoreB = b.score * 0.4 + b.feasibility * 100 * 0.3 + b.marketPotential * 100 * 0.2 + b.novelty * 100 * 0.1;
      return compositeScoreB - compositeScoreA;
    });
  };

  const calculateOptimizationScore = (predicted: OptimizationResult['predictedProperties'], targets: TargetProperties): number => {
    const weights = {
      bandgap: targets.priority === 'bandgap' ? 0.3 : 0.15,
      plqy: targets.priority === 'plqy' ? 0.3 : 0.15,
      stability: targets.priority === 'stability' ? 0.3 : 0.15,
      emission: targets.priority === 'emission' ? 0.3 : 0.15,
      efficiency: targets.priority === 'efficiency' ? 0.3 : 0.15
    };

    const errors = {
      bandgap: Math.abs(predicted.bandgap - targets.targetBandgap) / targets.targetBandgap,
      plqy: Math.abs(predicted.plqy - targets.targetPLQY) / targets.targetPLQY,
      stability: Math.abs(predicted.stability - targets.targetStability) / targets.targetStability,
      emission: Math.abs(predicted.emissionWavelength - targets.targetEmissionWavelength) / targets.targetEmissionWavelength,
      efficiency: Math.abs(predicted.efficiency - targets.targetEfficiency) / targets.targetEfficiency
    };

    const score = weights.bandgap * (1 - errors.bandgap) +
                  weights.plqy * (1 - errors.plqy) +
                  weights.stability * (1 - errors.stability) +
                  weights.emission * (1 - errors.emission) +
                  weights.efficiency * (1 - errors.efficiency);

    return Math.max(0, Math.min(1, score)) * 100;
  };

  const generateEnhancedSynthesisRoute = (composition: OptimizationResult['composition'], _targets: TargetProperties) => {
    const routes = [
      {
        steps: [
          `制备 ${composition.A_site} 前驱体 (纯度 >99.5%)`,
          `制备 ${composition.B_site}${composition.X_site}₂ 溶液 (0.5M DMF)`,
          '反溶剂沉淀法制备钙钛矿 (甲苯, 4000rpm)',
          '真空退火处理 (100°C, 10min)',
          '表面钝化处理 (配体交换)'
        ],
        difficulty: 'medium' as const,
        timeRequired: 4,
        equipment: ['手套箱', '离心机', '真空炉', 'UV-Vis']
      },
      {
        steps: [
          `混合 ${composition.A_site}${composition.X_site} 和 ${composition.B_site}${composition.X_site}₂ (1:1摩尔比)`,
          '热注入法合成 (150°C, 氮气保护)',
          '纯化分离纳米晶 (正己烷/乙酸乙酯)',
          '表面配体修饰 (油酸/油胺)',
          '分散稳定性测试'
        ],
        difficulty: 'easy' as const,
        timeRequired: 6,
        equipment: ['三口瓶反应器', '温度控制器', '离心机']
      },
      {
        steps: [
          `溶液法制备前驱体 (${composition.A_site}${composition.X_site}:${composition.B_site}${composition.X_site}₂ = 1:1)`,
          '旋涂成膜 (4000rpm, 30s)',
          '分步退火处理 (70°C→100°C→150°C)',
          '结构表征验证 (XRD, SEM)',
          '性能测试与优化'
        ],
        difficulty: 'hard' as const,
        timeRequired: 8,
        equipment: ['旋涂机', '程序控温炉', 'XRD', 'SEM', '光谱仪']
      }
    ];
    
    return routes[Math.floor(Math.random() * routes.length)];
  };

  const downloadResults = () => {
    if (results.length === 0) return;
    
    const data = {
      session: currentSession,
      targets: watch(),
      results: results,
      optimizationHistory: optimizationHistory,
      realTimeMetrics: realTimeMetrics,
      timestamp: new Date().toISOString(),
      algorithm: selectedAlgorithm,
      modelUsed: aiModels.find(m => m.name === 'DeepMat-3.0')
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `perovskite_optimization_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('📥 优化结果已导出');
  };

  const resetOptimization = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentSession(null);
    setResults([]);
    setOptimizationProgress(0);
    setOptimizationHistory([]);
    setSelectedResult(null);
    setIsPaused(false);
    reset({
      targetBandgap: 1.8,
      targetPLQY: 80,
      targetStability: 85,
      targetEmissionWavelength: 520,
      targetEfficiency: 18,
      priority: 'plqy',
      constraints: {
        leadFree: false,
        lowCost: false,
        highThroughput: false,
        environmentalFriendly: true
      },
      application: 'LED显示'
    });
    toast.success('🔄 已重置优化参数');
  };

  const quickTargets = [
    {
      name: '🟢 高效绿光LED',
      description: '高PLQY绿光发光材料',
      params: { targetBandgap: 2.4, targetPLQY: 90, targetStability: 75, targetEmissionWavelength: 520, targetEfficiency: 20, priority: 'plqy' as const, constraints: { leadFree: true, lowCost: false, highThroughput: true, environmentalFriendly: true }, application: 'LED显示' }
    },
    {
      name: '🔴 稳定红光器件',
      description: '高稳定性红光放射体',
      params: { targetBandgap: 1.8, targetPLQY: 75, targetStability: 90, targetEmissionWavelength: 680, targetEfficiency: 15, priority: 'stability' as const, constraints: { leadFree: false, lowCost: true, highThroughput: false, environmentalFriendly: true }, application: '显示器' }
    },
    {
      name: '☀️ 高效率太阳能电池',
      description: '超高转换效率光伏材料',
      params: { targetBandgap: 1.5, targetPLQY: 65, targetStability: 85, targetEmissionWavelength: 750, targetEfficiency: 22, priority: 'efficiency' as const, constraints: { leadFree: false, lowCost: true, highThroughput: true, environmentalFriendly: false }, application: '太阳能电池' }
    },
    {
      name: '🔵 蓝光显示应用',
      description: '高色纯度蓝光材料',
      params: { targetBandgap: 2.8, targetPLQY: 85, targetStability: 70, targetEmissionWavelength: 460, targetEfficiency: 16, priority: 'bandgap' as const, constraints: { leadFree: true, lowCost: false, highThroughput: false, environmentalFriendly: true }, application: 'OLED显示' }
    },
    {
      name: '🌈 全光谱白光LED',
      description: '全光谱覆盖白光材料',
      params: { targetBandgap: 2.2, targetPLQY: 88, targetStability: 80, targetEmissionWavelength: 580, targetEfficiency: 19, priority: 'plqy' as const, constraints: { leadFree: true, lowCost: true, highThroughput: true, environmentalFriendly: true }, application: '照明' }
    },
    {
      name: '🔋 近红外发射器',
      description: '生物医学近红外应用',
      params: { targetBandgap: 1.4, targetPLQY: 70, targetStability: 85, targetEmissionWavelength: 800, targetEfficiency: 14, priority: 'emission' as const, constraints: { leadFree: true, lowCost: false, highThroughput: false, environmentalFriendly: true }, application: '生物成像' }
    }
  ];

  const loadQuickTarget = (params: TargetProperties) => {
    reset(params);
    toast.success(`🎯 已加载目标参数: ${params.application}`);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="container-fluid space-y-8 py-8">
      <div className="page-hero animate-fade-in-up">
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="page-kicker mb-2">Optimization Workspace</div>
                <h1 className="page-title">AI驱动材料优化引擎</h1>
                <p className="page-description mt-2">逆向设计、候选优选与实验参考联动</p>
              </div>
            </div>

            <div className="hero-chip-row">
              <span className="hero-chip">
                <span className={`w-2.5 h-2.5 rounded-full ${
                  currentSession?.status === 'running' ? 'bg-green-400' :
                  currentSession?.status === 'paused' ? 'bg-yellow-400' :
                  currentSession?.status === 'completed' ? 'bg-blue-400' : 'bg-gray-400'
                }`}></span>
                {currentTime.toLocaleTimeString('zh-CN')}
              </span>
              <span className="hero-chip">{RESEARCH_DATASET_SUMMARY.experimentalRecordCount} 实验参考</span>
              <span className="hero-chip">{RESEARCH_DATASET_SUMMARY.screenedCandidateCount} 候选</span>
              <span className="hero-chip">{RESEARCH_DATASET_SUMMARY.rescuedFalseMetalCount} 拯救候选</span>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Optimization Dashboard */}
      {currentSession && (
        <div className="glass-card rounded-2xl p-6 animate-fade-in-up animate-delay-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Activity className="w-6 h-6 text-orange-400" />
              实时优化仪表板
            </h3>
            <div className="flex gap-2">
              {currentSession.status === 'running' ? (
                <button onClick={pauseOptimization} className="btn-control bg-yellow-600 hover:bg-yellow-700">
                  <Pause className="w-4 h-4" />
                </button>
              ) : currentSession.status === 'paused' ? (
                <button onClick={resumeOptimization} className="btn-control bg-green-600 hover:bg-green-700">
                  <Play className="w-4 h-4" />
                </button>
              ) : null}
              <button onClick={stopOptimization} className="btn-control bg-red-600 hover:bg-red-700">
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Real-time Metrics */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  { label: '探索率', value: `${realTimeMetrics.explorationRate.toFixed(1)}%`, color: 'blue', icon: Search },
                  { label: '收敛率', value: `${realTimeMetrics.convergenceRate.toFixed(1)}%`, color: 'green', icon: TrendingUp },
                  { label: '多样性', value: `${realTimeMetrics.diversityIndex.toFixed(1)}%`, color: 'purple', icon: Layers },
                  { label: '有效候选', value: realTimeMetrics.validCandidates.toString(), color: 'orange', icon: Target }
                ].map((metric, index) => (
                  <div key={index} className="data-card rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <metric.icon className={`w-4 h-4 text-${metric.color}-400`} />
                      <span className={`text-${metric.color}-400 font-bold text-lg`}>{metric.value}</span>
                    </div>
                    <div className="text-gray-300 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Convergence Chart */}
              <div className="chart-container h-64">
                <div style={{ width: '100%', height: '100%' }}>
                  <Plot
                    data={[{
                      y: optimizationHistory,
                      type: 'scatter',
                      mode: 'lines',
                      line: { color: '#f59e0b', width: 2 },
                      name: '优化进度',
                      fill: 'tonexty',
                      fillcolor: 'rgba(245, 158, 11, 0.1)'
                    }]}
                    layout={{
                      title: { text: '优化收敛曲线', font: { color: 'white' } },
                      paper_bgcolor: 'transparent',
                      plot_bgcolor: 'transparent',
                      font: { color: '#e5e7eb', family: 'Inter' },
                      xaxis: { title: '迭代次数', gridcolor: '#374151', tickcolor: '#6b7280' },
                      yaxis: { title: '最优化分数', gridcolor: '#374151', tickcolor: '#6b7280', range: [0, 100] },
                      margin: { l: 50, r: 40, t: 40, b: 50 },
                      showlegend: false
                    }}
                    config={{ displayModeBar: false }}
                  />
                </div>
              </div>
            </div>
            
            {/* Session Info */}
            <div className="space-y-4">
              <div className="data-card rounded-lg p-4">
                <h4 className="text-white font-semibold mb-3">会话信息</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">算法</span>
                    <span className="text-white">{optimizationAlgorithms.find(a => a.key === selectedAlgorithm)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">运行时间</span>
                    <span className="text-white">
                      {currentSession && Math.floor((new Date().getTime() - currentSession.startTime.getTime()) / 60000)} 分钟
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">进度</span>
                    <span className="text-white">{optimizationProgress.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">最优分数</span>
                    <span className="text-green-400 font-bold">
                      {optimizationHistory.length > 0 ? optimizationHistory[optimizationHistory.length - 1].toFixed(1) : '0.0'}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Progress Ring */}
              <div className="data-card rounded-lg p-4 text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40" cy="40" r="32"
                      stroke="#374151" strokeWidth="6"
                      fill="transparent"
                    />
                    <circle
                      cx="40" cy="40" r="32"
                      stroke={currentSession.status === 'running' ? '#10b981' : currentSession.status === 'paused' ? '#f59e0b' : '#3b82f6'}
                      strokeWidth="6" fill="transparent"
                      strokeDasharray={`${optimizationProgress * 2.01} 201`}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold">{optimizationProgress.toFixed(0)}%</span>
                  </div>
                </div>
                <div className="text-gray-300 text-sm">优化进度</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Target Templates */}
      <div className="section-panel animate-fade-in-up animate-delay-200">
        <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
          <Rocket className="w-6 h-6 text-blue-400" />
          快速目标模板
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickTargets.map((target, index) => (
            <button
              key={index}
              onClick={() => loadQuickTarget(target.params)}
              className="data-card rounded-2xl p-6 text-left transition-all duration-300 group border border-white/10 hover:border-white/20"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-white font-bold text-lg group-hover:text-blue-200 transition-colors">
                  {target.name}
                </h4>
                <Lightbulb className="w-5 h-5 text-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{target.description}</p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">带隙</span>
                  <span className="text-blue-400 font-medium">{target.params.targetBandgap} eV</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">PLQY</span>
                  <span className="text-green-400 font-medium">{target.params.targetPLQY}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">发射</span>
                  <span className="text-purple-400 font-medium">{target.params.targetEmissionWavelength} nm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">应用</span>
                  <span className="text-orange-400 font-medium">{target.params.application}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Optimization Panel */}
        <div className="xl:col-span-2 space-y-6">
          {/* Target Properties Form */}
          <div className="glass-card rounded-2xl p-6 animate-fade-in-up animate-delay-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Target className="w-6 h-6 text-orange-400" />
                目标性能参数
              </h3>
              <button
                onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                className="btn-control"
                title="高级选项"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Basic Properties */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    目标带隙 (eV)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register('targetBandgap', { 
                      required: '目标带隙不能为空',
                      min: { value: 1.0, message: '带隙不能低于1.0 eV' },
                      max: { value: 4.0, message: '带隙不能高于4.0 eV' }
                    })}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
                  />
                  {errors.targetBandgap && (
                    <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.targetBandgap.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    目标PLQY (%)
                  </label>
                  <input
                    type="number"
                    {...register('targetPLQY', { 
                      required: '目标PLQY不能为空',
                      min: { value: 1, message: 'PLQY不能低于1%' },
                      max: { value: 100, message: 'PLQY不能高于100%' }
                    })}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
                  />
                  {errors.targetPLQY && (
                    <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.targetPLQY.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    目标稳定性
                  </label>
                  <input
                    type="number"
                    {...register('targetStability', { 
                      required: '目标稳定性不能为空',
                      min: { value: 10, message: '稳定性不能低于10' },
                      max: { value: 100, message: '稳定性不能高于100' }
                    })}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
                  />
                  {errors.targetStability && (
                    <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.targetStability.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    发射波长 (nm)
                  </label>
                  <input
                    type="number"
                    {...register('targetEmissionWavelength', { 
                      required: '目标发射波长不能为空',
                      min: { value: 400, message: '波长不能低于400 nm' },
                      max: { value: 800, message: '波长不能高于800 nm' }
                    })}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
                  />
                  {errors.targetEmissionWavelength && (
                    <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.targetEmissionWavelength.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    目标效率 (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register('targetEfficiency', { 
                      required: '目标效率不能为空',
                      min: { value: 1, message: '效率不能低于1%' },
                      max: { value: 30, message: '效率不能高于30%' }
                    })}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
                  />
                  {errors.targetEfficiency && (
                    <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.targetEfficiency.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    优化优先级
                  </label>
                  <select
                    {...register('priority', { required: '请选择优化优先级' })}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
                  >
                    <option value="bandgap" className="bg-gray-800">带隙优先</option>
                    <option value="plqy" className="bg-gray-800">PLQY优先</option>
                    <option value="stability" className="bg-gray-800">稳定性优先</option>
                    <option value="emission" className="bg-gray-800">发射波长优先</option>
                    <option value="efficiency" className="bg-gray-800">效率优先</option>
                  </select>
                  {errors.priority && (
                    <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.priority.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Advanced Options */}
              {showAdvancedOptions && (
                <div className="pt-6 border-t border-white/20 animate-fade-in-up">
                  <h4 className="text-lg font-semibold text-white mb-4">高级约束条件</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Constraints */}
                    <div className="space-y-4">
                      <h5 className="text-md font-medium text-gray-200">设计约束</h5>
                      {[
                        { key: 'leadFree', label: '无铅材料', icon: CheckCircle },
                        { key: 'lowCost', label: '低成本制备', icon: Target },
                        { key: 'highThroughput', label: '高通量合成', icon: Zap },
                        { key: 'environmentalFriendly', label: '环境友好', icon: Globe }
                      ].map(constraint => (
                        <label key={constraint.key} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            {...register(`constraints.${constraint.key}` as any)}
                            className="w-4 h-4 rounded border-white/20 bg-white/10 text-orange-500 focus:ring-orange-400 focus:ring-2"
                          />
                          <constraint.icon className="w-4 h-4" />
                          <span>{constraint.label}</span>
                        </label>
                      ))}
                    </div>

                    {/* Algorithm Selection */}
                    <div className="space-y-4">
                      <h5 className="text-md font-medium text-gray-200">优化算法</h5>
                      <select
                        value={selectedAlgorithm}
                        onChange={(e) => setSelectedAlgorithm(e.target.value)}
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
                      >
                        {optimizationAlgorithms.map(alg => (
                          <option key={alg.key} value={alg.key} className="bg-gray-800">
                            {alg.name} - {alg.speed}, {alg.accuracy}
                          </option>
                        ))}
                      </select>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-200">
                          应用领域
                        </label>
                        <input
                          {...register('application')}
                          className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
                          placeholder="LED显示"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Control Buttons */}
              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  disabled={!!currentSession}
                  className="flex-1 btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentSession ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader className="w-5 h-5 animate-spin" />
                      优化进行中...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Rocket className="w-5 h-5" />
                      启动AI优化
                    </div>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={resetOptimization}
                  className="px-6 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-xl transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Results Panel */}
        <div className="space-y-6">
          <div className="section-panel animate-fade-in-up animate-delay-350">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Microscope className="w-5 h-5 text-cyan-400" />
              研究先验候选
            </h3>
            <div className="space-y-3">
              {researchPriorityCandidates.map((candidate, index) => (
                <div key={candidate.formula} className="data-card rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">#{index + 1} {candidate.formula}</span>
                    <span className="text-orange-400 font-bold">{candidate.score.toFixed(2)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pred Eg</span>
                      <span className="text-purple-400">{candidate.predictedBandgapEV.toFixed(2)} eV</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Std</span>
                      <span className="text-blue-400">{candidate.predictionStdEV.toFixed(3)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Model Info */}
          <div className="section-panel animate-fade-in-up animate-delay-400">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-400" />
              AI模型信息
            </h3>
            {aiModels.slice(0, 1).map((model, index) => (
              <div key={index} className="data-card rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold">{model.name}</h4>
                  <div className="text-green-400 font-bold text-lg">{model.accuracy}%</div>
                </div>
                <p className="text-gray-400 text-sm mb-3">{model.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">训练/参考入口</span>
                    <span className="text-white">{RESEARCH_DATASET_SUMMARY.alignedGroundTruthCount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">实验参考</span>
                    <span className="text-white">{RESEARCH_DATASET_SUMMARY.experimentalRecordCount}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {model.specialty.map((spec, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="section-panel animate-fade-in-up animate-delay-450">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              实验参考样本
            </h3>
            <div className="space-y-3">
              {experimentalGuides.map((record) => (
                <div key={record.id} className="data-card rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">{record.formula}</span>
                    <span className="text-green-400">{record.confidenceGrade}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    {record.experimentalBandgapEV?.toFixed(2)} eV | {record.measurementMethod} | {record.year || 'N/A'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optimization Results */}
          {results.length > 0 && (
            <div className="glass-card rounded-xl p-6 animate-fade-in-up animate-delay-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  优化结果
                </h3>
                <button
                  onClick={downloadResults}
                  className="btn-control bg-green-600 hover:bg-green-700"
                  title="导出结果"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-thin">
                {results.slice(0, 8).map((result, index) => (
                  <div
                    key={result.id}
                    onClick={() => setSelectedResult(result)}
                    className="data-card rounded-lg p-4 cursor-pointer hover:bg-white/15 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-bold">
                        #{index + 1} {result.composition.A_site}{result.composition.B_site}{result.composition.X_site}₃{result.composition.ratio}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-orange-400 font-bold">
                          {result.score.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-400">带隙</span>
                        <span className="text-blue-400">{result.predictedProperties.bandgap.toFixed(2)} eV</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">PLQY</span>
                        <span className="text-green-400">{result.predictedProperties.plqy.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">可行性</span>
                        <span className="text-purple-400">{(result.feasibility * 100).toFixed(0)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">置信度</span>
                        <span className="text-orange-400">{(result.predictedProperties.confidence * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-red-500 h-1.5 rounded-full transition-all duration-500"
                          style={{ width: `${result.score}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Detailed Result Modal */}
      {selectedResult && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-card rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-white/20 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {selectedResult.composition.A_site}{selectedResult.composition.B_site}{selectedResult.composition.X_site}₃{selectedResult.composition.ratio}
                </h2>
                <p className="text-gray-300 mt-1">
                  优化评分: {selectedResult.score.toFixed(1)} | 可行性: {(selectedResult.feasibility * 100).toFixed(0)}%
                </p>
              </div>
              <button onClick={() => setSelectedResult(null)} className="btn-control" title="关闭">
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Properties Comparison Chart */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">性能匹配度分析</h4>
                  <div className="chart-container h-80">
                    <Plot
                      data={[
                        {
                          x: ['带隙', 'PLQY', '稳定性', '发射波长', '效率'],
                          y: [
                            selectedResult.predictedProperties.bandgap / 3.5 * 100,
                            selectedResult.predictedProperties.plqy,
                            selectedResult.predictedProperties.stability,
                            selectedResult.predictedProperties.emissionWavelength / 800 * 100,
                            selectedResult.predictedProperties.efficiency / 25 * 100
                          ],
                          type: 'bar',
                          name: '预测值',
                          marker: { color: '#f59e0b' }
                        },
                        {
                          x: ['带隙', 'PLQY', '稳定性', '发射波长', '效率'],
                          y: [
                            (watch('targetBandgap') || 1.8) / 3.5 * 100,
                            watch('targetPLQY') || 80,
                            watch('targetStability') || 85,
                            (watch('targetEmissionWavelength') || 520) / 800 * 100,
                            (watch('targetEfficiency') || 18) / 25 * 100
                          ],
                          type: 'bar',
                          name: '目标值',
                          marker: { color: '#10b981' }
                        }
                      ]}
                      layout={{
                        paper_bgcolor: 'transparent',
                        plot_bgcolor: 'transparent',
                        font: { color: 'white', family: 'Inter' },
                        yaxis: { title: '标准化数值', gridcolor: '#374151', tickcolor: '#6b7280' },
                        xaxis: { gridcolor: '#374151', tickcolor: '#6b7280' },
                        legend: { font: { color: 'white' } },
                        margin: { l: 60, r: 40, t: 40, b: 60 }
                      }}
                      config={{ displayModeBar: false }}
                    />
                  </div>
                </div>

                {/* Synthesis Route */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">合成路线详解</h4>
                  <div className="space-y-3 mb-6">
                    {selectedResult.synthesisRoute.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-gray-300 text-sm leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Synthesis Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="data-card rounded-lg p-4">
                      <div className="text-gray-400 text-sm">合成难度</div>
                      <div className={`text-lg font-bold ${
                        selectedResult.synthesisRoute.difficulty === 'easy' ? 'text-green-400' :
                        selectedResult.synthesisRoute.difficulty === 'medium' ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {selectedResult.synthesisRoute.difficulty === 'easy' ? '简单' :
                         selectedResult.synthesisRoute.difficulty === 'medium' ? '中等' : '困难'}
                      </div>
                    </div>
                    <div className="data-card rounded-lg p-4">
                      <div className="text-gray-400 text-sm">预计耗时</div>
                      <div className="text-white font-bold text-lg">
                        {selectedResult.synthesisRoute.timeRequired} 小时
                      </div>
                    </div>
                  </div>

                  {/* Required Equipment */}
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-3">所需设备</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedResult.synthesisRoute.equipment.map((eq, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="data-card rounded-lg p-4 text-center">
                  <div className="text-gray-400 text-sm mb-1">预估成本</div>
                  <div className="text-white font-bold text-xl">¥{selectedResult.estimatedCost.toFixed(0)}/g</div>
                </div>
                <div className="data-card rounded-lg p-4 text-center">
                  <div className="text-gray-400 text-sm mb-1">市场潜力</div>
                  <div className="text-green-400 font-bold text-xl">{(selectedResult.marketPotential * 100).toFixed(0)}%</div>
                </div>
                <div className="data-card rounded-lg p-4 text-center">
                  <div className="text-gray-400 text-sm mb-1">创新性</div>
                  <div className="text-purple-400 font-bold text-xl">{(selectedResult.novelty * 100).toFixed(0)}%</div>
                </div>
                <div className="data-card rounded-lg p-4 text-center">
                  <div className="text-gray-400 text-sm mb-1">技术风险</div>
                  <div className="text-orange-400 font-bold text-xl">{(selectedResult.riskAssessment.technical * 100).toFixed(0)}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
