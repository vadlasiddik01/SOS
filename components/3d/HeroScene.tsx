'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function AnimatedGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const donutRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.position.z = Math.sin(clock.elapsedTime * 0.5) * 2;
    }
    if (donutRef.current) {
      donutRef.current.rotation.x -= 0.005;
      donutRef.current.rotation.z += 0.008;
    }
  });

  return (
    <>
      <mesh ref={meshRef} scale={3}>
        <icosahedronGeometry args={[1, 32]} />
        <meshPhongMaterial
          color="#00D4FF"
          emissive="#00A8CC"
          emissiveIntensity={0.6}
          shininess={200}
          wireframe={false}
        />
      </mesh>

      <mesh ref={donutRef} position={[0, 0, 0]} scale={4}>
        <torusGeometry args={[1, 0.2, 32, 100]} />
        <meshStandardMaterial
          color="#FF6B35"
          emissive="#FF8C42"
          emissiveIntensity={0.8}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
    </>
  );
}

function OrbitingParticles() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.3;
    }
  });

  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2;
      const radius = 6;
      positions.push({
        x: Math.cos(angle) * radius,
        y: (Math.random() - 0.5) * 4,
        z: Math.sin(angle) * radius,
      });
    }
    return positions;
  }, []);

  return (
    <group ref={groupRef}>
      {particles.map((pos, idx) => (
        <mesh key={idx} position={[pos.x, pos.y, pos.z]} scale={0.15}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color={idx % 2 === 0 ? '#00D4FF' : '#FF6B35'}
            emissive={idx % 2 === 0 ? '#00A8CC' : '#FF8C42'}
            emissiveIntensity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={1} />
      <pointLight position={[15, 15, 15]} intensity={2} color="#00D4FF" />
      <pointLight position={[-15, -15, -15]} intensity={1.5} color="#FF6B35" />
      <pointLight position={[0, 0, 20]} intensity={1} />

      <AnimatedGlobe />
      <OrbitingParticles />

      <Html position={[0, -5.5, 0]}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-4">
            SID OS SOLUTIONS
          </h1>
          <p className="text-cyan-300 text-lg md:text-xl font-light tracking-widest">
            FUTURISTIC SOFTWARE ECOSYSTEM
          </p>
        </motion.div>
      </Html>
    </>
  );
}

export default function HeroScene() {
  return (
    <motion.div
      className="w-full h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Scene />
      </Canvas>
    </motion.div>
  );
}
