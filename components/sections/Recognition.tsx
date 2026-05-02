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
  { title: "NVIDIA DEEP LEARNING INSTITUTE", org: "Computer Vision Specialization", year: "2024", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" },
  { title: "KAGGLE BRONZE MEDAL", org: "Plant Pathology Challenge", year: "2023", image: "https://images.unsplash.com/photo-1589330694653-efa6475306e1?auto=format&fit=crop&w=1200&q=80" },
  { title: "DEEPLEARNING.AI", org: "Natural Language Processing Specialization", year: "2022", image: "https://images.unsplash.com/photo-1558025243-7a916027a44f?auto=format&fit=crop&w=1200&q=80" },
];

export default function Recognition() {
  const [selectedCert, setSelectedCert] = useState<Award | null>(null);

  return (
    <section className="relative w-full py-24 bg-[#F8F8F8] border-t border-[#E5E5E5]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              onClick={() => setSelectedCert(award)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 flex flex-col justify-between hover:bg-[#222222] hover:text-white transition-all group cursor-pointer"
            >
              <div className="font-[family-name:var(--font-mono)] text-[9px] text-[#7B7B7B] group-hover:text-[#7B7B7B] uppercase tracking-widest mb-6 flex justify-between items-center">
                <span>{award.year}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">VIEW CERTIFICATE ↗</span>
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-tight leading-tight mb-2">{award.title}</h3>
                <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-widest">{award.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
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
