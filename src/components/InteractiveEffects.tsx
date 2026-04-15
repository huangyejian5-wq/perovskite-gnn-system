import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, PanInfo, useScroll } from 'framer-motion';
import { useAcademicTheme } from './AcademicTheme';

// 增强3D倾斜交互组件（Enhanced版本）
export const EnhancedTiltCard: React.FC<{
  children: React.ReactNode;
  tiltIntensity?: number;
  scaleOnHover?: number;
  glowIntensity?: number;
  className?: string;
}> = ({ children, tiltIntensity = 25, scaleOnHover = 1.05, glowIntensity = 0.3, className = '' }) => {
  const { currentTheme } = useAcademicTheme();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((event.clientX - centerX) / rect.width);
    y.set((event.clientY - centerY) / rect.height);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: scaleOnHover }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative"
      >
        {/* 光晕效果 */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${currentTheme.primary[500]}${Math.floor(glowIntensity * 255).toString(16)} 0%, transparent 60%)`,
            filter: 'blur(20px)',
            transform: 'translateZ(-10px)'
          }}
        />
        
        <div className="relative z-10 transform-gpu">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

// 磁性拖拽组件
interface SnapPoint {
  x: number;
  y: number;
}

export const MagneticDrag: React.FC<{
  children: React.ReactNode;
  magneticStrength?: number;
  snapPoints?: SnapPoint[];
  onSnap?: (point: SnapPoint) => void;
  className?: string;
}> = ({ children, magneticStrength = 50, snapPoints = [], onSnap, className = '' }) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleDragEnd = useCallback((event: any, info: PanInfo) => {
    if (!snapPoints || snapPoints.length === 0) return;
    
    const currentX = info.point.x;
    const currentY = info.point.y;
    
    // 查找最近的吸附点
    let closestPoint: SnapPoint | undefined = undefined;
    let minDistance = Infinity;
    
    for (const point of snapPoints) {
      const distance = Math.sqrt(
        Math.pow(currentX - point.x, 2) + Math.pow(currentY - point.y, 2)
      );
      
      if (distance < magneticStrength && distance < minDistance) {
        minDistance = distance;
        closestPoint = point;
      }
    }
    
    if (closestPoint) {
      x.set(closestPoint.x);
      y.set(closestPoint.y);
      onSnap?.(closestPoint);
    }
  }, [x, y, magneticStrength, snapPoints, onSnap]);

  return (
    <div ref={constraintsRef} className={`relative w-full h-full ${className}`}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        style={{ x, y }}
        onDragEnd={handleDragEnd}
        whileDrag={{ scale: 1.1 }}
        className="cursor-grab active:cursor-grabbing"
      >
        {children}
      </motion.div>
    </div>
  );
};

// 手势识别组件
export const GestureRecognizer: React.FC<{
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onPinch?: (scale: number) => void;
  onTap?: () => void;
  onDoubleTap?: () => void;
  className?: string;
}> = ({ 
  children, 
  onSwipeLeft, 
  onSwipeRight, 
  onSwipeUp, 
  onSwipeDown, 
  onPinch, 
  onTap, 
  onDoubleTap,
  className = '' 
}) => {
  const [lastTap, setLastTap] = useState(0);
  const [initialDistance, setInitialDistance] = useState(0);

  const handlePanEnd = useCallback((event: any, info: PanInfo) => {
    const { offset, velocity } = info;
    const swipeThreshold = 50;
    const velocityThreshold = 500;

    if (Math.abs(offset.x) > swipeThreshold || Math.abs(velocity.x) > velocityThreshold) {
      if (offset.x > 0) {
        onSwipeRight && onSwipeRight();
      } else {
        onSwipeLeft && onSwipeLeft();
      }
    }

    if (Math.abs(offset.y) > swipeThreshold || Math.abs(velocity.y) > velocityThreshold) {
      if (offset.y > 0) {
        onSwipeDown && onSwipeDown();
      } else {
        onSwipeUp && onSwipeUp();
      }
    }
  }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown]);

  const handleTouchStart = useCallback((event: React.TouchEvent) => {
    if (event.touches.length === 2) {
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) + 
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      setInitialDistance(distance);
    }
  }, []);

  const handleTouchMove = useCallback((event: React.TouchEvent) => {
    if (event.touches.length === 2 && initialDistance > 0) {
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const currentDistance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) + 
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      const scale = currentDistance / initialDistance;
      onPinch && onPinch(scale);
    }
  }, [initialDistance, onPinch]);

  const handleTap = useCallback(() => {
    const now = Date.now();
    const doubleTapThreshold = 300;

    if (now - lastTap < doubleTapThreshold) {
      onDoubleTap && onDoubleTap();
    } else {
      setTimeout(() => {
        if (Date.now() - now >= doubleTapThreshold) {
          onTap && onTap();
        }
      }, doubleTapThreshold);
    }
    
    setLastTap(now);
  }, [lastTap, onTap, onDoubleTap]);

  return (
    <motion.div
      className={className}
      onPanEnd={handlePanEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTap={handleTap}
    >
      {children}
    </motion.div>
  );
};

// 视差滚动组件
export const ParallaxElement: React.FC<{
  children: React.ReactNode;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  className?: string;
}> = ({ children, speed = 0.5, direction = 'vertical', className = '' }) => {
  const { scrollY } = useScroll();
  
  const transform = useTransform(
    scrollY,
    (value) => {
      const offset = value * speed;
      return direction === 'vertical' 
        ? `translateY(${offset}px)` 
        : `translateX(${offset}px)`;
    }
  );

  return (
    <motion.div
      style={{ transform }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 弹性悬浮按钮组件
export const ExpandableFloatingButton: React.FC<{
  children: React.ReactNode;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  offset?: number;
  expandable?: boolean;
  actions?: { icon: React.ReactNode; label: string; onClick: () => void }[];
  className?: string;
}> = ({ 
  children, 
  position = 'bottom-right', 
  offset = 20, 
  expandable = false, 
  actions = [],
  className = '' 
}) => {
  const { currentTheme } = useAcademicTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const positionClasses = {
    'bottom-right': `bottom-${offset} right-${offset}`,
    'bottom-left': `bottom-${offset} left-${offset}`,
    'top-right': `top-${offset} right-${offset}`,
    'top-left': `top-${offset} left-${offset}`
  };

  const handleMainClick = () => {
    if (expandable) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={`fixed z-50 ${positionClasses[position]} ${className}`}>
      {/* 展开的操作按钮 */}
      {expandable && isExpanded && (
        <motion.div
          className="flex flex-col gap-3 mb-3"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {actions.map((action, index) => (
            <motion.button
              key={index}
              className="flex items-center gap-3 px-4 py-2 rounded-full shadow-lg backdrop-blur-md"
              style={{
                background: currentTheme.background.paper,
                border: `1px solid ${currentTheme.primary[300]}40`
              }}
              onClick={action.onClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {action.icon}
              <span className="text-sm font-medium">{action.label}</span>
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* 主按钮 */}
      <motion.button
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center backdrop-blur-md"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.primary[500]}, ${currentTheme.primary[600]})`,
          border: `1px solid ${currentTheme.primary[400]}`
        }}
        onClick={handleMainClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isExpanded ? 45 : 0 }}
      >
        {children}
      </motion.button>
    </div>
  );
};

