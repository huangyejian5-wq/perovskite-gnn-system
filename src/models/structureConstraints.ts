/**
 * 结构约束验证模块
 * 用于验证钙钛矿材料结构的合理性和稳定性
 */

export interface StructureConstraint {
  name: string;
  description: string;
  validate: (structure: any) => boolean;
  penalty: (structure: any) => number;
}

export interface CoordinationConstraint {
  atomType: string;
  minCoordination: number;
  maxCoordination: number;
  preferredCoordination: number;
  geometries: string[];
}

export interface BondLengthConstraint {
  bondType: string;
  minLength: number;
  maxLength: number;
  idealLength: number;
  tolerance: number;
}

export interface ChargeBalanceConstraint {
  cationCharge: number;
  anionCharge: number;
  totalCharge: number;
  tolerance: number;
}

export interface StabilityMetrics {
  structuralStability: number;
  thermodynamicStability: number;
  coordinationStability: number;
  chargeBalanceScore: number;
  overallStability: number;
}

export class StructureConstraintValidator {
  private coordinationConstraints: Map<string, CoordinationConstraint>;
  private bondLengthConstraints: Map<string, BondLengthConstraint>;
  private chargeBalanceConstraints: ChargeBalanceConstraint[];

  constructor() {
    this.coordinationConstraints = new Map();
    this.bondLengthConstraints = new Map();
    this.chargeBalanceConstraints = [];
    this.initializeConstraints();
  }

  private initializeConstraints(): void {
    // 钙钛矿A位离子配位约束
    this.coordinationConstraints.set('Cs', {
      atomType: 'Cs',
      minCoordination: 8,
      maxCoordination: 12,
      preferredCoordination: 12,
      geometries: ['cuboctahedral', 'icosahedral']
    });

    this.coordinationConstraints.set('CH3NH3', {
      atomType: 'CH3NH3',
      minCoordination: 6,
      maxCoordination: 12,
      preferredCoordination: 8,
      geometries: ['cubic', 'cuboctahedral']
    });

    this.coordinationConstraints.set('HC(NH2)2', {
      atomType: 'HC(NH2)2',
      minCoordination: 6,
      maxCoordination: 12,
      preferredCoordination: 8,
      geometries: ['cubic', 'dodecahedral']
    });

    // B位离子配位约束
    this.coordinationConstraints.set('Pb', {
      atomType: 'Pb',
      minCoordination: 4,
      maxCoordination: 8,
      preferredCoordination: 6,
      geometries: ['octahedral', 'square_planar', 'tetrahedral']
    });

    this.coordinationConstraints.set('Sn', {
      atomType: 'Sn',
      minCoordination: 4,
      maxCoordination: 6,
      preferredCoordination: 6,
      geometries: ['octahedral', 'tetrahedral']
    });

    // X位离子配位约束
    this.coordinationConstraints.set('I', {
      atomType: 'I',
      minCoordination: 1,
      maxCoordination: 4,
      preferredCoordination: 2,
      geometries: ['linear', 'bent', 'trigonal']
    });

    this.coordinationConstraints.set('Br', {
      atomType: 'Br',
      minCoordination: 1,
      maxCoordination: 4,
      preferredCoordination: 2,
      geometries: ['linear', 'bent', 'trigonal']
    });

    this.coordinationConstraints.set('Cl', {
      atomType: 'Cl',
      minCoordination: 1,
      maxCoordination: 4,
      preferredCoordination: 2,
      geometries: ['linear', 'bent', 'trigonal']
    });

    // 键长约束
    this.bondLengthConstraints.set('Pb-I', {
      bondType: 'Pb-I',
      minLength: 2.8,
      maxLength: 3.5,
      idealLength: 3.15,
      tolerance: 0.1
    });

    this.bondLengthConstraints.set('Pb-Br', {
      bondType: 'Pb-Br',
      minLength: 2.6,
      maxLength: 3.2,
      idealLength: 2.94,
      tolerance: 0.1
    });

    this.bondLengthConstraints.set('Pb-Cl', {
      bondType: 'Pb-Cl',
      minLength: 2.4,
      maxLength: 3.0,
      idealLength: 2.83,
      tolerance: 0.1
    });

    this.bondLengthConstraints.set('Sn-I', {
      bondType: 'Sn-I',
      minLength: 2.7,
      maxLength: 3.3,
      idealLength: 3.05,
      tolerance: 0.1
    });

    // 电荷平衡约束
    this.chargeBalanceConstraints.push({
      cationCharge: 1, // A位 +1
      anionCharge: -1, // X位 -1
      totalCharge: 0,
      tolerance: 0.1
    });
  }

