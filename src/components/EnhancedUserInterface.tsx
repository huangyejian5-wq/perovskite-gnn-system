import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Cpu, Atom, Beaker, TrendingUp, ChevronRight, X, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useAcademicTheme } from './AcademicTheme';

// 现代化欢迎横幅组件
export const ModernWelcomeBanner: React.FC<{ onStartTour?: () => void }> = ({ onStartTour }) => {
  const { currentTheme } = useAcademicTheme();
  const [showBanner, setShowBanner] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStartTour = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onStartTour?.();
      setShowBanner(false);
    }, 500);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-2xl mx-auto"
      >
        <div 
          className="relative overflow-hidden rounded-2xl p-6 backdrop-blur-2xl border shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.background.paper}E6, ${currentTheme.background.secondary}CC)`,
            borderColor: `${currentTheme.primary[400]}40`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 animate-gradient" />
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.primary[500]}, ${currentTheme.secondary[500]})`
                }}
              >
                <Atom className="w-6 h-6 text-white animate-spin-slow" />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-1" style={{ color: currentTheme.text.primary }}>
                  欢迎使用钙钛矿GNN预测系统！
                </h3>
                <p className="text-sm" style={{ color: currentTheme.text.secondary }}>
                  让我们快速了解系统的强大功能
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartTour}
                disabled={isAnimating}
                className="px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.primary[500]}, ${currentTheme.secondary[500]})`,
                  color: 'white'
                }}
              >
                <Play className="w-4 h-4" />
                开始导览
                <ChevronRight className={`w-4 h-4 transition-transform ${isAnimating ? 'translate-x-1' : ''}`} />
              </motion.button>
              
              <button
                onClick={() => setShowBanner(false)}
                className="p-2 rounded-lg transition-all duration-200 hover:bg-white/10"
              >
                <X className="w-4 h-4" style={{ color: currentTheme.text.secondary }} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// 浮动操作提示组件
