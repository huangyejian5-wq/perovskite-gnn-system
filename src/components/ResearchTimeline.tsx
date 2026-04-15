import React, { memo, useState } from 'react';
import { Calendar, Award, TrendingUp, Users, Zap, Atom, FlaskConical, Lightbulb, ArrowRight, Clock } from 'lucide-react';

interface ResearchMilestone {
  id: string;
  year: string;
  month: string;
  title: string;
  description: string;
  achievement: string;
  impact: 'breakthrough' | 'significant' | 'incremental';
  institution: string;
  image: string;
  metrics?: {
    efficiency?: string;
    plqy?: string;
    stability?: string;
  };
}

const researchMilestones: ResearchMilestone[] = [
  {
    id: '2024-q1',
    year: '2024',
    month: '03',
    title: '突破性CsPbI₃稳定性改进',
    description: '通过表面工程和添加剂策略，成功将CsPbI₃钙钛矿的相稳定性提升至180天以上',
    achievement: '实现了室温下α相CsPbI₃的长期稳定存在',
    impact: 'breakthrough',
    institution: '清华大学材料学院',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop&crop=entropy&auto=format&fm=webp&q=80',
    metrics: {
      efficiency: '22.1%',
      stability: '180天',
      plqy: '89.3%'
    }
  },
  {
    id: '2024-q1-2',
    year: '2024',
    month: '02',
    title: 'GNN模型准确率突破96%',
    description: '基于多尺度图神经网络的钙钛矿性能预测模型达到了前所未有的准确率',
    achievement: '预测准确率从90.2%提升至96.8%',
    impact: 'significant',
    institution: 'MIT计算机科学系',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop&crop=entropy&auto=format&fm=webp&q=80',
    metrics: {
      efficiency: '96.8%'
    }
  },
  {
    id: '2023-q4',
    year: '2023',
    month: '12',
    title: '无铅双钙钛矿效率新记录',
    description: 'Cs₂AgBiBr₆双钙钛矿太阳能电池效率突破15%，为无铅钙钛矿应用奠定基础',
    achievement: '无铅钙钛矿器件效率达到15.3%',
    impact: 'breakthrough',
    institution: '中科院光电技术研究所',
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=500&h=300&fit=crop&crop=entropy&auto=format&fm=webp&q=80',
    metrics: {
      efficiency: '15.3%',
      stability: '1000h'
    }
  },
  {
    id: '2023-q3',
    year: '2023',
    month: '09',
    title: '钙钛矿LED色纯度提升',
    description: '通过纳米结构调控，成功将绿光钙钛矿LED的色纯度提升至95%以上',
    achievement: 'NTSC色域覆盖率达到138%',
    impact: 'significant',
    institution: '北京大学物理学院',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=500&h=300&fit=crop&crop=entropy&auto=format&fm=webp&q=80',
    metrics: {
      plqy: '95.2%'
    }
  }
];

