import {
  PerovskiteMaterial,
  DatabaseQuery,
  DatabaseStats,
  BatchOperationResult,
} from '../types/database';
import {
  EXPERIMENTAL_BANDGAP_RECORDS,
  ExperimentalBandgapRecord,
  SCREENED_CANDIDATE_RECORDS,
  ScreenedCandidateRecord,
} from '../data/researchDatasets';

const derivePhase = (crystalStructure: string): PerovskiteMaterial['structure']['phase'] => {
  const normalized = crystalStructure.toLowerCase();

  if (normalized.includes('cubic')) return 'cubic';
  if (normalized.includes('tetragonal')) return 'tetragonal';
  if (normalized.includes('orthorhombic')) return 'orthorhombic';
  if (normalized.includes('hexagonal')) return 'hexagonal';
  return 'unknown';
};

const mapExperimentalConfidence = (grade: string) => {
  if (grade === 'A') return 0.95;
  if (grade === 'B') return 0.8;
  if (grade === 'C') return 0.65;
  return 0.5;
};

const mapCandidateConfidence = (std: number | null) => {
  if (std === null) return 0.5;
  if (std <= 0.15) return 0.95;
  if (std <= 0.3) return 0.85;
  if (std <= 0.5) return 0.72;
  return 0.6;
};

const buildExperimentalMaterial = (record: ExperimentalBandgapRecord): PerovskiteMaterial => ({
  id: record.id,
  name: record.formulaStandardized || record.formula,
  formula: record.formula,
  structure: {
    phase: derivePhase(record.crystalStructure),
    spaceGroup: record.crystalStructure || 'reported in literature',
    latticeParameters: {
      a: 0,
      b: 0,
      c: 0,
      alpha: 0,
      beta: 0,
      gamma: 0,
    },
    atomicPositions: [],
    volume: 0,
  },
  composition: {
    aIon: 'Unknown',
    bIon: 'Unknown',
    xIon: [],
    dopants: [],
  },
  properties: {
    optical: {
      bandgap: record.experimentalBandgapEV ?? 0,
    },
    electronic: {},
    thermal: {},
  },
  stability: {
    thermal: {},
    moisture: {},
    light: {},
    air: {},
  },
  synthesis: [
    {
      method: record.measurementMethod || 'Literature curation',
      temperature: 0,
      time: 0,
      atmosphere: record.sampleForm || 'reported',
      precursors: [],
      notes: [record.title, record.curationNote].filter(Boolean).join(' | ') || undefined,
    },
  ],
  metadata: {
    source: 'experimental',
    confidence: mapExperimentalConfidence(record.confidenceGrade),
    references: record.doiOrUrl ? [record.doiOrUrl] : [],
    tags: [
      'integrated-research',
      record.compoundClass,
      record.measurementMethod,
      record.confidenceGrade ? `confidence-${record.confidenceGrade}` : '',
      record.needsManualReview ? 'manual-review' : 'curated',
    ].filter(Boolean),
    contributors: [record.firstAuthor || 'Current research workflow'],
    version: 1,
  },
  createdAt: record.year ? new Date(`${record.year}-01-01`) : new Date('2026-04-10'),
  updatedAt: new Date('2026-04-10'),
});

const buildCandidateMaterial = (record: ScreenedCandidateRecord): PerovskiteMaterial => ({
  id: record.id,
  name: record.formula,
  formula: record.formula,
  structure: {
    phase: 'unknown',
    spaceGroup: 'screened candidate',
    latticeParameters: {
      a: 0,
      b: 0,
      c: 0,
      alpha: 0,
      beta: 0,
      gamma: 0,
    },
    atomicPositions: [],
    volume: 0,
  },
  composition: {
    aIon: 'Unknown',
    bIon: 'Unknown',
    xIon: [],
    dopants: [],
  },
  properties: {
    optical: {
      bandgap: record.predictedBandgapEV ?? record.ggaBandgapEV ?? 0,
    },
    electronic: {},
    thermal: {},
  },
  stability: {
    thermal: {},
    moisture: {},
    light: {},
    air: {},
  },
  synthesis: [],
  metadata: {
    source: 'computational',
    confidence: mapCandidateConfidence(record.predictionStdEV),
    references: [],
    tags: [
      'integrated-research',
      'screened-candidate',
      record.isFalseMetalRescued ? 'false-metal-rescued' : 'general-candidate',
      record.predictionStdEV !== null && record.predictionStdEV <= 0.3 ? 'low-uncertainty' : 'needs-review',
    ],
    contributors: ['Current research workflow'],
    version: 1,
  },
  createdAt: new Date('2026-04-10'),
  updatedAt: new Date('2026-04-10'),
});

