import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Blob = () => {
  const mesh = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.y += 0.002;
    mesh.current.rotation.x = state.mouse.y * 0.3;
    mesh.current.rotation.z = state.mouse.x * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh}>
        <sphereGeometry args={[1.4, 48, 48]} />
        <MeshDistortMaterial
          color="#2E7D32"
          distort={0.4}
          speed={2}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <pointLight position={[-2, -2, -2]} intensity={1} color="#a5d6a7" />

      <Blob />
    </Canvas>
  );
};

export default Hero3D;