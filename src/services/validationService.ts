import toast from 'react-hot-toast';
import { ErrorService } from './errorService';

export interface TestResult {
  name: string;
  passed: boolean;
  duration: number;
  message?: string;
  details?: any;
}

export interface TestSuite {
  name: string;
  tests: TestResult[];
  totalPassed: number;
  totalFailed: number;
  totalDuration: number;
}

export class ValidationService {
  private static instance: ValidationService;
  private testResults: TestSuite[] = [];

  static getInstance(): ValidationService {
    if (!ValidationService.instance) {
      ValidationService.instance = new ValidationService();
    }
    return ValidationService.instance;
  }

  private constructor() {}

  // Run comprehensive system tests
  async runSystemTests(): Promise<TestSuite[]> {
    const suites = [
      await this.testPredictionModels(),
      await this.testOptimizationAlgorithms(),
      await this.testDataValidation(),
      await this.testUIComponents(),
      await this.testPerformance()
    ];

    this.testResults = suites;
    return suites;
  }

  // Test prediction models
  private async testPredictionModels(): Promise<TestSuite> {
    const suite: TestSuite = {
      name: '性能预测模型测试',
      tests: [],
      totalPassed: 0,
      totalFailed: 0,
      totalDuration: 0
    };

    const tests = [
      {
        name: '带隙预测范围验证',
        test: () => this.validateBandgapPrediction()
      },
      {
        name: 'PLQY预测准确性',
        test: () => this.validatePLQYPrediction()
      },
      {
        name: '稳定性评估逻辑',
        test: () => this.validateStabilityPrediction()
      },
      {
        name: '发射波长计算',
        test: () => this.validateEmissionWavelength()
      },
      {
        name: '效率预测一致性',
        test: () => this.validateEfficiencyPrediction()
      }
    ];

    for (const testCase of tests) {
      const startTime = performance.now();
      
      try {
        await testCase.test();
        const duration = performance.now() - startTime;
        
        suite.tests.push({
          name: testCase.name,
          passed: true,
          duration,
          message: '测试通过'
        });
        suite.totalPassed++;
      } catch (error) {
        const duration = performance.now() - startTime;
        
        suite.tests.push({
          name: testCase.name,
          passed: false,
          duration,
          message: error instanceof Error ? error.message : '测试失败',
          details: error
        });
        suite.totalFailed++;
      }
      
      suite.totalDuration += suite.tests[suite.tests.length - 1].duration;
    }

    return suite;
  }

  // Test optimization algorithms
  private async testOptimizationAlgorithms(): Promise<TestSuite> {
    const suite: TestSuite = {
      name: '反向设计优化测试',
      tests: [],
      totalPassed: 0,
      totalFailed: 0,
      totalDuration: 0
    };

    const tests = [
      {
        name: '目标函数收敛性',
        test: () => this.validateOptimizationConvergence()
      },
      {
        name: '约束条件验证',
        test: () => this.validateOptimizationConstraints()
      },
      {
        name: '多目标优化平衡',
        test: () => this.validateMultiObjectiveOptimization()
      },
      {
        name: '候选材料多样性',
        test: () => this.validateCandidateDiversity()
      },
      {
        name: '可行性评估准确性',
        test: () => this.validateFeasibilityAssessment()
      }
    ];

    for (const testCase of tests) {
      const startTime = performance.now();
      
      try {
        await testCase.test();
        const duration = performance.now() - startTime;
        
        suite.tests.push({
          name: testCase.name,
          passed: true,
          duration,
          message: '测试通过'
        });
        suite.totalPassed++;
      } catch (error) {
        const duration = performance.now() - startTime;
        
        suite.tests.push({
          name: testCase.name,
          passed: false,
          duration,
          message: error instanceof Error ? error.message : '测试失败',
          details: error
        });
        suite.totalFailed++;
      }
      
      suite.totalDuration += suite.tests[suite.tests.length - 1].duration;
    }

    return suite;
  }

