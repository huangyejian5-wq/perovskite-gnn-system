import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { useAudioVisual } from './AudioVisualSystem';

// 粒子类型定义
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  life: number;
  maxLife: number;
  type: 'molecule' | 'electron' | 'photon' | 'neural';
  connections: number[];
  energy: number;
  phase: number;
}

interface WavePoint {
  x: number;
  y: number;
  originalY: number;
  speed: number;
  amplitude: number;
  frequency: number;
  phase: number;
}

// 增强的星空背景组件
export const EnhancedStarField: React.FC<{ density?: number; speed?: number }> = ({ 
  density = 150, 
  speed = 0.5 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Array<{
    x: number;
    y: number;
    z: number;
    size: number;
    color: string;
    twinkle: number;
    twinkleSpeed: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 初始化星星
    starsRef.current = Array.from({ length: density }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 1000 + 1,
      size: Math.random() * 3 + 1,
      color: ['#ffffff', '#b3d9ff', '#ffffcc', '#ffcccc', '#ccffcc'][Math.floor(Math.random() * 5)],
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.02 + Math.random() * 0.03
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach(star => {
        // 3D星空效果
        const x = (star.x - canvas.width / 2) * (1000 / star.z) + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * (1000 / star.z) + canvas.height / 2;
        
        // 星星闪烁效果
        star.twinkle += star.twinkleSpeed;
        const twinkleAlpha = 0.3 + 0.7 * (Math.sin(star.twinkle) + 1) / 2;
        
        // 根据距离调整大小和亮度
        const size = star.size * (1000 / star.z);
        const alpha = Math.min(1, size / 2) * twinkleAlpha;
        
        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height && alpha > 0.1) {
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = star.color;
          ctx.shadowBlur = size * 2;
          ctx.shadowColor = star.color;
          
          // 绘制星星
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
          
          // 添加星芒效果
          if (size > 2) {
            ctx.strokeStyle = star.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(x - size * 2, y);
            ctx.lineTo(x + size * 2, y);
            ctx.moveTo(x, y - size * 2);
            ctx.lineTo(x, y + size * 2);
            ctx.stroke();
          }
          
          ctx.restore();
        }

        // 星星移动
        star.z -= speed;
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

// 分子网络动画背景
export const MolecularNetwork: React.FC<{ nodeCount?: number }> = ({ nodeCount = 50 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 初始化分子粒子
    particlesRef.current = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 3 + 2,
      color: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 5)],
      life: 1,
      maxLife: 1,
      type: ['molecule', 'electron', 'photon', 'neural'][Math.floor(Math.random() * 4)] as any,
      connections: [],
      energy: Math.random() * 0.5 + 0.5,
      phase: Math.random() * Math.PI * 2
    }));

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 更新粒子
      particlesRef.current.forEach((particle, index) => {
        // 鼠标交互效果
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150 * 0.01;
          particle.vx += dx * force * 0.01;
          particle.vy += dy * force * 0.01;
        }

        // 粒子运动
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.phase += 0.02;

        // 边界反弹
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // 能量脉动效果
        const energyPulse = 0.5 + 0.5 * Math.sin(particle.phase);
        const currentRadius = particle.radius * (0.8 + 0.4 * energyPulse);

        // 绘制粒子
        ctx.save();
        ctx.globalAlpha = 0.8;
        
        // 外发光
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
        
        // 粒子类型特效
        switch (particle.type) {
          case 'molecule':
            // 分子 - 实心圆
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);
            ctx.fill();
            break;
            
          case 'electron':
            // 电子 - 轨道环
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);
            ctx.stroke();
            break;
            
          case 'photon':
            // 光子 - 脉冲波
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            for (let i = 0; i < 3; i++) {
              ctx.globalAlpha = 0.3 - i * 0.1;
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, currentRadius + i * 5, 0, Math.PI * 2);
              ctx.stroke();
            }
            break;
            
          case 'neural':
            // 神经元 - 复杂结构
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, currentRadius * 0.5, 0, Math.PI * 2);
            ctx.fill();
            
            // 神经突触
            for (let i = 0; i < 6; i++) {
              const angle = (i / 6) * Math.PI * 2 + particle.phase;
              const x2 = particle.x + Math.cos(angle) * currentRadius * 2;
              const y2 = particle.y + Math.sin(angle) * currentRadius * 2;
              
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1;
              ctx.globalAlpha = 0.3;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(x2, y2);
              ctx.stroke();
            }
            break;
        }
        
        ctx.restore();

        // 绘制连接线
        particlesRef.current.forEach((other, otherIndex) => {
          if (otherIndex <= index) return;
          
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = 1 - distance / 120;
            
            ctx.save();
            ctx.globalAlpha = opacity * 0.4;
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 1;
            
            // 能量流动效果
            const gradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y);
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, other.color);
            ctx.strokeStyle = gradient;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
            
            // 数据包传输动画
            const progress = (Date.now() * 0.001 + index * 0.1) % 1;
            const packetX = particle.x + (other.x - particle.x) * progress;
            const packetY = particle.y + (other.y - particle.y) * progress;
            
            ctx.fillStyle = '#ffffff';
            ctx.shadowBlur = 5;
            ctx.shadowColor = '#ffffff';
            ctx.beginPath();
            ctx.arc(packetX, packetY, 1, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [nodeCount]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
};

