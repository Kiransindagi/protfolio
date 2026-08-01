"use client";

import { motion } from 'framer-motion';
import { type Project } from '@/data/projects';
import { useState } from 'react';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white p-8 md:p-10 flex flex-col gap-6 border-b border-r border-[#E5E5E5] transition-all duration-500 group relative h-full overflow-hidden"
    >
      {/* Background Hover Effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
      />
      
      {/* Top Bar */}
      <div className="relative flex justify-between items-start z-10">
        <span className="font-[family-name:var(--font-mono)] text-sm font-bold text-[#CCCCCC] group-hover:text-blue-600 transition-colors duration-300">
          {project.modelId}
        </span>
        <span className="badge-outline border-black text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
          {project.status}
        </span>
      </div>

      {/* Header */}
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-[#222222] uppercase tracking-tighter leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
          {project.title}
        </h3>
        <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.2em]">
          {project.type}
        </p>
      </div>

      {/* Description */}
      <p className="text-[#555555] leading-relaxed text-sm flex-1 relative z-10">
        {project.description}
      </p>

      {/* Key Components (New!) */}
      {project.keyComponents && project.keyComponents.length > 0 && (
        <div className="flex flex-wrap gap-2 relative z-10">
          {project.keyComponents.map((comp, i) => (
            <span key={i} className="text-[10px] font-[family-name:var(--font-mono)] bg-gray-100 px-2 py-1 rounded-sm text-gray-600 border border-gray-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors duration-300">
              {comp}
            </span>
          ))}
        </div>
      )}

      {/* Pipeline (Input -> Process -> Output) (New!) */}
      {(project.input || project.process || project.output) && (
        <div className="relative z-10 mt-4 p-4 bg-gray-50 border border-gray-100 rounded-sm overflow-hidden group-hover:border-blue-100 group-hover:shadow-sm transition-all duration-300">
          <div className="flex flex-col gap-3">
             <div className="flex items-center gap-2 text-xs">
                <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest min-w-[60px]">Input</span>
                <span className="text-gray-600 font-[family-name:var(--font-mono)] text-[10px] truncate">{project.input}</span>
             </div>
             <div className="w-px h-3 bg-gray-300 ml-[30px]" />
             <div className="flex items-center gap-2 text-xs">
                <span className="text-[9px] font-bold text-purple-600 uppercase tracking-widest min-w-[60px]">Process</span>
                <span className="text-gray-600 font-[family-name:var(--font-mono)] text-[10px] truncate">{project.process}</span>
             </div>
             <div className="w-px h-3 bg-gray-300 ml-[30px]" />
             <div className="flex items-center gap-2 text-xs">
                <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest min-w-[60px]">Output</span>
                <span className="text-gray-800 font-medium text-[11px] truncate">{project.output}</span>
             </div>
          </div>
        </div>
      )}

      {/* Metrics */}
      <div className="relative z-10 grid grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5] mt-6 group-hover:border-blue-100 transition-colors duration-300">
        {[
          { label: "ACCURACY", val: project.metrics.accuracy },
          { label: "LATENCY", val: project.metrics.latency },
          { label: "GAIN", val: project.metrics.gain },
        ].map((m, i) => (
          <div key={i} className="bg-white p-4 flex flex-col gap-1 transition-colors group-hover:bg-white/90">
            <span className="font-[family-name:var(--font-mono)] text-[8px] text-[#7B7B7B] uppercase tracking-widest">{m.label}</span>
            <span className="font-bold text-[#222222]">{m.val}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-6 border-t border-[#E5E5E5] flex justify-between items-center group-hover:border-blue-100 transition-colors duration-300">
        <span className="font-[family-name:var(--font-mono)] text-[9px] text-[#7B7B7B] uppercase tracking-widest">
          {project.techStack}
        </span>
        <a href={project.github} onClick={(e) => {
          if (project.id === 'openaudit') {
            e.preventDefault();
            // Let the parent handle the click, we'll just style it
          }
        }} className="font-[family-name:var(--font-mono)] text-[9px] font-bold text-[#222222] uppercase tracking-widest hover:text-blue-600 hover:translate-x-2 transition-all flex items-center gap-1">
          {project.id === 'openaudit' ? (
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              INITIALIZE SYSTEM
            </span>
          ) : (
            <>VIEW SYSTEM <span className="text-lg leading-none">→</span></>
          )}
        </a>
      </div>
      
      {/* Active Line Indicator */}
      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out ${isHovered ? 'w-full' : 'w-0'}`} />
    </motion.div>
  );
}
