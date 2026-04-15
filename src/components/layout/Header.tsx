import React, { useState, useRef, useEffect } from 'react';
import { Bell, User, Search, HelpCircle, Settings, LogOut, ChevronDown, Database, Brain, Target, Microscope, FileText, ArrowRight, Command, Zap, Star, History, TrendingUp, Wifi, Activity, Palette, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRealTimeData } from '../RealTimeDataProvider';
import { ThemeSelector } from '../ThemeSystem';

interface SearchResult {
  id: string;
  type: 'material' | 'function' | 'document' | 'page';
  title: string;
  description: string;
  url: string;
  icon: React.ComponentType<any>;
}

const searchDatabase: SearchResult[] = [
  // 材料相关
  { id: '1', type: 'material', title: 'CsPbI₃', description: '铯铅碘钙钛矿，带隙1.73eV', url: '/database?search=CsPbI3', icon: Database },
  { id: '2', type: 'material', title: 'MAPbBr₃', description: '甲胺铅溴钙钛矿，高PLQY材料', url: '/database?search=MAPbBr3', icon: Database },
  { id: '3', type: 'material', title: 'FAPbI₃', description: '甲脒铅碘钙钛矿，窄带隙材料', url: '/database?search=FAPbI3', icon: Database },
  { id: '4', type: 'material', title: 'CsPbBr₃', description: '绿光发射钙钛矿材料', url: '/database?search=CsPbBr3', icon: Database },
  { id: '5', type: 'material', title: 'Cs₂AgBiBr₆', description: '无铅双钙钛矿材料', url: '/database?search=Cs2AgBiBr6', icon: Database },
  
  // 功能相关
  { id: '6', type: 'function', title: '性能预测', description: '基于GNN的材料性能预测', url: '/prediction', icon: Brain },
  { id: '7', type: 'function', title: '反向设计', description: '根据目标性能设计材料', url: '/optimization', icon: Target },
  { id: '8', type: 'function', title: '材料数据库', description: '浏览和管理材料数据', url: '/database', icon: Database },
  { id: '9', type: 'function', title: '3D可视化', description: '分子结构三维展示', url: '/visualization', icon: Microscope },
  { id: '10', type: 'function', title: '性能分析', description: '材料性能深度分析', url: '/analysis', icon: FileText },
  
  // 页面相关
  { id: '11', type: 'page', title: '首页仪表板', description: '系统概览和快速访问', url: '/', icon: FileText },
  { id: '12', type: 'page', title: '系统设置', description: '用户偏好和系统配置', url: '/settings', icon: Settings },
  
  // 文档相关
  { id: '13', type: 'document', title: 'PLQY测量', description: '光致发光量子产率测量方法', url: '/docs/plqy', icon: FileText },
  { id: '14', type: 'document', title: '带隙计算', description: '第一性原理带隙计算指南', url: '/docs/bandgap', icon: FileText },
  { id: '15', type: 'document', title: 'GNN模型', description: '图神经网络模型说明', url: '/docs/gnn', icon: FileText },
];

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { metrics, isConnected } = useRealTimeData();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [recentViews, setRecentViews] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const quickActionsRef = useRef<HTMLDivElement>(null);

  // 搜索逻辑
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length === 0) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const filtered = searchDatabase.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);

    setSearchResults(filtered);
    setShowSearchResults(true);
  };

  // 添加搜索到历史记录
  const addToSearchHistory = (query: string) => {
    if (query.trim() && !searchHistory.includes(query)) {
      setSearchHistory(prev => [query, ...prev.slice(0, 4)]);
    }
  };

  const handleSearchSelect = (result: SearchResult) => {
    navigate(result.url);
    addToSearchHistory(result.title);
    setSearchQuery('');
    setShowSearchResults(false);
    
    // 添加到最近查看
    setRecentViews(prev => {
      const filtered = prev.filter(item => item.id !== result.id);
      return [result, ...filtered.slice(0, 4)];
    });
  };

  const handleSearchSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (searchResults.length > 0) {
        handleSearchSelect(searchResults[0]);
      } else if (searchQuery.trim()) {
        addToSearchHistory(searchQuery);
      }
    }
  };

  // 键盘快捷键
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K 打开搜索
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = searchRef.current?.querySelector('input');
        searchInput?.focus();
      }
      // Cmd/Ctrl + / 打开快捷操作
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        setShowQuickActions(!showQuickActions);
      }
      // Escape 关闭所有菜单
      if (e.key === 'Escape') {
        setShowSearchResults(false);
        setShowUserMenu(false);
        setShowNotifications(false);
        setShowQuickActions(false);
        setShowThemeSelector(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showQuickActions]);

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (quickActionsRef.current && !quickActionsRef.current.contains(event.target as Node)) {
        setShowQuickActions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 鼠标悬停延时控制
  const [hoverTimeouts, setHoverTimeouts] = useState<{[key: string]: NodeJS.Timeout}>({});

  const handleMouseEnter = (menuType: string) => {
    // 清除可能存在的延时关闭
    if (hoverTimeouts[menuType]) {
      clearTimeout(hoverTimeouts[menuType]);
    }
    
    // 立即显示菜单
    switch (menuType) {
      case 'quickActions':
        setShowQuickActions(true);
        break;
      case 'notifications':
        setShowNotifications(true);
        break;
      case 'userMenu':
        setShowUserMenu(true);
        break;
    }
  };

  const handleMouseLeave = (menuType: string) => {
    // 设置延时关闭菜单
    const timeout = setTimeout(() => {
      switch (menuType) {
        case 'quickActions':
          setShowQuickActions(false);
          break;
        case 'notifications':
          setShowNotifications(false);
          break;
        case 'userMenu':
          setShowUserMenu(false);
          break;
      }
    }, 200); // 200ms延时，防止鼠标快速移动时误关闭

    setHoverTimeouts(prev => ({ ...prev, [menuType]: timeout }));
  };

  // 清理定时器
  useEffect(() => {
    return () => {
      Object.values(hoverTimeouts).forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, [hoverTimeouts]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'material': return 'bg-blue-500';
      case 'function': return 'bg-green-500';
      case 'document': return 'bg-purple-500';
      case 'page': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const notifications = [
    { id: 1, title: '模型训练完成', desc: '新的GNN模型已完成训练，准确率提升至96.8%', time: '2分钟前', type: 'success', priority: 'high' },
    { id: 2, title: '数据库更新', desc: '添加了127个新材料数据，包含最新钙钛矿结构', time: '1小时前', type: 'info', priority: 'medium' },
    { id: 3, title: '预测任务完成', desc: 'CsPbI₃性能预测已完成，PLQY达到95.2%', time: '3小时前', type: 'success', priority: 'low' },
    { id: 4, title: '系统维护提醒', desc: '计划于今晚22:00进行系统维护，预计30分钟', time: '4小时前', type: 'warning', priority: 'high' },
    { id: 5, title: '新功能上线', desc: 'AI辅助设计功能已上线，支持逆向工程设计', time: '1天前', type: 'feature', priority: 'medium' },
  ];

  const quickActions = [
    { id: 'new-prediction', title: '新建预测', icon: Brain, desc: '开始新的材料性能预测', action: () => navigate('/prediction') },
    { id: 'browse-database', title: '浏览数据库', icon: Database, desc: '查看材料数据库', action: () => navigate('/database') },
    { id: 'start-optimization', title: '智能优化', icon: Target, desc: '启动材料优化任务', action: () => navigate('/optimization') },
    { id: 'view-analysis', title: '数据分析', icon: TrendingUp, desc: '查看分析报告', action: () => navigate('/analysis') },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      case 'feature': return '🎉';
      default: return '📢';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-blue-500';
    }
  };

  return (
    <header className="h-16 glass-card rounded-none border-l-0 border-r-0 border-t-0 flex items-center justify-between px-3 sm:px-6 animate-slide-in-left sticky top-0 z-[60] bg-gradient-to-r from-gray-900/95 to-blue-900/95 backdrop-blur-xl border-b border-white/10 relative overflow-hidden">
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 animate-gradient-shift opacity-50"></div>
      
      {/* Content layer */}
      <div className="relative z-10 flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
        {/* 快捷操作按钮 */}
        <div 
          className="relative flex-shrink-0" 
          ref={quickActionsRef}
          onMouseEnter={() => handleMouseEnter('quickActions')}
          onMouseLeave={() => handleMouseLeave('quickActions')}
        >
          <button
            onClick={() => setShowQuickActions(!showQuickActions)}
            className="p-2.5 text-gray-400 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:scale-110 flex items-center justify-center tooltip focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10 hover:border-blue-400/50"
            data-tooltip="快捷操作 (⌘/)"
            aria-label="快捷操作"
          >
            <Command className="w-5 h-5" />
          </button>
          
          {showQuickActions && (
            <div className="fixed top-16 left-4 w-80 max-h-[85vh] glass-card-enhanced rounded-2xl shadow-2xl z-[250] animate-slide-in-right border-2 border-purple-400/30 backdrop-blur-3xl overflow-hidden">
              {/* 渐变背景装饰 */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/10 to-cyan-500/5 rounded-2xl animate-gradient-shift opacity-60"></div>
              
              {/* 头部 */}
              <div className="relative z-10 p-6 border-b border-white/20 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-t-2xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    快捷操作中心
                  </h3>
                  <button 
                    onClick={() => setShowQuickActions(false)}
                    className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-white text-lg">&times;</span>
                  </button>
                </div>
                <p className="text-purple-200 text-sm">快速访问常用功能和工具</p>
              </div>
              
              {/* 快捷操作列表 */}
              <div className="relative z-10 p-4 space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={action.id}
                    onClick={() => {
                      action.action();
                      setShowQuickActions(false);
                    }}
                    className="w-full flex items-center gap-4 p-4 text-gray-300 hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-white transition-all duration-500 rounded-2xl group animate-fade-in focus:outline-none focus:ring-2 focus:ring-purple-500 border border-white/10 hover:border-purple-400/50 hover:scale-[1.02] hover:shadow-lg"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center group-hover:from-purple-500/40 group-hover:to-blue-500/40 transition-all duration-300 group-hover:scale-110 shadow-lg">
                      <action.icon className="w-6 h-6 text-purple-400 group-hover:text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-base mb-1 group-hover:text-purple-200">{action.title}</div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300">{action.desc}</div>
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 bg-white/5 rounded-lg group-hover:bg-purple-500/20 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-purple-400" />
                    </div>
                  </button>
                ))}
              </div>
              
              {/* 底部快捷键提示 */}
              <div className="relative z-10 p-4 border-t border-white/20 bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-b-2xl">
                <div className="text-center">
                  <p className="text-gray-400 text-xs mb-2">快捷键</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">⌘ + /</span>
                    <span className="text-gray-400 text-xs">或</span>
                    <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">Ctrl + /</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 增强搜索框 */}
        <div className="relative flex-1 max-w-sm sm:max-w-md lg:max-w-xl" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="搜索材料、功能或文档..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleSearchSubmit}
              onFocus={() => {
                if (searchQuery) setShowSearchResults(true);
              }}
              className="pl-10 pr-12 py-2.5 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300 focus:bg-white/25 hover:bg-white/25 backdrop-blur-sm text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setShowSearchResults(false);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors focus:outline-none"
                aria-label="清除搜索"
              >
                ×
              </button>
            )}
          </div>
          
          {/* 增强搜索结果下拉菜单 - 扩大尺寸和增强视觉效果 */}
          {showSearchResults && (
            <div className="fixed top-16 left-1/2 transform -translate-x-1/2 w-[600px] max-h-[80vh] glass-card-enhanced rounded-2xl shadow-2xl z-[250] animate-fade-in-up border-2 border-green-400/30 backdrop-blur-3xl overflow-hidden">
              {/* 渐变背景装饰 */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/10 to-cyan-500/5 rounded-2xl animate-gradient-shift opacity-60"></div>
              
              {searchResults.length > 0 ? (
                <>
                  {/* 搜索结果头部 */}
                  <div className="relative z-10 p-6 border-b border-white/20 bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-t-2xl">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Search className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-white font-bold text-xl">搜索结果</h3>
                      </div>
                      <button 
                        onClick={() => setShowSearchResults(false)}
                        className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <span className="text-white text-lg">&times;</span>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-green-200 text-sm">找到 <span className="font-bold text-green-100">{searchResults.length}</span> 个相关结果</p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-300 text-xs font-medium">智能匹配</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* 搜索结果列表 */}
                  <div className="relative z-10 max-h-96 overflow-y-auto scrollbar-thin p-2">
                    {searchResults.map((result, index) => (
                      <div
                        key={result.id}
                        onClick={() => handleSearchSelect(result)}
                        className="m-2 flex items-center gap-4 p-4 hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 cursor-pointer transition-all duration-500 rounded-2xl border border-white/10 hover:border-green-400/50 last:border-b-0 group animate-scale-in hover:scale-[1.02] hover:shadow-lg backdrop-blur-sm"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className={`w-12 h-12 ${getTypeColor(result.type)} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                          <result.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-semibold text-base mb-2 group-hover:text-green-200 transition-colors">{result.title}</div>
                          <div className="text-gray-300 text-sm leading-relaxed mb-2">{result.description}</div>
                          <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            result.type === 'material' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                            result.type === 'function' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                            result.type === 'document' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                            'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                          }`}>
                            {result.type === 'material' ? '材料' :
                             result.type === 'function' ? '功能' :
                             result.type === 'document' ? '文档' : '页面'}
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 bg-white/5 rounded-xl group-hover:bg-green-500/20 transition-all duration-300">
                          <ArrowRight className="w-5 h-5 text-gray-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 group-hover:text-green-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 底部操作栏 */}
                  <div className="relative z-10 p-4 border-t border-white/20 bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-b-2xl">
                    <div className="flex items-center justify-between">
                      <div className="text-gray-400 text-xs">使用“↑↓”键导航，“Enter”键选择</div>
                      <button className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm">
                        <Search className="w-4 h-4" />
                        高级搜索
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="relative z-10 p-8">
                  {searchHistory.length > 0 && !searchQuery ? (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <History className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-white font-bold text-lg">搜索历史</h3>
                      </div>
                      <div className="space-y-2">
                        {searchHistory.map((query, index) => (
                          <button
                            key={index}
                            onClick={() => handleSearch(query)}
                            className="w-full text-left p-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 rounded-lg transition-all duration-300 focus:outline-none border border-white/10 hover:border-blue-400/50"
                          >
                            <div className="flex items-center gap-3">
                              <Clock className="w-4 h-4 text-blue-400" />
                              <span>{query}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : searchQuery ? (
                    <div className="text-center animate-fade-in-up">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-gray-400 animate-pulse" />
                      </div>
                      <div className="text-white text-lg font-semibold mb-2">未找到相关结果</div>
                      <div className="text-gray-400 text-sm mb-4">尝试使用不同的关键词或检查拼写</div>
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                        帮助搜索
                      </button>
                    </div>
                  ) : recentViews.length > 0 ? (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-white font-bold text-lg">最近查看</h3>
                      </div>
                      <div className="space-y-2">
                        {recentViews.map((item, index) => (
                          <button
                            key={item.id}
                            onClick={() => handleSearchSelect(item)}
                            className="w-full flex items-center gap-3 p-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 rounded-lg transition-all duration-300 focus:outline-none border border-white/10 hover:border-yellow-400/50"
                          >
                            <item.icon className="w-5 h-5 text-yellow-400" />
                            <span className="flex-1 text-left">{item.title}</span>
                            <ArrowRight className="w-4 h-4 opacity-50 hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-2 sm:gap-3">
        {/* 系统状态指示器 */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-black/20 rounded-lg hover:bg-black/30 transition-colors border border-white/10">
          <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
          <span className="text-xs text-gray-400 font-medium">
            {isConnected ? `在线 • ${metrics.activeConnections} 用户` : '离线'}
          </span>
          <Wifi className="w-3 h-3 text-gray-500" />
        </div>

        {/* 性能指示器 */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-black/20 rounded-lg border border-white/10">
          <Activity className="w-3 h-3 text-green-400" />
          <span className="text-xs text-green-400 font-semibold">{metrics.modelAccuracy.toFixed(1)}%</span>
        </div>

        {/* 主题切换 */}
        <button
          onClick={() => setShowThemeSelector(true)}
          className="p-2.5 text-gray-400 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 hover:scale-105 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="主题设置"
        >
          <Palette className="w-5 h-5" />
        </button>

        {/* 增强通知按钮 */}
        <div 
          className="relative" 
          ref={notificationRef}
          onMouseEnter={() => handleMouseEnter('notifications')}
          onMouseLeave={() => handleMouseLeave('notifications')}
        >
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2.5 text-gray-400 hover:text-white transition-all duration-300 relative rounded-lg hover:bg-white/10 hover:scale-105 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="通知中心"
          >
            <Bell className="w-5 h-5" />
            {notifications.filter(n => n.priority === 'high').length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse flex items-center justify-center">
                <span className="text-white text-xs font-bold">{notifications.filter(n => n.priority === 'high').length}</span>
              </span>
            )}
          </button>
          
          {/* 增强通知下拉菜单 - 扩大尺寸和改进视觉效果 */}
          {showNotifications && (
            <div className="fixed top-16 right-4 w-96 h-[85vh] glass-card-enhanced rounded-2xl shadow-2xl z-[250] animate-slide-in-right border-2 border-blue-400/30 flex flex-col backdrop-blur-3xl">
              {/* 渐变背景装饰 */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/10 to-cyan-500/5 rounded-2xl animate-gradient-diagonal opacity-60"></div>
              
              {/* 头部 */}
              <div className="relative z-10 p-6 border-b border-white/20 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-t-2xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                    通知中心
                  </h3>
                  <button 
                    onClick={() => setShowNotifications(false)}
                    className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-white text-lg">&times;</span>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-blue-200 text-sm">您有 <span className="font-bold text-blue-100">{notifications.length}</span> 条未读通知</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 text-xs font-medium">实时更新</span>
                  </div>
                </div>
              </div>
              
              {/* 通知列表 */}
              <div className="relative z-10 flex-1 overflow-y-auto scrollbar-thin p-2">
                {notifications.map((notification, index) => (
                  <div 
                    key={notification.id} 
                    className={`m-2 p-4 rounded-2xl hover:bg-white/10 cursor-pointer transition-all duration-500 group animate-fade-in border-2 ${getPriorityColor(notification.priority).replace('border-l-', 'border-')} bg-gradient-to-r from-gray-800/40 to-gray-700/30 backdrop-blur-sm hover:scale-[1.02] hover:shadow-lg`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                        <span className="text-2xl">{getNotificationIcon(notification.type)}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-base font-semibold mb-2 group-hover:text-blue-200 transition-colors">{notification.title}</div>
                        <div className="text-gray-300 text-sm mb-3 leading-relaxed">{notification.desc}</div>
                        <div className="flex items-center justify-between">
                          <div className="text-gray-400 text-xs flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                            {notification.time}
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            notification.priority === 'high' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                            notification.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                            'bg-green-500/20 text-green-300 border border-green-500/30'
                          }`}>
                            {notification.priority === 'high' ? '紧急' : notification.priority === 'medium' ? '重要' : '一般'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 底部操作栏 */}
              <div className="relative z-10 p-4 border-t border-white/20 bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-b-2xl">
                <div className="flex items-center justify-between gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                    <Bell className="w-4 h-4" />
                    全部已读
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-white/30 hover:bg-white/10 text-white rounded-xl transition-all duration-300 hover:scale-105">
                    <ArrowRight className="w-4 h-4" />
                    查看更多
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <button 
          onClick={() => navigate('/help')}
          className="p-2.5 text-gray-400 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 hover:scale-105 hidden sm:flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="帮助"
        >
          <HelpCircle className="w-5 h-5" />
        </button>

        {/* 增强用户菜单 */}
        <div 
          className="relative" 
          ref={userMenuRef}
          onMouseEnter={() => handleMouseEnter('userMenu')}
          onMouseLeave={() => handleMouseLeave('userMenu')}
        >
          <button 
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 pl-2 sm:pl-4 border-l border-white/20 hover:bg-white/10 rounded-lg p-2 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="用户菜单"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform animate-pulse-glow">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="text-sm hidden sm:block">
              <div className="text-white font-medium">研究员</div>
              <div className="text-gray-400 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                在线
              </div>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${showUserMenu ? 'rotate-180' : ''} hidden sm:block`} />
          </button>
          
          {/* 增强用户下拉菜单 - 扩大尺寸和改进设计 */}
          {showUserMenu && (
            <div className="fixed top-16 right-4 w-72 glass-card-enhanced rounded-2xl shadow-2xl z-[250] animate-slide-in-right border-2 border-cyan-400/30 backdrop-blur-3xl overflow-hidden">
              {/* 渐变背景装饰 */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/10 to-purple-500/5 rounded-2xl animate-gradient-shift opacity-60"></div>
              
              {/* 用户信息头部 */}
              <div className="relative z-10 p-6 border-b border-white/20 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-t-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-lg">用户中心</h3>
                  <button 
                    onClick={() => setShowUserMenu(false)}
                    className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-white text-lg">&times;</span>
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl animate-pulse-glow">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-lg mb-1">研究员</div>
                    <div className="text-cyan-200 text-sm mb-2">admin@perovskite.ai</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 text-xs font-medium">在线</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 用户统计信息 */}
              <div className="relative z-10 p-4 border-b border-white/10">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-white font-bold text-lg">247</div>
                    <div className="text-gray-400 text-xs">预测任务</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <div className="text-white font-bold text-lg">96.8%</div>
                    <div className="text-gray-400 text-xs">准确率</div>
                  </div>
                </div>
              </div>
              
              {/* 菜单选项 */}
              <div className="relative z-10 p-4 space-y-2">
                <button 
                  onClick={() => { navigate('/settings'); setShowUserMenu(false); }}
                  className="w-full flex items-center gap-4 p-4 text-gray-300 hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-white transition-all duration-300 rounded-2xl group focus:outline-none border border-white/10 hover:border-cyan-400/50 hover:scale-[1.02]"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                    <Settings className="w-5 h-5 text-cyan-400 group-hover:text-white group-hover:rotate-90 transition-all duration-300" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-base">系统设置</div>
                    <div className="text-sm text-gray-400">个性化配置</div>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </button>
                
                <button 
                  onClick={() => { navigate('/profile'); setShowUserMenu(false); }}
                  className="w-full flex items-center gap-4 p-4 text-gray-300 hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-white transition-all duration-300 rounded-2xl group focus:outline-none border border-white/10 hover:border-cyan-400/50 hover:scale-[1.02]"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                    <User className="w-5 h-5 text-cyan-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-base">个人资料</div>
                    <div className="text-sm text-gray-400">账户信息</div>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </button>
              </div>
              
              {/* 底部退出 */}
              <div className="relative z-10 p-4 border-t border-white/20 bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-b-2xl">
                <button className="w-full flex items-center justify-center gap-3 p-4 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-300 group focus:outline-none rounded-2xl border border-red-500/30 hover:border-red-400/50 hover:scale-[1.02]">
                  <LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="font-medium">安全退出</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Theme Selector Modal */}
      <ThemeSelector 
        isOpen={showThemeSelector} 
        onClose={() => setShowThemeSelector(false)} 
      />
    </header>
  );
};