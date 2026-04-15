import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Vibrate, Eye, MousePointer, Zap, Bell, CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';

// 音频反馈系统类型定义
interface AudioSettings {
  enabled: boolean;
  volume: number;
  clickSound: boolean;
  hoverSound: boolean;
  successSound: boolean;
  errorSound: boolean;
  notificationSound: boolean;
  ambientSound: boolean;
}

interface VisualSettings {
  enabled: boolean;
  rippleEffects: boolean;
  particleEffects: boolean;
  glowEffects: boolean;
  shakeEffects: boolean;
  flashEffects: boolean;
  cursorEffects: boolean;
  focusEffects: boolean;
}

interface AudioVisualContextType {
  audioSettings: AudioSettings;
  visualSettings: VisualSettings;
  setAudioSettings: (settings: Partial<AudioSettings>) => void;
  setVisualSettings: (settings: Partial<VisualSettings>) => void;
  playSound: (soundType: SoundType) => void;
  triggerVisualFeedback: (element: HTMLElement, type: FeedbackType) => void;
  showNotification: (type: NotificationType, message: string, options?: NotificationOptions) => void;
}

type SoundType = 'click' | 'hover' | 'success' | 'error' | 'notification' | 'whoosh' | 'beep' | 'chime' | 'pop' | 'tick';
type FeedbackType = 'ripple' | 'glow' | 'shake' | 'flash' | 'pulse' | 'bounce' | 'scale' | 'rotate';
type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface NotificationOptions {
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
  showIcon?: boolean;
  playSound?: boolean;
}

const AudioVisualContext = createContext<AudioVisualContextType | null>(null);

// 音频管理器类
class AudioManager {
  private context: AudioContext | null = null;
  private buffers: Map<string, AudioBuffer> = new Map();
  private gainNode: GainNode | null = null;
  private initialized = false;

  async initialize() {
    if (this.initialized) return;
    
    try {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.gainNode = this.context.createGain();
      this.gainNode.connect(this.context.destination);
      
      // 预加载音频文件（使用Web Audio API生成基础音效）
      await this.generateBasicSounds();
      this.initialized = true;
    } catch (error) {
      console.warn('Web Audio API not supported:', error);
    }
  }

  private async generateBasicSounds() {
    if (!this.context) return;

    const sounds = {
      click: await this.generateClick(),
      hover: await this.generateHover(),
      success: await this.generateSuccess(),
      error: await this.generateError(),
      notification: await this.generateNotification(),
      whoosh: await this.generateWhoosh(),
      beep: await this.generateBeep(),
      chime: await this.generateChime(),
      pop: await this.generatePop(),
      tick: await this.generateTick()
    };

    for (const [name, buffer] of Object.entries(sounds)) {
      try {
        this.buffers.set(name, buffer);
      } catch (error) {
        console.warn(`Failed to generate ${name} sound:`, error);
      }
    }
  }

  private generateClick = async (): Promise<AudioBuffer> => {
    if (!this.context) throw new Error('AudioContext not available');
    
    const buffer = this.context.createBuffer(1, this.context.sampleRate * 0.1, this.context.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / this.context.sampleRate;
      data[i] = Math.sin(880 * 2 * Math.PI * t) * Math.exp(-t * 30);
    }
    
    return buffer;
  };

  private generateHover = async (): Promise<AudioBuffer> => {
    if (!this.context) throw new Error('AudioContext not available');
    
    const buffer = this.context.createBuffer(1, this.context.sampleRate * 0.05, this.context.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / this.context.sampleRate;
      data[i] = Math.sin(660 * 2 * Math.PI * t) * Math.exp(-t * 50) * 0.3;
    }
    
    return buffer;
  };

  private generateSuccess = async (): Promise<AudioBuffer> => {
    if (!this.context) throw new Error('AudioContext not available');
    
    const buffer = this.context.createBuffer(1, this.context.sampleRate * 0.3, this.context.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / this.context.sampleRate;
      const freq1 = 523 + (t * 200); // C5 to D5
      const freq2 = 659 + (t * 200); // E5 to F#5
      data[i] = (Math.sin(freq1 * 2 * Math.PI * t) + Math.sin(freq2 * 2 * Math.PI * t)) * Math.exp(-t * 3) * 0.3;
    }
    
    return buffer;
  };

