import React, { useState, useEffect, memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, 
  TrendingUp, 
  Database, 
  Zap, 
  Activity,
  Globe,
  Users,
  Award,
  Rocket,
  Shield,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';
import { useAcademicTheme } from './AcademicTheme';
import { RESEARCH_DATASET_SUMMARY } from '../data/researchDatasets';

interface DashboardMetric {
  id: string;
  label: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  trendValue: number;
  icon: React.ComponentType<any>;
  color: string;
  description: string;
}

interface SystemStatus {
  overall: 'excellent' | 'good' | 'warning' | 'critical';
  cpuUsage: number;
  memoryUsage: number;
  networkLatency: number;
  activeConnections: number;
  lastUpdate: Date;
}

const EnhancedDashboard: React.FC = memo(() => {
  const { currentTheme } = useAcademicTheme();
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    overall: 'excellent',
    cpuUsage: 23.5,
    memoryUsage: 67.2,
    networkLatency: 12,
    activeConnections: 247,
    lastUpdate: new Date()
  });
  const metrics: DashboardMetric[] = useMemo(() => [
    {
      id: 'predictions',
      label: '候选预测池',
      value: RESEARCH_DATASET_SUMMARY.screenedCandidateCount,
      unit: '条',
      trend: 'up',
      trendValue: RESEARCH_DATASET_SUMMARY.rescuedFalseMetalCount,
      icon: Atom,
      color: currentTheme.primary[500],
      description: '当前可用于预测筛选与优先排序的候选材料'
    },
    {
      id: 'accuracy',
      label: '实验参考',
      value: RESEARCH_DATASET_SUMMARY.experimentalRecordCount,
      unit: '条',
      trend: 'up',
      trendValue: RESEARCH_DATASET_SUMMARY.confidenceDistribution.find(item => item.label === 'A')?.count || 0,
      icon: TrendingUp,
      color: currentTheme.secondary[500],
      description: '已接入并可用于参考的实验文献记录'
    },
    {
      id: 'materials',
      label: '拯救候选',
      value: RESEARCH_DATASET_SUMMARY.rescuedFalseMetalCount,
      unit: '条',
      trend: 'up',
      trendValue: 0,
      icon: Database,
      color: currentTheme.accent.forestGreen,
      description: '假金属识别后优先进入验证流程的候选'
    },
    {
      id: 'performance',
      label: 'Ground Truth',
      value: RESEARCH_DATASET_SUMMARY.alignedGroundTruthCount,
      unit: '条',
      trend: 'stable',
      trendValue: 0,
      icon: Zap,
      color: currentTheme.accent.burgundy,
      description: '当前研究流程对齐的训练基准池规模'
    },
    {
      id: 'users',
      label: '系统主线',
      value: 1,
      unit: '条',
      trend: 'stable',
      trendValue: 0,
      icon: Users,
      color: currentTheme.primary[400],
      description: '始终保持钙钛矿材料性能预测为核心主线'
    },
    {
      id: 'institutions',
      label: '数据来源',
      value: RESEARCH_DATASET_SUMMARY.sourceFiles.length,
      unit: '组',
      trend: 'stable',
      trendValue: 0,
      icon: Globe,
      color: currentTheme.secondary[400],
      description: '当前已整合进系统的真实研究数据文件来源'
    }
  ], [currentTheme]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemStatus(prev => ({
        ...prev,
        lastUpdate: new Date()
      }));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getTrendIcon = (trend: string, value: number) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (trend === 'down') return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
    return <Activity className="w-4 h-4 text-gray-400" />;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return currentTheme.secondary[500];
      case 'good': return currentTheme.primary[500];
      case 'warning': return '#f59e0b';
      case 'critical': return currentTheme.accent.burgundy;
      default: return currentTheme.text.secondary;
    }
  };

  return (
    <div className="space-y-8">
      {/* 系统状态概览 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-morphism-dark rounded-3xl p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${currentTheme.primary[500]}, ${currentTheme.secondary[500]})`
              }}
            >
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{ color: currentTheme.text.primary }}>
                系统运行状态
              </h2>
              <p className="text-sm" style={{ color: currentTheme.text.secondary }}>
                最后更新: {systemStatus.lastUpdate.toLocaleTimeString('zh-CN')}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div
              className="w-4 h-4 rounded-full animate-pulse"
              style={{ backgroundColor: getStatusColor(systemStatus.overall) }}
            />
            <span
              className="text-lg font-semibold capitalize"
              style={{ color: getStatusColor(systemStatus.overall) }}
            >
              {systemStatus.overall}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: currentTheme.text.secondary }}>CPU 使用率</span>
              <span className="text-sm font-semibold" style={{ color: currentTheme.text.primary }}>
                {systemStatus.cpuUsage.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-1000"
                style={{
                  width: `${systemStatus.cpuUsage}%`,
                  backgroundColor: systemStatus.cpuUsage > 80 ? currentTheme.accent.burgundy : currentTheme.primary[500]
                }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: currentTheme.text.secondary }}>内存使用</span>
              <span className="text-sm font-semibold" style={{ color: currentTheme.text.primary }}>
                {systemStatus.memoryUsage.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-1000"
                style={{
                  width: `${systemStatus.memoryUsage}%`,
                  backgroundColor: systemStatus.memoryUsage > 85 ? currentTheme.accent.burgundy : currentTheme.secondary[500]
                }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: currentTheme.text.secondary }}>网络延迟</span>
              <span className="text-sm font-semibold" style={{ color: currentTheme.text.primary }}>
                {systemStatus.networkLatency.toFixed(0)}ms
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-1000"
                style={{
                  width: `${Math.min(100, (50 - systemStatus.networkLatency) * 2)}%`,
                  backgroundColor: systemStatus.networkLatency > 30 ? currentTheme.accent.burgundy : currentTheme.accent.forestGreen
                }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: currentTheme.text.secondary }}>活跃连接</span>
              <span className="text-sm font-semibold" style={{ color: currentTheme.text.primary }}>
                {systemStatus.activeConnections}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4" style={{ color: currentTheme.accent.forestGreen }} />
              <span className="text-xs" style={{ color: currentTheme.text.secondary }}>实时同步中</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 关键指标网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="glass-morphism-dark rounded-2xl p-6 card-3d-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${metric.color}20, ${metric.color}10)`,
                    border: `1px solid ${metric.color}30`
                  }}
                >
                  <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
                </div>
                
                <div className="flex items-center gap-2">
                  {getTrendIcon(metric.trend, metric.trendValue)}
                  <span
                    className="text-sm font-semibold"
                    style={{ 
                      color: metric.trend === 'up' ? '#10b981' : 
                             metric.trend === 'down' ? '#ef4444' : currentTheme.text.secondary 
                    }}
                  >
                    {metric.trendValue > 0 ? '+' : ''}{metric.trendValue}
                    {metric.trend === 'up' || metric.trend === 'down' ? '%' : ''}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold" style={{ color: currentTheme.text.primary }}>
                      {typeof metric.value === 'number' && metric.value > 1000 
                        ? (metric.value / 1000).toFixed(1) + 'K' 
                        : metric.value.toLocaleString()}
                    </span>
                    <span className="text-sm font-medium" style={{ color: currentTheme.text.secondary }}>
                      {metric.unit}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mt-1" style={{ color: currentTheme.text.primary }}>
                    {metric.label}
                  </h3>
                </div>
                
                <p className="text-sm leading-relaxed" style={{ color: currentTheme.text.secondary }}>
                  {metric.description}
                </p>
              </div>

              {/* 进度指示器 */}
              <div className="mt-4 pt-4 border-t" style={{ borderColor: `${currentTheme.primary[700]}30` }}>
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <motion.div
                    className="h-1 rounded-full"
                    style={{ backgroundColor: metric.color }}
                    initial={{ width: 0 }}
                    animate={{ 
                      width: metric.id === 'users' ? '100%' :
                             metric.id === 'materials' ? '75%' :
                             metric.id === 'institutions' ? '60%' :
                             '85%'
                    }}
                    transition={{ duration: 2, delay: index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 快速操作面板 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-morphism-dark rounded-3xl p-8"
      >
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.accent.forestGreen}20, ${currentTheme.accent.forestGreen}10)`,
              border: `1px solid ${currentTheme.accent.forestGreen}30`
            }}
          >
            <Rocket className="w-6 h-6" style={{ color: currentTheme.accent.forestGreen }} />
          </div>
          <div>
            <h3 className="text-xl font-bold" style={{ color: currentTheme.text.primary }}>
              支撑模块
            </h3>
            <p className="text-sm" style={{ color: currentTheme.text.secondary }}>
              围绕性能预测主线的辅助能力
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: BarChart3, label: '生成报告', color: currentTheme.primary[500] },
            { icon: PieChart, label: '数据分析', color: currentTheme.secondary[500] },
            { icon: LineChart, label: '趋势预测', color: currentTheme.accent.forestGreen },
            { icon: Award, label: '模型评估', color: currentTheme.accent.burgundy }
          ].map((action, index) => (
            <motion.button
              key={action.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: `${action.color}10`,
                borderColor: `${action.color}30`,
              }}
            >
              <action.icon className="w-6 h-6 mx-auto mb-2" style={{ color: action.color }} />
              <div className="text-sm font-medium" style={{ color: currentTheme.text.primary }}>
                {action.label}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
});

EnhancedDashboard.displayName = 'EnhancedDashboard';

export { EnhancedDashboard };
