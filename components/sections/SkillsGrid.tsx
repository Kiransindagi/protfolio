"use client";

import { motion } from 'framer-motion';

const skills = [
  { title: "Programming", tools: "Python (Primary) · Java · SQL · JavaScript · TypeScript · C · PHP", level: 95 },
  { title: "Generative AI & LLMs", tools: "Hugging Face · LangChain · LlamaIndex · RAG · AI Agents · Prompt Engineering · OpenAI GPT · Gemini · Claude · Vector Databases", level: 92 },
  { title: "AI / Machine Learning", tools: "ML Pipelines · Deep Learning · Model Training · Model Evaluation · Feature Engineering · Model Optimization", level: 90 },
  { title: "Computer Vision", tools: "OpenCV · TensorFlow · YOLOv8 · ResNet · Object Detection · Image Processing", level: 90 },
  { title: "Data Science", tools: "NumPy · Pandas · Data Cleaning · EDA · Data Visualization · Statistical Analysis", level: 88 },
  { title: "ML Frameworks", tools: "Scikit-learn · TensorFlow · Keras · XGBoost", level: 88 },
  { title: "Backend & APIs", tools: "FastAPI · REST APIs · PostgreSQL · MySQL · API Integration", level: 85 },
  { title: "Frontend", tools: "React.js · Next.js · HTML5 · CSS3", level: 80 },
  { title: "DevOps & Deployment", tools: "Docker · Git · GitHub · Linux · CI/CD · Hugging Face Spaces · Vercel", level: 85 },
  { title: "Development Tools", tools: "VS Code · Jupyter Notebook · Google Colab · Postman", level: 90 },
  { title: "Embedded Systems & IoT", tools: "Arduino · ESP32 · Raspberry Pi · C++ · Sensor Integration · Hardware-Software Integration", level: 85 },
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
