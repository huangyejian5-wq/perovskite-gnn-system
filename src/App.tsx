import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Sidebar } from './components/layout/Sidebar';
import { AcademicHeader } from './components/layout/AcademicHeader';
import { RealTimeDataProvider } from './components/RealTimeDataProvider';
import { AcademicThemeProvider } from './components/AcademicTheme';
import { SmartTipProvider } from './components/LoadingComponents';
import { AudioVisualProvider, useAudioVisual } from './components/AudioVisualSystem';
import { useAcademicTheme } from './components/AcademicTheme';
import { RealTimeStatusBar } from './components/RealTimeStatusBar';
import { DataExportPanel } from './components/DataExportPanel';
import { SmartGuide, FeedbackPanel, QuickHelpButton } from './components/UserGuidance';
import { FloatingParticles } from './components/EnhancedVisualEffects';
import './App.css';

// 懒加载页面组件以优化性能
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const PredictionPage = lazy(() => import('./pages/PredictionPage').then(module => ({ default: module.PredictionPage })));
const OptimizationPage = lazy(() => import('./pages/OptimizationPage').then(module => ({ default: module.OptimizationPage })));
const DatabasePage = lazy(() => import('./pages/DatabasePage').then(module => ({ default: module.DatabasePage })));
const VisualizationPage = lazy(() => import('./pages/VisualizationPage').then(module => ({ default: module.VisualizationPage })));
const AnalysisPage = lazy(() => import('./pages/AnalysisPage').then(module => ({ default: module.AnalysisPage })));
const MethodsPage = lazy(() => import('./pages/MethodsPage').then(module => ({ default: module.MethodsPage })));
const SettingsPage = lazy(() => import('./pages/SettingsPage').then(module => ({ default: module.SettingsPage })));
const NavigationTestPage = lazy(() => import('./pages/NavigationTestPage').then(module => ({ default: module.NavigationTestPage })));

// 加载组件
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
    <div className="glass-card rounded-2xl p-8 flex flex-col items-center gap-4 animate-scale-in">
      <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
      <div className="text-white text-lg font-medium animate-pulse">加载中...</div>
    </div>
  </div>
);

// Cursor Trail Effect Component
const CursorTrailEffect: React.FC = () => {
  const [trails, setTrails] = useState<Array<{ id: string; x: number; y: number }>>([]);
  const { visualSettings } = useAudioVisual();

  useEffect(() => {
    if (!visualSettings.enabled || !visualSettings.cursorEffects) return;

    let trailId = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        id: `trail_${++trailId}`,
        x: e.clientX,
        y: e.clientY
      };

      setTrails(prev => [...prev.slice(-8), newTrail]);

      // Clean up old trails
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 800);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [visualSettings.enabled, visualSettings.cursorEffects]);

  if (!visualSettings.enabled || !visualSettings.cursorEffects) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail-particle cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            animationDelay: `${index * 50}ms`
          }}
        />
      ))}
    </div>
  );
};

