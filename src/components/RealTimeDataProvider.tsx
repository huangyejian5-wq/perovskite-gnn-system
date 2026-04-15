import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Real-time data types
export interface RealTimeMetrics {
  timestamp: number;
  modelAccuracy: number;
  processingSpeed: number;
  activeConnections: number;
  systemLoad: number;
  memoryUsage: number;
  predictionQueue: number;
  successRate: number;
  errorRate: number;
  throughput: number;
}

export interface SystemAlert {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  message: string;
  timestamp: number;
  dismissed?: boolean;
}

export interface TrainingProgress {
  modelId: string;
  epoch: number;
  totalEpochs: number;
  loss: number;
  accuracy: number;
  validationLoss: number;
  validationAccuracy: number;
  eta: number;
  status: 'training' | 'paused' | 'completed' | 'failed';
}

interface RealTimeDataContextType {
  metrics: RealTimeMetrics;
  alerts: SystemAlert[];
  trainingProgress: TrainingProgress | null;
  isConnected: boolean;
  connectionStatus: 'connecting' | 'connected' | 'disconnected' | 'error';
  dismissAlert: (alertId: string) => void;
  subscribeToMetrics: (callback: (metrics: RealTimeMetrics) => void) => () => void;
}

const RealTimeDataContext = createContext<RealTimeDataContextType | undefined>(undefined);

export const useRealTimeData = () => {
  const context = useContext(RealTimeDataContext);
  if (!context) {
    throw new Error('useRealTimeData must be used within a RealTimeDataProvider');
  }
  return context;
};

interface RealTimeDataProviderProps {
  children: ReactNode;
}

