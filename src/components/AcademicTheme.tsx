import React, { createContext, useContext, useState, useEffect } from 'react';

// 学术风格色彩主题定义
export const academicThemes = {
  // 经典学术蓝色主题 - 类似牛津剑桥风格
  classicBlue: {
    name: '经典学术蓝',
    primary: {
      50: '#f0f4ff',
      100: '#e0e7ff', 
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#1e3a8a', // 主色调 - 深学术蓝
      600: '#1e40af',
      700: '#1d4ed8',
      800: '#1e3a8a',
      900: '#1e293b'
    },
    secondary: {
      50: '#fefce8',
      100: '#fef3c7',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#f59e0b', // 学术金色
      500: '#d97706',
      600: '#b45309',
      700: '#92400e',
      800: '#78350f',
      900: '#451a03'
    },
    accent: {
      burgundy: '#7c2d12', // 学术酒红
      forestGreen: '#14532d', // 深绿
      charcoal: '#374151', // 炭灰
      ivory: '#fefce8' // 象牙白
    },
    background: {
      primary: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)',
      secondary: 'rgba(30, 41, 59, 0.95)',
      paper: 'rgba(248, 250, 252, 0.98)',
      overlay: 'rgba(15, 23, 42, 0.9)'
    },
    text: {
      primary: '#f8fafc',
      secondary: '#e2e8f0',
      muted: '#cbd5e1',
      accent: '#3b82f6',
      tertiary: '#94a3b8'
    }
  },

  // 优雅灰色主题 - 类似MIT学术风格
  elegantGray: {
    name: '优雅学术灰',
    primary: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#374151', // 主色调 - 深灰
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    },
    secondary: {
      50: '#fef7f0',
      100: '#fef3e7',
      200: '#fde4c7',
      300: '#fbcfa0',
      400: '#c2794c', // 学术棕色
      500: '#a16207',
      600: '#92400e',
      700: '#78350f',
      800: '#451a03',
      900: '#292524'
    },
    accent: {
      burgundy: '#dc2626', // 暖红
      forestGreen: '#047857', // 翠绿  
      charcoal: '#1e40af', // 深蓝
      ivory: '#d97706' // 金色
    },
    background: {
      primary: 'linear-gradient(135deg, #111827 0%, #1f2937 25%, #374151 50%, #1f2937 75%, #111827 100%)',
      secondary: 'rgba(31, 41, 55, 0.95)',
      paper: 'rgba(249, 250, 251, 0.98)',
      overlay: 'rgba(17, 24, 39, 0.9)'
    },
    text: {
      primary: '#f9fafb',
      secondary: '#e5e7eb',
      muted: '#d1d5db',
      accent: '#6b7280',
      tertiary: '#9ca3af'
    }
  },

  // 深绿学术主题 - 类似哈佛风格
  academicGreen: {
    name: '学术深绿',
    primary: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#065f46', // 主色调 - 深绿
      600: '#047857',
      700: '#065f46',
      800: '#064e3b',
      900: '#022c22'
    },
    secondary: {
      50: '#fefce8',
      100: '#fef3c7',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#d97706', // 学术金色
      500: '#b45309',
      600: '#92400e',
      700: '#78350f',
      800: '#451a03',
      900: '#292524'
    },
    accent: {
      burgundy: '#991b1b', // 深红
      forestGreen: '#14532d', // 森林绿
      charcoal: '#374151', // 炭灰
      ivory: '#fefce8', // 象牙白
      gold: '#d97706' // 金色
    },
    background: {
      primary: 'linear-gradient(135deg, #022c22 0%, #064e3b 25%, #065f46 50%, #064e3b 75%, #022c22 100%)',
      secondary: 'rgba(6, 78, 59, 0.95)',
      paper: 'rgba(236, 253, 245, 0.98)',
      overlay: 'rgba(2, 44, 34, 0.9)'
    },
    text: {
      primary: '#ecfdf5',
      secondary: '#a7f3d0',
      muted: '#6ee7b7',
      accent: '#34d399',
      tertiary: '#10b981'
    }
  },

  // 优雅深紫主题 - 神秘学术风格
  deepPurple: {
    name: '优雅深紫',
    primary: {
      50: '#fdf4ff',
      100: '#fae8ff', 
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#581c87', // 主色调 - 深紫
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95'
    },
    secondary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#0284c7', // 深蓝
      500: '#0369a1',
      600: '#075985',
      700: '#0c4a6e',
      800: '#082f49',
      900: '#0c1821'
    },
    accent: {
      burgundy: '#be185d', // 品红
      forestGreen: '#047857', // 青绿
      charcoal: '#374151', // 炭灰
      ivory: '#fdf4ff', // 淡紫白
      coral: '#f97316' // 橙色
    },
    background: {
      primary: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 25%, #581c87 50%, #5b21b6 75%, #4c1d95 100%)',
      secondary: 'rgba(91, 33, 182, 0.95)',
      paper: 'rgba(253, 244, 255, 0.98)',
      overlay: 'rgba(76, 29, 149, 0.9)'
    },
    text: {
      primary: '#fdf4ff',
      secondary: '#f0abfc',
      muted: '#e879f9',
      accent: '#c084fc',
      tertiary: '#a855f7'
    }
  },

  // 现代紫色主题 - 创新科技风格
  modernPurple: {
    name: '现代科技紫',
    primary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#7c3aed', // 主色调 - 深紫
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95'
    },
    secondary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#0ea5e9', // 科技蓝
      500: '#0284c7',
      600: '#0369a1',
      700: '#075985',
      800: '#0c4a6e',
      900: '#082f49'
    },
    accent: {
      burgundy: '#be185d', // 品红
      forestGreen: '#059669', // 青绿
      charcoal: '#374151', // 炭灰
      ivory: '#faf5ff', // 淡紫白
      coral: '#f97316' // 珊瑚橙
    },
    background: {
      primary: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 25%, #7c3aed 50%, #5b21b6 75%, #4c1d95 100%)',
      secondary: 'rgba(91, 33, 182, 0.95)',
      paper: 'rgba(250, 245, 255, 0.98)',
      overlay: 'rgba(76, 29, 149, 0.9)'
    },
    text: {
      primary: '#faf5ff',
      secondary: '#e9d5ff',
      muted: '#d8b4fe',
      accent: '#c084fc',
      tertiary: '#a855f7'
    }
  },

  // 科研蓝色主题 - 精确科学风格
  researchBlue: {
    name: '科研精密蓝',
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#2563eb', // 主色调 - 科研蓝
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a'
    },
    secondary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#14b8a6', // 青绿色
      500: '#0f766e',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a'
    },
    accent: {
      burgundy: '#dc2626', // 警示红
      forestGreen: '#16a34a', // 自然绿
      charcoal: '#374151', // 深灰
      ivory: '#eff6ff', // 冰蓝白
      orange: '#ea580c' // 活力橙
    },
    background: {
      primary: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #2563eb 50%, #1e40af 75%, #1e3a8a 100%)',
      secondary: 'rgba(30, 64, 175, 0.95)',
      paper: 'rgba(239, 246, 255, 0.98)',
      overlay: 'rgba(30, 58, 138, 0.9)'
    },
    text: {
      primary: '#eff6ff',
      secondary: '#bfdbfe',
      muted: '#93c5fd',
      accent: '#60a5fa',
      tertiary: '#3b82f6'
    }
  },

  // 经典墨绿主题 - 自然学术风格
  naturalGreen: {
    name: '自然墨绿',
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#166534', // 主色调 - 墨绿
      600: '#15803d',
      700: '#166534',
      800: '#14532d',
      900: '#0f2027'
    },
    secondary: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#d97706', // 金黄色
      500: '#b45309',
      600: '#92400e',
      700: '#78350f',
      800: '#451a03',
      900: '#1c1917'
    },
    accent: {
      burgundy: '#b91c1c', // 深红
      forestGreen: '#14532d', // 森林绿
      charcoal: '#374151', // 炭灰
      ivory: '#f0fdf4', // 绿白
      coral: '#ea580c' // 橙红
    },
    background: {
      primary: 'linear-gradient(135deg, #0f2027 0%, #14532d 25%, #166534 50%, #14532d 75%, #0f2027 100%)',
      secondary: 'rgba(20, 83, 45, 0.95)',
      paper: 'rgba(240, 253, 244, 0.98)',
      overlay: 'rgba(15, 32, 39, 0.9)'
    },
    text: {
      primary: '#f0fdf4',
      secondary: '#bbf7d0',
      muted: '#86efac',
      accent: '#4ade80',
      tertiary: '#22c55e'
    }
  },

  // 温暖橙色主题 - 活力学术风格
  warmOrange: {
    name: '温暖橙色',
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#c2410c', // 主色调 - 暖橙
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12'
    },
    secondary: {
      50: '#fefce8',
      100: '#fef3c7',
      200: '#fde047',
      300: '#facc15',
      400: '#eab308', // 金黄
      500: '#ca8a04',
      600: '#a16207',
      700: '#854d0e',
      800: '#713f12',
      900: '#422006'
    },
    accent: {
      burgundy: '#dc2626', // 红色
      forestGreen: '#16a34a', // 绿色
      charcoal: '#374151', // 炭灰
      ivory: '#fff7ed', // 橙白
      coral: '#f97316' // 珊瑚橙
    },
    background: {
      primary: 'linear-gradient(135deg, #7c2d12 0%, #9a3412 25%, #c2410c 50%, #9a3412 75%, #7c2d12 100%)',
      secondary: 'rgba(154, 52, 18, 0.95)',
      paper: 'rgba(255, 247, 237, 0.98)',
      overlay: 'rgba(124, 45, 18, 0.9)'
    },
    text: {
      primary: '#fff7ed',
      secondary: '#fed7aa',
      muted: '#fdba74',
      accent: '#fb923c',
      tertiary: '#f97316'
    }
  },

  // 冷静青蓝主题 - 现代科技风格
  coolCyan: {
    name: '冷静青蓝',
    primary: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#0891b2', // 主色调 - 青蓝
      600: '#0e7490',
      700: '#155e75',
      800: '#164e63',
      900: '#0f172a'
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#64748b', // 灰蓝
      500: '#475569',
      600: '#334155',
      700: '#1e293b',
      800: '#0f172a',
      900: '#020617'
    },
    accent: {
      burgundy: '#e11d48', // 玫红
      forestGreen: '#059669', // 翠绿
      charcoal: '#374151', // 炭灰
      ivory: '#ecfeff', // 青白
      coral: '#f97316' // 橙色
    },
    background: {
      primary: 'linear-gradient(135deg, #0f172a 0%, #164e63 25%, #0891b2 50%, #164e63 75%, #0f172a 100%)',
      secondary: 'rgba(20, 78, 99, 0.95)',
      paper: 'rgba(236, 254, 255, 0.98)',
      overlay: 'rgba(15, 23, 42, 0.9)'
    },
    text: {
      primary: '#ecfeff',
      secondary: '#a5f3fc',
      muted: '#67e8f9',
      accent: '#22d3ee',
      tertiary: '#06b6d4'
    }
  }
};