// 量子波动背景
export const QuantumWaves: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const wavesRef = useRef<WavePoint[][]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // 重新初始化波浪
      initWaves();
    };

    const initWaves = () => {
      wavesRef.current = [];
      for (let w = 0; w < 4; w++) {
        const wave: WavePoint[] = [];
        for (let i = 0; i <= canvas.width / 10; i++) {
          wave.push({
            x: i * 10,
            y: canvas.height * (0.2 + w * 0.2),
            originalY: canvas.height * (0.2 + w * 0.2),
            speed: 0.01 + w * 0.005,
            amplitude: 30 + w * 10,
            frequency: 0.005 + w * 0.002,
            phase: Math.random() * Math.PI * 2
          });
        }
        wavesRef.current.push(wave);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      wavesRef.current.forEach((wave, waveIndex) => {
        // 更新波浪点
        wave.forEach((point, pointIndex) => {
          point.phase += point.speed;
          point.y = point.originalY + Math.sin(point.phase) * point.amplitude;
        });

        // 绘制波浪
        ctx.save();
        ctx.globalAlpha = 0.1 + waveIndex * 0.05;
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.3)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0.1)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(59, 130, 246, 0.3)';

        ctx.beginPath();
        ctx.moveTo(wave[0].x, wave[0].y);
        
        for (let i = 1; i < wave.length; i++) {
          ctx.lineTo(wave[i].x, wave[i].y);
        }
        
        ctx.stroke();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
};

// 数据流动画
export const DataFlow: React.FC = () => {
  const { visualSettings } = useAudioVisual();
  const [dataStreams, setDataStreams] = useState<Array<{
    id: string;
    x: number;
    y: number;
    direction: number;
    speed: number;
    color: string;
    data: string;
  }>>([]);

  useEffect(() => {
    if (!visualSettings.enabled) return;

    const interval = setInterval(() => {
      setDataStreams(prev => {
        // 清理过期的数据流
        const filtered = prev.filter(stream => 
          stream.x > -100 && stream.x < window.innerWidth + 100 &&
          stream.y > -100 && stream.y < window.innerHeight + 100
        );

        // 添加新的数据流
        if (Math.random() < 0.3) {
          const newStream = {
            id: Math.random().toString(36),
            x: Math.random() < 0.5 ? -50 : window.innerWidth + 50,
            y: Math.random() * window.innerHeight,
            direction: Math.random() * Math.PI * 2,
            speed: 2 + Math.random() * 3,
            color: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'][Math.floor(Math.random() * 4)],
            data: ['PLQY', 'Bandgap', 'Stability', 'Efficiency', 'Structure'][Math.floor(Math.random() * 5)]
          };
          filtered.push(newStream);
        }

        // 更新位置
        return filtered.map(stream => ({
          ...stream,
          x: stream.x + Math.cos(stream.direction) * stream.speed,
          y: stream.y + Math.sin(stream.direction) * stream.speed
        }));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [visualSettings.enabled]);

  if (!visualSettings.enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {dataStreams.map(stream => (
        <div
          key={stream.id}
          className="absolute text-xs font-mono opacity-60 animate-pulse"
          style={{
            left: stream.x,
            top: stream.y,
            color: stream.color,
            textShadow: `0 0 10px ${stream.color}`,
            transform: `rotate(${stream.direction}rad)`
          }}
        >
          {stream.data}
        </div>
      ))}
    </div>
  );
};

// 主要的增强背景效果组件
export const EnhancedBackgroundEffects: React.FC<{
  showStars?: boolean;
  showMolecular?: boolean;
  showWaves?: boolean;
  showDataFlow?: boolean;
}> = ({ 
  showStars = true, 
  showMolecular = true, 
  showWaves = true, 
  showDataFlow = true 
}) => {
  const { visualSettings } = useAudioVisual();

  if (!visualSettings.enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {showStars && <EnhancedStarField density={100} speed={0.3} />}
      {showWaves && <QuantumWaves />}
      {showMolecular && <MolecularNetwork nodeCount={40} />}
      {showDataFlow && <DataFlow />}
    </div>
  );
};

export default EnhancedBackgroundEffects;