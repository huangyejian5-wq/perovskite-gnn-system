import React, { useEffect, useRef } from 'react';

interface FloatingParticlesProps {
  count?: number;
  colors?: string[];
  speed?: number;
  size?: number;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 25,
  colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'],
  speed = 0.5,
  size = 4
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationFrameRef = useRef<number>();

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

    // Initialize particles
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      size: Math.random() * size + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * 0.02 + 0.005
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Pulse effect
        particle.opacity += particle.pulse;
        if (particle.opacity >= 0.8 || particle.opacity <= 0.1) {
          particle.pulse *= -1;
        }

        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw core particle
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [count, colors, speed, size]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

interface NeuralNetworkVisualizationProps {
  className?: string;
}

export const NeuralNetworkVisualization: React.FC<NeuralNetworkVisualizationProps> = ({ 
  className = "" 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const nodes = [
      { id: 'input-1', x: 50, y: 50, type: 'input' },
      { id: 'input-2', x: 50, y: 100, type: 'input' },
      { id: 'input-3', x: 50, y: 150, type: 'input' },
      { id: 'hidden-1', x: 150, y: 75, type: 'hidden' },
      { id: 'hidden-2', x: 150, y: 125, type: 'hidden' },
      { id: 'output-1', x: 250, y: 100, type: 'output' }
    ];

    const connections = [
      { from: 'input-1', to: 'hidden-1', strength: 0.8 },
      { from: 'input-1', to: 'hidden-2', strength: 0.6 },
      { from: 'input-2', to: 'hidden-1', strength: 0.7 },
      { from: 'input-2', to: 'hidden-2', strength: 0.9 },
      { from: 'input-3', to: 'hidden-1', strength: 0.5 },
      { from: 'input-3', to: 'hidden-2', strength: 0.7 },
      { from: 'hidden-1', to: 'output-1', strength: 0.8 },
      { from: 'hidden-2', to: 'output-1', strength: 0.6 }
    ];

    // Animate data flow
    let animationTime = 0;
    const animate = () => {
      animationTime += 0.05;
      
      connections.forEach((conn, index) => {
        const line = svg.querySelector(`#line-${index}`) as SVGLineElement;
        if (line) {
          const offset = (animationTime + index * 0.2) % 2;
          line.style.strokeDashoffset = `-${offset * 20}px`;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <svg 
      ref={svgRef}
      className={`w-full h-full ${className}`}
      viewBox="0 0 300 200"
    >
      <defs>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Connections */}
      {[
        { from: [50, 50], to: [150, 75], strength: 0.8 },
        { from: [50, 50], to: [150, 125], strength: 0.6 },
        { from: [50, 100], to: [150, 75], strength: 0.7 },
        { from: [50, 100], to: [150, 125], strength: 0.9 },
        { from: [50, 150], to: [150, 75], strength: 0.5 },
        { from: [50, 150], to: [150, 125], strength: 0.7 },
        { from: [150, 75], to: [250, 100], strength: 0.8 },
        { from: [150, 125], to: [250, 100], strength: 0.6 }
      ].map((conn, index) => (
        <line
          key={index}
          id={`line-${index}`}
          x1={conn.from[0]}
          y1={conn.from[1]}
          x2={conn.to[0]}
          y2={conn.to[1]}
          stroke={`rgba(59, 130, 246, ${conn.strength})`}
          strokeWidth="2"
          strokeDasharray="10,5"
          className="animate-pulse"
          style={{
            filter: 'drop-shadow(0 0 3px rgba(59, 130, 246, 0.5))'
          }}
        />
      ))}

      {/* Nodes */}
      {[
        { x: 50, y: 50, type: 'input' },
        { x: 50, y: 100, type: 'input' },
        { x: 50, y: 150, type: 'input' },
        { x: 150, y: 75, type: 'hidden' },
        { x: 150, y: 125, type: 'hidden' },
        { x: 250, y: 100, type: 'output' }
      ].map((node, index) => (
        <circle
          key={index}
          cx={node.x}
          cy={node.y}
          r={node.type === 'hidden' ? 12 : 10}
          fill="url(#nodeGradient)"
          filter="url(#glow)"
          className="animate-pulse"
          style={{
            animationDelay: `${index * 0.2}s`,
            animationDuration: '2s'
          }}
        />
      ))}
    </svg>
  );
};

interface MolecularOrbitProps {
  size?: number;
  className?: string;
}

export const MolecularOrbit: React.FC<MolecularOrbitProps> = ({ 
  size = 200, 
  className = "" 
}) => {
  return (
    <div 
      className={`relative ${className}`} 
      style={{ width: size, height: size }}
    >
      {/* Central nucleus */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full animate-pulse shadow-lg">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 animate-ping opacity-75"></div>
        </div>
      </div>

      {/* Electron orbits */}
      {[1, 2, 3].map((orbit, index) => (
        <div
          key={orbit}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-400 rounded-full opacity-30"
          style={{
            width: size * 0.3 * orbit,
            height: size * 0.3 * orbit,
            animationDelay: `${index * 0.5}s`
          }}
        >
          <div 
            className={`absolute w-3 h-3 bg-blue-400 rounded-full shadow-lg molecule-orbit`}
            style={{
              top: '50%',
              left: '50%',
              transform: 'translateY(-50%)',
              animationDuration: `${3 + index}s`,
              animationDelay: `${index * 0.8}s`
            }}
          >
            <div className="absolute inset-0 bg-cyan-300 rounded-full animate-ping opacity-60"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

interface DataStreamProps {
  direction?: 'horizontal' | 'vertical';
  speed?: number;
  className?: string;
}

export const DataStream: React.FC<DataStreamProps> = ({
  direction = 'horizontal',
  speed = 2,
  className = ""
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        className={`absolute ${
          direction === 'horizontal' 
            ? 'w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent' 
            : 'h-full w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent'
        }`}
        style={{
          animation: direction === 'horizontal' 
            ? `slide-horizontal ${speed}s linear infinite` 
            : `slide-vertical ${speed}s linear infinite`
        }}
      />
      <div 
        className={`absolute ${
          direction === 'horizontal' 
            ? 'w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent' 
            : 'h-full w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent'
        }`}
        style={{
          animation: direction === 'horizontal' 
            ? `slide-horizontal ${speed * 1.5}s linear infinite reverse` 
            : `slide-vertical ${speed * 1.5}s linear infinite reverse`,
          animationDelay: '0.5s'
        }}
      />
      
      <style>{`
        @keyframes slide-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slide-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
};

export default {
  FloatingParticles,
  NeuralNetworkVisualization,
  MolecularOrbit,
  DataStream
};