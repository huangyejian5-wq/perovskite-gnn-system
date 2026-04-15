import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, ChevronRight, Star, ArrowRight, Zap, 
  Cpu, Database, TrendingUp, Activity, Settings,
  Bell, Download, Share, BookOpen, X, Play,
  Volume2, VolumeX, Palette, Sun, Moon
} from 'lucide-react';
import { useAcademicTheme } from './AcademicTheme';
import { useAudioVisual } from './AudioVisualSystem';

// 美观的数据统计卡片
export const StatCard: React.FC<{
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ComponentType<any>;
  trend?: 'up' | 'down' | 'stable';
  color?: string;
  animated?: boolean;
}> = ({ title, value, subtitle, icon: Icon, trend = 'stable', color, animated = true }) => {
  const { currentTheme } = useAcademicTheme();
  const [isHovered, setIsHovered] = useState(false);
  
  const trendColors = {
    up: '#10b981',
    down: '#ef4444',
    stable: '#6b7280'
  };

  return (
    <motion.div
      initial={animated ? { opacity: 0, y: 20 } : {}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          relative overflow-hidden p-6 rounded-2xl border backdrop-blur-xl
          transition-all duration-500 ease-out cursor-pointer
          ${isHovered ? 'transform -translate-y-2 shadow-modern-lg' : 'shadow-modern-sm'}
          card-professional glass-card-enhanced
        `}
        style={{
          background: `linear-gradient(135deg, 
            ${currentTheme.background.paper}F0, 
            ${currentTheme.background.secondary}E0)`,
          borderColor: `${color || currentTheme.primary[500]}40`
        }}
      >
        {/* Background Glow Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${color || currentTheme.primary[500]}30 0%, transparent 70%)`
          }}
        />
        
        {/* Header */}
        <div className="relative flex items-center justify-between mb-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${color || currentTheme.primary[500]}20, ${color || currentTheme.primary[600]}10)`,
              border: `1px solid ${color || currentTheme.primary[500]}30`
            }}
          >
            <Icon 
              className="w-6 h-6 transition-colors duration-300" 
              style={{ color: color || currentTheme.primary[500] }}
            />
          </div>
          
          {trend !== 'stable' && (
            <div className="flex items-center gap-1">
              <TrendingUp 
                className={`w-4 h-4 ${trend === 'down' ? 'rotate-180' : ''}`}
                style={{ color: trendColors[trend] }}
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative">
          <div 
            className="text-3xl font-bold mb-1 transition-colors duration-300"
            style={{ color: currentTheme.text.primary }}
          >
            {animated ? (
              <CountUpAnimation target={typeof value === 'number' ? value : 0} />
            ) : (
              value
            )}
          </div>
          
          <div 
            className="text-sm font-medium mb-2"
            style={{ color: currentTheme.text.secondary }}
          >
            {title}
          </div>
          
          {subtitle && (
            <div 
              className="text-xs opacity-70"
              style={{ color: currentTheme.text.muted }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Hover Effect Line */}
        <div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r transition-all duration-500 ease-out"
          style={{
            width: isHovered ? '100%' : '0%',
            background: `linear-gradient(90deg, ${color || currentTheme.primary[500]}, ${color || currentTheme.secondary[500]})`
          }}
        />
      </div>
    </motion.div>
  );
};

// 数字计数动画组件
const CountUpAnimation: React.FC<{ target: number; duration?: number }> = ({ 
  target, 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target, duration]);
  
  return <span>{count.toLocaleString()}</span>;
};

// 美观的快速操作按钮
export const QuickActionButton: React.FC<{
  icon: React.ComponentType<any>;
  label: string;
  onClick: () => void;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  loading?: boolean;
  badge?: string | number;
}> = ({ 
  icon: Icon, 
  label, 
  onClick, 
  color, 
  size = 'md', 
  variant = 'primary',
  loading = false,
  badge
}) => {
  const { currentTheme } = useAcademicTheme();
  const { playSound, triggerVisualFeedback } = useAudioVisual();
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const handleClick = () => {
    if (loading) return;
    
    playSound('click');
    if (buttonRef.current) {
      triggerVisualFeedback(buttonRef.current, 'ripple');
    }
    onClick();
  };
  
  return (
    <motion.button
      ref={buttonRef}
      className={`
        relative group flex items-center gap-3 rounded-xl font-medium
        transition-all duration-300 ease-out overflow-hidden
        btn-enhanced ${sizes[size]}
        ${loading ? 'btn-state-loading' : ''}
      `}
      style={{
        background: variant === 'primary' 
          ? `linear-gradient(135deg, ${color || currentTheme.primary[500]}, ${color || currentTheme.primary[600]})`
          : variant === 'secondary'
          ? `linear-gradient(135deg, ${currentTheme.background.paper}E0, ${currentTheme.background.secondary}D0)`
          : 'transparent',
        color: variant === 'ghost' ? currentTheme.text.primary : '#ffffff',
        border: variant !== 'primary' ? `1px solid ${color || currentTheme.primary[500]}40` : 'none'
      }}
      onClick={handleClick}
      disabled={loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
      
      {badge && (
        <div 
          className="absolute -top-1 -right-1 px-2 py-1 text-xs font-bold rounded-full"
          style={{
            background: currentTheme.accent.burgundy,
            color: '#ffffff'
          }}
        >
          {badge}
        </div>
      )}
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.button>
  );
};

// 精美的进度条组件
export const ProgressBar: React.FC<{
  value: number;
  max?: number;
  label?: string;
  color?: string;
  showPercentage?: boolean;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
}> = ({ 
  value, 
  max = 100, 
  label, 
  color, 
  showPercentage = true, 
  animated = true,
  size = 'md'
}) => {
  const { currentTheme } = useAcademicTheme();
  const percentage = Math.min((value / max) * 100, 100);
  
  const heights = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span 
            className="text-sm font-medium"
            style={{ color: currentTheme.text.primary }}
          >
            {label}
          </span>
          {showPercentage && (
            <span 
              className="text-sm font-bold"
              style={{ color: color || currentTheme.primary[500] }}
            >
              {percentage.toFixed(1)}%
            </span>
          )}
        </div>
      )}
      
      <div 
        className={`relative ${heights[size]} rounded-full overflow-hidden`}
        style={{
          background: `${currentTheme.background.secondary}60`
        }}
      >
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, 
              ${color || currentTheme.primary[500]}, 
              ${color || currentTheme.primary[400]})`
          }}
          initial={animated ? { width: 0 } : { width: `${percentage}%` }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: animated ? 1.5 : 0, ease: "easeInOut" }}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
};

// 美观的标签组件
export const Badge: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  pulse?: boolean;
}> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  pulse = false 
}) => {
  const { currentTheme } = useAcademicTheme();
  
  const variants = {
    primary: {
      bg: `${currentTheme.primary[500]}20`,
      color: currentTheme.primary[500],
      border: `${currentTheme.primary[500]}40`
    },
    secondary: {
      bg: `${currentTheme.secondary[500]}20`,
      color: currentTheme.secondary[500],
      border: `${currentTheme.secondary[500]}40`
    },
    success: {
      bg: '#10b98120',
      color: '#10b981',
      border: '#10b98140'
    },
    warning: {
      bg: '#f59e0b20',
      color: '#f59e0b',
      border: '#f59e0b40'
    },
    error: {
      bg: '#ef444420',
      color: '#ef4444',
      border: '#ef444440'
    }
  };
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };
  
  return (
    <span 
      className={`
        inline-flex items-center rounded-full font-medium backdrop-blur-sm
        transition-all duration-300 ease-out
        ${sizes[size]} ${pulse ? 'animate-pulse' : ''}
      `}
      style={{
        background: variants[variant].bg,
        color: variants[variant].color,
        border: `1px solid ${variants[variant].border}`
      }}
    >
      {children}
    </span>
  );
};

// 高级搜索框组件
export const SearchInput: React.FC<{
  placeholder?: string;
  onSearch: (query: string) => void;
  loading?: boolean;
  suggestions?: string[];
}> = ({ 
  placeholder = "搜索材料、属性或功能...", 
  onSearch,
  loading = false,
  suggestions = []
}) => {
  const { currentTheme } = useAcademicTheme();
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      setShowSuggestions(false);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < suggestions.length) {
        handleSearch(suggestions[focusedIndex]);
        setQuery(suggestions[focusedIndex]);
      } else {
        handleSearch(query);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      inputRef.current?.blur();
    }
  };
  
  return (
    <div className="relative w-full">
      <div 
        className="relative flex items-center group"
        style={{
          background: `${currentTheme.background.paper}E0`,
          border: `1px solid ${currentTheme.primary[500]}20`,
          borderRadius: '12px'
        }}
      >
        <input
          ref={inputRef}
          type="text"
          className="w-full px-4 py-3 bg-transparent outline-none transition-all duration-300"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(e.target.value.length > 0 && suggestions.length > 0);
            setFocusedIndex(-1);
          }}
          onFocus={() => setShowSuggestions(query.length > 0 && suggestions.length > 0)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onKeyDown={handleKeyDown}
          style={{ color: currentTheme.text.primary }}
        />
        
        <button
          className="p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
          onClick={() => handleSearch(query)}
          disabled={loading}
        >
          {loading ? (
            <div className="loading-premium" />
          ) : (
            <ArrowRight 
              className="w-5 h-5" 
              style={{ color: currentTheme.primary[500] }}
            />
          )}
        </button>
      </div>
      
      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 rounded-xl shadow-modern-lg backdrop-blur-xl z-50 overflow-hidden"
            style={{
              background: `${currentTheme.background.paper}F0`,
              border: `1px solid ${currentTheme.primary[500]}20`
            }}
          >
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={`
                  px-4 py-3 cursor-pointer transition-all duration-200
                  ${index === focusedIndex ? 'bg-white/10' : 'hover:bg-white/5'}
                `}
                onClick={() => {
                  handleSearch(suggestion);
                  setQuery(suggestion);
                }}
                style={{ color: currentTheme.text.primary }}
              >
                {suggestion}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default {
  StatCard,
  QuickActionButton,
  ProgressBar,
  Badge,
  SearchInput
};