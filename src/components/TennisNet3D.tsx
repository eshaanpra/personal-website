import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const AnimatedNet = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(12, 4, 48, 16);
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position;
      const time = clock.getElapsedTime();
      
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        
        // Create wave effect
        const wave1 = Math.sin(x * 0.5 + time * 0.8) * 0.15;
        const wave2 = Math.sin(y * 0.8 + time * 0.6) * 0.1;
        const wave3 = Math.cos(x * 0.3 + y * 0.3 + time * 0.4) * 0.08;
        
        positions.setZ(i, wave1 + wave2 + wave3);
      }
      
      positions.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[0.2, 0, 0]} position={[0, 0, 0]}>
      <meshBasicMaterial
        color="#FF6600"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
};

const TennisNet3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <AnimatedNet />
      </Canvas>
    </div>
  );
};

export default TennisNet3D;
