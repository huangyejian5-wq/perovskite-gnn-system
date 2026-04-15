import * as math from 'mathjs';

// Multi-head attention configuration
export interface AttentionConfig {
  numHeads: number;
  headDim: number;
  dropoutRate: number;
  usePositionalEncoding: boolean;
  maxSequenceLength: number;
}

// Multi-head attention mechanism
export class MultiHeadAttention {
  private numHeads: number;
  private headDim: number;
  private outputDim: number;
  private queryWeights: number[][][] = [];
  private keyWeights: number[][][] = [];
  private valueWeights: number[][][] = [];
  private outputWeights: number[][] = [];
  private dropoutRate: number;

  constructor(config: AttentionConfig) {
    this.numHeads = config.numHeads;
    this.headDim = config.headDim;
    this.outputDim = this.numHeads * this.headDim;
    this.dropoutRate = config.dropoutRate;
    this.initializeWeights();
  }

  private initializeWeights() {
    const scale = Math.sqrt(1.0 / this.headDim);
    
    this.queryWeights = Array(this.numHeads).fill(0).map(() =>
      this.randomMatrix(this.headDim, this.outputDim, scale)
    );
    this.keyWeights = Array(this.numHeads).fill(0).map(() =>
      this.randomMatrix(this.headDim, this.outputDim, scale)
    );
    this.valueWeights = Array(this.numHeads).fill(0).map(() =>
      this.randomMatrix(this.headDim, this.outputDim, scale)
    );
    this.outputWeights = this.randomMatrix(this.outputDim, this.outputDim, scale);
  }

  private randomMatrix(rows: number, cols: number, scale: number): number[][] {
    return Array(rows).fill(0).map(() =>
      Array(cols).fill(0).map(() => (Math.random() - 0.5) * 2 * scale)
    );
  }

  forward(
    queries: number[][],
    keys: number[][],
    values: number[][],
    mask?: number[][]
  ): number[][] {
    const batchSize = queries.length;
    const headOutputs: number[][][] = [];

    // Compute attention for each head
    for (let h = 0; h < this.numHeads; h++) {
      const Q = this.matrixMultiply(queries, this.queryWeights[h]);
      const K = this.matrixMultiply(keys, this.keyWeights[h]);
      const V = this.matrixMultiply(values, this.valueWeights[h]);

      const attention = this.scaledDotProductAttention(Q, K, V, mask);
      headOutputs.push(attention);
    }

    // Concatenate heads
    const concatenated = this.concatenateHeads(headOutputs);
    
    // Final linear transformation
    return this.matrixMultiply(concatenated, this.outputWeights);
  }

  private scaledDotProductAttention(
    Q: number[][],
    K: number[][],
    V: number[][],
    mask?: number[][]
  ): number[][] {
    // Q * K^T
    const scores = this.matrixMultiply(Q, this.transpose(K));
    
    // Scale by sqrt(d_k)
    const scaledScores = scores.map(row =>
      row.map(score => score / Math.sqrt(this.headDim))
    );

    // Apply mask if provided
    if (mask) {
      for (let i = 0; i < scaledScores.length; i++) {
        for (let j = 0; j < scaledScores[i].length; j++) {
          if (mask[i][j] === 0) {
            scaledScores[i][j] = -Infinity;
          }
        }
      }
    }

    // Softmax
    const attentionWeights = this.softmax(scaledScores);
    
    // Apply dropout (simplified)
    const droppedWeights = this.applyDropout(attentionWeights, this.dropoutRate);
    
    // Attention * V
    return this.matrixMultiply(droppedWeights, V);
  }