export const ResearchTimeline: React.FC = memo(() => {
  const [selectedMilestone, setSelectedMilestone] = useState<ResearchMilestone>(researchMilestones[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMilestoneSelect = (milestone: ResearchMilestone) => {
    if (milestone.id === selectedMilestone.id) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedMilestone(milestone);
      setIsAnimating(false);
    }, 300);
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'breakthrough': return 'from-red-500 to-orange-500';
      case 'significant': return 'from-blue-500 to-purple-500';
      case 'incremental': return 'from-green-500 to-cyan-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'breakthrough': return <Zap className="w-4 h-4 text-orange-400" />;
      case 'significant': return <TrendingUp className="w-4 h-4 text-blue-400" />;
      case 'incremental': return <Lightbulb className="w-4 h-4 text-green-400" />;
      default: return <Award className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="glass-card rounded-2xl p-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center animate-pulse-glow">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
            研究时间线
          </h2>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          追踪钙钛矿材料研究的重要里程碑，见证从基础科学发现到技术突破的每一个关键时刻
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Timeline Navigation */}
        <div className="xl:col-span-1 space-y-4">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-green-400" />
            重要里程碑
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500"></div>
            
            <div className="space-y-4">
              {researchMilestones.map((milestone, index) => (
                <button
                  key={milestone.id}
                  onClick={() => handleMilestoneSelect(milestone)}
                  className={`w-full text-left transition-all duration-300 group relative ${
                    selectedMilestone.id === milestone.id ? 'scale-105' : 'hover:scale-102'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    selectedMilestone.id === milestone.id 
                      ? 'bg-green-400 border-green-300 animate-pulse' 
                      : 'bg-gray-600 border-gray-500 group-hover:bg-blue-500 group-hover:border-blue-400'
                  }`}></div>
                  
                  <div className="ml-12 p-4 glass-card rounded-lg group-hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400 font-mono text-sm">{milestone.year}.{milestone.month}</span>
                        {getImpactIcon(milestone.impact)}
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs bg-gradient-to-r ${getImpactColor(milestone.impact)} text-white`}>
                        {milestone.impact === 'breakthrough' ? '突破' : 
                         milestone.impact === 'significant' ? '重要' : '进展'}
                      </div>
                    </div>
                    
                    <h4 className={`font-semibold mb-1 transition-colors ${
                      selectedMilestone.id === milestone.id ? 'text-green-200' : 'text-white group-hover:text-blue-200'
                    }`}>
                      {milestone.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-2">
                      {milestone.description.length > 80 
                        ? milestone.description.substring(0, 80) + '...' 
                        : milestone.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{milestone.institution}</span>
                      <ArrowRight className={`w-3 h-3 text-gray-400 transition-transform ${
                        selectedMilestone.id === milestone.id ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone Details */}
        <div className="xl:col-span-2 space-y-6">
          <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {/* Main Content */}
            <div className="glass-card rounded-xl p-6 space-y-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-mono text-green-400">{selectedMilestone.year}.{selectedMilestone.month}</span>
                    <div className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${getImpactColor(selectedMilestone.impact)} text-white`}>
                      {selectedMilestone.impact === 'breakthrough' ? '重大突破' : 
                       selectedMilestone.impact === 'significant' ? '重要进展' : '增量进步'}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedMilestone.title}</h3>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {selectedMilestone.institution}
                  </p>
                </div>
              </div>

              {/* Image and Achievement */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <img 
                    src={selectedMilestone.image} 
                    alt={selectedMilestone.title}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                    <div className="text-white">
                      <p className="text-sm opacity-90">研究成果展示</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-400" />
                      主要成就
                    </h4>
                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4 rounded-lg border border-yellow-500/20">
                      <p className="text-yellow-200 font-medium">{selectedMilestone.achievement}</p>
                    </div>
                  </div>
                  
                  {selectedMilestone.metrics && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Atom className="w-5 h-5 text-blue-400" />
                        关键指标
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedMilestone.metrics.efficiency && (
                          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/5 p-3 rounded-lg border border-blue-500/20 flex items-center justify-between">
                            <span className="text-blue-400 text-sm">效率/准确率</span>
                            <span className="text-white font-bold">{selectedMilestone.metrics.efficiency}</span>
                          </div>
                        )}
                        {selectedMilestone.metrics.plqy && (
                          <div className="bg-gradient-to-r from-green-500/10 to-green-600/5 p-3 rounded-lg border border-green-500/20 flex items-center justify-between">
                            <span className="text-green-400 text-sm">PLQY</span>
                            <span className="text-white font-bold">{selectedMilestone.metrics.plqy}</span>
                          </div>
                        )}
                        {selectedMilestone.metrics.stability && (
                          <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 p-3 rounded-lg border border-purple-500/20 flex items-center justify-between">
                            <span className="text-purple-400 text-sm">稳定性</span>
                            <span className="text-white font-bold">{selectedMilestone.metrics.stability}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-cyan-400" />
                  研究详情
                </h4>
                <p className="text-gray-300 leading-relaxed">{selectedMilestone.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ResearchTimeline.displayName = 'ResearchTimeline';

export default ResearchTimeline;