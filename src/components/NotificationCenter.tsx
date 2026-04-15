import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell,
  X,
  Check,
  AlertTriangle,
  Info,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';
import { useAcademicTheme } from './AcademicTheme';

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actions?: NotificationAction[];
  data?: any;
}

interface NotificationAction {
  label: string;
  action: 'view' | 'dismiss' | 'retry' | 'custom';
  handler?: () => void;
}

interface NotificationCenterProps {
  notifications: Notification[];
  onNotificationRead?: (id: string) => void;
  onNotificationDismiss?: (id: string) => void;
  onNotificationAction?: (id: string, action: string) => void;
  onClearAll?: () => void;
}

const NotificationCenter: React.FC<NotificationCenterProps> = memo(({
  notifications,
  onNotificationRead,
  onNotificationDismiss,
  onNotificationAction,
  onClearAll
}) => {
  const { currentTheme } = useAcademicTheme();
  const [filter, setFilter] = useState<'all' | 'unread' | 'info' | 'success' | 'warning' | 'error'>('all');

  // 过滤通知
  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    return notification.type === filter;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  // 获取通知类型图标
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'error': return <AlertCircle className="w-5 h-5 text-red-500" />;
      default: return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  // 获取通知类型颜色
  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success': return { bg: '#10b98120', border: '#10b98140' };
      case 'warning': return { bg: '#f59e0b20', border: '#f59e0b40' };
      case 'error': return { bg: '#ef444420', border: '#ef444440' };
      default: return { bg: `${currentTheme.primary[500]}20`, border: `${currentTheme.primary[500]}40` };
    }
  };

  // 格式化时间
  const formatTime = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    
    if (diff < 60000) return '刚刚';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`;
    if (diff < 604800000) return `${Math.floor(diff / 86400000)}天前`;
    
    return timestamp.toLocaleDateString('zh-CN');
  };

  // 标记为已读
  const handleMarkAsRead = (id: string) => {
    onNotificationRead?.(id);
  };

  // 处理通知操作
  const handleNotificationAction = (id: string, action: NotificationAction) => {
    if (action.handler) {
      action.handler();
    } else {
      onNotificationAction?.(id, action.action);
    }
  };

  return (
    <div className="space-y-4">
      {/* 通知头部 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.primary[500]}, ${currentTheme.secondary[500]})`
            }}
          >
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg" style={{ color: currentTheme.text.primary }}>
              通知中心
            </h3>
            <p className="text-sm" style={{ color: currentTheme.text.secondary }}>
              {unreadCount > 0 ? `${unreadCount} 条未读通知` : '所有通知已读'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* 过滤器 */}
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="px-3 py-2 rounded-lg border text-sm transition-all duration-200 focus:ring-2 focus:outline-none"
              style={{
                background: `${currentTheme.background.paper}80`,
                color: currentTheme.text.primary,
                borderColor: `${currentTheme.primary[300]}40`
              }}
            >
              <option value="all">全部</option>
              <option value="unread">未读</option>
              <option value="info">信息</option>
              <option value="success">成功</option>
              <option value="warning">警告</option>
              <option value="error">错误</option>
            </select>
          </div>

          {/* 全部标记为已读 */}
          {unreadCount > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => notifications.forEach(n => !n.read && handleMarkAsRead(n.id))}
              className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: currentTheme.primary[400],
                backgroundColor: `${currentTheme.primary[500]}15`,
                border: `1px solid ${currentTheme.primary[500]}30`
              }}
            >
              全部已读
            </motion.button>
          )}

          {/* 清空全部 */}
          {notifications.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClearAll}
              className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: currentTheme.accent.burgundy,
                backgroundColor: `${currentTheme.accent.burgundy}15`,
                border: `1px solid ${currentTheme.accent.burgundy}30`
              }}
            >
              清空全部
            </motion.button>
          )}
        </div>
      </div>

      {/* 通知列表 */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        <AnimatePresence>
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification, index) => {
              const colors = getNotificationColor(notification.type);
              
              return (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    backgroundColor: colors.bg,
                    borderColor: colors.border
                  }}
                  className={`p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg relative ${
                    !notification.read ? 'ring-2 ring-opacity-20' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {getNotificationIcon(notification.type)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-sm truncate" style={{ color: currentTheme.text.primary }}>
                              {notification.title}
                            </h4>
                            {!notification.read && (
                              <div 
                                className="w-2 h-2 rounded-full animate-pulse"
                                style={{ backgroundColor: currentTheme.primary[500] }}
                              />
                            )}
                          </div>
                          <p className="text-sm leading-relaxed mb-2" style={{ color: currentTheme.text.secondary }}>
                            {notification.message}
                          </p>
                          <div className="flex items-center gap-4 text-xs" style={{ color: currentTheme.text.muted }}>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {formatTime(notification.timestamp)}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 ml-2">
                          {!notification.read && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleMarkAsRead(notification.id)}
                              className="p-1 rounded-md transition-colors"
                              style={{ color: currentTheme.text.secondary }}
                              title="标记为已读"
                            >
                              <Check className="w-4 h-4" />
                            </motion.button>
                          )}
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => onNotificationDismiss?.(notification.id)}
                            className="p-1 rounded-md transition-colors"
                            style={{ color: currentTheme.text.secondary }}
                            title="关闭通知"
                          >
                            <X className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>

                      {/* 通知操作按钮 */}
                      {notification.actions && notification.actions.length > 0 && (
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t" style={{ borderColor: colors.border }}>
                          {notification.actions.map((action, actionIndex) => (
                            <motion.button
                              key={actionIndex}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleNotificationAction(notification.id, action)}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                              style={{
                                color: currentTheme.primary[400],
                                backgroundColor: `${currentTheme.primary[500]}20`,
                                border: `1px solid ${currentTheme.primary[500]}30`
                              }}
                            >
                              {action.label}
                            </motion.button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                style={{
                  backgroundColor: `${currentTheme.primary[500]}20`,
                  border: `1px solid ${currentTheme.primary[500]}30`
                }}
              >
                <Bell className="w-8 h-8" style={{ color: currentTheme.primary[400] }} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: currentTheme.text.primary }}>
                {filter === 'unread' ? '没有未读通知' : '暂无通知'}
              </h3>
              <p className="text-sm" style={{ color: currentTheme.text.secondary }}>
                {filter === 'unread' 
                  ? '所有通知都已查看' 
                  : '当前没有任何通知消息'
                }
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

NotificationCenter.displayName = 'NotificationCenter';

export { NotificationCenter };
export type { Notification, NotificationAction };