  private generateError = async (): Promise<AudioBuffer> => {
    if (!this.context) throw new Error('AudioContext not available');
    
    const buffer = this.context.createBuffer(1, this.context.sampleRate * 0.2, this.context.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / this.context.sampleRate;
      const freq = 200 - (t * 50); // Descending tone
      data[i] = Math.sin(freq * 2 * Math.PI * t) * Math.exp(-t * 5) * 0.4;
    }
    
    return buffer;
  };

  private generateNotification = async (): Promise<AudioBuffer> => {
    if (!this.context) throw new Error('AudioContext not available');
    
    const buffer = this.context.createBuffer(1, this.context.sampleRate * 0.4, this.context.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / this.context.sampleRate;
      const envelope = Math.exp(-t * 2);
      const tone1 = Math.sin(523 * 2 * Math.PI * t); // C5
      const tone2 = Math.sin(659 * 2 * Math.PI * (t - 0.1)) * (t > 0.1 ? 1 : 0); // E5
      data[i] = (tone1 + tone2) * envelope * 0.3;
    }
    
    return buffer;
  };

  private generateWhoosh = async (): Promise<AudioBuffer> => {
    if (!this.context) throw new Error('AudioContext not available');
    
    const buffer = this.context.createBuffer(1, this.context.sampleRate * 0.15, this.context.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / this.context.sampleRate;
      const noise = (Math.random() - 0.5) * 2;
      const filter = Math.sin(t * Math.PI); // Bell curve envelope
      data[i] = noise * filter * 0.2;
    }
    
    return buffer;
  };

  private generateBeep = async (): Promise<AudioBuffer> => {
    if (!this.context) throw new Error('AudioContext not available');
    
    const buffer = this.context.createBuffer(1, this.context.sampleRate * 0.1, this.context.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / this.context.sampleRate;
      data[i] = Math.sin(1000 * 2 * Math.PI * t) * (t < 0.05 ? 1 : Math.exp(-(t - 0.05) * 20)) * 0.3;
    }
    
    return buffer;
  };

  private generateChime = async (): Promise<AudioBuffer> => {
    if (!this.context) throw new Error('AudioContext not available');
    
    const buffer = this.context.createBuffer(1, this.context.sampleRate * 0.5, this.context.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / this.context.sampleRate;
      const freq1 = 523; // C5
      const freq2 = 659; // E5
      const freq3 = 784; // G5
      const envelope = Math.exp(-t * 1.5);
      data[i] = (Math.sin(freq1 * 2 * Math.PI * t) + 
                 Math.sin(freq2 * 2 * Math.PI * t) + 
                 Math.sin(freq3 * 2 * Math.PI * t)) * envelope * 0.2;
    }
    
    return buffer;
  };

  private generatePop = async (): Promise<AudioBuffer> => {
    if (!this.context) throw new Error('AudioContext not available');
    
    const buffer = this.context.createBuffer(1, this.context.sampleRate * 0.08, this.context.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / this.context.sampleRate;
      const freq = 100 + (Math.exp(-t * 20) * 400);
      data[i] = Math.sin(freq * 2 * Math.PI * t) * Math.exp(-t * 25) * 0.4;
    }
    
    return buffer;
  };

  private generateTick = async (): Promise<AudioBuffer> => {
    if (!this.context) throw new Error('AudioContext not available');
    
    const buffer = this.context.createBuffer(1, this.context.sampleRate * 0.02, this.context.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / this.context.sampleRate;
      data[i] = Math.sin(1200 * 2 * Math.PI * t) * Math.exp(-t * 100) * 0.2;
    }
    
    return buffer;
  };

  playSound(soundType: SoundType, volume = 1) {
    if (!this.initialized || !this.context || !this.gainNode) return;

    const buffer = this.buffers.get(soundType);
    if (!buffer) return;

    try {
      const source = this.context.createBufferSource();
      source.buffer = buffer;
      source.connect(this.gainNode);
      
      this.gainNode.gain.setValueAtTime(volume * 0.3, this.context.currentTime);
      source.start();
    } catch (error) {
      console.warn('Failed to play sound:', error);
    }
  }

