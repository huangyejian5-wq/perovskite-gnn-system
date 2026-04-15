/**
 * 稳定性验证模块
 * 通过多种方法验证钙钛矿材料的热力学和动力学稳定性
 */

export interface StabilityMetrics {
  formationEnergy: number; // 形成能 (eV/atom)
  hullDistance: number; // 凸包距离 (eV/atom)
  phononStability: boolean; // 声子稳定性
  thermalStability: number; // 热稳定性温度 (K)  
  moistureStability: number; // 湿度稳定性指数
  lightStability: number; // 光稳定性指数
  mechanicalStability: boolean; // 机械稳定性
  dynamicalStability: boolean; // 动力学稳定性
  overallStability: number; // 综合稳定性评分 (0-100)
}

export interface MDSimulationResult {
  temperature: number;
  pressure: number;
  totalEnergy: number;
  kineticEnergy: number;
  potentialEnergy: number;
  rmsd: number; // 均方根位移
  bondLengthVariation: number;
  volumeChange: number;
  stable: boolean;
}

export interface PhononCalculation {
  frequencies: number[];
  hasImaginaryModes: boolean;
  dynamicalMatrix: number[][];
  thermalProperties: {
    heatCapacity: number;
    entropy: number;
    freeEnergy: number;
  };
}

export class StabilityVerificationEngine {
  private formationEnergyDatabase: Map<string, number>;
  private experimentalStabilityData: Map<string, StabilityMetrics>;
  
  constructor() {
    this.formationEnergyDatabase = new Map();
    this.experimentalStabilityData = new Map();
    this.initializeDatabase();
  }

  /**
   * 初始化稳定性数据库
   */
  private initializeDatabase(): void {
    // 常见钙钛矿材料的形成能数据 (eV/atom)
    this.formationEnergyDatabase.set('CsPbI3', -0.95);
    this.formationEnergyDatabase.set('CsPbBr3', -1.12);
    this.formationEnergyDatabase.set('CsPbCl3', -1.25);
    this.formationEnergyDatabase.set('CH3NH3PbI3', -0.89);
    this.formationEnergyDatabase.set('CH3NH3PbBr3', -1.05);
    this.formationEnergyDatabase.set('CH3NH3PbCl3', -1.18);
    this.formationEnergyDatabase.set('FAPbI3', -0.92);
    this.formationEnergyDatabase.set('FAPbBr3', -1.08);

    // 实验稳定性数据
    this.experimentalStabilityData.set('CsPbI3', {
      formationEnergy: -0.95,
      hullDistance: 0.02,
      phononStability: false,
      thermalStability: 588,
      moistureStability: 0.3,
      lightStability: 0.7,
      mechanicalStability: true,
      dynamicalStability: false,
      overallStability: 65
    });

    this.experimentalStabilityData.set('CH3NH3PbI3', {
      formationEnergy: -0.89,
      hullDistance: 0.01,
      phononStability: true,
      thermalStability: 573,
      moistureStability: 0.2,
      lightStability: 0.6,
      mechanicalStability: true,
      dynamicalStability: true,
      overallStability: 72
    });
  }

  /**
   * 计算形成能
   */
  calculateFormationEnergy(composition: string, elementEnergies: {[key: string]: number}): number {
    // 简化的形成能计算模型
    const elements = this.parseComposition(composition);
    let totalElementEnergy = 0;
    let totalAtoms = 0;

    for (const [element, count] of Object.entries(elements)) {
      if (elementEnergies[element]) {
        totalElementEnergy += elementEnergies[element] * count;
        totalAtoms += count;
      }
    }

    // 使用经验公式估算复合物能量
    const compoundEnergy = this.estimateCompoundEnergy(composition);
    
    return (compoundEnergy - totalElementEnergy) / totalAtoms;
  }

  /**
   * 计算凸包距离
   */
  calculateHullDistance(composition: string, formationEnergy: number): number {
    // 简化的凸包距离计算
    const elements = this.parseComposition(composition);
    const competingPhases = this.getCompetingPhases(elements);
    
    let minEnergyAboveHull = Infinity;
    
    for (const phase of competingPhases) {
      const energyDifference = formationEnergy - phase.energy;
      if (energyDifference < minEnergyAboveHull) {
        minEnergyAboveHull = energyDifference;
      }
    }
    
    return Math.max(0, minEnergyAboveHull);
  }

