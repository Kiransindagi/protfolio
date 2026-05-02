"use client";

import { motion } from 'framer-motion';
import { type Project } from '@/data/projects';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-10 flex flex-col gap-6 border-b border-r border-[#E5E5E5] hover:bg-[#F8F8F8] transition-colors group relative h-full"
    >
      <div className="flex justify-between items-start">
        <span className="font-[family-name:var(--font-mono)] text-sm font-bold text-[#CCCCCC] group-hover:text-[#222222] transition-colors">{project.modelId}</span>
        <span className="badge-outline">{project.status}</span>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-[#222222] uppercase tracking-tighter leading-tight mb-2">{project.title}</h3>
        <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.2em]">{project.type}</p>
      </div>

      <p className="text-[#7B7B7B] leading-relaxed text-sm flex-1">{project.description}</p>

      <div className="grid grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5] mt-6">
        {[
          { label: "ACCURACY", val: project.metrics.accuracy },
          { label: "LATENCY", val: project.metrics.latency },
          { label: "GAIN", val: project.metrics.gain },
        ].map((m, i) => (
          <div key={i} className="bg-white p-4 flex flex-col gap-1 group-hover:bg-[#F8F8F8] transition-colors">
            <span className="font-[family-name:var(--font-mono)] text-[8px] text-[#7B7B7B] uppercase tracking-widest">{m.label}</span>
            <span className="font-bold text-[#222222]">{m.val}</span>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-[#E5E5E5] flex justify-between items-center">
        <span className="font-[family-name:var(--font-mono)] text-[9px] text-[#7B7B7B] uppercase tracking-widest">{project.environment}</span>
        <a href={project.github} className="font-[family-name:var(--font-mono)] text-[9px] font-bold text-[#222222] uppercase tracking-widest hover:translate-x-2 transition-transform">
          VIEW SYSTEM →
        </a>
      </div>
    </motion.div>
  );
}