export const RealTimeDataProvider: React.FC<RealTimeDataProviderProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<RealTimeMetrics>({
    timestamp: Date.now(),
    modelAccuracy: 96.1,
    processingSpeed: 2.3,
    activeConnections: 47,
    systemLoad: 65.2,
    memoryUsage: 78.4,
    predictionQueue: 23,
    successRate: 98.7,
    errorRate: 1.3,
    throughput: 156
  });

  const [alerts, setAlerts] = useState<SystemAlert[]>([
    {
      id: '1',
      type: 'success',
      title: '模型训练完成',
      message: 'GNN模型v2.1训练已完成，准确率达到96.8%',
      timestamp: Date.now() - 300000
    },
    {
      id: '2',
      type: 'info',
      title: '系统更新',
      message: '新的材料数据库已同步，新增245个钙钛矿结构',
      timestamp: Date.now() - 600000
    }
  ]);

  const [trainingProgress, setTrainingProgress] = useState<TrainingProgress | null>({
    modelId: 'gnn-v2.2',
    epoch: 67,
    totalEpochs: 100,
    loss: 0.142,
    accuracy: 94.8,
    validationLoss: 0.156,
    validationAccuracy: 93.2,
    eta: 2340,
    status: 'training'
  });

  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'disconnected' | 'error'>('connecting');
  const [subscribers, setSubscribers] = useState<Set<(metrics: RealTimeMetrics) => void>>(new Set());

  // Simulate WebSocket connection
  useEffect(() => {
    let reconnectTimer: NodeJS.Timeout;
    let dataUpdateTimer: NodeJS.Timeout;

    const connect = () => {
      setConnectionStatus('connecting');
      
      // Simulate connection delay
      setTimeout(() => {
        if (Math.random() > 0.1) { // 90% success rate
          setIsConnected(true);
          setConnectionStatus('connected');
          
          // Start real-time data updates
          dataUpdateTimer = setInterval(() => {
            const newMetrics: RealTimeMetrics = {
              timestamp: Date.now(),
              modelAccuracy: Math.max(90, Math.min(99, metrics.modelAccuracy + (Math.random() - 0.5) * 0.5)),
              processingSpeed: Math.max(1, Math.min(5, metrics.processingSpeed + (Math.random() - 0.5) * 0.2)),
              activeConnections: Math.max(0, Math.min(100, metrics.activeConnections + Math.floor((Math.random() - 0.5) * 10))),
              systemLoad: Math.max(20, Math.min(95, metrics.systemLoad + (Math.random() - 0.5) * 5)),
              memoryUsage: Math.max(40, Math.min(95, metrics.memoryUsage + (Math.random() - 0.5) * 3)),
              predictionQueue: Math.max(0, Math.min(100, metrics.predictionQueue + Math.floor((Math.random() - 0.5) * 8))),
              successRate: Math.max(95, Math.min(100, metrics.successRate + (Math.random() - 0.5) * 0.3)),
              errorRate: Math.max(0, Math.min(5, metrics.errorRate + (Math.random() - 0.5) * 0.3)),
              throughput: Math.max(50, Math.min(300, metrics.throughput + Math.floor((Math.random() - 0.5) * 20)))
            };

            setMetrics(newMetrics);
            
            // Notify subscribers
            Array.from(subscribers).forEach(callback => callback(newMetrics));
          }, 2000);

          // Simulate training progress updates
          const trainingTimer = setInterval(() => {
            setTrainingProgress(prev => {
              if (!prev || prev.status !== 'training') return prev;
              
              const newEpoch = prev.epoch + 1;
              if (newEpoch >= prev.totalEpochs) {
                return {
                  ...prev,
                  epoch: prev.totalEpochs,
                  status: 'completed',
                  eta: 0
                };
              }
              
              return {
                ...prev,
                epoch: newEpoch,
                loss: Math.max(0.01, prev.loss - Math.random() * 0.01),
                accuracy: Math.min(99, prev.accuracy + Math.random() * 0.5),
                validationLoss: Math.max(0.01, prev.validationLoss - Math.random() * 0.008),
                validationAccuracy: Math.min(99, prev.validationAccuracy + Math.random() * 0.4),
                eta: Math.max(0, prev.eta - 60)
              };
            });
          }, 5000);

          // Random alert generation
          const alertTimer = setInterval(() => {
            if (Math.random() > 0.8) { // 20% chance every 30 seconds
              const alertTypes: ('info' | 'warning' | 'success')[] = ['info', 'warning', 'success'];
              const alertMessages = [
                { type: 'info', title: '数据更新', message: '数据库已更新，新增材料数据' },
                { type: 'success', title: '预测完成', message: '批量预测任务已完成' },
                { type: 'warning', title: '系统负载', message: '系统负载较高，建议优化' },
                { type: 'info', title: '用户活动', message: '检测到新用户登录' },
                { type: 'success', title: '模型优化', message: '模型性能提升0.3%' }
              ];
              
              const randomAlert = alertMessages[Math.floor(Math.random() * alertMessages.length)];
              const newAlert: SystemAlert = {
                id: Date.now().toString(),
                type: randomAlert.type as any,
                title: randomAlert.title,
                message: randomAlert.message,
                timestamp: Date.now()
              };
              
              setAlerts(prev => [newAlert, ...prev.slice(0, 9)]); // Keep only 10 recent alerts
            }
          }, 30000);

          return () => {
            clearInterval(dataUpdateTimer);
            clearInterval(trainingTimer);
            clearInterval(alertTimer);
          };
        } else {
          setConnectionStatus('error');
          reconnectTimer = setTimeout(connect, 5000);
        }
      }, 1000 + Math.random() * 2000);
    };

    connect();

    return () => {
      if (reconnectTimer) clearTimeout(reconnectTimer);
      if (dataUpdateTimer) clearInterval(dataUpdateTimer);
      setIsConnected(false);
      setConnectionStatus('disconnected');
    };
  }, []);

  const dismissAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, dismissed: true } : alert
    ));
  };

  const subscribeToMetrics = (callback: (metrics: RealTimeMetrics) => void) => {
    setSubscribers(prev => {
      const newSet = new Set(prev);
      newSet.add(callback);
      return newSet;
    });
    
    return () => {
      setSubscribers(prev => {
        const newSet = new Set(prev);
        newSet.delete(callback);
        return newSet;
      });
    };
  };

  const value: RealTimeDataContextType = {
    metrics,
    alerts: alerts.filter(alert => !alert.dismissed),
    trainingProgress,
    isConnected,
    connectionStatus,
    dismissAlert,
    subscribeToMetrics
  };

  return (
    <RealTimeDataContext.Provider value={value}>
      {children}
    </RealTimeDataContext.Provider>
  );
};

export default RealTimeDataProvider;