  private matrixMultiply(A: number[][], B: number[][]): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < A.length; i++) {
      result[i] = [];
      for (let j = 0; j < B[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < B.length; k++) {
          sum += A[i][k] * B[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }

  private transpose(matrix: number[][]): number[][] {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  }

  private softmax(matrix: number[][]): number[][] {
    return matrix.map(row => {
      const maxVal = Math.max(...row);
      const expRow = row.map(val => Math.exp(val - maxVal));
      const sum = expRow.reduce((a, b) => a + b, 0);
      return expRow.map(val => val / sum);
    });
  }

  private applyDropout(matrix: number[][], rate: number): number[][] {
    return matrix.map(row =>
      row.map(val => Math.random() > rate ? val / (1 - rate) : 0)
    );
  }

  private concatenateHeads(headOutputs: number[][][]): number[][] {
    const seqLen = headOutputs[0].length;
    const result: number[][] = [];
    
    for (let i = 0; i < seqLen; i++) {
      const concatenatedRow: number[] = [];
      for (const head of headOutputs) {
        concatenatedRow.push(...head[i]);
      }
      result.push(concatenatedRow);
    }
    
    return result;
  }
}

//  Gated fusion mechanism
export class GatedFusionMechanism {
  private gateWeights: number[][] = [];
  private transformWeights: number[][] = [];
  private bias: number[] = [];

  constructor(private inputDim: number, private outputDim: number) {
    this.initializeWeights();
  }

  private initializeWeights() {
    const scale = Math.sqrt(2.0 / (this.inputDim + this.outputDim));
    
    this.gateWeights = this.randomMatrix(this.outputDim, this.inputDim, scale);
    this.transformWeights = this.randomMatrix(this.outputDim, this.inputDim, scale);
    this.bias = Array(this.outputDim).fill(0).map(() => (Math.random() - 0.5) * 0.1);
  }

  private randomMatrix(rows: number, cols: number, scale: number): number[][] {
    return Array(rows).fill(0).map(() =>
      Array(cols).fill(0).map(() => (Math.random() - 0.5) * 2 * scale)
    );
  }

  forward(inputs: number[][]): number[][] {
    return inputs.map(input => {
      // Compute gate values (sigmoid activation)
      const gateValues = this.matrixVectorMultiply(this.gateWeights, input)
        .map((val, i) => 1 / (1 + Math.exp(-(val + this.bias[i]))));
      
      // Compute transformed values (tanh activation)
      const transformedValues = this.matrixVectorMultiply(this.transformWeights, input)
        .map((val, i) => Math.tanh(val + this.bias[i]));
      
      // Gated fusion
      return gateValues.map((gate, i) => gate * transformedValues[i]);
    });
  }

  private matrixVectorMultiply(matrix: number[][], vector: number[]): number[] {
    return matrix.map(row =>
      row.reduce((sum, val, idx) => sum + val * vector[idx], 0)
    );
  }
}

// Positional encoding for spatial awareness
export class PositionalEncoding {
  private encodings: number[][] = [];

  constructor(private maxLength: number, private dim: number) {
    this.generateEncodings();
  }

  private generateEncodings() {
    this.encodings = Array(this.maxLength).fill(0).map((_, pos) =>
      Array(this.dim).fill(0).map((_, i) => {
        if (i % 2 === 0) {
          return Math.sin(pos / Math.pow(10000, (2 * (i / 2)) / this.dim));
        } else {
          return Math.cos(pos / Math.pow(10000, (2 * ((i - 1) / 2)) / this.dim));
        }
      })
    );
  }

  getEncoding(position: number): number[] {
    if (position >= this.maxLength) {
      // For positions beyond max length, use the last encoding
      return this.encodings[this.maxLength - 1];
    }
    return this.encodings[position];
  }

  addPositionalEncoding(features: number[][]): number[][] {
    return features.map((feature, pos) =>
      feature.map((val, i) => val + this.getEncoding(pos)[i] || 0)
    );
  }
}

// Adaptive attention fusion combining multi-head attention with gating
export class AdaptiveAttentionFusion {
  private multiHeadAttention: MultiHeadAttention;
  private gatedFusion: GatedFusionMechanism;
  private positionalEncoding: PositionalEncoding;
  private layerNorm1: LayerNormalization;
  private layerNorm2: LayerNormalization;
  private feedForward: FeedForwardNetwork;

  constructor(config: AttentionConfig, inputDim: number, outputDim: number) {
    this.multiHeadAttention = new MultiHeadAttention(config);
    this.gatedFusion = new GatedFusionMechanism(inputDim, outputDim);
    this.positionalEncoding = new PositionalEncoding(config.maxSequenceLength, inputDim);
    this.layerNorm1 = new LayerNormalization(inputDim);
    this.layerNorm2 = new LayerNormalization(outputDim);
    this.feedForward = new FeedForwardNetwork(outputDim, outputDim * 2, outputDim);
  }

  forward(
    atomicFeatures: number[][],
    fragmentFeatures: number[][],
    crystalFeatures: number[][],
    mask?: number[][]
  ): number[][] {
    // Add positional encoding
    const posEncodedAtomic = this.positionalEncoding.addPositionalEncoding(atomicFeatures);
    const posEncodedFragment = this.positionalEncoding.addPositionalEncoding(fragmentFeatures);
    const posEncodedCrystal = this.positionalEncoding.addPositionalEncoding(crystalFeatures);

    // Multi-scale attention
    const atomicAttention = this.multiHeadAttention.forward(
      posEncodedAtomic, posEncodedAtomic, posEncodedAtomic, mask
    );
    const fragmentAttention = this.multiHeadAttention.forward(
      posEncodedFragment, posEncodedAtomic, posEncodedAtomic, mask
    );
    const crystalAttention = this.multiHeadAttention.forward(
      posEncodedCrystal, posEncodedFragment, posEncodedFragment, mask
    );

    // Residual connections and layer normalization
    const atomicResidual = this.layerNorm1.normalize([
      atomicFeatures.map((feat, i) => 
        feat.map((val, j) => val + atomicAttention[i][j])
      )
    ])[0];

    // Combine multi-scale features
    const combinedFeatures = this.combineMultiScaleFeatures(
      atomicResidual,
      fragmentAttention,
      crystalAttention
    );

    // Gated fusion
    const fusedFeatures = this.gatedFusion.forward(combinedFeatures);

    // Feed forward with residual connection
    const ffOutput = this.feedForward.forward(fusedFeatures);
    const finalOutput = fusedFeatures.map((feat, i) =>
      feat.map((val, j) => val + ffOutput[i][j])
    );

    return this.layerNorm2.normalize([finalOutput])[0];
  }

  private combineMultiScaleFeatures(
    atomic: number[][],
    fragment: number[][],
    crystal: number[][]
  ): number[][] {
    const maxLength = Math.max(atomic.length, fragment.length, crystal.length);
    const combined: number[][] = [];

    for (let i = 0; i < maxLength; i++) {
      const atomicFeat = i < atomic.length ? atomic[i] : new Array(atomic[0]?.length || 0).fill(0);
      const fragmentFeat = i < fragment.length ? fragment[i] : new Array(fragment[0]?.length || 0).fill(0);
      const crystalFeat = i < crystal.length ? crystal[i] : new Array(crystal[0]?.length || 0).fill(0);
      
      // Concatenate features from different scales
      combined.push([...atomicFeat, ...fragmentFeat, ...crystalFeat]);
    }

    return combined;
  }
}

// Feed forward network for final transformation
export class FeedForwardNetwork {
  private weights1: number[][] = [];
  private bias1: number[] = [];
  private weights2: number[][] = [];
  private bias2: number[] = [];

  constructor(
    private inputDim: number,
    private hiddenDim: number,
    private outputDim: number
  ) {
    this.initializeWeights();
  }

  private initializeWeights() {
    const scale1 = Math.sqrt(2.0 / (this.inputDim + this.hiddenDim));
    const scale2 = Math.sqrt(2.0 / (this.hiddenDim + this.outputDim));

    this.weights1 = this.randomMatrix(this.hiddenDim, this.inputDim, scale1);
    this.bias1 = Array(this.hiddenDim).fill(0);
    this.weights2 = this.randomMatrix(this.outputDim, this.hiddenDim, scale2);
    this.bias2 = Array(this.outputDim).fill(0);
  }

  private randomMatrix(rows: number, cols: number, scale: number): number[][] {
    return Array(rows).fill(0).map(() =>
      Array(cols).fill(0).map(() => (Math.random() - 0.5) * 2 * scale)
    );
  }

  forward(inputs: number[][]): number[][] {
    return inputs.map(input => {
      // First layer with ReLU activation
      const hidden = this.matrixVectorMultiply(this.weights1, input)
        .map((val, i) => Math.max(0, val + this.bias1[i]));
      
      // Second layer (linear)
      return this.matrixVectorMultiply(this.weights2, hidden)
        .map((val, i) => val + this.bias2[i]);
    });
  }

  private matrixVectorMultiply(matrix: number[][], vector: number[]): number[] {
    return matrix.map(row =>
      row.reduce((sum, val, idx) => sum + val * vector[idx], 0)
    );
  }
}

// Layer normalization utility
class LayerNormalization {
  constructor(private dim: number, private epsilon: number = 1e-6) {}

  normalize(inputs: number[][][]): number[][][] {
    return inputs.map(batch =>
      batch.map(sequence => {
        const mean = sequence.reduce((sum, val) => sum + val, 0) / sequence.length;
        const variance = sequence.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / sequence.length;
        const std = Math.sqrt(variance + this.epsilon);
        
        return sequence.map(val => (val - mean) / std);
      })
    );
  }
}