"use client";

import { motion } from 'framer-motion';

const goals = [
  "Advanced AI Agents with Multi-Step Reasoning",
  "Scalable Distributed ML Infrastructure",
  "Real-time Vision Systems for Human Augmentation",
  "Founding an AI-First Tech Venture",
];

export default function FutureVision() {
  return (
    <section className="relative w-full py-32 bg-white border-t border-[#E5E5E5]">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.4em] mb-6 block">SECTION 05 / VISION</span>
          <h2 className="text-6xl md:text-8xl font-bold text-[#222222] uppercase tracking-tighter leading-none mb-16">
            Loading <span className="text-[#7B7B7B]">Next Phase_</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {goals.map((goal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-[#F8F8F8] border border-[#E5E5E5] hover:border-[#222222] transition-colors flex items-center gap-6"
              >
                <span className="text-[#222222] font-bold text-2xl shrink-0">↗</span>
                <span className="text-xl font-bold uppercase tracking-tight text-[#222222]">{goal}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 pt-24 border-t border-[#E5E5E5]">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#7B7B7B] uppercase tracking-[0.5em] mb-8">This is not a portfolio. This is a system in progress.</p>
            <div className="inline-flex items-center gap-4 px-10 py-5 border border-[#222222] text-[#222222] font-bold font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest">
              Version 2.0.4 <span className="w-1.5 h-4 bg-[#222222] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
