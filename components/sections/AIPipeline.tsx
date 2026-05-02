"use client";

import { motion } from 'framer-motion';

const steps = [
  { id: "01", label: "DATA", desc: "CURATION & PRE-PROCESSING" },
  { id: "02", label: "MODEL", desc: "TRAINING & VALIDATION" },
  { id: "03", label: "OPTIMIZE", desc: "PRUNING & QUANTIZATION" },
  { id: "04", label: "DEPLOY", desc: "EDGE & CLOUD PIPELINES" },
];

export default function AIPipeline() {
  return (
    <section className="relative w-full py-24 bg-[#222222] text-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="max-w-sm">
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.4em] mb-4 block">PIPELINE / WORKFLOW</span>
            <h2 className="text-4xl font-bold uppercase tracking-tight">How I Build <br /><span className="text-[#7B7B7B]">Intelligent Systems</span></h2>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-[#333333] flex flex-col gap-8 hover:border-[#555555] transition-colors group"
              >
                <span className="font-[family-name:var(--font-mono)] text-sm font-bold text-[#7B7B7B] group-hover:text-white">{step.id}</span>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">{step.label}</h3>
                  <p className="font-[family-name:var(--font-mono)] text-[9px] text-[#7B7B7B] uppercase tracking-widest mt-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
