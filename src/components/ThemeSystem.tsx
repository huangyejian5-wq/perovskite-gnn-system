import React, { createContext, useContext, useState, useEffect } from 'react';
import { Palette, Sun, Moon, Zap, Atom, Beaker, Cpu, Eye, Contrast, Monitor, Smartphone } from 'lucide-react';

// Theme definitions with comprehensive color palettes
export interface ThemeColors {
  // Primary colors
  primary: {
    50: string; 100: string; 200: string; 300: string; 400: string;
    500: string; 600: string; 700: string; 800: string; 900: string;
  };
  // Accent colors for different elements
  accent: {
    blue: string; purple: string; green: string; orange: string; 
    pink: string; cyan: string; yellow: string; red: string;
  };
  // Scientific element colors
  scientific: {
    quantum: string; molecular: string; crystal: string; 
    spectral: string; thermal: string; neural: string;
  };
  // Background gradients and surfaces
  background: {
    primary: string; secondary: string; tertiary: string;
    card: string; modal: string; overlay: string;
  };
  // Text colors
  text: {
    primary: string; secondary: string; tertiary: string; 
    inverse: string; accent: string; muted: string;
  };
  // Border and surface colors
  border: {
    primary: string; secondary: string; accent: string; 
    hover: string; focus: string; error: string;
  };
  // Status colors
  status: {
    success: string; error: string; warning: string; 
    info: string; processing: string; offline: string;
  };
  // Glass morphism colors
  glass: {
    background: string; backgroundHover: string; 
    border: string; borderHover: string;
    shadow: string; highlight: string;
  };
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  category: 'light' | 'dark' | 'scientific' | 'accessibility';
  icon: React.ReactNode;
  colors: ThemeColors;
  isDark: boolean;
  isHighContrast?: boolean;
  supportsColorBlind?: boolean;
  cssVariables: Record<string, string>;
}

