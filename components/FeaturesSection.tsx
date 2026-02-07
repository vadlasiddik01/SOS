'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Headphones, Truck } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Installation',
    description: 'Quick and efficient software installation within hours',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Expert Support',
    description: 'Professional technicians with years of experience',
    color: 'from-green-400 to-blue-500',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Available whenever you need technical assistance',
    color: 'from-pink-400 to-purple-500',
  },
  {
    icon: Truck,
    title: 'Doorstep Service',
    description: 'We come to your home or office for installation',
    color: 'from-blue-400 to-cyan-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose Us?
          </h2>
          <p className="text-primary/70 text-lg">
            Premium services backed by expertise and commitment
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 rounded-xl transition-all duration-300" />

                <div className="relative p-6 bg-white dark:bg-card rounded-xl border border-primary/10 dark:border-primary/20">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    {feature.description}
                  </p>

                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
