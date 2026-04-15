import React, { useState, useEffect } from 'react';
import { useRealTimeData } from './RealTimeDataProvider';
import { Activity, Server, MemoryStick, Cpu, HardDrive, Wifi, Zap, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, BarChart3, Monitor, Settings, RefreshCw } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

export const SystemPerformancePanel: React.FC = () => {
  const { metrics, isConnected, connectionStatus, trainingProgress } = useRealTimeData();
  const [selectedTimeRange, setSelectedTimeRange] = useState<'1h' | '6h' | '24h' | '7d'>('6h');
  const [refreshing, setRefreshing] = useState(false);

  // Generate historical performance data
  const [performanceHistory, setPerformanceHistory] = useState(() => {
    const history = [];
    const now = Date.now();
    for (let i = 23; i >= 0; i--) {
      history.push({
        time: new Date(now - i * 60 * 60 * 1000).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
        timestamp: now - i * 60 * 60 * 1000,
        cpu: 30 + Math.random() * 50,
        memory: 40 + Math.random() * 40,
        network: 10 + Math.random() * 80,
        modelAccuracy: 94 + Math.random() * 4,
        throughput: 100 + Math.random() * 100
      });
    }
    return history;
  });

  // Update performance history in real-time
  useEffect(() => {
    const interval = setInterval(() => {
      setPerformanceHistory(prev => {
        const newEntry = {
          time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
          timestamp: Date.now(),
          cpu: metrics.systemLoad,
          memory: metrics.memoryUsage,
          network: 20 + Math.random() * 60,
          modelAccuracy: metrics.modelAccuracy,
          throughput: metrics.throughput
        };
        return [...prev.slice(1), newEntry];
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [metrics]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRefreshing(false);
  };

  // System health assessment
  const getSystemHealth = () => {
    const avgCpu = performanceHistory.slice(-6).reduce((sum, entry) => sum + entry.cpu, 0) / 6;
    const avgMemory = performanceHistory.slice(-6).reduce((sum, entry) => sum + entry.memory, 0) / 6;
    const avgAccuracy = performanceHistory.slice(-6).reduce((sum, entry) => sum + entry.modelAccuracy, 0) / 6;

    if (avgCpu < 50 && avgMemory < 70 && avgAccuracy > 95) {
      return { status: 'excellent', color: '#10b981', label: '优秀' };
    } else if (avgCpu < 70 && avgMemory < 80 && avgAccuracy > 90) {
      return { status: 'good', color: '#3b82f6', label: '良好' };
    } else if (avgCpu < 85 && avgMemory < 90 && avgAccuracy > 85) {
      return { status: 'warning', color: '#f59e0b', label: '注意' };
    } else {
      return { status: 'critical', color: '#ef4444', label: '严重' };
    }
  };

  const systemHealth = getSystemHealth();

  // Resource usage distribution
  const resourceUsage = [
    { name: 'AI模型训练', value: 45, color: '#3b82f6' },
    { name: '数据处理', value: 25, color: '#10b981' },
    { name: '可视化渲染', value: 20, color: '#f59e0b' },
    { name: '系统服务', value: 10, color: '#8b5cf6' }
  ];

  // Performance metrics over time
  const getPerformanceData = () => {
    switch (selectedTimeRange) {
      case '1h':
        return performanceHistory.slice(-6);
      case '6h':
        return performanceHistory.slice(-12);
      case '24h':
        return performanceHistory;
      case '7d':
        // Generate weekly data
        return Array.from({ length: 7 }, (_, i) => ({
          time: `${7 - i}天前`,
          cpu: 40 + Math.random() * 30,
          memory: 50 + Math.random() * 30,
          modelAccuracy: 94 + Math.random() * 4
        }));
      default:
        return performanceHistory;
    }
  };

  return (
    <div className="glass-card rounded-2xl p-8 animate-fade-in-up">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Monitor className="w-6 h-6 text-blue-400" />
            系统性能监控中心
          </h3>
          <p className="text-gray-300">实时监控系统运行状态和性能指标</p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* System Health Indicator */}
          <div className="flex items-center gap-2">
            <div 
              className={`w-3 h-3 rounded-full performance-dot ${systemHealth.status}`}
              style={{ backgroundColor: systemHealth.color }}
            ></div>
            <span className="text-sm font-medium" style={{ color: systemHealth.color }}>
              {systemHealth.label}
            </span>
          </div>

          {/* Time Range Selector */}
          <div className="flex gap-1">
            {['1h', '6h', '24h', '7d'].map(range => (
              <button
                key={range}
                onClick={() => setSelectedTimeRange(range as any)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  selectedTimeRange === range
                    ? 'bg-blue-500/30 text-blue-300 border border-blue-400/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="btn-control"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Real-time Metrics Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {[
          {
            label: 'CPU使用率',
            value: `${metrics.systemLoad.toFixed(1)}%`,
            icon: Cpu,
            color: metrics.systemLoad > 80 ? '#ef4444' : metrics.systemLoad > 60 ? '#f59e0b' : '#10b981',
            trend: Math.random() > 0.5 ? 'up' : 'down',
            change: `${(Math.random() * 5).toFixed(1)}%`
          },
          {
            label: '内存使用',
            value: `${metrics.memoryUsage.toFixed(1)}%`,
            icon: MemoryStick,
            color: metrics.memoryUsage > 85 ? '#ef4444' : metrics.memoryUsage > 70 ? '#f59e0b' : '#10b981',
            trend: Math.random() > 0.5 ? 'up' : 'down',
            change: `${(Math.random() * 3).toFixed(1)}%`
          },
          {
            label: '网络吞吐',
            value: `${metrics.throughput} MB/s`,
            icon: Wifi,
            color: '#3b82f6',
            trend: 'up',
            change: `${(Math.random() * 10).toFixed(1)}%`
          },
          {
            label: '模型精度',
            value: `${metrics.modelAccuracy.toFixed(1)}%`,
            icon: TrendingUp,
            color: '#10b981',
            trend: 'up',
            change: `${(Math.random() * 2).toFixed(1)}%`
          },
          {
            label: '活跃连接',
            value: metrics.activeConnections.toString(),
            icon: Server,
            color: '#8b5cf6',
            trend: Math.random() > 0.5 ? 'up' : 'down',
            change: `${Math.floor(Math.random() * 5)}`
          }
        ].map((metric, index) => (
          <div key={index} className="data-card rounded-xl p-4 metric-indicator">
            <div className="flex items-center justify-between mb-3">
              <metric.icon className="w-5 h-5" style={{ color: metric.color }} />
              <div className="flex items-center gap-1 text-xs">
                {metric.trend === 'up' ? (
                  <TrendingUp className="w-3 h-3 text-green-400" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-red-400" />
                )}
                <span className={metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}>
                  {metric.change}
                </span>
              </div>
            </div>
            <div className="text-xl font-bold text-white mb-1">{metric.value}</div>
            <div className="text-xs text-gray-400">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        {/* System Resources Chart */}
        <div className="data-card rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-400" />
            系统资源使用趋势
          </h4>
          <div className="chart-container h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={getPerformanceData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fill: '#e5e7eb', fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                  formatter={(value: any, name) => [`${value.toFixed(1)}%`, name === 'cpu' ? 'CPU' : name === 'memory' ? '内存' : '网络']}
                />
                <Area 
                  type="monotone" 
                  dataKey="cpu" 
                  stackId="1"
                  stroke="#ef4444" 
                  fill="url(#cpuGradient)"
                  name="CPU"
                />
                <Area 
                  type="monotone" 
                  dataKey="memory" 
                  stackId="1"
                  stroke="#f59e0b" 
                  fill="url(#memoryGradient)"
                  name="内存"
                />
                <defs>
                  <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="memoryGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Model Performance Chart */}
        <div className="data-card rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-400" />
            AI模型性能指标
          </h4>
          <div className="chart-container h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={getPerformanceData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fill: '#e5e7eb', fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  yAxisId="left"
                  tick={{ fill: '#e5e7eb', fontSize: 12 }}
                  domain={['dataMin - 1', 'dataMax + 1']}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: '#e5e7eb', fontSize: 12 }}
                  domain={[0, 'dataMax + 20']}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                  formatter={(value: any, name) => [
                    `${value.toFixed(1)}${name === 'modelAccuracy' ? '%' : ' MB/s'}`, 
                    name === 'modelAccuracy' ? '模型精度' : '吞吐量'
                  ]}
                />
                <Line 
                  type="monotone" 
                  dataKey="modelAccuracy" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 4 }}
                  name="模型精度"
                  yAxisId="left"
                />
                <Line 
                  type="monotone" 
                  dataKey="throughput" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', r: 3 }}
                  name="吞吐量"
                  yAxisId="right"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Resource Distribution & Training Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resource Usage Distribution */}
        <div className="data-card rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-purple-400" />
            资源分配概览
          </h4>
          <div className="flex items-center gap-6">
            <div className="chart-container h-48 flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={resourceUsage}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {resourceUsage.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #374151',
                      borderRadius: '12px',
                      color: '#fff'
                    }}
                    formatter={(value: any) => [`${value}%`, '使用率']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {resourceUsage.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-white text-sm">{item.name}</span>
                  <span className="text-gray-400 text-sm">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training Progress */}
        <div className="data-card rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            AI训练状态
          </h4>
          {trainingProgress ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">模型: {trainingProgress.modelId}</span>
                <div className="flex items-center gap-2">
                  {trainingProgress.status === 'training' && (
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  )}
                  <span className={`text-sm font-medium ${
                    trainingProgress.status === 'training' ? 'text-green-400' :
                    trainingProgress.status === 'completed' ? 'text-blue-400' :
                    trainingProgress.status === 'paused' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {trainingProgress.status === 'training' ? '训练中' :
                     trainingProgress.status === 'completed' ? '已完成' :
                     trainingProgress.status === 'paused' ? '已暂停' : '失败'}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">进度</span>
                  <span className="text-white">{trainingProgress.epoch}/{trainingProgress.totalEpochs}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500 animate-progress-pulse"
                    style={{ 
                      width: `${(trainingProgress.epoch / trainingProgress.totalEpochs) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">训练损失</div>
                  <div className="text-lg font-bold text-green-400">{trainingProgress.loss.toFixed(3)}</div>
                </div>
                <div className="bg-black/20 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">验证精度</div>
                  <div className="text-lg font-bold text-blue-400">{trainingProgress.validationAccuracy.toFixed(1)}%</div>
                </div>
              </div>

              {trainingProgress.status === 'training' && (
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>预计剩余: {Math.floor(trainingProgress.eta / 60)}分{trainingProgress.eta % 60}秒</span>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-400 py-8">
              <Activity className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>当前没有活跃的训练任务</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SystemPerformancePanel;