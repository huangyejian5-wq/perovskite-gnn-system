import * as math from 'mathjs';

export interface PredictionConfig {
  temperature: number;
  pressure: number;
  humidity: number;
}

export interface PredictionResults {
  bandgap: number;
  plqy: number;
  stability: number;
  emissionWavelength: number;
  efficiency: number;
  confidence: number;
}

export class PerformancePredictionModel {
  private weights: {
    bandgap: number[];
    plqy: number[];
    stability: number[];
    emission: number[];
    efficiency: number[];
  } = {
    bandgap: [],
    plqy: [],
    stability: [],
    emission: [],
    efficiency: []
  };

  constructor() {
    this.initializeWeights();
  }

  private initializeWeights() {
    const featureDim = 64; // Expected GNN output dimension
    
    this.weights = {
      bandgap: Array(featureDim + 3).fill(0).map(() => (Math.random() - 0.5) * 0.1),
      plqy: Array(featureDim + 3).fill(0).map(() => (Math.random() - 0.5) * 0.1), 
      stability: Array(featureDim + 3).fill(0).map(() => (Math.random() - 0.5) * 0.1),
      emission: Array(featureDim + 3).fill(0).map(() => (Math.random() - 0.5) * 0.1),
      efficiency: Array(featureDim + 3).fill(0).map(() => (Math.random() - 0.5) * 0.1)
    };
  }

  async predict(
    gnnFeatures: number[],
    conditions: PredictionConfig
  ): Promise<PredictionResults> {
    // Simulate realistic computation time
    await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200));

    // Combine GNN features with environmental conditions
    const environmentalFeatures = [
      (conditions.temperature - 298) / 100, // Normalized temperature
      (conditions.pressure - 1) / 10, // Normalized pressure  
      conditions.humidity / 100 // Normalized humidity
    ];

    const combinedFeatures = [...gnnFeatures, ...environmentalFeatures];
    
    // Predict properties using simple linear combinations with realistic physics constraints
    const bandgap = this.predictBandgap(combinedFeatures);
    const plqy = this.predictPLQY(combinedFeatures, bandgap);
    const stability = this.predictStability(combinedFeatures, conditions);
    const emissionWavelength = this.predictEmissionWavelength(bandgap);
    const efficiency = this.predictEfficiency(plqy, stability);
    const confidence = this.calculateConfidence(combinedFeatures);

    return {
      bandgap,
      plqy,
      stability,
      emissionWavelength,
      efficiency,
      confidence
    };
  }

  private predictBandgap(features: number[]): number {
    // Simple weighted sum with physics constraints
    let bandgap = 0;
    for (let i = 0; i < Math.min(features.length, this.weights.bandgap.length); i++) {
      bandgap += features[i] * this.weights.bandgap[i];
    }
    
    // Apply realistic perovskite bandgap range (1.2 - 3.5 eV)
    bandgap = 2.0 + Math.tanh(bandgap) * 0.8;
    return Math.max(1.2, Math.min(3.5, bandgap));
  }

  private predictPLQY(features: number[], bandgap: number): number {
    let plqy = 0;
    for (let i = 0; i < Math.min(features.length, this.weights.plqy.length); i++) {
      plqy += features[i] * this.weights.plqy[i];
    }

    // PLQY correlation with bandgap (optimal around 1.5-2.5 eV)
    const bandgapFactor = Math.exp(-Math.pow(bandgap - 1.8, 2) / 0.5);
    plqy = (50 + Math.tanh(plqy) * 40) * bandgapFactor;
    
    return Math.max(1, Math.min(99, plqy));
  }

  private predictStability(features: number[], conditions: PredictionConfig): number {
    let stability = 0;
    for (let i = 0; i < Math.min(features.length, this.weights.stability.length); i++) {
      stability += features[i] * this.weights.stability[i];
    }

    // Environmental effects on stability
    const tempFactor = Math.exp(-(conditions.temperature - 298) / 100);
    const humidityFactor = Math.exp(-conditions.humidity / 200);
    
    stability = (70 + Math.tanh(stability) * 25) * tempFactor * humidityFactor;
    
    return Math.max(10, Math.min(95, stability));
  }

  private predictEmissionWavelength(bandgap: number): number {
    // Direct relation: E(eV) = hc/λ(nm) ≈ 1240/λ
    const wavelength = 1240 / bandgap;
    
    // Add some variation but keep within realistic perovskite emission range
    const variation = (Math.random() - 0.5) * 40;
    
    return Math.max(400, Math.min(800, wavelength + variation));
  }

  private predictEfficiency(plqy: number, stability: number): number {
    // Efficiency correlates with PLQY and stability
    const baseEfficiency = plqy * stability / 5000; // Scale down
    const efficiency = baseEfficiency * (0.8 + Math.random() * 0.4);
    
    return Math.max(1, Math.min(25, efficiency));
  }

  private calculateConfidence(features: number[]): number {
    // Confidence based on feature magnitudes and consistency
    const avgMagnitude = features.reduce((sum, f) => sum + Math.abs(f), 0) / features.length;
    const variance = this.calculateVariance(features);
    
    // High confidence for moderate feature magnitudes and low variance
    const magnitudeFactor = Math.exp(-Math.pow(avgMagnitude - 0.5, 2) / 0.5);
    const consistencyFactor = Math.exp(-variance / 2);
    
    const confidence = magnitudeFactor * consistencyFactor;
    
    return Math.max(0.6, Math.min(0.98, confidence));
  }

  private calculateVariance(values: number[]): number {
    if (values.length === 0) return 0;
    
    const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
    const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
    
    return variance;
  }

  // Method to get prediction explanations
  getExplanation(results: PredictionResults): string {
    const explanations = [];
    
    if (results.bandgap < 1.5) {
      explanations.push("窄带隙适合近红外应用");
    } else if (results.bandgap > 2.5) {
      explanations.push("宽带隙适合蓝光应用");
    } else {
      explanations.push("中等带隙适合绿光-红光应用");
    }
    
    if (results.plqy > 80) {
      explanations.push("高PLQY表明优异的发光性能");
    } else if (results.plqy < 30) {
      explanations.push("PLQY较低,可能存在非辐射复合");
    }
    
    if (results.stability < 50) {
      explanations.push("稳定性较差,需要封装保护");
    } else if (results.stability > 80) {
      explanations.push("高稳定性适合器件应用");
    }
    
    return explanations.join("; ");
  }
}