"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { type Project } from '@/data/projects';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function OSModal({ project, onClose }: Props) {
  const [bootStep, setBootStep] = useState(0);

  // Boot sequence logic
  useEffect(() => {
    const sequence = [
      600,  // Initialize
      800,  // Load model
      600,  // Scan dataset
      800,  // Evaluate
      400,  // Complete
    ];
    let currentStep = 0;
    
    const runSequence = async () => {
      for (const delay of sequence) {
        await new Promise(r => setTimeout(r, delay));
        currentStep++;
        setBootStep(currentStep);
      }
    };
    runSequence();
  }, []);

  const logs = [
    "[12:01:20] Initializing OpenAudit kernel...",
    "[12:01:21] Loading model... ✓ Success",
    "[12:01:22] Scanning 500K+ datasets... ✓ Success",
    "[12:01:23] Evaluating reward models... ✓ Success",
    "[12:01:24] Generating report... ✓ Complete",
  ];

  const isBooted = bootStep >= logs.length;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] text-[#e5e5e5] font-[family-name:var(--font-mono)]"
      >
        {/* Floating background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
           <div className="absolute top-10 left-10 text-4xl">010010</div>
           <div className="absolute top-1/4 right-1/4 text-2xl">Agent()</div>
           <div className="absolute bottom-1/4 left-1/3 text-3xl">Reward()</div>
           <div className="absolute top-1/2 right-10 text-xl">Embedding()</div>
        </div>

        {!isBooted ? (
          <div className="w-full max-w-2xl p-8 flex flex-col gap-2 relative z-10">
            <h2 className="text-blue-500 mb-4">&gt; INITIALIZE SYSTEM</h2>
            {logs.slice(0, bootStep + 1).map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm"
              >
                {log}
              </motion.div>
            ))}
            {bootStep < logs.length && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-5 bg-white mt-2"
              />
            )}
            
            <div className="mt-8 text-xs text-gray-600">
              Loading...<br/>
              <div className="flex mt-1">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className={`h-2 w-4 mr-1 ${i < (bootStep / logs.length) * 20 ? 'bg-blue-500' : 'bg-gray-800'}`} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full h-full md:w-[90vw] md:h-[90vh] bg-[#111] border border-[#333] shadow-2xl flex flex-col overflow-y-auto overflow-x-hidden scrollbar-hide"
          >
            {/* Header bar */}
            <div className="sticky top-0 z-50 flex justify-between items-center p-4 border-b border-[#333] bg-[#111]/90 backdrop-blur-md">
              <div>
                <h1 className="text-2xl font-bold uppercase tracking-widest text-white">{project.title}</h1>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">AI Safety Operating System</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-white px-4 py-2 border border-[#333] hover:bg-[#222] transition-colors">
                TERMINATE [X]
              </button>
            </div>

            <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Metrics & Status */}
              <div className="flex flex-col gap-8">
                {/* Status Block */}
                <div className="p-6 border border-[#333] bg-[#1a1a1a] relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="flex items-center gap-3 mb-6 relative z-10">
                     <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                     <span className="text-green-500 font-bold tracking-widest">ONLINE</span>
                   </div>
                   <div className="grid grid-cols-2 gap-4 text-xs text-gray-400 uppercase tracking-widest relative z-10">
                     <div>
                       <div className="mb-1">Latency</div>
                       <div className="text-white text-lg">68ms</div>
                     </div>
                     <div>
                       <div className="mb-1">Version</div>
                       <div className="text-white text-lg">v2.1</div>
                     </div>
                   </div>
                </div>

                {/* Animated Counters */}
                <div className="p-6 border border-[#333] bg-[#1a1a1a] flex flex-col gap-6">
                   <div>
                     <div className="text-4xl text-white font-bold mb-1">
                        <Counter from={0} to={2000000} duration={2} format={(n) => (n/1000000).toFixed(1) + 'M+'} />
                     </div>
                     <div className="text-xs text-gray-400 uppercase tracking-widest">Models</div>
                   </div>
                   <div>
                     <div className="text-4xl text-white font-bold mb-1">
                        <Counter from={0} to={523000} duration={2} format={(n) => Math.floor(n/1000) + 'K+'} />
                     </div>
                     <div className="text-xs text-gray-400 uppercase tracking-widest">Datasets</div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <div className="text-2xl text-white font-bold mb-1"><Counter from={0} to={13} duration={1.5} /></div>
                       <div className="text-[10px] text-gray-400 uppercase tracking-widest">Tasks</div>
                     </div>
                     <div>
                       <div className="text-2xl text-white font-bold mb-1"><Counter from={0} to={4} duration={1.5} /></div>
                       <div className="text-[10px] text-gray-400 uppercase tracking-widest">Pillars</div>
                     </div>
                   </div>
                </div>
              </div>

              {/* Main Column: Timeline & Arch */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                
                {/* Timeline */}
                <div className="p-6 border border-[#333] bg-[#1a1a1a]">
                  <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-6">Project Timeline</h3>
                  <div className="flex flex-col gap-4 text-xs font-bold">
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-gray-400 text-right">Research</div>
                      <div className="flex-1 bg-[#222] h-4 relative"><motion.div initial={{width:0}} animate={{width:'100%'}} transition={{duration:1, delay: 0.2}} className="absolute top-0 left-0 h-full bg-blue-600/50" /></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-gray-400 text-right">Prototype</div>
                      <div className="flex-1 bg-[#222] h-4 relative"><motion.div initial={{width:0}} animate={{width:'100%'}} transition={{duration:1.2, delay: 0.2}} className="absolute top-0 left-0 h-full bg-blue-500" /></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-gray-400 text-right">Training</div>
                      <div className="flex-1 bg-[#222] h-4 relative"><motion.div initial={{width:0}} animate={{width:'90%'}} transition={{duration:1.4, delay: 0.2}} className="absolute top-0 left-0 h-full bg-purple-500" /></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-gray-400 text-right">Deployment</div>
                      <div className="flex-1 bg-[#222] h-4 relative"><motion.div initial={{width:0}} animate={{width:'100%'}} transition={{duration:1.6, delay: 0.2}} className="absolute top-0 left-0 h-full bg-purple-400" /></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-white text-right">Production</div>
                      <div className="flex-1 bg-[#222] h-4 relative"><motion.div initial={{width:0}} animate={{width:'70%'}} transition={{duration:1.8, delay: 0.2}} className="absolute top-0 left-0 h-full bg-green-500" /></div>
                    </div>
                  </div>
                </div>

                {/* Architecture */}
                <div className="p-6 border border-[#333] bg-[#1a1a1a]">
                  <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-8">Architecture Flow</h3>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{delay:0.5}} className="px-8 py-3 border border-gray-600 bg-[#222] text-sm w-48 text-center">Datasets</motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.7}} className="text-gray-500 text-xl">↓</motion.div>
                    <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{delay:0.9}} className="px-8 py-3 border border-blue-600 bg-blue-900/20 text-blue-400 text-sm w-48 text-center">Cleaning</motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.1}} className="text-gray-500 text-xl">↓</motion.div>
                    <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{delay:1.3}} className="px-8 py-3 border border-purple-600 bg-purple-900/20 text-purple-400 text-sm w-48 text-center">Embedding</motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}} className="text-gray-500 text-xl">↓</motion.div>
                    <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{delay:1.7}} className="px-8 py-3 border border-green-600 bg-green-900/20 text-green-400 text-sm font-bold w-48 text-center">Agent</motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.9}} className="text-gray-500 text-xl">↓</motion.div>
                    <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{delay:2.1}} className="px-8 py-3 border border-yellow-600 bg-yellow-900/20 text-yellow-400 text-sm w-48 text-center">Evaluation</motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.3}} className="text-gray-500 text-xl">↓</motion.div>
                    <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{delay:2.5}} className="px-8 py-3 border border-gray-600 bg-[#222] text-sm w-48 text-center">Report</motion.div>
                  </div>
                </div>

                {/* Benchmarks */}
                <div className="p-6 border border-[#333] bg-[#1a1a1a]">
                  <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-6">Benchmarks vs Baseline</h3>
                  <div className="flex flex-col gap-6 text-xs font-bold">
                    <div>
                      <div className="flex justify-between mb-2 text-sm">
                        <span>OpenAudit Model</span>
                        <span className="text-green-400">91.4% (↑ 4.8%)</span>
                      </div>
                      <div className="w-full bg-[#222] h-6 relative"><motion.div initial={{width:0}} animate={{width:'91.4%'}} transition={{duration:1, delay:0.5}} className="absolute top-0 left-0 h-full bg-green-500" /></div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2 text-gray-400">
                        <span>GPT-4</span>
                        <span>86.6%</span>
                      </div>
                      <div className="w-full bg-[#222] h-4 relative"><motion.div initial={{width:0}} animate={{width:'86.6%'}} transition={{duration:1, delay:0.7}} className="absolute top-0 left-0 h-full bg-gray-500" /></div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2 text-gray-400">
                        <span>Claude</span>
                        <span>82.1%</span>
                      </div>
                      <div className="w-full bg-[#222] h-4 relative"><motion.div initial={{width:0}} animate={{width:'82.1%'}} transition={{duration:1, delay:0.9}} className="absolute top-0 left-0 h-full bg-gray-500" /></div>
                    </div>
                  </div>
                </div>

                {/* Engineering Decisions */}
                <div className="p-6 border border-[#333] bg-[#1a1a1a]">
                  <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-6">Engineering Decisions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed">
                    <div className="bg-[#111] p-6 border border-[#333]">
                      <strong className="text-blue-400 block mb-3 uppercase tracking-widest text-xs">Why Reinforcement Learning?</strong>
                      <p className="text-gray-400">Standard supervised models couldn't handle the multi-step reasoning needed to audit a model card effectively. RL enabled agents to explore repo contents dynamically and adapt to edge cases.</p>
                    </div>
                    <div className="bg-[#111] p-6 border border-[#333]">
                      <strong className="text-purple-400 block mb-3 uppercase tracking-widest text-xs">Why OpenEnv?</strong>
                      <p className="text-gray-400">Provides a sandboxed, reproducible environment critical for AI safety testing where untrusted code execution is a constant threat. Ensures audits don't compromise host integrity.</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

// Simple counter component
function Counter({ from, to, duration, format }: { from: number, to: number, duration: number, format?: (n: number) => string }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span>{format ? format(count) : count}</span>;
}
