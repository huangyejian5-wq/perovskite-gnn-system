import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useAcademicTheme } from './AcademicTheme';

// 高级粒子系统组件
export const AdvancedParticleSystem: React.FC<{
  count?: number;
  size?: 'sm' | 'md' | 'lg';
  speed?: 'slow' | 'medium' | 'fast';
  type?: 'dots' | 'molecules' | 'sparkles' | 'academic';
}> = ({ count = 50, size = 'md', speed = 'medium', type = 'academic' }) => {
  const { currentTheme } = useAcademicTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    phase: number;
    type: string;
  }>>([]);

  const sizeMap = { sm: 2, md: 4, lg: 6 };
  const speedMap = { slow: 0.3, medium: 0.5, fast: 0.8 };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 初始化粒子
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speedMap[speed],
      vy: (Math.random() - 0.5) * speedMap[speed],
      size: sizeMap[size] * (0.5 + Math.random() * 0.5),
      opacity: 0.1 + Math.random() * 0.4,
      phase: Math.random() * Math.PI * 2,
      type: ['atom', 'bond', 'electron'][Math.floor(Math.random() * 3)]
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // 更新位置
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.phase += 0.02;

        // 边界处理
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // 呼吸效果
        const breathe = 1 + Math.sin(particle.phase) * 0.3;
        const currentSize = particle.size * breathe;
        const currentOpacity = particle.opacity * (0.5 + Math.sin(particle.phase) * 0.5);

        ctx.save();
        ctx.globalAlpha = currentOpacity;

        if (type === 'academic') {
          // 学术风格粒子
          if (particle.type === 'atom') {
            // 原子核
            const gradient = ctx.createRadialGradient(
              particle.x, particle.y, 0,
              particle.x, particle.y, currentSize * 2
            );
            gradient.addColorStop(0, currentTheme.primary[400]);
            gradient.addColorStop(0.7, currentTheme.primary[500] + '60');
            gradient.addColorStop(1, 'transparent');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, currentSize * 2, 0, Math.PI * 2);
            ctx.fill();

            // 内核
            ctx.fillStyle = currentTheme.primary[300];
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, currentSize * 0.5, 0, Math.PI * 2);
            ctx.fill();
          } else if (particle.type === 'bond') {
            // 化学键
            ctx.strokeStyle = currentTheme.secondary[400] + '80';
            ctx.lineWidth = currentSize * 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x - currentSize, particle.y);
            ctx.lineTo(particle.x + currentSize, particle.y);
            ctx.stroke();
          }
        } else if (type === 'molecules') {
          // 分子结构
          const sides = 6;
          ctx.strokeStyle = currentTheme.primary[400] + '60';
          ctx.lineWidth = 1;
          ctx.beginPath();
          for (let i = 0; i <= sides; i++) {
            const angle = (i / sides) * Math.PI * 2 + particle.phase;
            const x = particle.x + Math.cos(angle) * currentSize;
            const y = particle.y + Math.sin(angle) * currentSize;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        } else if (type === 'sparkles') {
          // 闪烁星星
          ctx.fillStyle = currentTheme.secondary[400];
          const spikes = 8;
          ctx.beginPath();
          for (let i = 0; i < spikes; i++) {
            const angle = (i / spikes) * Math.PI * 2;
            const outerRadius = currentSize;
            const innerRadius = currentSize * 0.4;
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const x = particle.x + Math.cos(angle) * radius;
            const y = particle.y + Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.fill();
        }

        ctx.restore();

        // 粒子间连线 (仅在学术模式下)
        if (type === 'academic' && index < particlesRef.current.length - 1) {
          for (let j = index + 1; j < particlesRef.current.length; j++) {
            const other = particlesRef.current[j];
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.save();
              ctx.globalAlpha = (120 - distance) / 120 * 0.1;
              ctx.strokeStyle = currentTheme.primary[300];
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [count, size, speed, type, currentTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

// 高级渐变背景组件
export const DynamicGradientBackground: React.FC<{
  variant?: 'academic' | 'research' | 'elegant' | 'dynamic';
  intensity?: 'subtle' | 'medium' | 'vibrant';
}> = ({ variant = 'academic', intensity = 'medium' }) => {
  const { currentTheme } = useAcademicTheme();
  const [gradientPhase, setGradientPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPhase(prev => (prev + 1) % 360);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const intensityMap = {
    subtle: 0.3,
    medium: 0.5,
    vibrant: 0.8
  };

  const alpha = intensityMap[intensity];

  const gradientStyles = {
    academic: {
      background: `
        radial-gradient(circle at 20% 20%, ${currentTheme.primary[500]}${Math.floor(alpha * 255).toString(16)} 0%, transparent 50%),
        radial-gradient(circle at 80% 40%, ${currentTheme.secondary[500]}${Math.floor(alpha * 255).toString(16)} 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, ${currentTheme.accent.burgundy}${Math.floor(alpha * 255).toString(16)} 0%, transparent 50%),
        ${currentTheme.background.primary}
      `
    },
    research: {
      background: `
        conic-gradient(from ${gradientPhase}deg at 50% 50%, 
          ${currentTheme.primary[500]}${Math.floor(alpha * 255).toString(16)},
          ${currentTheme.secondary[500]}${Math.floor(alpha * 255).toString(16)},
          ${currentTheme.primary[600]}${Math.floor(alpha * 255).toString(16)},
          ${currentTheme.secondary[600]}${Math.floor(alpha * 255).toString(16)}
        ),
        ${currentTheme.background.primary}
      `
    },
    elegant: {
      background: `
        linear-gradient(135deg, 
          ${currentTheme.background.primary} 0%,
          ${currentTheme.primary[900]}${Math.floor(alpha * 255).toString(16)} 25%,
          ${currentTheme.secondary[900]}${Math.floor(alpha * 255).toString(16)} 50%,
          ${currentTheme.primary[800]}${Math.floor(alpha * 255).toString(16)} 75%,
          ${currentTheme.background.primary} 100%
        )
      `
    },
    dynamic: {
      background: `
        radial-gradient(ellipse at ${20 + Math.sin(gradientPhase * 0.01) * 30}% ${30 + Math.cos(gradientPhase * 0.01) * 20}%, 
          ${currentTheme.primary[500]}${Math.floor(alpha * 255).toString(16)} 0%, transparent 60%),
        radial-gradient(ellipse at ${70 + Math.cos(gradientPhase * 0.015) * 25}% ${60 + Math.sin(gradientPhase * 0.015) * 30}%, 
          ${currentTheme.secondary[500]}${Math.floor(alpha * 255).toString(16)} 0%, transparent 60%),
        ${currentTheme.background.primary}
      `
    }
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000"
      style={gradientStyles[variant]}
    />
  );
};

// 高级装饰边框组件
export const DecorativeBorder: React.FC<{
  children: React.ReactNode;
  variant?: 'academic' | 'elegant' | 'modern' | 'ornate';
  glow?: boolean;
  animated?: boolean;
  className?: string;
}> = ({ children, variant = 'academic', glow = false, animated = true, className = '' }) => {
  const { currentTheme } = useAcademicTheme();
  
  const borderVariants = {
    academic: {
      borderImage: `linear-gradient(45deg, ${currentTheme.primary[400]}, ${currentTheme.secondary[400]}, ${currentTheme.primary[400]}) 1`,
      borderWidth: '2px',
      borderStyle: 'solid'
    },
    elegant: {
      border: `1px solid ${currentTheme.primary[300]}40`,
      boxShadow: `
        inset 0 1px 0 ${currentTheme.primary[200]}30,
        0 1px 3px ${currentTheme.primary[500]}20
      `
    },
    modern: {
      background: `linear-gradient(135deg, ${currentTheme.background.paper}, ${currentTheme.background.secondary})`,
      border: `1px solid ${currentTheme.primary[300]}60`,
      backdropFilter: 'blur(20px)'
    },
    ornate: {
      border: `2px solid transparent`,
      background: `
        linear-gradient(${currentTheme.background.paper}, ${currentTheme.background.paper}) padding-box,
        linear-gradient(45deg, ${currentTheme.primary[400]}, ${currentTheme.secondary[400]}, ${currentTheme.accent.burgundy}, ${currentTheme.primary[400]}) border-box
      `
    }
  };

  const glowStyle = glow ? {
    boxShadow: `
      0 0 20px ${currentTheme.primary[500]}40,
      0 0 40px ${currentTheme.primary[500]}20,
      inset 0 1px 0 ${currentTheme.primary[200]}20
    `
  } : {};

  return (
    <motion.div
      className={`rounded-xl relative overflow-hidden ${className}`}
      style={{
        ...borderVariants[variant],
        ...glowStyle
      }}
      initial={animated ? { opacity: 0, scale: 0.95 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={animated ? { 
        scale: 1.02, 
        boxShadow: `
          0 0 30px ${currentTheme.primary[500]}60,
          0 0 60px ${currentTheme.primary[500]}30,
          inset 0 1px 0 ${currentTheme.primary[200]}30
        `
      } : {}}
    >
      {/* 装饰性角落元素 */}
      {variant === 'ornate' && (
        <>
          <div 
            className="absolute top-0 left-0 w-6 h-6"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.primary[400]}, transparent)`,
              clipPath: 'polygon(0 0, 100% 0, 0 100%)'
            }}
          />
          <div 
            className="absolute top-0 right-0 w-6 h-6"
            style={{
              background: `linear-gradient(225deg, ${currentTheme.secondary[400]}, transparent)`,
              clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-6 h-6"
            style={{
              background: `linear-gradient(45deg, ${currentTheme.accent.burgundy}, transparent)`,
              clipPath: 'polygon(0 100%, 100% 100%, 0 0)'
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-6 h-6"
            style={{
              background: `linear-gradient(315deg, ${currentTheme.primary[500]}, transparent)`,
              clipPath: 'polygon(100% 100%, 100% 0, 0 100%)'
            }}
          />
        </>
      )}
      
      {children}
    </motion.div>
  );
};

// 高级光晕效果组件
export const LuminousGlow: React.FC<{
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'primary' | 'secondary' | 'accent';
  animated?: boolean;
  pulse?: boolean;
}> = ({ children, intensity = 'medium', color = 'primary', animated = true, pulse = false }) => {
  const { currentTheme } = useAcademicTheme();
  
  const colorMap = {
    primary: currentTheme.primary[500],
    secondary: currentTheme.secondary[500],
    accent: currentTheme.accent.burgundy
  };
  
  const intensityMap = {
    low: '20px',
    medium: '40px',
    high: '60px'
  };
  
  const glowColor = colorMap[color];
  const glowSize = intensityMap[intensity];
  
  return (
    <motion.div
      className="relative"
      initial={animated ? { opacity: 0 } : {}}
      animate={animated ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* 光晕层 */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: `radial-gradient(circle, ${glowColor}30 0%, ${glowColor}20 40%, transparent 70%)`,
          filter: `blur(${glowSize})`,
          transform: 'scale(1.2)'
        }}
        animate={pulse ? {
          scale: [1.2, 1.4, 1.2],
          opacity: [0.6, 0.9, 0.6]
        } : {}}
        transition={pulse ? {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        } : {}}
      />
      
      {/* 内容层 */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// 高级磁性按钮组件（增强版本）
export const AdvancedMagneticButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  magnetStrength?: number;
  className?: string;
  disabled?: boolean;
}> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  magnetStrength = 0.3,
  className = '',
  disabled = false 
}) => {
  const { currentTheme } = useAcademicTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const sizeMap = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantStyles = {
    primary: {
      background: `linear-gradient(135deg, ${currentTheme.primary[500]}, ${currentTheme.primary[600]})`,
      color: currentTheme.text.primary,
      border: `1px solid ${currentTheme.primary[400]}`
    },
    secondary: {
      background: `linear-gradient(135deg, ${currentTheme.secondary[500]}, ${currentTheme.secondary[600]})`,
      color: currentTheme.text.primary,
      border: `1px solid ${currentTheme.secondary[400]}`
    },
    accent: {
      background: `linear-gradient(135deg, ${currentTheme.accent.burgundy}, ${currentTheme.accent.forestGreen})`,
      color: currentTheme.text.primary,
      border: `1px solid ${currentTheme.accent.burgundy}`
    },
    ghost: {
      background: 'transparent',
      color: currentTheme.primary[400],
      border: `2px solid ${currentTheme.primary[400]}`
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current || disabled) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * magnetStrength;
    const deltaY = (e.clientY - centerY) * magnetStrength;
    
    setMousePosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`
        ${sizeMap[size]} 
        font-semibold rounded-xl relative overflow-hidden
        transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={{
        ...variantStyles[variant],
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        boxShadow: isHovering ? `
          0 0 20px ${variantStyles[variant].background.includes('transparent') ? currentTheme.primary[500] : 'currentColor'}40,
          0 8px 25px rgba(0, 0, 0, 0.3)
        ` : '0 4px 15px rgba(0, 0, 0, 0.2)'
      }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      disabled={disabled}
      whileTap={{ scale: 0.95 }}
      animate={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      {/* 高光效果 */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300"
        style={{
          transform: 'skewX(-45deg) translateX(-200%)',
          animation: isHovering ? 'shimmer 1.5s ease-in-out infinite' : 'none'
        }}
      />
      
      {/* 内容 */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

// 添加CSS动画
const shimmerKeyframes = `
  @keyframes shimmer {
    0% { transform: skewX(-45deg) translateX(-200%); }
    100% { transform: skewX(-45deg) translateX(400%); }
  }
`;

// 注入CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = shimmerKeyframes;
  document.head.appendChild(style);
}