export class MaterialDatabaseService {
  private materials: Map<string, PerovskiteMaterial> = new Map();
  private searchIndex: Map<string, Set<string>> = new Map();

  constructor() {
    this.initializeDatabase();
  }

  private initializeDatabase() {
    const integratedMaterials = [
      ...EXPERIMENTAL_BANDGAP_RECORDS.map(buildExperimentalMaterial),
      ...SCREENED_CANDIDATE_RECORDS.map(buildCandidateMaterial),
    ];

    integratedMaterials.forEach(material => {
      this.materials.set(material.id, material);
      this.updateSearchIndex(material);
    });
  }

  private updateSearchIndex(material: PerovskiteMaterial) {
    const keywords = [
      material.formula,
      material.name,
      material.composition.aIon,
      material.composition.bIon,
      ...material.composition.xIon,
      ...material.metadata.tags
    ];

    keywords.forEach(keyword => {
      const normalizedKeyword = keyword.toLowerCase();
      if (!this.searchIndex.has(normalizedKeyword)) {
        this.searchIndex.set(normalizedKeyword, new Set());
      }
      this.searchIndex.get(normalizedKeyword)!.add(material.id);
    });
  }

  async addMaterial(material: PerovskiteMaterial): Promise<boolean> {
    try {
      this.materials.set(material.id, {
        ...material,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      this.updateSearchIndex(material);
      return true;
    } catch (error) {
      console.error('Error adding material:', error);
      return false;
    }
  }

  async updateMaterial(id: string, updates: Partial<PerovskiteMaterial>): Promise<boolean> {
    try {
      const existing = this.materials.get(id);
      if (!existing) return false;

      const updated = {
        ...existing,
        ...updates,
        updatedAt: new Date()
      };

      this.materials.set(id, updated);
      this.updateSearchIndex(updated);
      return true;
    } catch (error) {
      console.error('Error updating material:', error);
      return false;
    }
  }

  async deleteMaterial(id: string): Promise<boolean> {
    try {
      const material = this.materials.get(id);
      if (!material) return false;

      this.materials.delete(id);
      
      // Remove from search index
      this.searchIndex.forEach((materialIds, keyword) => {
        materialIds.delete(id);
        if (materialIds.size === 0) {
          this.searchIndex.delete(keyword);
        }
      });

      return true;
    } catch (error) {
      console.error('Error deleting material:', error);
      return false;
    }
  }

  async getMaterial(id: string): Promise<PerovskiteMaterial | null> {
    return this.materials.get(id) || null;
  }

  async queryMaterials(query: DatabaseQuery): Promise<PerovskiteMaterial[]> {
    let results = Array.from(this.materials.values());

    // Apply filters
    if (query.formula) {
      results = results.filter(m => 
        m.formula.toLowerCase().includes(query.formula!.toLowerCase())
      );
    }

    if (query.elements && query.elements.length > 0) {
      results = results.filter(m => {
        const materialElements = [
          m.composition.aIon,
          m.composition.bIon,
          ...m.composition.xIon
        ].map(e => e.toLowerCase());
        
        return query.elements!.some(e => 
          materialElements.includes(e.toLowerCase())
        );
      });
    }

    if (query.propertyRanges) {
      results = results.filter(material => {
        return query.propertyRanges!.every(range => {
          const value = this.getPropertyValue(material, range.property);
          if (value === undefined) return false;
          
          if (range.min !== undefined && value < range.min) return false;
          if (range.max !== undefined && value > range.max) return false;
          return true;
        });
      });
    }

    if (query.tags && query.tags.length > 0) {
      results = results.filter(m =>
        query.tags!.some(tag => 
          m.metadata.tags.includes(tag)
        )
      );
    }

    // Apply sorting
    if (query.sortBy) {
      results.sort((a, b) => {
        const aVal = this.getPropertyValue(a, query.sortBy!);
        const bVal = this.getPropertyValue(b, query.sortBy!);
        
        if (aVal === undefined || bVal === undefined) return 0;
        
        const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        return query.sortOrder === 'desc' ? -comparison : comparison;
      });
    }

    // Apply pagination
    const start = query.offset || 0;
    const end = query.limit ? start + query.limit : undefined;
    
    return results.slice(start, end);
  }

  private getPropertyValue(material: PerovskiteMaterial, propertyPath: string): number | undefined {
    const path = propertyPath.split('.');
    let value: any = material;
    
    for (const key of path) {
      value = value?.[key];
      if (value === undefined) break;
    }
    
    return typeof value === 'number' ? value : undefined;
  }

  async getStats(): Promise<DatabaseStats> {
    const materials = Array.from(this.materials.values());
    
    return {
      totalMaterials: materials.length,
      uniqueCompositions: new Set(materials.map(m => m.formula)).size,
      experimentalData: materials.filter(m => m.metadata.source === 'experimental').length,
      computationalData: materials.filter(m => m.metadata.source === 'computational').length,
      averageConfidence: materials.reduce((sum, m) => sum + m.metadata.confidence, 0) / materials.length,
      lastUpdated: new Date()
    };
  }

  async batchImport(materials: PerovskiteMaterial[]): Promise<BatchOperationResult> {
    const result: BatchOperationResult = {
      success: true,
      processed: 0,
      failed: 0,
      errors: [],
      results: []
    };

    for (const material of materials) {
      try {
        await this.addMaterial(material);
        result.processed++;
        result.results!.push(material.id);
      } catch (error) {
        result.failed++;
        result.errors.push(`Failed to import ${material.id}: ${error}`);
      }
    }

    result.success = result.failed === 0;
    return result;
  }

  async exportData(format: 'json' | 'csv' = 'json'): Promise<string> {
    const materials = Array.from(this.materials.values());
    
    if (format === 'json') {
      return JSON.stringify(materials, null, 2);
    } else {
      // CSV export
      const headers = [
        'ID', 'Name', 'Formula', 'Phase', 'Bandgap (eV)', 
        'PLQY (%)', 'Emission Peak (nm)', 'Source', 'Confidence'
      ];
      
      const rows = materials.map(m => [
        m.id,
        m.name,
        m.formula,
        m.structure.phase,
        m.properties.optical.bandgap,
        m.properties.optical.plqy || 'N/A',
        m.properties.optical.emissionPeak,
        m.metadata.source,
        m.metadata.confidence
      ]);
      
      return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
    }
  }

  async searchByText(searchText: string): Promise<PerovskiteMaterial[]> {
    const normalizedSearch = searchText.toLowerCase();
    const matchingIds = new Set<string>();

    // Search in index
    this.searchIndex.forEach((materialIds, keyword) => {
      if (keyword.includes(normalizedSearch)) {
        materialIds.forEach(id => matchingIds.add(id));
      }
    });

    // Full text search
    this.materials.forEach((material, id) => {
      const searchableText = [
        material.name,
        material.formula,
        material.metadata.tags.join(' ')
      ].join(' ').toLowerCase();

      if (searchableText.includes(normalizedSearch)) {
        matchingIds.add(id);
      }
    });

    return Array.from(matchingIds).map(id => this.materials.get(id)!);
  }
}

export const databaseService = new MaterialDatabaseService();