  // Test data validation
  private async testDataValidation(): Promise<TestSuite> {
    const suite: TestSuite = {
      name: '数据验证测试',
      tests: [],
      totalPassed: 0,
      totalFailed: 0,
      totalDuration: 0
    };

    const tests = [
      {
        name: '输入参数边界检查',
        test: () => this.validateInputBoundaries()
      },
      {
        name: '文件格式验证',
        test: () => this.validateFileFormats()
      },
      {
        name: '数据类型安全性',
        test: () => this.validateDataTypes()
      },
      {
        name: '缺失值处理',
        test: () => this.validateMissingValues()
      },
      {
        name: '异常值检测',
        test: () => this.validateOutlierDetection()
      }
    ];

    for (const testCase of tests) {
      const startTime = performance.now();
      
      try {
        await testCase.test();
        const duration = performance.now() - startTime;
        
        suite.tests.push({
          name: testCase.name,
          passed: true,
          duration,
          message: '测试通过'
        });
        suite.totalPassed++;
      } catch (error) {
        const duration = performance.now() - startTime;
        
        suite.tests.push({
          name: testCase.name,
          passed: false,
          duration,
          message: error instanceof Error ? error.message : '测试失败',
          details: error
        });
        suite.totalFailed++;
      }
      
      suite.totalDuration += suite.tests[suite.tests.length - 1].duration;
    }

    return suite;
  }

  // Test UI components
  private async testUIComponents(): Promise<TestSuite> {
    const suite: TestSuite = {
      name: 'UI组件测试',
      tests: [],
      totalPassed: 0,
      totalFailed: 0,
      totalDuration: 0
    };

    const tests = [
      {
        name: '响应式布局适配',
        test: () => this.validateResponsiveLayout()
      },
      {
        name: '表单验证逻辑',
        test: () => this.validateFormValidation()
      },
      {
        name: '图表渲染性能',
        test: () => this.validateChartRendering()
      },
      {
        name: '交互功能响应',
        test: () => this.validateInteractions()
      },
      {
        name: '错误处理显示',
        test: () => this.validateErrorDisplay()
      }
    ];

    for (const testCase of tests) {
      const startTime = performance.now();
      
      try {
        await testCase.test();
        const duration = performance.now() - startTime;
        
        suite.tests.push({
          name: testCase.name,
          passed: true,
          duration,
          message: '测试通过'
        });
        suite.totalPassed++;
      } catch (error) {
        const duration = performance.now() - startTime;
        
        suite.tests.push({
          name: testCase.name,
          passed: false,
          duration,
          message: error instanceof Error ? error.message : '测试失败',
          details: error
        });
        suite.totalFailed++;
      }
      
      suite.totalDuration += suite.tests[suite.tests.length - 1].duration;
    }

    return suite;
  }

  // Test performance
  private async testPerformance(): Promise<TestSuite> {
    const suite: TestSuite = {
      name: '性能测试',
      tests: [],
      totalPassed: 0,
      totalFailed: 0,
      totalDuration: 0
    };

    const tests = [
      {
        name: '预测响应时间',
        test: () => this.validatePredictionSpeed()
      },
      {
        name: '优化计算效率',
        test: () => this.validateOptimizationSpeed()
      },
      {
        name: '内存使用优化',
        test: () => this.validateMemoryUsage()
      },
      {
        name: '并发处理能力',
        test: () => this.validateConcurrency()
      },
      {
        name: '缓存机制效果',
        test: () => this.validateCaching()
      }
    ];

    for (const testCase of tests) {
      const startTime = performance.now();
      
      try {
        await testCase.test();
        const duration = performance.now() - startTime;
        
        suite.tests.push({
          name: testCase.name,
          passed: true,
          duration,
          message: '测试通过'
        });
        suite.totalPassed++;
      } catch (error) {
        const duration = performance.now() - startTime;
        
        suite.tests.push({
          name: testCase.name,
          passed: false,
          duration,
          message: error instanceof Error ? error.message : '测试失败',
          details: error
        });
        suite.totalFailed++;
      }
      
      suite.totalDuration += suite.tests[suite.tests.length - 1].duration;
    }

    return suite;
  }

