import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Play, Pause, RotateCcw, Settings, Eye, Layers, Atom, Download, Info, Maximize, BarChart3, Microscope, Zap, Shuffle, Grid3X3, Camera, SkipBack, SkipForward, Target, Database } from 'lucide-react';
import { MolecularStructure, BondData } from '../data/molecularStructures';
import {
  VISUALIZATION_LIBRARY_SUMMARY,
  VISUALIZATION_STRUCTURE_LIBRARY,
  getVisualizationCategories,
  getVisualizationStructuresByCategory,
} from '../data/visualizationStructureLibrary';
import Plot from 'react-plotly.js';
import { EXPERIMENTAL_BANDGAP_RECORDS, SCREENED_CANDIDATE_RECORDS } from '../data/researchDatasets';

const normalizeFormulaText = (value: string) =>
  value
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (char) => '0123456789'['₀₁₂₃₄₅₆₇₈₉'.indexOf(char)] || char)
    .replace(/\s+/g, '')
    .toLowerCase();

export const VisualizationPage: React.FC = () => {
  const [structures, setStructures] = useState<MolecularStructure[]>(VISUALIZATION_STRUCTURE_LIBRARY);
  const [selectedStructure, setSelectedStructure] = useState<MolecularStructure | null>(VISUALIZATION_STRUCTURE_LIBRARY[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visualizationType, setVisualizationType] = useState<'structure' | 'spectrum' | 'bandStructure' | 'comparison' | 'molecular'>('structure');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playbackSpeed] = useState(3000);
  const [viewerSettings, setViewerSettings] = useState({
    showBonds: true,
    showUnitCell: true,
    autoRotate: true,
    renderStyle: 'ball-stick' as 'ball-stick' | 'space-fill' | 'wireframe' | 'surface',
    colorScheme: 'element' as 'element' | 'charge' | 'temperature',
    lighting: 'directional' as 'ambient' | 'directional' | 'spot',
    animation: 'rotation' as 'rotation' | 'vibration' | 'breathing' | 'none',
    showLabels: true,
    transparency: 0.9
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const rotationRef = useRef<number>(0);

  const normalizedSelectedFormula = useMemo(
    () => normalizeFormulaText(selectedStructure?.formula || ''),
    [selectedStructure]
  );

  const matchedExperimentalRecords = useMemo(
    () =>
      EXPERIMENTAL_BANDGAP_RECORDS.filter(
        (record) =>
          normalizeFormulaText(record.formula) === normalizedSelectedFormula ||
          normalizeFormulaText(record.formulaStandardized) === normalizedSelectedFormula
      ),
    [normalizedSelectedFormula]
  );

  const matchedCandidateRecords = useMemo(
    () =>
      SCREENED_CANDIDATE_RECORDS.filter(
        (record) => normalizeFormulaText(record.formula) === normalizedSelectedFormula
      ),
    [normalizedSelectedFormula]
  );

  const selectedResearchSnapshot = useMemo(() => {
    const experimentalBandgaps = matchedExperimentalRecords
      .map((record) => record.experimentalBandgapEV)
      .filter((value): value is number => value !== null);
    const candidateBandgaps = matchedCandidateRecords
      .map((record) => record.predictedBandgapEV)
      .filter((value): value is number => value !== null);
    const candidateStds = matchedCandidateRecords
      .map((record) => record.predictionStdEV)
      .filter((value): value is number => value !== null);

    return {
      experimentalCount: matchedExperimentalRecords.length,
      candidateCount: matchedCandidateRecords.length,
      rescuedCount: matchedCandidateRecords.filter((record) => record.isFalseMetalRescued).length,
      avgExperimentalBandgap:
        experimentalBandgaps.length > 0
          ? experimentalBandgaps.reduce((sum, value) => sum + value, 0) / experimentalBandgaps.length
          : null,
      avgPredictedBandgap:
        candidateBandgaps.length > 0
          ? candidateBandgaps.reduce((sum, value) => sum + value, 0) / candidateBandgaps.length
          : null,
      avgPredictionStd:
        candidateStds.length > 0
          ? candidateStds.reduce((sum, value) => sum + value, 0) / candidateStds.length
          : null,
      topReference: matchedExperimentalRecords[0] || null,
    };
  }, [matchedCandidateRecords, matchedExperimentalRecords]);

  const formatMetric = (value: number | null | undefined, suffix = '', digits = 2) =>
    value === null || value === undefined ? 'N/A' : `${value.toFixed(digits)}${suffix}`;

  const formatIntegerMetric = (value: number | null | undefined, suffix = '') =>
    value === null || value === undefined ? 'N/A' : `${value}${suffix}`;

  const safeMetric = (value: number | null | undefined) => (value === null || value === undefined ? 0 : value);

  // Filter structures by category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setStructures(VISUALIZATION_STRUCTURE_LIBRARY);
    } else {
      const filtered = getVisualizationStructuresByCategory(selectedCategory);
      setStructures(filtered.length > 0 ? filtered : VISUALIZATION_STRUCTURE_LIBRARY);
    }
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Automatic playback
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && structures.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % structures.length);
      }, playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, structures.length, playbackSpeed]);

  // Update selected structure when index changes
  useEffect(() => {
    if (structures.length > 0 && structures[currentIndex]) {
      setSelectedStructure(structures[currentIndex]);
    }
  }, [currentIndex, structures]);

  // Enhanced 3D rendering with Canvas
  useEffect(() => {
    if (!canvasRef.current || !selectedStructure) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const renderFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set background gradient
      const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height)/2);
      gradient.addColorStop(0, selectedStructure.visualization.backgroundColor);
      gradient.addColorStop(1, '#000011');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render molecular structure
      renderMolecularStructure(ctx, selectedStructure);

      if (viewerSettings.autoRotate && viewerSettings.animation === 'rotation') {
        rotationRef.current += 0.01;
        animationFrameRef.current = requestAnimationFrame(renderFrame);
      }
    };

    renderFrame();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [selectedStructure, viewerSettings]);

  const renderMolecularStructure = (ctx: CanvasRenderingContext2D, structure: MolecularStructure) => {
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const scale = 15;
    const rotation = rotationRef.current;

    // Draw unit cell if enabled
    if (viewerSettings.showUnitCell) {
      drawUnitCell(ctx, centerX, centerY, scale, rotation, structure.unitCellDimensions);
    }

    // Sort atoms by z-coordinate for proper depth rendering
    const rotatedAtoms = structure.atoms.map(atom => {
      const rotatedPos = rotatePoint3D(atom.x - structure.unitCellDimensions.x/2, 
                                       atom.y - structure.unitCellDimensions.y/2, 
                                       atom.z - structure.unitCellDimensions.z/2, 
                                       rotation, rotation * 0.7);
      return { ...atom, ...rotatedPos, screenX: centerX + rotatedPos.x * scale, screenY: centerY + rotatedPos.y * scale };
    }).sort((a, b) => b.z - a.z);

    // Draw bonds first (so they appear behind atoms)
    if (viewerSettings.showBonds) {
      structure.bonds.forEach(bond => {
        const atom1 = rotatedAtoms.find(a => a.id === bond.atom1);
        const atom2 = rotatedAtoms.find(a => a.id === bond.atom2);
        if (atom1 && atom2) {
          drawBond(ctx, atom1, atom2, bond);
        }
      });
    }

    // Draw atoms
    rotatedAtoms.forEach(atom => {
      drawAtom(ctx, atom, viewerSettings.renderStyle, viewerSettings.colorScheme);
      
      if (viewerSettings.showLabels) {
        drawAtomLabel(ctx, atom);
      }
    });

    // Add vibration effects if enabled
    if (viewerSettings.animation === 'vibration') {
      addVibrationEffect(ctx, structure, centerX, centerY, scale, rotation);
    }
  };

  const rotatePoint3D = (x: number, y: number, z: number, rotX: number, rotY: number) => {
    // Rotate around Y axis
    let newX = x * Math.cos(rotY) - z * Math.sin(rotY);
    let newZ = x * Math.sin(rotY) + z * Math.cos(rotY);
    
    // Rotate around X axis
    let newY = y * Math.cos(rotX) - newZ * Math.sin(rotX);
    newZ = y * Math.sin(rotX) + newZ * Math.cos(rotX);
    
    return { x: newX, y: newY, z: newZ };
  };

  const drawUnitCell = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number, scale: number, rotation: number, dimensions: { x: number, y: number, z: number }) => {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);

    const corners = [
      [-dimensions.x/2, -dimensions.y/2, -dimensions.z/2],
      [dimensions.x/2, -dimensions.y/2, -dimensions.z/2],
      [dimensions.x/2, dimensions.y/2, -dimensions.z/2],
      [-dimensions.x/2, dimensions.y/2, -dimensions.z/2],
      [-dimensions.x/2, -dimensions.y/2, dimensions.z/2],
      [dimensions.x/2, -dimensions.y/2, dimensions.z/2],
      [dimensions.x/2, dimensions.y/2, dimensions.z/2],
      [-dimensions.x/2, dimensions.y/2, dimensions.z/2]
    ].map(([x, y, z]) => {
      const rotated = rotatePoint3D(x, y, z, rotation, rotation * 0.7);
      return { x: centerX + rotated.x * scale, y: centerY + rotated.y * scale };
    });

    // Draw cube edges
    const edges = [
      [0,1], [1,2], [2,3], [3,0], // bottom face
      [4,5], [5,6], [6,7], [7,4], // top face
      [0,4], [1,5], [2,6], [3,7]  // vertical edges
    ];

    edges.forEach(([i, j]) => {
      ctx.beginPath();
      ctx.moveTo(corners[i].x, corners[i].y);
      ctx.lineTo(corners[j].x, corners[j].y);
      ctx.stroke();
    });

    ctx.setLineDash([]);
  };

  const drawAtom = (ctx: CanvasRenderingContext2D, atom: any, renderStyle: string, _colorScheme: string) => {
    const radius = atom.radius * (renderStyle === 'space-fill' ? 3 : renderStyle === 'ball-stick' ? 2 : 1);
    
    // Create gradient for 3D effect
    const gradient = ctx.createRadialGradient(
      atom.screenX - radius/3, atom.screenY - radius/3, 0,
      atom.screenX, atom.screenY, radius
    );
    
    const baseColor = atom.color;
    gradient.addColorStop(0, lightenColor(baseColor, 40));
    gradient.addColorStop(0.7, baseColor);
    gradient.addColorStop(1, darkenColor(baseColor, 30));

    ctx.fillStyle = gradient;
    ctx.strokeStyle = darkenColor(baseColor, 50);
    ctx.lineWidth = 1;

    if (renderStyle === 'space-fill' || renderStyle === 'ball-stick') {
      ctx.beginPath();
      ctx.arc(atom.screenX, atom.screenY, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      
      // Add highlight
      ctx.fillStyle = `rgba(255, 255, 255, ${0.3 * viewerSettings.transparency})`;
      ctx.beginPath();
      ctx.arc(atom.screenX - radius/4, atom.screenY - radius/4, radius/4, 0, 2 * Math.PI);
      ctx.fill();
    } else if (renderStyle === 'wireframe') {
      ctx.beginPath();
      ctx.arc(atom.screenX, atom.screenY, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  };

  const drawBond = (ctx: CanvasRenderingContext2D, atom1: any, atom2: any, bond: BondData) => {
    const bondColors = {
      ionic: '#4ade80',
      metallic: '#f59e0b',
      single: '#6b7280',
      double: '#ef4444',
      triple: '#8b5cf6'
    };

    ctx.strokeStyle = bondColors[bond.type] || '#6b7280';
    ctx.lineWidth = bond.type === 'double' ? 4 : bond.type === 'triple' ? 6 : 2;
    ctx.lineCap = 'round';

    // Add vibration effect if enabled
    let offsetX = 0, offsetY = 0;
    if (viewerSettings.animation === 'vibration') {
      const time = Date.now() * 0.001;
      offsetX = Math.sin(time * (bond.vibrationFreq || 150) * 0.01) * 0.5;
      offsetY = Math.cos(time * (bond.vibrationFreq || 150) * 0.01) * 0.5;
    }

    ctx.beginPath();
    ctx.moveTo(atom1.screenX + offsetX, atom1.screenY + offsetY);
    ctx.lineTo(atom2.screenX + offsetX, atom2.screenY + offsetY);
    ctx.stroke();

    // Draw multiple lines for double/triple bonds
    if (bond.type === 'double' || bond.type === 'triple') {
      const dx = atom2.screenX - atom1.screenX;
      const dy = atom2.screenY - atom1.screenY;
      const length = Math.sqrt(dx * dx + dy * dy);
      const offsetDistance = 3;
      
      const perpX = -dy / length * offsetDistance;
      const perpY = dx / length * offsetDistance;

      ctx.beginPath();
      ctx.moveTo(atom1.screenX + perpX, atom1.screenY + perpY);
      ctx.lineTo(atom2.screenX + perpX, atom2.screenY + perpY);
      ctx.stroke();

      if (bond.type === 'triple') {
        ctx.beginPath();
        ctx.moveTo(atom1.screenX - perpX, atom1.screenY - perpY);
        ctx.lineTo(atom2.screenX - perpX, atom2.screenY - perpY);
        ctx.stroke();
      }
    }
  };

  const drawAtomLabel = (ctx: CanvasRenderingContext2D, atom: any) => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const label = atom.element;
    const labelY = atom.screenY + atom.radius * 2.5 + 15;
    
    ctx.strokeText(label, atom.screenX, labelY);
    ctx.fillText(label, atom.screenX, labelY);
  };

  const addVibrationEffect = (ctx: CanvasRenderingContext2D, _structure: MolecularStructure, centerX: number, centerY: number, _scale: number, _rotation: number) => {
    // Add subtle particle effects for vibration
    const time = Date.now() * 0.001;
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const distance = 50 + Math.sin(time * 2 + i) * 10;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      
      ctx.fillStyle = `rgba(14, 165, 233, ${0.1 + Math.sin(time * 3 + i) * 0.1})`;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  const lightenColor = (color: string, amount: number): string => {
    const hex = color.replace('#', '');
    const num = parseInt(hex, 16);
    const r = Math.min(255, (num >> 16) + amount);
    const g = Math.min(255, ((num >> 8) & 0x00FF) + amount);
    const b = Math.min(255, (num & 0x0000FF) + amount);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const darkenColor = (color: string, amount: number): string => {
    const hex = color.replace('#', '');
    const num = parseInt(hex, 16);
    const r = Math.max(0, (num >> 16) - amount);
    const g = Math.max(0, ((num >> 8) & 0x00FF) - amount);
    const b = Math.max(0, (num & 0x0000FF) - amount);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Generate spectral data based on structure properties
  const generateSpectralData = (structure: MolecularStructure | null) => {
    if (!structure) return [];
    
    const peak = structure.properties.emissionWavelength;
    if (peak === null || peak === undefined) return [];
    const fwhm = 30 + Math.random() * 20; // Full width at half maximum
    
    const data = [];
    for (let wavelength = peak - fwhm * 2; wavelength <= peak + fwhm * 2; wavelength += 2) {
      const intensity = Math.exp(-Math.pow((wavelength - peak) / (fwhm / 2.355), 2)); // Gaussian profile
      data.push({ wavelength, intensity: intensity * 100 });
    }
    return data;
  };

  // Generate absorption spectrum
  const generateAbsorptionData = (structure: MolecularStructure | null) => {
    if (!structure) return [];
    
    const bandgap = structure.properties.bandgap;
    if (bandgap === null || bandgap <= 0) return [];
    const edgeWavelength = 1240 / bandgap; // nm
    
    const data = [];
    for (let wavelength = 300; wavelength <= 900; wavelength += 5) {
      let absorption = 0;
      if (wavelength < edgeWavelength) {
        // Urbach tail and band edge absorption
        absorption = Math.min(100, 
          90 * (1 - Math.exp(-(edgeWavelength - wavelength) / 50)) + 
          Math.random() * 5
        );
      } else {
        // Sub-bandgap absorption
        absorption = Math.exp(-(wavelength - edgeWavelength) / 100) * 20 + Math.random() * 2;
      }
      data.push({ wavelength, absorption: Math.max(0, absorption) });
    }
    return data;
  };

  // Generate band structure data
  const generateBandStructureData = (structure: MolecularStructure | null) => {
    if (!structure) return [];
    
    const bandgap = structure.properties.bandgap;
    if (bandgap === null || bandgap <= 0) return [];
    const data = [];
    
    // Simulate realistic perovskite band structure with proper dispersion
    for (let k = -2; k <= 2; k += 0.05) {
      // Valence band with parabolic dispersion
      const valence = -bandgap/2 - 0.5 * k * k - 0.1 * k * k * k * k;
      
      // Conduction band with slight anisotropy
      const conduction = bandgap/2 + 0.3 * k * k + 0.05 * Math.sin(k * 2);
      
      data.push({ 
        k, 
        valence, 
        conduction,
        gap: conduction - valence,
        dos: Math.exp(-k * k / 0.5) // Density of states
      });
    }
    
    return data;
  };

  // Generate comparison data
  const generateComparisonData = () => {
    return structures
      .filter(
        (structure): structure is MolecularStructure & {
          properties: MolecularStructure['properties'] & {
            bandgap: number;
            plqy: number;
            stability: number;
            efficiency: number;
            emissionWavelength: number;
          };
        } =>
          structure.properties.bandgap !== null &&
          structure.properties.plqy !== null &&
          structure.properties.stability !== null &&
          structure.properties.efficiency !== null &&
          structure.properties.emissionWavelength !== null
      )
      .slice(0, 8)
      .map((structure) => ({
      name: structure.name.length > 8 ? structure.name.substring(0, 8) + '...' : structure.name,
      bandgap: structure.properties.bandgap,
      plqy: structure.properties.plqy,
      stability: structure.properties.stability,
      efficiency: structure.properties.efficiency,
      emissionWavelength: structure.properties.emissionWavelength,
      category: structure.category
      }));
  };

  // Navigation handlers
  const handlePlayback = () => setIsPlaying(!isPlaying);
  const handlePrevious = () => setCurrentIndex(prev => prev === 0 ? structures.length - 1 : prev - 1);
  const handleNext = () => setCurrentIndex(prev => (prev + 1) % structures.length);
  const handleShuffle = () => setCurrentIndex(Math.floor(Math.random() * structures.length));

  // Export functions
  const exportStructureData = () => {
    if (!selectedStructure) return;
    
    const dataToExport = {
      structure: selectedStructure,
      timestamp: new Date().toISOString(),
      viewerSettings,
      spectralData: generateSpectralData(selectedStructure)
    };
    
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedStructure.id}_structure_data.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportImage = async () => {
    if (!canvasRef.current) return;
    
    const link = document.createElement('a');
    link.download = `${selectedStructure?.id || 'structure'}_visualization.png`;
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  const spectralData = generateSpectralData(selectedStructure);
  const absorptionData = generateAbsorptionData(selectedStructure);
  const bandStructureData = generateBandStructureData(selectedStructure);
  const comparisonData = generateComparisonData();

  return (
    <div className="container-fluid space-y-8 py-8">
      <div className="page-hero animate-fade-in-up">
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="page-kicker mb-2">Visualization Workspace</div>
                <h1 className="page-title">3D分子结构可视化实验室</h1>
                <p className="page-description mt-2">结构模板展示、研究数据联动与交互分析</p>
              </div>
            </div>

            <div className="hero-chip-row">
              <span className="hero-chip">{VISUALIZATION_LIBRARY_SUMMARY.totalStructures} 模板条目</span>
              <span className="hero-chip">{VISUALIZATION_LIBRARY_SUMMARY.experimentalLinkedCount + VISUALIZATION_LIBRARY_SUMMARY.screenedLinkedCount + VISUALIZATION_LIBRARY_SUMMARY.mpLinkedCount} 研究联动模板</span>
              <span className="hero-chip">{VISUALIZATION_LIBRARY_SUMMARY.templateCount} 精选模板</span>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Control Panel */}
      <div className="toolbar-panel animate-fade-in-up animate-delay-100">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Category Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-200">材料分类</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
            >
              <option value="all" className="bg-gray-800">全部分类</option>
              {getVisualizationCategories().map(category => (
                <option key={category} value={category} className="bg-gray-800">{category}</option>
              ))}
            </select>
          </div>

          {/* Visualization Mode */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-200">可视化模式</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { key: 'structure', icon: Atom, label: '3D结构' },
                { key: 'spectrum', icon: BarChart3, label: '光谱' },
                { key: 'bandStructure', icon: Layers, label: '能带' },
                { key: 'comparison', icon: Grid3X3, label: '对比' }
              ].map(mode => (
                <button
                  key={mode.key}
                  onClick={() => setVisualizationType(mode.key as any)}
                  className={`p-3 rounded-lg border transition-all flex items-center justify-center gap-2 ${
                    visualizationType === mode.key
                      ? 'bg-blue-500/30 border-blue-400 text-blue-200' 
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <mode.icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{mode.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Playback Controls */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-200">播放控制</label>
            <div className="flex gap-2">
              <button onClick={handlePrevious} className="flex-1 btn-control" title="上一个">
                <SkipBack className="w-4 h-4" />
              </button>
              <button onClick={handlePlayback} className="flex-1 btn-control bg-blue-600 hover:bg-blue-700" title={isPlaying ? "暂停" : "播放"}>
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button onClick={handleNext} className="flex-1 btn-control" title="下一个">
                <SkipForward className="w-4 h-4" />
              </button>
              <button onClick={handleShuffle} className="flex-1 btn-control" title="随机">
                <Shuffle className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center">
              <span className="text-xs text-gray-400">{currentIndex + 1} / {structures.length}</span>
            </div>
          </div>

          {/* Advanced Settings */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-200 flex items-center gap-2">
              <Settings className="w-4 h-4" />
              高级设置
            </label>
            <div className="space-y-2">
              <select
                value={viewerSettings.renderStyle}
                onChange={(e) => setViewerSettings(prev => ({ ...prev, renderStyle: e.target.value as any }))}
                className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm"
              >
                <option value="ball-stick" className="bg-gray-800">球棍模型</option>
                <option value="space-fill" className="bg-gray-800">空间填充</option>
                <option value="wireframe" className="bg-gray-800">线框模型</option>
              </select>
              <select
                value={viewerSettings.animation}
                onChange={(e) => setViewerSettings(prev => ({ ...prev, animation: e.target.value as any }))}
                className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm"
              >
                <option value="rotation" className="bg-gray-800">旋转</option>
                <option value="vibration" className="bg-gray-800">振动</option>
                <option value="breathing" className="bg-gray-800">呼吸</option>
                <option value="none" className="bg-gray-800">静止</option>
              </select>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {structures.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span className="font-medium">{selectedStructure?.name || 'Loading...'}</span>
              <span>{selectedStructure?.formula}</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500 animate-data-flow"
                style={{ width: `${((currentIndex + 1) / structures.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="section-panel animate-fade-in-up animate-delay-150">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 data-card rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-400" />
              说明
            </h3>
            <div className="space-y-2 text-sm text-gray-300 leading-relaxed">
              <div>当前 3D 页面由精选结构模板和真实公式联动模板共同组成。</div>
              <div>研究统计仍来自已接入的真实实验、筛选和 MP 数据模块。</div>
            </div>
          </div>

          <div className="data-card rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" />
              当前联动
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">实验记录</span><span className="text-white">{selectedResearchSnapshot.experimentalCount}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">候选记录</span><span className="text-white">{selectedResearchSnapshot.candidateCount}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">拯救候选</span><span className="text-emerald-300">{selectedResearchSnapshot.rescuedCount}</span></div>
            </div>
          </div>

          <div className="data-card rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-400" />
              摘要
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">实验均值</span><span className="text-white">{selectedResearchSnapshot.avgExperimentalBandgap !== null ? `${selectedResearchSnapshot.avgExperimentalBandgap.toFixed(2)} eV` : 'N/A'}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">候选均值</span><span className="text-white">{selectedResearchSnapshot.avgPredictedBandgap !== null ? `${selectedResearchSnapshot.avgPredictedBandgap.toFixed(2)} eV` : 'N/A'}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">平均标准差</span><span className="text-white">{selectedResearchSnapshot.avgPredictionStd !== null ? selectedResearchSnapshot.avgPredictionStd.toFixed(3) : 'N/A'}</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Visualization Area */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Structure Library */}
        <div className="glass-card rounded-2xl p-6 animate-fade-in-up animate-delay-200">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-400" />
            结构库
          </h3>
          
          <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-thin">
            {structures.map((structure, index) => (
              <div
                key={structure.id}
                onClick={() => {
                  setSelectedStructure(structure);
                  setCurrentIndex(index);
                }}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 group ${
                  selectedStructure?.id === structure.id
                    ? 'data-card border-blue-400 bg-blue-500/10' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-3 h-3 rounded-full mt-2 transition-all ${
                    selectedStructure?.id === structure.id ? 'bg-blue-400 animate-pulse' : 'bg-gray-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white group-hover:text-blue-200 transition-colors">
                      {structure.name}
                    </h4>
                    <p className="text-sm text-gray-400 mb-2">{structure.formula}</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">{structure.crystalSystem}</span>
                      <span className="text-blue-400 font-medium">{formatMetric(structure.properties.bandgap, ' eV')}</span>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>PLQY</span>
                        <span>{formatMetric(structure.properties.plqy, '%', 1)}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-1.5 rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(0, Math.min(100, safeMetric(structure.properties.plqy)))}%` }}
                        />
                      </div>
                    </div>
                    {structure.source && (
                      <div className="mt-2 text-[11px] text-gray-500">{structure.source.label}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Settings */}
          <div className="mt-6 pt-4 border-t border-white/20">
            <h4 className="text-sm font-semibold text-white mb-3">显示选项</h4>
            <div className="space-y-2">
              {[
                { key: 'showBonds', label: '显示化学键', icon: Atom },
                { key: 'showUnitCell', label: '显示晶胞', icon: Grid3X3 },
                { key: 'showLabels', label: '显示标签', icon: Info },
                { key: 'autoRotate', label: '自动旋转', icon: RotateCcw }
              ].map(option => (
                <label key={option.key} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    checked={viewerSettings[option.key as keyof typeof viewerSettings] as boolean}
                    onChange={(e) => setViewerSettings(prev => ({ ...prev, [option.key]: e.target.checked }))}
                    className="focus-ring"
                  />
                  <option.icon className="w-4 h-4" />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Main Visualization Panel */}
        <div className="xl:col-span-3 section-panel animate-fade-in-up animate-delay-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              {visualizationType === 'structure' && <><Atom className="w-6 h-6 text-blue-400" />3D 分子结构</>}
              {visualizationType === 'spectrum' && <><BarChart3 className="w-6 h-6 text-green-400" />光谱分析</>}
              {visualizationType === 'bandStructure' && <><Layers className="w-6 h-6 text-purple-400" />能带结构</>}
              {visualizationType === 'comparison' && <><Grid3X3 className="w-6 h-6 text-orange-400" />性能对比</>}
            </h3>
            
            <div className="flex gap-3">
              <button onClick={exportImage} className="btn-control" title="导出图像">
                <Camera className="w-4 h-4" />
              </button>
              <button onClick={exportStructureData} className="btn-control" title="导出数据">
                <Download className="w-4 h-4" />
              </button>
              <button onClick={() => rotationRef.current = 0} className="btn-control" title="重置视角">
                <RotateCcw className="w-4 h-4" />
              </button>
              <button className="btn-control" title="全屏">
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Visualization Content */}
          <div className="bg-black/20 rounded-xl p-4 min-h-[500px] border border-white/10">
            {visualizationType === 'structure' && (
              <div className="flex flex-col items-center">
                <canvas
                  ref={canvasRef}
                  width={800}
                  height={500}
                  className="rounded-lg shadow-lg mb-4"
                />
                
                {/* Structure Information */}
                {selectedStructure && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {[
                      { label: '晶系', value: selectedStructure.crystalSystem, color: 'blue' },
                      { label: '带隙', value: formatMetric(selectedStructure.properties.bandgap, ' eV'), color: 'green' },
                      { label: 'PLQY', value: formatMetric(selectedStructure.properties.plqy, '%', 1), color: 'purple' },
                      { label: '稳定性', value: formatIntegerMetric(selectedStructure.properties.stability), color: 'orange' }
                    ].map((item, index) => (
                      <div key={index} className={`metric-card rounded-lg p-3 text-center`}>
                        <div className="text-gray-400 text-xs mb-1">{item.label}</div>
                        <div className={`text-${item.color}-400 font-bold text-lg`}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {visualizationType === 'spectrum' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-96">
                <div className="chart-container">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    发射光谱
                  </h4>
                  <Plot
                    data={[{
                      x: spectralData.map(d => d.wavelength),
                      y: spectralData.map(d => d.intensity),
                      type: 'scatter',
                      mode: 'lines',
                      line: { color: '#f59e0b', width: 3 },
                      fill: 'tonexty',
                      fillcolor: 'rgba(245, 158, 11, 0.2)',
                      name: '发射强度'
                    }]}
                    layout={{
                      paper_bgcolor: 'transparent',
                      plot_bgcolor: 'transparent',
                      font: { color: '#e5e7eb', family: 'Inter' },
                      xaxis: { title: '波长 (nm)', gridcolor: '#374151', tickcolor: '#6b7280' },
                      yaxis: { title: '强度', gridcolor: '#374151', tickcolor: '#6b7280' },
                      margin: { l: 60, r: 40, t: 40, b: 60 },
                      showlegend: false
                    }}
                    config={{ displayModeBar: false }}
                  />
                </div>
                
                <div className="chart-container">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-blue-400" />
                    吸收光谱
                  </h4>
                  <Plot
                    data={[{
                      x: absorptionData.map(d => d.wavelength),
                      y: absorptionData.map(d => d.absorption),
                      type: 'scatter',
                      mode: 'lines',
                      line: { color: '#3b82f6', width: 3 },
                      fill: 'tozeroy',
                      fillcolor: 'rgba(59, 130, 246, 0.2)',
                      name: '吸收率'
                    }]}
                    layout={{
                      paper_bgcolor: 'transparent',
                      plot_bgcolor: 'transparent',
                      font: { color: '#e5e7eb', family: 'Inter' },
                      xaxis: { title: '波长 (nm)', gridcolor: '#374151', tickcolor: '#6b7280' },
                      yaxis: { title: '吸收率 (%)', gridcolor: '#374151', tickcolor: '#6b7280' },
                      margin: { l: 60, r: 40, t: 40, b: 60 },
                      showlegend: false
                    }}
                    config={{ displayModeBar: false }}
                  />
                </div>
              </div>
            )}

            {visualizationType === 'bandStructure' && (
              <div className="chart-container h-96">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-purple-400" />
                  电子能带结构
                </h4>
                <Plot
                  data={[
                    {
                      x: bandStructureData.map(d => d.k),
                      y: bandStructureData.map(d => d.valence),
                      type: 'scatter',
                      mode: 'lines',
                      line: { color: '#ef4444', width: 3 },
                      name: '价带'
                    },
                    {
                      x: bandStructureData.map(d => d.k),
                      y: bandStructureData.map(d => d.conduction),
                      type: 'scatter',
                      mode: 'lines',
                      line: { color: '#22c55e', width: 3 },
                      name: '导带'
                    }
                  ]}
                  layout={{
                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent',
                    font: { color: '#e5e7eb', family: 'Inter' },
                    xaxis: { 
                      title: 'k-点', 
                      gridcolor: '#374151', 
                      tickcolor: '#6b7280',
                      zeroline: true,
                      zerolinecolor: '#6b7280'
                    },
                    yaxis: { 
                      title: '能量 (eV)', 
                      gridcolor: '#374151', 
                      tickcolor: '#6b7280',
                      zeroline: true,
                      zerolinecolor: '#6b7280'
                    },
                    margin: { l: 80, r: 40, t: 40, b: 80 },
                    legend: {
                      orientation: 'h',
                      y: -0.2,
                      x: 0.5,
                      xanchor: 'center'
                    }
                  }}
                  config={{ displayModeBar: false }}
                />
              </div>
            )}

            {visualizationType === 'comparison' && (
              <div className="chart-container h-96">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Grid3X3 className="w-5 h-5 text-orange-400" />
                  材料性能综合对比
                </h4>
                <Plot
                  data={[{
                    x: comparisonData.map(d => d.bandgap),
                    y: comparisonData.map(d => d.plqy),
                    text: comparisonData.map(d => d.name),
                    type: 'scatter',
                    mode: 'markers+text',
                    marker: {
                      size: comparisonData.map(d => d.efficiency / 2 + 10),
                      color: comparisonData.map(d => d.stability),
                      colorscale: 'Viridis',
                      showscale: true,
                      colorbar: {
                        title: '稳定性',
                        titlefont: { color: '#e5e7eb' },
                        tickfont: { color: '#e5e7eb' }
                      }
                    },
                    textposition: 'top center',
                    textfont: { color: '#e5e7eb', size: 10 }
                  }]}
                  layout={{
                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent',
                    font: { color: '#e5e7eb', family: 'Inter' },
                    xaxis: { 
                      title: '带隙 (eV)', 
                      gridcolor: '#374151', 
                      tickcolor: '#6b7280' 
                    },
                    yaxis: { 
                      title: 'PLQY (%)', 
                      gridcolor: '#374151', 
                      tickcolor: '#6b7280' 
                    },
                    margin: { l: 80, r: 80, t: 40, b: 80 }
                  }}
                  config={{ displayModeBar: false }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Detailed Structure Information */}
      {selectedStructure && (
        <div className="glass-card rounded-2xl p-6 animate-fade-in-up animate-delay-400">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Info className="w-6 h-6 text-cyan-400" />
            {selectedStructure.name} - 详细信息
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Basic Properties */}
            <div className="data-card rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Atom className="w-5 h-5 text-blue-400" />
                基本属性
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">化学式</span>
                  <span className="text-white font-mono">{selectedStructure.formula}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">晶系</span>
                  <span className="text-white">{selectedStructure.crystalSystem}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">分子量</span>
                  <span className="text-white">{formatMetric(selectedStructure.properties.molarMass, ' g/mol')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">密度</span>
                  <span className="text-white">{formatMetric(selectedStructure.properties.density, ' g/cm³')}</span>
                </div>
              </div>
            </div>

            {/* Optical Properties */}
            <div className="data-card rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                光学性能
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">带隙</span>
                  <span className="text-white">{formatMetric(selectedStructure.properties.bandgap, ' eV')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">PLQY</span>
                  <span className="text-white">{formatMetric(selectedStructure.properties.plqy, '%', 1)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">发射波长</span>
                  <span className="text-white">{formatIntegerMetric(selectedStructure.properties.emissionWavelength, ' nm')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">量子效率</span>
                  <span className="text-white">{formatMetric(selectedStructure.properties.efficiency, '%', 1)}</span>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="data-card rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-400" />
                应用领域
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedStructure.applications.map((app, index) => (
                  <span key={index} className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                    {app}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedStructure.description}
                </p>
              </div>
              {selectedStructure.source && (
                <div className="mt-4 pt-4 border-t border-white/10 text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">来源</span>
                    <span className="text-white">{selectedStructure.source.label}</span>
                  </div>
                  {selectedStructure.source.templateBasis && (
                    <div className="flex justify-between">
                      <span className="text-gray-300">模板基型</span>
                      <span className="text-white">{selectedStructure.source.templateBasis}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="data-card rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-cyan-400" />
                研究数据联动
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">匹配实验记录</span>
                  <span className="text-white">{selectedResearchSnapshot.experimentalCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">匹配候选记录</span>
                  <span className="text-white">{selectedResearchSnapshot.candidateCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">拯救候选</span>
                  <span className="text-emerald-300">{selectedResearchSnapshot.rescuedCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">实验均值带隙</span>
                  <span className="text-white">
                    {selectedResearchSnapshot.avgExperimentalBandgap !== null
                      ? `${selectedResearchSnapshot.avgExperimentalBandgap.toFixed(2)} eV`
                      : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">候选均值带隙</span>
                  <span className="text-white">
                    {selectedResearchSnapshot.avgPredictedBandgap !== null
                      ? `${selectedResearchSnapshot.avgPredictedBandgap.toFixed(2)} eV`
                      : 'N/A'}
                  </span>
                </div>
              </div>
              {selectedResearchSnapshot.topReference && (
                <div className="mt-4 pt-4 border-t border-white/10 text-sm text-gray-300 leading-relaxed">
                  <div className="text-white font-medium mb-1">参考文献样本</div>
                  <div>{selectedResearchSnapshot.topReference.title || 'N/A'}</div>
                  <div className="mt-1 text-xs text-gray-400">
                    {selectedResearchSnapshot.topReference.firstAuthor || 'Unknown'} | {selectedResearchSnapshot.topReference.year || 'N/A'} | {selectedResearchSnapshot.topReference.measurementMethod || 'N/A'}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Lattice Parameters */}
          <div className="mt-6 data-card rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Grid3X3 className="w-5 h-5 text-purple-400" />
              晶格参数
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {[
                { label: 'a', value: selectedStructure.latticeParameters.a.toFixed(3), unit: 'Å' },
                { label: 'b', value: selectedStructure.latticeParameters.b.toFixed(3), unit: 'Å' },
                { label: 'c', value: selectedStructure.latticeParameters.c.toFixed(3), unit: 'Å' },
                { label: 'α', value: selectedStructure.latticeParameters.alpha, unit: '°' },
                { label: 'β', value: selectedStructure.latticeParameters.beta, unit: '°' },
                { label: 'γ', value: selectedStructure.latticeParameters.gamma, unit: '°' }
              ].map((param, index) => (
                <div key={index} className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-purple-400 font-bold text-lg">{param.value}</div>
                  <div className="text-gray-300 text-sm">{param.label} {param.unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
