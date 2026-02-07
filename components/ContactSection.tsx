'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, User } from 'lucide-react';

const contactVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export default function ContactSection() {
  return (
    <section className="w-full py-24 px-4 bg-slate-950 relative overflow-hidden grid-pattern">
      {/* Background animated orbs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-5"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 glass-morphism rounded-lg text-cyan-300 text-sm font-mono mb-4 tracking-widest">
            [CONTACT_SYSTEM]
          </span>
          <h2 className="text-5xl font-bold mb-4">
            <span className="hologram-text">Reach Our Team</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Get in touch for consultation and deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Name Card */}
          <motion.div
            className="glass-morphism rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/70 transition-all"
            custom={0}
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)',
            }}
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                className="p-3 glass-morphism rounded-lg border border-cyan-400/50"
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
                <User className="w-6 h-6 text-cyan-300" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold text-cyan-300 text-center mb-2 font-mono">
              OWNER
            </h3>
            <p className="text-center hologram-glow text-lg font-semibold">Siddik</p>
            <p className="text-center text-sm text-blue-200/60 mt-2 font-mono">
              200+ Laptops OS installed & issues solved
            </p>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            className="glass-morphism rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/70 transition-all"
            custom={1}
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
            }}
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                className="p-3 glass-morphism rounded-lg border border-blue-400/50"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(59, 130, 246, 0.2)',
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                    '0 0 10px rgba(59, 130, 246, 0.2)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Phone className="w-6 h-6 text-blue-300" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold text-blue-300 text-center mb-2 font-mono">
              PHONE
            </h3>
            <p className="text-center hologram-glow text-lg font-semibold">
              +91-8500783032
            </p>
            <p className="text-center text-sm text-blue-200/60 mt-2 font-mono">
              Doorstep Service - 24/7 - Daily - Emergency Support Anytime
            </p>
          </motion.div>

          {/* Address Card */}
          <motion.div
            className="glass-morphism rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/70 transition-all"
            custom={2}
            variants={contactVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)',
            }}
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                className="p-3 glass-morphism rounded-lg border border-cyan-400/50"
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
                <MapPin className="w-6 h-6 text-cyan-300" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold text-cyan-300 text-center mb-2 font-mono">
              ADDRESS
            </h3>
            <p className="text-center hologram-glow text-sm font-mono leading-relaxed">
              Swaliheen Masjid<br />
              Nadigadda<br />
              Nandyal - 518501
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 glass-morphism rounded-lg border border-cyan-400/60 text-cyan-300 font-mono font-bold text-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)',
              borderColor: 'rgba(34, 211, 238, 1)',
            }}
            whileTap={{ scale: 0.95 }}
          ><a href={`tel:+918500783032`}>
            [INITIATE_CONTACT]</a>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