  /**
   * 验证原子配位数约束
   */
  validateCoordinationNumbers(structure: any): { valid: boolean; violations: string[] } {
    const violations: string[] = [];
    
    for (const atom of structure.atoms) {
      const constraint = this.coordinationConstraints.get(atom.element);
      if (!constraint) continue;

      const coordination = this.calculateCoordinationNumber(atom, structure);
      
      if (coordination < constraint.minCoordination) {
        violations.push(
          `${atom.element} coordination ${coordination} below minimum ${constraint.minCoordination}`
        );
      }
      
      if (coordination > constraint.maxCoordination) {
        violations.push(
          `${atom.element} coordination ${coordination} above maximum ${constraint.maxCoordination}`
        );
      }
    }

    return {
      valid: violations.length === 0,
      violations
    };
  }

  /**
   * 验证键长约束
   */
  validateBondLengths(structure: any): { valid: boolean; violations: string[] } {
    const violations: string[] = [];

    for (const bond of structure.bonds) {
      const bondType = `${bond.atom1.element}-${bond.atom2.element}`;
      const reverseBondType = `${bond.atom2.element}-${bond.atom1.element}`;
      
      const constraint = this.bondLengthConstraints.get(bondType) || 
                        this.bondLengthConstraints.get(reverseBondType);
      
      if (!constraint) continue;

      const bondLength = this.calculateBondLength(bond.atom1, bond.atom2);
      
      if (bondLength < constraint.minLength || bondLength > constraint.maxLength) {
        violations.push(
          `${bondType} bond length ${bondLength.toFixed(3)}Å outside range [${constraint.minLength}, ${constraint.maxLength}]`
        );
      }
    }

    return {
      valid: violations.length === 0,
      violations
    };
  }

  /**
   * 验证电荷平衡
   */
  validateChargeBalance(structure: any): { valid: boolean; violations: string[] } {
    const violations: string[] = [];
    
    const totalCharge = structure.atoms.reduce((sum: number, atom: any) => 
      sum + (atom.formalCharge || 0), 0
    );

    for (const constraint of this.chargeBalanceConstraints) {
      if (Math.abs(totalCharge - constraint.totalCharge) > constraint.tolerance) {
        violations.push(
          `Total charge ${totalCharge} deviates from expected ${constraint.totalCharge} by more than ${constraint.tolerance}`
        );
      }
    }

    return {
      valid: violations.length === 0,
      violations
    };
  }

  /**
   * 验证钙钛矿结构的容忍因子
   */
  validateToleranceFactor(structure: any): { valid: boolean; toleranceFactor: number; violations: string[] } {
    const violations: string[] = [];
    
    // 获取A, B, X离子半径
    const aRadius = this.getIonicRadius(structure.aIon);
    const bRadius = this.getIonicRadius(structure.bIon);
    const xRadius = this.getIonicRadius(structure.xIon);

    // 计算容忍因子 t = (rA + rX) / [√2 × (rB + rX)]
    const toleranceFactor = (aRadius + xRadius) / (Math.sqrt(2) * (bRadius + xRadius));

    // 钙钛矿稳定范围通常为 0.8 < t < 1.1
    if (toleranceFactor < 0.8 || toleranceFactor > 1.1) {
      violations.push(
        `Tolerance factor ${toleranceFactor.toFixed(3)} outside stable range [0.8, 1.1]`
      );
    }

    return {
      valid: violations.length === 0,
      toleranceFactor,
      violations
    };
  }

  /**
   * 验证八面体倾斜因子
   */
  validateOctahedralTilting(structure: any): { valid: boolean; tiltAngle: number; violations: string[] } {
    const violations: string[] = [];
    
    // 计算BX6八面体的倾斜角度
    const tiltAngle = this.calculateOctahedralTilt(structure);
    
    // 过度倾斜会导致结构不稳定
    if (tiltAngle > 15) {
      violations.push(
        `Octahedral tilt angle ${tiltAngle.toFixed(1)}° exceeds stability limit of 15°`
      );
    }

    return {
      valid: violations.length === 0,
      tiltAngle,
      violations
    };
  }