export const FloatingHints: React.FC = () => {
  const { currentTheme } = useAcademicTheme();
  const [currentHint, setCurrentHint] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const hints = [
    { icon: Target, text: "使用 Ctrl+K 快速搜索功能", color: currentTheme.primary[500] },
    { icon: Cpu, text: "点击分子结构可以3D查看", color: currentTheme.secondary[500] },
    { icon: Beaker, text: "拖拽文件可快速导入数据", color: currentTheme.accent.forestGreen },
    { icon: TrendingUp, text: "双击图表可全屏查看", color: currentTheme.accent.burgundy }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHint(prev => (prev + 1) % hints.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [hints.length]);

  if (!isVisible) return null;

  const hint = hints[currentHint];

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentHint}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-xl border shadow-lg max-w-xs"
          style={{
            background: `${currentTheme.background.paper}F0`,
            borderColor: `${hint.color}40`
          }}
        >
          <hint.icon className="w-5 h-5 flex-shrink-0" style={{ color: hint.color }} />
          <span className="text-sm font-medium" style={{ color: currentTheme.text.primary }}>
            {hint.text}
          </span>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-2 p-1 rounded-md hover:bg-white/10 transition-colors"
          >
            <X className="w-3 h-3" style={{ color: currentTheme.text.secondary }} />
          </button>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

// 智能加载状态组件
export const IntelligentLoader: React.FC<{ 
  message?: string; 
  progress?: number; 
  showProgress?: boolean 
}> = ({ message = "处理中...", progress = 0, showProgress = false }) => {
  const { currentTheme } = useAcademicTheme();
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center gap-6 p-8"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: currentTheme.primary[500],
            borderRightColor: currentTheme.secondary[500]
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 w-12 h-12 rounded-full border-4 border-transparent"
          style={{
            borderBottomColor: currentTheme.accent.forestGreen,
            borderLeftColor: currentTheme.accent.burgundy
          }}
        />
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2" style={{ color: currentTheme.text.primary }}>
          {message}{dots}
        </h3>
        
        {showProgress && (
          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${currentTheme.primary[500]}, ${currentTheme.secondary[500]})`
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        )}
        
        <p className="text-sm" style={{ color: currentTheme.text.secondary }}>
          {showProgress ? `进度: ${progress}%` : '请稍候，系统正在处理您的请求'}
        </p>
      </div>
    </motion.div>
  );
};

// 现代化音频控制面板
export const AudioControlPanel: React.FC = () => {
  const { currentTheme } = useAcademicTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-6 left-6 z-40"
    >
      <div 
        className="flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-xl border"
        style={{
          background: `${currentTheme.background.paper}F0`,
          borderColor: `${currentTheme.primary[400]}40`
        }}
      >
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-lg transition-all duration-200 hover:bg-white/10"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" style={{ color: currentTheme.primary[500] }} />
          ) : (
            <Play className="w-4 h-4" style={{ color: currentTheme.text.secondary }} />
          )}
        </button>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 rounded-lg transition-all duration-200 hover:bg-white/10"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" style={{ color: currentTheme.text.secondary }} />
          ) : (
            <Volume2 className="w-4 h-4" style={{ color: currentTheme.secondary[500] }} />
          )}
        </button>

        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-16 h-1 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, ${currentTheme.primary[500]} 0%, ${currentTheme.primary[500]} ${volume * 100}%, ${currentTheme.background.secondary} ${volume * 100}%, ${currentTheme.background.secondary} 100%)`
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// 快速操作面板
export const QuickActionPanel: React.FC<{ actions: Array<{ icon: React.ComponentType<any>; label: string; onClick: () => void; color?: string }> }> = ({ actions }) => {
  const { currentTheme } = useAcademicTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40">
      <motion.div
        initial={false}
        animate={{ x: isExpanded ? 0 : 200 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex flex-col items-end"
      >
        <div 
          className="backdrop-blur-xl border rounded-l-2xl p-4"
          style={{
            background: `${currentTheme.background.paper}F0`,
            borderColor: `${currentTheme.primary[400]}40`
          }}
        >
          <div className="flex flex-col gap-3">
            {actions.map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={action.onClick}
                className="p-3 rounded-lg transition-all duration-200 hover:bg-white/10 group"
                title={action.label}
              >
                <action.icon 
                  className="w-5 h-5" 
                  style={{ color: action.color || currentTheme.primary[500] }} 
                />
              </motion.button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 p-2 rounded-l-lg backdrop-blur-xl border-l border-t border-b transition-all duration-200 hover:bg-white/10"
          style={{
            background: `${currentTheme.background.paper}F0`,
            borderColor: `${currentTheme.primary[400]}40`
          }}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 0 : 180 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-4 h-4" style={{ color: currentTheme.text.secondary }} />
          </motion.div>
        </button>
      </motion.div>
    </div>
  );
};

// 实时状态卡片增强版
export const EnhancedStatusCard: React.FC<{
  title: string;
  value: string | number;
  icon: React.ComponentType<any>;
  trend?: 'up' | 'down' | 'stable';
  color?: string;
  subtitle?: string;
}> = ({ title, value, icon: Icon, trend = 'stable', color, subtitle }) => {
  const { currentTheme } = useAcademicTheme();
  const cardColor = color || currentTheme.primary[500];

  const getTrendIcon = () => {
    if (trend === 'up') return <TrendingUp className="w-3 h-3" style={{ color: currentTheme.accent.forestGreen }} />;
    if (trend === 'down') return <TrendingUp className="w-3 h-3 rotate-180" style={{ color: currentTheme.accent.burgundy }} />;
    return <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentTheme.text.muted }} />;
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="p-6 rounded-xl backdrop-blur-xl border transition-all duration-300 hover:shadow-2xl"
      style={{
        background: `${currentTheme.background.paper}E6`,
        borderColor: `${cardColor}40`
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div 
          className="p-3 rounded-lg"
          style={{
            background: `${cardColor}20`,
            color: cardColor
          }}
        >
          <Icon className="w-6 h-6" />
        </div>
        {getTrendIcon()}
      </div>

      <div>
        <h3 className="text-sm font-medium mb-1" style={{ color: currentTheme.text.secondary }}>
          {title}
        </h3>
        <div className="text-2xl font-bold mb-2" style={{ color: currentTheme.text.primary }}>
          {value}
        </div>
        {subtitle && (
          <p className="text-xs" style={{ color: currentTheme.text.muted }}>
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};