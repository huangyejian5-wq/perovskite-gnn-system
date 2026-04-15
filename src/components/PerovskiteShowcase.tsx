import React, { memo, useState } from 'react';
import { Atom, Layers, Zap, Star, ChevronRight, Play, ArrowRight } from 'lucide-react';

interface PerovskiteType {
  id: string;
  name: string;
  formula: string;
  structure: string;
  image: string;
  properties: {
    bandgap: string;
    plqy: string;
    stability: string;
    emission: string;
  };
  applications: string[];
  description: string;
}

const perovskiteTypes: PerovskiteType[] = [
  {
    id: 'cspbi3',
    name: '铯铅碘钙钛矿',
    formula: 'CsPbI₃',
    structure: 'α相黑钙钛矿',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop&crop=entropy&auto=format&fm=webp&q=80',
    properties: {
      bandgap: '1.73 eV',
      plqy: '76.2%',
      stability: '85%',
      emission: '680 nm'
    },
    applications: ['太阳能电池', '红外LED', '光电探测器'],
    description: '具有优异的光伏性能和红外发光特性，是下一代太阳能电池的关键材料'
  },
  {
    id: 'mapbbr3',
    name: '甲胺铅溴钙钛矿',
    formula: 'MAPbBr₃',
    structure: '立方相钙钛矿',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=300&fit=crop&crop=entropy&auto=format&fm=webp&q=80',
    properties: {
      bandgap: '2.3 eV',
      plqy: '92.1%',
      stability: '72%',
      emission: '530 nm'
    },
    applications: ['绿光LED', '激光器', '光放大器'],
    description: '高PLQY绿光发射材料，在显示和照明领域具有巨大潜力'
  },
  {
    id: 'cs2agbibr6',
    name: '双钙钛矿材料',
    formula: 'Cs₂AgBiBr₆',
    structure: '双钙钛矿结构',
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=300&fit=crop&crop=entropy&auto=format&fm=webp&q=80',
    properties: {
      bandgap: '2.1 eV',
      plqy: '78.9%',
      stability: '95%',
      emission: '590 nm'
    },
    applications: ['无铅太阳能电池', '环保LED', 'X射线探测器'],
    description: '环保无铅钙钛矿，兼具高稳定性和优异的光电性能'
  }
];

export const PerovskiteShowcase: React.FC = memo(() => {
  const [selectedPerovskite, setSelectedPerovskite] = useState<PerovskiteType>(perovskiteTypes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePerovskiteChange = (perovskite: PerovskiteType) => {
    if (perovskite.id === selectedPerovskite.id) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedPerovskite(perovskite);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="glass-card rounded-2xl p-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center animate-pulse-glow">
            <Atom className="w-6 h-6 text-white animate-spin-slow" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            钙钛矿材料展示
          </h2>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          探索不同钙钛矿材料的独特结构和性能特征，从传统的有机-无机混合钙钛矿到新兴的全无机和双钙钛矿材料
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Material Selection */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-400" />
            材料类型
          </h3>
          <div className="space-y-3">
            {perovskiteTypes.map((perovskite, index) => (
              <button
                key={perovskite.id}
                onClick={() => handlePerovskiteChange(perovskite)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 group relative overflow-hidden ${
                  selectedPerovskite.id === perovskite.id
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                    : 'glass-card hover:bg-white/10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={perovskite.image} 
                      alt={perovskite.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium group-hover:text-blue-200 transition-colors">
                      {perovskite.name}
                    </h4>
                    <p className="text-blue-400 text-sm font-mono">{perovskite.formula}</p>
                    <p className="text-gray-400 text-xs mt-1">{perovskite.structure}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-gray-400 transition-all duration-300 ${
                    selectedPerovskite.id === perovskite.id ? 'rotate-90 text-blue-400' : 'group-hover:translate-x-1'
                  }`} />
                </div>
                
                {selectedPerovskite.id === perovskite.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl -z-10" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Material Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {/* Material Image and Basic Info */}
            <div className="glass-card rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <img 
                    src={selectedPerovskite.image} 
                    alt={selectedPerovskite.name}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                    <div className="text-white">
                      <h3 className="text-xl font-bold">{selectedPerovskite.name}</h3>
                      <p className="text-blue-200 font-mono text-lg">{selectedPerovskite.formula}</p>
                    </div>
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                    <Play className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">材料特性</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/5 p-3 rounded-lg border border-blue-500/20">
                      <div className="text-blue-400 text-sm font-medium">带隙</div>
                      <div className="text-white font-bold">{selectedPerovskite.properties.bandgap}</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500/10 to-green-600/5 p-3 rounded-lg border border-green-500/20">
                      <div className="text-green-400 text-sm font-medium">PLQY</div>
                      <div className="text-white font-bold">{selectedPerovskite.properties.plqy}</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 p-3 rounded-lg border border-purple-500/20">
                      <div className="text-purple-400 text-sm font-medium">稳定性</div>
                      <div className="text-white font-bold">{selectedPerovskite.properties.stability}</div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 p-3 rounded-lg border border-yellow-500/20">
                      <div className="text-yellow-400 text-sm font-medium">发射波长</div>
                      <div className="text-white font-bold">{selectedPerovskite.properties.emission}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications and Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  应用领域
                </h4>
                <div className="space-y-3">
                  {selectedPerovskite.applications.map((application, index) => (
                    <div 
                      key={application}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-lg border border-gray-600/30 hover:border-blue-500/30 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-200">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  材料描述
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {selectedPerovskite.description}
                </p>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group">
                  <span>了解更多</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

PerovskiteShowcase.displayName = 'PerovskiteShowcase';

export default PerovskiteShowcase;