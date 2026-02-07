'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  position: [number, number, number];
  color: string;
  title: string;
  description: string;
  index: number;
}

function ServiceCard({ position, color, title, description, index }: ServiceCardProps) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(clock.elapsedTime + index * 0.5) * 0.3;
      meshRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.5 + index) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <boxGeometry args={[2, 2.5, 0.2]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      <Html position={[0, 0, 0.15]} scale={0.8} center>
        <div className="w-48 text-center">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-white/80">{description}</p>
        </div>
      </Html>
    </group>
  );
}

function ServicesScene() {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, 10]} intensity={0.6} color="#FF1B9D" />
      <pointLight position={[0, 10, -10]} intensity={0.8} color="#00D4FF" />

      <ServiceCard
        position={[-6, 2, 0]}
        color="#6B4CFF"
        title="Ubuntu Software"
        description="Complete Ubuntu installation and software setup"
        index={0}
      />
      <ServiceCard
        position={[0, 2, 0]}
        color="#FF1B9D"
        title="Windows Software"
        description="Professional Windows installation & troubleshooting"
        index={1}
      />
      <ServiceCard
        position={[6, 2, 0]}
        color="#00D4FF"
        title="Dual Boot Setup"
        description="Seamless dual OS installation on your system"
        index={2}
      />
      <ServiceCard
        position={[-6, -2, 0]}
        color="#FFD500"
        title="Software/Laptop Fixes"
        description="Expert resolution of software & system issues"
        index={3}
      />
      <ServiceCard
        position={[0, -2, 0]}
        color="#00FF88"
        title="Doorstep Service"
        description="We come to you for on-site installation"
        index={4}
      />
      <ServiceCard
        position={[6, -2, 0]}
        color="#FF6B9D"
        title="Office Service"
        description="Visit our office for technical support"
        index={5}
      />
    </>
  );
}

export default function ServicesSection() {
  return (
    <motion.div
      className="w-full h-screen bg-gradient-to-b from-background via-secondary to-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-12 left-0 right-0 text-center z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-primary mb-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-primary/70 text-lg"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Comprehensive Software Solutions
        </motion.p>
      </div>

      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ServicesScene />
      </Canvas>
    </motion.div>
  );
}
