import React, { useState, useEffect } from 'react';
import { 
  Bell, User, Search, Settings, ChevronDown, 
  Database, Brain, Target, BarChart3, 
  Atom, Home, Palette, LogIn
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRealTimeData } from '../RealTimeDataProvider';
import { useAcademicTheme, AcademicThemeSelector } from '../AcademicTheme';
import { UserLoginModal } from '../UserLoginModal';
import { NotificationCenter, Notification } from '../NotificationCenter';
import { RESEARCH_DATASET_SUMMARY } from '../../data/researchDatasets';

export const AcademicHeader: React.FC = () => {
  const navigate = useNavigate();
  const { isConnected } = useRealTimeData();
  const { currentTheme } = useAcademicTheme();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{name: string; email: string; institution: string} | null>(null);

  // 简化的菜单项
  const quickNavItems = [
    { label: '首页', icon: Home, path: '/', active: false },
    { label: '性能预测', icon: Brain, path: '/prediction', active: false },
    { label: '智能优化', icon: Target, path: '/optimization', active: false },
    { label: '材料数据库', icon: Database, path: '/database', active: false },
    { label: '数据分析', icon: BarChart3, path: '/analysis', active: false },
  ];

  const [notifications, setNotifications] = useState<Notification[]>([
    { 
      id: '1', 
      type: 'success',
      title: '研究数据已接入', 
      message: `系统已接入 ${RESEARCH_DATASET_SUMMARY.experimentalRecordCount} 条实验记录与 ${RESEARCH_DATASET_SUMMARY.screenedCandidateCount} 条候选数据`, 
      timestamp: new Date(Date.now() - 2 * 60000), 
      read: false,
      actions: [
        { label: '浏览数据库', action: 'view', handler: () => navigate('/database') },
        { label: '查看分析', action: 'custom', handler: () => navigate('/analysis') }
      ]
    },
    { 
      id: '2', 
      type: 'info',
      title: '候选队列更新', 
      message: `当前有 ${RESEARCH_DATASET_SUMMARY.rescuedFalseMetalCount} 条假金属拯救候选可用于后续验证与排序`, 
      timestamp: new Date(Date.now() - 60 * 60000), 
      read: false,
      actions: [
        { label: '查看候选', action: 'view', handler: () => navigate('/prediction') }
      ]
    },
    { 
      id: '3', 
      type: 'warning',
      title: '3D结构库说明', 
      message: '3D 可视化页使用精选结构模板进行交互展示，研究统计与候选结果仍以数据库和分析页中的真实数据为准', 
      timestamp: new Date(Date.now() - 3 * 60 * 60000), 
      read: false 
    },
    { 
      id: '4', 
      type: 'info',
      title: '训练基准池就绪', 
      message: `当前流程已对齐 ${RESEARCH_DATASET_SUMMARY.alignedGroundTruthCount} 条 ground-truth 参考数据`, 
      timestamp: new Date(Date.now() - 6 * 60 * 60000), 
      read: true 
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  // 通知处理函数
  const handleNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const handleNotificationDismiss = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const handleClearAllNotifications = () => {
    setNotifications([]);
  };

  // 处理登录
  const handleLogin = (credentials: any) => {
    setCurrentUser({
      name: '研究员',
      email: credentials.email,
      institution: '钙钛矿研究实验室'
    });
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  // 处理注册
  const handleRegister = (userData: any) => {
    setCurrentUser({
      name: userData.name,
      email: userData.email,
      institution: userData.institution
    });
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  // 处理登出
  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setShowUserMenu(false);
  };

  // 处理搜索
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // 这里可以添加搜索逻辑
      console.log('搜索:', searchQuery);
      navigate(`/database?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      if (!target.closest('[data-menu="user"]')) {
        setShowUserMenu(false);
      }
      if (!target.closest('[data-menu="notifications"]')) {
        setShowNotifications(false);
      }
      if (!target.closest('[data-menu="theme"]')) {
        setShowThemeMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      className="h-18 border-b backdrop-blur-xl sticky top-0 z-50 relative"
      style={{
        background: `linear-gradient(180deg, ${currentTheme.background.secondary}f4, ${currentTheme.background.overlay}f1)`,
        borderColor: `${currentTheme.primary[200]}26`,
        boxShadow: '0 10px 30px rgba(2, 6, 23, 0.18)'
      }}
    >
      <div className="flex items-center justify-between px-4 lg:px-6 h-full max-w-full gap-4">
        
        {/* 左侧 - Logo */}
        <div className="flex items-center gap-4">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${currentTheme.primary[500]}, ${currentTheme.secondary[500]})`
              }}
            >
              <Atom className="w-5 h-5 text-white group-hover:rotate-180 transition-transform duration-500" />
            </div>
            <div className="hidden md:block">
              <div className="font-bold text-base" style={{ color: currentTheme.text.primary }}>
                钙钛矿材料性能预测系统
              </div>
              <div className="text-xs opacity-70" style={{ color: currentTheme.text.secondary }}>
                Perovskite Performance Prediction System
              </div>
            </div>
          </div>

          {/* 快速导航 - 仅在大屏显示 */}
          <nav className="hidden xl:flex items-center gap-2 ml-4">
            {quickNavItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 border"
                style={{
                  color: currentTheme.text.secondary,
                  backgroundColor: item.active ? `${currentTheme.primary[500]}16` : `${currentTheme.background.paper}18`,
                  borderColor: item.active ? `${currentTheme.primary[400]}28` : `${currentTheme.primary[200]}18`
                }}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* 中间 - 搜索框 */}
        <div className="hidden lg:block flex-1 max-w-lg mx-2">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50" />
              <input
                type="text"
                placeholder="搜索化学式、候选材料、实验文献..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border text-sm transition-all duration-300 focus:ring-2 focus:ring-opacity-50 focus:outline-none"
                style={{
                  background: `${currentTheme.background.paper}42`,
                  color: currentTheme.text.primary,
                  backdropFilter: 'blur(10px)',
                  borderColor: `${currentTheme.primary[200]}20`
                }}
              />
            </div>
          </form>
        </div>

        {/* 右侧 - 工具栏 */}
        <div className="flex items-center gap-2">
          <div
            className="hidden 2xl:flex items-center gap-2 px-3 py-2 rounded-2xl border text-xs"
            style={{
              color: currentTheme.text.secondary,
              background: `${currentTheme.background.paper}28`,
              borderColor: `${currentTheme.primary[200]}20`
            }}
          >
            <span>{RESEARCH_DATASET_SUMMARY.experimentalRecordCount} 实验</span>
            <span className="opacity-40">|</span>
            <span>{RESEARCH_DATASET_SUMMARY.screenedCandidateCount} 候选</span>
            <span className="opacity-40">|</span>
            <span>{RESEARCH_DATASET_SUMMARY.rescuedFalseMetalCount} 拯救</span>
          </div>
          
          {/* 主题切换 */}
          <div className="relative" data-menu="theme">
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="p-2.5 rounded-xl transition-all duration-200 relative"
              style={{
                color: currentTheme.text.primary,
                backgroundColor: showThemeMenu ? `${currentTheme.primary[500]}20` : `${currentTheme.background.paper}24`,
                border: `1px solid ${currentTheme.primary[300]}24`
              }}
              title="切换主题"
            >
              <Palette className="w-5 h-5" />
            </button>
            
            {showThemeMenu && (
              <div 
                className="absolute top-full right-0 mt-2 w-64 rounded-xl shadow-2xl border backdrop-blur-xl z-50 p-4 animate-in slide-in-from-top-2"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.background.paper}f0, ${currentTheme.background.secondary}f0)`,
                  borderColor: `${currentTheme.primary[300]}60`,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3)`
                }}
              >
                <div className="text-sm font-medium mb-3" style={{ color: currentTheme.text.primary }}>
                  选择主题
                </div>
                <AcademicThemeSelector />
              </div>
            )}
          </div>

          {/* 通知 */}
          <div className="relative" data-menu="notifications">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2.5 rounded-xl transition-all duration-200 relative"
              style={{
                color: currentTheme.text.primary,
                backgroundColor: showNotifications ? `${currentTheme.primary[500]}20` : `${currentTheme.background.paper}24`,
                border: `1px solid ${currentTheme.primary[300]}24`
              }}
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span 
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-bold text-white flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: currentTheme.accent.burgundy }}
                >
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div 
                className="absolute top-full right-0 mt-2 w-96 max-w-[90vw] rounded-xl shadow-2xl border backdrop-blur-xl z-50 animate-in slide-in-from-top-2 p-6"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.background.paper}f0, ${currentTheme.background.secondary}f0)`,
                  borderColor: `${currentTheme.primary[300]}60`,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3)`
                }}
              >
                <NotificationCenter
                  notifications={notifications}
                  onNotificationRead={handleNotificationRead}
                  onNotificationDismiss={handleNotificationDismiss}
                  onClearAll={handleClearAllNotifications}
                />
              </div>
            )}
          </div>

          {/* 用户菜单 */}
          <div className="relative" data-menu="user">
            {isLoggedIn ? (
              // 已登录状态
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-2 rounded-xl transition-all duration-200 border"
                style={{
                  color: currentTheme.text.primary,
                  backgroundColor: showUserMenu ? `${currentTheme.primary[500]}20` : `${currentTheme.background.paper}24`,
                  border: `1px solid ${currentTheme.primary[300]}24`
                }}
              >
                <div 
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg"
                >
                  {currentUser?.name?.charAt(0) || 'U'}
                </div>
                <div className="hidden sm:flex flex-col items-start">
                  <div className="text-sm font-medium" style={{ color: currentTheme.text.primary }}>
                    {currentUser?.name || '用户'}
                  </div>
                  <div className="text-xs" style={{ color: currentTheme.text.secondary }}>
                    {currentUser?.institution || '研究员'}
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 hidden sm:block" />
              </button>
            ) : (
              // 未登录状态
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex items-center gap-2 p-2.5 px-4 rounded-xl transition-all duration-200 font-medium"
                style={{
                  color: 'white',
                  background: `linear-gradient(135deg, ${currentTheme.primary[500]}, ${currentTheme.secondary[500]})`,
                  boxShadow: `0 8px 20px ${currentTheme.primary[500]}28`
                }}
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">登录</span>
              </button>
            )}

            {showUserMenu && isLoggedIn && (
              <div 
                className="absolute top-full right-0 mt-2 w-64 rounded-xl shadow-2xl border backdrop-blur-xl z-50 animate-in slide-in-from-top-2"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.background.paper}f0, ${currentTheme.background.secondary}f0)`,
                  borderColor: `${currentTheme.primary[300]}60`,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3)`
                }}
              >
                <div className="p-4 border-b" style={{ borderColor: `${currentTheme.primary[300]}20` }}>
                  <div className="font-semibold" style={{ color: currentTheme.text.primary }}>
                    {currentUser?.name}
                  </div>
                  <div className="text-sm opacity-70" style={{ color: currentTheme.text.secondary }}>
                    {currentUser?.email}
                  </div>
                  <div className="text-xs mt-1" style={{ color: currentTheme.text.muted }}>
                    {currentUser?.institution}
                  </div>
                </div>
                
                <div className="py-2">
                  <button 
                    onClick={() => { navigate('/profile'); setShowUserMenu(false); }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-white/5 transition-colors flex items-center gap-2"
                    style={{ color: currentTheme.text.primary }}
                  >
                    <User className="w-4 h-4" />
                    个人设置
                  </button>
                  <button 
                    onClick={() => { navigate('/settings'); setShowUserMenu(false); }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-white/5 transition-colors flex items-center gap-2"
                    style={{ color: currentTheme.text.primary }}
                  >
                    <Settings className="w-4 h-4" />
                    系统设置
                  </button>
                </div>

                <div className="p-3 border-t" style={{ borderColor: `${currentTheme.primary[300]}20` }}>
                  <button 
                    onClick={handleLogout}
                    className="w-full py-2 px-3 text-sm text-center rounded-lg transition-colors hover:scale-105"
                    style={{ 
                      color: currentTheme.accent.burgundy,
                      backgroundColor: `${currentTheme.accent.burgundy}10`,
                      border: `1px solid ${currentTheme.accent.burgundy}30`
                    }}
                  >
                    退出登录
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 连接状态指示器 */}
      <div className="absolute bottom-0 left-4 hidden lg:block">
        <div className="flex items-center gap-2 px-2 py-1 rounded-t-lg border-x border-t" style={{ borderColor: `${currentTheme.primary[200]}16` }}>
          <div 
            className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}
          />
          <span className="text-xs" style={{ color: currentTheme.text.muted }}>
            {isConnected ? '已连接' : '连接中...'}
          </span>
        </div>
      </div>

      {/* 登录模态框 */}
      <UserLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
    </header>
  );
};
