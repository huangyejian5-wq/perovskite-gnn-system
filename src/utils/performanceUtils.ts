import { useEffect, useRef, useCallback, useMemo, useState } from 'react';

// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private observers: Map<string, PerformanceObserver> = new Map();
  private metrics: Map<string, any> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Monitor component render performance
  measureRender(componentName: string, callback?: (entry: PerformanceEntry) => void) {
    if (!window.performance || !window.PerformanceObserver) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name.includes(componentName)) {
          this.metrics.set(`render_${componentName}`, {
            duration: entry.duration,
            timestamp: entry.startTime
          });
          
          if (callback) {
            callback(entry);
          }
        }
      });
    });

    observer.observe({ entryTypes: ['measure'] });
    this.observers.set(`render_${componentName}`, observer);
  }

  // Monitor memory usage
  measureMemory(): Promise<any> {
    if ('memory' in performance && 'measureUserAgentSpecificMemory' in performance) {
      return (performance as any).measureUserAgentSpecificMemory();
    }
    
    // Fallback to basic memory info
    if ('memory' in performance) {
      return Promise.resolve({
        bytes: (performance as any).memory.usedJSHeapSize,
        breakdown: [{
          bytes: (performance as any).memory.usedJSHeapSize,
          attribution: [{ url: window.location.href, scope: 'Window' }]
        }]
      });
    }

    return Promise.resolve({ bytes: 0, breakdown: [] });
  }

  // Monitor network performance
  measureNetwork() {
    if (!window.performance || !window.PerformanceObserver) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as PerformanceNavigationTiming[];
      entries.forEach((entry) => {
        this.metrics.set('network_timing', {
          dns: entry.domainLookupEnd - entry.domainLookupStart,
          connect: entry.connectEnd - entry.connectStart,
          ssl: entry.secureConnectionStart > 0 ? entry.connectEnd - entry.secureConnectionStart : 0,
          ttfb: entry.responseStart - entry.requestStart,
          download: entry.responseEnd - entry.responseStart,
          total: entry.loadEventEnd - entry.fetchStart
        });
      });
    });

    observer.observe({ entryTypes: ['navigation'] });
    this.observers.set('network', observer);
  }

  // Get all metrics
  getMetrics() {
    return Object.fromEntries(this.metrics);
  }

  // Clean up observers
  cleanup() {
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers.clear();
    this.metrics.clear();
  }
}

// Memory optimization hooks
export const useMemoryOptimization = () => {
  const cleanup = useRef<(() => void)[]>([]);

  const addCleanup = useCallback((cleanupFn: () => void) => {
    cleanup.current.push(cleanupFn);
  }, []);

  useEffect(() => {
    return () => {
      cleanup.current.forEach(fn => {
        try {
          fn();
        } catch (error) {
          console.warn('Cleanup function failed:', error);
        }
      });
      cleanup.current = [];
    };
  }, []);

  return { addCleanup };
};

// Debounced callback hook for performance
export const useDebouncedCallback = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
  deps: React.DependencyList = []
): T => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay, ...deps]
  ) as T;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedCallback;
};

// Throttled callback hook for performance
export const useThrottledCallback = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
  deps: React.DependencyList = []
): T => {
  const lastCall = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const throttledCallback = useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      const timeSinceLastCall = now - lastCall.current;

      if (timeSinceLastCall >= delay) {
        lastCall.current = now;
        callback(...args);
      } else {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        timeoutRef.current = setTimeout(() => {
          lastCall.current = Date.now();
          callback(...args);
        }, delay - timeSinceLastCall);
      }
    },
    [callback, delay, ...deps]
  ) as T;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return throttledCallback;
};

// Virtual scrolling hook for large lists
export const useVirtualScrolling = <T>(
  items: T[],
  itemHeight: number,
  containerHeight: number
) => {
  const [scrollTop, setScrollTop] = useState(0);

  const visibleItems = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight) + 1,
      items.length
    );

    return {
      items: items.slice(startIndex, endIndex),
      startIndex,
      endIndex,
      offsetY: startIndex * itemHeight
    };
  }, [items, itemHeight, containerHeight, scrollTop]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  return {
    visibleItems,
    totalHeight: items.length * itemHeight,
    handleScroll
  };
};

// Image lazy loading hook
export const useLazyLoading = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
};

// Performance measurement hook
export const usePerformanceMeasurement = (
  measurementName: string,
  dependencies: React.DependencyList = []
) => {
  const startTime = useRef<number>();

  useEffect(() => {
    startTime.current = performance.now();
    
    return () => {
      if (startTime.current) {
        const duration = performance.now() - startTime.current;
        console.log(`${measurementName}: ${duration.toFixed(2)}ms`);
        
        // Store in performance buffer if available
        if (window.performance && typeof window.performance.mark === 'function') {
          performance.mark(`${measurementName}-end`);
          performance.measure(measurementName, `${measurementName}-start`, `${measurementName}-end`);
        }
      }
    };
  }, dependencies);

  useEffect(() => {
    if (window.performance && typeof window.performance.mark === 'function') {
      performance.mark(`${measurementName}-start`);
    }
  }, [measurementName]);
};

// Cache management utilities
export class CacheManager {
  private static instance: CacheManager;
  private cache: Map<string, { data: any; timestamp: number; ttl: number }> = new Map();
  private maxSize: number = 100;

  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  set(key: string, data: any, ttl: number = 300000) { // 5 minutes default TTL
    if (this.cache.size >= this.maxSize) {
      this.cleanup();
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }

  get(key: string): any | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  has(key: string): boolean {
    return this.cache.has(key) && this.get(key) !== null;
  }

  delete(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  cleanup(): void {
    const now = Date.now();
    
    // Convert to array to avoid iterator issues
    const entries = Array.from(this.cache.entries());
    for (const [key, entry] of entries) {
      if (now - entry.timestamp > entry.ttl) {
        this.cache.delete(key);
      }
    }

    // If still at max capacity, remove oldest entries
    if (this.cache.size >= this.maxSize) {
      const entriesArray = Array.from(this.cache.entries());
      entriesArray.sort((a, b) => a[1].timestamp - b[1].timestamp);
      
      const toRemove = entriesArray.slice(0, Math.floor(this.maxSize * 0.2));
      toRemove.forEach(([key]) => this.cache.delete(key));
    }
  }

  getStats() {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      hitRate: this.cache.size > 0 ? (this.cache.size / this.maxSize) * 100 : 0
    };
  }
}

// Bundle splitting utilities
export const loadChunk = async <T>(
  importFn: () => Promise<{ default: T }>,
  chunkName: string
): Promise<T> => {
  const startTime = performance.now();
  
  try {
    const module = await importFn();
    const loadTime = performance.now() - startTime;
    
    console.log(`Chunk "${chunkName}" loaded in ${loadTime.toFixed(2)}ms`);
    
    return module.default;
  } catch (error) {
    console.error(`Failed to load chunk "${chunkName}":`, error);
    throw error;
  }
};

export default {
  PerformanceMonitor,
  CacheManager,
  useMemoryOptimization,
  useDebouncedCallback,
  useThrottledCallback,
  useVirtualScrolling,
  useLazyLoading,
  usePerformanceMeasurement,
  loadChunk
};