import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { PerovskiteMaterial } from '../../types/database';

interface MolecularViewer3DProps {
  material?: PerovskiteMaterial;
  width?: number;
  height?: number;
}

export const MolecularViewer3D: React.FC<MolecularViewer3DProps> = ({
  material,
  width = 400,
  height = 400
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const animationIdRef = useRef<number>();
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      width / height, 
      0.1, 
      1000
    );
    camera.position.set(10, 10, 10);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x3b82f6, 0.5);
    pointLight.position.set(-10, -10, -5);
    scene.add(pointLight);

    // Create molecular structure
    createMolecularStructure(scene, material);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      if (isRotating) {
        scene.rotation.y += 0.005;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [material, width, height, isRotating]);

  const createMolecularStructure = (scene: THREE.Scene, material?: PerovskiteMaterial) => {
    // Clear existing structure
    const objectsToRemove = scene.children.filter(child => 
      child.userData.type === 'atom' || child.userData.type === 'bond'
    );
    objectsToRemove.forEach(obj => scene.remove(obj));

    if (!material) {
      // Create default perovskite structure (CsPbI3)
      createDefaultPerovskiteStructure(scene);
    } else {
      // Create structure based on material data
      createStructureFromMaterial(scene, material);
    }
  };

  const createDefaultPerovskiteStructure = (scene: THREE.Scene) => {
    const latticeConstant = 6.0;
    
    // Define atom colors and sizes
    const atomProperties = {
      'Cs': { color: 0x9400d3, radius: 1.2 },
      'Pb': { color: 0x2e2e2e, radius: 1.0 },
      'I': { color: 0x9400d3, radius: 0.8 }
    };

    // Create unit cell
    const atoms = [
      // Cs at corners (0,0,0)
      { element: 'Cs', position: [0, 0, 0] },
      // Pb at center (0.5, 0.5, 0.5)
      { element: 'Pb', position: [latticeConstant/2, latticeConstant/2, latticeConstant/2] },
      // I at face centers
      { element: 'I', position: [latticeConstant/2, latticeConstant/2, 0] },
      { element: 'I', position: [latticeConstant/2, 0, latticeConstant/2] },
      { element: 'I', position: [0, latticeConstant/2, latticeConstant/2] }
    ];

    // Create multiple unit cells for better visualization
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        for (let k = -1; k <= 1; k++) {
          atoms.forEach(atom => {
            const props = atomProperties[atom.element as keyof typeof atomProperties];
            const geometry = new THREE.SphereGeometry(props.radius, 32, 32);
            const material = new THREE.MeshPhongMaterial({ 
              color: props.color,
              shininess: 100,
              transparent: true,
              opacity: 0.8
            });
            
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.set(
              atom.position[0] + i * latticeConstant,
              atom.position[1] + j * latticeConstant,
              atom.position[2] + k * latticeConstant
            );
            sphere.castShadow = true;
            sphere.receiveShadow = true;
            sphere.userData = { type: 'atom', element: atom.element };
            
            scene.add(sphere);
          });
        }
      }
    }

    // Create bonds
    createBonds(scene, latticeConstant);
    
    // Create unit cell wireframe
    createUnitCellWireframe(scene, latticeConstant);
  };

  const createStructureFromMaterial = (scene: THREE.Scene, material: PerovskiteMaterial) => {
    const latticeParams = material.structure.latticeParameters;
    const phase = material.structure.phase;
    
    // Adjust lattice parameters based on phase
    let a = latticeParams.a;
    let b = latticeParams.b;
    let c = latticeParams.c;

    // Create atoms based on composition
    const aIon = material.composition.aIon;
    const bIon = material.composition.bIon;
    const xIons = material.composition.xIon;

    const atomProperties = getAtomProperties(aIon, bIon, xIons[0]);
    
    // Create structure based on phase
    if (phase === 'cubic') {
      createCubicStructure(scene, a, atomProperties, aIon, bIon, xIons[0]);
    } else if (phase === 'tetragonal') {
      createTetragonalStructure(scene, a, b, c, atomProperties, aIon, bIon, xIons[0]);
    } else {
      // Default to cubic for other phases
      createCubicStructure(scene, a, atomProperties, aIon, bIon, xIons[0]);
    }
  };

  const getAtomProperties = (aIon: string, bIon: string, xIon: string) => {
    const properties: { [key: string]: { color: number; radius: number } } = {
      // A-site cations
      'Cs': { color: 0x9400d3, radius: 1.2 },
      'MA': { color: 0x0066cc, radius: 1.0 },
      'FA': { color: 0x006600, radius: 1.1 },
      
      // B-site cations
      'Pb': { color: 0x2e2e2e, radius: 1.0 },
      'Sn': { color: 0x668080, radius: 0.9 },
      
      // X-site anions
      'I': { color: 0x9400d3, radius: 0.8 },
      'Br': { color: 0xa52a2a, radius: 0.7 },
      'Cl': { color: 0x00ff00, radius: 0.6 }
    };

    return {
      aIon: properties[aIon] || properties['Cs'],
      bIon: properties[bIon] || properties['Pb'],
      xIon: properties[xIon] || properties['I']
    };
  };

  const createCubicStructure = (
    scene: THREE.Scene, 
    latticeConstant: number, 
    atomProps: any,
    aIon: string,
    bIon: string,
    xIon: string
  ) => {
    const atoms = [
      { element: aIon, props: atomProps.aIon, position: [0, 0, 0] },
      { element: bIon, props: atomProps.bIon, position: [latticeConstant/2, latticeConstant/2, latticeConstant/2] },
      { element: xIon, props: atomProps.xIon, position: [latticeConstant/2, latticeConstant/2, 0] },
      { element: xIon, props: atomProps.xIon, position: [latticeConstant/2, 0, latticeConstant/2] },
      { element: xIon, props: atomProps.xIon, position: [0, latticeConstant/2, latticeConstant/2] }
    ];

    // Create multiple unit cells
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        for (let k = -1; k <= 1; k++) {
          atoms.forEach(atom => {
            const geometry = new THREE.SphereGeometry(atom.props.radius, 32, 32);
            const material = new THREE.MeshPhongMaterial({ 
              color: atom.props.color,
              shininess: 100,
              transparent: true,
              opacity: 0.8
            });
            
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.set(
              atom.position[0] + i * latticeConstant,
              atom.position[1] + j * latticeConstant,
              atom.position[2] + k * latticeConstant
            );
            sphere.castShadow = true;
            sphere.receiveShadow = true;
            sphere.userData = { type: 'atom', element: atom.element };
            
            scene.add(sphere);
          });
        }
      }
    }

    createBonds(scene, latticeConstant);
    createUnitCellWireframe(scene, latticeConstant);
  };

  const createTetragonalStructure = (
    scene: THREE.Scene, 
    a: number, 
    b: number, 
    c: number,
    atomProps: any,
    aIon: string,
    bIon: string, 
    xIon: string
  ) => {
    // Similar to cubic but with different c parameter
    // Simplified implementation
    createCubicStructure(scene, a, atomProps, aIon, bIon, xIon);
  };

  const createBonds = (scene: THREE.Scene, latticeConstant: number) => {
    const bondMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x666666,
      transparent: true,
      opacity: 0.6
    });

    // Create bonds between Pb and I atoms
    const bondPositions = [
      // From center Pb to face-centered I atoms
      { start: [latticeConstant/2, latticeConstant/2, latticeConstant/2], 
        end: [latticeConstant/2, latticeConstant/2, 0] },
      { start: [latticeConstant/2, latticeConstant/2, latticeConstant/2], 
        end: [latticeConstant/2, 0, latticeConstant/2] },
      { start: [latticeConstant/2, latticeConstant/2, latticeConstant/2], 
        end: [0, latticeConstant/2, latticeConstant/2] }
    ];

    bondPositions.forEach(bond => {
      const start = new THREE.Vector3(...bond.start);
      const end = new THREE.Vector3(...bond.end);
      const direction = end.clone().sub(start);
      const length = direction.length();
      
      const geometry = new THREE.CylinderGeometry(0.1, 0.1, length, 8);
      const bondMesh = new THREE.Mesh(geometry, bondMaterial);
      
      bondMesh.position.copy(start).add(direction.multiplyScalar(0.5));
      bondMesh.lookAt(end);
      bondMesh.rotateX(Math.PI / 2);
      bondMesh.userData = { type: 'bond' };
      
      scene.add(bondMesh);
    });
  };

  const createUnitCellWireframe = (scene: THREE.Scene, latticeConstant: number) => {
    const wireframeGeometry = new THREE.EdgesGeometry(
      new THREE.BoxGeometry(latticeConstant, latticeConstant, latticeConstant)
    );
    const wireframeMaterial = new THREE.LineBasicMaterial({ 
      color: 0x00ff00,
      transparent: true,
      opacity: 0.5
    });
    
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    wireframe.position.set(latticeConstant/2, latticeConstant/2, latticeConstant/2);
    wireframe.userData = { type: 'wireframe' };
    
    scene.add(wireframe);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsRotating(false);
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    setIsRotating(true);
  };

  return (
    <div className="relative">
      <div
        ref={mountRef}
        className="rounded-lg overflow-hidden border border-white/20"
        style={{ width, height }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      
      {/* Controls */}
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
        >
          {isRotating ? '暂停' : '旋转'}
        </button>
      </div>

      {/* Material Info */}
      {material && (
        <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm rounded px-3 py-2 text-white text-sm">
          <div className="font-medium">{material.name}</div>
          <div className="text-gray-300">{material.formula}</div>
          <div className="text-gray-400">{material.structure.phase} 相</div>
        </div>
      )}
    </div>
  );
};