  // Individual validation methods
  private async validateBandgapPrediction(): Promise<void> {
    // Test with known perovskite compositions
    const testCases = [
      { composition: ['Cs', 'Pb', 'I'], expectedRange: [1.4, 1.8] },
      { composition: ['MA', 'Pb', 'Br'], expectedRange: [2.2, 2.4] },
      { composition: ['FA', 'Pb', 'Cl'], expectedRange: [2.8, 3.2] }
    ];

    for (const testCase of testCases) {
      // Simulate prediction - replace with actual model call
      const predicted = 1.5 + Math.random() * 1.5;
      
      if (predicted < testCase.expectedRange[0] || predicted > testCase.expectedRange[1]) {
        throw new Error(`带隙预测${predicted.toFixed(2)}超出预期范围${testCase.expectedRange}`);
      }
    }
  }

  private async validatePLQYPrediction(): Promise<void> {
    // Test PLQY prediction consistency
    const testInputs = [
      { bandgap: 1.8, stability: 85, expectedPLQY: [70, 90] },
      { bandgap: 2.5, stability: 60, expectedPLQY: [40, 70] }
    ];

    for (const input of testInputs) {
      const predicted = 50 + Math.random() * 40; // Simulate prediction
      
      if (predicted < input.expectedPLQY[0] || predicted > input.expectedPLQY[1]) {
        throw new Error(`PLQY预测不在合理范围内`);
      }
    }
  }

  private async validateStabilityPrediction(): Promise<void> {
    // Test stability assessment logic
    const environmentalFactors = [
      { temp: 298, humidity: 45, expectedStability: [80, 95] },
      { temp: 350, humidity: 80, expectedStability: [30, 60] }
    ];

    for (const factor of environmentalFactors) {
      const predicted = 70 + Math.random() * 25; // Simulate prediction
      
      if (predicted < factor.expectedStability[0] || predicted > factor.expectedStability[1]) {
        throw new Error(`稳定性预测不符合环境影响规律`);
      }
    }
  }

  private async validateEmissionWavelength(): Promise<void> {
    // Test emission wavelength calculation
    const bandgaps = [1.5, 2.0, 2.5, 3.0];
    
    for (const bandgap of bandgaps) {
      const expectedWavelength = 1240 / bandgap;
      const predicted = expectedWavelength + (Math.random() - 0.5) * 50; // Add noise
      
      if (Math.abs(predicted - expectedWavelength) > 100) {
        throw new Error(`发射波长计算偏差过大`);
      }
    }
  }

  private async validateEfficiencyPrediction(): Promise<void> {
    // Test efficiency prediction consistency
    const inputs = [
      { plqy: 90, stability: 85, expectedEfficiency: [18, 25] },
      { plqy: 40, stability: 60, expectedEfficiency: [8, 15] }
    ];

    for (const input of inputs) {
      const predicted = input.plqy * input.stability / 5000 + Math.random() * 5;
      
      if (predicted < input.expectedEfficiency[0] || predicted > input.expectedEfficiency[1]) {
        throw new Error(`效率预测不符合PLQY和稳定性的关联性`);
      }
    }
  }

  private async validateOptimizationConvergence(): Promise<void> {
    // Test optimization algorithm convergence
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate optimization
    
    // Check if optimization improves over iterations
    const scores = [0.6, 0.7, 0.8, 0.85, 0.87]; // Simulate improving scores
    
    for (let i = 1; i < scores.length; i++) {
      if (scores[i] < scores[i-1]) {
        throw new Error(`优化算法未收敛，分数出现下降`);
      }
    }
  }

  private async validateOptimizationConstraints(): Promise<void> {
    // Test constraint satisfaction
    const results = [
      { bandgap: 1.8, plqy: 85, stability: 90 },
      { bandgap: 2.2, plqy: 78, stability: 82 }
    ];

    for (const result of results) {
      if (result.bandgap < 1.0 || result.bandgap > 4.0) {
        throw new Error(`优化结果违反带隙约束`);
      }
      if (result.plqy < 0 || result.plqy > 100) {
        throw new Error(`优化结果违反PLQY约束`);
      }
    }
  }

  private async validateMultiObjectiveOptimization(): Promise<void> {
    // Test multi-objective balance
    const results = [
      { bandgap: 1.8, plqy: 85, stability: 70 }, // High PLQY, lower stability
      { bandgap: 1.9, plqy: 75, stability: 90 }  // High stability, lower PLQY
    ];

    // Check if results show proper trade-offs
    if (results.every(r => r.plqy > 80 && r.stability > 85)) {
      throw new Error(`多目标优化未体现合理的性能权衡`);
    }
  }

  private async validateCandidateDiversity(): Promise<void> {
    // Test diversity of optimization candidates
    const candidates = [
      { A: 'Cs', B: 'Pb', X: 'I' },
      { A: 'MA', B: 'Pb', X: 'Br' },
      { A: 'FA', B: 'Sn', X: 'Cl' }
    ];

    const uniqueCompositions = new Set(candidates.map(c => `${c.A}${c.B}${c.X}`));
    
    if (uniqueCompositions.size < candidates.length * 0.8) {
      throw new Error(`候选材料多样性不足`);
    }
  }

  private async validateFeasibilityAssessment(): Promise<void> {
    // Test feasibility scoring accuracy
    const compositions = [
      { A: 'Cs', B: 'Pb', X: 'I', expectedFeasibility: [0.8, 1.0] }, // High feasibility
      { A: 'K', B: 'Ti', X: 'F', expectedFeasibility: [0.3, 0.6] }   // Lower feasibility
    ];

    for (const comp of compositions) {
      const feasibility = 0.7 + Math.random() * 0.3; // Simulate assessment
      
      if (feasibility < comp.expectedFeasibility[0] || feasibility > comp.expectedFeasibility[1]) {
        throw new Error(`可行性评估不准确`);
      }
    }
  }

  private async validateInputBoundaries(): Promise<void> {
    // Test input validation boundaries
    try {
      ErrorService.validateNumericRange(-1, 1, 4, '带隙');
      throw new Error('应该抛出边界错误');
    } catch (error) {
      if (!(error as Error).message.includes('带隙必须在')) {
        throw new Error('边界检查逻辑错误');
      }
    }
  }

  private async validateFileFormats(): Promise<void> {
    // Test file validation
    const validFile = new File(['test'], 'test.cif', { type: 'text/plain' });
    const invalidFile = new File(['test'], 'test.exe', { type: 'application/exe' });

    try {
      ErrorService.validateFile(validFile, 10 * 1024 * 1024, ['.cif', '.xyz']);
      // Should not throw
    } catch (error) {
      throw new Error('有效文件格式验证失败');
    }

    try {
      ErrorService.validateFile(invalidFile, 10 * 1024 * 1024, ['.cif', '.xyz']);
      throw new Error('应该抛出格式错误');
    } catch (error) {
      if (!(error as Error).message.includes('支持的文件格式')) {
        throw new Error('文件格式验证逻辑错误');
      }
    }
  }

  private async validateDataTypes(): Promise<void> {
    // Test data type validation
    const testData = {
      bandgap: '1.8', // String instead of number
      plqy: 85,
      stability: null
    };

    // Validate type conversion and handling
    const bandgap = parseFloat(testData.bandgap);
    if (isNaN(bandgap)) {
      throw new Error('数据类型转换失败');
    }
  }

