import { MolecularGraph, AtomNode, BondEdge } from '../types/molecular';
import * as math from 'mathjs';

// Graph convolution layer interfaces
export interface GraphConvolutionLayer {
  forward(nodeFeatures: number[][], edgeFeatures: number[][], adjacencyMatrix: number[][]): number[][];
  backward(gradients: number[][]): { nodeGrads: number[][], edgeGrads: number[][] };
}

// Message passing neural network
export class MessagePassingLayer implements GraphConvolutionLayer {
  private weights: {
    node: number[][];
    edge: number[][];
    message: number[][];
    update: number[][];
  } = {
    node: [],
    edge: [],
    message: [],
    update: []
  };
  
  constructor(
    private inputDim: number,
    private hiddenDim: number,
    private outputDim: number
  ) {
    this.initializeWeights();
  }

  private initializeWeights() {
    // Xavier initialization
    const scale = Math.sqrt(2.0 / (this.inputDim + this.outputDim));
    
    this.weights = {
      node: this.randomMatrix(this.hiddenDim, this.inputDim, scale),
      edge: this.randomMatrix(this.hiddenDim, this.inputDim, scale),
      message: this.randomMatrix(this.hiddenDim, this.hiddenDim * 2, scale),
      update: this.randomMatrix(this.outputDim, this.hiddenDim, scale)
    };
  }

  private randomMatrix(rows: number, cols: number, scale: number): number[][] {
    return Array(rows).fill(0).map(() => 
      Array(cols).fill(0).map(() => (Math.random() - 0.5) * 2 * scale)
    );
  }

  forward(nodeFeatures: number[][], edgeFeatures: number[][], adjacencyMatrix: number[][]): number[][] {
    const numNodes = nodeFeatures.length;
    const messages: number[][] = [];
    
    // Message passing phase
    for (let i = 0; i < numNodes; i++) {
      const nodeMessage = new Array(this.hiddenDim).fill(0);
      
      for (let j = 0; j < numNodes; j++) {
        if (adjacencyMatrix[i][j] > 0) {
          // Compute message from node j to node i
          const neighborFeatures = nodeFeatures[j];
          const edgeIdx = this.getEdgeIndex(i, j, adjacencyMatrix);
          const edgeFeats = edgeFeatures[edgeIdx] || new Array(this.inputDim).fill(0);
          
          // Concatenate node and edge features
          const combined = [...neighborFeatures, ...edgeFeats];
          const message = this.matrixVectorMultiply(this.weights.message, combined);
          
          // Aggregate messages
          for (let k = 0; k < this.hiddenDim; k++) {
            nodeMessage[k] += message[k] * adjacencyMatrix[i][j];
          }
        }
      }
      
      messages.push(nodeMessage);
    }
    
    // Update phase
    const updatedFeatures = messages.map((message, i) => {
      const currentNode = nodeFeatures[i];
      const nodeTransform = this.matrixVectorMultiply(this.weights.node, currentNode);
      
      // Combine with message
      const combined = nodeTransform.map((val, idx) => val + message[idx]);
      
      // Apply activation (ReLU)
      const activated = combined.map(val => Math.max(0, val));
      
      // Final transformation
      return this.matrixVectorMultiply(this.weights.update, activated);
    });
    
    return updatedFeatures;
  }

  backward(gradients: number[][]): { nodeGrads: number[][], edgeGrads: number[][] } {
    // Simplified backward pass - full implementation would require computational graph
    return {
      nodeGrads: gradients,
      edgeGrads: []
    };
  }

  private matrixVectorMultiply(matrix: number[][], vector: number[]): number[] {
    return matrix.map(row => 
      row.reduce((sum, val, idx) => sum + val * (vector[idx] || 0), 0)
    );
  }

  private getEdgeIndex(i: number, j: number, adjacencyMatrix: number[][]): number {
    // Simplified edge indexing
    return i * adjacencyMatrix.length + j;
  }
}

// Atomic level graph convolution
export class AtomicLevelGCN {
  private layers: MessagePassingLayer[];
  private layerNorm: LayerNormalization;
  
  constructor(
    private inputDim: number = 16,
    private hiddenDims: number[] = [64, 32],
    private outputDim: number = 32
  ) {
    this.layers = [];
    
    // Build layers
    let prevDim = inputDim;
    for (const hiddenDim of hiddenDims) {
      this.layers.push(new MessagePassingLayer(prevDim, hiddenDim, hiddenDim));
      prevDim = hiddenDim;
    }
    
    // Final layer
    this.layers.push(new MessagePassingLayer(prevDim, outputDim, outputDim));
    this.layerNorm = new LayerNormalization(outputDim);
  }