  setVolume(volume: number) {
    if (this.gainNode) {
      this.gainNode.gain.setValueAtTime(volume, this.context?.currentTime || 0);
    }
  }
}

// 视觉反馈管理器类
class VisualFeedbackManager {
  private activeEffects = new Set<HTMLElement>();

  triggerRipple(element: HTMLElement, x?: number, y?: number) {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('div');
    
    const centerX = x !== undefined ? x - rect.left : rect.width / 2;
    const centerY = y !== undefined ? y - rect.top : rect.height / 2;
    const maxRadius = Math.max(rect.width, rect.height);

    ripple.className = 'absolute rounded-full bg-white/30 pointer-events-none';
    ripple.style.cssText = `
      left: ${centerX}px;
      top: ${centerY}px;
      width: 0px;
      height: 0px;
      transform: translate(-50%, -50%);
      animation: ripple-expand 0.6s ease-out forwards;
    `;

    // Add keyframes if not already added
    this.addRippleKeyframes();

    if (element.style.position === 'static' || !element.style.position) {
      element.style.position = 'relative';
    }
    element.style.overflow = 'hidden';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  private addRippleKeyframes() {
    const styleId = 'ripple-keyframes';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes ripple-expand {
        0% {
          width: 0px;
          height: 0px;
          opacity: 0.5;
        }
        100% {
          width: 100px;
          height: 100px;
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  triggerGlow(element: HTMLElement, color = '#3b82f6', duration = 800) {
    const originalBoxShadow = element.style.boxShadow;
    const glowShadow = `0 0 20px ${color}40, 0 0 40px ${color}20, 0 0 60px ${color}10`;
    
    element.style.transition = `box-shadow ${duration/2}ms ease-out`;
    element.style.boxShadow = glowShadow;
    
    setTimeout(() => {
      element.style.boxShadow = originalBoxShadow;
      setTimeout(() => {
        element.style.transition = '';
      }, duration/2);
    }, duration/2);
  }

  triggerShake(element: HTMLElement, intensity = 5, duration = 400) {
    if (this.activeEffects.has(element)) return;
    this.activeEffects.add(element);

    const originalTransform = element.style.transform;
    const shakeKeyframes = [
      { transform: originalTransform },
      { transform: `${originalTransform} translateX(${intensity}px)` },
      { transform: `${originalTransform} translateX(-${intensity}px)` },
      { transform: `${originalTransform} translateX(${intensity}px)` },
      { transform: originalTransform }
    ];

    element.animate(shakeKeyframes, {
      duration,
      easing: 'ease-in-out'
    }).addEventListener('finish', () => {
      this.activeEffects.delete(element);
    });
  }

  triggerFlash(element: HTMLElement, color = '#ffffff', duration = 300) {
    const flash = document.createElement('div');
    flash.className = 'absolute inset-0 pointer-events-none';
    flash.style.cssText = `
      background-color: ${color};
      opacity: 0.5;
      animation: flash-fade ${duration}ms ease-out forwards;
    `;

    if (element.style.position === 'static' || !element.style.position) {
      element.style.position = 'relative';
    }

    element.appendChild(flash);
    
    setTimeout(() => {
      flash.remove();
    }, duration);

    // Add flash keyframes
    this.addFlashKeyframes();
  }

  private addFlashKeyframes() {
    const styleId = 'flash-keyframes';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes flash-fade {
        0% { opacity: 0.5; }
        50% { opacity: 0.8; }
        100% { opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  triggerPulse(element: HTMLElement, scale = 1.05, duration = 400) {
    const originalTransform = element.style.transform;
    const pulseKeyframes = [
      { transform: originalTransform },
      { transform: `${originalTransform} scale(${scale})` },
      { transform: originalTransform }
    ];

    element.animate(pulseKeyframes, {
      duration,
      easing: 'ease-in-out'
    });
  }

  triggerBounce(element: HTMLElement, height = 10, duration = 600) {
    const originalTransform = element.style.transform;
    const bounceKeyframes = [
      { transform: originalTransform, easing: 'ease-out' },
      { transform: `${originalTransform} translateY(-${height}px)`, easing: 'ease-in' },
      { transform: originalTransform, easing: 'ease-out' },
      { transform: `${originalTransform} translateY(-${height/2}px)`, easing: 'ease-in' },
      { transform: originalTransform }
    ];

    element.animate(bounceKeyframes, {
      duration,
      easing: 'linear'
    });
  }

  triggerScale(element: HTMLElement, scale = 1.1, duration = 200) {
    const originalTransform = element.style.transform;
    const scaleKeyframes = [
      { transform: originalTransform },
      { transform: `${originalTransform} scale(${scale})` },
      { transform: originalTransform }
    ];

    element.animate(scaleKeyframes, {
      duration,
      easing: 'ease-in-out'
    });
  }

  triggerRotate(element: HTMLElement, degrees = 360, duration = 800) {
    const originalTransform = element.style.transform;
    element.animate([
      { transform: originalTransform },
      { transform: `${originalTransform} rotate(${degrees}deg)` }
    ], {
      duration,
      easing: 'ease-in-out'
    });
  }
}

// 通知组件
interface NotificationProps {
  id: string;
  type: NotificationType;
  message: string;
  options: NotificationOptions;
  onRemove: (id: string) => void;
}

const Notification: React.FC<NotificationProps> = ({ id, type, message, options, onRemove }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    if (options.duration && options.duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onRemove(id), 300);
      }, options.duration);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const getIcon = () => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error': return <XCircle className="w-5 h-5 text-red-400" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'info': return <Info className="w-5 h-5 text-blue-400" />;
    }
  };

  const getColorClasses = () => {
    switch (type) {
      case 'success': return 'border-green-400/30 bg-green-500/10';
      case 'error': return 'border-red-400/30 bg-red-500/10';
      case 'warning': return 'border-yellow-400/30 bg-yellow-500/10';
      case 'info': return 'border-blue-400/30 bg-blue-500/10';
    }
  };

  const getPositionClasses = () => {
    switch (options.position || 'top-right') {
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      case 'center': return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
    }
  };

  return (
    <div className={`fixed z-[10000] max-w-sm transition-all duration-300 ${getPositionClasses()} ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
    }`}>
      <div className={`glass-card rounded-xl p-4 border ${getColorClasses()}`}>
        <div className="flex items-start gap-3">
          {options.showIcon !== false && getIcon()}
          <div className="flex-1 min-w-0">
            <div className="text-white text-sm leading-relaxed">{message}</div>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => onRemove(id), 300);
            }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

// 主要的音视觉系统提供者
export const AudioVisualProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioManager = useRef(new AudioManager());
  const visualManager = useRef(new VisualFeedbackManager());
  const [notifications, setNotifications] = useState<Array<{ 
    id: string; 
    type: NotificationType; 
    message: string; 
    options: NotificationOptions 
  }>>([]);

  const [audioSettings, setAudioSettingsState] = useState<AudioSettings>(() => {
    const saved = localStorage.getItem('audioSettings');
    return saved ? JSON.parse(saved) : {
      enabled: true,
      volume: 0.7,
      clickSound: true,
      hoverSound: true,
      successSound: true,
      errorSound: true,
      notificationSound: true,
      ambientSound: false
    };
  });

  const [visualSettings, setVisualSettingsState] = useState<VisualSettings>(() => {
    const saved = localStorage.getItem('visualSettings');
    return saved ? JSON.parse(saved) : {
      enabled: true,
      rippleEffects: true,
      particleEffects: true,
      glowEffects: true,
      shakeEffects: true,
      flashEffects: true,
      cursorEffects: true,
      focusEffects: true
    };
  });

  useEffect(() => {
    audioManager.current.initialize();
  }, []);

  useEffect(() => {
    localStorage.setItem('audioSettings', JSON.stringify(audioSettings));
    audioManager.current.setVolume(audioSettings.volume);
  }, [audioSettings]);

  useEffect(() => {
    localStorage.setItem('visualSettings', JSON.stringify(visualSettings));
  }, [visualSettings]);

  const setAudioSettings = (newSettings: Partial<AudioSettings>) => {
    setAudioSettingsState(prev => ({ ...prev, ...newSettings }));
  };

  const setVisualSettings = (newSettings: Partial<VisualSettings>) => {
    setVisualSettingsState(prev => ({ ...prev, ...newSettings }));
  };

  const playSound = (soundType: SoundType) => {
    if (!audioSettings.enabled) return;

    const shouldPlay = {
      click: audioSettings.clickSound,
      hover: audioSettings.hoverSound,
      success: audioSettings.successSound,
      error: audioSettings.errorSound,
      notification: audioSettings.notificationSound,
      whoosh: true,
      beep: true,
      chime: true,
      pop: true,
      tick: true
    }[soundType];

    if (shouldPlay) {
      audioManager.current.playSound(soundType, audioSettings.volume);
    }
  };

  const triggerVisualFeedback = (element: HTMLElement, type: FeedbackType) => {
    if (!visualSettings.enabled) return;

    const manager = visualManager.current;
    switch (type) {
      case 'ripple':
        if (visualSettings.rippleEffects) manager.triggerRipple(element);
        break;
      case 'glow':
        if (visualSettings.glowEffects) manager.triggerGlow(element);
        break;
      case 'shake':
        if (visualSettings.shakeEffects) manager.triggerShake(element);
        break;
      case 'flash':
        if (visualSettings.flashEffects) manager.triggerFlash(element);
        break;
      case 'pulse':
        manager.triggerPulse(element);
        break;
      case 'bounce':
        manager.triggerBounce(element);
        break;
      case 'scale':
        manager.triggerScale(element);
        break;
      case 'rotate':
        manager.triggerRotate(element);
        break;
    }
  };

  const showNotification = (type: NotificationType, message: string, options: NotificationOptions = {}) => {
    const id = `notification_${Date.now()}_${Math.random()}`;
    const notification = { id, type, message, options: { duration: 5000, ...options } };
    
    setNotifications(prev => [...prev, notification]);

    if (options.playSound !== false) {
      switch (type) {
        case 'success':
          playSound('success');
          break;
        case 'error':
          playSound('error');
          break;
        case 'warning':
        case 'info':
          playSound('notification');
          break;
      }
    }
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const contextValue: AudioVisualContextType = {
    audioSettings,
    visualSettings,
    setAudioSettings,
    setVisualSettings,
    playSound,
    triggerVisualFeedback,
    showNotification
  };

  return (
    <AudioVisualContext.Provider value={contextValue}>
      {children}
      {/* Notification container */}
      {notifications.map(notification => (
        <Notification
          key={notification.id}
          {...notification}
          onRemove={removeNotification}
        />
      ))}
    </AudioVisualContext.Provider>
  );
};

// Hook for using the audio visual system
export const useAudioVisual = () => {
  const context = useContext(AudioVisualContext);
  if (!context) {
    throw new Error('useAudioVisual must be used within AudioVisualProvider');
  }
  return context;
};

// Enhanced button component with audio/visual feedback
interface FeedbackButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  feedbackType?: FeedbackType;
  soundType?: SoundType;
  glowColor?: string;
}

export const FeedbackButton: React.FC<FeedbackButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  feedbackType = 'ripple',
  soundType = 'click',
  glowColor,
  onClick,
  onMouseEnter,
  className = '',
  ...props
}) => {
  const { playSound, triggerVisualFeedback } = useAudioVisual();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      playSound(soundType);
      triggerVisualFeedback(buttonRef.current, feedbackType);
    }
    onClick?.(e);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    playSound('hover');
    if (buttonRef.current && glowColor) {
      triggerVisualFeedback(buttonRef.current, 'glow');
    }
    onMouseEnter?.(e);
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-400 hover:to-green-500';
      case 'error':
        return 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-400 hover:to-red-500';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-400 hover:to-yellow-500';
      default:
        return 'btn-primary';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3';
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`
        ${getVariantClasses()} 
        ${getSizeClasses()}
        rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95
        ${className}
      `}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {children}
    </button>
  );
};

