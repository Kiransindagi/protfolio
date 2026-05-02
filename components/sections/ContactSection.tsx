"use client";

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-32 bg-[#F8F8F8] border-t border-[#E5E5E5]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          <div>
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.4em] mb-4 block">GET IN TOUCH</span>
            <h2 className="text-6xl md:text-8xl font-bold text-[#222222] uppercase tracking-tighter leading-none mb-10">
              Ready to <br /><span className="text-[#7B7B7B]">Innovate?</span>
            </h2>
            <p className="text-lg text-[#7B7B7B] max-w-md leading-relaxed">
              Open to internships, full-time roles, and research collaborations in AI/ML, Computer Vision, and Edge AI. Let&apos;s build something that survives the real world.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-widest block mb-4 border-b border-[#E5E5E5] pb-2">Direct</span>
                <a href="mailto:kiransindagi7@gmail.com" className="text-xl font-bold text-[#222222] uppercase tracking-tight hover:text-[#7B7B7B] transition-colors">kiransindagi7@gmail.com</a>
              </div>
              <div>
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-widest block mb-4 border-b border-[#E5E5E5] pb-2">Social</span>
                <div className="flex gap-6 flex-wrap">
                  <a href="https://linkedin.com/in/kiran-sindagi-a14a6a270" target="_blank" className="text-xl font-bold text-[#222222] uppercase tracking-tight hover:text-[#7B7B7B] transition-colors">LinkedIn</a>
                  <a href="https://github.com/Kiransindagi" target="_blank" className="text-xl font-bold text-[#222222] uppercase tracking-tight hover:text-[#7B7B7B] transition-colors">GitHub</a>
                  <a href="https://huggingface.co/kiransin" target="_blank" className="text-xl font-bold text-[#222222] uppercase tracking-tight hover:text-[#7B7B7B] transition-colors">HuggingFace</a>
                </div>
              </div>
            </div>

            <div className="p-10 bg-[#222222] text-white">
              <span className="font-[family-name:var(--font-mono)] text-[9px] text-[#7B7B7B] uppercase tracking-widest mb-6 block">KIRAN_SINDAGI.OS // v2.0.4</span>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold tracking-widest uppercase">GM University, Davangere, Karnataka</span>
                <span className="text-xs font-bold tracking-widest uppercase">2026 EDITION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
