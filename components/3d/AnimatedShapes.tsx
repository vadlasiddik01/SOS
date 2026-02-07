'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function PulsingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = clock.elapsedTime * 0.5;
      meshRef.current.scale.z =
        1 + Math.sin(clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[-3, 0, 0]} scale={1.5}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial
        color="#6B4CFF"
        emissive="#6B4CFF"
        emissiveIntensity={0.5}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

function SpinningOctahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = clock.elapsedTime * 0.6;
      meshRef.current.rotation.z = clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[3, 0, 0]} scale={1.5}>
      <octahedronGeometry args={[1, 2]} />
      <meshStandardMaterial
        color="#FF1B9D"
        emissive="#FF1B9D"
        emissiveIntensity={0.4}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function WavingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.elapsedTime * 1.5) * 1;
      meshRef.current.rotation.z = clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 2, 0]} scale={1.3}>
      <icosahedronGeometry args={[1, 4]} />
      <meshStandardMaterial
        color="#00D4FF"
        emissive="#00D4FF"
        emissiveIntensity={0.5}
        metalness={0.85}
        roughness={0.15}
      />
    </mesh>
  );
}

function AnimatedScene() {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#6B4CFF" />
      <pointLight position={[0, 10, -10]} intensity={1} color="#FF1B9D" />

      <PulsingTorus />
      <SpinningOctahedron />
      <WavingSphere />

      <OrbitControls autoRotate autoRotateSpeed={2} />
    </>
  );
}

export default function AnimatedShapes() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-96 rounded-xl overflow-hidden border border-primary/20 shadow-2xl">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <AnimatedScene />
      </Canvas>
    </div>
  );
}