// Professional theme definitions
export const themes: Theme[] = [
  // Dark Themes
  {
    id: 'dark-quantum',
    name: '量子深蓝',
    description: '深邃的量子计算科学主题，适合长时间研究工作',
    category: 'dark',
    icon: <Atom className="w-5 h-5" />,
    isDark: true,
    colors: {
      primary: {
        50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc',
        400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1',
        800: '#075985', 900: '#0c4a6e'
      },
      accent: {
        blue: '#3b82f6', purple: '#8b5cf6', green: '#10b981', orange: '#f59e0b',
        pink: '#ec4899', cyan: '#06b6d4', yellow: '#eab308', red: '#ef4444'
      },
      scientific: {
        quantum: '#7c3aed', molecular: '#059669', crystal: '#dc2626',
        spectral: '#ea580c', thermal: '#ca8a04', neural: '#4f46e5'
      },
      background: {
        primary: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)',
        secondary: 'rgba(30, 41, 59, 0.95)',
        tertiary: 'rgba(51, 65, 85, 0.8)',
        card: 'rgba(15, 23, 42, 0.85)',
        modal: 'rgba(30, 41, 59, 0.98)',
        overlay: 'rgba(0, 0, 0, 0.75)'
      },
      text: {
        primary: '#f8fafc', secondary: '#e2e8f0', tertiary: '#cbd5e1',
        inverse: '#1e293b', accent: '#60a5fa', muted: '#64748b'
      },
      border: {
        primary: 'rgba(59, 130, 246, 0.2)', secondary: 'rgba(255, 255, 255, 0.1)',
        accent: 'rgba(59, 130, 246, 0.4)', hover: 'rgba(59, 130, 246, 0.3)',
        focus: 'rgba(59, 130, 246, 0.6)', error: 'rgba(239, 68, 68, 0.4)'
      },
      status: {
        success: '#10b981', error: '#ef4444', warning: '#f59e0b',
        info: '#3b82f6', processing: '#8b5cf6', offline: '#6b7280'
      },
      glass: {
        background: 'rgba(255, 255, 255, 0.08)', backgroundHover: 'rgba(255, 255, 255, 0.12)',
        border: 'rgba(255, 255, 255, 0.15)', borderHover: 'rgba(59, 130, 246, 0.3)',
        shadow: 'rgba(0, 0, 0, 0.3)', highlight: 'rgba(255, 255, 255, 0.1)'
      }
    },
    cssVariables: {
      '--theme-primary': '#0ea5e9',
      '--theme-background': '#0f172a',
      '--theme-surface': '#1e293b',
      '--theme-text': '#f8fafc',
      '--theme-accent': '#3b82f6'
    }
  },
  {
    id: 'dark-neural',
    name: '神经网络黑',
    description: '神经网络主题，强调AI和深度学习的视觉语言',
    category: 'dark',
    icon: <Cpu className="w-5 h-5" />,
    isDark: true,
    colors: {
      primary: {
        50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe',
        400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7c2d12',
        800: '#581c87', 900: '#3b0764'
      },
      accent: {
        blue: '#6366f1', purple: '#a855f7', green: '#22c55e', orange: '#f97316',
        pink: '#f472b6', cyan: '#06b6d4', yellow: '#facc15', red: '#f87171'
      },
      scientific: {
        quantum: '#a855f7', molecular: '#22c55e', crystal: '#f87171',
        spectral: '#f97316', thermal: '#eab308', neural: '#6366f1'
      },
      background: {
        primary: 'linear-gradient(135deg, #0c0a09 0%, #1c1917 25%, #292524 50%, #1c1917 75%, #0c0a09 100%)',
        secondary: 'rgba(28, 25, 23, 0.95)',
        tertiary: 'rgba(41, 37, 36, 0.8)',
        card: 'rgba(12, 10, 9, 0.85)',
        modal: 'rgba(28, 25, 23, 0.98)',
        overlay: 'rgba(0, 0, 0, 0.8)'
      },
      text: {
        primary: '#fafaf9', secondary: '#e7e5e4', tertiary: '#d6d3d1',
        inverse: '#1c1917', accent: '#c084fc', muted: '#78716c'
      },
      border: {
        primary: 'rgba(168, 85, 247, 0.2)', secondary: 'rgba(255, 255, 255, 0.1)',
        accent: 'rgba(168, 85, 247, 0.4)', hover: 'rgba(168, 85, 247, 0.3)',
        focus: 'rgba(168, 85, 247, 0.6)', error: 'rgba(248, 113, 113, 0.4)'
      },
      status: {
        success: '#22c55e', error: '#f87171', warning: '#facc15',
        info: '#6366f1', processing: '#a855f7', offline: '#78716c'
      },
      glass: {
        background: 'rgba(255, 255, 255, 0.06)', backgroundHover: 'rgba(255, 255, 255, 0.10)',
        border: 'rgba(255, 255, 255, 0.12)', borderHover: 'rgba(168, 85, 247, 0.3)',
        shadow: 'rgba(0, 0, 0, 0.4)', highlight: 'rgba(255, 255, 255, 0.08)'
      }
    },
    cssVariables: {
      '--theme-primary': '#a855f7',
      '--theme-background': '#0c0a09',
      '--theme-surface': '#1c1917',
      '--theme-text': '#fafaf9',
      '--theme-accent': '#6366f1'
    }
  },
  // Light Themes
  {
    id: 'light-minimal',
    name: '简约白',
    description: '简洁明亮的白色主题，适合白天使用和演示',
    category: 'light',
    icon: <Sun className="w-5 h-5" />,
    isDark: false,
    colors: {
      primary: {
        50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
        400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
        800: '#1e40af', 900: '#1e3a8a'
      },
      accent: {
        blue: '#2563eb', purple: '#7c3aed', green: '#059669', orange: '#ea580c',
        pink: '#db2777', cyan: '#0891b2', yellow: '#ca8a04', red: '#dc2626'
      },
      scientific: {
        quantum: '#7c3aed', molecular: '#059669', crystal: '#dc2626',
        spectral: '#ea580c', thermal: '#ca8a04', neural: '#4338ca'
      },
      background: {
        primary: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
        secondary: 'rgba(248, 250, 252, 0.95)',
        tertiary: 'rgba(241, 245, 249, 0.8)',
        card: 'rgba(255, 255, 255, 0.9)',
        modal: 'rgba(248, 250, 252, 0.98)',
        overlay: 'rgba(0, 0, 0, 0.5)'
      },
      text: {
        primary: '#1e293b', secondary: '#475569', tertiary: '#64748b',
        inverse: '#f8fafc', accent: '#2563eb', muted: '#94a3b8'
      },
      border: {
        primary: 'rgba(37, 99, 235, 0.15)', secondary: 'rgba(0, 0, 0, 0.08)',
        accent: 'rgba(37, 99, 235, 0.3)', hover: 'rgba(37, 99, 235, 0.2)',
        focus: 'rgba(37, 99, 235, 0.4)', error: 'rgba(220, 38, 38, 0.3)'
      },
      status: {
        success: '#059669', error: '#dc2626', warning: '#ca8a04',
        info: '#2563eb', processing: '#7c3aed', offline: '#6b7280'
      },
      glass: {
        background: 'rgba(255, 255, 255, 0.7)', backgroundHover: 'rgba(255, 255, 255, 0.85)',
        border: 'rgba(0, 0, 0, 0.08)', borderHover: 'rgba(37, 99, 235, 0.2)',
        shadow: 'rgba(0, 0, 0, 0.1)', highlight: 'rgba(255, 255, 255, 0.9)'
      }
    },
    cssVariables: {
      '--theme-primary': '#3b82f6',
      '--theme-background': '#ffffff',
      '--theme-surface': '#f8fafc',
      '--theme-text': '#1e293b',
      '--theme-accent': '#2563eb'
    }
  },
  // Scientific Themes
  {
    id: 'scientific-molecular',
    name: '分子结构绿',
    description: '受分子结构启发的绿色科学主题，适合化学分析',
    category: 'scientific',
    icon: <Beaker className="w-5 h-5" />,
    isDark: true,
    colors: {
      primary: {
        50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac',
        400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d',
        800: '#166534', 900: '#14532d'
      },
      accent: {
        blue: '#0ea5e9', purple: '#8b5cf6', green: '#22c55e', orange: '#f59e0b',
        pink: '#ec4899', cyan: '#06b6d4', yellow: '#eab308', red: '#ef4444'
      },
      scientific: {
        quantum: '#8b5cf6', molecular: '#22c55e', crystal: '#ef4444',
        spectral: '#f59e0b', thermal: '#eab308', neural: '#3b82f6'
      },
      background: {
        primary: 'linear-gradient(135deg, #064e3b 0%, #065f46 25%, #047857 50%, #065f46 75%, #064e3b 100%)',
        secondary: 'rgba(6, 95, 70, 0.95)',
        tertiary: 'rgba(4, 120, 87, 0.8)',
        card: 'rgba(6, 78, 59, 0.85)',
        modal: 'rgba(6, 95, 70, 0.98)',
        overlay: 'rgba(0, 0, 0, 0.75)'
      },
      text: {
        primary: '#f0fdf4', secondary: '#dcfce7', tertiary: '#bbf7d0',
        inverse: '#064e3b', accent: '#4ade80', muted: '#6b7280'
      },
      border: {
        primary: 'rgba(34, 197, 94, 0.2)', secondary: 'rgba(255, 255, 255, 0.1)',
        accent: 'rgba(34, 197, 94, 0.4)', hover: 'rgba(34, 197, 94, 0.3)',
        focus: 'rgba(34, 197, 94, 0.6)', error: 'rgba(239, 68, 68, 0.4)'
      },
      status: {
        success: '#22c55e', error: '#ef4444', warning: '#f59e0b',
        info: '#0ea5e9', processing: '#8b5cf6', offline: '#6b7280'
      },
      glass: {
        background: 'rgba(255, 255, 255, 0.08)', backgroundHover: 'rgba(255, 255, 255, 0.12)',
        border: 'rgba(255, 255, 255, 0.15)', borderHover: 'rgba(34, 197, 94, 0.3)',
        shadow: 'rgba(0, 0, 0, 0.3)', highlight: 'rgba(255, 255, 255, 0.1)'
      }
    },
    cssVariables: {
      '--theme-primary': '#22c55e',
      '--theme-background': '#064e3b',
      '--theme-surface': '#065f46',
      '--theme-text': '#f0fdf4',
      '--theme-accent': '#4ade80'
    }
  },
  {
    id: 'scientific-quantum',
    name: '量子紫',
    description: '量子计算主题，紫色调体现量子科技的神秘感',
    category: 'scientific',
    icon: <Zap className="w-5 h-5" />,
    isDark: true,
    colors: {
      primary: {
        50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe',
        400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7c2d12',
        800: '#581c87', 900: '#3b0764'
      },
      accent: {
        blue: '#3b82f6', purple: '#a855f7', green: '#10b981', orange: '#f59e0b',
        pink: '#ec4899', cyan: '#06b6d4', yellow: '#eab308', red: '#ef4444'
      },
      scientific: {
        quantum: '#a855f7', molecular: '#10b981', crystal: '#ef4444',
        spectral: '#f59e0b', thermal: '#eab308', neural: '#3b82f6'
      },
      background: {
        primary: 'linear-gradient(135deg, #3b0764 0%, #581c87 25%, #7c2d12 50%, #581c87 75%, #3b0764 100%)',
        secondary: 'rgba(88, 28, 135, 0.95)',
        tertiary: 'rgba(124, 45, 18, 0.8)',
        card: 'rgba(59, 7, 100, 0.85)',
        modal: 'rgba(88, 28, 135, 0.98)',
        overlay: 'rgba(0, 0, 0, 0.75)'
      },
      text: {
        primary: '#faf5ff', secondary: '#f3e8ff', tertiary: '#e9d5ff',
        inverse: '#3b0764', accent: '#c084fc', muted: '#6b7280'
      },
      border: {
        primary: 'rgba(168, 85, 247, 0.2)', secondary: 'rgba(255, 255, 255, 0.1)',
        accent: 'rgba(168, 85, 247, 0.4)', hover: 'rgba(168, 85, 247, 0.3)',
        focus: 'rgba(168, 85, 247, 0.6)', error: 'rgba(239, 68, 68, 0.4)'
      },
      status: {
        success: '#10b981', error: '#ef4444', warning: '#f59e0b',
        info: '#3b82f6', processing: '#a855f7', offline: '#6b7280'
      },
      glass: {
        background: 'rgba(255, 255, 255, 0.08)', backgroundHover: 'rgba(255, 255, 255, 0.12)',
        border: 'rgba(255, 255, 255, 0.15)', borderHover: 'rgba(168, 85, 247, 0.3)',
        shadow: 'rgba(0, 0, 0, 0.3)', highlight: 'rgba(255, 255, 255, 0.1)'
      }
    },
    cssVariables: {
      '--theme-primary': '#a855f7',
      '--theme-background': '#3b0764',
      '--theme-surface': '#581c87',
      '--theme-text': '#faf5ff',
      '--theme-accent': '#c084fc'
    }
  },
  // Accessibility Themes
  {
    id: 'accessibility-high-contrast',
    name: '高对比度',
    description: '高对比度主题，适合视觉障碍用户使用',
    category: 'accessibility',
    icon: <Contrast className="w-5 h-5" />,
    isDark: true,
    isHighContrast: true,
    colors: {
      primary: {
        50: '#ffffff', 100: '#ffffff', 200: '#ffffff', 300: '#ffffff',
        400: '#ffffff', 500: '#ffffff', 600: '#ffffff', 700: '#ffffff',
        800: '#ffffff', 900: '#ffffff'
      },
      accent: {
        blue: '#00ffff', purple: '#ff00ff', green: '#00ff00', orange: '#ffaa00',
        pink: '#ff69b4', cyan: '#00ffff', yellow: '#ffff00', red: '#ff0000'
      },
      scientific: {
        quantum: '#ff00ff', molecular: '#00ff00', crystal: '#ff0000',
        spectral: '#ffaa00', thermal: '#ffff00', neural: '#00ffff'
      },
      background: {
        primary: 'linear-gradient(135deg, #000000 0%, #000000 100%)',
        secondary: '#000000',
        tertiary: '#1a1a1a',
        card: '#000000',
        modal: '#000000',
        overlay: 'rgba(0, 0, 0, 0.95)'
      },
      text: {
        primary: '#ffffff', secondary: '#ffffff', tertiary: '#ffffff',
        inverse: '#000000', accent: '#00ffff', muted: '#cccccc'
      },
      border: {
        primary: '#ffffff', secondary: '#ffffff', accent: '#00ffff',
        hover: '#ffff00', focus: '#ff00ff', error: '#ff0000'
      },
      status: {
        success: '#00ff00', error: '#ff0000', warning: '#ffff00',
        info: '#00ffff', processing: '#ff00ff', offline: '#808080'
      },
      glass: {
        background: 'rgba(0, 0, 0, 0.9)', backgroundHover: 'rgba(255, 255, 255, 0.1)',
        border: '#ffffff', borderHover: '#00ffff',
        shadow: 'rgba(0, 0, 0, 0.5)', highlight: '#ffffff'
      }
    },
    cssVariables: {
      '--theme-primary': '#ffffff',
      '--theme-background': '#000000',
      '--theme-surface': '#000000',
      '--theme-text': '#ffffff',
      '--theme-accent': '#00ffff'
    }
  },
  {
    id: 'accessibility-colorblind-friendly',
    name: '色盲友好',
    description: '色盲友好主题，使用易区分的颜色组合',
    category: 'accessibility',
    icon: <Eye className="w-5 h-5" />,
    isDark: false,
    supportsColorBlind: true,
    colors: {
      primary: {
        50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc',
        400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1',
        800: '#075985', 900: '#0c4a6e'
      },
      accent: {
        blue: '#0284c7', purple: '#7c2d12', green: '#059669', orange: '#ea580c',
        pink: '#be185d', cyan: '#0891b2', yellow: '#ca8a04', red: '#dc2626'
      },
      scientific: {
        quantum: '#7c2d12', molecular: '#059669', crystal: '#dc2626',
        spectral: '#ea580c', thermal: '#ca8a04', neural: '#0284c7'
      },
      background: {
        primary: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        secondary: 'rgba(248, 250, 252, 0.95)',
        tertiary: 'rgba(226, 232, 240, 0.8)',
        card: 'rgba(255, 255, 255, 0.9)',
        modal: 'rgba(248, 250, 252, 0.98)',
        overlay: 'rgba(0, 0, 0, 0.5)'
      },
      text: {
        primary: '#1e293b', secondary: '#475569', tertiary: '#64748b',
        inverse: '#f8fafc', accent: '#0284c7', muted: '#94a3b8'
      },
      border: {
        primary: 'rgba(2, 132, 199, 0.2)', secondary: 'rgba(0, 0, 0, 0.1)',
        accent: 'rgba(2, 132, 199, 0.4)', hover: 'rgba(2, 132, 199, 0.3)',
        focus: 'rgba(2, 132, 199, 0.6)', error: 'rgba(220, 38, 38, 0.4)'
      },
      status: {
        success: '#059669', error: '#dc2626', warning: '#ca8a04',
        info: '#0284c7', processing: '#7c2d12', offline: '#6b7280'
      },
      glass: {
        background: 'rgba(255, 255, 255, 0.8)', backgroundHover: 'rgba(255, 255, 255, 0.9)',
        border: 'rgba(0, 0, 0, 0.1)', borderHover: 'rgba(2, 132, 199, 0.3)',
        shadow: 'rgba(0, 0, 0, 0.15)', highlight: 'rgba(255, 255, 255, 0.95)'
      }
    },
    cssVariables: {
      '--theme-primary': '#0ea5e9',
      '--theme-background': '#f8fafc',
      '--theme-surface': '#e2e8f0',
      '--theme-text': '#1e293b',
      '--theme-accent': '#0284c7'
    }
  }
];

