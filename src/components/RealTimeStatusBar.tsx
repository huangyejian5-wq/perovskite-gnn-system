import React from 'react';
import { useRealTimeData } from './RealTimeDataProvider';
import { Activity, Wifi, WifiOff, AlertCircle, CheckCircle, Info, AlertTriangle, X, Clock, Zap, Users, Server, MemoryStick, TrendingUp } from 'lucide-react';

export const RealTimeStatusBar: React.FC = () => {
  const { metrics, alerts, connectionStatus, isConnected, dismissAlert } = useRealTimeData();

  const getConnectionStatusIcon = () => {
    switch (connectionStatus) {
      case 'connected':
        return <Wifi className="w-4 h-4 text-green-400" />;
      case 'connecting':
        return <Activity className="w-4 h-4 text-yellow-400 animate-pulse" />;
      case 'disconnected':
      case 'error':
        return <WifiOff className="w-4 h-4 text-red-400" />;
      default:
        return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Info className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Connection Status */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              {getConnectionStatusIcon()}
              <span className="text-sm text-gray-300">
                {connectionStatus === 'connected' && '实时连接'}
                {connectionStatus === 'connecting' && '连接中...'}
                {connectionStatus === 'disconnected' && '已断开'}
                {connectionStatus === 'error' && '连接错误'}
              </span>
            </div>

            {/* Key Metrics */}
            {isConnected && (
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-green-400" />
                  <span className="text-gray-400">精度:</span>
                  <span className="text-green-400 font-semibold">{metrics.modelAccuracy.toFixed(1)}%</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-blue-400" />
                  <span className="text-gray-400">速度:</span>
                  <span className="text-blue-400 font-semibold">{metrics.processingSpeed.toFixed(1)}s</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-purple-400" />
                  <span className="text-gray-400">连接:</span>
                  <span className="text-purple-400 font-semibold">{metrics.activeConnections}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Server className="w-3 h-3 text-orange-400" />
                  <span className="text-gray-400">负载:</span>
                  <span className="text-orange-400 font-semibold">{metrics.systemLoad.toFixed(0)}%</span>
                </div>
                <div className="flex items-center gap-1">
                  <MemoryStick className="w-3 h-3 text-cyan-400" />
                  <span className="text-gray-400">内存:</span>
                  <span className="text-cyan-400 font-semibold">{metrics.memoryUsage.toFixed(0)}%</span>
                </div>
              </div>
            )}
          </div>

          {/* Recent Alerts */}
          <div className="flex items-center gap-2">
            {alerts.slice(0, 3).map((alert) => (
              <div 
                key={alert.id}
                className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1 border border-white/10 animate-slide-in-right"
              >
                {getAlertIcon(alert.type)}
                <span className="text-xs text-gray-300 max-w-48 truncate">{alert.message}</span>
                <button
                  onClick={() => dismissAlert(alert.id)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            
            {alerts.length > 3 && (
              <div className="text-xs text-gray-400">
                +{alerts.length - 3} 更多
              </div>
            )}
          </div>

          {/* Timestamp */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Clock className="w-3 h-3" />
            <span>{new Date(metrics.timestamp).toLocaleTimeString('zh-CN')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeStatusBar;