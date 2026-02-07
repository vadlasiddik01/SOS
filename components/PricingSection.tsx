'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const pricingPlans = [
  {
    name: 'Single Service',
    price: '₹499',
    period: 'per service',
    description: 'One-time software installation or issue fix',
    icon: '⚙️',
    features: [
      'Single software installation',
      'Basic troubleshooting',
      'Remote support (2 hours)',
      'Documentation provided',
      'No warranty included',
    ],
    highlighted: false,
  },
  {
    name: 'Dual Boot Setup',
    price: '₹1,299',
    period: 'one-time',
    description: 'Ubuntu + Windows dual boot installation',
    icon: '💻',
    features: [
      'Dual boot installation',
      'Partition management',
      'GRUB bootloader setup',
      'Complete system optimization',
      '3 months support included',
      'Remote + on-site available',
    ],
    highlighted: true,
  },
  {
    name: 'Complete OS Setup',
    price: '₹2,499',
    period: 'one-time',
    description: 'Full system installation with all software',
    icon: '🖥️',
    features: [
      'Complete OS installation',
      'All software pre-configured',
      'System optimization',
      'Performance tuning',
      '6 months support included',
      'Priority doorstep service',
      'Remote support 24/7',
    ],
    highlighted: false,
  },
  {
    name: 'Annual Support',
    price: '₹4,999',
    period: 'per year',
    description: 'Year-round comprehensive support',
    icon: '🛡️',
    features: [
      'Unlimited support calls',
      'Software updates included',
      'Remote troubleshooting',
      'On-site visits (quarterly)',
      'Priority response (2 hours)',
      'Backup solutions included',
      'Free software installations',
      'Performance optimization',
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full py-20 px-4 overflow-hidden bg-background"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, hsl(190, 100%, 50%) 1px, transparent 1px), linear-gradient(0deg, hsl(190, 100%, 50%) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Transparent <span className="text-primary">Pricing</span> Plans
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your software installation and support
            needs. All plans include expert support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative group rounded-lg border transition-all duration-300 ${
                plan.highlighted
                  ? 'border-primary/50 bg-card/80 backdrop-blur-sm shadow-xl shadow-primary/20 md:scale-105'
                  : 'border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30'
              }`}
            >
              {/* Neon glow effect for highlighted */}
              {plan.highlighted && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-20 blur group-hover:opacity-40 transition-opacity" />
              )}

              <div className="relative p-6">
                {/* Icon */}
                <div className="text-4xl mb-4">{plan.icon}</div>

                {/* Badge for highlighted */}
                {plan.highlighted && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-xs text-primary font-semibold">
                    Most Popular
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.period}</p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 mb-6 ${
                    plan.highlighted
                      ? 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50'
                      : 'bg-card border border-primary/30 text-primary hover:bg-primary/10'
                  }`}
                >
                  Get Started
                </button>

                {/* Features List */}
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="bg-card/30 border border-primary/20 rounded-lg p-8 backdrop-blur-sm text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-foreground mb-4">
            Custom packages available for enterprise clients
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <p className="text-muted-foreground">
              ✓ Doorstep service available
            </p>
            <p className="text-muted-foreground">✓ Office visits welcome</p>
            <p className="text-muted-foreground">✓ Flexible scheduling</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
