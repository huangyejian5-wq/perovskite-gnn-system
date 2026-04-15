import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { useAcademicTheme } from './AcademicTheme';

// 高级动画效果Hook
export const useAnimationEffects = () => {
  const { currentTheme } = useAcademicTheme();
  
  // 弹性动画配置
  const springConfig = {
    type: "spring" as const,
    damping: 25,
    stiffness: 400,
    mass: 0.8
  };
  
  // 缓动动画配置
  const easeConfig = {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
  };
  
  return {
    springConfig,
    easeConfig,
    currentTheme
  };
};

// 简化的磁性按钮组件
export const SimpleMagneticButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  intensity?: number;
}> = ({ children, onClick, className = '', intensity = 0.2 }) => {
  const { springConfig } = useAnimationEffects();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * intensity;
    const deltaY = (e.clientY - centerY) * intensity;
    
    x.set(deltaX);
    y.set(deltaY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      style={{ x, y }}
      transition={springConfig}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

export default {
  useAnimationEffects,
  SimpleMagneticButton
};