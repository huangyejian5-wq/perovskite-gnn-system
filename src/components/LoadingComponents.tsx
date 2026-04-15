import React from 'react';
import { Loader, Cpu, Database, BarChart3, Activity, Zap, Brain, Atom } from 'lucide-react';

// 专业级加载器组件
export const LoadingSpinner: React.FC<{ 
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}> = ({ size = 'md', color = '#3b82f6', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg 
        className="animate-spin" 
        viewBox="0 0 24 24" 
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-25"
          style={{ color }}
        />
        <path
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill="currentColor"
          style={{ color }}
        />
      </svg>
    </div>
  );
};

// AI神经网络加载动画
export const NeuralNetworkLoader: React.FC<{ size?: number }> = ({ size = 120 }) => {
  return (
    <div className="flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 120 120" className="animate-neural-pulse">
        {/* 神经元节点 */}
        <circle cx="30" cy="30" r="6" fill="#3b82f6" className="animate-atom-pulse">
          <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="90" cy="30" r="6" fill="#10b981" className="animate-atom-pulse">
          <animate attributeName="r" values="6;10;6" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="60" r="8" fill="#8b5cf6" className="animate-atom-pulse">
          <animate attributeName="r" values="6;12;6" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="90" r="6" fill="#f59e0b" className="animate-atom-pulse">
          <animate attributeName="r" values="5;9;5" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="90" cy="90" r="6" fill="#ec4899" className="animate-atom-pulse">
          <animate attributeName="r" values="4;8;4" dur="1.9s" repeatCount="indefinite" />
        </circle>
        
        {/* 连接线 */}
        <line x1="30" y1="30" x2="60" y2="60" stroke="#3b82f6" strokeWidth="2" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="90" y1="30" x2="60" y2="60" stroke="#10b981" strokeWidth="2" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.3s" repeatCount="indefinite" />
        </line>
        <line x1="60" y1="60" x2="30" y2="90" stroke="#8b5cf6" strokeWidth="2" opacity="0.6">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
        </line>
        <line x1="60" y1="60" x2="90" y2="90" stroke="#f59e0b" strokeWidth="2" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.1s" repeatCount="indefinite" />
        </line>
        
        {/* 数据流动效果 */}
        <circle r="2" fill="#ffffff" opacity="0.8">
          <animateMotion dur="3s" repeatCount="indefinite">
            <path d="M30,30 L60,60 L90,90" />
          </animateMotion>
        </circle>
        <circle r="2" fill="#ffffff" opacity="0.6">
          <animateMotion dur="3.5s" repeatCount="indefinite">
            <path d="M90,30 L60,60 L30,90" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
};

// 分子结构加载动画
export const MolecularLoader: React.FC<{ size?: number }> = ({ size = 100 }) => {
  return (
    <div className="flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 100 100" className="animate-molecular-vibration">
        {/* 中心原子 */}
        <circle cx="50" cy="50" r="8" fill="#ef4444" className="animate-atom-pulse">
          <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
        </circle>
        
        {/* 环绕原子 */}
        <g className="animate-spin-slow">
          <circle cx="50" cy="25" r="4" fill="#3b82f6">
            <animate attributeName="r" values="3;6;3" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="75" cy="50" r="4" fill="#10b981">
            <animate attributeName="r" values="3;6;3" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="75" r="4" fill="#f59e0b">
            <animate attributeName="r" values="3;6;3" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="25" cy="50" r="4" fill="#8b5cf6">
            <animate attributeName="r" values="3;6;3" dur="1.7s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* 化学键 */}
        <line x1="50" y1="50" x2="50" y2="25" stroke="#666" strokeWidth="2" className="animate-bond-vibrate" />
        <line x1="50" y1="50" x2="75" y2="50" stroke="#666" strokeWidth="2" className="animate-bond-vibrate" />
        <line x1="50" y1="50" x2="50" y2="75" stroke="#666" strokeWidth="2" className="animate-bond-vibrate" />
        <line x1="50" y1="50" x2="25" y2="50" stroke="#666" strokeWidth="2" className="animate-bond-vibrate" />
        
        {/* 电子轨道 */}
        <circle cx="50" cy="50" r="30" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3">
          <animate attributeName="r" values="28;32;28" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

// 数据处理加载器
export const DataProcessingLoader: React.FC<{ text?: string }> = ({ text = "处理数据中" }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500/20 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Database className="w-6 h-6 text-blue-500 animate-pulse" />
        </div>
      </div>
      <div className="text-center">
        <div className="text-white font-medium">{text}</div>
        <div className="flex items-center justify-center gap-1 mt-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-loading-dots"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-loading-dots" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-loading-dots" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

// 骨架屏组件
export const SkeletonCard: React.FC<{ 
  className?: string;
  showAvatar?: boolean;
  lines?: number;
}> = ({ className = '', showAvatar = false, lines = 3 }) => {
  return (
    <div className={`glass-card rounded-xl p-6 animate-fade-in ${className}`}>
      <div className="flex items-start gap-4">
        {showAvatar && (
          <div className="w-12 h-12 bg-white/10 rounded-full loading-skeleton"></div>
        )}
        <div className="flex-1 space-y-3">
          <div className="h-4 bg-white/10 rounded loading-skeleton w-3/4"></div>
          {Array.from({ length: lines }).map((_, i) => (
            <div 
              key={i}
              className="h-3 bg-white/10 rounded loading-skeleton"
              style={{ width: `${Math.random() * 40 + 50}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SkeletonChart: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`glass-card rounded-xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="h-6 bg-white/10 rounded loading-skeleton w-32"></div>
        <div className="h-8 bg-white/10 rounded loading-skeleton w-20"></div>
      </div>
      <div className="h-64 bg-white/5 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 loading-skeleton"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
      </div>
    </div>
  );
};

export const SkeletonMetric: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`data-card rounded-xl p-4 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="w-8 h-8 bg-white/10 rounded-lg loading-skeleton"></div>
        <div className="h-4 bg-white/10 rounded loading-skeleton w-12"></div>
      </div>
      <div className="h-8 bg-white/10 rounded loading-skeleton w-20 mb-2"></div>
      <div className="h-3 bg-white/10 rounded loading-skeleton w-16"></div>
    </div>
  );
};

// 页面级加载组件
export const PageLoader: React.FC<{ 
  type?: 'neural' | 'molecular' | 'data' | 'spinner';
  text?: string;
  fullScreen?: boolean;
}> = ({ type = 'neural', text, fullScreen = false }) => {
  const getLoader = () => {
    switch (type) {
      case 'neural':
        return <NeuralNetworkLoader />;
      case 'molecular':
        return <MolecularLoader />;
      case 'data':
        return <DataProcessingLoader text={text} />;
      case 'spinner':
      default:
        return <LoadingSpinner size="xl" />;
    }
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-6">
      {getLoader()}
      {text && type !== 'data' && (
        <div className="text-center">
          <div className="text-white text-lg font-medium">{text}</div>
          <div className="text-gray-400 text-sm mt-1">请稍候...</div>
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="glass-card rounded-2xl p-8">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      {content}
    </div>
  );
};

// 智能提示系统组件
export interface SmartTip {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'feature';
  title: string;
  content: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
  showCloseButton?: boolean;
}

export const SmartTipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tips, setTips] = React.useState<SmartTip[]>([]);

  const addTip = React.useCallback((tip: Omit<SmartTip, 'id'>) => {
    const duration = tip.duration || 5000;
    const newTip: SmartTip = {
      ...tip,
      id: `tip_${Date.now()}_${Math.random()}`,
      duration,
      showCloseButton: tip.showCloseButton !== false
    };

    setTips(prev => [...prev, newTip]);

    if (duration > 0) {
      setTimeout(() => {
        setTips(prev => prev.filter(t => t.id !== newTip.id));
      }, duration);
    }
  }, []);

  const removeTip = React.useCallback((id: string) => {
    setTips(prev => prev.filter(tip => tip.id !== id));
  }, []);

  const contextValue = React.useMemo(() => ({
    addTip,
    removeTip,
    tips
  }), [addTip, removeTip, tips]);

  return (
    <SmartTipContext.Provider value={contextValue}>
      {children}
      <SmartTipContainer tips={tips} onRemove={removeTip} />
    </SmartTipContext.Provider>
  );
};

const SmartTipContext = React.createContext<{
  addTip: (tip: Omit<SmartTip, 'id'>) => void;
  removeTip: (id: string) => void;
  tips: SmartTip[];
} | null>(null);

export const useSmartTips = () => {
  const context = React.useContext(SmartTipContext);
  if (!context) {
    throw new Error('useSmartTips must be used within SmartTipProvider');
  }
  return context;
};

const SmartTipContainer: React.FC<{ 
  tips: SmartTip[];
  onRemove: (id: string) => void;
}> = ({ tips, onRemove }) => {
  const getIcon = (type: SmartTip['type']) => {
    switch (type) {
      case 'success':
        return <Activity className="w-5 h-5 text-green-400" />;
      case 'warning':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'error':
        return <Activity className="w-5 h-5 text-red-400" />;
      case 'feature':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'info':
      default:
        return <BarChart3 className="w-5 h-5 text-blue-400" />;
    }
  };

  const getColorClasses = (type: SmartTip['type']) => {
    switch (type) {
      case 'success':
        return 'border-green-400/30 bg-green-500/10';
      case 'warning':
        return 'border-yellow-400/30 bg-yellow-500/10';
      case 'error':
        return 'border-red-400/30 bg-red-500/10';
      case 'feature':
        return 'border-purple-400/30 bg-purple-500/10';
      case 'info':
      default:
        return 'border-blue-400/30 bg-blue-500/10';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm">
      {tips.map(tip => (
        <div
          key={tip.id}
          className={`glass-card rounded-xl p-4 border ${getColorClasses(tip.type)} animate-slide-in-right`}
        >
          <div className="flex items-start gap-3">
            {getIcon(tip.type)}
            <div className="flex-1 min-w-0">
              <div className="font-medium text-white text-sm">{tip.title}</div>
              <div className="text-gray-300 text-xs mt-1 leading-relaxed">{tip.content}</div>
              {tip.action && (
                <button
                  onClick={tip.action.onClick}
                  className="mt-2 text-xs text-blue-400 hover:text-blue-300 font-medium"
                >
                  {tip.action.label} →
                </button>
              )}
            </div>
            {tip.showCloseButton && (
              <button
                onClick={() => onRemove(tip.id)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// 高级骨架屏组件
export const TableSkeleton: React.FC<{ rows?: number; columns?: number; className?: string }> = ({ 
  rows = 5, 
  columns = 4, 
  className = '' 
}) => {
  return (
    <div className={`glass-card rounded-xl p-6 ${className}`}>
      {/* Table Header */}
      <div className="flex gap-4 mb-4 pb-3 border-b border-white/10">
        {Array.from({ length: columns }).map((_, i) => (
          <div 
            key={i}
            className="h-4 bg-white/10 rounded loading-skeleton flex-1"
            style={{ animationDelay: `${i * 100}ms` }}
          ></div>
        ))}
      </div>
      
      {/* Table Rows */}
      <div className="space-y-3">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-4" style={{ animationDelay: `${rowIndex * 150}ms` }}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div 
                key={colIndex}
                className="h-8 bg-white/10 rounded loading-skeleton flex-1"
                style={{ 
                  animationDelay: `${(rowIndex * columns + colIndex) * 50}ms`,
                  width: colIndex === 0 ? '40%' : undefined
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const CardGridSkeleton: React.FC<{ 
  cards?: number; 
  columns?: number; 
  className?: string 
}> = ({ cards = 6, columns = 3, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 ${className}`}>
      {Array.from({ length: cards }).map((_, index) => (
        <div 
          key={index} 
          className="glass-card rounded-xl p-6 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl loading-skeleton"></div>
            <div className="flex-1">
              <div className="h-4 bg-white/10 rounded loading-skeleton w-3/4 mb-2"></div>
              <div className="h-3 bg-white/10 rounded loading-skeleton w-1/2"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-white/10 rounded loading-skeleton"></div>
            <div className="h-3 bg-white/10 rounded loading-skeleton w-4/5"></div>
            <div className="h-3 bg-white/10 rounded loading-skeleton w-2/3"></div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="h-8 bg-white/10 rounded-lg loading-skeleton w-24"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ChartSkeleton: React.FC<{ type?: 'line' | 'bar' | 'pie'; className?: string }> = ({ 
  type = 'line', 
  className = '' 
}) => {
  return (
    <div className={`glass-card rounded-xl p-6 ${className}`}>
      {/* Chart Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="h-6 bg-white/10 rounded loading-skeleton w-32"></div>
        <div className="flex gap-2">
          <div className="h-8 bg-white/10 rounded loading-skeleton w-20"></div>
          <div className="h-8 bg-white/10 rounded loading-skeleton w-16"></div>
        </div>
      </div>
      
      {/* Chart Area */}
      <div className="h-80 bg-white/5 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 loading-skeleton"></div>
        
        {type === 'line' && (
          <div className="absolute inset-4">
            {/* Grid lines */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i}
                className="absolute left-0 right-0 h-px bg-white/10"
                style={{ top: `${i * 25}%` }}
              ></div>
            ))}
            
            {/* Line chart simulation */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/30 via-purple-500/20 to-transparent animate-pulse"></div>
          </div>
        )}
        
        {type === 'bar' && (
          <div className="absolute inset-4 flex items-end gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={i}
                className="bg-gradient-to-t from-blue-500/40 to-purple-500/20 rounded-t loading-skeleton flex-1"
                style={{ 
                  height: `${Math.random() * 80 + 20}%`,
                  animationDelay: `${i * 100}ms`
                }}
              ></div>
            ))}
          </div>
        )}
        
        {type === 'pie' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 loading-skeleton"></div>
          </div>
        )}
      </div>
      
      {/* Chart Legend */}
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 bg-white/20 rounded loading-skeleton"></div>
            <div className="h-3 bg-white/10 rounded loading-skeleton w-16"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ListSkeleton: React.FC<{ items?: number; showAvatar?: boolean; className?: string }> = ({ 
  items = 8, 
  showAvatar = true, 
  className = '' 
}) => {
  return (
    <div className={`glass-card rounded-xl p-6 ${className}`}>
      <div className="space-y-4">
        {Array.from({ length: items }).map((_, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 p-3 bg-white/5 rounded-lg animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {showAvatar && (
              <div className="w-10 h-10 bg-white/10 rounded-full loading-skeleton flex-shrink-0"></div>
            )}
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-white/10 rounded loading-skeleton w-3/4"></div>
              <div className="h-3 bg-white/10 rounded loading-skeleton w-1/2"></div>
            </div>
            <div className="flex gap-2">
              <div className="h-6 bg-white/10 rounded loading-skeleton w-12"></div>
              <div className="h-6 bg-white/10 rounded loading-skeleton w-8"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProfileSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`glass-card rounded-xl p-6 ${className}`}>
      {/* Profile Header */}
      <div className="flex items-center gap-6 mb-6">
        <div className="w-24 h-24 bg-white/10 rounded-full loading-skeleton"></div>
        <div className="flex-1">
          <div className="h-6 bg-white/10 rounded loading-skeleton w-48 mb-3"></div>
          <div className="h-4 bg-white/10 rounded loading-skeleton w-32 mb-2"></div>
          <div className="h-3 bg-white/10 rounded loading-skeleton w-64"></div>
        </div>
        <div className="flex gap-2">
          <div className="h-10 bg-white/10 rounded-lg loading-skeleton w-20"></div>
          <div className="h-10 bg-white/10 rounded-lg loading-skeleton w-24"></div>
        </div>
      </div>
      
      {/* Profile Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="text-center p-4 bg-white/5 rounded-lg">
            <div className="h-8 bg-white/10 rounded loading-skeleton w-16 mx-auto mb-2"></div>
            <div className="h-3 bg-white/10 rounded loading-skeleton w-20 mx-auto"></div>
          </div>
        ))}
      </div>
      
      {/* Profile Content */}
      <div className="space-y-4">
        <div className="h-5 bg-white/10 rounded loading-skeleton w-32"></div>
        <div className="space-y-2">
          <div className="h-3 bg-white/10 rounded loading-skeleton"></div>
          <div className="h-3 bg-white/10 rounded loading-skeleton w-5/6"></div>
          <div className="h-3 bg-white/10 rounded loading-skeleton w-4/5"></div>
          <div className="h-3 bg-white/10 rounded loading-skeleton w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export const PageSkeleton: React.FC<{ layout?: 'dashboard' | 'list' | 'detail'; className?: string }> = ({ 
  layout = 'dashboard', 
  className = '' 
}) => {
  if (layout === 'dashboard') {
    return (
      <div className={`space-y-6 ${className}`}>
        {/* Header */}
        <div className="glass-card rounded-xl p-6">
          <div className="h-8 bg-white/10 rounded loading-skeleton w-64 mb-4"></div>
          <div className="h-4 bg-white/10 rounded loading-skeleton w-96"></div>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonMetric key={i} />
          ))}
        </div>
        
        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartSkeleton type="line" />
          <ChartSkeleton type="bar" />
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TableSkeleton />
          </div>
          <div>
            <ListSkeleton items={6} />
          </div>
        </div>
      </div>
    );
  }
  
  if (layout === 'list') {
    return (
      <div className={`space-y-6 ${className}`}>
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="h-6 bg-white/10 rounded loading-skeleton w-48"></div>
            <div className="flex gap-2">
              <div className="h-10 bg-white/10 rounded-lg loading-skeleton w-24"></div>
              <div className="h-10 bg-white/10 rounded-lg loading-skeleton w-20"></div>
            </div>
          </div>
          <CardGridSkeleton cards={9} columns={3} />
        </div>
      </div>
    );
  }
  
  if (layout === 'detail') {
    return (
      <div className={`space-y-6 ${className}`}>
        <ProfileSkeleton />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartSkeleton type="pie" />
          <ListSkeleton />
        </div>
      </div>
    );
  }
  
  return null;
};

export default {
  LoadingSpinner,
  NeuralNetworkLoader,
  MolecularLoader,
  DataProcessingLoader,
  SkeletonCard,
  SkeletonChart,
  SkeletonMetric,
  TableSkeleton,
  CardGridSkeleton,
  ChartSkeleton,
  ListSkeleton,
  ProfileSkeleton,
  PageSkeleton,
  PageLoader,
  SmartTipProvider,
  useSmartTips
};