  /**
   * 综合结构验证
   */
  validateStructure(structure: any): {
    valid: boolean;
    stability: StabilityMetrics;
    violations: string[];
    recommendations: string[];
  } {
    const allViolations: string[] = [];
    const recommendations: string[] = [];

    // 执行各项验证
    const coordResult = this.validateCoordinationNumbers(structure);
    const bondResult = this.validateBondLengths(structure);
    const chargeResult = this.validateChargeBalance(structure);
    const toleranceResult = this.validateToleranceFactor(structure);
    const tiltResult = this.validateOctahedralTilting(structure);

    allViolations.push(...coordResult.violations);
    allViolations.push(...bondResult.violations);
    allViolations.push(...chargeResult.violations);
    allViolations.push(...toleranceResult.violations);
    allViolations.push(...tiltResult.violations);

    // 计算稳定性指标
    const stability: StabilityMetrics = {
      structuralStability: this.calculateStructuralStability(structure),
      thermodynamicStability: this.calculateThermodynamicStability(structure),
      coordinationStability: coordResult.valid ? 1.0 : 0.5,
      chargeBalanceScore: chargeResult.valid ? 1.0 : 0.0,
      overallStability: 0
    };

    stability.overallStability = (
      stability.structuralStability * 0.3 +
      stability.thermodynamicStability * 0.3 +
      stability.coordinationStability * 0.2 +
      stability.chargeBalanceScore * 0.2
    );

    // 生成优化建议
    if (toleranceResult.toleranceFactor < 0.8) {
      recommendations.push("Consider using larger A-site cation to increase tolerance factor");
    } else if (toleranceResult.toleranceFactor > 1.1) {
      recommendations.push("Consider using smaller A-site cation to decrease tolerance factor");
    }

    if (tiltResult.tiltAngle > 10) {
      recommendations.push("Octahedral tilting detected - consider strain engineering or composition tuning");
    }

    if (!chargeResult.valid) {
      recommendations.push("Adjust doping concentration to achieve charge neutrality");
    }

    return {
      valid: allViolations.length === 0,
      stability,
      violations: allViolations,
      recommendations
    };
  }

  private calculateCoordinationNumber(atom: any, structure: any): number {
    let coordination = 0;
    const cutoffDistance = 4.0; // Å

    for (const neighbor of structure.atoms) {
      if (neighbor.id === atom.id) continue;
      
      const distance = this.calculateDistance(atom.position, neighbor.position);
      if (distance < cutoffDistance) {
        coordination++;
      }
    }

    return coordination;
  }

  private calculateBondLength(atom1: any, atom2: any): number {
    return this.calculateDistance(atom1.position, atom2.position);
  }

  private calculateDistance(pos1: number[], pos2: number[]): number {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) +
      Math.pow(pos1[1] - pos2[1], 2) +
      Math.pow(pos1[2] - pos2[2], 2)
    );
  }

  private getIonicRadius(ion: string): number {
    const radii: { [key: string]: number } = {
      'Cs': 1.67,
      'CH3NH3': 2.17,
      'HC(NH2)2': 2.53,
      'Pb': 1.19,
      'Sn': 1.10,
      'I': 2.20,
      'Br': 1.96,
      'Cl': 1.81
    };
    
    return radii[ion] || 1.0;
  }

  private calculateOctahedralTilt(structure: any): number {
    // 简化计算：基于B-X键与z轴的夹角
    // 实际应用中需要更复杂的几何分析
    return Math.random() * 20; // 占位符实现
  }

  private calculateStructuralStability(structure: any): number {
    // 基于原子位移和应变的结构稳定性评估
    // 实际实现需要考虑声子计算等
    return Math.exp(-structure.totalEnergy / 100) || 0.8;
  }

  private calculateThermodynamicStability(structure: any): number {
    // 基于形成能和相分解能的热力学稳定性
    const formationEnergy = structure.formationEnergy || 0;
    return Math.exp(-Math.abs(formationEnergy) / 50);
  }

  /**
   * 生成结构优化建议
   */
  generateOptimizationSuggestions(structure: any, violations: string[]): string[] {
    const suggestions: string[] = [];

    for (const violation of violations) {
      if (violation.includes('coordination')) {
        suggestions.push("Consider adjusting lattice parameters to optimize coordination environment");
      }
      
      if (violation.includes('bond length')) {
        suggestions.push("Fine-tune atomic positions to achieve ideal bond lengths");
      }
      
      if (violation.includes('charge')) {
        suggestions.push("Balance ionic charges through controlled doping or defect engineering");
      }
      
      if (violation.includes('tolerance factor')) {
        suggestions.push("Optimize A-site cation selection for improved structural stability");
      }
    }

    // 去重
    return Array.from(new Set(suggestions));
  }
}

export default StructureConstraintValidator;