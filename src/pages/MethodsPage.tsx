import React from 'react';
import {
  BookOpen,
  Brain,
  CheckCircle,
  Database,
  FlaskConical,
  Lightbulb,
  Microscope,
  Target,
} from 'lucide-react';
import { RESEARCH_PROJECT_PROFILE } from '../data/researchProjectProfile';
import {
  COLOR_COORDINATE_SAMPLES,
  LUMINESCENCE_DATASET_SUMMARY,
  STABILITY_SAMPLES,
  TOP_EQE_SAMPLES,
  TOP_PLQY_SAMPLES,
} from '../data/luminescenceDatasets';
import { RESEARCH_DATASET_SUMMARY } from '../data/researchDatasets';
import { MP_FULL_SUMMARY } from '../data/mpFullLibrary';

export const MethodsPage: React.FC = () => {
  return (
    <div className="container-fluid space-y-8 py-8">
      <div className="glass-card rounded-2xl p-8 animate-fade-in-up">
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-700 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-sky-200 to-blue-200 bg-clip-text text-transparent">
                  方法与数据来源
                </h1>
                <p className="text-lg text-gray-300 mt-1">
                  按论文口径说明系统的研究目标、真实数据来源、验证指标与当前实现边界
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed max-w-5xl">
              {RESEARCH_PROJECT_PROFILE.focus}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animate-delay-100">
        {[
          {
            label: '实验带隙记录',
            value: RESEARCH_DATASET_SUMMARY.experimentalRecordCount,
            description: '当前已接入的实验文献带隙整理表',
            icon: Database,
            accent: 'text-blue-300',
          },
          {
            label: '候选筛选记录',
            value: RESEARCH_DATASET_SUMMARY.screenedCandidateCount,
            description: '当前候选空间与假金属拯救结果',
            icon: Target,
            accent: 'text-purple-300',
          },
          {
            label: '发光数据记录',
            value: LUMINESCENCE_DATASET_SUMMARY.totalRecords,
            description: '来自 pelED 结构化发光数据集',
            icon: Lightbulb,
            accent: 'text-amber-300',
          },
          {
            label: 'Ground Truth',
            value: RESEARCH_DATASET_SUMMARY.alignedGroundTruthCount,
            description: '当前训练/参考摘要池',
            icon: CheckCircle,
            accent: 'text-emerald-300',
          },
        ].map((card) => (
          <div key={card.label} className="metric-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <card.icon className={`w-5 h-5 ${card.accent}`} />
              </div>
            </div>
            <div className={`text-2xl font-bold ${card.accent} mb-1`}>{card.value}</div>
            <div className="text-gray-200 font-medium">{card.label}</div>
            <div className="text-gray-400 text-xs mt-1">{card.description}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 animate-fade-in-up animate-delay-200">
        <div className="xl:col-span-2 glass-card rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
            <Brain className="w-6 h-6 text-cyan-400" />
            论文方法主线
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RESEARCH_PROJECT_PROFILE.coreMethod.map((item) => (
              <div key={item} className="data-card rounded-xl p-5">
                <div className="text-white font-semibold mb-2">{item.split('：')[0]}</div>
                <div className="text-sm text-gray-400 leading-relaxed">
                  {item.includes('：') ? item.split('：').slice(1).join('：') : item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
            <Target className="w-6 h-6 text-emerald-400" />
            论文验证目标
          </h2>
          <div className="space-y-3">
            {RESEARCH_PROJECT_PROFILE.validationTargets.map((item) => (
              <div key={item.label} className="data-card rounded-xl p-4 flex items-center justify-between">
                <span className="text-sm text-gray-300">{item.label}</span>
                <span className="text-sm font-semibold text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 animate-fade-in-up animate-delay-300">
        <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
          <Database className="w-6 h-6 text-blue-400" />
          真实数据来源
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {RESEARCH_PROJECT_PROFILE.dataSources.map((source) => (
            <div key={source.label} className="data-card rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{source.label}</div>
              <div className="text-sm text-gray-400 leading-relaxed">{source.description}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="data-card rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-4">当前已接入数据文件</h3>
            <div className="space-y-3 text-sm text-gray-300">
              {RESEARCH_DATASET_SUMMARY.sourceFiles.map((file) => (
                <div key={file} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10">
                  {file}
                </div>
              ))}
              {LUMINESCENCE_DATASET_SUMMARY.sourceFiles.map((file) => (
                <div key={file} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10">
                  {file}
                </div>
              ))}
            </div>
          </div>

          <div className="data-card rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-4">发光数据摘要</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">PLQY 记录</span><span className="text-white">{LUMINESCENCE_DATASET_SUMMARY.plqyRecordCount}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">EQE 记录</span><span className="text-white">{LUMINESCENCE_DATASET_SUMMARY.eqeRecordCount}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">CIE 提及</span><span className="text-white">{LUMINESCENCE_DATASET_SUMMARY.cieMentionCount}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">稳定性提及</span><span className="text-white">{LUMINESCENCE_DATASET_SUMMARY.stabilityMentionCount}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Turn-on voltage</span><span className="text-white">{LUMINESCENCE_DATASET_SUMMARY.turnOnVoltageCount}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">FWHM</span><span className="text-white">{LUMINESCENCE_DATASET_SUMMARY.fwhmRecordCount}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Current efficiency</span><span className="text-white">{LUMINESCENCE_DATASET_SUMMARY.currentEfficiencyCount}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Power efficiency</span><span className="text-white">{LUMINESCENCE_DATASET_SUMMARY.powerEfficiencyCount}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">发光范围</span><span className="text-white">{LUMINESCENCE_DATASET_SUMMARY.emissionRangeNm.min}-{LUMINESCENCE_DATASET_SUMMARY.emissionRangeNm.max} nm</span></div>
              <div className="flex justify-between"><span className="text-gray-400">器件记录</span><span className="text-white">{LUMINESCENCE_DATASET_SUMMARY.devicePerformanceCount}</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 animate-fade-in-up animate-delay-350">
        <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
          <Microscope className="w-6 h-6 text-cyan-400" />
          多尺度数据库标注
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <div className="data-card rounded-xl p-5">
            <div className="text-white font-semibold mb-2">材料尺度</div>
            <div className="text-sm text-gray-400 leading-relaxed">
              主要对应实验带隙记录和发光材料属性，强调体相/层状/空位有序等材料本体特征。
            </div>
          </div>
          <div className="data-card rounded-xl p-5">
            <div className="text-white font-semibold mb-2">器件尺度</div>
            <div className="text-sm text-gray-400 leading-relaxed">
              主要对应 pelED 器件性能记录，包含 EQE、亮度、T50、CIE 等更接近应用端的指标。
            </div>
          </div>
          <div className="data-card rounded-xl p-5">
            <div className="text-white font-semibold mb-2">筛选尺度</div>
            <div className="text-sm text-gray-400 leading-relaxed">
              对应假金属筛选与候选排序，强调从候选空间中定位优先验证材料。
            </div>
          </div>
          <div className="data-card rounded-xl p-5">
            <div className="text-white font-semibold mb-2">组成-晶体尺度</div>
            <div className="text-sm text-gray-400 leading-relaxed">
              对应 MP 全量主库的 6380 条记录，强调化学组成、晶体结构和电子结构预测。
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="data-card rounded-xl p-4 flex items-center justify-between">
            <span className="text-gray-300">实验材料尺度</span>
            <span className="text-white">{RESEARCH_DATASET_SUMMARY.experimentalRecordCount}</span>
          </div>
          <div className="data-card rounded-xl p-4 flex items-center justify-between">
            <span className="text-gray-300">器件/发光尺度</span>
            <span className="text-white">{LUMINESCENCE_DATASET_SUMMARY.totalRecords}</span>
          </div>
          <div className="data-card rounded-xl p-4 flex items-center justify-between">
            <span className="text-gray-300">筛选尺度</span>
            <span className="text-white">{RESEARCH_DATASET_SUMMARY.screenedCandidateCount}</span>
          </div>
          <div className="data-card rounded-xl p-4 flex items-center justify-between">
            <span className="text-gray-300">MP 组成-晶体尺度</span>
            <span className="text-white">{MP_FULL_SUMMARY.totalRecords}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 animate-fade-in-up animate-delay-400">
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
            <FlaskConical className="w-6 h-6 text-purple-400" />
            代表性发光样本
          </h2>
          <div className="space-y-4">
            {TOP_EQE_SAMPLES.slice(0, 5).map((sample) => (
              <div key={`${sample.doi}-${sample.emission_peak_nm}`} className="data-card rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{sample.emission_peak_nm?.toFixed(0)} nm</span>
                  <span className="text-purple-300 font-semibold">{sample.EQE_pct?.toFixed(2)}% EQE</span>
                </div>
                <div className="text-sm text-gray-400">
                  {sample.journal} | {sample.pub_year || 'N/A'} | {sample.phase_type || 'Unknown'} | {sample.X_halide || 'Unknown'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
            <Microscope className="w-6 h-6 text-amber-400" />
            高亮研究线索
          </h2>
          <div className="space-y-4">
            <div className="data-card rounded-xl p-4">
              <div className="text-white font-medium mb-2">高 PLQY 样本</div>
              <div className="text-sm text-gray-300 leading-relaxed">
                当前结构化发光数据中已整理出 {TOP_PLQY_SAMPLES.length} 条 PLQY 明确记录，可用于后续把预测输出从“泛性能指标”进一步收敛到真实发光效率口径。
              </div>
            </div>
            <div className="data-card rounded-xl p-4">
              <div className="text-white font-medium mb-2">色坐标相关样本</div>
              <div className="text-sm text-gray-300 leading-relaxed">
                已识别 {COLOR_COORDINATE_SAMPLES.length} 条代表性 CIE 相关样本，后续可以支持面向显示应用的颜色目标设计与可视化。
              </div>
            </div>
            <div className="data-card rounded-xl p-4">
              <div className="text-white font-medium mb-2">稳定性相关样本</div>
              <div className="text-sm text-gray-300 leading-relaxed">
                已筛出 {STABILITY_SAMPLES.length} 条代表性稳定性样本，可作为后续把预测页和优化页的“稳定性”从概念指标推进到真实文献指标的入口。
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 animate-fade-in-up animate-delay-500">
        <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" />
          当前实现边界
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {RESEARCH_PROJECT_PROFILE.currentReality.map((item) => (
            <div key={item} className="data-card rounded-xl p-5 text-sm text-gray-300 leading-relaxed">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
