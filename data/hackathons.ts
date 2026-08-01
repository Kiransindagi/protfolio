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
  certImage?: string;
  solutionPdf?: string;
  teamImage?: string;
}

export const hackathons: Hackathon[] = [
  {
    id: "sih-2024",
    name: "Smart India Hackathon 2024",
    organizer: "Government of India | KIET Group of Institutions, Ghaziabad",
    year: "2024",
    result: "National Finalist",
    resultTag: "National Finalist",
    project: "Industrial-Scale Green Hydrogen Production",
    description: "Selected as a National Finalist in the Smart India Hackathon (SIH) 2024. Collaborated in a multidisciplinary team to design a Green Hydrogen production system using capillary-fed electrolysis, Forward Osmosis (FO), and Capacitive Deionization (CDI). Achieved a projected LCOH below USD 1/kg, surpassing the sub-USD 2/kg target.",
    domain: "Green Hydrogen • Capillary-Fed Electrolysis • Forward Osmosis (FO) • Capacitive Deionization (CDI) • Seawater Treatment",
    certImage: "/hackathons/sih_cert.png",
    solutionPdf: "/hackathons/sih_solution.pdf",
    teamImage: "/hackathons/sih_team.jpg",
  }
];
