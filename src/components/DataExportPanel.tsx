import React, { useState, useRef } from 'react';
import { Download, FileText, Image, Database, BarChart3, Settings, Calendar, Filter, CheckCircle, AlertCircle, Clock, Loader, FileSpreadsheet, FileImage, FileJson, Package, Zap, TrendingUp, Share2, Copy, Mail, Cloud, Save, Trash2, RefreshCw } from 'lucide-react';
import { useRealTimeData } from './RealTimeDataProvider';

interface ExportFormat {
  type: 'pdf' | 'excel' | 'csv' | 'json' | 'png' | 'svg';
  name: string;
  icon: React.ReactNode;
  description: string;
  size?: string;
}

interface ExportTask {
  id: string;
  name: string;
  format: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
  progress: number;
  createdAt: Date;
  fileSize?: string;
  downloadUrl?: string;
  cloudUrl?: string;
  shareToken?: string;
  metadata?: {
    dataPoints: number;
    processingTime: number;
    compression: string;
  };
}

export const DataExportPanel: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { metrics } = useRealTimeData();
  const [selectedFormats, setSelectedFormats] = useState<Set<string>>(new Set());
  const [exportTasks, setExportTasks] = useState<ExportTask[]>([]);
  const [activeTab, setActiveTab] = useState<'quick' | 'advanced' | 'history' | 'templates'>('quick');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [selectedMetrics, setSelectedMetrics] = useState<Set<string>>(new Set([
    'modelAccuracy', 'systemLoad', 'memoryUsage', 'throughput'
  ]));
  const [exportSettings, setExportSettings] = useState({
    includeMetadata: true,
    compression: 'auto',
    quality: 'high',
    cloudSync: false,
    autoShare: false,
    watermark: false
  });
  const [savedTemplates, setSavedTemplates] = useState<Array<{
    id: string;
    name: string;
    formats: string[];
    metrics: string[];
    settings: any;
  }>>([]);
  const exportRef = useRef<number>(0);

  if (!isOpen) return null;

  const exportFormats: ExportFormat[] = [
    {
      type: 'pdf',
      name: 'PDF报告',
      icon: <FileText className="w-5 h-5" />,
      description: '完整的分析报告，包含图表和数据',
      size: '~2-5MB'
    },
    {
      type: 'excel',
      name: 'Excel表格',
      icon: <FileSpreadsheet className="w-5 h-5" />,
      description: '结构化数据表格，便于进一步分析',
      size: '~500KB-2MB'
    },
    {
      type: 'csv',
      name: 'CSV数据',
      icon: <Database className="w-5 h-5" />,
      description: '纯数据格式，兼容所有分析工具',
      size: '~100-500KB'
    },
    {
      type: 'json',
      name: 'JSON数据',
      icon: <FileJson className="w-5 h-5" />,
      description: 'API友好格式，适合程序化处理',
      size: '~200KB-1MB'
    },
    {
      type: 'png',
      name: '图表图片',
      icon: <FileImage className="w-5 h-5" />,
      description: '高清图表截图，适合演示文档',
      size: '~1-3MB'
    },
    {
      type: 'svg',
      name: '矢量图形',
      icon: <FileImage className="w-5 h-5" />,
      description: '可缩放矢量图形，专业印刷质量',
      size: '~500KB-1MB'
    }
  ];

  const availableMetrics = [
    { key: 'modelAccuracy', name: '模型精度', color: '#10b981' },
    { key: 'systemLoad', name: 'CPU使用率', color: '#ef4444' },
    { key: 'memoryUsage', name: '内存使用', color: '#f59e0b' },
    { key: 'throughput', name: '数据吞吐量', color: '#3b82f6' },
    { key: 'activeConnections', name: '活跃连接数', color: '#8b5cf6' },
    { key: 'successRate', name: '成功率', color: '#06b6d4' },
    { key: 'errorRate', name: '错误率', color: '#ec4899' },
    { key: 'processingSpeed', name: '处理速度', color: '#84cc16' }
  ];

  const handleFormatToggle = (format: string) => {
    const newFormats = new Set(selectedFormats);
    if (newFormats.has(format)) {
      newFormats.delete(format);
    } else {
      newFormats.add(format);
    }
    setSelectedFormats(newFormats);
  };

  const handleMetricToggle = (metric: string) => {
    const newMetrics = new Set(selectedMetrics);
    if (newMetrics.has(metric)) {
      newMetrics.delete(metric);
    } else {
      newMetrics.add(metric);
    }
    setSelectedMetrics(newMetrics);
  };

  const generateExportTask = (format: string): ExportTask => {
    const id = `export_${++exportRef.current}_${Date.now()}`;
    const dataPoints = Math.floor(Math.random() * 10000) + 1000;
    const processingTime = Math.floor(Math.random() * 5000) + 1000;
    
    return {
      id,
      name: `${exportFormats.find(f => f.type === format)?.name} - ${new Date().toLocaleDateString()}`,
      format,
      status: 'pending',
      progress: 0,
      createdAt: new Date(),
      fileSize: exportFormats.find(f => f.type === format)?.size,
      shareToken: Math.random().toString(36).substr(2, 9),
      metadata: {
        dataPoints,
        processingTime,
        compression: exportSettings.compression
      }
    };
  };

  const simulateExport = async (task: ExportTask) => {
    // Update task status to processing
    setExportTasks(prev => prev.map(t => 
      t.id === task.id ? { ...t, status: 'processing' as const } : t
    ));

    // Simulate progress with realistic steps
    const steps = [
      { progress: 10, message: '准备数据...' },
      { progress: 30, message: '生成图表...' },
      { progress: 50, message: '应用样式...' },
      { progress: 70, message: '压缩文件...' },
      { progress: 85, message: '上传云端...' },
      { progress: 100, message: '完成' }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 300));
      setExportTasks(prev => prev.map(t => 
        t.id === task.id ? { ...t, progress: step.progress } : t
      ));
    }

    // Complete the task with additional metadata
    setExportTasks(prev => prev.map(t => 
      t.id === task.id ? { 
        ...t, 
        status: 'completed' as const, 
        progress: 100,
        downloadUrl: `#download-${task.id}`,
        cloudUrl: exportSettings.cloudSync ? `https://cloud.perovskite.ai/files/${task.shareToken}` : undefined
      } : t
    ));
  };

  const handleExport = async () => {
    if (selectedFormats.size === 0) return;

    const newTasks = Array.from(selectedFormats).map(format => 
      generateExportTask(format)
    );

    setExportTasks(prev => [...newTasks, ...prev]);

    // Start processing tasks
    for (const task of newTasks) {
      simulateExport(task);
    }
  };

  const handleQuickExport = async (format: string) => {
    const task = generateExportTask(format);
    setExportTasks(prev => [task, ...prev]);
    await simulateExport(task);
  };

  const getStatusIcon = (status: ExportTask['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'processing':
        return <Loader className="w-4 h-4 text-blue-400 animate-spin" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
    }
  };

  const getStatusText = (status: ExportTask['status']) => {
    switch (status) {
      case 'pending':
        return '等待中';
      case 'processing':
        return '处理中';
      case 'completed':
        return '已完成';
      case 'error':
        return '失败';
    }
  };

  const handleCopyShareLink = async (task: ExportTask) => {
    if (task.cloudUrl) {
      await navigator.clipboard.writeText(task.cloudUrl);
      // Show notification
    }
  };

  const handleSendEmail = (task: ExportTask) => {
    const subject = `钙钛矿数据导出: ${task.name}`;
    const body = `您好，\n\n请查收您的数据导出文件：\n\n文件名：${task.name}\n格式：${task.format}\n大小：${task.fileSize}\n下载链接：${task.downloadUrl}\n\n此链接7天内有效。\n\n钙钛矿GNN系统`;
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const handleSaveTemplate = () => {
    const template = {
      id: `template_${Date.now()}`,
      name: `模板_${new Date().toLocaleDateString()}`,
      formats: Array.from(selectedFormats),
      metrics: Array.from(selectedMetrics),
      settings: exportSettings
    };
    setSavedTemplates(prev => [...prev, template]);
  };

  const handleLoadTemplate = (template: any) => {
    setSelectedFormats(new Set(template.formats));
    setSelectedMetrics(new Set(template.metrics));
    setExportSettings(template.settings);
    setActiveTab('advanced');
  };

  const handleDeleteTask = (taskId: string) => {
    setExportTasks(prev => prev.filter(t => t.id !== taskId));
  };

  const handleRetryTask = async (task: ExportTask) => {
    setExportTasks(prev => prev.map(t => 
      t.id === task.id ? { ...t, status: 'pending' as const, progress: 0 } : t
    ));
    await simulateExport(task);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Panel */}
      <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-hidden animate-scale-in">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">数据导出中心</h2>
              <p className="text-gray-300 text-sm">导出分析数据和生成专业报告</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
          >
            <span className="text-white text-lg">×</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10">
          {[
            { key: 'quick', label: '快速导出', icon: Zap },
            { key: 'advanced', label: '高级选项', icon: Settings },
            { key: 'templates', label: '导出模板', icon: Save },
            { key: 'history', label: '导出历史', icon: Clock }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex items-center gap-2 px-6 py-4 transition-colors ${
                activeTab === tab.key
                  ? 'bg-blue-500/20 text-blue-300 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          
          {/* Quick Export Tab */}
          {activeTab === 'quick' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">快速导出选项</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {exportFormats.map(format => (
                    <button
                      key={format.type}
                      onClick={() => handleQuickExport(format.type)}
                      className="data-card rounded-xl p-4 hover:bg-white/10 transition-all duration-300 text-left group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                          {format.icon}
                        </div>
                        <div>
                          <div className="font-medium text-white">{format.name}</div>
                          <div className="text-xs text-gray-400">{format.size}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">{format.description}</p>
                      <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Download className="w-3 h-3 text-blue-400" />
                        <span className="text-xs text-blue-400">点击立即导出</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Metrics Preview */}
              <div className="data-card rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  当前数据概览
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-sm text-gray-400 mb-1">模型精度</div>
                    <div className="text-xl font-bold text-green-400">{metrics.modelAccuracy.toFixed(1)}%</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-sm text-gray-400 mb-1">系统负载</div>
                    <div className="text-xl font-bold text-blue-400">{metrics.systemLoad.toFixed(1)}%</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-sm text-gray-400 mb-1">数据吞吐</div>
                    <div className="text-xl font-bold text-purple-400">{metrics.throughput} MB/s</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-sm text-gray-400 mb-1">活跃连接</div>
                    <div className="text-xl font-bold text-orange-400">{metrics.activeConnections}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Advanced Export Tab */}
          {activeTab === 'advanced' && (
            <div className="space-y-6">
              
              {/* Format Selection */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-400" />
                  导出格式选择
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {exportFormats.map(format => (
                    <label
                      key={format.type}
                      className={`data-card rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                        selectedFormats.has(format.type)
                          ? 'bg-blue-500/20 border-blue-400/30'
                          : 'hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedFormats.has(format.type)}
                          onChange={() => handleFormatToggle(format.type)}
                          className="w-4 h-4 text-blue-500 bg-transparent border-gray-400 rounded focus:ring-blue-500"
                        />
                        <div className="text-blue-400">{format.icon}</div>
                        <div className="flex-1">
                          <div className="font-medium text-white">{format.name}</div>
                          <div className="text-xs text-gray-400">{format.size}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 mt-2 ml-7">{format.description}</p>
                    </label>
                  ))}
                </div>
              </div>

              {/* Metrics Selection */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  数据指标选择
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {availableMetrics.map(metric => (
                    <label
                      key={metric.key}
                      className={`data-card rounded-xl p-3 cursor-pointer transition-all duration-300 ${
                        selectedMetrics.has(metric.key)
                          ? 'bg-green-500/20 border-green-400/30'
                          : 'hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedMetrics.has(metric.key)}
                          onChange={() => handleMetricToggle(metric.key)}
                          className="w-4 h-4 text-green-500 bg-transparent border-gray-400 rounded focus:ring-green-500"
                        />
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: metric.color }}
                        ></div>
                        <span className="text-white">{metric.name}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Date Range Selection */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  时间范围选择
                </h3>
                <div className="data-card rounded-xl p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">开始日期</label>
                      <input
                        type="datetime-local"
                        value={dateRange.start}
                        onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                        className="w-full bg-black/20 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">结束日期</label>
                      <input
                        type="datetime-local"
                        value={dateRange.end}
                        onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                        className="w-full bg-black/20 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {['1小时', '6小时', '24小时', '7天', '30天'].map(period => (
                      <button
                        key={period}
                        onClick={() => {
                          const now = new Date();
                          const start = new Date();
                          switch (period) {
                            case '1小时':
                              start.setHours(start.getHours() - 1);
                              break;
                            case '6小时':
                              start.setHours(start.getHours() - 6);
                              break;
                            case '24小时':
                              start.setDate(start.getDate() - 1);
                              break;
                            case '7天':
                              start.setDate(start.getDate() - 7);
                              break;
                            case '30天':
                              start.setDate(start.getDate() - 30);
                              break;
                          }
                          setDateRange({
                            start: start.toISOString().slice(0, 16),
                            end: now.toISOString().slice(0, 16)
                          });
                        }}
                        className="px-3 py-1 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white text-sm rounded-lg transition-colors"
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Advanced Export Settings */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-purple-400" />
                  高级设置
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="data-card rounded-xl p-4">
                    <h4 className="text-white font-medium mb-3">文件选项</h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={exportSettings.includeMetadata}
                          onChange={(e) => setExportSettings(prev => ({ ...prev, includeMetadata: e.target.checked }))}
                          className="w-4 h-4 text-blue-500 bg-transparent border-gray-400 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-300">包含元数据</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={exportSettings.watermark}
                          onChange={(e) => setExportSettings(prev => ({ ...prev, watermark: e.target.checked }))}
                          className="w-4 h-4 text-blue-500 bg-transparent border-gray-400 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-300">添加水印</span>
                      </label>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">压缩级别</label>
                        <select
                          value={exportSettings.compression}
                          onChange={(e) => setExportSettings(prev => ({ ...prev, compression: e.target.value }))}
                          className="w-full bg-black/20 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="none">无压缩</option>
                          <option value="low">低压缩</option>
                          <option value="auto">自动</option>
                          <option value="high">高压缩</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">输出质量</label>
                        <select
                          value={exportSettings.quality}
                          onChange={(e) => setExportSettings(prev => ({ ...prev, quality: e.target.value }))}
                          className="w-full bg-black/20 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="draft">草稿</option>
                          <option value="standard">标准</option>
                          <option value="high">高质量</option>
                          <option value="print">印刷级</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="data-card rounded-xl p-4">
                    <h4 className="text-white font-medium mb-3">云端和分享</h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={exportSettings.cloudSync}
                          onChange={(e) => setExportSettings(prev => ({ ...prev, cloudSync: e.target.checked }))}
                          className="w-4 h-4 text-blue-500 bg-transparent border-gray-400 rounded focus:ring-blue-500"
                        />
                        <div className="flex items-center gap-2">
                          <Cloud className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300">同步到云端</span>
                        </div>
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={exportSettings.autoShare}
                          onChange={(e) => setExportSettings(prev => ({ ...prev, autoShare: e.target.checked }))}
                          className="w-4 h-4 text-blue-500 bg-transparent border-gray-400 rounded focus:ring-blue-500"
                        />
                        <div className="flex items-center gap-2">
                          <Share2 className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">自动生成分享链接</span>
                        </div>
                      </label>
                      {exportSettings.cloudSync && (
                        <div className="mt-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                          <div className="flex items-center gap-2 text-blue-300 text-sm">
                            <Cloud className="w-4 h-4" />
                            <span>文件将保存到云端存储7天</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Export Controls */}
              <div className="flex justify-between items-center">
                <button
                  onClick={handleSaveTemplate}
                  className="btn-secondary flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  保存为模板
                </button>
                <button
                  onClick={handleExport}
                  disabled={selectedFormats.size === 0}
                  className={`btn-primary flex items-center gap-2 ${
                    selectedFormats.size === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Download className="w-4 h-4" />
                  开始导出 ({selectedFormats.size} 种格式)
                </button>
              </div>
            </div>
          )}

          {/* Templates Tab */}
          {activeTab === 'templates' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Save className="w-5 h-5 text-green-400" />
                  导出模板
                </h3>
                <div className="text-sm text-gray-400">
                  {savedTemplates.length} 个已保存模板
                </div>
              </div>

              {savedTemplates.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Save className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-400 mb-2">暂无保存的模板</p>
                  <p className="text-sm text-gray-500">在高级选项中配置设置后保存为模板</p>
                  <button
                    onClick={() => setActiveTab('advanced')}
                    className="btn-primary mt-4"
                  >
                    前往高级选项
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {savedTemplates.map((template, index) => (
                    <div key={template.id} className="data-card rounded-xl p-4 hover:bg-white/10 transition-all group">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-medium">{template.name}</h4>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleLoadTemplate(template)}
                            className="p-1 text-blue-400 hover:text-blue-300 transition-colors"
                            title="加载模板"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setSavedTemplates(prev => prev.filter(t => t.id !== template.id))}
                            className="p-1 text-red-400 hover:text-red-300 transition-colors"
                            title="删除模板"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Package className="w-3 h-3 text-blue-400" />
                          <span className="text-gray-400">格式:</span>
                          <div className="flex gap-1">
                            {template.formats.map(format => (
                              <span key={format} className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 text-xs rounded">
                                {format.toUpperCase()}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-3 h-3 text-green-400" />
                          <span className="text-gray-400">指标:</span>
                          <span className="text-gray-300">{template.metrics.length} 项</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Settings className="w-3 h-3 text-purple-400" />
                          <span className="text-gray-400">质量:</span>
                          <span className="text-gray-300">{template.settings.quality}</span>
                          {template.settings.cloudSync && (
                            <span className="px-1.5 py-0.5 bg-green-500/20 text-green-300 text-xs rounded ml-2">
                              云同步
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleLoadTemplate(template)}
                        className="w-full mt-4 btn-secondary text-sm"
                      >
                        使用此模板
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Predefined Templates */}
              <div>
                <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  预设模板
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      name: '研究报告',
                      formats: ['pdf', 'excel'],
                      description: '适合学术论文和研究报告',
                      icon: <FileText className="w-5 h-5 text-blue-400" />
                    },
                    {
                      name: '数据分析',
                      formats: ['csv', 'json', 'excel'],
                      description: '纯数据导出，便于进一步分析',
                      icon: <BarChart3 className="w-5 h-5 text-green-400" />
                    },
                    {
                      name: '演示文档',
                      formats: ['pdf', 'png', 'svg'],
                      description: '适合演示和展示用途',
                      icon: <Image className="w-5 h-5 text-purple-400" />
                    }
                  ].map((preset, index) => (
                    <div key={index} className="data-card rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer group">
                      <div className="flex items-center gap-3 mb-3">
                        {preset.icon}
                        <h5 className="text-white font-medium">{preset.name}</h5>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{preset.description}</p>
                      <div className="flex gap-1 mb-3">
                        {preset.formats.map(format => (
                          <span key={format} className="px-1.5 py-0.5 bg-gray-500/20 text-gray-300 text-xs rounded">
                            {format.toUpperCase()}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          setSelectedFormats(new Set(preset.formats));
                          setActiveTab('advanced');
                        }}
                        className="w-full btn-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        使用模板
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Export History Tab */}
          {activeTab === 'history' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  导出历史
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setExportTasks([])}
                    className="btn-secondary text-sm flex items-center gap-2"
                  >
                    <Trash2 className="w-3 h-3" />
                    清除历史
                  </button>
                  <button
                    onClick={() => setExportTasks(prev => [...prev].reverse())}
                    className="btn-secondary text-sm flex items-center gap-2"
                  >
                    <RefreshCw className="w-3 h-3" />
                    排序
                  </button>
                </div>
              </div>

              {exportTasks.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-400">暂无导出记录</p>
                  <p className="text-sm text-gray-500 mt-1">开始您的第一次数据导出</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {exportTasks.map(task => (
                    <div key={task.id} className="data-card rounded-xl p-4 hover:bg-white/10 transition-all group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(task.status)}
                          <div>
                            <div className="font-medium text-white">{task.name}</div>
                            <div className="text-sm text-gray-400 flex items-center gap-2">
                              <span>{task.createdAt.toLocaleString()}</span>
                              <span>•</span>
                              <span>{task.fileSize}</span>
                              {task.metadata && (
                                <>
                                  <span>•</span>
                                  <span>{task.metadata.dataPoints.toLocaleString()} 数据点</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {task.status === 'completed' && (
                            <>
                              <button 
                                onClick={() => handleCopyShareLink(task)}
                                className="btn-control opacity-0 group-hover:opacity-100 transition-opacity"
                                title="复制分享链接"
                              >
                                <Copy className="w-3 h-3" />
                              </button>
                              <button 
                                onClick={() => handleSendEmail(task)}
                                className="btn-control opacity-0 group-hover:opacity-100 transition-opacity"
                                title="邮件分享"
                              >
                                <Mail className="w-3 h-3" />
                              </button>
                              {task.cloudUrl && (
                                <button className="btn-control opacity-0 group-hover:opacity-100 transition-opacity">
                                  <Cloud className="w-3 h-3 text-blue-400" />
                                </button>
                              )}
                              <button className="btn-primary text-sm flex items-center gap-1">
                                <Download className="w-3 h-3" />
                                下载
                              </button>
                              <button className="btn-control">
                                <Share2 className="w-3 h-3" />
                              </button>
                            </>
                          )}
                          {task.status === 'error' && (
                            <button 
                              onClick={() => handleRetryTask(task)}
                              className="btn-secondary text-sm flex items-center gap-1"
                            >
                              <RefreshCw className="w-3 h-3" />
                              重试
                            </button>
                          )}
                          <button 
                            onClick={() => handleDeleteTask(task.id)}
                            className="btn-control opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-red-300"
                            title="删除记录"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      
                      {task.status === 'processing' && (
                        <div className="mb-3">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-400">正在处理...</span>
                            <span className="text-blue-400">{task.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300 relative"
                              style={{ width: `${task.progress}%` }}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {task.metadata && task.status === 'completed' && (
                        <div className="border-t border-white/10 pt-3 mt-3">
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Database className="w-3 h-3 text-blue-400" />
                              <span className="text-gray-400">数据点:</span>
                              <span className="text-white font-medium">{task.metadata.dataPoints.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-3 h-3 text-green-400" />
                              <span className="text-gray-400">处理时间:</span>
                              <span className="text-white font-medium">{(task.metadata.processingTime / 1000).toFixed(1)}s</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Package className="w-3 h-3 text-purple-400" />
                              <span className="text-gray-400">压缩:</span>
                              <span className="text-white font-medium">{task.metadata.compression}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Export Statistics */}
              {exportTasks.length > 0 && (
                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-green-400" />
                    导出统计
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-black/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-400">{exportTasks.length}</div>
                      <div className="text-xs text-gray-400">总导出数</div>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-400">
                        {exportTasks.filter(t => t.status === 'completed').length}
                      </div>
                      <div className="text-xs text-gray-400">成功完成</div>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-yellow-400">
                        {exportTasks.filter(t => t.status === 'processing').length}
                      </div>
                      <div className="text-xs text-gray-400">处理中</div>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-red-400">
                        {exportTasks.filter(t => t.status === 'error').length}
                      </div>
                      <div className="text-xs text-gray-400">失败</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataExportPanel;