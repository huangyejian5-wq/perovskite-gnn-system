import React, { useState, useEffect, useContext, createContext } from 'react';
import { Palette, Monitor, Zap, Eye, Settings, Moon, Sun, Cpu, Sparkles } from 'lucide-react';

export type ThemeMode = 'dark' | 'light' | 'auto' | 'neon' | 'minimal';
export type AccentColor = 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'cyan';

interface ThemeContextType {
  theme: ThemeMode;
  accentColor: AccentColor;
  animationsEnabled: boolean;
  reducedMotion: boolean;
  setTheme: (theme: ThemeMode) => void;
  setAccentColor: (color: AccentColor) => void;
  setAnimationsEnabled: (enabled: boolean) => void;
  setReducedMotion: (enabled: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as ThemeMode) || 'dark';
  });

  const [accentColor, setAccentColor] = useState<AccentColor>(() => {
    const saved = localStorage.getItem('accentColor');
    return (saved as AccentColor) || 'blue';
  });

  const [animationsEnabled, setAnimationsEnabled] = useState(() => {
    const saved = localStorage.getItem('animationsEnabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [reducedMotion, setReducedMotion] = useState(() => {
    const saved = localStorage.getItem('reducedMotion');
    return saved !== null ? JSON.parse(saved) : false;
  });

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('theme-dark', 'theme-light', 'theme-neon', 'theme-minimal');
    
    // Add current theme class
    root.classList.add(`theme-${theme}`);
    
    // Set accent color
    root.style.setProperty('--accent-primary', `var(--accent-${accentColor})`);
    root.style.setProperty('--accent-primary-rgb', `var(--accent-${accentColor}-rgb)`);
    
    // Handle animations
    if (!animationsEnabled || reducedMotion) {
      root.style.setProperty('--animation-duration', '0s');
      root.style.setProperty('--transition-duration', '0s');
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
    }

    // Auto theme detection
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        root.classList.remove('theme-dark', 'theme-light');
        root.classList.add(e.matches ? 'theme-dark' : 'theme-light');
      };
      
      root.classList.add(mediaQuery.matches ? 'theme-dark' : 'theme-light');
      mediaQuery.addEventListener('change', handleChange);
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, accentColor, animationsEnabled, reducedMotion]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('accentColor', accentColor);
  }, [accentColor]);

  useEffect(() => {
    localStorage.setItem('animationsEnabled', JSON.stringify(animationsEnabled));
  }, [animationsEnabled]);

  useEffect(() => {
    localStorage.setItem('reducedMotion', JSON.stringify(reducedMotion));
  }, [reducedMotion]);

  const value: ThemeContextType = {
    theme,
    accentColor,
    animationsEnabled,
    reducedMotion,
    setTheme,
    setAccentColor,
    setAnimationsEnabled,
    setReducedMotion
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeCustomizer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { 
    theme, 
    accentColor, 
    animationsEnabled, 
    reducedMotion,
    setTheme, 
    setAccentColor, 
    setAnimationsEnabled, 
    setReducedMotion 
  } = useTheme();

  if (!isOpen) return null;

  const themes: { key: ThemeMode; name: string; icon: React.ReactNode; preview: string }[] = [
    { 
      key: 'dark', 
      name: '深色主题', 
      icon: <Moon className="w-4 h-4" />, 
      preview: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' 
    },
    { 
      key: 'light', 
      name: '浅色主题', 
      icon: <Sun className="w-4 h-4" />, 
      preview: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' 
    },
    { 
      key: 'neon', 
      name: '霓虹主题', 
      icon: <Zap className="w-4 h-4" />, 
      preview: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #16213e 100%)' 
    },
    { 
      key: 'minimal', 
      name: '简约主题', 
      icon: <Eye className="w-4 h-4" />, 
      preview: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)' 
    },
    { 
      key: 'auto', 
      name: '自动切换', 
      icon: <Monitor className="w-4 h-4" />, 
      preview: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)' 
    }
  ];

  const accentColors: { key: AccentColor; name: string; color: string; rgb: string }[] = [
    { key: 'blue', name: '科技蓝', color: '#3b82f6', rgb: '59, 130, 246' },
    { key: 'purple', name: '神秘紫', color: '#8b5cf6', rgb: '139, 92, 246' },
    { key: 'green', name: '自然绿', color: '#10b981', rgb: '16, 185, 129' },
    { key: 'orange', name: '活力橙', color: '#f59e0b', rgb: '245, 158, 11' },
    { key: 'pink', name: '温暖粉', color: '#ec4899', rgb: '236, 72, 153' },
    { key: 'cyan', name: '清新青', color: '#06b6d4', rgb: '6, 182, 212' }
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Panel */}
      <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">主题定制</h2>
              <p className="text-gray-300 text-sm">个性化你的界面体验</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
          >
            <span className="text-white text-lg">×</span>
          </button>
        </div>

        <div className="space-y-8">
          {/* Theme Selection */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5" />
              主题模式
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {themes.map(({ key, name, icon, preview }) => (
                <button
                  key={key}
                  onClick={() => setTheme(key)}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                    theme === key
                      ? 'border-purple-400 bg-purple-500/20'
                      : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div 
                    className="w-full h-16 rounded-lg mb-3 border border-white/10"
                    style={{ background: preview }}
                  ></div>
                  <div className="flex items-center gap-2 text-white">
                    {icon}
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                  {theme === key && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Accent Color */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              主题色彩
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {accentColors.map(({ key, name, color }) => (
                <button
                  key={key}
                  onClick={() => setAccentColor(key)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    accentColor === key
                      ? 'border-white/30 bg-white/10'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-full border-2 border-white/20"
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="text-left">
                      <div className="text-white text-sm font-medium">{name}</div>
                      <div className="text-gray-400 text-xs">{color}</div>
                    </div>
                  </div>
                  {accentColor === key && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
                         style={{ backgroundColor: color }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Animation Settings */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              动画设置
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <div>
                  <div className="text-white font-medium">启用动画效果</div>
                  <div className="text-gray-400 text-sm">页面转场和交互动画</div>
                </div>
                <button
                  onClick={() => setAnimationsEnabled(!animationsEnabled)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    animationsEnabled ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      animationsEnabled ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  ></div>
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <div>
                  <div className="text-white font-medium">减少动效</div>
                  <div className="text-gray-400 text-sm">适合对动画敏感的用户</div>
                </div>
                <button
                  onClick={() => setReducedMotion(!reducedMotion)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    reducedMotion ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      reducedMotion ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  ></div>
                </button>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">预览效果</h3>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">钙钛矿GNN预测系统</div>
                  <div className="text-gray-300 text-sm">AI驱动的材料性能预测平台</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <div className="text-blue-400 text-lg font-bold">96.1%</div>
                  <div className="text-gray-300 text-xs">预测精度</div>
                </div>
                <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                  <div className="text-green-400 text-lg font-bold">2.3s</div>
                  <div className="text-gray-300 text-xs">处理速度</div>
                </div>
                <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                  <div className="text-purple-400 text-lg font-bold">47</div>
                  <div className="text-gray-300 text-xs">活跃连接</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeProvider;