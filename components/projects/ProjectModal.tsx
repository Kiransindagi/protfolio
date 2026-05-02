"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { type Project } from '@/data/projects';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6"
        onClick={onClose}
        data-lenis-prevent="true"
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain scrollbar-hide"
          onClick={(e) => e.stopPropagation()}
          data-lenis-prevent="true"
        >
          <div className="sticky top-0 bg-white border-b border-[#E5E5E5] px-8 py-6 flex justify-between items-center z-10">
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-widest">{project.modelId} // Case Study</span>
            <button onClick={onClose} className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest hover:text-[#7B7B7B]">Close ✕</button>
          </div>

          <div className="p-12">
            <div className="mb-12">
              <span className="badge-primary mb-4 inline-block">{project.status}</span>
              <h2 className="text-5xl md:text-7xl font-bold text-[#222222] uppercase tracking-tighter leading-none mb-4">{project.title}</h2>
              <p className="text-xl text-[#7B7B7B] font-[family-name:var(--font-mono)] uppercase tracking-widest">{project.type}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <div>
                <h3 className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-widest mb-6 border-b border-[#E5E5E5] pb-2">Abstract</h3>
                <p className="text-lg text-[#444444] leading-relaxed italic border-l-4 border-[#222222] pl-6">{project.description}</p>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-widest mb-6 border-b border-[#E5E5E5] pb-2">Tech Stack</h3>
                <p className="text-lg font-bold text-[#222222] uppercase tracking-tight">{project.techStack}</p>
              </div>
            </div>

            <div className="border border-[#E5E5E5] bg-[#F8F8F8] divide-y divide-[#E5E5E5] mb-16">
              <div className="p-6 font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-widest">System Pipeline</div>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-[#E5E5E5]">
                <div className="p-8"><span className="block text-[8px] text-[#7B7B7B] mb-2 font-mono">INPUT</span><span className="font-bold uppercase text-sm">{project.input}</span></div>
                <div className="p-8"><span className="block text-[8px] text-[#7B7B7B] mb-2 font-mono">PROCESS</span><span className="font-bold uppercase text-sm">{project.process}</span></div>
                <div className="p-8"><span className="block text-[8px] text-[#7B7B7B] mb-2 font-mono">OUTPUT</span><span className="font-bold uppercase text-sm">{project.output}</span></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-widest mb-6 border-b border-[#E5E5E5] pb-2">Key Components</h3>
                <ul className="space-y-4">
                  {project.keyComponents.map((c, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#444444] uppercase tracking-wide font-bold text-sm">
                      <span className="text-[#222222]">↗</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center items-center p-10 bg-[#222222] text-white text-center">
                <span className="font-[family-name:var(--font-mono)] text-[9px] text-[#7B7B7B] uppercase tracking-[0.3em] mb-4">System Performance</span>
                <div className="text-6xl font-bold mb-2">{project.metrics.accuracy}</div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#7B7B7B]">Model Accuracy</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