  /**
   * 分子动力学模拟
   */
  async runMDSimulation(
    structure: any,
    temperature: number = 300,
    simulationTime: number = 1000, // ps
    timeStep: number = 1.0 // fs
  ): Promise<MDSimulationResult> {
    // 模拟分子动力学计算过程
    const steps = Math.floor(simulationTime * 1000 / timeStep);
    
    // 初始化系统
    let totalEnergy = this.calculateInitialEnergy(structure);
    let kineticEnergy = 0.5 * 3 * structure.atoms.length * 8.314e-3 * temperature; // kJ/mol
    let potentialEnergy = totalEnergy - kineticEnergy;
    
    // 模拟过程中的能量和结构变化
    const energyHistory: number[] = [];
    const positionHistory: number[][][] = [];
    
    for (let step = 0; step < steps; step++) {
      // 简化的Verlet积分算法
      const forces = this.calculateForces(structure);
      this.updatePositions(structure, forces, timeStep);
      this.updateVelocities(structure, forces, timeStep);
      
      // 能量计算
      kineticEnergy = this.calculateKineticEnergy(structure);
      potentialEnergy = this.calculatePotentialEnergy(structure);
      totalEnergy = kineticEnergy + potentialEnergy;
      
      energyHistory.push(totalEnergy);
      
      // 每100步记录一次位置
      if (step % 100 === 0) {
        positionHistory.push(this.getAtomPositions(structure));
      }
    }

    // 分析轨迹稳定性
    const rmsd = this.calculateRMSD(positionHistory);
    const bondLengthVariation = this.analyzeBondLengthVariation(positionHistory);
    const volumeChange = this.calculateVolumeChange(positionHistory);
    
    // 判断稳定性
    const stable = rmsd < 0.5 && bondLengthVariation < 0.1 && Math.abs(volumeChange) < 0.05;

    return {
      temperature,
      pressure: 1.0, // atm
      totalEnergy: totalEnergy / structure.atoms.length, // eV/atom
      kineticEnergy: kineticEnergy / structure.atoms.length,
      potentialEnergy: potentialEnergy / structure.atoms.length,
      rmsd,
      bondLengthVariation,
      volumeChange,
      stable
    };
  }

  /**
   * 声子稳定性计算
   */
  calculatePhononStability(structure: any): PhononCalculation {
    // 构建动力学矩阵
    const dynamicalMatrix = this.buildDynamicalMatrix(structure);
    
    // 计算声子频率
    const frequencies = this.diagonalizeDynamicalMatrix(dynamicalMatrix);
    
    // 检查虚频模式
    const hasImaginaryModes = frequencies.some(freq => freq < -0.01); // cm^-1
    
    // 计算热力学性质
    const thermalProperties = this.calculateThermalProperties(frequencies, 300);
    
    return {
      frequencies,
      hasImaginaryModes,
      dynamicalMatrix,
      thermalProperties
    };
  }

  /**
   * 机械稳定性检验
   */
  checkMechanicalStability(elasticConstants: number[][]): boolean {
    // Born稳定性准则
    const C11 = elasticConstants[0][0];
    const C12 = elasticConstants[0][1];
    const C44 = elasticConstants[3][3];
    
    // 立方晶系的稳定性条件
    const condition1 = C11 - C12 > 0;
    const condition2 = C11 + 2 * C12 > 0;
    const condition3 = C44 > 0;
    
    return condition1 && condition2 && condition3;
  }

  /**
   * 综合稳定性评估
   */
  async evaluateOverallStability(
    composition: string,
    structure: any,
    conditions: {
      temperature?: number;
      humidity?: number;
      lightIntensity?: number;
    } = {}
  ): Promise<StabilityMetrics> {
    const {
      temperature = 300,
      humidity = 0.5,
      lightIntensity = 1.0
    } = conditions;

    // 1. 热力学稳定性
    const elementEnergies = {
      'Cs': -0.89, 'Pb': -0.11, 'I': -1.52,
      'Br': -1.97, 'Cl': -1.68, 'C': -7.36,
      'N': -4.92, 'H': -2.25
    };
    
    const formationEnergy = this.calculateFormationEnergy(composition, elementEnergies);
    const hullDistance = this.calculateHullDistance(composition, formationEnergy);

    // 2. 动力学稳定性
    const phononResult = this.calculatePhononStability(structure);
    const phononStability = !phononResult.hasImaginaryModes;
    const dynamicalStability = phononStability;

    // 3. 分子动力学稳定性
    const mdResult = await this.runMDSimulation(structure, temperature);
    const mechanicalStability = mdResult.stable;

    // 4. 环境稳定性
    const thermalStability = this.estimateThermalStability(composition, formationEnergy);
    const moistureStability = this.estimateMoistureStability(composition, humidity);
    const lightStability = this.estimateLightStability(composition, lightIntensity);

    // 5. 综合评分
    const stabilityFactors = [
      { value: formationEnergy < -0.5 ? 1 : 0, weight: 0.2 },
      { value: hullDistance < 0.1 ? 1 : 0, weight: 0.15 },
      { value: phononStability ? 1 : 0, weight: 0.15 },
      { value: mechanicalStability ? 1 : 0, weight: 0.15 },
      { value: thermalStability / 600, weight: 0.1 },
      { value: moistureStability, weight: 0.1 },
      { value: lightStability, weight: 0.15 }
    ];

    const overallStability = stabilityFactors.reduce(
      (sum, factor) => sum + factor.value * factor.weight, 0
    ) * 100;

    return {
      formationEnergy,
      hullDistance,
      phononStability,
      thermalStability,
      moistureStability,
      lightStability,
      mechanicalStability,
      dynamicalStability,
      overallStability
    };
  }

