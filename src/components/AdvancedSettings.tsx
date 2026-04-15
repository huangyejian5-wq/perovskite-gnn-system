import React, { useState, useEffect } from 'react';
import { Palette, Keyboard, Volume2, VolumeX, Monitor, Zap, Moon, Sun, Settings as SettingsIcon, User, Shield, Database, HelpCircle, Info } from 'lucide-react';
import { useTheme, ThemeCustomizer } from './ThemeProvider';

interface ShortcutItem {
  key: string;
  description: string;
  category: 'navigation' | 'actions' | 'general';
}

export const AdvancedSettings: React.FC = () => {
  const { theme, accentColor } = useTheme();
  const [activeTab, setActiveTab] = useState<'theme' | 'shortcuts' | 'audio' | 'accessibility' | 'about'>('theme');
  const [showThemeCustomizer, setShowThemeCustomizer] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [keyboardShortcuts, setKeyboardShortcuts] = useState(true);

  const shortcuts: ShortcutItem[] = [
    { key: 'Ctrl + /', description: '显示快捷键帮助', category: 'general' },
    { key: 'Ctrl + K', description: '快速搜索', category: 'general' },
    { key: 'Ctrl + B', description: '切换侧边栏', category: 'navigation' },
    { key: 'Ctrl + T', description: '新建预测任务', category: 'actions' },
    { key: 'Ctrl + S', description: '保存当前工作', category: 'actions' },
    { key: 'Ctrl + E', description: '导出数据', category: 'actions' },
    { key: 'Alt + 1-6', description: '快速切换页面', category: 'navigation' },
    { key: 'Esc', description: '关闭弹窗/返回', category: 'general' },
    { key: 'F11', description: '全屏模式', category: 'general' },
    { key: 'Ctrl + R', description: '刷新数据', category: 'actions' }
  ];

  // Global keyboard shortcuts
  useEffect(() => {
    if (!keyboardShortcuts) return;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case '/':
            e.preventDefault();
            setActiveTab('shortcuts');
            break;
          case 'k':
            e.preventDefault();
            // Trigger search modal
            break;
          case 'b':
            e.preventDefault();
            // Toggle sidebar
            break;
          case 't':
            e.preventDefault();
            // New prediction task
            break;
          case 's':
            e.preventDefault();
            // Save work
            break;
          case 'e':
            e.preventDefault();
            // Export data
            break;
        }
      }
      
      if (e.altKey) {
        const num = parseInt(e.key);
        if (num >= 1 && num <= 6) {
          e.preventDefault();
          // Navigate to page
        }
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [keyboardShortcuts]);

  const tabs = [
    { key: 'theme', label: '主题设置', icon: Palette },
    { key: 'shortcuts', label: '快捷键', icon: Keyboard },
    { key: 'audio', label: '音效设置', icon: Volume2 },
    { key: 'accessibility', label: '无障碍', icon: Shield },
    { key: 'about', label: '关于', icon: Info }
  ];

  const groupedShortcuts = shortcuts.reduce((acc, shortcut) => {
    if (!acc[shortcut.category]) {
      acc[shortcut.category] = [];
    }
    acc[shortcut.category].push(shortcut);
    return acc;
  }, {} as Record<string, ShortcutItem[]>);

  const categoryLabels = {
    navigation: '导航',
    actions: '操作',
    general: '通用'
  };

  return (
    <div className="container-fluid space-y-8 py-8">
      {/* Header */}
      <div className="glass-card rounded-2xl p-8 animate-fade-in-up">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-pulse-glow">
            <SettingsIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              高级设置
            </h1>
            <p className="text-lg text-gray-300 mt-1">
              个性化定制您的工作环境和使用体验
            </p>
          </div>
        </div>
      </div>

      {/* Settings Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Tabs */}
        <div className="lg:col-span-1">
          <div className="glass-card rounded-2xl p-6 animate-fade-in-up animate-delay-100">
            <h3 className="text-lg font-semibold text-white mb-4">设置分类</h3>
            <nav className="space-y-2">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/20 border border-purple-400/30 text-white'
                      : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="glass-card rounded-2xl p-8 animate-fade-in-up animate-delay-200">
            
            {/* Theme Settings */}
            {activeTab === 'theme' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">主题与外观</h2>
                    <p className="text-gray-300">自定义界面主题和视觉效果</p>
                  </div>
                  <button
                    onClick={() => setShowThemeCustomizer(true)}
                    className="btn-primary"
                  >
                    <Palette className="w-4 h-4 mr-2" />
                    打开主题定制器
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="data-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                      当前主题
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">主题模式</span>
                        <span className="text-white font-medium capitalize">{theme}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">主题色</span>
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-4 h-4 rounded-full border border-white/20"
                            style={{ backgroundColor: `var(--accent-${accentColor})` }}
                          ></div>
                          <span className="text-white font-medium capitalize">{accentColor}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="data-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Monitor className="w-5 h-5" />
                      显示设置
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">高对比度</span>
                        <div className="w-10 h-6 bg-gray-600 rounded-full relative">
                          <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">大字体</span>
                        <div className="w-10 h-6 bg-gray-600 rounded-full relative">
                          <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Keyboard Shortcuts */}
            {activeTab === 'shortcuts' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">键盘快捷键</h2>
                    <p className="text-gray-300">提高工作效率的快捷操作</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300 text-sm">启用快捷键</span>
                    <button
                      onClick={() => setKeyboardShortcuts(!keyboardShortcuts)}
                      className={`relative w-10 h-6 rounded-full transition-colors ${
                        keyboardShortcuts ? 'bg-purple-500' : 'bg-gray-600'
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          keyboardShortcuts ? 'translate-x-5' : 'translate-x-1'
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {Object.entries(groupedShortcuts).map(([category, items]) => (
                    <div key={category} className="data-card rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        {categoryLabels[category as keyof typeof categoryLabels]}
                      </h3>
                      <div className="space-y-3">
                        {items.map((shortcut, index) => (
                          <div key={index} className="flex items-center justify-between py-2">
                            <span className="text-gray-300">{shortcut.description}</span>
                            <div className="flex items-center gap-1">
                              {shortcut.key.split(' + ').map((key, i) => (
                                <React.Fragment key={i}>
                                  {i > 0 && <span className="text-gray-500 mx-1">+</span>}
                                  <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-xs font-mono">
                                    {key}
                                  </kbd>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Audio Settings */}
            {activeTab === 'audio' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">音效设置</h2>
                  <p className="text-gray-300">配置系统声音和音效反馈</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="data-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                      系统音效
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">启用音效</span>
                        <button
                          onClick={() => setSoundEnabled(!soundEnabled)}
                          className={`relative w-10 h-6 rounded-full transition-colors ${
                            soundEnabled ? 'bg-purple-500' : 'bg-gray-600'
                          }`}
                        >
                          <div
                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              soundEnabled ? 'translate-x-5' : 'translate-x-1'
                            }`}
                          ></div>
                        </button>
                      </div>
                      
                      {soundEnabled && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">音量</span>
                            <span className="text-white font-medium">{Math.round(volume * 100)}%</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            className="w-full h-2 bg-gray-600 rounded-lg appearance-none slider"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="data-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">音效类型</h3>
                    <div className="space-y-3">
                      {[
                        { name: '按钮点击音', enabled: true },
                        { name: '通知提示音', enabled: true },
                        { name: '错误警告音', enabled: true },
                        { name: '成功完成音', enabled: false },
                        { name: '数据加载音', enabled: false }
                      ].map((sound, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-300">{sound.name}</span>
                          <div className={`w-8 h-5 rounded-full ${sound.enabled ? 'bg-purple-500' : 'bg-gray-600'} relative`}>
                            <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${sound.enabled ? 'translate-x-3' : 'translate-x-0.5'}`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Accessibility */}
            {activeTab === 'accessibility' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">无障碍设置</h2>
                  <p className="text-gray-300">提供更好的无障碍访问体验</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="data-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">视觉辅助</h3>
                    <div className="space-y-4">
                      {[
                        { name: '减少动画', description: '降低动画效果强度' },
                        { name: '高对比度', description: '增强文本可读性' },
                        { name: '大字体', description: '放大界面文字' },
                        { name: '颜色指示', description: '用形状辅助颜色信息' }
                      ].map((option, index) => (
                        <div key={index} className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="text-white font-medium">{option.name}</div>
                            <div className="text-gray-400 text-sm">{option.description}</div>
                          </div>
                          <div className="w-10 h-6 bg-gray-600 rounded-full relative ml-4">
                            <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="data-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">交互辅助</h3>
                    <div className="space-y-4">
                      {[
                        { name: '键盘导航', description: '支持完整键盘操作' },
                        { name: '屏幕阅读器', description: '兼容辅助阅读软件' },
                        { name: '焦点指示', description: '明显的焦点状态' },
                        { name: '长按延迟', description: '调整长按触发时间' }
                      ].map((option, index) => (
                        <div key={index} className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="text-white font-medium">{option.name}</div>
                            <div className="text-gray-400 text-sm">{option.description}</div>
                          </div>
                          <div className="w-10 h-6 bg-purple-500 rounded-full relative ml-4">
                            <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* About */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">关于系统</h2>
                  <p className="text-gray-300">钙钛矿GNN预测系统详细信息</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="data-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">系统信息</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">版本号</span>
                        <span className="text-white font-medium">v2.1.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">构建日期</span>
                        <span className="text-white font-medium">2024-01-15</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">技术栈</span>
                        <span className="text-white font-medium">React + TypeScript</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">AI引擎</span>
                        <span className="text-white font-medium">Graph Neural Network</span>
                      </div>
                    </div>
                  </div>

                  <div className="data-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">性能指标</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">预测精度</span>
                        <span className="text-green-400 font-bold">96.1%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">处理速度</span>
                        <span className="text-blue-400 font-bold">2.3s</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">数据库容量</span>
                        <span className="text-purple-400 font-bold">47,329</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">成功率</span>
                        <span className="text-orange-400 font-bold">98.7%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="data-card rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">开发团队</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white font-medium">AI算法团队</div>
                      <div className="text-gray-400 text-sm">深度学习与GNN研发</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Database className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white font-medium">数据科学团队</div>
                      <div className="text-gray-400 text-sm">材料数据库构建</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Monitor className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white font-medium">前端开发团队</div>
                      <div className="text-gray-400 text-sm">用户界面与体验</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Theme Customizer Modal */}
      <ThemeCustomizer 
        isOpen={showThemeCustomizer} 
        onClose={() => setShowThemeCustomizer(false)} 
      />
    </div>
  );
};

export default AdvancedSettings;