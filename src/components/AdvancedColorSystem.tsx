import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAcademicTheme } from './AcademicTheme';

// 高级颜色系统管理器
export class ColorSystem {
  static generateHarmonious(baseColor: string, type: 'monochromatic' | 'analogous' | 'complementary' | 'triadic' = 'analogous') {
    // 将十六进制转换为HSL
    const hexToHsl = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h: number, s: number, l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
          default: h = 0;
        }
        h /= 6;
      }

      return [h * 360, s * 100, l * 100];
    };

    // HSL转换为十六进制
    const hslToHex = (h: number, s: number, l: number) => {
      h /= 360; s /= 100; l /= 100;
      const c = (1 - Math.abs(2 * l - 1)) * s;
      const x = c * (1 - Math.abs((h * 6) % 2 - 1));
      const m = l - c / 2;
      let r = 0, g = 0, b = 0;

      if (0 <= h && h < 1/6) { r = c; g = x; b = 0; }
      else if (1/6 <= h && h < 2/6) { r = x; g = c; b = 0; }
      else if (2/6 <= h && h < 3/6) { r = 0; g = c; b = x; }
      else if (3/6 <= h && h < 4/6) { r = 0; g = x; b = c; }
      else if (4/6 <= h && h < 5/6) { r = x; g = 0; b = c; }
      else if (5/6 <= h && h < 1) { r = c; g = 0; b = x; }

      r = Math.round((r + m) * 255);
      g = Math.round((g + m) * 255);
      b = Math.round((b + m) * 255);

      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };

    const [h, s, l] = hexToHsl(baseColor);
    
    switch (type) {
      case 'monochromatic':
        return [
          hslToHex(h, s, Math.max(10, l - 30)),
          hslToHex(h, s, Math.max(20, l - 15)),
          baseColor,
          hslToHex(h, s, Math.min(85, l + 15)),
          hslToHex(h, s, Math.min(95, l + 30))
        ];
      case 'analogous':
        return [
          hslToHex((h - 30 + 360) % 360, s, l),
          hslToHex((h - 15 + 360) % 360, s, l),
          baseColor,
          hslToHex((h + 15) % 360, s, l),
          hslToHex((h + 30) % 360, s, l)
        ];
      case 'complementary':
        return [
          baseColor,
          hslToHex((h + 180) % 360, s, l)
        ];
      case 'triadic':
        return [
          baseColor,
          hslToHex((h + 120) % 360, s, l),
          hslToHex((h + 240) % 360, s, l)
        ];
      default:
        return [baseColor];
    }
  }

  static createGradient(colors: string[], direction: number = 45, stops?: number[]) {
    const defaultStops = colors.map((_, i) => (i / (colors.length - 1)) * 100);
    const gradientStops = stops || defaultStops;
    
    const stopStrings = colors.map((color, i) => `${color} ${gradientStops[i]}%`);
    return `linear-gradient(${direction}deg, ${stopStrings.join(', ')})`;
  }

  static addAlpha(color: string, alpha: number) {
    const hex = color.replace('#', '');
    const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0');
    return `#${hex}${alphaHex}`;
  }
}

