"use client";

import { motion } from 'framer-motion';

const profileData = [
  { label: "FULL NAME", value: "Kiran Sindagi" },
  { label: "ORIGIN", value: "Bagalkot, Karnataka" },
  { label: "EDUCATION", value: "B.TECH CSE · GM University, Davangere, Karnataka." },
  { label: "SEMESTER", value: "6th Semester", accent: true },
  { label: "SPECIALIZATION", value: "Artificial Intelligence and Machine Learning", accent: true },
  { label: "INTERNSHIP ", value: "Placement Intern - Gem Ventures, Davangere, Karnataka", accent: true },
];

const visionItems = [
  "Closing the gap between theoretical AI and physical hardware constraints.",
  "Building autonomous systems that operate efficiently in the real world.",
  "Democratizing edge intelligence for low-power IoT ecosystems.",
];

export default function IdentityProfile() {
  return (
    <section id="about" className="relative w-full py-32 bg-[#F8F8F8] border-t border-[#E5E5E5]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.4em] mb-4 block">SECTION 01 / IDENTITY</span>
            <h2 className="text-6xl font-bold text-[#222222] uppercase tracking-tighter leading-none">
              Who is <br /><span className="text-[#7B7B7B]">Kiran?</span>
            </h2>
            <p className="mt-10 text-lg text-[#7B7B7B] leading-relaxed max-w-md">
              An AIML student driven by the intersection of hardware and intelligence. From state-level hackathons to national finals, I build systems that solve real-world constraints.
            </p>

            <div className="mt-16 space-y-8 border-l-2 border-[#222222] pl-8">
              {visionItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <p className="text-sm font-bold uppercase tracking-tight text-[#222222] leading-relaxed italic">
                    &quot;{item}&quot;
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Data Table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-y border-[#E5E5E5] divide-y divide-[#E5E5E5]"
          >
            {profileData.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center py-6 gap-2 md:gap-20">
                <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-widest w-32 shrink-0">{item.label}</span>
                <span className={`text-xl font-bold uppercase tracking-tight ${item.accent ? 'text-[#222222]' : 'text-[#7B7B7B]'}`}>{item.value}</span>
              </div>
            ))}

            {/* Additional Stats Strip */}
            <div className="pt-10 grid grid-cols-2 gap-10">
              <div>
                <span className="font-[family-name:var(--font-mono)] text-[9px] text-[#7B7B7B] uppercase tracking-widest mb-2 block">CUMULATIVE GPA</span>
                <span className="text-3xl font-bold text-[#222222]">8.19 / 10</span>
              </div>
              <div>
                <span className="font-[family-name:var(--font-mono)] text-[9px] text-[#7B7B7B] uppercase tracking-widest mb-2 block">PROJECTS COMPLETED</span>
                <span className="text-3xl font-bold text-[#222222]">6+</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
