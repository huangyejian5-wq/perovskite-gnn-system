export interface ProjectCapabilityItem {
  label: string;
  description: string;
}

export interface ProjectValidationTarget {
  label: string;
  value: string;
}

export interface ResearchProjectProfile {
  title: string;
  subtitle: string;
  focus: string;
  coreMethod: string[];
  targetOutputs: ProjectCapabilityItem[];
  dataSources: ProjectCapabilityItem[];
  validationTargets: ProjectValidationTarget[];
  currentReality: string[];
}

export const RESEARCH_PROJECT_PROFILE: ResearchProjectProfile = {
  title: '基于多尺度物理约束图神经网络的钙钛矿发光材料性能智能预测',
  subtitle: '围绕发光波长、量子效率、色坐标与稳定性的智能预测与逆向设计',
  focus:
    '研究对象是钙钛矿发光材料，而不是泛化的任意材料库展示；核心目标是从原子结构到宏观发光性能的端到端预测。',
  coreMethod: [
    '多尺度图神经网络：GCN + GAT + Transformer 分层融合',
    '物理约束嵌入：光学跃迁选择定则、能量守恒、对称性约束',
    '多任务学习：联合带隙、发光波长、量子效率、载流子寿命等相关任务',
    '主动学习与多目标优化：面向发光效率、色纯度、稳定性协同设计',
  ],
  targetOutputs: [
    {
      label: '发光波长',
      description: '面向显示与照明应用的波长预测和颜色可调区间分析',
    },
    {
      label: '量子效率',
      description: '结合激子物理和复合动力学评估发光效率',
    },
    {
      label: '色坐标',
      description: '支持颜色纯度与 CIE 空间相关的可视化和目标设计',
    },
    {
      label: '稳定性',
      description: '在性能优化时同时考虑结构稳定性与环境适用性',
    },
  ],
  dataSources: [
    {
      label: 'Materials Project',
      description: '用于获取 ABX3 结构、带隙、形成能、介电常数、有效质量等基础计算数据',
    },
    {
      label: 'NOMAD',
      description: '用于补充电子结构、光学吸收、介电函数矩阵与激子相关输入',
    },
    {
      label: '实验光谱文献',
      description: '用于收集发光波长、量子效率、载流子寿命和稳定性验证数据',
    },
  ],
  validationTargets: [
    { label: '发光波长误差', value: 'MAE < 5 nm' },
    { label: '量子效率性能', value: '优于传统 DFT 20%+' },
    { label: '色坐标准确率', value: '95%+' },
    { label: '验证策略', value: '5 折交叉验证 + 理论/实验双重对比' },
  ],
  currentReality: [
    '当前系统已真实接入实验带隙整理表、筛选候选表与 ground-truth 摘要统计。',
    '当前页面中与发光波长、PLQY、色坐标相关的研究目标已按论文方法口径说明，但尚未全部完成真实实验光谱数据的端到端接入。',
    '数据库、分析和候选页面展示的真实数据以当前工作区中已整理完成的 CSV 为准，不虚构额外实验结果。',
  ],
};