// Theme Context
interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
  availableThemes: Theme[];
  themeCategory: string;
  setThemeCategory: (category: string) => void;
  isSystemTheme: boolean;
  setSystemTheme: (enabled: boolean) => void;
  customizations: {
    fontSize: number;
    borderRadius: number;
    animationSpeed: number;
    reducedMotion: boolean;
  };
  updateCustomization: (key: string, value: any) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const AdvancedThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);
  const [themeCategory, setThemeCategory] = useState<string>('all');
  const [isSystemTheme, setSystemTheme] = useState(false);
  const [customizations, setCustomizations] = useState({
    fontSize: 14,
    borderRadius: 12,
    animationSpeed: 1,
    reducedMotion: false
  });

  // Load saved theme on component mount
  useEffect(() => {
    const savedThemeId = localStorage.getItem('perovskite-theme-id');
    const savedSystemTheme = localStorage.getItem('perovskite-system-theme') === 'true';
    const savedCustomizations = localStorage.getItem('perovskite-theme-customizations');

    if (savedCustomizations) {
      try {
        setCustomizations(JSON.parse(savedCustomizations));
      } catch (error) {
        console.warn('Failed to parse theme customizations');
      }
    }

    setSystemTheme(savedSystemTheme);

    if (savedSystemTheme) {
      // Use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = themes.find(t => t.isDark === prefersDark) || themes[0];
      setCurrentTheme(systemTheme);
    } else if (savedThemeId) {
      const savedTheme = themes.find(t => t.id === savedThemeId);
      if (savedTheme) {
        setCurrentTheme(savedTheme);
      }
    }
  }, []);

  // Apply theme to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply theme CSS variables
    Object.entries(currentTheme.cssVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Apply theme colors to CSS custom properties
    const colorMappings = {
      '--primary-50': currentTheme.colors.primary[50],
      '--primary-100': currentTheme.colors.primary[100],
      '--primary-200': currentTheme.colors.primary[200],
      '--primary-300': currentTheme.colors.primary[300],
      '--primary-400': currentTheme.colors.primary[400],
      '--primary-500': currentTheme.colors.primary[500],
      '--primary-600': currentTheme.colors.primary[600],
      '--primary-700': currentTheme.colors.primary[700],
      '--primary-800': currentTheme.colors.primary[800],
      '--primary-900': currentTheme.colors.primary[900],
      
      '--accent-blue': currentTheme.colors.accent.blue,
      '--accent-blue-rgb': currentTheme.colors.accent.blue.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16)).join(', ') || '59, 130, 246',
      '--accent-purple': currentTheme.colors.accent.purple,
      '--accent-purple-rgb': currentTheme.colors.accent.purple.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16)).join(', ') || '139, 92, 246',
      '--accent-green': currentTheme.colors.accent.green,
      '--accent-green-rgb': currentTheme.colors.accent.green.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16)).join(', ') || '16, 185, 129',
      '--accent-orange': currentTheme.colors.accent.orange,
      '--accent-orange-rgb': currentTheme.colors.accent.orange.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16)).join(', ') || '245, 158, 11',
      '--accent-pink': currentTheme.colors.accent.pink,
      '--accent-pink-rgb': currentTheme.colors.accent.pink.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16)).join(', ') || '236, 72, 153',
      '--accent-cyan': currentTheme.colors.accent.cyan,
      '--accent-cyan-rgb': currentTheme.colors.accent.cyan.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16)).join(', ') || '6, 182, 212',

      '--accent-quantum': currentTheme.colors.scientific.quantum,
      '--accent-molecular': currentTheme.colors.scientific.molecular,
      '--accent-crystal': currentTheme.colors.scientific.crystal,
      '--accent-spectral': currentTheme.colors.scientific.spectral,
      '--accent-thermal': currentTheme.colors.scientific.thermal,
      '--accent-neural': currentTheme.colors.scientific.neural,

      '--glass-bg': currentTheme.colors.glass.background,
      '--glass-bg-hover': currentTheme.colors.glass.backgroundHover,
      '--glass-border': currentTheme.colors.glass.border,
      '--glass-border-hover': currentTheme.colors.glass.borderHover,

      '--text-primary': currentTheme.colors.text.primary,
      '--text-secondary': currentTheme.colors.text.secondary,
      '--text-muted': currentTheme.colors.text.muted,
      
      '--bg-primary': currentTheme.colors.background.primary,
      '--bg-secondary': currentTheme.colors.background.secondary,
    };

    Object.entries(colorMappings).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Apply customizations
    root.style.setProperty('--font-size-base', `${customizations.fontSize}px`);
    root.style.setProperty('--border-radius-base', `${customizations.borderRadius}px`);
    root.style.setProperty('--animation-speed', `${customizations.animationSpeed}`);
    
    // Apply body classes
    document.body.className = '';
    if (currentTheme.isDark) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.add('theme-light');
    }
    
    if (currentTheme.isHighContrast) {
      document.body.classList.add('theme-high-contrast');
    }
    
    if (currentTheme.supportsColorBlind) {
      document.body.classList.add('theme-colorblind-friendly');
    }
    
    if (customizations.reducedMotion) {
      document.body.classList.add('reduce-motion');
    }

    // Apply background
    document.body.style.background = currentTheme.colors.background.primary;
    document.body.style.color = currentTheme.colors.text.primary;
    
  }, [currentTheme, customizations]);

  // System theme detection
  useEffect(() => {
    if (isSystemTheme) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        const systemTheme = themes.find(t => t.isDark === e.matches) || themes[0];
        setCurrentTheme(systemTheme);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [isSystemTheme]);

  const setTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem('perovskite-theme-id', themeId);
      setSystemTheme(false);
      localStorage.setItem('perovskite-system-theme', 'false');
    }
  };

  const handleSystemTheme = (enabled: boolean) => {
    setSystemTheme(enabled);
    localStorage.setItem('perovskite-system-theme', enabled.toString());
    
    if (enabled) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = themes.find(t => t.isDark === prefersDark) || themes[0];
      setCurrentTheme(systemTheme);
    }
  };

  const updateCustomization = (key: string, value: any) => {
    const newCustomizations = { ...customizations, [key]: value };
    setCustomizations(newCustomizations);
    localStorage.setItem('perovskite-theme-customizations', JSON.stringify(newCustomizations));
  };

  const filteredThemes = themeCategory === 'all' 
    ? themes 
    : themes.filter(theme => theme.category === themeCategory);

  const contextValue: ThemeContextType = {
    currentTheme,
    setTheme,
    availableThemes: filteredThemes,
    themeCategory,
    setThemeCategory,
    isSystemTheme,
    setSystemTheme: handleSystemTheme,
    customizations,
    updateCustomization
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAdvancedTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAdvancedTheme must be used within AdvancedThemeProvider');
  }
  return context;
};

