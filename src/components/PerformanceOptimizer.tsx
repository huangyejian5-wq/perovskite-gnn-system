import React, { memo, useMemo, useCallback, lazy, Suspense } from 'react';
import { Activity, Cpu, MemoryStick, Zap, TrendingUp, AlertCircle, CheckCircle, Settings, Gauge, BarChart3 } from 'lucide-react';

// Lazy load heavy components for better initial performance
const ChartComponent = lazy(() => import('recharts').then(module => ({ 
  default: module.ComposedChart 
})));

interface PerformanceMetrics {
  cpuUsage: number;
  memoryUsage: number;
  networkLatency: number;
  renderTime: number;
  bundleSize: number;
  cacheHitRate: number;
}

interface PerformanceOptimizerProps {
  onOptimize?: (optimizations: string[]) => void;
  metrics?: PerformanceMetrics;
}

// Memoized performance card component
const PerformanceCard = memo<{
  title: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  trend: 'up' | 'down' | 'stable';
  severity: 'good' | 'warning' | 'critical';
}>(({ title, value, unit, icon, trend, severity }) => {
  const trendIcon = useMemo(() => {
    switch (trend) {
      case 'up': return <TrendingUp className={`w-4 h-4 ${severity === 'good' ? 'text-green-400' : 'text-red-400'}`} />;
      case 'down': return <TrendingUp className={`w-4 h-4 rotate-180 ${severity === 'good' ? 'text-green-400' : 'text-red-400'}`} />;
      default: return <Activity className="w-4 h-4 text-blue-400" />;
    }
  }, [trend, severity]);

  const cardColor = useMemo(() => {
    switch (severity) {
      case 'good': return 'border-green-500/30 bg-green-500/10';
      case 'warning': return 'border-yellow-500/30 bg-yellow-500/10';
      case 'critical': return 'border-red-500/30 bg-red-500/10';
      default: return 'border-blue-500/30 bg-blue-500/10';
    }
  }, [severity]);

  return (
    <div className={`glass-card rounded-xl p-4 ${cardColor} transition-all duration-300 hover:scale-105`}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-white font-medium text-sm">{title}</div>
        {icon}
      </div>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          {value.toFixed(1)}<span className="text-sm text-gray-400 ml-1">{unit}</span>
        </div>
        {trendIcon}
      </div>
    </div>
  );
});

PerformanceCard.displayName = 'PerformanceCard';

// Performance optimization recommendations
const useOptimizationRecommendations = (metrics: PerformanceMetrics) => {
  return useMemo(() => {
    const recommendations: Array<{
      id: string;
      title: string;
      description: string;
      impact: 'high' | 'medium' | 'low';
      effort: 'high' | 'medium' | 'low';
      category: 'memory' | 'cpu' | 'network' | 'render';
    }> = [];

    // Memory optimizations
    if (metrics.memoryUsage > 80) {
      recommendations.push({
        id: 'memory-cleanup',
        title: '内存清理',
        description: '清理未使用的组件和事件监听器，减少内存泄漏',
        impact: 'high',
        effort: 'medium',
        category: 'memory'
      });
    }

    if (metrics.memoryUsage > 60) {
      recommendations.push({
        id: 'lazy-loading',
        title: '懒加载组件',
        description: '对非关键组件使用React.lazy()进行代码分割',
        impact: 'high',
        effort: 'low',
        category: 'memory'
      });
    }

    // CPU optimizations
    if (metrics.cpuUsage > 70) {
      recommendations.push({
        id: 'memoization',
        title: '组件记忆化',
        description: '使用React.memo和useMemo优化重复计算',
        impact: 'high',
        effort: 'medium',
        category: 'cpu'
      });
    }

    // Network optimizations
    if (metrics.networkLatency > 200) {
      recommendations.push({
        id: 'api-caching',
        title: 'API缓存',
        description: '实现智能缓存策略减少网络请求',
        impact: 'medium',
        effort: 'medium',
        category: 'network'
      });
    }

    if (metrics.cacheHitRate < 70) {
      recommendations.push({
        id: 'cache-optimization',
        title: '缓存优化',
        description: '优化缓存策略提高命中率',
        impact: 'medium',
        effort: 'low',
        category: 'network'
      });
    }

    // Render optimizations
    if (metrics.renderTime > 16) {
      recommendations.push({
        id: 'virtual-scrolling',
        title: '虚拟滚动',
        description: '对长列表使用虚拟滚动减少DOM节点',
        impact: 'high',
        effort: 'high',
        category: 'render'
      });
    }

    if (metrics.bundleSize > 5000) {
      recommendations.push({
        id: 'bundle-splitting',
        title: '包分割',
        description: '分割大型包文件，实现更好的缓存策略',
        impact: 'medium',
        effort: 'medium',
        category: 'render'
      });
    }

    return recommendations;
  }, [metrics]);
};