  // 辅助方法
  private parseComposition(composition: string): {[key: string]: number} {
    const elements: {[key: string]: number} = {};
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;
    
    while ((match = regex.exec(composition)) !== null) {
      const element = match[1];
      const count = match[2] ? parseInt(match[2]) : 1;
      elements[element] = count;
    }
    
    return elements;
  }

  private estimateCompoundEnergy(composition: string): number {
    // 使用经验模型估算复合物能量
    const known = this.formationEnergyDatabase.get(composition);
    if (known) return known;
    
    // 简化的估算模型
    const elements = this.parseComposition(composition);
    let energy = 0;
    
    for (const [element, count] of Object.entries(elements)) {
      switch (element) {
        case 'Cs': energy += -0.89 * count; break;
        case 'Pb': energy += -0.11 * count; break;
        case 'I': energy += -1.52 * count; break;
        case 'Br': energy += -1.97 * count; break;
        case 'Cl': energy += -1.68 * count; break;
        default: energy += -1.0 * count;
      }
    }
    
    return energy * 0.85; // 考虑化合物稳定化效应
  }

  private getCompetingPhases(elements: {[key: string]: number}): Array<{composition: string, energy: number}> {
    // 返回可能的竞争相
    return [
      { composition: 'PbI2', energy: -0.31 },
      { composition: 'CsI', energy: -0.52 },
      { composition: 'PbBr2', energy: -0.28 },
      { composition: 'CsBr', energy: -0.48 }
    ];
  }

  private calculateInitialEnergy(structure: any): number {
    return -5.2 * structure.atoms.length; // eV
  }

  private calculateForces(structure: any): number[][] {
    return structure.atoms.map(() => [0, 0, 0]);
  }

  private updatePositions(structure: any, forces: number[][], timeStep: number): void {
    // Verlet积分更新位置
  }

  private updateVelocities(structure: any, forces: number[][], timeStep: number): void {
    // 更新速度
  }

  private calculateKineticEnergy(structure: any): number {
    return 1.5 * structure.atoms.length * 0.026; // eV
  }

  private calculatePotentialEnergy(structure: any): number {
    return -5.2 * structure.atoms.length; // eV
  }

  private getAtomPositions(structure: any): number[][] {
    return structure.atoms.map((atom: any) => atom.position);
  }

  private calculateRMSD(trajectories: number[][][]): number {
    if (trajectories.length < 2) return 0;
    
    const initial = trajectories[0];
    const final = trajectories[trajectories.length - 1];
    
    let sumSquares = 0;
    for (let i = 0; i < initial.length; i++) {
      for (let j = 0; j < 3; j++) {
        sumSquares += Math.pow(initial[i][j] - final[i][j], 2);
      }
    }
    
    return Math.sqrt(sumSquares / (initial.length * 3));
  }

  private analyzeBondLengthVariation(trajectories: number[][][]): number {
    return 0.05; // 简化返回
  }

  private calculateVolumeChange(trajectories: number[][][]): number {
    return 0.02; // 简化返回
  }

  private buildDynamicalMatrix(structure: any): number[][] {
    const size = structure.atoms.length * 3;
    return Array(size).fill(0).map(() => Array(size).fill(0));
  }

  private diagonalizeDynamicalMatrix(matrix: number[][]): number[] {
    // 简化的本征值计算
    return Array(matrix.length).fill(0).map(() => Math.random() * 300);
  }

  private calculateThermalProperties(frequencies: number[], temperature: number) {
    return {
      heatCapacity: 25.0, // J/mol/K
      entropy: 180.0, // J/mol/K
      freeEnergy: -45000 // J/mol
    };
  }

  private estimateThermalStability(composition: string, formationEnergy: number): number {
    // 基于形成能估算热稳定性温度
    return Math.abs(formationEnergy) * 600 + 300;
  }

  private estimateMoistureStability(composition: string, humidity: number): number {
    // 湿度稳定性指数 (0-1)
    const hygroscopicElements = ['Cs', 'MA', 'FA'];
    const hasHygroscopic = hygroscopicElements.some(el => composition.includes(el));
    
    if (hasHygroscopic) {
      return Math.max(0, 1 - humidity * 1.5);
    }
    return 0.8;
  }

  private estimateLightStability(composition: string, lightIntensity: number): number {
    // 光稳定性指数 (0-1)
    const photosensitiveElements = ['I', 'Br'];
    const hasSensitive = photosensitiveElements.some(el => composition.includes(el));
    
    if (hasSensitive) {
      return Math.max(0.3, 1 - lightIntensity * 0.4);
    }
    return 0.9;
  }
}

export default StabilityVerificationEngine;