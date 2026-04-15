import React, { useState, useEffect } from 'react';
import { Search, Filter, Download, Upload, Plus, Eye, Edit, Trash2 } from 'lucide-react';
import { PerovskiteMaterial, DatabaseQuery, DatabaseStats } from '../../types/database';
import { databaseService } from '../../services/databaseService';

interface MaterialBrowserProps {
  onSelectMaterial?: (material: PerovskiteMaterial) => void;
  onEditMaterial?: (material: PerovskiteMaterial) => void;
}

export const MaterialBrowser: React.FC<MaterialBrowserProps> = ({
  onSelectMaterial,
  onEditMaterial
}) => {
  const [materials, setMaterials] = useState<PerovskiteMaterial[]>([]);
  const [stats, setStats] = useState<DatabaseStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

  const [filters, setFilters] = useState<DatabaseQuery>({
    limit: 20,
    offset: 0,
    sortBy: 'properties.optical.bandgap',
    sortOrder: 'asc'
  });

  useEffect(() => {
    loadMaterials();
    loadStats();
  }, [filters]);

  const loadMaterials = async () => {
    setLoading(true);
    try {
      const results = await databaseService.queryMaterials(filters);
      setMaterials(results);
    } catch (error) {
      console.error('Error loading materials:', error);
    }
    setLoading(false);
  };

  const loadStats = async () => {
    try {
      const statsData = await databaseService.getStats();
      setStats(statsData);
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const handleSearch = async () => {
    if (searchText.trim()) {
      setLoading(true);
      const results = await databaseService.searchByText(searchText);
      setMaterials(results);
      setLoading(false);
    } else {
      loadMaterials();
    }
  };

  const handleExport = async () => {
    try {
      const data = await databaseService.exportData('json');
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'perovskite_materials.json';
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export error:', error);
    }
  };

  const handleDelete = async (materialId: string) => {
    if (window.confirm('确定要删除这个材料吗？')) {
      await databaseService.deleteMaterial(materialId);
      loadMaterials();
      loadStats();
    }
  };

  const formatValue = (value: any): string => {
    if (value === undefined || value === null) return 'N/A';
    if (typeof value === 'number') {
      return value.toFixed(2);
    }
    return String(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">材料数据库管理</h1>
          <p className="text-gray-300">管理和浏览钙钛矿材料数据库</p>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">总材料数</h3>
              <p className="text-2xl font-bold text-blue-400">{stats.totalMaterials}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">实验数据</h3>
              <p className="text-2xl font-bold text-green-400">{stats.experimentalData}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">计算数据</h3>
              <p className="text-2xl font-bold text-purple-400">{stats.computationalData}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">平均置信度</h3>
              <p className="text-2xl font-bold text-yellow-400">{(stats.averageConfidence * 100).toFixed(1)}%</p>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 mb-6">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-1 gap-4">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="搜索材料..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                搜索
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                <Filter className="w-4 h-4" />
                筛选
              </button>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                导出
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                添加材料
              </button>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">带隙范围 (eV)</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="最小值"
                      step="0.1"
                      className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="最大值"
                      step="0.1"
                      className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">PLQY范围 (%)</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="最小值"
                      min="0"
                      max="100"
                      className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="最大值"
                      min="0"
                      max="100"
                      className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">结构相</label>
                  <select className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">所有相</option>
                    <option value="cubic">立方相</option>
                    <option value="tetragonal">四方相</option>
                    <option value="orthorhombic">正交相</option>
                    <option value="hexagonal">六方相</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors">
                  重置
                </button>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
                  应用筛选
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Materials Table */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">材料</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">分子式</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">结构相</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">带隙 (eV)</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">PLQY (%)</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">发射峰 (nm)</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">数据源</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">操作</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-gray-400">
                      加载中...
                    </td>
                  </tr>
                ) : materials.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-gray-400">
                      未找到匹配的材料
                    </td>
                  </tr>
                ) : (
                  materials.map((material) => (
                    <tr
                      key={material.id}
                      className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                        selectedMaterial === material.id ? 'bg-blue-500/20' : ''
                      }`}
                      onClick={() => setSelectedMaterial(material.id)}
                    >
                      <td className="px-4 py-3 text-white">
                        <div>
                          <div className="font-medium">{material.name}</div>
                          <div className="text-sm text-gray-400">{material.id}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-white font-mono">{material.formula}</td>
                      <td className="px-4 py-3 text-white capitalize">{material.structure.phase}</td>
                      <td className="px-4 py-3 text-white">{formatValue(material.properties.optical.bandgap)}</td>
                      <td className="px-4 py-3 text-white">{formatValue(material.properties.optical.plqy)}</td>
                      <td className="px-4 py-3 text-white">{formatValue(material.properties.optical.emissionPeak)}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          material.metadata.source === 'experimental' 
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-purple-500/20 text-purple-400'
                        }`}>
                          {material.metadata.source === 'experimental' ? '实验' : '计算'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectMaterial?.(material);
                            }}
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                            title="查看详情"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onEditMaterial?.(material);
                            }}
                            className="text-yellow-400 hover:text-yellow-300 transition-colors"
                            title="编辑"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(material.id);
                            }}
                            className="text-red-400 hover:text-red-300 transition-colors"
                            title="删除"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-between items-center">
          <div className="text-gray-400">
            显示 {materials.length} 个结果
          </div>
          <div className="flex gap-2">
            <button
              disabled={filters.offset === 0}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 disabled:opacity-50 text-white rounded transition-colors"
            >
              上一页
            </button>
            <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors">
              下一页
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};