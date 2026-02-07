'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full bg-slate-950 border-t border-cyan-400/20 py-12 px-4 grid-pattern"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold hologram-text mb-4 font-mono">
              [Sid OS Solutions]
            </h3>
            <p className="text-blue-200/70 text-sm font-light">
              Software solutions, installation, and technical support.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold text-cyan-300 mb-4 font-mono">
              [SERVICES]
            </h4>
            <ul className="space-y-2">
              {[
                'Ubuntu Setup',
                'Windows Setup',
                'Dual Boot',
                'Software/Laptop Fixes',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-blue-200/60 text-sm hover:text-cyan-300 transition-colors font-mono text-xs"
                  >
                    {'>'} {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold text-blue-300 mb-4 font-mono">
              [NAVIGATION]
            </h4>
            <ul className="space-y-2">
              {['About Us', 'Contact', 'Blog', 'FAQ'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-blue-200/60 text-sm hover:text-blue-300 transition-colors font-mono text-xs"
                  >
                    {'>'} {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold text-cyan-300 mb-4 font-mono">
              [CONTACT]
            </h4>
            <p className="text-cyan-300 text-sm mb-2 font-mono">+91-8500783032</p>
            <p className="text-blue-200/70 text-sm mb-2 font-mono">famsol786@gmail.com</p>
            <p className="text-blue-200/70 text-sm font-mono">Swaliheen Masjid, NADIGADDA, NANDYAL</p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-400/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <motion.p
              className="text-blue-200/50 text-xs font-mono mb-4 md:mb-0 mr-[2vw] hover:text-cyan-300 transition-colors" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.25,     // zoom in
                y: -6,           // move up
                color: '#22d3ee' // cyan-400
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 18
              }}
            >
              © {currentYear} Sid OS Solutions (SOS)
            </motion.p>

            <motion.div
  className="flex gap-6"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  viewport={{ once: true }}
>
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
</motion.div>

          </div>
        </div>
      </div>
    </motion.footer>
  );
}