  forward(graph: MolecularGraph): number[][] {
    // Extract node features
    let nodeFeatures = this.extractNodeFeatures(graph.nodes);
    const edgeFeatures = this.extractEdgeFeatures(graph.edges);
    const adjacencyMatrix = this.buildAdjacencyMatrix(graph);
    
    // Forward pass through layers
    for (const layer of this.layers) {
      const newFeatures = layer.forward(nodeFeatures, edgeFeatures, adjacencyMatrix);
      
      // Residual connection
      if (nodeFeatures.length === newFeatures.length && 
          nodeFeatures[0].length === newFeatures[0].length) {
        nodeFeatures = nodeFeatures.map((node, i) => 
          node.map((val, j) => val + newFeatures[i][j])
        );
      } else {
        nodeFeatures = newFeatures;
      }
      
      // Layer normalization
      nodeFeatures = this.layerNorm.normalize(nodeFeatures);
    }
    
    return nodeFeatures;
  }

  private extractNodeFeatures(nodes: AtomNode[]): number[][] {
    return nodes.map(node => [
      node.properties.atomicNumber / 100.0, // Normalized
      node.properties.electronegativity / 4.0,
      node.properties.ionicRadius / 3.0,
      node.properties.valenceElectrons / 8.0,
      node.properties.coordinationNumber / 12.0,
      node.properties.oxidationState / 3.0,
      node.properties.covalentRadius / 3.0,
      node.properties.vanDerWaalsRadius / 4.0,
      node.charge / 3.0,
      node.mass / 250.0,
      node.position[0] / 10.0, // Normalized position
      node.position[1] / 10.0,
      node.position[2] / 10.0,
      node.site === 'A' ? 1.0 : 0.0,
      node.site === 'B' ? 1.0 : 0.0,
      node.site === 'X' ? 1.0 : 0.0
    ]);
  }

  private extractEdgeFeatures(edges: BondEdge[]): number[][] {
    return edges.map(edge => [
      edge.bondLength / 5.0, // Normalized
      edge.bondAngle / 180.0,
      edge.dihedralAngle / 360.0,
      edge.bondOrder / 3.0,
      edge.interactionStrength,
      edge.bondType === 'ionic' ? 1.0 : 0.0,
      edge.bondType === 'covalent' ? 1.0 : 0.0,
      edge.bondType === 'metallic' ? 1.0 : 0.0,
      edge.bondType === 'van_der_waals' ? 1.0 : 0.0,
      edge.bondType === 'hydrogen' ? 1.0 : 0.0,
      edge.layer / 3.0
    ]);
  }

  private buildAdjacencyMatrix(graph: MolecularGraph): number[][] {
    const numNodes = graph.nodes.length;
    const matrix = Array(numNodes).fill(0).map(() => Array(numNodes).fill(0));
    
    // Create node ID to index mapping
    const nodeIdToIndex = new Map<string, number>();
    graph.nodes.forEach((node, index) => {
      nodeIdToIndex.set(node.id, index);
    });
    
    // Fill adjacency matrix
    graph.edges.forEach(edge => {
      const sourceIdx = nodeIdToIndex.get(edge.source);
      const targetIdx = nodeIdToIndex.get(edge.target);
      
      if (sourceIdx !== undefined && targetIdx !== undefined) {
        matrix[sourceIdx][targetIdx] = edge.interactionStrength;
        matrix[targetIdx][sourceIdx] = edge.interactionStrength; // Undirected
      }
    });
    
    return matrix;
  }
}

// Fragment level graph convolution
export class FragmentLevelGCN {
  private atomicGCN: AtomicLevelGCN;
  private poolingLayer: GraphPoolingLayer;
  
  constructor() {
    this.atomicGCN = new AtomicLevelGCN(32, [64, 48], 32);
    this.poolingLayer = new GraphPoolingLayer();
  }

  forward(graph: MolecularGraph): number[][] {
    // Get atomic level features
    const atomicFeatures = this.atomicGCN.forward(graph);
    
    // Group atoms into fragments (functional groups, coordination polyhedra)
    const fragments = this.identifyFragments(graph);
    
    // Pool atomic features to fragment level
    const fragmentFeatures = fragments.map(fragment => 
      this.poolingLayer.pool(atomicFeatures, fragment.atomIndices)
    );
    
    return fragmentFeatures;
  }

