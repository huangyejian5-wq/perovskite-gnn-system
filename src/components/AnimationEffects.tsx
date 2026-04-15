import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useAcademicTheme } from './AcademicTheme';

// 高级页面转场动画组件
export const AdvancedPageTransition: React.FC<{
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down' | 'fade' | 'scale';
  duration?: number;
}> = ({ children, direction = 'fade', duration = 0.5 }) => {
  const variants = {
    left: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 100, opacity: 0 }
    },
    right: {
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -100, opacity: 0 }
    },
    up: {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -100, opacity: 0 }
    },
    down: {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 100, opacity: 0 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 1.2, opacity: 0 }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants[direction]}
      transition={{ duration, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// 滚动触发动画组件
export const ScrollReveal: React.FC<{
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';
  delay?: number;
  threshold?: number;
  className?: string;
}> = ({ children, direction = 'up', delay = 0, threshold = 0.1, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const variants = {
    up: {
      hidden: { y: 50, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    },
    down: {
      hidden: { y: -50, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    },
    left: {
      hidden: { x: -50, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
    right: {
      hidden: { x: 50, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
    scale: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1 }
    },
    rotate: {
      hidden: { rotate: -10, opacity: 0 },
      visible: { rotate: 0, opacity: 1 }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// 弹性悬浮卡片组件
export const FloatingCard: React.FC<{
  children: React.ReactNode;
  intensity?: 'subtle' | 'medium' | 'strong';
  rotateOnHover?: boolean;
  className?: string;
}> = ({ children, intensity = 'medium', rotateOnHover = true, className = '' }) => {
  const { currentTheme } = useAcademicTheme();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const intensityMap = {
    subtle: 0.1,
    medium: 0.3,
    strong: 0.5
  };

  const multiplier = intensityMap[intensity];

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) * multiplier);
    y.set((event.clientY - centerY) * multiplier);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateOnHover ? rotateX : 0,
        rotateY: rotateOnHover ? rotateY : 0,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 20px 40px ${currentTheme.primary[500]}30`
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

// 波纹点击效果组件
export const RippleEffect: React.FC<{
  children: React.ReactNode;
  color?: string;
  duration?: number;
  className?: string;
  onClick?: () => void;
}> = ({ children, color, duration = 600, className = '', onClick }) => {
  const { currentTheme } = useAcademicTheme();
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const rippleColor = color || currentTheme.primary[400];

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, duration);
    
    if (onClick) onClick();
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      {children}
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            className="absolute pointer-events-none rounded-full"
            style={{
              left: ripple.x,
              top: ripple.y,
              backgroundColor: rippleColor + '40',
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{ width: 300, height: 300, opacity: 0 }}
            transition={{ duration: duration / 1000, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

// 高级加载动画组件
export const ElegantLoader: React.FC<{
  type?: 'dots' | 'bars' | 'pulse' | 'orbit' | 'molecule';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent';
}> = ({ type = 'molecule', size = 'md', color = 'primary' }) => {
  const { currentTheme } = useAcademicTheme();
  
  const sizeMap = {
    sm: '24px',
    md: '32px',
    lg: '48px'
  };

  const colorMap = {
    primary: currentTheme.primary[500],
    secondary: currentTheme.secondary[500],
    accent: currentTheme.accent.burgundy
  };

  const loaderSize = sizeMap[size];
  const loaderColor = colorMap[color];

  const loaderComponents = {
    dots: (
      <div className="flex space-x-1">
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            className="rounded-full"
            style={{ 
              width: `calc(${loaderSize} / 4)`, 
              height: `calc(${loaderSize} / 4)`,
              backgroundColor: loaderColor 
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    ),
    bars: (
      <div className="flex space-x-1 items-end">
        {[0, 1, 2, 3].map(i => (
          <motion.div
            key={i}
            style={{ 
              width: `calc(${loaderSize} / 6)`,
              backgroundColor: loaderColor 
            }}
            animate={{ height: [`calc(${loaderSize} / 4)`, loaderSize, `calc(${loaderSize} / 4)`] }}
            transition={{ 
              duration: 1.2, 
              repeat: Infinity, 
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    ),
    pulse: (
      <motion.div
        className="rounded-full"
        style={{ 
          width: loaderSize, 
          height: loaderSize,
          backgroundColor: loaderColor 
        }}
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.7, 1, 0.7] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ),
    orbit: (
      <div className="relative" style={{ width: loaderSize, height: loaderSize }}>
        <motion.div
          className="absolute rounded-full"
          style={{
            width: `calc(${loaderSize} / 4)`,
            height: `calc(${loaderSize} / 4)`,
            backgroundColor: loaderColor,
            top: 0,
            left: '50%',
            transformOrigin: `0 calc(${loaderSize} / 2)`
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: `calc(${loaderSize} / 6)`,
            height: `calc(${loaderSize} / 6)`,
            backgroundColor: currentTheme.secondary[500],
            top: '25%',
            left: '50%',
            transformOrigin: `0 calc(${loaderSize} / 2.5)`
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    ),
    molecule: (
      <div className="relative" style={{ width: loaderSize, height: loaderSize }}>
        {/* 中心原子 */}
        <div
          className="absolute rounded-full"
          style={{
            width: `calc(${loaderSize} / 3)`,
            height: `calc(${loaderSize} / 3)`,
            backgroundColor: loaderColor,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        {/* 环绕电子 */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `calc(${loaderSize} / 8)`,
              height: `calc(${loaderSize} / 8)`,
              backgroundColor: currentTheme.secondary[400],
              top: '50%',
              left: '50%',
              transformOrigin: `0 -calc(${loaderSize} / 2.5)`
            }}
            animate={{ rotate: [angle, angle + 360] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 0.1
            }}
          />
        ))}
      </div>
    )
  };

  return (
    <div className="flex items-center justify-center">
      {loaderComponents[type]}
    </div>
  );
};

// 文字打字机效果组件
export const TypewriterText: React.FC<{
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}> = ({ text, speed = 100, delay = 0, className = '', onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (onComplete) {
        onComplete();
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, onComplete]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="inline-block"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      >
        |
      </motion.span>
    </span>
  );
};

// 数字计数动画组件
export const CounterAnimation: React.FC<{
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}> = ({ from, to, duration = 2, delay = 0, suffix = '', prefix = '', className = '', decimals = 0 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = (to - from) / (duration * 60); // 60fps
      const updateCount = () => {
        setCount(current => {
          const newValue = current + increment;
          if ((increment > 0 && newValue >= to) || (increment < 0 && newValue <= to)) {
            return to;
          }
          return newValue;
        });
      };

      const interval = setInterval(updateCount, 1000 / 60);
      const timeout = setTimeout(() => clearInterval(interval), duration * 1000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, delay);

    return () => clearTimeout(timer);
  }, [from, to, duration, delay]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.round(count);

  return (
    <span className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