// 智能工具提示组件
export const SmartTooltip: React.FC<{
  children: React.ReactNode;
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  delay?: number;
  offset?: number;
  className?: string;
}> = ({ children, content, position = 'auto', delay = 500, offset = 8, className = '' }) => {
  const { currentTheme } = useAcademicTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [actualPosition, setActualPosition] = useState(position);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      
      // 自动计算位置
      if (position === 'auto' && triggerRef.current && tooltipRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        
        if (triggerRect.top > viewportHeight / 2) {
          setActualPosition('top');
        } else {
          setActualPosition('bottom');
        }
        
        if (triggerRect.left < viewportWidth / 3) {
          setActualPosition('right');
        } else if (triggerRect.right > viewportWidth * 2 / 3) {
          setActualPosition('left');
        }
      }
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const getPositionClasses = () => {
    const baseClasses = 'absolute z-50 px-3 py-2 text-sm rounded-lg shadow-lg whitespace-nowrap';
    
    switch (actualPosition) {
      case 'top':
        return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-${offset}`;
      case 'bottom':
        return `${baseClasses} top-full left-1/2 transform -translate-x-1/2 mt-${offset}`;
      case 'left':
        return `${baseClasses} right-full top-1/2 transform -translate-y-1/2 mr-${offset}`;
      case 'right':
        return `${baseClasses} left-full top-1/2 transform -translate-y-1/2 ml-${offset}`;
      default:
        return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-${offset}`;
    }
  };

  return (
    <div 
      ref={triggerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {isVisible && (
        <motion.div
          ref={tooltipRef}
          className={getPositionClasses()}
          style={{
            background: currentTheme.background.paper,
            color: currentTheme.text.primary,
            border: `1px solid ${currentTheme.primary[300]}40`,
            backdropFilter: 'blur(20px)'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {content}
          
          {/* 箭头 */}
          <div
            className="absolute w-2 h-2 transform rotate-45"
            style={{
              background: currentTheme.background.paper,
              border: `1px solid ${currentTheme.primary[300]}40`,
              ...(actualPosition === 'top' && { top: '100%', left: '50%', marginLeft: '-4px', marginTop: '-1px' }),
              ...(actualPosition === 'bottom' && { bottom: '100%', left: '50%', marginLeft: '-4px', marginBottom: '-1px' }),
              ...(actualPosition === 'left' && { left: '100%', top: '50%', marginTop: '-4px', marginLeft: '-1px' }),
              ...(actualPosition === 'right' && { right: '100%', top: '50%', marginTop: '-4px', marginRight: '-1px' })
            }}
          />
        </motion.div>
      )}
    </div>
  );
};