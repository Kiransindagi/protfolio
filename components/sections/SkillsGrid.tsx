"use client";

import { motion } from 'framer-motion';

const skills = [
  { title: "Programming", tools: "Python (primary) · Java · C · PHP", level: 95 },
  { title: "Generative AI / LLMs", tools: "HuggingFace · LangChain · Mistral · Agent workflows", level: 92 },
  { title: "AI / Machine Learning", tools: "ML pipelines · Deep learning · Model optimization", level: 90 },
  { title: "Computer Vision", tools: "OpenCV · YOLOv8 · ResNet · Object detection", level: 90 },
  { title: "Data Science", tools: "EDA · Feature engineering · Data visualization", level: 88 },
  { title: "ML Libraries", tools: "NumPy · Pandas · Scikit-learn · TensorFlow", level: 88 },
  { title: "Backend / APIs", tools: "FastAPI · REST APIs · MySQL · DBMS", level: 85 },
  { title: "Edge AI / IoT", tools: "TFLite · Raspberry Pi · C++ · Quantization", level: 85 },
  { title: "Cloud / DevOps", tools: "AWS (basics) · Docker · Deployment fundamentals", level: 80 },
  { title: "CS Fundamentals", tools: "OOP (Java) · DBMS · Computer Networks", level: 85 },
  { title: "Dev Tools", tools: "Jupyter Notebook · Google Colab · Git", level: 90 },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="relative w-full py-32 bg-white">
      <div className="container">
        <div className="mb-20">
          <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-[0.4em] mb-4 block">SECTION 02 / STACK</span>
          <h2 className="text-6xl font-bold text-[#222222] uppercase tracking-tighter">Core Skills</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#222222] uppercase tracking-tight">{skill.title}</h3>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#7B7B7B] uppercase tracking-widest mt-1">{skill.tools}</p>
                </div>
                <span className="font-[family-name:var(--font-mono)] text-sm font-bold text-[#222222]">{skill.level}%</span>
              </div>
              <div className="h-px bg-[#E5E5E5] w-full relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-[#222222]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
