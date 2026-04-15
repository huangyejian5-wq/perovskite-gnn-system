import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [displayLocation, setDisplayLocation] = useState(useLocation());
  const [transitionStage, setTransitionStage] = useState<'fadeIn' | 'fadeOut'>('fadeIn');
  const location = useLocation();

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  const onAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setDisplayLocation(location);
      setTransitionStage('fadeIn');
    }
  };

  return (
    <div
      className={`page-transition ${
        transitionStage === 'fadeIn' ? 'animate-page-in' : 'animate-page-out'
      }`}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
};

// Simple Loading Spinner Component  
export const SimpleLoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg'; color?: string }> = ({ 
  size = 'md', 
  color = 'text-blue-400' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${color} animate-spinner`}>
      <svg className="w-full h-full" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};

// Skeleton Loading Component
export const SkeletonLoader: React.FC<{ 
  width?: string; 
  height?: string; 
  className?: string 
}> = ({ 
  width = 'w-full', 
  height = 'h-4', 
  className = '' 
}) => {
  return (
    <div 
      className={`${width} ${height} bg-gray-700 rounded animate-skeleton ${className}`}
    />
  );
};

// Interactive Card Wrapper
export const InteractiveCard: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  enableHover?: boolean;
  enablePress?: boolean;
}> = ({ 
  children, 
  onClick, 
  className = '', 
  enableHover = true, 
  enablePress = true 
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        glass-card 
        ${enableHover ? 'card-hover' : ''} 
        ${enablePress ? 'card-press' : ''} 
        ${onClick ? 'cursor-pointer' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// Enhanced Button with Ripple Effect
export const RippleButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'control';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  className = '',
  icon 
}) => {
  const baseClasses = `
    btn-ripple relative overflow-hidden transition-all duration-300 
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `;
  
  const variantClasses = {
    primary: 'btn-primary btn-glow',
    secondary: 'btn-secondary',
    control: 'btn-control'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${className}
      `}
      disabled={disabled}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </div>
    </button>
  );
};

// Progress Bar Component
export const ProgressBar: React.FC<{
  progress: number;
  animated?: boolean;
  color?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}> = ({ 
  progress, 
  animated = false, 
  color = 'bg-blue-500', 
  showLabel = false,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-300">Progress</span>
          <span className="text-sm text-white font-medium">{progress.toFixed(1)}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-700 rounded-full ${sizeClasses[size]} overflow-hidden`}>
        <div
          className={`
            ${color} ${sizeClasses[size]} rounded-full transition-all duration-500 
            ${animated ? 'animate-progress-pulse' : ''}
          `}
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
};

// Notification Toast Component
export const Toast: React.FC<{
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
  duration?: number;
}> = ({ message, type = 'info', onClose, duration = 4000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const typeStyles = {
    success: 'border-green-400 bg-green-500/10 text-green-300',
    error: 'border-red-400 bg-red-500/10 text-red-300',
    warning: 'border-yellow-400 bg-yellow-500/10 text-yellow-300',
    info: 'border-blue-400 bg-blue-500/10 text-blue-300'
  };

  return (
    <div className={`
      fixed top-4 right-4 z-50 p-4 rounded-lg border backdrop-blur-sm
      ${typeStyles[type]} animate-notification-slide
    `}>
      <div className="flex items-center justify-between gap-3">
        <span className="font-medium">{message}</span>
        <button 
          onClick={onClose}
          className="text-current hover:opacity-75 transition-opacity"
        >
          ×
        </button>
      </div>
    </div>
  );
};

// Basic Floating Action Button
export const BasicFloatingActionButton: React.FC<{
  icon: React.ReactNode;
  onClick: () => void;
  position?: 'bottom-right' | 'bottom-left';
  color?: string;
}> = ({ icon, onClick, position = 'bottom-right', color = 'bg-blue-500' }) => {
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6'
  };

  return (
    <button
      onClick={onClick}
      className={`
        fixed ${positionClasses[position]} z-40 w-14 h-14 
        ${color} rounded-full shadow-2xl flex items-center justify-center
        text-white hover:scale-110 active:scale-95 transition-all duration-300
        animate-float
      `}
    >
      {icon}
    </button>
  );
};

// Data Visualization Wrapper
export const ChartWrapper: React.FC<{
  children: React.ReactNode;
  title?: string;
  loading?: boolean;
  error?: string;
}> = ({ children, title, loading = false, error }) => {
  if (loading) {
    return (
      <div className="chart-container flex items-center justify-center h-64">
        <div className="text-center">
          <SimpleLoadingSpinner size="lg" />
          <p className="text-gray-400 mt-4">Loading chart data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="chart-container flex items-center justify-center h-64">
        <div className="text-center text-red-400">
          <p>Error loading chart: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chart-container animate-chart-load">
      {title && (
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
};