// 学术主题上下文
const AcademicThemeContext = createContext<{
  theme: keyof typeof academicThemes;
  setTheme: (theme: keyof typeof academicThemes) => void;
  currentTheme: typeof academicThemes.classicBlue;
}>({
  theme: 'classicBlue',
  setTheme: () => {},
  currentTheme: academicThemes.classicBlue
});

// 学术主题提供者组件
export const AcademicThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<keyof typeof academicThemes>('classicBlue');
  const currentTheme = academicThemes[theme];

  // 应用CSS变量到文档根元素
  useEffect(() => {
    const root = document.documentElement;
    const themeColors = currentTheme;
    
    // 设置主要颜色变量
    Object.entries(themeColors.primary).forEach(([key, value]) => {
      root.style.setProperty(`--color-primary-${key}`, value);
    });
    
    Object.entries(themeColors.secondary).forEach(([key, value]) => {
      root.style.setProperty(`--color-secondary-${key}`, value);
    });
    
    Object.entries(themeColors.accent).forEach(([key, value]) => {
      root.style.setProperty(`--color-accent-${key}`, value);
    });
    
    Object.entries(themeColors.text).forEach(([key, value]) => {
      root.style.setProperty(`--color-text-${key}`, value);
    });
    
    // 设置背景
    root.style.setProperty('--bg-primary', themeColors.background.primary);
    root.style.setProperty('--bg-secondary', themeColors.background.secondary);
    root.style.setProperty('--bg-paper', themeColors.background.paper);
    root.style.setProperty('--bg-overlay', themeColors.background.overlay);
  }, [currentTheme]);

  return (
    <AcademicThemeContext.Provider value={{ theme, setTheme, currentTheme }}>
      <div 
        className="academic-theme-root"
        style={{ 
          background: currentTheme.background.primary,
          minHeight: '100vh',
          color: currentTheme.text.primary
        }}
      >
        {children}
      </div>
    </AcademicThemeContext.Provider>
  );
};

