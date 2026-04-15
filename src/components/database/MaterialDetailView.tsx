import React from 'react';
import { X, Download, Edit, Copy, ExternalLink } from 'lucide-react';
import { PerovskiteMaterial } from '../../types/database';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

interface MaterialDetailViewProps {
  material: PerovskiteMaterial;
  onClose: () => void;
  onEdit?: () => void;
}

export const MaterialDetailView: React.FC<MaterialDetailViewProps> = ({
  material,
  onClose,
  onEdit
}) => {
  const formatValue = (value: any, unit?: string): string => {
    if (value === undefined || value === null) return 'N/A';
    if (typeof value === 'number') {
      return `${value.toFixed(2)}${unit ? ` ${unit}` : ''}`;
    }
    return String(value);
  };

  const stabilityData = [
    { name: '热稳定性', value: material.stability.thermal.t50 || 0, color: '#ef4444' },
    { name: '湿度稳定性', value: 100 - (material.stability.moisture.criticalHumidity || 0), color: '#3b82f6' },
    { name: '光稳定性', value: (material.stability.light.photoStabilityIndex || 0) * 100, color: '#f59e0b' }
  ];

  const propertyData = [
    { property: '带隙', value: material.properties.optical.bandgap, unit: 'eV', target: 2.0 },
    { property: 'PLQY', value: material.properties.optical.plqy || 0, unit: '%', target: 80 },
    { property: '发射峰', value: material.properties.optical.emissionPeak, unit: 'nm', target: 550 },
    { property: '电子迁移率', value: material.properties.electronic.electronMobility || 0, unit: 'cm²/V·s', target: 20 }
  ];

  const handleCopyFormula = () => {
    navigator.clipboard.writeText(material.formula);
  };

  const handleExportMaterial = () => {
    const data = JSON.stringify(material, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${material.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-xl border border-white/20 max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <div>
            <h2 className="text-2xl font-bold text-white">{material.name}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-mono text-lg text-blue-400">{material.formula}</span>
              <button
                onClick={handleCopyFormula}
                className="text-gray-400 hover:text-white transition-colors"
                title="复制分子式"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportMaterial}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              导出
            </button>
            {onEdit && (
              <button
                onClick={onEdit}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Edit className="w-4 h-4" />
                编辑
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">基本信息</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">材料ID:</span>
                  <span className="text-white font-mono">{material.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">结构相:</span>
                  <span className="text-white capitalize">{material.structure.phase}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">空间群:</span>
                  <span className="text-white">{material.structure.spaceGroup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">数据源:</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    material.metadata.source === 'experimental' 
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {material.metadata.source === 'experimental' ? '实验数据' : '计算数据'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">置信度:</span>
                  <span className="text-white">{(material.metadata.confidence * 100).toFixed(1)}%</span>
                </div>
              </div>
            </div>

            {/* Composition */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">组成信息</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">A位离子:</span>
                  <span className="text-white">{material.composition.aIon}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">B位离子:</span>
                  <span className="text-white">{material.composition.bIon}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">X位离子:</span>
                  <span className="text-white">{material.composition.xIon.join(', ')}</span>
                </div>
                {material.composition.dopants && material.composition.dopants.length > 0 && (
                  <div>
                    <span className="text-gray-300">掺杂信息:</span>
                    <div className="mt-2 space-y-1">
                      {material.composition.dopants.map((dopant, index) => (
                        <div key={index} className="text-sm text-white bg-white/5 rounded px-2 py-1">
                          {dopant.element} @ {dopant.site}位 ({dopant.concentration}%)
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Optical Properties */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">光学性质</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">带隙:</span>
                  <span className="text-white">{formatValue(material.properties.optical.bandgap, 'eV')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">PLQY:</span>
                  <span className="text-white">{formatValue(material.properties.optical.plqy, '%')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">发射峰:</span>
                  <span className="text-white">{formatValue(material.properties.optical.emissionPeak, 'nm')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">半峰宽:</span>
                  <span className="text-white">{formatValue(material.properties.optical.fwhm, 'nm')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">荧光寿命:</span>
                  <span className="text-white">{formatValue(material.properties.optical.lifetimeAvg, 'ns')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">折射率:</span>
                  <span className="text-white">{formatValue(material.properties.optical.refractiveIndex)}</span>
                </div>
              </div>
            </div>

            {/* Electronic Properties */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">电子性质</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">电子迁移率:</span>
                  <span className="text-white">{formatValue(material.properties.electronic.electronMobility, 'cm²/V·s')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">空穴迁移率:</span>
                  <span className="text-white">{formatValue(material.properties.electronic.holeMobility, 'cm²/V·s')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">电导率:</span>
                  <span className="text-white">{formatValue(material.properties.electronic.conductivity, 'S/cm')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">载流子寿命:</span>
                  <span className="text-white">{formatValue(material.properties.electronic.carrierLifetime, 'μs')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">陷阱密度:</span>
                  <span className="text-white">{formatValue(material.properties.electronic.trapDensity, 'cm⁻³')}</span>
                </div>
              </div>
            </div>

            {/* Properties Comparison Chart */}
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">性能对比</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={propertyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="property" tick={{ fill: '#9ca3af' }} />
                    <YAxis tick={{ fill: '#9ca3af' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                    <Bar dataKey="value" fill="#3b82f6" name="实际值" />
                    <Bar dataKey="target" fill="#10b981" name="目标值" opacity={0.6} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Stability Analysis */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">稳定性分析</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={stabilityData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value.toFixed(1)}`}
                    >
                      {stabilityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#fff'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Synthesis Information */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">合成信息</h3>
              {material.synthesis.length > 0 ? (
                <div className="space-y-4">
                  {material.synthesis.map((synthesis, index) => (
                    <div key={index} className="border border-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-white">{synthesis.method}</span>
                        <span className="text-sm text-gray-400">收率: {synthesis.yield || 'N/A'}%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-gray-300">温度: {synthesis.temperature}°C</div>
                        <div className="text-gray-300">时间: {synthesis.time}分钟</div>
                        <div className="text-gray-300">气氛: {synthesis.atmosphere}</div>
                        <div className="text-gray-300">纯度: {synthesis.purity || 'N/A'}%</div>
                      </div>
                      {synthesis.precursors.length > 0 && (
                        <div className="mt-3">
                          <span className="text-gray-300 text-sm">前驱体:</span>
                          <div className="mt-1 space-y-1">
                            {synthesis.precursors.map((precursor, pIndex) => (
                              <div key={pIndex} className="text-sm text-white bg-white/5 rounded px-2 py-1">
                                {precursor.compound}: {precursor.amount} {precursor.unit}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">暂无合成信息</p>
              )}
            </div>

            {/* Metadata and Tags */}
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">元数据和标签</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-white mb-2">时间信息</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">创建时间:</span>
                      <span className="text-white">{new Date(material.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">更新时间:</span>
                      <span className="text-white">{new Date(material.updatedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">版本:</span>
                      <span className="text-white">{material.metadata.version}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">标签</h4>
                  <div className="flex flex-wrap gap-2">
                    {material.metadata.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {material.metadata.references && material.metadata.references.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-medium text-white mb-2">参考文献</h4>
                  <div className="space-y-2">
                    {material.metadata.references.map((ref, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <span className="text-blue-400">{ref}</span>
                        <button className="text-gray-400 hover:text-white transition-colors">
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};