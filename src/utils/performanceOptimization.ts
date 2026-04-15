import React, { useState, useEffect, useRef } from 'react';

// 性能优化配置文件
export const PerformanceConfig = {
  // 渲染优化
  rendering: {
    enableVirtualization: true,
    lazyLoadThreshold: 10,
    debounceDelay: 300,
    throttleDelay: 16, // ~60fps
    useMemoThreshold: 5,
    maxConcurrentAnimations: 3
  },
  
  // 内存管理
  memory: {
    maxCacheSize: 50, // MB
    gcInterval: 60000, // 60秒
    enableWeakReferences: true,
    clearUnusedComponentsDelay: 5000
  },
  
  // 网络优化  
  network: {
    maxRetries: 3,
    timeout: 10000,
    cacheDuration: 300000, // 5分钟
    batchRequestDelay: 100,
    enableCompression: true
  },
  
  // 动画优化
  animation: {
    preferReducedMotion: false,
    enableHardwareAcceleration: true,
    maxFrameRate: 60,
    enableDebugMode: false,
    disableAnimationsOnLowMemory: true
  },
  
  // 数据处理
  data: {
    maxChartPoints: 1000,
    aggregationThreshold: 500,
    enableDataStreaming: true,
    batchSize: 100,
    enableCompression: true
  }
};

// 性能监控工具
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number[]> = new Map();
  private observers: PerformanceObserver[] = [];
  
  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }
  
  startMonitoring() {
    // 监控长任务
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordMetric('longTask', entry.duration);
        }
      });
      
      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        this.observers.push(longTaskObserver);
      } catch (e) {
        console.warn('Long task monitoring not supported');
      }
      
      // 监控布局偏移
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            this.recordMetric('cls', (entry as any).value);
          }
        }
      });
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn('CLS monitoring not supported');
      }
    }
  }
  
  recordMetric(name: string, value: number) {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    
    const values = this.metrics.get(name)!;
    values.push(value);
    
    // 保留最近100个值
    if (values.length > 100) {
      values.shift();
    }
  }
  
  getAverageMetric(name: string): number {
    const values = this.metrics.get(name);
    if (!values || values.length === 0) return 0;
    return values.reduce((a, b) => a + b, 0) / values.length;
  }
  
  getMetricPercentile(name: string, percentile: number): number {
    const values = this.metrics.get(name);
    if (!values || values.length === 0) return 0;
    
    const sorted = [...values].sort((a, b) => a - b);
    const index = Math.ceil((percentile / 100) * sorted.length) - 1;
    return sorted[index];
  }
  
  getAllMetrics() {
    const result: Record<string, any> = {};
    
    this.metrics.forEach((values, name) => {
      if (values.length > 0) {
        result[name] = {
          average: this.getAverageMetric(name),
          p95: this.getMetricPercentile(name, 95),
          p99: this.getMetricPercentile(name, 99),
          count: values.length
        };
      }
    });
    
    return result;
  }
  
  cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.metrics.clear();
  }
}

// React 性能优化 hooks
export const usePerformanceOptimization = () => {
  const [isLowMemory, setIsLowMemory] = useState(false);
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'fast'>('fast');
  
  useEffect(() => {
    // 检查设备内存
    if ('memory' in navigator) {
      const memory = (navigator as any).memory;
      const usedMemoryRatio = memory.usedJSHeapSize / memory.totalJSHeapSize;
      setIsLowMemory(usedMemoryRatio > 0.8);
    }
    
    // 检查网络连接
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const slowConnections = ['slow-2g', '2g', '3g'];
      setConnectionSpeed(
        slowConnections.includes(connection.effectiveType) ? 'slow' : 'fast'
      );
      
      connection.addEventListener('change', () => {
        setConnectionSpeed(
          slowConnections.includes(connection.effectiveType) ? 'slow' : 'fast'
        );
      });
    }
  }, []);
  
  return {
    isLowMemory,
    connectionSpeed,
    shouldReduceAnimations: isLowMemory || connectionSpeed === 'slow',
    shouldLazyLoad: connectionSpeed === 'slow'
  };
};

// 内存使用监控 hook
export const useMemoryMonitor = () => {
  const [memoryInfo, setMemoryInfo] = useState({
    usedJSHeapSize: 0,
    totalJSHeapSize: 0,
    jsHeapSizeLimit: 0,
    usage: 0
  });
  
  useEffect(() => {
    const updateMemoryInfo = () => {
      if ('memory' in navigator) {
        const memory = (navigator as any).memory;
        const usage = (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100;
        
        setMemoryInfo({
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit,
          usage: usage
        });
      }
    };
    
    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return memoryInfo;
};

// 组件渲染次数监控
export const useRenderCount = (componentName: string) => {
  const renderCount = useRef(0);
  
  useEffect(() => {
    renderCount.current++;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} rendered ${renderCount.current} times`);
    }
  });
  
  return renderCount.current;
};

// 防抖 hook
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
};

// 节流 hook  
export const useThrottle = <T>(value: T, delay: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRun = useRef(Date.now());
  
  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRun.current >= delay) {
        setThrottledValue(value);
        lastRun.current = Date.now();
      }
    }, delay - (Date.now() - lastRun.current));
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return throttledValue;
};