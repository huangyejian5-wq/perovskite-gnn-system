import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 响应式断点配置
export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// 检测设备类型的Hook
export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [screenSize, setScreenSize] = useState<keyof typeof breakpoints>('lg');

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      
      if (width < breakpoints.md) {
        setDeviceType('mobile');
        setScreenSize(width < breakpoints.sm ? 'xs' : 'sm');
      } else if (width < breakpoints.xl) {
        setDeviceType('tablet');
        setScreenSize(width < breakpoints.lg ? 'md' : 'lg');
      } else {
        setDeviceType('desktop');
        setScreenSize(width < breakpoints['2xl'] ? 'xl' : '2xl');
      }
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  return { deviceType, screenSize };
};

// 响应式容器组件
export const ResponsiveContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  mobileClassName?: string;
  tabletClassName?: string;
  desktopClassName?: string;
}> = ({ 
  children, 
  className = '', 
  mobileClassName = '', 
  tabletClassName = '', 
  desktopClassName = '' 
}) => {
  const { deviceType } = useDeviceType();

  const deviceSpecificClass = 
    deviceType === 'mobile' ? mobileClassName :
    deviceType === 'tablet' ? tabletClassName :
    desktopClassName;

  return (
    <div className={`${className} ${deviceSpecificClass}`}>
      {children}
    </div>
  );
};

// 响应式网格组件
export const ResponsiveGrid: React.FC<{
  children: React.ReactNode;
  className?: string;
  cols?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  gap?: string;
}> = ({ 
  children, 
  className = '',
  cols = { xs: 1, sm: 2, md: 2, lg: 3, xl: 4, '2xl': 4 },
  gap = 'gap-6'
}) => {
  const gridClasses = `
    grid ${gap}
    grid-cols-${cols.xs || 1}
    sm:grid-cols-${cols.sm || 2}
    md:grid-cols-${cols.md || 2}
    lg:grid-cols-${cols.lg || 3}
    xl:grid-cols-${cols.xl || 4}
    2xl:grid-cols-${cols['2xl'] || 4}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
};

// 响应式卡片组件
export const ResponsiveCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}> = ({ 
  children, 
  className = '',
  padding = 'md',
  hover = true
}) => {
  const { deviceType } = useDeviceType();
  
  const paddingClasses = {
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6 lg:p-8',
    lg: 'p-6 sm:p-8 lg:p-10'
  };

  const hoverClasses = hover && deviceType !== 'mobile' 
    ? 'hover:scale-105 hover:shadow-2xl transition-all duration-300'
    : '';

  return (
    <motion.div
      className={`
        glass-card rounded-xl ${paddingClasses[padding]} ${hoverClasses} ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileTap={deviceType === 'mobile' ? { scale: 0.98 } : undefined}
    >
      {children}
    </motion.div>
  );
};

// 响应式文本组件
export const ResponsiveText: React.FC<{
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  className?: string;
}> = ({ children, size = 'base', className = '' }) => {
  const sizeClasses = {
    xs: 'text-xs sm:text-sm',
    sm: 'text-sm sm:text-base',
    base: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
    xl: 'text-xl sm:text-2xl',
    '2xl': 'text-2xl sm:text-3xl',
    '3xl': 'text-3xl sm:text-4xl lg:text-5xl',
    '4xl': 'text-4xl sm:text-5xl lg:text-6xl',
    '5xl': 'text-5xl sm:text-6xl lg:text-7xl',
    '6xl': 'text-6xl sm:text-7xl lg:text-8xl'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

// 响应式图像组件
export const ResponsiveImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
  sizes?: string;
}> = ({ 
  src, 
  alt, 
  className = '',
  aspectRatio = 'landscape',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]'
  };

  return (
    <div className={`relative overflow-hidden rounded-lg ${aspectClasses[aspectRatio]} ${className}`}>
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        loading="lazy"
      />
    </div>
  );
};

// 响应式导航组件
export const ResponsiveNavigation: React.FC<{
  children: React.ReactNode;
  className?: string;
  mobileCollapsed?: boolean;
}> = ({ children, className = '', mobileCollapsed = true }) => {
  const { deviceType } = useDeviceType();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (deviceType === 'mobile' && mobileCollapsed) {
    return (
      <div className={className}>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-md bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </div>
        </button>
        
        <motion.div
          className={`lg:hidden absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-lg border border-white/20 rounded-lg overflow-hidden ${!isMobileMenuOpen ? 'hidden' : ''}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-4 space-y-2">
            {children}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
};

// 响应式布局组件
export const ResponsiveLayout: React.FC<{
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  sidebarWidth?: 'sm' | 'md' | 'lg';
}> = ({ 
  children, 
  sidebar, 
  header, 
  footer,
  sidebarWidth = 'md'
}) => {
  const { deviceType } = useDeviceType();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarWidths = {
    sm: 'w-48',
    md: 'w-64',
    lg: 'w-80'
  };

  if (deviceType === 'mobile') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {header && (
          <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-white/10">
            {header}
          </header>
        )}
        
        <main className="flex-1 p-4">
          {children}
        </main>
        
        {sidebar && (
          <>
            <button
              onClick={() => setSidebarOpen(true)}
              className="fixed bottom-4 right-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg"
            >
              ☰
            </button>
            
            <motion.div
              className={`fixed inset-0 z-50 ${!sidebarOpen ? 'pointer-events-none' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: sidebarOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.div
                className="absolute right-0 top-0 bottom-0 w-80 bg-gray-900 border-l border-white/20 overflow-auto"
                initial={{ x: '100%' }}
                animate={{ x: sidebarOpen ? 0 : '100%' }}
                transition={{ type: 'spring', damping: 20 }}
              >
                <div className="p-4">
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="mb-4 p-2 text-white hover:bg-white/10 rounded"
                  >
                    ✕
                  </button>
                  {sidebar}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
        
        {footer && (
          <footer className="bg-gray-900/95 backdrop-blur-lg border-t border-white/10 p-4">
            {footer}
          </footer>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex">
      {sidebar && (
        <aside className={`${sidebarWidths[sidebarWidth]} flex-shrink-0 bg-gray-900/50 backdrop-blur-lg border-r border-white/10`}>
          <div className="p-6">
            {sidebar}
          </div>
        </aside>
      )}
      
      <div className="flex-1 flex flex-col">
        {header && (
          <header className="bg-gray-900/95 backdrop-blur-lg border-b border-white/10 p-6">
            {header}
          </header>
        )}
        
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
        
        {footer && (
          <footer className="bg-gray-900/95 backdrop-blur-lg border-t border-white/10 p-6">
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
};

// 响应式间距组件
export const ResponsiveSpacing: React.FC<{
  children: React.ReactNode;
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  direction?: 'vertical' | 'horizontal' | 'both';
}> = ({ children, spacing = 'md', direction = 'both' }) => {
  const spacingClasses = {
    xs: 'space-y-2 space-x-2',
    sm: 'space-y-4 space-x-4',
    md: 'space-y-6 space-x-6',
    lg: 'space-y-8 space-x-8',
    xl: 'space-y-12 space-x-12'
  };

  const directionClasses = {
    vertical: spacingClasses[spacing].split(' ')[0],
    horizontal: spacingClasses[spacing].split(' ')[1],
    both: spacingClasses[spacing]
  };

  return (
    <div className={directionClasses[direction]}>
      {children}
    </div>
  );
};