// Performance monitoring hook
const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>({
    cpuUsage: 35.2,
    memoryUsage: 67.8,
    networkLatency: 145,
    renderTime: 12.3,
    bundleSize: 3200,
    cacheHitRate: 78.5
  });

  const updateMetrics = useCallback(() => {
    // Simulate real-time performance monitoring
    setMetrics(prev => ({
      cpuUsage: Math.max(0, Math.min(100, prev.cpuUsage + (Math.random() - 0.5) * 10)),
      memoryUsage: Math.max(0, Math.min(100, prev.memoryUsage + (Math.random() - 0.5) * 5)),
      networkLatency: Math.max(50, prev.networkLatency + (Math.random() - 0.5) * 50),
      renderTime: Math.max(0, prev.renderTime + (Math.random() - 0.5) * 4),
      bundleSize: prev.bundleSize,
      cacheHitRate: Math.max(0, Math.min(100, prev.cacheHitRate + (Math.random() - 0.5) * 5))
    }));
  }, []);

  React.useEffect(() => {
    const interval = setInterval(updateMetrics, 3000);
    return () => clearInterval(interval);
  }, [updateMetrics]);

  return metrics;
};

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = memo(({ 
  onOptimize 
}) => {
  const metrics = usePerformanceMonitor();
  const recommendations = useOptimizationRecommendations(metrics);
  
  const handleOptimize = useCallback((optimizationId: string) => {
    if (onOptimize) {
      onOptimize([optimizationId]);
    }
    
    // Simulate optimization effect
    setTimeout(() => {
      console.log(`Applied optimization: ${optimizationId}`);
    }, 1000);
  }, [onOptimize]);

  const getSeverity = useCallback((value: number, thresholds: [number, number]): 'good' | 'warning' | 'critical' => {
    if (value <= thresholds[0]) return 'good';
    if (value <= thresholds[1]) return 'warning';
    return 'critical';
  }, []);

  const getImpactColor = useCallback((impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'low': return 'text-green-400 bg-green-500/20 border-green-500/30';
      default: return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
    }
  }, []);

  const getCategoryIcon = useCallback((category: string) => {
    switch (category) {
      case 'memory': return <MemoryStick className="w-4 h-4" />;
      case 'cpu': return <Cpu className="w-4 h-4" />;
      case 'network': return <Zap className="w-4 h-4" />;
      case 'render': return <BarChart3 className="w-4 h-4" />;
      default: return <Settings className="w-4 h-4" />;
    }
  }, []);

  const overallScore = useMemo(() => {
    const cpuScore = Math.max(0, 100 - metrics.cpuUsage);
    const memoryScore = Math.max(0, 100 - metrics.memoryUsage);
    const latencyScore = Math.max(0, 100 - (metrics.networkLatency / 5));
    const renderScore = Math.max(0, 100 - (metrics.renderTime * 5));
    const cacheScore = metrics.cacheHitRate;
    
    return (cpuScore + memoryScore + latencyScore + renderScore + cacheScore) / 5;
  }, [metrics]);

  return (
    <div className="space-y-6">
      {/* Overall Performance Score */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-3">
            <Gauge className="w-6 h-6 text-blue-400" />
            平台运行评分
          </h2>
          <div className="flex items-center gap-2">
            {overallScore >= 80 ? (
              <CheckCircle className="w-5 h-5 text-green-400" />
            ) : (
              <AlertCircle className="w-5 h-5 text-yellow-400" />
            )}
            <span className="text-2xl font-bold text-white">{overallScore.toFixed(0)}</span>
            <span className="text-gray-400">/100</span>
          </div>
        </div>
        
        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-1000"
            style={{ width: `${overallScore}%` }}
          ></div>
        </div>
      </div>

      {/* Performance Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PerformanceCard
          title="CPU使用率"
          value={metrics.cpuUsage}
          unit="%"
          icon={<Cpu className="w-5 h-5 text-blue-400" />}
          trend={metrics.cpuUsage > 50 ? 'up' : 'stable'}
          severity={getSeverity(metrics.cpuUsage, [50, 80])}
        />
        
        <PerformanceCard
          title="内存使用率"
          value={metrics.memoryUsage}
          unit="%"
          icon={<MemoryStick className="w-5 h-5 text-purple-400" />}
          trend={metrics.memoryUsage > 60 ? 'up' : 'stable'}
          severity={getSeverity(metrics.memoryUsage, [60, 85])}
        />
        
        <PerformanceCard
          title="网络延迟"
          value={metrics.networkLatency}
          unit="ms"
          icon={<Zap className="w-5 h-5 text-yellow-400" />}
          trend={metrics.networkLatency > 150 ? 'up' : 'down'}
          severity={getSeverity(metrics.networkLatency, [100, 200])}
        />
        
        <PerformanceCard
          title="渲染时间"
          value={metrics.renderTime}
          unit="ms"
          icon={<Activity className="w-5 h-5 text-green-400" />}
          trend={metrics.renderTime > 16 ? 'up' : 'stable'}
          severity={getSeverity(metrics.renderTime, [16, 30])}
        />
        
        <PerformanceCard
          title="包大小"
          value={metrics.bundleSize / 1024}
          unit="MB"
          icon={<BarChart3 className="w-5 h-5 text-cyan-400" />}
          trend="stable"
          severity={getSeverity(metrics.bundleSize, [3000, 5000])}
        />
        
        <PerformanceCard
          title="缓存命中率"
          value={metrics.cacheHitRate}
          unit="%"
          icon={<CheckCircle className="w-5 h-5 text-emerald-400" />}
          trend={metrics.cacheHitRate > 75 ? 'up' : 'down'}
          severity={metrics.cacheHitRate > 75 ? 'good' : metrics.cacheHitRate > 60 ? 'warning' : 'critical'}
        />
      </div>

      {/* Optimization Recommendations */}
      {recommendations.length > 0 && (
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
            <Settings className="w-5 h-5 text-blue-400" />
            运行优化建议
            <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
              {recommendations.length} 项
            </span>
          </h3>
          
          <div className="space-y-3">
            {recommendations.map((rec) => (
              <div 
                key={rec.id} 
                className="glass-card rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="text-blue-400 mt-1">
                      {getCategoryIcon(rec.category)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium group-hover:text-blue-200 transition-colors">
                        {rec.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                        {rec.description}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-3">
                        <span className={`px-2 py-1 rounded-full text-xs border ${getImpactColor(rec.impact)}`}>
                          影响: {rec.impact === 'high' ? '高' : rec.impact === 'medium' ? '中' : '低'}
                        </span>
                        <span className="text-gray-500 text-xs">
                          工作量: {rec.effort === 'high' ? '高' : rec.effort === 'medium' ? '中' : '低'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleOptimize(rec.id)}
                    className="btn-primary px-4 py-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
                  >
                    应用建议
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Performance Chart */}
      <div className="glass-card rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">运行趋势</h3>
        <div className="h-64 flex items-center justify-center">
          <Suspense fallback={
            <div className="text-gray-400">加载图表中...</div>
          }>
            <div className="text-gray-400">
              平台运行趋势图表 (使用 Recharts 的 ComposedChart)
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
});

PerformanceOptimizer.displayName = 'PerformanceOptimizer';

export default PerformanceOptimizer;
