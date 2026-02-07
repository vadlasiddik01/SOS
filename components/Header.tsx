'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-morphism border-b border-cyan-400/30'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="w-10 h-10 rounded-lg glass-morphism border border-cyan-400/50 flex items-center justify-center"
            animate={{
              boxShadow: [
                '0 0 10px rgba(34, 211, 238, 0.2)',
                '0 0 20px rgba(34, 211, 238, 0.5)',
                '0 0 10px rgba(34, 211, 238, 0.2)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Cpu className="w-5 h-5 text-cyan-300" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold hologram-text">SOS</h1>
            <p className="text-xs text-cyan-300/50 font-mono">[SERVICE_ACTIVE]</p>
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-blue-200 hover:text-cyan-300 font-mono text-sm transition-colors"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                x: 5,
                textShadow: '0 0 10px rgba(34, 211, 238, 0.6)',
              }}
            >
              [{item.toUpperCase()}]
            </motion.a>
          ))}
        </nav>

        <motion.p
  className="text-base font-mono cursor-pointer hidden md:block"
  initial={{ color: 'rgba(191,219,254,0.5)' }} // blue-200/50
  animate={{
    color: [
      'rgba(191,219,254,0.5)',
      '#22d3ee',
      'rgba(191,219,254,0.5)',
    ], 
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: 'easeOut',
    },
  }}
  whileHover={{
    scale: 1.25,     // zoom in
    y: -3,           // move up
    color: '#22d3ee' // cyan-400
  }}
  transition={{
    type: 'spring',
    stiffness: 300,
    damping: 18
  }}
  ><a href={`tel:+918500783032`}>
  Refer & Get 100rs</a>
</motion.p>
        {/* CTA Button */}
        <motion.button
          className="px-6 py-2 glass-morphism rounded-lg border border-cyan-400/60 text-cyan-300 font-mono text-sm hover:border-cyan-400 transition-colors"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
            borderColor: 'rgba(34, 211, 238, 1)',
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        ><a href={`tel:+918500783032`}>
          [CONTACT]</a>
        </motion.button>
      </div>
    </motion.header>
  );
}
