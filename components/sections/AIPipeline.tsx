"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const pipelineSteps = [
  {
    id: "01",
    icon: "◉",
    label: "DISCOVER",
    desc: ["Research", "Problem Framing", "Architecture"],
    terminal: ["$ init project", "✔ Research loaded", "✔ Architecture framed", ">> Ready"],
    metrics: { projects: "12", models: "35" }
  },
  {
    id: "02",
    icon: "⬢",
    label: "DATA",
    desc: ["Cleaning", "EDA", "Feature Engineering"],
    terminal: ["$ load_data.py", "✔ Cleaned 10M rows", "✔ Features engineered", ">> Data ready"],
    metrics: { datasets: "8", pipelines: "15" }
  },
  {
    id: "03",
    icon: "△",
    label: "BUILD",
    desc: ["Training", "Validation", "LLMs", "AI Agents"],
    terminal: ["$ train_model()", "✔ Loss: 0.01", "✔ Validation passed", ">> Model saved"],
    metrics: { models: "35", agents: "4" }
  },
  {
    id: "04",
    icon: "◈",
    label: "OPTIMIZE",
    desc: ["Inference", "Latency", "Quantization", "Benchmarking"],
    terminal: ["$ run_quantization", "✔ 8-bit pruning", "✔ Latency: 12ms", ">> Optimized"],
    metrics: { latency: "12ms", sparsity: "70%" }
  },
  {
    id: "05",
    icon: "□",
    label: "DEPLOY",
    desc: ["FastAPI", "Docker", "REST", "Cloud"],
    terminal: ["$ docker-compose up", "✔ Container built", "✔ Cloud synced", ">> Live"],
    metrics: { deployments: "6", containers: "24" }
  },
  {
    id: "06",
    icon: "◒",
    label: "MONITOR",
    desc: ["Metrics", "Logs", "Evaluation", "Iteration"],
    terminal: ["$ tail -f logs", "✔ 99.9% Uptime", "✔ Metrics green", ">> Monitoring"],
    metrics: { uptime: "99.9%", alerts: "0" }
  }
];

const flowSteps = ["Research", "Data", "Training", "Evaluation", "Deployment", "Monitoring"];

export default function AIPipeline() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <section className="relative w-full py-32 bg-[#1A1A1A] text-white overflow-hidden border-t border-[#333]">
      {/* Subtle Background Blueprint */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center font-[family-name:var(--font-mono)] text-[20px] md:text-[40px] whitespace-pre overflow-hidden leading-tight">
        {`□□□□□□□□□□□□□□\n01010101010101\n───────\nAPI\nMODEL\nDATA\nGPU\n01010101010101\n□□□□□□□□□□□□□□`}
      </div>

      <div className="container relative z-10">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.4em] mb-4 block">SYSTEM DESIGN PROTOCOL</span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
              From Idea <br /><span className="text-[#7B7B7B]">To Production</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#7B7B7B] font-[family-name:var(--font-mono)] leading-relaxed">
            Every project follows the same engineering lifecycle—from research and data acquisition to production deployment, monitoring, and continuous improvement.
          </p>
        </div>

        {/* Progress Line */}
        <div className="hidden lg:flex items-center w-full mb-12">
          {pipelineSteps.map((step, idx) => (
            <div key={idx} className="flex-1 flex items-center">
              <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] tracking-widest mr-4">{step.label}</span>
              <div className="h-px bg-[#333] flex-1 mr-4 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.2 }}
                  className="absolute inset-0 bg-[#E5E5E5]" 
                />
              </div>
              <span className="text-[10px] text-[#E5E5E5] mr-4">●</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0 border-y border-l border-[#333]">
          {pipelineSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              className="relative p-8 border-r border-[#333] h-[360px] group overflow-hidden bg-[#1A1A1A] hover:bg-[#222] transition-colors cursor-crosshair"
            >
              {/* Default State */}
              <div className={`transition-opacity duration-300 ${hoveredStep === step.id ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex justify-between items-center mb-16 text-[#7B7B7B]">
                  <span className="font-[family-name:var(--font-mono)] text-xs font-bold">{step.id}</span>
                  <span className="text-xl">{step.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold uppercase tracking-tight mb-6 group-hover:text-[#FFF] text-[#E5E5E5]">{step.label}</h3>
                <ul className="flex flex-col gap-3">
                  {step.desc.map((item, i) => (
                    <li key={i} className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-widest">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Terminal State */}
              <div className={`absolute inset-0 p-8 flex flex-col bg-[#222] transition-opacity duration-300 ${hoveredStep === step.id ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-6 text-[#FFF] animate-pulse">
                  ████████
                </h3>
                <div className="font-[family-name:var(--font-mono)] text-[11px] text-[#E5E5E5] flex flex-col gap-3 mb-auto leading-relaxed">
                  {step.terminal.map((line, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: hoveredStep === step.id ? 1 : 0, x: hoveredStep === step.id ? 0 : -5 }}
                      transition={{ delay: i * 0.15 }}
                    >
                      {line}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#333] grid grid-cols-2 gap-4">
                  {Object.entries(step.metrics).map(([key, val], i) => (
                    <div key={i}>
                      <div className="font-[family-name:var(--font-mono)] text-[9px] text-[#7B7B7B] uppercase tracking-widest mb-1">{key}</div>
                      <div className="font-[family-name:var(--font-mono)] text-xs text-white">{val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Flow Map */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-[#7B7B7B] font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest">
          {flowSteps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <span className="hover:text-white transition-colors cursor-crosshair">{step}</span>
              {i < flowSteps.length - 1 && (
                <motion.span 
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="md:hidden block"
                >
                  ↓
                </motion.span>
              )}
              {i < flowSteps.length - 1 && (
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="hidden md:block"
                >
                  →
                </motion.span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