// 使用学术主题的Hook
export const useAcademicTheme = () => {
  const context = useContext(AcademicThemeContext);
  if (!context) {
    throw new Error('useAcademicTheme must be used within AcademicThemeProvider');
  }
  return context;
};

// 学术风格的玻璃拟态组件
export const AcademicGlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  elevation?: 'low' | 'medium' | 'high';
}> = ({ children, className = '', variant = 'primary', elevation = 'medium' }) => {
  const { currentTheme } = useAcademicTheme();
  
  const elevationStyles = {
    low: 'backdrop-blur-sm border-opacity-20 shadow-lg',
    medium: 'backdrop-blur-md border-opacity-30 shadow-xl',
    high: 'backdrop-blur-lg border-opacity-40 shadow-2xl'
  };
  
  const variantStyles = {
    primary: {
      background: `${currentTheme.background.secondary}`,
      border: `1px solid ${currentTheme.primary[200]}40`
    },
    secondary: {
      background: `${currentTheme.background.paper}20`,
      border: `1px solid ${currentTheme.secondary[300]}40`
    },
    accent: {
      background: `${currentTheme.background.overlay}`,
      border: `1px solid ${currentTheme.accent.burgundy}40`
    }
  };
  
  return (
    <div 
      className={`academic-glass-card ${elevationStyles[elevation]} rounded-xl ${className}`}
      style={{
        background: variantStyles[variant].background,
        border: variantStyles[variant].border,
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `
      }}
    >
      {children}
    </div>
  );
};

// 学术风格按钮组件
export const AcademicButton: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  disabled = false 
}) => {
  const { currentTheme } = useAcademicTheme();
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: `linear-gradient(135deg, ${currentTheme.primary[500]} 0%, ${currentTheme.primary[600]} 100%)`,
          color: currentTheme.text.primary,
          border: `1px solid ${currentTheme.primary[400]}`
        };
      case 'secondary':
        return {
          background: `linear-gradient(135deg, ${currentTheme.secondary[500]} 0%, ${currentTheme.secondary[600]} 100%)`,
          color: currentTheme.text.primary,
          border: `1px solid ${currentTheme.secondary[400]}`
        };
      case 'outline':
        return {
          background: 'transparent',
          color: currentTheme.primary[400],
          border: `2px solid ${currentTheme.primary[400]}`
        };
      case 'ghost':
        return {
          background: `${currentTheme.primary[500]}20`,
          color: currentTheme.primary[400],
          border: '1px solid transparent'
        };
      default:
        return {};
    }
  };
  
  return (
    <button
      className={`
        ${sizeStyles[size]} 
        font-semibold rounded-lg 
        transition-all duration-300 
        hover:scale-105 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-opacity-50
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={getVariantStyles()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// 学术主题选择器
export const AcademicThemeSelector: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, setTheme, currentTheme } = useAcademicTheme();
  
  return (
    <div className={`flex items-center gap-2 academic-theme-selector ${className}`}>
      <span className="text-sm font-semibold" style={{ color: currentTheme.text.primary }}>
        学术主题:
      </span>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as keyof typeof academicThemes)}
        className="px-3 py-2 rounded-lg text-sm border transition-all duration-300 appearance-none"
        style={{
          background: currentTheme.background.secondary,
          color: currentTheme.text.primary,
          borderColor: `${currentTheme.primary[500]}60`,
          outline: 'none',
          boxShadow: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = currentTheme.primary[500];
          e.target.style.boxShadow = `0 0 0 2px ${currentTheme.primary[500]}40`;
          e.target.style.outline = 'none';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = `${currentTheme.primary[500]}60`;
          e.target.style.boxShadow = 'none';
          e.target.style.outline = 'none';
        }}
      >
        {Object.entries(academicThemes).map(([key, value]) => (
          <option 
            key={key} 
            value={key} 
            className="text-gray-900 bg-white"
          >
            {value.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AcademicThemeProvider;