// 动态渐变背景组件
export const DynamicColorBackground: React.FC<{
  colors?: string[];
  speed?: number;
  direction?: 'horizontal' | 'vertical' | 'diagonal' | 'radial';
  animated?: boolean;
}> = ({ colors, speed = 1, direction = 'diagonal', animated = true }) => {
  const { currentTheme } = useAcademicTheme();
  const [gradientPhase, setGradientPhase] = useState(0);
  
  const defaultColors = [
    currentTheme.primary[500],
    currentTheme.secondary[500],
    currentTheme.accent.burgundy,
    currentTheme.primary[600]
  ];
  
  const gradientColors = colors || defaultColors;

  useEffect(() => {
    if (!animated) return;
    
    const interval = setInterval(() => {
      setGradientPhase(prev => (prev + speed) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, [speed, animated]);

  const getGradientStyle = () => {
    const colorStops = gradientColors.map((color, index) => {
      const position = (index / (gradientColors.length - 1)) * 100;
      return `${color} ${position}%`;
    }).join(', ');

    switch (direction) {
      case 'horizontal':
        return { background: `linear-gradient(${gradientPhase}deg, ${colorStops})` };
      case 'vertical':
        return { background: `linear-gradient(${90 + gradientPhase}deg, ${colorStops})` };
      case 'diagonal':
        return { background: `linear-gradient(${45 + gradientPhase}deg, ${colorStops})` };
      case 'radial':
        return { 
          background: `radial-gradient(ellipse at ${50 + Math.sin(gradientPhase * 0.01) * 20}% ${50 + Math.cos(gradientPhase * 0.01) * 20}%, ${colorStops})` 
        };
      default:
        return { background: `linear-gradient(45deg, ${colorStops})` };
    }
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000"
      style={getGradientStyle()}
    />
  );
};

// 色彩主题预览组件
export const ColorPalette: React.FC<{
  theme: any;
  compact?: boolean;
  showLabels?: boolean;
  className?: string;
}> = ({ theme, compact = false, showLabels = true, className = '' }) => {
  const renderColorGroup = (colors: any, groupName: string) => {
    if (typeof colors === 'string') {
      return (
        <div key={groupName} className={compact ? 'flex flex-col items-center' : 'mb-4'}>
          <div 
            className={`${compact ? 'w-8 h-8' : 'w-12 h-12'} rounded-lg shadow-md border border-white/20`}
            style={{ backgroundColor: colors }}
          />
          {showLabels && <span className="text-xs mt-1 opacity-70">{groupName}</span>}
        </div>
      );
    }

    return (
      <div key={groupName} className={compact ? 'mb-2' : 'mb-6'}>
        {showLabels && !compact && <h3 className="text-sm font-medium mb-2 opacity-80">{groupName}</h3>}
        <div className={compact ? 'flex gap-1' : 'grid grid-cols-5 gap-2'}>
          {Object.entries(colors).map(([shade, color]) => (
            <div key={shade} className="flex flex-col items-center">
              <div 
                className={`${compact ? 'w-6 h-6' : 'w-10 h-10'} rounded-lg shadow-sm border border-white/10 hover:scale-110 transition-transform cursor-pointer`}
                style={{ backgroundColor: color as string }}
                title={`${groupName} ${shade}: ${color}`}
              />
              {showLabels && !compact && <span className="text-xs mt-1 opacity-60">{shade}</span>}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`${compact ? 'flex gap-4' : 'p-4'} ${className}`}>
      {Object.entries(theme).map(([groupName, colors]) => {
        if (groupName === 'name') return null;
        return renderColorGroup(colors, groupName);
      })}
    </div>
  );
};

// 色彩过渡动画组件
export const ColorTransition: React.FC<{
  fromColor: string;
  toColor: string;
  duration?: number;
  trigger?: boolean;
  children?: React.ReactNode;
  className?: string;
}> = ({ fromColor, toColor, duration = 1, trigger = true, children, className = '' }) => {
  const [currentColor, setCurrentColor] = useState(fromColor);

  useEffect(() => {
    if (trigger) {
      setCurrentColor(toColor);
    } else {
      setCurrentColor(fromColor);
    }
  }, [trigger, fromColor, toColor]);

  return (
    <motion.div
      className={className}
      animate={{ backgroundColor: currentColor }}
      transition={{ duration, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// 智能对比度文字组件
export const AdaptiveText: React.FC<{
  children: React.ReactNode;
  backgroundColor: string;
  className?: string;
}> = ({ children, backgroundColor, className = '' }) => {
  const getContrastColor = (bgColor: string) => {
    // 移除#符号
    const hex = bgColor.replace('#', '');
    
    // 转换为RGB
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // 计算亮度
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // 根据亮度返回对比色
    return luminance > 0.5 ? '#000000' : '#ffffff';
  };

  const textColor = getContrastColor(backgroundColor);

  return (
    <span className={className} style={{ color: textColor }}>
      {children}
    </span>
  );
};

// 渐变文字组件
export const GradientText: React.FC<{
  children: React.ReactNode;
  from: string;
  to: string;
  direction?: number;
  animated?: boolean;
  className?: string;
}> = ({ children, from, to, direction = 45, animated = false, className = '' }) => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    if (!animated) return;
    
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, [animated]);

  const gradientStyle = {
    background: `linear-gradient(${direction + (animated ? animationPhase : 0)}deg, ${from}, ${to})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  return (
    <span className={`inline-block ${className}`} style={gradientStyle}>
      {children}
    </span>
  );
};

// 色彩采样器组件
export const ColorSampler: React.FC<{
  onColorSelect?: (color: string) => void;
  palette?: string[];
  className?: string;
}> = ({ onColorSelect, palette, className = '' }) => {
  const { currentTheme } = useAcademicTheme();
  
  const defaultPalette = [
    currentTheme.primary[300],
    currentTheme.primary[500],
    currentTheme.primary[700],
    currentTheme.secondary[300],
    currentTheme.secondary[500],
    currentTheme.secondary[700],
    currentTheme.accent.burgundy,
    currentTheme.accent.forestGreen,
    currentTheme.accent.charcoal
  ];

  const colors = palette || defaultPalette;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {colors.map((color, index) => (
        <motion.button
          key={index}
          className="w-8 h-8 rounded-full border-2 border-white/20 shadow-lg hover:shadow-xl"
          style={{ backgroundColor: color }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onColorSelect && onColorSelect(color)}
        />
      ))}
    </div>
  );
};

// 彩虹进度条组件
export const RainbowProgress: React.FC<{
  progress: number;
  height?: number;
  animated?: boolean;
  colors?: string[];
  className?: string;
}> = ({ progress, height = 8, animated = true, colors, className = '' }) => {
  const { currentTheme } = useAcademicTheme();
  
  const defaultColors = [
    currentTheme.primary[400],
    currentTheme.secondary[400],
    currentTheme.accent.burgundy,
    currentTheme.primary[600]
  ];

  const progressColors = colors || defaultColors;
  const gradient = ColorSystem.createGradient(progressColors);

  return (
    <div 
      className={`w-full bg-gray-200 rounded-full overflow-hidden ${className}`}
      style={{ height }}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ 
          background: gradient,
          width: `${Math.max(0, Math.min(100, progress))}%`
        }}
        initial={{ width: 0 }}
        animate={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
        transition={{ duration: animated ? 1 : 0, ease: "easeOut" }}
      />
    </div>
  );
};