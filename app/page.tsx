'use client';

import Header from '@/components/Header';
import JarvisHero from '@/components/JarvisHero';
import HolographicServices from '@/components/HolographicServices';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="w-full overflow-hidden bg-slate-950">
      <Header />

      {/* JARVIS-style Hero Section */}
      <section id="home">
        <JarvisHero />
      </section>

      {/* Holographic Services Grid */}
      <section id="services">
        <HolographicServices />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
