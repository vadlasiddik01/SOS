'use client';

import { motion } from 'framer-motion';
import React from 'react';
import {
  Monitor,
  Server,
  Zap,
  Wrench,
  BarChart3,
  HardDrive,
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Ubuntu Setup',
    price: '₹200',
    description: 'Linux installation and configuration',
    features: ['Full OS install', 'Driver setup', 'Initial config'],
    icon: Monitor,
  },
  {
    id: 2,
    title: 'Windows Installation',
    price: '₹200',
    description: 'Complete Windows OS deployment',
    features: ['Fresh install', 'Drivers', 'Updates'],
    icon: Server,
  },
  {
    id: 3,
    title: 'Software/Laptop Fixes',
    price: '₹100+',
    description: 'Troubleshooting and resolution',
    features: ['Diagnosis', 'Fix', 'Testing'],
    icon: Wrench,
  },
];

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative h-80 glass-morphism rounded-2xl p-8 border border-cyan-400/20 overflow-hidden group cursor-pointer"
        animate={{
          borderColor: hovered ? 'rgba(34, 211, 238, 0.6)' : 'rgba(34, 211, 238, 0.2)',
          boxShadow: hovered
            ? '0 0 30px rgba(34, 211, 238, 0.4), inset 0 0 20px rgba(34, 211, 238, 0.1)'
            : '0 0 10px rgba(34, 211, 238, 0.1)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 opacity-0"
          animate={{
            opacity: hovered ? 0.05 : 0,
          }}
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.2), transparent)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <motion.div
            className="mb-4 p-3 glass-morphism rounded-lg border border-cyan-400/50 w-fit"
            animate={{
              y: hovered ? -5 : 0,
              scale: hovered ? 1.1 : 1,
              boxShadow: hovered
                ? '0 0 20px rgba(34, 211, 238, 0.4)'
                : '0 0 10px rgba(34, 211, 238, 0.2)',
            }}
            transition={{ duration: 0.3 }}
          >
            <service.icon className="w-8 h-8 text-cyan-300" />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold text-cyan-300 mb-2">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-blue-200 text-sm flex-1 mb-4">
            {service.description}
          </p>

          {/* Features */}
          <div className="mb-4 space-y-1">
            {service.features.map((feature, i) => (
              <motion.p
                key={i}
                className="text-xs text-blue-300/70 font-mono"
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: hovered ? 1 : 0.6,
                  x: hovered ? 0 : -10,
                }}
                transition={{ delay: i * 0.05 }}
              >
                {'>'} {feature}
              </motion.p>
            ))}
          </div>

          {/* Price and button */}
          <div className="flex items-center justify-between mt-auto">
            <motion.p
              className="text-2xl font-bold text-cyan-400"
              animate={{
                textShadow: hovered
                  ? '0 0 10px rgba(34, 211, 238, 0.8)'
                  : '0 0 5px rgba(34, 211, 238, 0.3)',
              }}
            >
              {service.price}
            </motion.p>
          </div>
        </div>

        {/* Border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: hovered
              ? 'inset 0 0 20px rgba(34, 211, 238, 0.2)'
              : 'inset 0 0 0px rgba(34, 211, 238, 0)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HolographicServices() {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10 grid-pattern" />

      {/* Background glows */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-5"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 glass-morphism rounded-lg text-cyan-300 text-sm font-mono mb-4 tracking-widest">
            [SERVICES_MENU]
          </span>
          <h2 className="text-5xl font-bold mb-4">
            <span className="hologram-text">Professional Services</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Complete software solutions with Lowest Price
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA section */}
        <motion.div
          className="glass-morphism rounded-2xl p-12 border border-cyan-400/30 text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-cyan-300 mb-4">
            Custom Solutions Available
          </h3>
          <p className="text-blue-200 mb-6 max-w-xl mx-auto">
            Need Something Specific? Need Crack Files Installation? We provide tailored solutions for your
            unique requirements. Contact us for consultation.
          </p>
          <motion.button
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/60 text-cyan-300 font-semibold hover:border-cyan-400 transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          ><a href={`tel:+918500783032`}>
            Request Custom Service
          </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
