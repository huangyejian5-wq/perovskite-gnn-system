import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Sparkles, Zap, Target } from 'lucide-react';

// 全局动画配置
export const ANIMATION_CONFIG = {
  // 基础动画时长
  durations: {
    fast: 150,
    normal: 300,
    slow: 600,
    epic: 1200
  },
  
  // 缓动函数（CSS）
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    dramatic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }
};

// 粒子系统组件
interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  type: 'spark' | 'star' | 'circle';
}

export const ParticleSystem: React.FC<{
  active?: boolean;
  intensity?: number;
  className?: string;
}> = ({ active = false, intensity = 1, className = '' }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const createParticle = useCallback((x: number, y: number): Particle => {
    const types: Particle['type'][] = ['spark', 'star', 'circle'];
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];
    
    return {
      id: Math.random().toString(36),
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      life: 0,
      maxLife: 60 + Math.random() * 40,
      size: 2 + Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: types[Math.floor(Math.random() * types.length)]
    };
  }, []);

  const updateParticles = useCallback(() => {
    if (!active) return;

    setParticles(prev => {
      let newParticles = prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        life: particle.life + 1,
        vy: particle.vy + 0.1,
        vx: particle.vx * 0.99
      })).filter(particle => particle.life < particle.maxLife);

      if (Math.random() < 0.05 * intensity && newParticles.length < 50) {
        const canvas = canvasRef.current;
        if (canvas) {
          newParticles.push(createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          ));
        }
      }

      return newParticles;
    });
  }, [active, intensity, createParticle]);

  useEffect(() => {
    if (active) {
      const animate = () => {
        updateParticles();
        animationRef.current = requestAnimationFrame(animate);
      };
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [active, updateParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        const alpha = 1 - (particle.life / particle.maxLife);
        ctx.globalAlpha = alpha;
        
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    };

    draw();
  }, [particles]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      width={typeof window !== 'undefined' ? window.innerWidth : 1920}
      height={typeof window !== 'undefined' ? window.innerHeight : 1080}
    />
  );
};

// 鼠标跟随效果组件
export const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX - 8, y: e.clientY - 8 });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], .interactive')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className={`fixed top-0 left-0 w-4 h-4 bg-blue-500/30 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-300 ${
        isHovering ? 'scale-200 opacity-80' : 'scale-100 opacity-60'
      }`}
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
      }}
    />
  );
};

// 增强型按钮组件
interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  disabled = false,
  loading = false
}) => {
  const [ripples, setRipples] = useState<Array<{ id: string; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Math.random().toString(36),
      x,
      y
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105';
      case 'secondary':
        return 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:scale-105';
      case 'ghost':
        return 'text-white hover:bg-white/10 hover:scale-105';
      default:
        return '';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3';
    }
  };

  return (
    <button
      className={`
        relative overflow-hidden rounded-lg font-medium transition-all duration-300 ease-out
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'interactive hover:brightness-110 active:scale-95'}
        ${className}
      `}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {/* 涟漪效果 */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x - 8,
            top: ripple.y - 8,
            width: 16,
            height: 16,
            animationDuration: '0.6s'
          }}
        />
      ))}

      {/* 按钮内容 */}
      <span className="relative z-10 flex items-center gap-2">
        {loading && (
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        )}
        {icon && !loading && (
          <span className="transition-transform duration-200 hover:scale-110 hover:rotate-12">
            {icon}
          </span>
        )}
        {children}
      </span>

      {/* 背景光效 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out" />
    </button>
  );
};

// 简单浮动动作按钮
export const SimpleFloatingButton: React.FC<{
  icon: React.ReactNode;
  onClick: () => void;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  color?: string;
  pulse?: boolean;
}> = ({ 
  icon, 
  onClick, 
  position = 'bottom-right',
  color = 'from-blue-500 to-purple-600',
  pulse = false 
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-6 left-6';
      case 'top-right':
        return 'top-6 right-6';
      case 'top-left':
        return 'top-6 left-6';
      default:
        return 'bottom-6 right-6';
    }
  };

  return (
    <button
      className={`
        fixed ${getPositionClasses()} z-50
        w-14 h-14 bg-gradient-to-r ${color} rounded-full
        flex items-center justify-center text-white shadow-2xl
        hover:shadow-3xl transition-all duration-300 ease-out
        hover:scale-110 active:scale-90 animate-fade-in
        ${pulse ? 'animate-pulse' : ''}
      `}
      onClick={onClick}
      style={{
        animation: pulse ? 'pulse 2s infinite, fadeIn 0.5s ease-out' : 'fadeIn 0.5s ease-out'
      }}
    >
      <div className={`transition-transform duration-200 ${pulse ? 'animate-bounce' : ''}`}>
        {icon}
      </div>
    </button>
  );
};

// 渐进式数字动画
export const AnimatedCounter: React.FC<{
  value: number;
  duration?: number;
  decimals?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}> = ({ value, duration = 1000, decimals = 0, className = '', prefix = '', suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const start = displayValue;
    const startTime = Date.now();

    const updateValue = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = start + (value - start) * easeProgress;
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };

    requestAnimationFrame(updateValue);
  }, [value, duration, displayValue]);

  return (
    <span
      ref={ref}
      className={`animate-fade-in ${className}`}
    >
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
};

// 高级卡片悬停效果
export const EnhancedCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  tiltIntensity?: number;
}> = ({ children, className = '', glowColor = '#3b82f6', tiltIntensity = 5 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    setMousePosition({
      x: (e.clientX - centerX) / (rect.width / 2),
      y: (e.clientY - centerY) / (rect.height / 2)
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl transition-all duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        transform: isHovering 
          ? `perspective(1000px) rotateY(${mousePosition.x * tiltIntensity}deg) rotateX(${-mousePosition.y * tiltIntensity}deg) scale(1.05)` 
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* 发光边框效果 */}
      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `linear-gradient(45deg, ${glowColor}40, transparent, ${glowColor}40)`,
          filter: 'blur(8px)',
        }}
      />
      
      {/* 光线追踪效果 */}
      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-200 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, ${glowColor}20, transparent 70%)`,
        }}
      />

      <div style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>
    </div>
  );
};

// 简单页面转场动画
export const SimplePageTransition: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`animate-slide-in-up ${className}`}>
      {children}
    </div>
  );
};

// 导出动画系统
export default {
  ANIMATION_CONFIG,
  ParticleSystem,
  MouseFollower,
  AnimatedButton,
  SimpleFloatingButton,
  AnimatedCounter,
  EnhancedCard,
  SimplePageTransition
};