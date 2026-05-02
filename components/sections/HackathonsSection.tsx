"use client";

import { motion } from 'framer-motion';
import { hackathons } from '@/data/hackathons';

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="relative w-full py-32 bg-[#F8F8F8] border-t border-[#E5E5E5]">
      <div className="container">
        <div className="mb-20">
          <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.4em] mb-4 block">SECTION 03 / COMPETITIVE</span>
          <h2 className="text-6xl font-bold text-[#222222] uppercase tracking-tighter">Hackathons</h2>
        </div>

        <div className="space-y-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {hackathons.map((h, i) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 flex flex-col md:flex-row md:items-center gap-10 hover:bg-[#FAFAFA] transition-colors group"
            >
              <div className="shrink-0 font-[family-name:var(--font-mono)] text-4xl font-bold text-[#E5E5E5] group-hover:text-[#CCCCCC] transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-[#222222] uppercase tracking-tight">{h.name}</h3>
                  <span className="badge-primary">{h.resultTag}</span>
                </div>
                <p className="text-sm text-[#7B7B7B] font-[family-name:var(--font-mono)] uppercase tracking-widest mb-4">
                  {h.organizer} · {h.year}
                </p>
                <p className="text-[#444444] leading-relaxed max-w-2xl">{h.description}</p>
              </div>

              <div className="shrink-0 md:text-right">
                <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-widest mb-1">PROJECT</p>
                <p className="text-lg font-bold text-[#222222] uppercase tracking-tight">{h.project}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
