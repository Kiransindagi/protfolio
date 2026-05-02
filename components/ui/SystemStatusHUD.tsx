"use client";

import { useEffect, useState } from 'react';

export default function SystemStatusHUD() {
  const [time, setTime] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-IN', { 
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
      }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.3em] pointer-events-none select-none hidden md:flex flex-col items-end gap-1.5 opacity-40">
      <div className="flex items-center gap-2 text-[#222222]">
        <span className="w-1 h-1 bg-[#222222] rounded-full animate-pulse" />
        Status: Active
      </div>
      <div className="text-[#7B7B7B]">{time}</div>
      <div className="text-[#7B7B7B]">Loc: Hubballi, IN</div>
    </div>
  );
}
