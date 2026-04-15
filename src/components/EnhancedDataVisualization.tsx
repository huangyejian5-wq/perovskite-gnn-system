import React, { useState, useEffect, useRef, useMemo } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, Cell, BarChart, Bar } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import * as d3 from 'd3';

// 3D分子结构可视化组件
export const Molecule3DViewer: React.FC<{
  moleculeData: {
    atoms: Array<{ id: string; element: string; x: number; y: number; z: number; color: string }>;
    bonds: Array<{ from: string; to: string; type: 'single' | 'double' | 'triple' }>;
  };
  className?: string;
}> = ({ moleculeData, className = '' }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    if (!isRotating) return;
    
    const interval = setInterval(() => {
      setRotation(prev => ({ x: prev.x + 0.5, y: prev.y + 0.3 }));
    }, 50);

    return () => clearInterval(interval);
  }, [isRotating]);

  const projected3D = useMemo(() => {
    const centerX = 200;
    const centerY = 150;
    const scale = 50;
    
    return moleculeData.atoms.map(atom => {
      // 简单的3D到2D投影
      const rotatedX = atom.x * Math.cos(rotation.y * Math.PI / 180) - atom.z * Math.sin(rotation.y * Math.PI / 180);
      const rotatedY = atom.y * Math.cos(rotation.x * Math.PI / 180) - atom.z * Math.sin(rotation.x * Math.PI / 180);
      const rotatedZ = atom.x * Math.sin(rotation.y * Math.PI / 180) + atom.z * Math.cos(rotation.y * Math.PI / 180);
      
      return {
        ...atom,
        x2d: centerX + rotatedX * scale,
        y2d: centerY + rotatedY * scale,
        z2d: rotatedZ,
        radius: 8 + rotatedZ * 2 // 深度影响大小
      };
    });
  }, [moleculeData.atoms, rotation]);

  return (
    <div className={`relative ${className}`}>
      <svg
        ref={svgRef}
        viewBox="0 0 400 300"
        className="w-full h-full cursor-pointer"
        onClick={() => setIsRotating(!isRotating)}
      >
        <defs>
          <radialGradient id="carbonGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#666" />
            <stop offset="100%" stopColor="#333" />
          </radialGradient>
          <radialGradient id="nitrogenGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#4a90e2" />
            <stop offset="100%" stopColor="#2171b5" />
          </radialGradient>
          <radialGradient id="oxygenGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#e74c3c" />
            <stop offset="100%" stopColor="#c0392b" />
          </radialGradient>
        </defs>
        
        {/* 绘制化学键 */}
        {moleculeData.bonds.map((bond, index) => {
          const fromAtom = projected3D.find(atom => atom.id === bond.from);
          const toAtom = projected3D.find(atom => atom.id === bond.to);
          
          if (!fromAtom || !toAtom) return null;
          
          return (
            <g key={index}>
              <line
                x1={fromAtom.x2d}
                y1={fromAtom.y2d}
                x2={toAtom.x2d}
                y2={toAtom.y2d}
                stroke="#888"
                strokeWidth={bond.type === 'single' ? 2 : bond.type === 'double' ? 4 : 6}
                opacity={0.8}
                className="animate-pulse"
              />
              {bond.type === 'double' && (
                <line
                  x1={fromAtom.x2d + 2}
                  y1={fromAtom.y2d + 2}
                  x2={toAtom.x2d + 2}
                  y2={toAtom.y2d + 2}
                  stroke="#888"
                  strokeWidth={2}
                  opacity={0.6}
                />
              )}
            </g>
          );
        })}
        
        {/* 绘制原子 */}
        {projected3D
          .sort((a, b) => b.z2d - a.z2d) // 按Z轴排序，远的先画
          .map((atom, index) => (
            <g key={atom.id}>
              <circle
                cx={atom.x2d}
                cy={atom.y2d}
                r={atom.radius}
                fill={`url(#${atom.element.toLowerCase()}Gradient)`}
                stroke="#fff"
                strokeWidth={1}
                opacity={0.9}
                className="hover:stroke-yellow-400 transition-all duration-300"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  values="1;1.1;1"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${index * 0.2}s`}
                />
              </circle>
              <text
                x={atom.x2d}
                y={atom.y2d + 4}
                textAnchor="middle"
                fill="white"
                fontSize="10"
                fontWeight="bold"
                className="pointer-events-none"
              >
                {atom.element}
              </text>
            </g>
          ))}
      </svg>
      
      <div className="absolute bottom-2 right-2 text-xs text-gray-400">
        {isRotating ? '点击暂停旋转' : '点击开始旋转'}
      </div>
    </div>
  );
};

// 实时数据流图表
export const RealTimeDataChart: React.FC<{
  data: Array<{ time: string; value: number; prediction?: number }>;
  title: string;
  color?: string;
  showPrediction?: boolean;
}> = ({ data, title, color = '#3b82f6', showPrediction = false }) => {
  const [animatedData, setAnimatedData] = useState<typeof data>([]);

  useEffect(() => {
    // 动画显示数据点
    data.forEach((point, index) => {
      setTimeout(() => {
        setAnimatedData(prev => [...prev.slice(-19), point]);
      }, index * 100);
    });
  }, [data]);

  return (
    <div className="relative">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        {title}
      </h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={animatedData}>
            <defs>
              <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={color} stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="time" 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              axisLine={{ stroke: '#4b5563' }}
            />
            <YAxis 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              axisLine={{ stroke: '#4b5563' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(17, 24, 39, 0.95)', 
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={2}
              fill={`url(#gradient-${title})`}
              dot={{ fill: color, strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: color, strokeWidth: 2, fill: '#fff' }}
            />
            {showPrediction && (
              <Line 
                type="monotone" 
                dataKey="prediction" 
                stroke="#ff6b6b" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// 交互式雷达图
export const InteractiveRadarChart: React.FC<{
  data: Array<{ subject: string; A: number; B: number; fullMark: number }>;
  title: string;
}> = ({ data, title }) => {
  const [selectedDataset, setSelectedDataset] = useState<'A' | 'B' | 'both'>('both');
  const [hoveredSubject, setHoveredSubject] = useState<string | null>(null);

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedDataset('A')}
            className={`px-3 py-1 rounded text-xs transition-colors ${
              selectedDataset === 'A' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            数据集 A
          </button>
          <button
            onClick={() => setSelectedDataset('B')}
            className={`px-3 py-1 rounded text-xs transition-colors ${
              selectedDataset === 'B' ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            数据集 B
          </button>
          <button
            onClick={() => setSelectedDataset('both')}
            className={`px-3 py-1 rounded text-xs transition-colors ${
              selectedDataset === 'both' ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            对比
          </button>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]}
              tick={{ fill: '#9ca3af', fontSize: 10 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(17, 24, 39, 0.95)', 
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            {(selectedDataset === 'A' || selectedDataset === 'both') && (
              <Radar
                name="数据集 A"
                dataKey="A"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.3}
                strokeWidth={2}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              />
            )}
            {(selectedDataset === 'B' || selectedDataset === 'both') && (
              <Radar
                name="数据集 B"
                dataKey="B"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.3}
                strokeWidth={2}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              />
            )}
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// 3D散点图（模拟）
export const Scatter3DChart: React.FC<{
  data: Array<{ 
    x: number; 
    y: number; 
    z: number; 
    name: string; 
    color: string;
    efficiency: number;
  }>;
  title: string;
}> = ({ data, title }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });

  const projected2D = useMemo(() => {
    const centerX = 200;
    const centerY = 150;
    const scale = 100;
    
    return data.map(point => {
      // 3D旋转投影
      const cosY = Math.cos(rotation.y * Math.PI / 180);
      const sinY = Math.sin(rotation.y * Math.PI / 180);
      const cosX = Math.cos(rotation.x * Math.PI / 180);
      const sinX = Math.sin(rotation.x * Math.PI / 180);
      
      const x1 = point.x * cosY - point.z * sinY;
      const z1 = point.x * sinY + point.z * cosY;
      const y1 = point.y * cosX - z1 * sinX;
      const z2 = point.y * sinX + z1 * cosX;
      
      return {
        ...point,
        x2d: centerX + x1 * scale,
        y2d: centerY + y1 * scale,
        z2d: z2,
        radius: 4 + (z2 + 1) * 3 // 深度影响大小
      };
    });
  }, [data, rotation]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastMouse.x;
    const deltaY = e.clientY - lastMouse.y;
    
    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      
      <svg
        viewBox="0 0 400 300"
        className="w-full h-64 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* 坐标轴 */}
        <g opacity="0.3">
          <line x1="50" y1="250" x2="350" y2="250" stroke="#9ca3af" strokeWidth="1" />
          <line x1="50" y1="250" x2="50" y2="50" stroke="#9ca3af" strokeWidth="1" />
          <text x="375" y="255" fill="#9ca3af" fontSize="12">X</text>
          <text x="30" y="40" fill="#9ca3af" fontSize="12">Y</text>
        </g>
        
        {/* 数据点 */}
        {projected2D
          .sort((a, b) => b.z2d - a.z2d)
          .map((point, index) => (
            <g key={index}>
              <circle
                cx={point.x2d}
                cy={point.y2d}
                r={point.radius}
                fill={point.color}
                opacity={0.8}
                stroke="#fff"
                strokeWidth={1}
                className="hover:stroke-yellow-400 transition-all duration-300"
              >
                <title>{`${point.name}: ${point.efficiency}%`}</title>
              </circle>
              
              {/* 数据标签 */}
              <text
                x={point.x2d + point.radius + 5}
                y={point.y2d + 3}
                fill="#9ca3af"
                fontSize="8"
                className="pointer-events-none"
              >
                {point.name}
              </text>
            </g>
          ))}
      </svg>
      
      <div className="text-xs text-gray-400 mt-2">
        拖拽旋转视角 • 效率对比分析
      </div>
    </div>
  );
};

// 热力图组件
export const HeatmapChart: React.FC<{
  data: Array<Array<{ value: number; label?: string }>>;
  xLabels: string[];
  yLabels: string[];
  title: string;
}> = ({ data, xLabels, yLabels, title }) => {
  const [hoveredCell, setHoveredCell] = useState<{ x: number; y: number } | null>(null);
  
  const maxValue = useMemo(() => {
    return Math.max(...data.flat().map(cell => cell.value));
  }, [data]);

  const getColor = (value: number) => {
    const intensity = value / maxValue;
    const hue = 240 - intensity * 60; // 从蓝色到红色
    return `hsl(${hue}, 70%, ${50 + intensity * 30}%)`;
  };

  return (
    <div className="relative">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      
      <div className="relative overflow-auto">
        <svg viewBox="0 0 600 400" className="w-full h-80">
          {/* Y轴标签 */}
          {yLabels.map((label, y) => (
            <text
              key={y}
              x="40"
              y={80 + y * 40 + 20}
              fill="#9ca3af"
              fontSize="12"
              textAnchor="end"
            >
              {label}
            </text>
          ))}
          
          {/* X轴标签 */}
          {xLabels.map((label, x) => (
            <text
              key={x}
              x={60 + x * 40 + 20}
              y="370"
              fill="#9ca3af"
              fontSize="12"
              textAnchor="middle"
              transform={`rotate(-45, ${60 + x * 40 + 20}, 370)`}
            >
              {label}
            </text>
          ))}
          
          {/* 热力图单元格 */}
          {data.map((row, y) =>
            row.map((cell, x) => (
              <rect
                key={`${x}-${y}`}
                x={60 + x * 40}
                y={60 + y * 40}
                width="38"
                height="38"
                fill={getColor(cell.value)}
                stroke="#fff"
                strokeWidth="1"
                opacity={hoveredCell?.x === x && hoveredCell?.y === y ? 1 : 0.8}
                className="hover:stroke-yellow-400 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredCell({ x, y })}
                onMouseLeave={() => setHoveredCell(null)}
              >
                <title>{`${xLabels[x]} - ${yLabels[y]}: ${cell.value.toFixed(2)}`}</title>
              </rect>
            ))
          )}
          
          {/* 数值标签 */}
          {data.map((row, y) =>
            row.map((cell, x) => (
              <text
                key={`text-${x}-${y}`}
                x={60 + x * 40 + 19}
                y={60 + y * 40 + 24}
                fill="#fff"
                fontSize="10"
                textAnchor="middle"
                className="pointer-events-none"
              >
                {cell.value.toFixed(1)}
              </text>
            ))
          )}
        </svg>
        
        {/* 图例 */}
        <div className="flex items-center justify-center mt-4 gap-2">
          <span className="text-sm text-gray-400">低</span>
          <div className="flex">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="w-4 h-4"
                style={{ backgroundColor: getColor((i / 9) * maxValue) }}
              />
            ))}
          </div>
          <span className="text-sm text-gray-400">高</span>
        </div>
      </div>
    </div>
  );
};

// 组合的增强数据可视化组件
export const EnhancedDataVisualization: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-xl pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

