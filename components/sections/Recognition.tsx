"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Award = {
  title: string;
  org: string;
  year: string;
  image: string;
};

const awards: Award[] = [
  { title: "Computer Vision Specialization", org: "NVIDIA Deep Learning Institute", year: "2024", image: "https://placehold.co/1200x800/222222/FFFFFF/png?text=NVIDIA+Certificate" },
  { title: "Master Ethical Hacking & Cybersecurity", org: "Udemy · OCSALY Academy", year: "Sept. 7, 2025", image: "https://placehold.co/1200x800/222222/FFFFFF/png?text=CEH+Certificate" },
  { title: "30 Projects in 30 days of AI Bootcamp", org: "Udemy · School of AI", year: "Oct. 1, 2025", image: "https://placehold.co/1200x800/222222/FFFFFF/png?text=30+Projects+AI" },
  { title: "Corporate Finance Fundamentals", org: "Coursera", year: "Aug. 9, 2025", image: "https://placehold.co/1200x800/222222/FFFFFF/png?text=Finance+Fundamentals" },
  { title: "Introduction to Fintech", org: "Great Learning", year: "July 2024", image: "https://placehold.co/1200x800/222222/FFFFFF/png?text=Fintech+Certificate" },
  { title: "Data Science & AI Advanced Full Course", org: "Udemy · School of AI", year: "Aug. 1, 2026", image: "https://placehold.co/1200x800/222222/FFFFFF/png?text=Data+Science+AI" },
];

export default function Recognition() {
  const [selectedCert, setSelectedCert] = useState<Award | null>(null);

  const duplicatedAwards = [...awards, ...awards, ...awards];

  return (
    <section className="relative w-full py-24 bg-[#F8F8F8] border-t border-[#E5E5E5] overflow-hidden">
      <div className="container mb-16">
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.4em] mb-4 block">SECTION 05 / RECOGNITION</span>
        <h2 className="text-6xl font-bold text-[#222222] uppercase tracking-tighter">Certifications</h2>
      </div>

      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#E5E5E5] border-y border-[#E5E5E5] flex">
        <motion.div
          className="flex gap-px w-max"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {duplicatedAwards.map((award, i) => (
            <div
              key={i}
              onClick={() => setSelectedCert(award)}
              className="w-[350px] shrink-0 bg-white p-10 flex flex-col justify-between hover:bg-[#222222] hover:text-white transition-all group cursor-pointer border-r border-[#E5E5E5]"
            >
              <div className="font-[family-name:var(--font-mono)] text-[9px] text-[#7B7B7B] group-hover:text-[#7B7B7B] uppercase tracking-widest mb-6 flex justify-between items-center">
                <span>{award.year}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">VIEW CERTIFICATE ↗</span>
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-tight leading-tight mb-2">{award.title}</h3>
                <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-widest">{award.org}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Certification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-[#222222]/80 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white border border-[#E5E5E5] shadow-2xl z-10 flex flex-col"
            >
              <div className="p-4 border-b border-[#E5E5E5] flex justify-between items-center bg-[#F8F8F8]">
                <div>
                  <h4 className="text-sm font-bold text-[#222222] uppercase tracking-tight">{selectedCert.title}</h4>
                  <p className="font-[family-name:var(--font-mono)] text-[9px] text-[#7B7B7B] uppercase tracking-widest">{selectedCert.org} · {selectedCert.year}</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="text-2xl leading-none text-[#7B7B7B] hover:text-[#222222] transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-8 bg-white flex justify-center items-center overflow-hidden">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="max-h-[70vh] w-auto object-contain border border-[#E5E5E5] shadow-sm"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