// Settings panel for audio/visual preferences
export const AudioVisualSettingsPanel: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void 
}> = ({ isOpen, onClose }) => {
  const { 
    audioSettings, 
    visualSettings, 
    setAudioSettings, 
    setVisualSettings,
    playSound,
    showNotification
  } = useAudioVisual();

  if (!isOpen) return null;

  const testSound = (soundType: SoundType) => {
    playSound(soundType);
  };

  const testNotification = (type: NotificationType) => {
    const messages = {
      success: '操作成功完成！',
      error: '发生错误，请重试',
      warning: '请注意相关事项',
      info: '这是一条信息提醒'
    };
    showNotification(type, messages[type]);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Volume2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">音效与反馈设置</h2>
              <p className="text-gray-300 text-sm">自定义您的交互体验</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
          >
            <span className="text-white text-lg">×</span>
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
          {/* Audio Settings */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-blue-400" />
              音效设置
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={audioSettings.enabled}
                    onChange={(e) => setAudioSettings({ enabled: e.target.checked })}
                    className="w-4 h-4 text-blue-500 bg-transparent border-gray-400 rounded focus:ring-blue-500"
                  />
                  <span className="text-white">启用音效</span>
                </label>
                <FeedbackButton
                  size="sm"
                  soundType="beep"
                  onClick={() => testSound('beep')}
                  disabled={!audioSettings.enabled}
                >
                  测试
                </FeedbackButton>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">音量 ({Math.round(audioSettings.volume * 100)}%)</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={audioSettings.volume}
                  onChange={(e) => setAudioSettings({ volume: parseFloat(e.target.value) })}
                  className="w-full accent-blue-500"
                  disabled={!audioSettings.enabled}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { key: 'clickSound', label: '点击音效', sound: 'click' as SoundType },
                  { key: 'hoverSound', label: '悬停音效', sound: 'hover' as SoundType },
                  { key: 'successSound', label: '成功音效', sound: 'success' as SoundType },
                  { key: 'errorSound', label: '错误音效', sound: 'error' as SoundType },
                  { key: 'notificationSound', label: '通知音效', sound: 'notification' as SoundType },
                ].map(({ key, label, sound }) => (
                  <div key={key} className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={audioSettings[key as keyof AudioSettings] as boolean}
                        onChange={(e) => setAudioSettings({ [key]: e.target.checked })}
                        className="w-3 h-3 text-blue-500 bg-transparent border-gray-400 rounded focus:ring-blue-500"
                        disabled={!audioSettings.enabled}
                      />
                      <span className="text-gray-300 text-sm">{label}</span>
                    </label>
                    <button
                      onClick={() => testSound(sound)}
                      className="p-1 text-blue-400 hover:text-blue-300 transition-colors text-xs"
                      disabled={!audioSettings.enabled}
                    >
                      ▶
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Settings */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-green-400" />
              视觉反馈设置
            </h3>
            
            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={visualSettings.enabled}
                  onChange={(e) => setVisualSettings({ enabled: e.target.checked })}
                  className="w-4 h-4 text-green-500 bg-transparent border-gray-400 rounded focus:ring-green-500"
                />
                <span className="text-white">启用视觉反馈</span>
              </label>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { key: 'rippleEffects', label: '涟漪效果' },
                  { key: 'particleEffects', label: '粒子效果' },
                  { key: 'glowEffects', label: '发光效果' },
                  { key: 'shakeEffects', label: '震动效果' },
                  { key: 'flashEffects', label: '闪光效果' },
                  { key: 'cursorEffects', label: '光标效果' },
                ].map(({ key, label }) => (
                  <label key={key} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={visualSettings[key as keyof VisualSettings] as boolean}
                      onChange={(e) => setVisualSettings({ [key]: e.target.checked })}
                      className="w-3 h-3 text-green-500 bg-transparent border-gray-400 rounded focus:ring-green-500"
                      disabled={!visualSettings.enabled}
                    />
                    <span className="text-gray-300 text-sm">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Test Notifications */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5 text-purple-400" />
              通知测试
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { type: 'success' as NotificationType, label: '成功通知', color: 'from-green-500 to-green-600' },
                { type: 'error' as NotificationType, label: '错误通知', color: 'from-red-500 to-red-600' },
                { type: 'warning' as NotificationType, label: '警告通知', color: 'from-yellow-500 to-yellow-600' },
                { type: 'info' as NotificationType, label: '信息通知', color: 'from-blue-500 to-blue-600' },
              ].map(({ type, label, color }) => (
                <FeedbackButton
                  key={type}
                  variant={type as any}
                  size="sm"
                  onClick={() => testNotification(type)}
                >
                  {label}
                </FeedbackButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  AudioVisualProvider,
  useAudioVisual,
  FeedbackButton,
  AudioVisualSettingsPanel
};