// Theme Selector Component
export const ThemeSelector: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const {
    currentTheme,
    setTheme,
    availableThemes,
    themeCategory,
    setThemeCategory,
    isSystemTheme,
    setSystemTheme,
    customizations,
    updateCustomization
  } = useAdvancedTheme();

  if (!isOpen) return null;

  const categories = [
    { id: 'all', name: '全部主题', icon: <Palette className="w-4 h-4" /> },
    { id: 'dark', name: '深色主题', icon: <Moon className="w-4 h-4" /> },
    { id: 'light', name: '浅色主题', icon: <Sun className="w-4 h-4" /> },
    { id: 'scientific', name: '科学主题', icon: <Beaker className="w-4 h-4" /> },
    { id: 'accessibility', name: '无障碍', icon: <Eye className="w-4 h-4" /> }
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">主题设置</h2>
              <p className="text-gray-300 text-sm">自定义您的视觉体验</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
          >
            <span className="text-white text-lg">×</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {/* System Theme Toggle */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-4 glass-card rounded-xl">
              <div className="flex items-center gap-3">
                <Monitor className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-white font-medium">跟随系统</div>
                  <div className="text-gray-400 text-sm">自动根据系统设置切换主题</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isSystemTheme}
                  onChange={(e) => setSystemTheme(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          {!isSystemTheme && (
            <>
              {/* Theme Categories */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">主题分类</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setThemeCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        themeCategory === category.id
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      {category.icon}
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Grid */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">选择主题</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {availableThemes.map(theme => (
                    <div
                      key={theme.id}
                      onClick={() => setTheme(theme.id)}
                      className={`glass-card rounded-xl p-4 cursor-pointer transition-all hover:scale-105 ${
                        currentTheme.id === theme.id
                          ? 'ring-2 ring-blue-400 bg-blue-500/10'
                          : 'hover:bg-white/15'
                      }`}
                    >
                      {/* Theme Preview */}
                      <div className="mb-3 h-20 rounded-lg overflow-hidden relative"
                        style={{ background: theme.colors.background.primary }}
                      >
                        <div className="absolute inset-2">
                          <div className="flex gap-2 mb-2">
                            <div
                              className="w-4 h-4 rounded"
                              style={{ backgroundColor: theme.colors.accent.blue }}
                            ></div>
                            <div
                              className="w-4 h-4 rounded"
                              style={{ backgroundColor: theme.colors.accent.green }}
                            ></div>
                            <div
                              className="w-4 h-4 rounded"
                              style={{ backgroundColor: theme.colors.accent.orange }}
                            ></div>
                          </div>
                          <div
                            className="h-2 rounded mb-1 opacity-80"
                            style={{ backgroundColor: theme.colors.text.secondary }}
                          ></div>
                          <div
                            className="h-1 rounded w-2/3 opacity-60"
                            style={{ backgroundColor: theme.colors.text.muted }}
                          ></div>
                        </div>
                      </div>

                      {/* Theme Info */}
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            theme.isDark ? 'bg-white/10' : 'bg-black/10'
                          }`}
                          style={{ color: theme.colors.accent.blue }}
                        >
                          {theme.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm">{theme.name}</div>
                          <div className="text-gray-400 text-xs leading-relaxed">{theme.description}</div>
                        </div>
                      </div>

                      {/* Theme Features */}
                      <div className="flex items-center gap-2 mt-3">
                        {theme.isHighContrast && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">
                            高对比度
                          </span>
                        )}
                        {theme.supportsColorBlind && (
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                            色盲友好
                          </span>
                        )}
                        {theme.isDark && (
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                            护眼
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Customization Options */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">个性化设置</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Font Size */}
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-white font-medium">字体大小</label>
                  <span className="text-gray-400 text-sm">{customizations.fontSize}px</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="20"
                  step="1"
                  value={customizations.fontSize}
                  onChange={(e) => updateCustomization('fontSize', parseInt(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>

              {/* Border Radius */}
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-white font-medium">圆角大小</label>
                  <span className="text-gray-400 text-sm">{customizations.borderRadius}px</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="24"
                  step="2"
                  value={customizations.borderRadius}
                  onChange={(e) => updateCustomization('borderRadius', parseInt(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>

              {/* Animation Speed */}
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-white font-medium">动画速度</label>
                  <span className="text-gray-400 text-sm">{customizations.animationSpeed}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={customizations.animationSpeed}
                  onChange={(e) => updateCustomization('animationSpeed', parseFloat(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>

              {/* Reduced Motion */}
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">减少动画</div>
                    <div className="text-gray-400 text-sm">适合对动画敏感的用户</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={customizations.reducedMotion}
                      onChange={(e) => updateCustomization('reducedMotion', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default { AdvancedThemeProvider, useAdvancedTheme, ThemeSelector, themes };