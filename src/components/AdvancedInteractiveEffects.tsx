import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudioVisual } from './AudioVisualSystem';

// 磁性按钮组件
export const MagneticButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  magneticStrength?: number;
}> = ({ children, className = '', onClick, magneticStrength = 0.3 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { playSound, triggerVisualFeedback } = useAudioVisual();

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    setPosition({
      x: deltaX * magneticStrength,
      y: deltaY * magneticStrength
    });
  }, [magneticStrength]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleClick = useCallback(() => {
    if (buttonRef.current) {
      playSound('click');
      triggerVisualFeedback(buttonRef.current, 'ripple');
    }
    onClick?.();
  }, [onClick, playSound, triggerVisualFeedback]);

  return (
    <motion.button
      ref={buttonRef}
      className={`relative transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

// 3D倾斜卡片组件
export const TiltCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  tiltStrength?: number;
}> = ({ children, className = '', tiltStrength = 10 }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * tiltStrength;
    const rotateX = ((centerY - e.clientY) / (rect.height / 2)) * tiltStrength;
    
    setTilt({ rotateX, rotateY });
  }, [tiltStrength]);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`relative transform-gpu ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
};

// 光流追踪组件
export const LightTrail: React.FC = () => {
  const [trails, setTrails] = useState<Array<{
    id: string;
    x: number;
    y: number;
    timestamp: number;
  }>>([]);
  const { visualSettings } = useAudioVisual();

  useEffect(() => {
    if (!visualSettings.enabled || !visualSettings.cursorEffects) return;

    const handleMouseMove = (e: MouseEvent) => {
      setTrails(prev => {
        const now = Date.now();
        const newTrail = {
          id: Math.random().toString(36),
          x: e.clientX,
          y: e.clientY,
          timestamp: now
        };
        
        // 保留最近500ms的轨迹
        const filtered = prev.filter(trail => now - trail.timestamp < 500);
        return [...filtered, newTrail].slice(-20);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [visualSettings.enabled, visualSettings.cursorEffects]);

  if (!visualSettings.enabled || !visualSettings.cursorEffects) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {trails.map((trail, index) => {
        const age = Date.now() - trail.timestamp;
        const opacity = 1 - age / 500;
        const scale = 1 - age / 1000;
        
        return (
          <div
            key={trail.id}
            className="absolute w-2 h-2 bg-blue-400 rounded-full blur-sm"
            style={{
              left: trail.x - 4,
              top: trail.y - 4,
              opacity: opacity * 0.6,
              transform: `scale(${scale})`,
              boxShadow: `0 0 ${10 * opacity}px rgba(59, 130, 246, ${opacity})`
            }}
          />
        );
      })}
    </div>
  );
};

// 全息投影效果
export const HolographicEffect: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* 全息背景效果 */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-lg blur-xl animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-lg" />
        
        {/* 扫描线效果 */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{ height: '2px' }}
          />
        )}
      </div>
    </div>
  );
};

// 液体按钮效果
export const LiquidButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  color?: string;
}> = ({ children, className = '', onClick, color = '#3b82f6' }) => {
  const [ripples, setRipples] = useState<Array<{
    id: string;
    x: number;
    y: number;
    timestamp: number;
  }>>([]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Math.random().toString(36),
      x,
      y,
      timestamp: Date.now()
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // 移除旧的波纹
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    onClick?.();
  }, [onClick]);

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      style={{
        background: `linear-gradient(45deg, ${color}, ${color}dd)`,
      }}
    >
      {children}
      
      {/* 波纹效果 */}
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          initial={{
            width: 0,
            height: 0,
            x: ripple.x,
            y: ripple.y,
            opacity: 0.8
          }}
          animate={{
            width: 300,
            height: 300,
            x: ripple.x - 150,
            y: ripple.y - 150,
            opacity: 0
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}
    </button>
  );
};

// 粒子爆炸效果
export const ParticleExplosion: React.FC<{
  trigger: boolean;
  position: { x: number; y: number };
  color?: string;
  particleCount?: number;
}> = ({ trigger, position, color = '#3b82f6', particleCount = 20 }) => {
  const [particles, setParticles] = useState<Array<{
    id: string;
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
  }>>([]);

  useEffect(() => {
    if (!trigger) return;

    const newParticles = Array.from({ length: particleCount }, () => ({
      id: Math.random().toString(36),
      x: position.x,
      y: position.y,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10,
      life: 1
    }));

    setParticles(newParticles);

    const animationInterval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        vx: particle.vx * 0.98,
        vy: particle.vy * 0.98 + 0.2,
        life: particle.life - 0.02
      })).filter(particle => particle.life > 0));
    }, 16);

    setTimeout(() => {
      clearInterval(animationInterval);
      setParticles([]);
    }, 1000);

    return () => clearInterval(animationInterval);
  }, [trigger, position, particleCount]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: color,
            opacity: particle.life,
            boxShadow: `0 0 ${particle.life * 10}px ${color}`
          }}
        />
      ))}
    </div>
  );
};

// 数据雨效果（类似黑客帝国）
export const DataRain: React.FC<{ active?: boolean }> = ({ active = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array.from({ length: columns }, () => Math.random() * canvas.height);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = '12px monospace';

      drops.forEach((drop, index) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = index * 20;
        
        ctx.fillText(char, x, drop);
        
        if (drop > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }
        
        drops[index] += 20;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

// 组合的高级交互效果组件
export const AdvancedInteractiveEffects: React.FC<{
  children: React.ReactNode;
  enableMagnetic?: boolean;
  enableTilt?: boolean;
  enableHolographic?: boolean;
  enableTrail?: boolean;
}> = ({ 
  children, 
  enableMagnetic = true, 
  enableTilt = true, 
  enableHolographic = true,
  enableTrail = true 
}) => {
  return (
    <>
      {enableTrail && <LightTrail />}
      <div className="relative">
        {children}
      </div>
    </>
  );
};