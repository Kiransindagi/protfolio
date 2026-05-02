"use client";

import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Hackathons', href: '#hackathons' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute top-10 left-1/2 -translate-x-1/2 z-[80] pointer-events-auto"
    >
      <div className="px-10 py-4 bg-white/10 backdrop-blur-[32px] border border-white/40 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] flex items-center justify-center gap-10 group transition-all duration-500 hover:bg-white/20 hover:border-white/60">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="font-[family-name:var(--font-mono)] text-[9px] font-bold uppercase tracking-[0.2em] text-[#222222] hover:text-[#000000] transition-colors relative"
          >
            {link.name}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#222222] transition-all group-hover:w-full opacity-0 group-hover:opacity-100" />
          </a>
        ))}
        
        {/* Crystal highlight effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
      </div>
    </motion.nav>
  );
}