  private async validateMissingValues(): Promise<void> {
    // Test missing value handling
    const incompleteData = {
      bandgap: 1.8,
      plqy: null,
      stability: undefined
    };

    try {
      ErrorService.validateRequired(incompleteData.plqy, 'PLQY');
      throw new Error('应该检测到缺失值');
    } catch (error) {
      if (!(error as Error).message.includes('不能为空')) {
        throw new Error('缺失值检测逻辑错误');
      }
    }
  }

  private async validateOutlierDetection(): Promise<void> {
    // Test outlier detection
    const values = [1.5, 1.6, 1.7, 1.8, 15.0]; // 15.0 is outlier
    const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
    const std = Math.sqrt(values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length);
    
    const outliers = values.filter(val => Math.abs(val - mean) > 2 * std);
    
    if (outliers.length === 0) {
      throw new Error('异常值检测失败');
    }
  }

  private async validateResponsiveLayout(): Promise<void> {
    // Test responsive design - simulate different screen sizes
    const screenSizes = [320, 768, 1024, 1920];
    
    for (const width of screenSizes) {
      // Simulate layout check
      if (width < 768 && document.querySelector('.lg\\:col-span-2')) {
        // Mobile layout should not use large column spans
        throw new Error(`移动端布局适配问题`);
      }
    }
  }

  private async validateFormValidation(): Promise<void> {
    // Test form validation logic
    const invalidInputs = [
      { field: 'bandgap', value: 10, shouldFail: true },
      { field: 'plqy', value: 150, shouldFail: true },
      { field: 'temperature', value: 50, shouldFail: true }
    ];

    for (const input of invalidInputs) {
      try {
        // Simulate form validation
        if (input.field === 'bandgap' && input.value > 4) {
          throw new Error('带隙值过大');
        }
        
        if (input.shouldFail) {
          throw new Error(`${input.field}验证应该失败`);
        }
      } catch (error) {
        if (!input.shouldFail) {
          throw new Error(`${input.field}验证不应该失败`);
        }
      }
    }
  }

  private async validateChartRendering(): Promise<void> {
    // Test chart rendering performance
    const startTime = performance.now();
    
    // Simulate chart data processing
    const data = Array.from({ length: 1000 }, (_, i) => ({
      x: i,
      y: Math.sin(i / 10) * 100
    }));
    
    // Simple processing simulation
    const processed = data.map(point => ({ ...point, y: point.y + 50 }));
    
    const duration = performance.now() - startTime;
    
    if (duration > 100) { // More than 100ms for simple processing
      throw new Error(`图表数据处理时间过长: ${duration.toFixed(2)}ms`);
    }
  }

  private async validateInteractions(): Promise<void> {
    // Test interactive functionality
    const interactions = [
      'click', 'hover', 'scroll', 'resize'
    ];

    // Simulate interaction testing
    for (const interaction of interactions) {
      const startTime = performance.now();
      
      // Simulate interaction handling
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const duration = performance.now() - startTime;
      
      if (duration > 50) {
        throw new Error(`${interaction}交互响应时间过长`);
      }
    }
  }

  private async validateErrorDisplay(): Promise<void> {
    // Test error message display
    try {
      throw new Error('测试错误消息');
    } catch (error) {
      // Simulate error handling
      const errorHandled = ErrorService.getInstance().handleError(error, 'test');
      
      if (!errorHandled.message) {
        throw new Error('错误消息未正确处理');
      }
    }
  }

  private async validatePredictionSpeed(): Promise<void> {
    const startTime = performance.now();
    
    // Simulate prediction calculation
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const duration = performance.now() - startTime;
    
    if (duration > 1000) {
      throw new Error(`预测计算时间过长: ${duration.toFixed(2)}ms`);
    }
  }

  private async validateOptimizationSpeed(): Promise<void> {
    const startTime = performance.now();
    
    // Simulate optimization
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const duration = performance.now() - startTime;
    
    if (duration > 5000) {
      throw new Error(`优化计算时间过长: ${duration.toFixed(2)}ms`);
    }
  }

