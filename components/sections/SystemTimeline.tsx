"use client";

import { motion } from 'framer-motion';

const journey = [
  {
    period: "OCT 2025 — DEC 2025",
    role: "PLACEMENT INTERN",
    org: "Gem Ventures, Davangere, Karnataka",
    desc: "Architected and developed Version 1 of the university's AI-powered Placement & Internship Portal. Designed the foundation system and left after a focused 3-month build sprint.\n\nKey Features Built:\n• Student profile builder with AI-assisted content suggestions\n• AI resume generator\n• AI mock interview practice module\n• LLM-powered interview Q&A engine\n• Job & internship application management system\n\nStack: PHP · MySQL · XAMPP · Apache · LangChain · Generative AI · LLM Integration"
  },
  {
    period: "2024 ",
    role: "SIH 2024 FINALIST",
    org: "Smart India Hackathon · National Hardware Track",
    desc: "Selected among top 0.1% of 1.2M+ participants nationwide. Built a capillary-fed electrolyzer system for green hydrogen production targeting under $2/kg using seawater electrolysis."
  },
  {
    period: "SEPT 2023 — PRESENT",
    role: "FOUNDATIONS",
    org: "B.Tech CSE (AI & ML) · GM University, Davangere, Karnataka",
    desc: "Currently in 6th semester. Building deep fundamentals in calculus, linear algebra, neural networks, and applied ML — simultaneously shipping real-world projects across computer vision, LLM engineering, and edge AI."
  },
];

export default function SystemTimeline() {
  return (
    <section className="relative w-full py-32 bg-white border-t border-[#E5E5E5]">
      <div className="container">
        <div className="mb-20">
          <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.4em] mb-4 block">SECTION 05 / TIMELINE</span>
          <h2 className="text-6xl md:text-8xl font-bold text-[#222222] uppercase tracking-tighter leading-none">
            System<br /><span className="text-[#7B7B7B]">Evolution</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#E5E5E5] hidden md:block" />

          <div className="space-y-20">
            {journey.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-0 md:pl-12 group"
              >
                {/* Dot */}
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#E5E5E5] group-hover:bg-[#222222] transition-colors hidden md:block" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <span className="font-[family-name:var(--font-mono)] text-xs font-bold text-[#7B7B7B] uppercase tracking-widest">{item.period}</span>
                  </div>
                  <div className="md:col-span-9 max-w-2xl">
                    <h3 className="text-2xl font-bold text-[#222222] uppercase tracking-tight mb-2">{item.role}</h3>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-widest mb-4">{item.org}</p>
                    <p className="text-[#444444] leading-relaxed text-sm whitespace-pre-line">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