// Enhanced App Component with Audio Visual Integration
const AppContent: React.FC = () => {
  const { playSound, showNotification, triggerVisualFeedback } = useAudioVisual();
  const { currentTheme } = useAcademicTheme();
  const [showExportPanel, setShowExportPanel] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  // Check for first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsFirstVisit(true);
      setShowGuide(true);
      localStorage.setItem('hasVisited', 'true');
      showNotification('info', '欢迎使用钙钛矿GNN预测系统！', {
        duration: 6000,
        position: 'center',
        playSound: true
      });
    }
  }, [showNotification]);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K: Quick search with visual feedback
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[placeholder*="搜索"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
          playSound('chime');
          triggerVisualFeedback(searchInput, 'glow');
          showNotification('info', '已激活搜索框', { duration: 2000 });
        }
      }
      
      // Ctrl/Cmd + /: Show help with celebration effect
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        setShowGuide(true);
        playSound('pop');
        showNotification('info', '帮助面板已打开', { duration: 2000 });
      }
      
      // Ctrl/Cmd + E: Data export with sound and visual feedback
      if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        setShowExportPanel(true);
        playSound('whoosh');
        showNotification('success', '数据导出面板已打开', { duration: 3000 });
      }
      
      // Ctrl/Cmd + S: Quick settings
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        const settingsBtn = document.querySelector('[aria-label="设置"]') as HTMLElement;
        if (settingsBtn) {
          playSound('tick');
          triggerVisualFeedback(settingsBtn, 'pulse');
        }
      }
      
      // F1: Help with enhanced feedback
      if (e.key === 'F1') {
        e.preventDefault();
        setShowGuide(true);
        playSound('chime');
        showNotification('info', 'F1 帮助已激活', { duration: 2000 });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [playSound, triggerVisualFeedback, showNotification]);

  // Enhanced global interaction feedback
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if target is a valid HTMLElement with closest method
      if (!target || typeof target.closest !== 'function') {
        return;
      }
      
      // Button clicks with enhanced feedback
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = (target.tagName === 'BUTTON' ? target : target.closest('button')) as HTMLElement;
        if (button) {
          playSound('click');
          triggerVisualFeedback(button, 'ripple');
          
          // Special feedback for different button types
          if (button.classList.contains('btn-primary')) {
            triggerVisualFeedback(button, 'scale');
          } else if (button.classList.contains('btn-secondary')) {
            triggerVisualFeedback(button, 'pulse');
          }
        }
      }
      
      // Link clicks
      if (target.tagName === 'A' || target.closest('a')) {
        playSound('tick');
        const link = (target.tagName === 'A' ? target : target.closest('a')) as HTMLElement;
        if (link) {
          triggerVisualFeedback(link, 'glow');
        }
      }

      // Card interactions
      if (target.closest('.data-card') || target.closest('.glass-card')) {
        const card = target.closest('.data-card, .glass-card') as HTMLElement;
        if (card) {
          playSound('pop');
          triggerVisualFeedback(card, 'ripple');
        }
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if target is a valid HTMLElement with closest method
      if (!target || typeof target.closest !== 'function') {
        return;
      }
      
      // Enhanced button hover effects
      if ((target.tagName === 'BUTTON' || target.closest('button'))) {
        const button = (target.tagName === 'BUTTON' ? target : target.closest('button')) as HTMLElement;
        if (button.classList.contains('btn-primary') || 
            button.classList.contains('btn-secondary') ||
            button.classList.contains('interactive')) {
          playSound('hover');
          
          // Add subtle glow on hover
          if (button.classList.contains('btn-primary')) {
            triggerVisualFeedback(button, 'glow');
          }
        }
      }

      // Interactive element hover feedback
      if (target.classList && (target.classList.contains('interactive') || target.closest('.interactive'))) {
        playSound('hover');
        const element = (target.classList.contains('interactive') ? target : target.closest('.interactive')) as HTMLElement;
        if (element) {
          triggerVisualFeedback(element, 'pulse');
        }
      }
    };

    // Success/Error feedback integration
    const handleSuccess = (e: CustomEvent) => {
      playSound('success');
      showNotification('success', e.detail.message || '操作成功！', {
        duration: 4000,
        playSound: false // Already played
      });
    };

    const handleError = (e: CustomEvent) => {
      playSound('error');
      showNotification('error', e.detail.message || '操作失败，请重试', {
        duration: 5000,
        playSound: false // Already played
      });
      
      if (e.detail.element) {
        triggerVisualFeedback(e.detail.element, 'shake');
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('app:success', handleSuccess as EventListener);
    document.addEventListener('app:error', handleError as EventListener);
    
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('app:success', handleSuccess as EventListener);
      document.removeEventListener('app:error', handleError as EventListener);
    };
  }, [playSound, triggerVisualFeedback, showNotification]);

  const handleFeedbackSubmit = async (feedback: any) => {
    try {
      // Simulate feedback submission with loading state
      showNotification('info', '正在提交反馈...', { 
        duration: 0,
        playSound: false
      });
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      playSound('success');
      showNotification('success', '反馈提交成功，感谢您的建议！', { 
        duration: 4000,
        playSound: false // Already played
      });
      
      console.log('Feedback submitted:', feedback);
    } catch (error) {
      playSound('error');
      showNotification('error', '反馈提交失败，请重试', { 
        duration: 4000 
      });
    }
  };


  const handleGuideOpen = () => {
    setShowGuide(true);
    playSound('chime');
  };

  const handleFeedbackOpen = () => {
    setShowFeedback(true);
    playSound('pop');
  };

  return (
    <div 
      className="App min-h-screen flex overflow-hidden relative"
      style={{ background: currentTheme.background.primary }}
    >
      {/* Background Visual Effects */}
      <FloatingParticles count={30} />
      
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 z-40">
        <Sidebar />
      </div>
      
      {/* Main Content Area with proper left margin */}
      <div className="flex-1 flex flex-col min-w-0 ml-64 relative z-10">
        <AcademicHeader />
        <main className="flex-1 overflow-auto pb-16 relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/prediction" element={<PredictionPage />} />
            <Route path="/optimization" element={<OptimizationPage />} />
            <Route path="/reverse-design" element={<OptimizationPage />} />
            <Route path="/database" element={<DatabasePage />} />
            <Route path="/literature" element={<DatabasePage />} />
            <Route path="/experimental" element={<DatabasePage />} />
            <Route path="/standards" element={<DatabasePage />} />
            <Route path="/visualization" element={<VisualizationPage />} />
            <Route path="/crystal" element={<VisualizationPage />} />
            <Route path="/property-map" element={<VisualizationPage />} />
            <Route path="/phase-diagram" element={<VisualizationPage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/methods" element={<MethodsPage />} />
            <Route path="/data-sources" element={<MethodsPage />} />
            <Route path="/research-groups" element={<DatabasePage />} />
            <Route path="/conferences" element={<DatabasePage />} />
            <Route path="/publications" element={<DatabasePage />} />
            <Route path="/projects" element={<DatabasePage />} />
            <Route path="/my-research" element={<AnalysisPage />} />
            <Route path="/profile" element={<SettingsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/nav-test" element={<NavigationTestPage />} />
          </Routes>
        </main>
      </div>
      
      <RealTimeStatusBar />
      
      {/* Cursor Trail Effect */}
      <CursorTrailEffect />
      
      {/* Enhanced toast notifications (fallback for react-hot-toast) */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          className: 'notification-bounce-in',
          style: {
            background: currentTheme.background.paper,
            color: currentTheme.text.primary,
            border: `1px solid ${currentTheme.primary[300]}60`,
            borderRadius: '12px',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          },
          success: {
            style: {
              border: `1px solid ${currentTheme.secondary[400]}60`,
            },
            iconTheme: {
              primary: currentTheme.secondary[500],
              secondary: currentTheme.text.primary,
            },
          },
          error: {
            style: {
              border: `1px solid ${currentTheme.accent.burgundy}60`,
            },
            iconTheme: {
              primary: currentTheme.accent.burgundy,
              secondary: currentTheme.text.primary,
            },
          },
          loading: {
            style: {
              border: `1px solid ${currentTheme.primary[400]}60`,
            },
            iconTheme: {
              primary: currentTheme.primary[500],
              secondary: currentTheme.text.primary,
            },
          },
        }}
      />

      {/* Data Export Panel */}
      <DataExportPanel
        isOpen={showExportPanel}
        onClose={() => {
          setShowExportPanel(false);
          playSound('whoosh');
        }}
      />

      {/* Smart Guide System */}
      <SmartGuide
        isOpen={showGuide}
        onClose={() => {
          setShowGuide(false);
          playSound('pop');
        }}
        flow={isFirstVisit ? 'welcome' : 'welcome'}
      />

      {/* User Feedback System */}
      <FeedbackPanel
        isOpen={showFeedback}
        onClose={() => {
          setShowFeedback(false);
          playSound('tick');
        }}
        onSubmit={handleFeedbackSubmit}
      />

      {/* Quick Help Button with Enhanced Feedback */}
      <QuickHelpButton
        onOpenGuide={handleGuideOpen}
        onOpenFeedback={handleFeedbackOpen}
      />

      {/* Global Loading Overlay with Enhanced Animation */}
      <div id="global-loading-overlay" className="hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center">
        <div className="glass-card rounded-2xl p-8 flex flex-col items-center gap-4 animate-scale-in">
          <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="text-white text-lg font-medium animate-pulse">处理中...</div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <AcademicThemeProvider>
      <AudioVisualProvider>
        <SmartTipProvider>
          <RealTimeDataProvider>
            <Router>
              <Suspense fallback={<PageLoader />}>
                <AppContent />
              </Suspense>
            </Router>
          </RealTimeDataProvider>
        </SmartTipProvider>
      </AudioVisualProvider>
    </AcademicThemeProvider>
  );
}

export default App;
