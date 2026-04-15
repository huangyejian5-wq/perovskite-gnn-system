import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Database, 
  Brain, 
  BarChart3, 
  Microscope, 
  Settings, 
  Home,
  Box,
  Target,
  Menu,
  X,
  ChevronRight,
  BookOpen,
  Activity,
  Cpu,
  HardDrive,
  Wifi,
  Star,
  TrendingUp,
  Clock,
  Users,
} from 'lucide-react';
import { useRealTimeData } from '../RealTimeDataProvider';
import { RESEARCH_DATASET_SUMMARY } from '../../data/researchDatasets';
import { LUMINESCENCE_DATASET_SUMMARY } from '../../data/luminescenceDatasets';
import { SUPPLEMENTARY_LITERATURE_SUMMARY } from '../../data/supplementaryDatasets';
import { MP_FULL_SUMMARY } from '../../data/mpFullLibrary';

export const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { metrics, isConnected } = useRealTimeData();

  // Update current time
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { 
      path: '/', 
      icon: Home, 
      label: '系统总览', 
      description: '预测系统入口与研究摘要',
      color: 'from-blue-500 to-cyan-500',
      badge: metrics.activeConnections > 50 ? 'hot' : null,
      dataPage: 'home'
    },
    { 
      path: '/prediction', 
      icon: Brain, 
      label: '性能预测', 
      description: '核心功能：材料性能预测',
      color: 'from-green-500 to-emerald-500',
      badge: 'AI',
      dataPage: 'prediction'
    },
    { 
      path: '/optimization', 
      icon: Target, 
      label: '智能优化', 
      description: '基于预测结果的逆向设计',
      color: 'from-purple-500 to-pink-500',
      badge: 'Pro',
      dataPage: 'optimization'
    },
    { 
      path: '/database', 
      icon: Database, 
      label: '材料数据库', 
      description: `${RESEARCH_DATASET_SUMMARY.experimentalRecordCount + SUPPLEMENTARY_LITERATURE_SUMMARY.totalRecords + LUMINESCENCE_DATASET_SUMMARY.materialPropertyCount} 材料 + ${LUMINESCENCE_DATASET_SUMMARY.devicePerformanceCount} 器件 + ${MP_FULL_SUMMARY.totalRecords} MP`,
      color: 'from-orange-500 to-red-500',
      badge: 'Data',
      dataPage: 'database'
    },
    { 
      path: '/visualization', 
      icon: Box, 
      label: '3D可视化', 
      description: '沉浸式分子结构展示',
      color: 'from-indigo-500 to-purple-500',
      badge: '3D',
      dataPage: 'visualization'
    },
    { 
      path: '/analysis', 
      icon: BarChart3, 
      label: '深度分析', 
      description: '多尺度统计、补充文献与验证基线',
      color: 'from-teal-500 to-cyan-500',
      badge: metrics.successRate > 95 ? '✓' : null,
      dataPage: 'analysis'
    },
    {
      path: '/methods',
      icon: BookOpen,
      label: '方法与数据',
      description: '论文方法、数据来源与实现边界',
      color: 'from-sky-500 to-blue-500',
      badge: 'Paper',
      dataPage: 'methods'
    },
    { 
      path: '/settings', 
      icon: Settings, 
      label: '系统设置', 
      description: '个性化配置与主题',
      color: 'from-gray-500 to-slate-500',
      badge: null,
      dataPage: 'settings'
    }
  ];

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobile}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-900/90 backdrop-blur-sm border border-white/20 rounded-lg text-white lg:hidden btn-control"
      >
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-fade-in-up"
          onClick={toggleMobile}
        />
      )}

      {/* Sidebar */}
      <div className={`
        ${isCollapsed ? 'w-20' : 'w-64'} 
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        fixed lg:relative h-full glass-card rounded-none border-t-0 border-b-0 border-l-0 
        transition-all duration-300 ease-out z-50 lg:z-auto animate-slide-in-left
      `}>
        
        {/* Header */}
        <div className="p-6 border-b border-white/20 relative overflow-hidden">
          {/* Background gradient animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 animate-gradient-shift"></div>
          
          <div className={`flex items-center relative z-10 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
            <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg animate-pulse-glow">
                  <Microscope className="w-6 h-6 text-white" />
                </div>
                {/* Connection status indicator */}
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                  isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'
                }`}></div>
              </div>
              {!isCollapsed && (
                <div className="animate-fade-in-up">
                  <h1 className="text-xl font-bold text-white bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                    钙钛矿GNN
                  </h1>
                  <p className="text-sm text-gray-400 flex items-center gap-1">
                    <Activity className="w-3 h-3" />
                    钙钛矿材料性能预测系统
                  </p>
                </div>
              )}
            </div>
            
            {!isCollapsed && (
              <button
                onClick={toggleCollapse}
                className="p-1.5 btn-control hidden lg:flex"
                title="收起侧边栏"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* System time and status */}
          {!isCollapsed && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>{currentTime.toLocaleTimeString('zh-CN')}</span>
                </div>
                <div className={`flex items-center gap-1 ${isConnected ? 'text-green-400' : 'text-red-400'}`}>
                  <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
                  <span className="font-medium">{isConnected ? '在线' : '离线'}</span>
                </div>
              </div>
            </div>
          )}

          {isCollapsed && (
            <button
              onClick={toggleCollapse}
              className="mt-4 w-full p-1.5 btn-control hidden lg:flex items-center justify-center"
              title="展开侧边栏"
            >
              <Menu className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-thin">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileOpen(false)}
              data-page={item.dataPage}
              className={({ isActive }) =>
                `group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 animate-fade-in-up overflow-hidden ${
                  isActive
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105 ring-2 ring-white/20`
                    : 'text-gray-300 hover:bg-white/10 hover:text-white hover:scale-105 card-hover'
                } ${isCollapsed ? 'justify-center' : ''}`
              }
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {({ isActive }) => (
                <>
                  {/* Background effects */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20`}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                  </div>

                  <div className={`relative flex items-center gap-3 w-full ${isActive ? 'animate-pulse' : ''}`}>
                    <div className="relative">
                      <item.icon className="w-5 h-5 relative z-10" />
                      {isActive && (
                        <div className="absolute inset-0 bg-white/20 rounded-lg blur-sm animate-pulse"></div>
                      )}
                    </div>
                    
                    {!isCollapsed && (
                      <div className="flex-1 animate-fade-in-up">
                        <div className="font-medium flex items-center gap-2">
                          {item.label}
                          {item.badge && (
                            <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                              item.badge === 'hot' ? 'bg-red-500 text-white animate-pulse' :
                              item.badge === 'AI' ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white' :
                              item.badge === 'Pro' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                              item.badge === '3D' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' :
                              item.badge === '✓' ? 'bg-green-500 text-white' :
                              'bg-orange-500 text-white'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className={`text-xs mt-0.5 ${isActive ? 'text-white/80' : 'text-gray-500 group-hover:text-gray-400'}`}>
                          {item.description}
                        </div>
                      </div>
                    )}

                    {!isCollapsed && (
                      <div className={`transition-all duration-300 ${
                        isActive ? 'opacity-100 translate-x-1' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                      }`}>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Tooltip for collapsed state */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-3 py-2 bg-gray-800/95 backdrop-blur-sm text-white text-sm rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap animate-scale-in">
                      <div className="font-medium flex items-center gap-2">
                        {item.label}
                        {item.badge && (
                          <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                            item.badge === 'hot' ? 'bg-red-500 text-white' :
                            item.badge === 'AI' ? 'bg-green-500 text-white' :
                            item.badge === 'Pro' ? 'bg-purple-500 text-white' :
                            item.badge === '3D' ? 'bg-indigo-500 text-white' :
                            item.badge === '✓' ? 'bg-green-500 text-white' :
                            'bg-orange-500 text-white'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">{item.description}</div>
                      <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45 border-l border-t border-white/20"></div>
                    </div>
                  )}

                  {/* Active indicator */}
                  {isActive && !isCollapsed && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full animate-scale-in"></div>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Enhanced Status Indicators */}
        {!isCollapsed && (
          <div className="p-4 border-t border-white/20 space-y-3 animate-fade-in-up">
            <div className="text-sm font-medium text-white mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              实时系统状态
            </div>
            
            {/* System Health */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Cpu className="w-3 h-3" />
                  <span>CPU使用率</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500"
                      style={{ width: `${metrics.systemLoad}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-medium text-xs w-8 text-right">
                    {metrics.systemLoad.toFixed(0)}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <HardDrive className="w-3 h-3" />
                  <span>内存使用</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-500"
                      style={{ width: `${metrics.memoryUsage}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-medium text-xs w-8 text-right">
                    {metrics.memoryUsage.toFixed(0)}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Brain className="w-3 h-3" />
                  <span>模型精度</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span className="text-green-400 font-bold text-xs">
                    {metrics.modelAccuracy.toFixed(1)}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Wifi className="w-3 h-3" />
                  <span>网络吞吐</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400 font-medium text-xs">
                    {metrics.throughput} MB/s
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="w-3 h-3" />
                  <span>活跃用户</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium text-xs">
                    {metrics.activeConnections}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="pt-3 border-t border-white/10">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-black/20 rounded-lg p-2 text-center">
                  <div className="text-green-400 font-bold">{metrics.successRate.toFixed(1)}%</div>
                  <div className="text-gray-500">成功率</div>
                </div>
                <div className="bg-black/20 rounded-lg p-2 text-center">
                  <div className="text-blue-400 font-bold">{metrics.predictionQueue}</div>
                  <div className="text-gray-500">队列</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Collapsed Status */}
        {isCollapsed && (
          <div className="p-4 border-t border-white/20 text-center">
            <div className="space-y-2">
              <div className={`w-8 h-8 rounded-lg mx-auto flex items-center justify-center ${
                isConnected ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}>
                <Activity className="w-4 h-4" />
              </div>
              <div className="text-xs text-gray-400">
                {metrics.modelAccuracy.toFixed(0)}%
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className={`p-4 border-t border-white/20 ${isCollapsed ? 'text-center' : ''} animate-fade-in-up`}>
          {isCollapsed ? (
            <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-white text-xs font-bold">v1</span>
            </div>
          ) : (
            <div className="text-center text-sm text-gray-400">
              <p className="font-medium text-white mb-1">钙钛矿性能预测系统</p>
              <p>版本 1.0.0</p>
              <p className="mt-1">© 2024 材料科学团队</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