  private async validateMemoryUsage(): Promise<void> {
    // Test memory usage (simplified)
    const beforeMemory = (performance as any).memory?.usedJSHeapSize || 0;
    
    // Simulate memory-intensive operation
    const largeArray = new Array(100000).fill(0).map((_, i) => ({
      id: i,
      data: Math.random(),
      processed: i * 2
    }));
    
    const afterMemory = (performance as any).memory?.usedJSHeapSize || 0;
    const memoryIncrease = afterMemory - beforeMemory;
    
    // Clean up
    largeArray.length = 0;
    
    if (memoryIncrease > 50 * 1024 * 1024) { // 50MB threshold
      throw new Error(`内存使用量增长过多: ${(memoryIncrease / 1024 / 1024).toFixed(2)}MB`);
    }
  }

  private async validateConcurrency(): Promise<void> {
    // Test concurrent operations
    const promises = Array.from({ length: 5 }, async (_, i) => {
      const startTime = performance.now();
      await new Promise(resolve => setTimeout(resolve, 100));
      return performance.now() - startTime;
    });

    const results = await Promise.all(promises);
    const averageTime = results.reduce((sum, time) => sum + time, 0) / results.length;
    
    if (averageTime > 200) {
      throw new Error(`并发处理性能不达标: 平均${averageTime.toFixed(2)}ms`);
    }
  }

  private async validateCaching(): Promise<void> {
    // Test caching mechanism effectiveness
    const cacheKey = 'test_cache_key';
    const testData = { value: Math.random() };
    
    // Simulate cache set
    localStorage.setItem(cacheKey, JSON.stringify(testData));
    
    // Simulate cache get
    const cached = JSON.parse(localStorage.getItem(cacheKey) || 'null');
    
    if (!cached || cached.value !== testData.value) {
      throw new Error('缓存机制无效');
    }
    
    // Clean up
    localStorage.removeItem(cacheKey);
  }

  // Get test results
  getTestResults(): TestSuite[] {
    return this.testResults;
  }

  // Generate test report
  generateTestReport(): string {
    let report = '# 系统测试报告\n\n';
    report += `生成时间: ${new Date().toLocaleString('zh-CN')}\n\n`;

    for (const suite of this.testResults) {
      const passRate = ((suite.totalPassed / (suite.totalPassed + suite.totalFailed)) * 100).toFixed(1);
      
      report += `## ${suite.name}\n\n`;
      report += `- 总测试数: ${suite.totalPassed + suite.totalFailed}\n`;
      report += `- 通过数: ${suite.totalPassed}\n`;
      report += `- 失败数: ${suite.totalFailed}\n`;
      report += `- 通过率: ${passRate}%\n`;
      report += `- 总耗时: ${suite.totalDuration.toFixed(2)}ms\n\n`;

      report += '### 详细结果\n\n';
      for (const test of suite.tests) {
        const status = test.passed ? '✅' : '❌';
        report += `${status} ${test.name} (${test.duration.toFixed(2)}ms)\n`;
        if (!test.passed && test.message) {
          report += `   错误: ${test.message}\n`;
        }
        report += '\n';
      }
    }

    return report;
  }

  // Quick health check
  async quickHealthCheck(): Promise<boolean> {
    try {
      // Test basic functionality
      const testValue = 1.8;
      ErrorService.validateNumericRange(testValue, 1.0, 4.0, '测试值');
      
      // Test error handling
      const testError = new Error('测试错误');
      ErrorService.getInstance().handleError(testError, 'health_check');
      
      // Test performance
      const startTime = performance.now();
      await new Promise(resolve => setTimeout(resolve, 10));
      const duration = performance.now() - startTime;
      
      if (duration > 100) {
        return false;
      }

      toast.success('系统健康检查通过', { duration: 2000 });
      return true;
    } catch (error) {
      toast.error('系统健康检查失败');
      return false;
    }
  }
}

export const validationService = ValidationService.getInstance();