  private identifyFragments(graph: MolecularGraph): Array<{atomIndices: number[], type: string}> {
    const fragments: Array<{atomIndices: number[], type: string}> = [];
    
    // Identify octahedral coordination around B-site
    graph.nodes.forEach((node, index) => {
      if (node.site === 'B') {
        const neighbors = this.findNeighbors(node, graph, 6);
        if (neighbors.length >= 4) {
          fragments.push({
            atomIndices: [index, ...neighbors],
            type: 'octahedral'
          });
        }
      }
    });
    
    // Identify organic cations
    graph.nodes.forEach((node, index) => {
      if (node.site === 'A' && (node.element === 'MA' || node.element === 'FA')) {
        fragments.push({
          atomIndices: [index],
          type: 'organic_cation'
        });
      }
    });
    
    return fragments;
  }

  private findNeighbors(centerNode: AtomNode, graph: MolecularGraph, maxCount: number): number[] {
    const nodeIdToIndex = new Map<string, number>();
    graph.nodes.forEach((node, index) => {
      nodeIdToIndex.set(node.id, index);
    });
    
    return centerNode.neighbors
      .slice(0, maxCount)
      .map(neighborId => nodeIdToIndex.get(neighborId))
      .filter(index => index !== undefined) as number[];
  }
}

// Layer normalization
export class LayerNormalization {
  constructor(private featureDim: number, private epsilon: number = 1e-6) {}

  normalize(features: number[][]): number[][] {
    return features.map(nodeFeatures => {
      const mean = nodeFeatures.reduce((sum, val) => sum + val, 0) / nodeFeatures.length;
      const variance = nodeFeatures.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / nodeFeatures.length;
      const std = Math.sqrt(variance + this.epsilon);
      
      return nodeFeatures.map(val => (val - mean) / std);
    });
  }
}

// Graph pooling layer
export class GraphPoolingLayer {
  pool(features: number[][], indices: number[]): number[] {
    if (indices.length === 0) return [];
    
    const selectedFeatures = indices.map(idx => features[idx]).filter(f => f);
    if (selectedFeatures.length === 0) return [];
    
    const featureDim = selectedFeatures[0].length;
    const pooled = new Array(featureDim).fill(0);
    
    // Mean pooling
    selectedFeatures.forEach(nodeFeatures => {
      nodeFeatures.forEach((val, idx) => {
        pooled[idx] += val;
      });
    });
    
    return pooled.map(val => val / selectedFeatures.length);
  }
}

// Multi-scale GNN combining all levels
export class MultiScaleGNN {
  private atomicGCN: AtomicLevelGCN;
  private fragmentGCN: FragmentLevelGCN;
  private crystalGCN: AtomicLevelGCN; // Reuse for crystal level
  
  constructor() {
    this.atomicGCN = new AtomicLevelGCN(16, [64, 48, 32], 32);
    this.fragmentGCN = new FragmentLevelGCN();
    this.crystalGCN = new AtomicLevelGCN(32, [64, 32], 16);
  }

  forward(graph: MolecularGraph): {
    atomic: number[][];
    fragment: number[][];
    crystal: number[][];
    global: number[];
  } {
    // Multi-level feature extraction
    const atomicFeatures = this.atomicGCN.forward(graph);
    const fragmentFeatures = this.fragmentGCN.forward(graph);
    const crystalFeatures = this.crystalGCN.forward(graph);
    
    // Global pooling for molecular representation
    const globalFeatures = this.globalPool([
      ...atomicFeatures.flat(),
      ...fragmentFeatures.flat(),
      ...crystalFeatures.flat()
    ]);
    
    return {
      atomic: atomicFeatures,
      fragment: fragmentFeatures,
      crystal: crystalFeatures,
      global: globalFeatures
    };
  }

  private globalPool(features: number[]): number[] {
    if (features.length === 0) return [];
    
    const dim = 64; // Fixed global dimension
    const pooled = new Array(dim).fill(0);
    
    // Adaptive pooling to fixed dimension
    const step = features.length / dim;
    for (let i = 0; i < dim; i++) {
      const startIdx = Math.floor(i * step);
      const endIdx = Math.floor((i + 1) * step);
      let sum = 0;
      let count = 0;
      
      for (let j = startIdx; j < endIdx && j < features.length; j++) {
        sum += features[j];
        count++;
      }
      
      pooled[i] = count > 0 ? sum / count : 0;
    }
    
    return pooled;
  }
}