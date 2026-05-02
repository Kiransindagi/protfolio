export interface Project {
  id: string;
  modelId: string;
  title: string;
  type: string;
  status: string;
  environment: string;
  description: string;
  keyComponents: string[];
  techStack: string;
  github: string;
  demo?: string;
  input: string;
  process: string;
  output: string;
  metrics: {
    accuracy: string;
    latency: string;
    gain: string;
  };
}

export const projects: Project[] = [
  {
    id: "promptx",
    modelId: "SYS_01",
    title: "PromptX",
    type: "Productivity · Desktop App",
    status: "Shipped",
    environment: "Desktop App",
    description: "A real-time prompt optimization desktop app triggered via Ctrl+X — works like Grammarly or Whisper Flow but for AI prompts. Enhances prompt clarity, specificity, and output quality on the fly without switching context.",
    keyComponents: ["Global hotkey trigger (Ctrl+X)", "On-the-fly prompt optimization", "Context-aware LLM API integration"],
    techStack: "Python / PyQt / Electron / LLM API",
    github: "#",
    input: "Raw User Prompt",
    process: "NLP Contextual Analysis → LLM Optimization",
    output: "Enhanced, highly specific AI prompt",
    metrics: { accuracy: "High", latency: "<800ms", gain: "+Quality" }
  },
  {
    id: "bondgard-pro",
    modelId: "SYS_02",
    title: "BondGard Pro",
    type: "Fintech · AI Engine",
    status: "Deployed",
    environment: "Cloud Platform",
    description: "An AI-powered bond analysis and portfolio management platform. Delivers real-time investment insights by synthesizing live market data, geopolitical signals, and macroeconomic indicators — modeled after institutional-grade tools like Morgan Stanley's research systems.",
    keyComponents: ["Real-time market data ingestion", "LangChain decision engine", "Geopolitical signal synthesizer"],
    techStack: "Python / FastAPI / LangChain / React",
    github: "#",
    input: "Live Market & Macro Data",
    process: "Data Synthesis → AI Decision Engine",
    output: "Real-time investment insights",
    metrics: { accuracy: "91.4%", latency: "Real-time", gain: "Inst-Grade" }
  },
  {
    id: "anpr-model",
    modelId: "SYS_03",
    title: "Number Plate Detection",
    type: "Computer Vision",
    status: "Deployed",
    environment: "CCTV Hardware",
    description: "End-to-end automatic number plate recognition (ANPR) model trained for real-world CCTV conditions — handles motion blur, low light, and partial occlusion.",
    keyComponents: ["YOLOv8 custom detection model", "OpenCV image pre-processing", "TensorFlow classification pipeline"],
    techStack: "Python / YOLOv8 / OpenCV / TensorFlow",
    github: "#",
    input: "Live CCTV Feed (Motion/Low Light)",
    process: "Object Detection → ROI Crop → OCR Pipeline",
    output: "Extracted License Plate Data",
    metrics: { accuracy: "96.5%", latency: "18ms", gain: "+400% FPS" }
  },
  {
    id: "agripulse",
    modelId: "SYS_04",
    title: "AgriPulse",
    type: "AgriTech · AI Agent",
    status: "Active Dev",
    environment: "Telephony & Web",
    description: "A dual-product system for Indian farmers. An AI voice calling agent delivers real-time information in local language — crop prices, weather forecasts, government schemes. The companion web platform covers logistics, global distribution, and farmer brand-building.",
    keyComponents: ["Twilio/VAPI voice AI integration", "Multilingual LangChain agent", "Real-time Weather & Market APIs"],
    techStack: "Python / Twilio / LangChain / FastAPI / React",
    github: "#",
    input: "Voice Input (Local Language)",
    process: "Speech-to-Text → LLM Query → Text-to-Speech",
    output: "Agronomic advice & market insights",
    metrics: { accuracy: "High", latency: "Low", gain: "Zero Smartphone Req." }
  },
  {
    id: "supply-chain-ai",
    modelId: "SYS_05",
    title: "Global Supply Chain",
    type: "Logistics",
    status: "Deployed",
    environment: "Web Dashboard",
    description: "A real-time supply chain monitoring and decision platform. Track ships, cargo routes, and economic delays while an AI layer surfaces geopolitical risk, port disruption alerts, and route optimization suggestions — all on a live global map.",
    keyComponents: ["Live ship & cargo tracking", "Geopolitical risk AI summarization", "Route optimization algorithm"],
    techStack: "Python / FastAPI / React / Mapbox",
    github: "#",
    input: "Tracking Data & Global News",
    process: "Data Aggregation → AI Risk Analysis",
    output: "Disruption alerts & Rerouting plans",
    metrics: { accuracy: "High", latency: "Real-time", gain: "Risk Mitigated" }
  },
  {
    id: "openaudit",
    modelId: "SYS_06",
    title: "OpenAudit",
    type: "AI Safety · RL",
    status: "Open Source",
    environment: "HF Ecosystem",
    description: "A production-grade OpenEnv environment for training AI agents to audit the Hugging Face ecosystem (2M+ models). Trains agents to automatically detect missing metadata, license conflicts, benchmark fraud, data quality issues, and dangerous tool code.",
    keyComponents: ["13 Tasks across 4 Safety Pillars", "Multi-step audit chains (Scan, Investigate, Report)", "Reinforcement learning training environment"],
    techStack: "Python / Reinforcement Learning / OpenEnv",
    github: "#",
    input: "2M+ Models & 500K+ Datasets",
    process: "Agentic Scan → Investigation → Reporting",
    output: "Comprehensive Safety & Quality Audit",
    metrics: { accuracy: "Scalable", latency: "Batch", gain: "Automated Safety" }
  },
  {
    id: "sih-2024",
    modelId: "SYS_07",
    title: "Capillary Electrolyzer",
    type: "Hardware · Clean Energy",
    status: "Finalist",
    environment: "Physical Prototype",
    description: "Smart India Hackathon 2024 Hardware Finalist. An electrolyzer system engineered for low-cost green hydrogen production targeting under $2/kg, using seawater as the primary feedstock — eliminating the need for purified water inputs.",
    keyComponents: ["Capillary-driven water transport mechanism", "Nickel foam (anode) & Copper mesh (cathode)", "Sintered steel capillary layer"],
    techStack: "Electrochemistry / Materials Engineering",
    github: "#",
    input: "Seawater Feedstock",
    process: "Capillary Action → Seawater Electrolysis",
    output: "Green Hydrogen Gas (< $2/kg)",
    metrics: { accuracy: "95% Eff.", latency: "Continuous", gain: "32% Less Waste" }
  }
];
