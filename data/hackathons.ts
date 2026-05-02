export interface Hackathon {
  id: string;
  name: string;
  organizer: string;
  year: string;
  result: string;
  resultTag: string;
  project: string;
  description: string;
  domain: string;
}

export const hackathons: Hackathon[] = [
  {
    id: "sih-2024",
    name: "Smart India Hackathon 2024",
    organizer: "Govt of India",
    year: "2024",
    result: "National Finalist",
    resultTag: "Finalist",
    project: "Green Hydrogen Optimization",
    description: "Selected as National Finalist among 1.2M+ participants. Built a real-time AI system for energy optimization.",
    domain: "AI + Energy"
  }
];
