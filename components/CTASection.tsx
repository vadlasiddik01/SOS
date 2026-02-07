'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function CTASection() {
  const testimonials = [
    {
      text: 'Fastest installation service I ever got. Highly professional!',
      author: 'Rajesh Kumar',
      role: 'Business Owner',
      stars: 5,
    },
    {
      text: 'Excellent customer support and installation quality.',
      author: 'Priya Sharma',
      role: 'Student',
      stars: 5,
    },
    {
      text: 'Very reliable for dual boot setup. Highly recommended.',
      author: 'Amit Patel',
      role: 'Developer',
      stars: 5,
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-r from-primary/5 via-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-primary mb-4"
            variants={itemVariants}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-center text-primary/70 mb-12 text-lg"
            variants={itemVariants}
          >
            Join hundreds of satisfied customers
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300" />

                <div className="relative p-8 bg-white dark:bg-card rounded-xl border border-primary/10 dark:border-primary/20">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground/80 mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-primary/10 pt-4">
                    <p className="font-bold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-primary/70">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          className="relative overflow-hidden rounded-2xl p-12 md:p-16 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 border border-primary/30 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your System?
            </motion.h3>

            <motion.p
              className="text-foreground/80 text-lg mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Get software installation and support services today.
              Available for doorstep and office visits.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(107, 76, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
                <motion.span
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-white dark:bg-card text-primary font-bold rounded-lg border border-primary/30"
                whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.p
              className="text-sm text-foreground/60 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              📞 +91-8500783032 • 🏢 Nadigadda,Nandyal • 24/7 Available including DoorStep
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
