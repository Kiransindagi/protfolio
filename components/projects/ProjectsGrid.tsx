"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects, type Project } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

// Duplicate projects for infinite loop
const duplicatedProjects = [...projects, ...projects];

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && scrollRef.current.children.length > 0) {
        const { scrollLeft, scrollWidth } = scrollRef.current;
        // Scroll exactly the width of one card element
        const cardWidth = scrollRef.current.children[0].clientWidth;
        const halfWidth = scrollWidth / 2;
        
        if (scrollLeft >= halfWidth) {
          // Seamlessly jump back to start (circular loop)
          scrollRef.current.style.scrollBehavior = 'auto';
          scrollRef.current.scrollLeft = scrollLeft - halfWidth;
          
          // Allow browser to render the jump, then smooth scroll next
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (scrollRef.current) {
                scrollRef.current.style.scrollBehavior = 'smooth';
                scrollRef.current.scrollBy({ left: cardWidth });
              }
            });
          });
        } else {
          scrollRef.current.style.scrollBehavior = 'smooth';
          scrollRef.current.scrollBy({ left: cardWidth });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="relative w-full py-32 bg-white">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.4em] mb-4 block">SECTION 04 / CASE STUDIES</span>
            <h2 className="text-6xl md:text-8xl font-bold text-[#222222] uppercase tracking-tighter leading-none">
              Featured<br /><span className="text-[#7B7B7B]">Work</span>
            </h2>
          </motion.div>
          <div className="flex flex-col md:items-end gap-8">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-xs text-sm text-[#7B7B7B] font-[family-name:var(--font-mono)] uppercase tracking-widest leading-relaxed md:text-right"
            >
              A collection of systems ranging from national hackathons to experimental AI research. Circular loop interface.
            </motion.p>
          </div>
        </div>

        {/* Horizontal Carousel with Sharp Borders */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide border-t border-l border-[#E5E5E5] items-stretch"
          style={{ scrollBehavior: 'smooth' }}
        >
          {duplicatedProjects.map((p, i) => (
            <div 
              key={`${p.id}-${i}`} 
              onClick={() => setSelectedProject(p)} 
              className="cursor-pointer shrink-0 w-full md:w-1/2 snap-start flex flex-col"
            >
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom Stat Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 border border-[#E5E5E5] bg-[#F8F8F8]">
          {[
            { label: "Total Systems", val: "7" },
            { label: "Deployments", val: "5" },
            { label: "Hardware Nodes", val: "1 (Raspberry Pi)" },
            { label: "Model Sparsity", val: "70%" },
          ].map((stat, i) => (
            <div key={i} className="p-8 border-r border-[#E5E5E5] last:border-r-0 flex flex-col gap-2">
              <span className="font-[family-name:var(--font-mono)] text-[9px] text-[#7B7B7B] uppercase tracking-widest">{stat.label}</span>
              <span className="text-2xl font-bold text-[#222222] uppercase tracking-tight">{stat.val}</span>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
