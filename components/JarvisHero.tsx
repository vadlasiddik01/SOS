'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function JarvisHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-[10px] bg-slate-950 overflow-hidden pt-24">
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle 1px at 20px 30px, cyan, rgba(0,0,0,0))',
          backgroundSize: '40px 60px',
        }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10"
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10"
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-20 px-6 md:px-16 min-h-[60vh] 2xl:ml-[13vw]">
        {/* Left content */}
        <motion.div
          className="flex-1 max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-4 px-4 py-2 glass-morphism rounded-lg text-cyan-300 text-sm font-mono tracking-widest">
            [SOS_SYSTEM_ONLINE]
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="hologram-text">Sid OS Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-200 mb-8 font-light leading-relaxed">
            Nandyal&apos;s lowest-price Ubuntu & Windows OS installations and
            laptop issue solving. Doorstep service available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href='#services'>
              <button className="px-8 py-3 glass-morphism rounded-lg bg-cyan-500/20 border border-cyan-400/60 hover:bg-cyan-500/30 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] text-cyan-300 font-semibold">
                Explore Services
              </button>
            </a>

            <a href="/#contact">
              <button className="px-8 py-3 glass-morphism rounded-lg border border-blue-400/40 hover:border-blue-400/70 transition-all text-blue-300">
                Contact
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right hologram */}
        <motion.div
          className="flex-1 flex items-center justify-center h-80 md:h-96"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Outer hexagon */}
            <motion.div
              className="absolute inset-0 border-2 border-cyan-400/30"
              style={{
                clipPath:
                  'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Inner hexagon */}
            <motion.div
              className="absolute inset-8 border-2 border-blue-400/30"
              style={{
                clipPath:
                  'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />

            {/* Center orb */}
            <a href={`tel:+918500783032`}>
            <motion.div
              className="absolute inset-20 rounded-full bg-gradient-to-b from-cyan-400/40 to-blue-500/20 border border-cyan-400/50 flex items-center justify-center"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(34,211,238,0.3)',
                  '0 0 40px rgba(34,211,238,0.6)',
                  '0 0 20px rgba(34,211,238,0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-center">
                <p className="text-cyan-300 font-mono text-xl">SOS</p>
                <p className="text-2xl font-bold hologram-glow">ACTIVE</p>
              </div>
            </motion.div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scanlines */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-5"
        animate={{ backgroundPosition: ['0px 0px', '0px 20px'] }}
        transition={{ duration: 0.2, repeat: Infinity }}
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, rgba(34,211,238,0.05) 25%, rgba(34,211,238,0.05) 26%, transparent 27%, transparent 74%, rgba(34,211,238,0.05) 75%, rgba(34,211,238,0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '100% 4px',
        }}
      />
    </div>
  );
}
