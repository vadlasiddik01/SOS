'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  HardDrive,
  Wrench,
  Shield,
  Clock,
  Zap,
  Database,
  Activity,
} from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Ubuntu Installation',
    price: '₹499',
    icon: Server,
    features: [
      'Fresh OS Installation',
      'System Optimization',
      'Driver Setup',
      'Basic Configuration',
    ],
    delivery: 'Same Day',
    color: 'from-cyan-400 to-blue-500',
    glow: 'cyan-400',
  },
  {
    id: 2,
    name: 'Windows Installation',
    price: '₹499',
    icon: HardDrive,
    features: [
      'Fresh OS Installation',
      'Activation Setup',
      'Driver Installation',
      'Initial Configuration',
    ],
    delivery: 'Same Day',
    color: 'from-blue-400 to-cyan-500',
    glow: 'blue-400',
  },
  {
    id: 3,
    name: 'Dual Boot Setup',
    price: '₹1,299',
    icon: Zap,
    features: [
      'Ubuntu + Windows Installation',
      'Partition Management',
      'Boot Loader Configuration',
      'Full System Optimization',
    ],
    delivery: '2-4 Hours',
    color: 'from-purple-400 to-cyan-500',
    glow: 'purple-400',
  },
  {
    id: 4,
    name: 'Software/Laptop Fixes',
    price: '₹299+',
    icon: Wrench,
    features: [
      'Malware Removal',
      'Driver Issues',
      'System Errors',
      'Performance Tuning',
    ],
    delivery: 'Variable',
    color: 'from-orange-400 to-red-500',
    glow: 'orange-400',
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  isHovered: boolean;
  onHover: () => void;
}

function ServiceCard({ service, index, isHovered, onHover }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -8 }}
      onMouseEnter={onHover}
      className="relative group cursor-pointer h-full"
    >
      {/* Glow effect background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
      />

      {/* Card container */}
      <motion.div
        className="relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 overflow-hidden group-hover:border-opacity-100 border-opacity-50 transition-all duration-300"
        animate={
          isHovered && {
            borderColor: `hsl(var(--${service.glow}))`,
          }
        }
      >
        {/* Top accent line */}
        <motion.div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
          animate={isHovered && { scaleX: 1, scaleY: 1.5 }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon */}
        <motion.div
          className={`mb-4 inline-block p-3 rounded-lg bg-gradient-to-br ${service.color} bg-opacity-20`}
          animate={isHovered && { rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-6 h-6 text-cyan-300" />
        </motion.div>

        {/* Service name */}
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
          {service.name}
        </h3>

        {/* Price - highlighted */}
        <motion.div
          className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}
          animate={isHovered && { scale: 1.1 }}
        >
          {service.price}
        </motion.div>

        {/* Delivery info */}
        <div className="mb-4 text-sm text-cyan-300 flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{service.delivery}</span>
        </div>

        {/* Features list */}
        <motion.ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-sm text-gray-300 flex items-start gap-2"
            >
              <span className="text-cyan-400 mt-1">▸</span>
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-white bg-gradient-to-r ${service.color} hover:shadow-lg transition-shadow duration-300 text-center`}
        >
          Select Service
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default function UnifiedServicesCard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden py-24 px-4 md:px-8">
      {/* Background animated elements */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl opacity-10"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-orange-500 rounded-full filter blur-3xl opacity-10"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
              All Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Complete software solutions for your systems
          </p>
        </motion.div>

        {/* Services Grid with dynamic columns */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max"
        >
          <AnimatePresence>
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isHovered={hoveredCard === service.id}
                onHover={() => setHoveredCard(service.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 mb-6">
            Need a custom package? Contact us for personalized solutions
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-orange-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          >
            Contact for Custom Package
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
