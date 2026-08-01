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
    github: "https://github.com/Kiransindagi/bondguard_pro",
    input: "Live Market & Macro Data",
    process: "Data Synthesis → AI Decision Engine",
    output: "Real-time investment insights",
    metrics: { accuracy: "91.4%", latency: "Real-time", gain: "Inst-Grade" }
  },
  {
    id: "satellite-change-detection",
    modelId: "SYS_03",
    title: "Satellite Change Detection Pipeline",
    type: "Computer Vision",
    status: "Deployed",
    environment: "ML Pipeline",
    description: "A production-quality, sensor-agnostic change-detection pipeline designed to localize structural changes between multi-temporal satellite image pairs using SSIM-based dissimilarity mapping and morphological filtering.",
    keyComponents: ["SSIM-based dissimilarity mapping", "Morphological noise filtering", "Contour-based region extraction"],
    techStack: "Python / OpenCV / Deep Learning",
    github: "https://github.com/Kiransindagi/Satellite-Change-Detection-Pipeline",
    input: "Multi-temporal Satellite Image Pairs",
    process: "Preprocessing → SSIM Detection → Morphological Filtering",
    output: "Change Heatmaps & Confidence Scores",
    metrics: { accuracy: "76.7% Recall", latency: "2.17s", gain: "Zero-Shot" }
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
    github: "https://huggingface.co/spaces/kiransin/openaudit",
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
  },
  {
    id: "cardiorisk-ai",
    modelId: "SYS_08",
    title: "CardioRisk AI",
    type: "Healthcare · ML",
    status: "Active Dev",
    environment: "Jupyter / ML Pipeline",
    description: "Heart disease risk classifier trained on 13 clinical indicators (UCI Cleveland dataset). Uses SHAP explainability to surface per-patient risk factors and tunes the decision threshold for recall, since missed diagnoses carry higher cost than false alarms in a medical context.",
    keyComponents: ["Random Forest / Logistic Regression comparison", "SHAP per-patient explainability", "Recall-optimized threshold tuning"],
    techStack: "Python / Scikit-learn / SHAP / Pandas",
    github: "https://github.com/Kiransindagi/CARDIORISK-AI",
    input: "Patient Clinical Records (13 features)",
    process: "Preprocessing → Model Training → SHAP Analysis",
    output: "Disease Risk Score + Feature Explanation",
    metrics: { accuracy: "92% Recall", latency: "Batch", gain: "Cost-Sensitive" }
  },
  {
    id: "student-performance-early-warning-system",
    modelId: "SYS_09",
    title: "Student Performance Early Warning System",
    type: "EdTech · ML",
    status: "Active Dev",
    environment: "Jupyter / ML Pipeline",
    description: "Predicts at-risk students from demographic, family, and behavioral data rather than relying only on grades already earned. Includes a leakage-free model variant built specifically for early intervention, plus a fairness audit across gender and location.",
    keyComponents: ["Leakage-aware feature selection", "Fairness audit across demographic groups", "Early-intervention risk scoring"],
    techStack: "Python / Scikit-learn / Pandas / Seaborn",
    github: "https://github.com/Kiransindagi/student-performance-early-warning-system",
    input: "Student Demographic & Behavioral Data",
    process: "Feature Engineering → Model Training → Fairness Audit",
    output: "At-Risk Student Flag + Contributing Factors",
    metrics: { accuracy: "89% AUC", latency: "Batch", gain: "Fair Audited" }
  },
  {
    id: "customer-churn-prediction",
    modelId: "SYS_10",
    title: "Customer Churn Prediction",
    type: "Business Analytics · ML",
    status: "Active Dev",
    environment: "Jupyter / ML Pipeline",
    description: "Telco churn prediction framed around business outcomes — translates model output into customer lifetime value at risk, segments high-churn cohorts, and recommends targeted retention actions rather than reporting a bare accuracy score.",
    keyComponents: ["Churn-risk segmentation", "Customer lifetime value impact calculation", "Retention strategy recommendations"],
    techStack: "Python / Scikit-learn / Pandas / Matplotlib",
    github: "https://github.com/Kiransindagi/Customer-Churn-Prediction",
    input: "Customer Account & Service Usage Data",
    process: "Feature Engineering → Classification → Business Impact Mapping",
    output: "Churn Probability + Revenue-at-Risk Estimate",
    metrics: { accuracy: "85% F1", latency: "Batch", gain: "ROI Focused" }
  },
  {
    id: "house-price-prediction",
    modelId: "SYS_11",
    title: "House Price Prediction",
    type: "Real Estate · ML",
    status: "Active Dev",
    environment: "Jupyter / ML Pipeline",
    description: "Ames Housing price prediction comparing interpretable models (Ridge/Lasso) against ensemble methods (Random Forest/Gradient Boosting), with explicit handling of skewed price distributions and multicollinearity between size-related features.",
    keyComponents: ["Log-transformed regression target", "VIF-based multicollinearity check", "Linear vs. ensemble model comparison"],
    techStack: "Python / Scikit-learn / Pandas / Seaborn",
    github: "https://github.com/Kiransindagi/House-Price-Prediction",
    input: "Property Size, Quality & Location Data",
    process: "Feature Engineering → Model Comparison → Price Prediction",
    output: "Estimated Sale Price + Key Value Drivers",
    metrics: { accuracy: "$18.5k RMSE", latency: "Batch", gain: "Interpretable" }
  },
  {
    id: "credit-risk-prediction",
    modelId: "SYS_12",
    title: "Credit Risk Prediction",
    type: "Fintech · ML",
    status: "Active Dev",
    environment: "Jupyter / ML Pipeline",
    description: "Credit scorecard model on the German Credit dataset built around cost-sensitive evaluation — since misclassifying a bad borrower as good costs far more than the reverse — with full explainability for loan-decision justification.",
    keyComponents: ["Cost-sensitive evaluation metric", "Logistic regression scorecard", "SHAP-based decision explainability"],
    techStack: "Python / Scikit-learn / SHAP / Pandas",
    github: "https://github.com/Kiransindagi/Credit-Risk-Prediction",
    input: "Applicant Financial & Employment History",
    process: "Preprocessing → Scorecard Modeling → Cost-Sensitive Evaluation",
    output: "Credit Risk Classification + Justification",
    metrics: { accuracy: "94% Recall", latency: "Batch", gain: "Cost-Sensitive" }
  }
];
