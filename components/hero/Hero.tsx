"use client";

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Navbar from '@/components/ui/Navbar';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden bg-white flex items-center pt-20">
      <Navbar />
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" />


      {/* Profile Image Panel */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[50%] pointer-events-none overflow-hidden hidden lg:block">
        <motion.div
          className="absolute inset-0 bg-[#F8F8F8]"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.img
          src="/profile.png"
          alt="Kiran Sindagi"
          className="absolute inset-0 w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
          style={{
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
      </div>

      <div className="container relative z-20">
        <div className="max-w-[640px]">
          {/* Top labels */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            <span className="badge-primary">AI / ML ENGINEER</span>
            <span className="badge-outline">SIH 2024 NATIONAL FINALIST</span>
          </motion.div>

          {/* Large Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-7xl md:text-9xl font-bold tracking-tighter text-[#222222] uppercase leading-[0.85]"
          >
            Kiran<br /><span className="text-[#7B7B7B]">Sindagi</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 min-h-[60px]"
          >
            <TypeAnimation
              sequence={[
                '6th Sem AIML Student.',
                1000,
                'Building Intelligent Systems That Scale.',
                1000,
                'National Level Hackathon Finalist.',
                1000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-xl text-[#7B7B7B] font-[family-name:var(--font-mono)] uppercase tracking-widest leading-relaxed"
            />
          </motion.div>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 flex items-center gap-6"
          >
            <a href="#projects" className="px-10 py-5 bg-[#222222] text-white font-[family-name:var(--font-mono)] font-bold text-xs uppercase tracking-widest hover:bg-[#444444] transition-all">
              View Projects
            </a>
            <a href="#contact" className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest text-[#222222] hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              Contact <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
