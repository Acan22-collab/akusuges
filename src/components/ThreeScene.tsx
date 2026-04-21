import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={[0, 0, 0]}>
        {/* Menggunakan Cyan Utama untuk objek pusat */}
        <MeshDistortMaterial
          color="#22d3ee" 
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <Torus ref={meshRef} args={[0.6, 0.15, 32, 64]} position={[3, 1.5, -1]}>
        <meshStandardMaterial
          color="#3b82f6"
          roughness={0.1}
          metalness={1}
        />
      </Torus>
    </Float>
  );
}

function FloatingBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
      <Box ref={meshRef} args={[0.5, 0.5, 0.5]} position={[-3, -1, -1]}>
        <meshStandardMaterial
          color="#1e3a8a"
          roughness={0.2}
          metalness={0.8}
        />
      </Box>
    </Float>
  );
}

function FloatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2.2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[0.4, 0]} position={[-2, 2, 0]}>
        <meshStandardMaterial
          color="#06b6d4"
          roughness={0.3}
          metalness={0.9}
          flatShading={true} 
        />
      </Icosahedron>
    </Float>
  );
}

function ParticleField() {
  const count = 150; // Menambah jumlah partikel agar lebih terasa "spacey"
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#22d3ee" transparent opacity={0.4} sizeAttenuation={true} />
    </points>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#0a192f]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />
        
        <AnimatedSphere />
        <FloatingTorus />
        <FloatingBox />
        <FloatingIcosahedron />
        <ParticleField />
        
        {/* Subtle Fog untuk efek kedalaman */}
        <fog attach="fog" args={['#0a192f', 5, 15]} />
      </Canvas>
    </div>
  );
}