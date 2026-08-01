"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const objectives = [
  "Build autonomous AI agents with long-horizon reasoning.",
  "Engineer distributed machine learning systems at production scale.",
  "Develop real-time computer vision systems that augment human capability.",
  "Build an AI-first technology company creating products used worldwide.",
  "Contribute open-source tools that strengthen the global AI ecosystem.",
];

const statusBars = [
  { label: "Research", progress: "██████████████", empty: "░░" },
  { label: "Building", progress: "████████████", empty: "░░░░" },
  { label: "Learning", progress: "██████████████", empty: "░░" },
  { label: "Shipping", progress: "██████████", empty: "░░░░░░" },
];

const timeline = [
  "NOW", 
  "Internship", 
  "ML Engineer", 
  "AI Engineer", 
  "Technical Founder", 
  "Building AI at Global Scale"
];

const bgWords = ["INITIALIZING...", "Loading...", "Deploying...", "Training...", "Inference...", "Completed..."];

export default function FutureVision() {
  const [bgWord, setBgWord] = useState(bgWords[0]);
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % bgWords.length;
      setBgWord(bgWords[i]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-32 bg-[#111111] text-white overflow-hidden border-t border-[#333]">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <AnimatePresence mode="wait">
          <motion.h1 
            key={bgWord}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5 }}
            className="text-[8rem] md:text-[15rem] lg:text-[20rem] font-bold uppercase tracking-tighter text-white whitespace-nowrap"
          >
            {bgWord}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-[#333] pb-12 gap-8">
          <div>
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
              SECTION_05 // MISSION PROTOCOL
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-tight text-[#E5E5E5] mb-6">
              LOADING THE <br className="hidden md:block" /> NEXT DECADE...
            </h2>
            <div className="font-[family-name:var(--font-mono)] text-xl md:text-2xl text-[#333] tracking-widest flex items-center gap-4">
              <span className="text-[#E5E5E5]">███████████</span>░░░░░░░ <span className="text-xs text-[#7B7B7B] ml-2 mt-1">42%</span>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#7B7B7B]">
            <span>MISSION STATUS</span>
            <span className="px-3 py-1 bg-white text-black border border-white font-bold">ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Objectives */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {objectives.map((obj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex items-start gap-6 group"
              >
                <span className="text-[#7B7B7B] font-bold text-xl md:text-2xl shrink-0 group-hover:text-white transition-colors">↗</span>
                <span className="text-lg md:text-2xl lg:text-3xl font-bold tracking-tight text-[#E5E5E5] group-hover:text-white transition-colors leading-snug">
                  {obj}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Live Status & Timeline */}
          <div className="lg:col-span-4 flex flex-col gap-16">
            
            {/* Live Status Bars */}
            <div className="p-8 border border-[#333] bg-[#1A1A1A]">
              <h3 className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.3em] mb-8 block">
                LIVE MISSION STATUS
              </h3>
              <div className="flex flex-col gap-6">
                {statusBars.map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between font-[family-name:var(--font-mono)] text-[10px] text-[#E5E5E5] uppercase tracking-widest mb-2">
                      <span>{stat.label}</span>
                    </div>
                    <div className="font-[family-name:var(--font-mono)] text-[#333] text-xs flex">
                      <span className="text-white">{stat.progress}</span>
                      <span>{stat.empty}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Flow */}
            <div>
              <h3 className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.3em] mb-8 block">
                TRAJECTORY
              </h3>
              <div className="flex flex-col gap-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-widest text-[#7B7B7B]">
                {timeline.map((step, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <span className={i === 0 ? "text-white" : i === timeline.length - 1 ? "text-white" : ""}>
                      {step}
                    </span>
                    {i < timeline.length - 1 && (
                      <span className="text-[#333]">↓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Final Statement */}
        <div className="mt-32 pt-24 border-t border-[#333] text-center flex flex-col items-center">
          <p className="font-[family-name:var(--font-mono)] text-sm md:text-base text-[#7B7B7B] uppercase tracking-[0.3em] mb-6">
            This isn't a portfolio.
          </p>
          <div className="inline-flex items-center gap-4 px-8 py-5 border border-[#E5E5E5] bg-white text-black font-bold font-[family-name:var(--font-mono)] text-xs md:text-sm uppercase tracking-widest">
            It's version 3.5.0 of a lifelong engineering mission. <span className="w-2 h-4 bg-black animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
