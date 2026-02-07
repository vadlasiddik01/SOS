'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import AnimatedShapes from './3d/AnimatedShapes';

export default function AboutSection() {
  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Sid OS Solutions
          </h2>
          <p className="text-primary/70 text-lg max-w-2xl mx-auto">
            Leading provider of professional software installation and technical
            support services for over a decade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Who We Are
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Sid OS Solutions is a team of certified software professionals
                  dedicated to providing comprehensive installation, configuration,
                  and troubleshooting services for both Ubuntu and Windows systems.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Our Mission
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  To make software installation and technical support accessible
                  and hassle-free for everyone, whether at their home or office.
                  We believe in quality service with a personal touch.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Why Choose Us
                </h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Expert technicians with verified credentials
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Quick response time and reliable service
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Transparent pricing with no hidden charges
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Flexible service options (Doorstep or Office)
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 3D Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Suspense fallback={<div className="w-full h-96 bg-secondary rounded-xl" />}>
              <AnimatedShapes />
            </Suspense>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-card p-8 rounded-xl border border-primary/10 text-center"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(107, 76, 255, 0.1)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.p>
              <p className="text-foreground/70 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
