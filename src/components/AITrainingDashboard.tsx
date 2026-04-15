import React, { useState, useEffect } from 'react';
import { useRealTimeData } from './RealTimeDataProvider';
import { Brain, Play, Pause, Square, BarChart3, TrendingUp, Clock, Zap, Layers, Settings, Download, RefreshCw, Activity, Target, Cpu, MemoryStick, HardDrive } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

interface ModelInfo {
  id: string;
  name: string;
  architecture: string;
  dataset: string;
  status: 'training' | 'completed' | 'paused' | 'failed';
  progress: number;
  accuracy: number;
  loss: number;
  eta: number;
  startTime: number;
}

export const AITrainingDashboard: React.FC = () => {
  const { trainingProgress, metrics } = useRealTimeData();
  const [selectedModel, setSelectedModel] = useState<string>('gnn-v2.2');
  const [viewMode, setViewMode] = useState<'overview' | 'detailed' | 'comparison'>('overview');

  // Mock model management data
  const [models] = useState<ModelInfo[]>([
    {
      id: 'gnn-v2.2',
      name: 'GNN v2.2 (当前)',
      architecture: 'Graph Neural Network',
      dataset: 'Perovskite-50K',
      status: 'training',
      progress: 67,
      accuracy: 94.8,
      loss: 0.142,
      eta: 2340,
      startTime: Date.now() - 3600000
    },
    {
      id: 'gnn-v2.1',
      name: 'GNN v2.1',
      architecture: 'Graph Neural Network',
      dataset: 'Perovskite-45K',
      status: 'completed',
      progress: 100,
      accuracy: 96.8,
      loss: 0.098,
      eta: 0,
      startTime: Date.now() - 86400000
    },
    {
      id: 'transformer-v1.0',
      name: 'Transformer v1.0',
      architecture: 'Multi-Head Attention',
      dataset: 'Mixed-Materials',
      status: 'paused',
      progress: 34,
      accuracy: 89.2,
      loss: 0.234,
      eta: 4800,
      startTime: Date.now() - 7200000
    },
    {
      id: 'cnn-v3.0',
      name: 'CNN v3.0',
      architecture: 'Convolutional Neural Network',
      dataset: 'Crystal-Structure',
      status: 'failed',
      progress: 23,
      accuracy: 78.5,
      loss: 0.456,
      eta: 0,
      startTime: Date.now() - 14400000
    }
  ]);

  // Training metrics history
  const [metricsHistory] = useState(() => {
    const history = [];
    for (let i = 0; i < 50; i++) {
      const epoch = i + 1;
      history.push({
        epoch,
        trainLoss: Math.max(0.05, 2.5 * Math.exp(-epoch * 0.08) + Math.random() * 0.1),
        valLoss: Math.max(0.08, 2.8 * Math.exp(-epoch * 0.07) + Math.random() * 0.15),
        trainAcc: Math.min(99, 60 + (1 - Math.exp(-epoch * 0.1)) * 35 + Math.random() * 2),
        valAcc: Math.min(98, 55 + (1 - Math.exp(-epoch * 0.09)) * 38 + Math.random() * 3),
        learningRate: 0.001 * Math.exp(-epoch * 0.02),
        time: new Date(Date.now() - (50 - i) * 60000).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
      });
    }
    return history;
  });

  // Resource utilization data
  const resourceData = [
    { name: 'GPU 0', usage: 87, memory: 12.5, total: 16 },
    { name: 'GPU 1', usage: 92, memory: 14.8, total: 16 },
    { name: 'GPU 2', usage: 78, memory: 10.2, total: 16 },
    { name: 'GPU 3', usage: 85, memory: 13.1, total: 16 }
  ];

  const modelComparison = [
    { model: 'GNN v2.2', accuracy: 94.8, speed: 2.3, memory: 12.5 },
    { model: 'GNN v2.1', accuracy: 96.8, speed: 1.8, memory: 14.2 },
    { model: 'Transformer', accuracy: 89.2, speed: 4.1, memory: 18.7 },
    { model: 'CNN v3.0', accuracy: 78.5, speed: 1.2, memory: 8.9 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'training': return '#10b981';
      case 'completed': return '#3b82f6';
      case 'paused': return '#f59e0b';
      case 'failed': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'training': return '训练中';
      case 'completed': return '已完成';
      case 'paused': return '已暂停';
      case 'failed': return '失败';
      default: return '未知';
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="glass-card rounded-2xl p-8 animate-fade-in-up">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Brain className="w-6 h-6 text-purple-400" />
            AI训练进度管理中心
          </h3>
          <p className="text-gray-300">深度学习模型训练监控与管理平台</p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* View Mode Selector */}
          <div className="flex gap-1">
            {[
              { key: 'overview', label: '概览' },
              { key: 'detailed', label: '详细' },
              { key: 'comparison', label: '对比' }
            ].map(mode => (
              <button
                key={mode.key}
                onClick={() => setViewMode(mode.key as any)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  viewMode === mode.key
                    ? 'bg-purple-500/30 text-purple-300 border border-purple-400/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <button className="btn-control">
            <RefreshCw className="w-4 h-4" />
          </button>
          <button className="btn-control">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Training Overview */}
      {viewMode === 'overview' && (
        <div className="space-y-6">
          {/* Active Models Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {models.map((model) => (
              <div 
                key={model.id}
                className={`data-card rounded-xl p-4 cursor-pointer transition-all ${
                  selectedModel === model.id ? 'border-purple-400/30 bg-purple-500/10' : ''
                }`}
                onClick={() => setSelectedModel(model.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getStatusColor(model.status) }}
                    ></div>
                    <span className="text-white text-sm font-medium">{model.name}</span>
                  </div>
                  {model.status === 'training' && (
                    <div className="flex gap-1">
                      <button className="p-1 rounded bg-white/10 hover:bg-white/20">
                        <Pause className="w-3 h-3 text-white" />
                      </button>
                      <button className="p-1 rounded bg-white/10 hover:bg-white/20">
                        <Square className="w-3 h-3 text-white" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">进度</span>
                    <span className="text-white">{model.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${model.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{model.accuracy.toFixed(1)}%</div>
                    <div className="text-xs text-gray-400">精度</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-400">{model.loss.toFixed(3)}</div>
                    <div className="text-xs text-gray-400">损失</div>
                  </div>
                </div>

                {model.status === 'training' && (
                  <div className="mt-3 flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>剩余: {formatTime(model.eta)}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Training Progress Charts */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Loss Curves */}
            <div className="data-card rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                损失函数变化
              </h4>
              <div className="chart-container h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={metricsHistory.slice(-20)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="epoch" 
                      tick={{ fill: '#e5e7eb', fontSize: 12 }}
                    />
                    <YAxis tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '12px',
                        color: '#fff'
                      }}
                      formatter={(value: any, name) => [
                        value.toFixed(3), 
                        name === 'trainLoss' ? '训练损失' : '验证损失'
                      ]}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="trainLoss" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      dot={{ fill: '#10b981', r: 3 }}
                      name="训练损失"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="valLoss" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={{ fill: '#3b82f6', r: 3 }}
                      name="验证损失"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Accuracy Curves */}
            <div className="data-card rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                准确率变化
              </h4>
              <div className="chart-container h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={metricsHistory.slice(-20)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="epoch" 
                      tick={{ fill: '#e5e7eb', fontSize: 12 }}
                    />
                    <YAxis 
                      tick={{ fill: '#e5e7eb', fontSize: 12 }}
                      domain={['dataMin - 5', 'dataMax + 2']}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '12px',
                        color: '#fff'
                      }}
                      formatter={(value: any, name) => [
                        `${value.toFixed(1)}%`, 
                        name === 'trainAcc' ? '训练准确率' : '验证准确率'
                      ]}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="trainAcc" 
                      stroke="#f59e0b" 
                      fill="url(#trainAccGradient)"
                      strokeWidth={2}
                      name="训练准确率"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="valAcc" 
                      stroke="#8b5cf6" 
                      fill="url(#valAccGradient)"
                      strokeWidth={2}
                      name="验证准确率"
                    />
                    <defs>
                      <linearGradient id="trainAccGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="valAccGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Resource Utilization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* GPU Usage */}
            <div className="data-card rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-yellow-400" />
                GPU使用率
              </h4>
              <div className="space-y-4">
                {resourceData.map((gpu, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-medium">{gpu.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-400">
                          {gpu.memory.toFixed(1)}GB / {gpu.total}GB
                        </span>
                        <span className="text-sm font-semibold text-yellow-400">
                          {gpu.usage}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${gpu.usage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Metrics */}
            <div className="data-card rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                系统指标
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-black/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {metrics.modelAccuracy.toFixed(1)}%
                  </div>
                  <div className="text-xs text-gray-400">当前模型精度</div>
                </div>
                <div className="text-center p-3 bg-black/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {metrics.processingSpeed.toFixed(1)}s
                  </div>
                  <div className="text-xs text-gray-400">推理速度</div>
                </div>
                <div className="text-center p-3 bg-black/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {metrics.memoryUsage.toFixed(0)}%
                  </div>
                  <div className="text-xs text-gray-400">内存使用</div>
                </div>
                <div className="text-center p-3 bg-black/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400 mb-1">
                    {metrics.throughput}
                  </div>
                  <div className="text-xs text-gray-400">吞吐量 (MB/s)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Model Comparison View */}
      {viewMode === 'comparison' && (
        <div className="space-y-6">
          <div className="data-card rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-indigo-400" />
              模型性能对比
            </h4>
            <div className="chart-container h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={modelComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="model" 
                    tick={{ fill: '#e5e7eb', fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fill: '#e5e7eb', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #374151',
                      borderRadius: '12px',
                      color: '#fff'
                    }}
                  />
                  <Bar dataKey="accuracy" fill="#10b981" name="准确率 (%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="speed" fill="#3b82f6" name="速度 (s)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="memory" fill="#f59e0b" name="内存 (GB)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AITrainingDashboard;