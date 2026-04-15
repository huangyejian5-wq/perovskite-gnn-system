import React, { useState, useEffect, useRef } from 'react';
import { HelpCircle, X, ChevronRight, ChevronLeft, Play, Pause, RotateCcw, CheckCircle, Lightbulb, Target, Zap, Star, MessageCircle, ThumbsUp, ThumbsDown, Send, AlertTriangle, Info } from 'lucide-react';

// 引导步骤接口
export interface GuideStep {
  id: string;
  target: string; // CSS选择器
  title: string;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  showSkip?: boolean;
  actions?: Array<{
    label: string;
    onClick: () => void;
    type?: 'primary' | 'secondary';
  }>;
}

// 预定义的引导流程
export const GUIDE_FLOWS: Record<string, GuideStep[]> = {
  welcome: [
    {
      id: 'welcome-1',
      target: '.sidebar',
      title: '欢迎使用钙钛矿GNN预测系统！',
      content: '这是您的导航面板，包含了所有主要功能模块。让我们开始探索吧！',
      position: 'right' as const
    },
    {
      id: 'welcome-2', 
      target: '[data-page="prediction"]',
      title: '性能预测',
      content: '在这里您可以上传材料数据，使用AI模型进行性能预测。支持批量处理和实时分析。',
      position: 'right' as const
    },
    {
      id: 'welcome-3',
      target: '[data-page="database"]', 
      title: '材料数据库',
      content: '浏览和管理钙钛矿材料数据库，包含47,000+种材料的详细信息。',
      position: 'right' as const
    },
    {
      id: 'welcome-4',
      target: '[data-page="visualization"]',
      title: '3D可视化',
      content: '通过交互式3D分子结构查看器，深入了解材料的原子级结构。',
      position: 'right' as const
    },
    {
      id: 'welcome-5',
      target: '.realtime-status-bar',
      title: '实时状态监控',
      content: '这里显示系统的实时性能指标和AI模型状态，帮您掌握系统运行情况。',
      position: 'left' as const
    }
  ],
  prediction: [
    {
      id: 'pred-1',
      target: '.upload-area',
      title: '上传数据',
      content: '支持多种格式：CSV、JSON、CIF等。您可以拖拽文件或点击选择。',
      position: 'bottom' as const
    },
    {
      id: 'pred-2',
      target: '.model-selector',
      title: '选择模型',
      content: '我们提供多种经过优化的GNN模型，包括GCN、GraphSAGE等，精度高达96.1%。',
      position: 'bottom' as const
    }
  ],
  database: [
    {
      id: 'db-1',
      target: '.search-bar',
      title: '搜索功能',
      content: '使用智能搜索功能快速找到目标材料，支持化学式、性质范围等多种搜索方式。',
      position: 'bottom' as const
    }
  ]
};

