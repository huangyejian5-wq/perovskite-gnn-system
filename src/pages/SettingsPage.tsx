import React, { useState } from 'react';
import { Settings, User, Bell, Palette, Globe, Shield, Database, Cpu, Save, RotateCcw, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AdvancedSettings } from '../components/AdvancedSettings';

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    // 通用设置
    general: {
      language: 'zh-CN',
      timezone: 'Asia/Shanghai',
      theme: 'dark',
      autoSave: true,
      notifications: true
    },
    // 用户偏好
    preferences: {
      defaultView: 'dashboard',
      chartType: 'interactive',
      dataRefreshRate: 30,
      showHints: true,
      compactMode: false
    },
    // 系统配置
    system: {
      maxConcurrentJobs: 5,
      cacheSize: 1024,
      backupFrequency: 'daily',
      logLevel: 'info',
      enableGPU: true
    },
    // 安全设置
    security: {
      sessionTimeout: 60,
      twoFactorAuth: false,
      dataEncryption: true,
      auditLog: true
    },
    // 模型配置
    model: {
      defaultModel: 'GNN-v2',
      batchSize: 32,
      confidenceThreshold: 0.8,
      useEnsemble: true
    }
  });
  
  const [savedSettings, setSavedSettings] = useState({ ...settings });
  const [hasChanges, setHasChanges] = useState(false);
  
  if (showAdvanced) {
    return <AdvancedSettings />;
  }

  const updateSetting = (category: string, key: string, value: any) => {
    const newSettings = {
      ...settings,
      [category]: {
        ...settings[category as keyof typeof settings],
        [key]: value
      }
    };
    setSettings(newSettings);
    setHasChanges(JSON.stringify(newSettings) !== JSON.stringify(savedSettings));
  };

  const saveSettings = () => {
    setSavedSettings({ ...settings });
    setHasChanges(false);
    // 这里可以添加保存到后端的逻辑
    console.log('Settings saved:', settings);
  };

  const resetSettings = () => {
    setSettings({ ...savedSettings });
    setHasChanges(false);
  };

  const tabs = [
    { id: 'general', name: '通用设置', icon: Settings },
    { id: 'preferences', name: '用户偏好', icon: User },
    { id: 'system', name: '系统配置', icon: Cpu },
    { id: 'security', name: '安全设置', icon: Shield },
    { id: 'model', name: '模型配置', icon: Database }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* 页面头部 */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Settings className="w-8 h-8 text-blue-400" />
            系统设置
          </h1>
          <p className="text-gray-400 mt-2">配置系统参数和用户偏好设置</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAdvanced(true)}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <Palette className="w-4 h-4" />
            高级设置
          </button>
          
          {hasChanges && (
            <>
              <button
                onClick={resetSettings}
                className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                重置
              </button>
              <button
                onClick={saveSettings}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Save className="w-4 h-4" />
                保存更改
              </button>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 侧边栏导航 */}
        <div className="lg:col-span-1">
          <div className="glass-card rounded-xl p-6">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* 设置内容 */}
        <div className="lg:col-span-3">
          <div className="glass-card rounded-xl p-6">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-semibold text-white">通用设置</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      界面语言
                    </label>
                    <select
                      value={settings.general.language}
                      onChange={(e) => updateSetting('general', 'language', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="zh-CN">简体中文</option>
                      <option value="en-US">English</option>
                      <option value="ja-JP">日本語</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      时区设置
                    </label>
                    <select
                      value={settings.general.timezone}
                      onChange={(e) => updateSetting('general', 'timezone', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Asia/Shanghai">北京时间 (UTC+8)</option>
                      <option value="America/New_York">纽约时间 (UTC-5)</option>
                      <option value="Europe/London">伦敦时间 (UTC+0)</option>
                      <option value="Asia/Tokyo">东京时间 (UTC+9)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      主题设置
                    </label>
                    <select
                      value={settings.general.theme}
                      onChange={(e) => updateSetting('general', 'theme', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="dark">深色主题</option>
                      <option value="light">浅色主题</option>
                      <option value="auto">跟随系统</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Save className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">自动保存</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.general.autoSave}
                          onChange={(e) => updateSetting('general', 'autoSave', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="w-5 h-5 text-yellow-400" />
                        <span className="text-gray-300">桌面通知</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.general.notifications}
                          onChange={(e) => updateSetting('general', 'notifications', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-green-400" />
                  <h2 className="text-2xl font-semibold text-white">用户偏好</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      默认首页视图
                    </label>
                    <select
                      value={settings.preferences.defaultView}
                      onChange={(e) => updateSetting('preferences', 'defaultView', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="dashboard">仪表板</option>
                      <option value="prediction">性能预测</option>
                      <option value="database">材料数据库</option>
                      <option value="analysis">数据分析</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      图表类型偏好
                    </label>
                    <select
                      value={settings.preferences.chartType}
                      onChange={(e) => updateSetting('preferences', 'chartType', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="interactive">交互式图表</option>
                      <option value="static">静态图表</option>
                      <option value="minimal">简化图表</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      数据刷新频率 (秒)
                    </label>
                    <input
                      type="number"
                      min="5"
                      max="300"
                      value={settings.preferences.dataRefreshRate}
                      onChange={(e) => updateSetting('preferences', 'dataRefreshRate', parseInt(e.target.value))}
                      className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">显示操作提示</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.preferences.showHints}
                          onChange={(e) => updateSetting('preferences', 'showHints', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">紧凑模式</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.preferences.compactMode}
                          onChange={(e) => updateSetting('preferences', 'compactMode', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'system' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="w-6 h-6 text-purple-400" />
                  <h2 className="text-2xl font-semibold text-white">系统配置</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      最大并发任务数
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={settings.system.maxConcurrentJobs}
                      onChange={(e) => updateSetting('system', 'maxConcurrentJobs', parseInt(e.target.value))}
                      className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      缓存大小 (MB)
                    </label>
                    <input
                      type="number"
                      min="256"
                      max="8192"
                      value={settings.system.cacheSize}
                      onChange={(e) => updateSetting('system', 'cacheSize', parseInt(e.target.value))}
                      className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      备份频率
                    </label>
                    <select
                      value={settings.system.backupFrequency}
                      onChange={(e) => updateSetting('system', 'backupFrequency', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="hourly">每小时</option>
                      <option value="daily">每天</option>
                      <option value="weekly">每周</option>
                      <option value="monthly">每月</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      日志级别
                    </label>
                    <select
                      value={settings.system.logLevel}
                      onChange={(e) => updateSetting('system', 'logLevel', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="debug">调试</option>
                      <option value="info">信息</option>
                      <option value="warning">警告</option>
                      <option value="error">错误</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">启用GPU加速</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.system.enableGPU}
                          onChange={(e) => updateSetting('system', 'enableGPU', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-red-400" />
                  <h2 className="text-2xl font-semibold text-white">安全设置</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      会话超时 (分钟)
                    </label>
                    <input
                      type="number"
                      min="15"
                      max="480"
                      value={settings.security.sessionTimeout}
                      onChange={(e) => updateSetting('security', 'sessionTimeout', parseInt(e.target.value))}
                      className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">双因素认证</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.security.twoFactorAuth}
                          onChange={(e) => updateSetting('security', 'twoFactorAuth', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">数据加密</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.security.dataEncryption}
                          onChange={(e) => updateSetting('security', 'dataEncryption', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">审计日志</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.security.auditLog}
                          onChange={(e) => updateSetting('security', 'auditLog', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'model' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-semibold text-white">模型配置</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      默认预测模型
                    </label>
                    <select
                      value={settings.model.defaultModel}
                      onChange={(e) => updateSetting('model', 'defaultModel', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="GNN-v2">GNN v2.0 (推荐)</option>
                      <option value="GNN-v1">GNN v1.5 (稳定版)</option>
                      <option value="Transformer">Transformer</option>
                      <option value="Ensemble">集成模型</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      批处理大小
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="128"
                      value={settings.model.batchSize}
                      onChange={(e) => updateSetting('model', 'batchSize', parseInt(e.target.value))}
                      className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      置信度阈值
                    </label>
                    <input
                      type="number"
                      min="0.1"
                      max="1.0"
                      step="0.1"
                      value={settings.model.confidenceThreshold}
                      onChange={(e) => updateSetting('model', 'confidenceThreshold', parseFloat(e.target.value))}
                      className="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">使用集成学习</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.model.useEnsemble}
                          onChange={(e) => updateSetting('model', 'useEnsemble', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 保存状态提示 */}
      {!hasChanges && (
        <div className="fixed bottom-6 right-6">
          <div className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
            <CheckCircle className="w-5 h-5" />
            所有设置已保存
          </div>
        </div>
      )}
    </div>
  );
};