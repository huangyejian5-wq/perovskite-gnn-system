import React, { useState, useEffect, memo, useMemo } from 'react';
import { Brain, Database, Target, TrendingUp, Activity, Atom, BookOpen, Clock, Globe, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRealTimeData } from '../components/RealTimeDataProvider';
import { useAcademicTheme } from '../components/AcademicTheme';
import { StatCard, QuickActionButton, ProgressBar } from '../components/EnhancedUIComponents';
import { EnhancedDashboard } from '../components/EnhancedDashboard';
import { RESEARCH_DATASET_SUMMARY } from '../data/researchDatasets';
import { RESEARCH_PROJECT_PROFILE } from '../data/researchProjectProfile';

export const HomePage: React.FC = memo(() => {
  const navigate = useNavigate();
  const { isConnected } = useRealTimeData();
  const { currentTheme } = useAcademicTheme();
  const [currentTime, setCurrentTime] = useState(new Date());
  const realtimeData = useMemo(() => ({
    activePredictions: RESEARCH_DATASET_SUMMARY.screenedCandidateCount,
    modelAccuracy: RESEARCH_DATASET_SUMMARY.experimentalRecordCount,
    systemLoad: RESEARCH_DATASET_SUMMARY.rescuedFalseMetalCount,
    dataSync: RESEARCH_DATASET_SUMMARY.alignedGroundTruthCount
  }), []);

  // 更新时间
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 快速操作配置
  const quickActions = useMemo(() => [
    { 
      icon: Brain, 
      label: '开始预测', 
      onClick: () => navigate('/prediction'),
      color: currentTheme.primary[500]
    },
    { 
      icon: Target, 
      label: '智能优化', 
      onClick: () => navigate('/optimization'),
      color: currentTheme.secondary[500]
    },
    { 
      icon: Database, 
      label: '浏览数据库', 
      onClick: () => navigate('/database'),
      color: currentTheme.accent.forestGreen
    },
    { 
      icon: BookOpen, 
      label: '查看文档', 
      onClick: () => window.open('/docs', '_blank'),
      color: currentTheme.accent.burgundy
    }
  ], [navigate, currentTheme]);

  // 功能特性数据
  const features = [
    {
      icon: Brain,
      title: 'AI智能预测',
      description: '围绕发光波长、量子效率、色坐标与稳定性的多任务预测',
      progress: 94.2,
      color: currentTheme.primary[500]
    },
    {
      icon: Target,
      title: '逆向设计',
      description: '按目标发光性能反推候选组分与结构方向',
      progress: 87.2,
      color: currentTheme.secondary[500]
    },
    {
      icon: Database,
      title: '海量数据',
      description: `${RESEARCH_DATASET_SUMMARY.experimentalRecordCount} 条实验记录 + ${RESEARCH_DATASET_SUMMARY.screenedCandidateCount} 条候选`,
      progress: 100,
      color: currentTheme.accent.forestGreen
    },
    {
      icon: Zap,
      title: '实时计算',
      description: '预测入口保持不变，并接入真实研究先验数据',
      progress: 91.0,
      color: currentTheme.accent.burgundy
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* 改进的背景 - 更好的对比度 */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: currentTheme.background.primary,
        }}
      />
      
      {/* 主要内容区域 */}
      <div className="container-fluid relative z-10 py-6 space-y-8">
        
        {/* 实时状态卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="候选材料池"
            value={realtimeData.activePredictions}
            subtitle="可用于预测与筛选"
            icon={Target}
            trend="up"
            color={currentTheme.primary[500]}
            animated={true}
          />
          <StatCard
            title="实验参考"
            value={realtimeData.modelAccuracy}
            subtitle="真实文献样本"
            icon={Brain}
            trend="stable"
            color={currentTheme.secondary[500]}
            animated={true}
          />
          <StatCard
            title="拯救候选"
            value={realtimeData.systemLoad}
            subtitle="假金属优先队列"
            icon={Activity}
            trend="up"
            color={currentTheme.accent.forestGreen}
            animated={true}
          />
          <StatCard
            title="连接状态"
            value={isConnected ? '已连接' : '连接中'}
            subtitle={`${realtimeData.dataSync} 条对齐基准`}
            icon={Database}
            trend="stable"
            color={currentTheme.accent.burgundy}
            animated={true}
          />
        </div>

        {/* 主要欢迎区域 - 改进对比度 */}
        <div 
          className="page-hero relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, 
              ${currentTheme.background.paper}F0 0%, 
              ${currentTheme.background.secondary}E0 100%)`,
            borderColor: `${currentTheme.primary[300]}28`
          }}
        >
          {/* 装饰性背景图案 */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="absolute top-10 right-10 w-32 h-32 rounded-full"
              style={{
                background: `radial-gradient(circle, ${currentTheme.primary[500]}40 0%, transparent 70%)`
              }}
            />
            <div 
              className="absolute bottom-10 left-10 w-24 h-24 rounded-full"
              style={{
                background: `radial-gradient(circle, ${currentTheme.secondary[500]}40 0%, transparent 70%)`
              }}
            />
          </div>
          
          <div className="relative z-10 p-2 lg:p-4 space-y-8">
            {/* 头部区域 */}
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative">
                    <div 
                      className="w-16 h-16 lg:w-18 lg:h-18 rounded-3xl flex items-center justify-center shadow-modern-lg"
                      style={{
                        background: `linear-gradient(135deg, ${currentTheme.primary[500]}, ${currentTheme.secondary[500]})`
                      }}
                    >
                      <Atom className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* 状态指示器 */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <div 
                      className="hero-chip"
                      style={{
                        backgroundColor: `${currentTheme.secondary[500]}14`,
                        borderColor: `${currentTheme.secondary[500]}24`
                      }}
                    >
                      <span className="font-semibold text-sm flex items-center gap-3" style={{ color: currentTheme.text.primary }}>
                        <div 
                          className="w-2.5 h-2.5 rounded-full shadow-glow"
                          style={{ backgroundColor: currentTheme.secondary[400] }}
                        />
                        {currentTime.toLocaleTimeString('zh-CN')} | 系统运行正常
                      </span>
                    </div>
                    <div className="hero-chip">
                      <Shield className="w-4 h-4 text-emerald-300" />
                      <span>{RESEARCH_DATASET_SUMMARY.alignedGroundTruthCount} 条对齐基准</span>
                    </div>
                  </div>
                </div>

                {/* 标题区域 - 增强对比度 */}
                <div className="mb-8">
                  <div className="page-kicker mb-3">Perovskite Performance Prediction Platform</div>
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-black mb-5 leading-tight tracking-tight">
                    <span style={{ color: currentTheme.text.primary }}>
                      钙钛矿材料
                    </span>
                    <br />
                    <span style={{ color: currentTheme.primary[400] }}>
                      性能预测系统
                    </span>
                  </h1>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="h-1.5 w-24 rounded-full shadow-glow"
                      style={{
                        background: `linear-gradient(to right, ${currentTheme.primary[500]}, ${currentTheme.secondary[500]})`
                      }}
                    />
                    <span className="font-semibold text-base px-4 py-2 rounded-full border backdrop-blur-sm" 
                      style={{ 
                        color: currentTheme.text.primary,
                        borderColor: `${currentTheme.primary[500]}30`
                      }}
                    >
                      {RESEARCH_PROJECT_PROFILE.title}
                    </span>
                  </div>
                  
                  <div 
                    className="text-base lg:text-lg font-medium leading-relaxed max-w-4xl p-5 lg:p-6 rounded-2xl border backdrop-blur-sm"
                    style={{ 
                      color: currentTheme.text.primary,
                      backgroundColor: `${currentTheme.background.paper}68`,
                      borderColor: `${currentTheme.primary[300]}22`
                    }}
                  >
                    保持系统原本
                    <span 
                        className="font-black px-3 py-1.5 rounded-lg border mx-2 shadow-soft inline-block"
                      style={{
                        color: currentTheme.primary[300],
                        backgroundColor: `${currentTheme.primary[500]}20`,
                        borderColor: `${currentTheme.primary[500]}40`
                      }}
                    >
                      钙钛矿材料性能预测
                    </span>
                    的核心定位，同时接入你当前工作中的
                    <span 
                        className="font-black px-3 py-1.5 rounded-lg border mx-2 shadow-soft inline-block"
                      style={{
                        color: currentTheme.secondary[300],
                        backgroundColor: `${currentTheme.secondary[500]}20`,
                        borderColor: `${currentTheme.secondary[500]}40`
                      }}
                    >
                      {RESEARCH_DATASET_SUMMARY.experimentalRecordCount} 条实验记录
                    </span>
                    、
                    <span 
                        className="font-black px-3 py-1.5 rounded-lg border mx-2 shadow-soft inline-block"
                      style={{
                        color: currentTheme.accent.forestGreen,
                        backgroundColor: `${currentTheme.accent.forestGreen}20`,
                        borderColor: `${currentTheme.accent.forestGreen}40`
                      }}
                    >
                      {RESEARCH_DATASET_SUMMARY.screenedCandidateCount} 条候选
                    </span>
                    和
                    <span
                        className="font-black px-3 py-1.5 rounded-lg border mx-2 shadow-soft inline-block"
                      style={{
                        color: currentTheme.accent.burgundy,
                        backgroundColor: `${currentTheme.accent.burgundy}20`,
                        borderColor: `${currentTheme.accent.burgundy}40`
                      }}
                    >
                      {RESEARCH_DATASET_SUMMARY.rescuedFalseMetalCount} 条拯救候选
                    </span>
                    ，让预测、分析与数据库浏览都能落在真实研究数据上。
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-summary-grid lg:max-w-2xl">
              {[
                { label: '实验记录', value: RESEARCH_DATASET_SUMMARY.experimentalRecordCount, accent: currentTheme.primary[400] },
                { label: '候选池', value: RESEARCH_DATASET_SUMMARY.screenedCandidateCount, accent: currentTheme.secondary[400] },
                { label: '拯救候选', value: RESEARCH_DATASET_SUMMARY.rescuedFalseMetalCount, accent: currentTheme.accent.forestGreen },
                { label: 'Ground Truth', value: RESEARCH_DATASET_SUMMARY.alignedGroundTruthCount, accent: currentTheme.accent.burgundy },
              ].map((item) => (
                <div key={item.label} className="hero-summary-tile">
                  <div className="text-xs text-slate-400">{item.label}</div>
                  <div className="text-2xl font-semibold mt-1" style={{ color: item.accent }}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* 快速操作按钮 */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-1">
              {quickActions.map((action, index) => (
                <QuickActionButton
                  key={index}
                  icon={action.icon}
                  label={action.label}
                  onClick={action.onClick}
                  color={action.color}
                  size="lg"
                  variant="primary"
                />
              ))}
            </div>
          </div>
        </div>

        <div 
          className="section-panel"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.background.paper}E0, ${currentTheme.background.secondary}D0)`,
            borderColor: `${currentTheme.primary[300]}24`
          }}
        >
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <h2 className="text-2xl font-bold mb-4" style={{ color: currentTheme.text.primary }}>
                论文对齐的系统主线
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: currentTheme.text.secondary }}>
                {RESEARCH_PROJECT_PROFILE.focus}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {RESEARCH_PROJECT_PROFILE.coreMethod.map((item) => (
                  <div
                    key={item}
                    className="p-4 rounded-xl border"
                    style={{
                      backgroundColor: `${currentTheme.primary[500]}08`,
                      borderColor: `${currentTheme.primary[500]}20`
                    }}
                  >
                    <div className="font-semibold mb-1" style={{ color: currentTheme.text.primary }}>
                      {item.split('：')[0]}
                    </div>
                    <div className="text-sm" style={{ color: currentTheme.text.secondary }}>
                      {item.includes('：') ? item.split('：').slice(1).join('：') : item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div
                className="p-5 rounded-xl border"
                style={{
                  backgroundColor: `${currentTheme.secondary[500]}08`,
                  borderColor: `${currentTheme.secondary[500]}20`
                }}
              >
                <h3 className="font-bold mb-3" style={{ color: currentTheme.text.primary }}>
                  论文目标指标
                </h3>
                <div className="space-y-3">
                  {RESEARCH_PROJECT_PROFILE.validationTargets.map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-3">
                      <span className="text-sm" style={{ color: currentTheme.text.secondary }}>{item.label}</span>
                      <span className="text-sm font-semibold" style={{ color: currentTheme.text.primary }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="p-5 rounded-xl border"
                style={{
                  backgroundColor: `${currentTheme.accent.forestGreen}08`,
                  borderColor: `${currentTheme.accent.forestGreen}20`
                }}
              >
                <h3 className="font-bold mb-3" style={{ color: currentTheme.text.primary }}>
                  当前真实接入状态
                </h3>
                <div className="space-y-3">
                  {RESEARCH_PROJECT_PROFILE.currentReality.map((item) => (
                    <div key={item} className="text-sm leading-relaxed" style={{ color: currentTheme.text.secondary }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 功能特性卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
                className="p-6 rounded-2xl border backdrop-blur-xl shadow-modern-md transition-all duration-300 card-professional"
              style={{
                background: `linear-gradient(135deg, ${currentTheme.background.paper}E0, ${currentTheme.background.secondary}D0)`,
                  borderColor: `${currentTheme.primary[300]}24`
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-soft"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                    border: `1px solid ${feature.color}30`
                  }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                
                <div 
                  className="text-2xl font-bold"
                  style={{ color: currentTheme.text.primary }}
                >
                  {feature.progress.toFixed(1)}%
                </div>
              </div>

              <div className="space-y-3">
                <h3 
                  className="font-bold text-lg"
                  style={{ color: currentTheme.text.primary }}
                >
                  {feature.title}
                </h3>
                
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: currentTheme.text.secondary }}
                >
                  {feature.description}
                </p>

                <ProgressBar
                  value={feature.progress}
                  color={feature.color}
                  showPercentage={false}
                  animated={true}
                  size="md"
                />
              </div>
            </div>
          ))}
        </div>

        {/* 增强的仪表板 */}
        <EnhancedDashboard />

        <div className="section-panel">
          <div className="section-title-row">
            <div>
              <div className="page-kicker mb-2">Research Summary</div>
              <h2 className="section-title">系统主线与当前入口</h2>
            </div>
            <div className="section-note max-w-2xl">
              首页不再用平台运行型大面板占据视觉焦点，而是把注意力集中在预测主线、多尺度数据库和研究数据入口上。
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="data-card rounded-2xl p-5">
              <div className="text-sm text-slate-400">核心定位</div>
              <div className="text-white font-semibold mt-2">钙钛矿材料性能预测系统</div>
              <div className="text-sm text-slate-400 mt-2">预测仍是主功能，数据库、分析和方法页作为支撑模块。</div>
            </div>
            <div className="data-card rounded-2xl p-5">
              <div className="text-sm text-slate-400">多尺度覆盖</div>
              <div className="text-white font-semibold mt-2">组成-晶体 / 材料 / 器件 / 筛选</div>
              <div className="text-sm text-slate-400 mt-2">数据库与分析页已明确区分不同尺度的数据来源和用途。</div>
            </div>
            <div className="data-card rounded-2xl p-5">
              <div className="text-sm text-slate-400">真实支撑</div>
              <div className="text-white font-semibold mt-2">实验主表 + 补充文献 + pelED + MP 主库</div>
              <div className="text-sm text-slate-400 mt-2">不再依赖少量样例条目，也不使用虚构统计来撑页面。</div>
            </div>
          </div>
        </div>

        {/* 系统统计概览 */}
        <div 
          className="section-panel"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.background.paper}E0, ${currentTheme.background.secondary}D0)`,
            borderColor: `${currentTheme.primary[300]}24`
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { label: '实验记录', value: String(RESEARCH_DATASET_SUMMARY.experimentalRecordCount), icon: TrendingUp, color: currentTheme.secondary[500] },
              { label: '候选材料', value: String(RESEARCH_DATASET_SUMMARY.screenedCandidateCount), icon: Clock, color: currentTheme.primary[500] },
              { label: '拯救候选', value: String(RESEARCH_DATASET_SUMMARY.rescuedFalseMetalCount), icon: Globe, color: currentTheme.accent.burgundy },
              { label: 'Ground Truth', value: String(RESEARCH_DATASET_SUMMARY.alignedGroundTruthCount), icon: Shield, color: currentTheme.accent.forestGreen },
              { label: '数据来源', value: '3组', icon: BookOpen, color: currentTheme.primary[400] }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  backgroundColor: `${stat.color}10`,
                  border: `1px solid ${stat.color}20`
                }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: stat.color }} />
                <div 
                  className="text-2xl font-bold mb-1"
                  style={{ color: currentTheme.text.primary }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: currentTheme.text.secondary }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

HomePage.displayName = 'HomePage';