// 智能引导组件
export const SmartGuide: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  flow?: keyof typeof GUIDE_FLOWS;
  steps?: GuideStep[];
}> = ({ isOpen, onClose, flow = 'welcome', steps: customSteps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highlightedElement, setHighlightedElement] = useState<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const steps = customSteps || GUIDE_FLOWS[flow] || [];

  useEffect(() => {
    if (!isOpen) return;

    const step = steps[currentStep];
    if (!step) return;

    const element = document.querySelector(step.target) as HTMLElement;
    if (element) {
      setHighlightedElement(element);
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentStep, isOpen, steps]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentStep < steps.length - 1) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, steps.length]);

  if (!isOpen || steps.length === 0) return null;

  const currentStepData = steps[currentStep];
  if (!currentStepData) return null;

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetGuide = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const getTooltipPosition = (element: HTMLElement, position: string) => {
    const rect = element.getBoundingClientRect();
    const tooltipWidth = 320;
    const tooltipHeight = 200;
    
    switch (position) {
      case 'top':
        return {
          top: rect.top - tooltipHeight - 16,
          left: rect.left + rect.width / 2 - tooltipWidth / 2
        };
      case 'bottom':
        return {
          top: rect.bottom + 16,
          left: rect.left + rect.width / 2 - tooltipWidth / 2
        };
      case 'left':
        return {
          top: rect.top + rect.height / 2 - tooltipHeight / 2,
          left: rect.left - tooltipWidth - 16
        };
      case 'right':
        return {
          top: rect.top + rect.height / 2 - tooltipHeight / 2,
          left: rect.right + 16
        };
      default:
        return {
          top: rect.bottom + 16,
          left: rect.left + rect.width / 2 - tooltipWidth / 2
        };
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-[9998] pointer-events-none"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      >
        {/* Highlight cutout */}
        {highlightedElement && (
          <div
            className="absolute border-4 border-blue-400 rounded-lg pointer-events-auto"
            style={{
              top: highlightedElement.getBoundingClientRect().top - 8,
              left: highlightedElement.getBoundingClientRect().left - 8,
              width: highlightedElement.getBoundingClientRect().width + 16,
              height: highlightedElement.getBoundingClientRect().height + 16,
              boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.7)',
              transition: 'all 0.3s ease'
            }}
          />
        )}
      </div>

      {/* Tooltip */}
      {highlightedElement && (
        <div
          className="fixed z-[9999] glass-card rounded-xl p-6 w-80 animate-scale-in"
          style={getTooltipPosition(highlightedElement, currentStepData.position || 'bottom')}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {currentStep + 1}
              </div>
              <span className="text-xs text-gray-400">
                {currentStep + 1} / {steps.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              {currentStepData.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {currentStepData.content}
            </p>
          </div>

          {/* Custom Actions */}
          {'actions' in currentStepData && currentStepData.actions && (
            <div className="flex gap-2 mb-4">
              {currentStepData.actions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.onClick}
                  className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                    action.type === 'primary'
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-gray-300'
                  }`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
                disabled={currentStep >= steps.length - 1}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={resetGuide}
                className="p-1 text-gray-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {(!('showSkip' in currentStepData) || currentStepData.showSkip !== false) && (
                <button
                  onClick={onClose}
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  跳过引导
                </button>
              )}
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="p-1 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={currentStep >= steps.length - 1 ? onClose : nextStep}
                className="flex items-center gap-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors"
              >
                {currentStep >= steps.length - 1 ? (
                  <>
                    <CheckCircle className="w-3 h-3" />
                    完成
                  </>
                ) : (
                  <>
                    下一步
                    <ChevronRight className="w-3 h-3" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div 
                className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// 用户反馈组件
export interface FeedbackData {
  type: 'bug' | 'feature' | 'general';
  rating?: number;
  message: string;
  email?: string;
  screenshot?: string;
}

export const FeedbackPanel: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: FeedbackData) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
  const [step, setStep] = useState<'type' | 'details' | 'success'>('type');
  const [feedbackType, setFeedbackType] = useState<FeedbackData['type']>('general');
  const [rating, setRating] = useState<number>(0);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!message.trim()) return;

    setIsSubmitting(true);
    try {
      await onSubmit({
        type: feedbackType,
        rating: rating || undefined,
        message: message.trim(),
        email: email.trim() || undefined
      });
      setStep('success');
    } catch (error) {
      console.error('Feedback submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep('type');
    setFeedbackType('general');
    setRating(0);
    setMessage('');
    setEmail('');
  };

  const feedbackTypes = [
    {
      key: 'bug' as const,
      title: '报告问题',
      description: '发现了系统bug或功能异常',
      icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
      color: 'border-red-400/30 bg-red-500/10'
    },
    {
      key: 'feature' as const,
      title: '功能建议',
      description: '建议新功能或改进现有功能',
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      color: 'border-yellow-400/30 bg-yellow-500/10'
    },
    {
      key: 'general' as const,
      title: '一般反馈',
      description: '使用体验、界面设计等建议',
      icon: <MessageCircle className="w-6 h-6 text-blue-400" />,
      color: 'border-blue-400/30 bg-blue-500/10'
    }
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl max-w-md w-full mx-4 animate-scale-in">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-white">用户反馈</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 'type' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium mb-2">选择反馈类型</h3>
                <p className="text-gray-400 text-sm mb-4">请选择最符合您反馈内容的类型</p>
              </div>
              
              <div className="space-y-3">
                {feedbackTypes.map(type => (
                  <button
                    key={type.key}
                    onClick={() => setFeedbackType(type.key)}
                    className={`w-full p-4 border rounded-xl transition-all text-left ${
                      feedbackType === type.key
                        ? type.color
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {type.icon}
                      <span className="font-medium text-white">{type.title}</span>
                    </div>
                    <p className="text-sm text-gray-400">{type.description}</p>
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setStep('details')}
                  className="btn-primary"
                >
                  下一步
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )}

          {step === 'details' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium mb-2">详细信息</h3>
                <p className="text-gray-400 text-sm">请详细描述您的反馈内容</p>
              </div>

              {/* Rating for general feedback */}
              {feedbackType === 'general' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    整体满意度
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className={`p-1 transition-colors ${
                          star <= rating ? 'text-yellow-400' : 'text-gray-600'
                        }`}
                      >
                        <Star className="w-6 h-6 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  反馈内容 *
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    feedbackType === 'bug' 
                      ? '请描述您遇到的问题，包括操作步骤和预期结果...'
                      : feedbackType === 'feature'
                      ? '请描述您希望添加或改进的功能...'
                      : '请分享您的使用体验和建议...'
                  }
                  rows={4}
                  className="w-full bg-black/20 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email (optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  邮箱地址 (可选)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="如需回复，请留下邮箱地址"
                  className="w-full bg-black/20 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep('type')}
                  className="btn-secondary"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  返回
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!message.trim() || isSubmitting}
                  className="btn-primary disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      提交中
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-1" />
                      提交反馈
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">反馈提交成功</h3>
              <p className="text-gray-400 text-sm mb-6">
                感谢您的反馈！我们会认真考虑您的建议，并持续改进产品体验。
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    resetForm();
                  }}
                  className="btn-secondary flex-1"
                >
                  继续反馈
                </button>
                <button
                  onClick={onClose}
                  className="btn-primary flex-1"
                >
                  关闭
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 快捷帮助按钮
export const QuickHelpButton: React.FC<{
  onOpenGuide: () => void;
  onOpenFeedback: () => void;
}> = ({ onOpenGuide, onOpenFeedback }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 space-y-2 animate-slide-in-right">
          <button
            onClick={onOpenGuide}
            className="block w-full glass-card rounded-lg px-4 py-2 text-white hover:bg-white/20 transition-colors text-left"
          >
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-sm">新手引导</span>
            </div>
          </button>
          <button
            onClick={onOpenFeedback}
            className="block w-full glass-card rounded-lg px-4 py-2 text-white hover:bg-white/20 transition-colors text-left"
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">意见反馈</span>
            </div>
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
      >
        <HelpCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default {
  SmartGuide,
  FeedbackPanel,
  QuickHelpButton,
  GUIDE_FLOWS
};