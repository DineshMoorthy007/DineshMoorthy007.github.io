export interface TechCategory {
  title: string;
  items: string[];
  description?: string;
}

export interface CoreArea {
  number: string;
  title: string;
  tagline: string;
  technologies: string[];
  color: string;
  bgGlow: string;
  accentBorder: string;
}

export const coreAreas: CoreArea[] = [
  {
    number: "01",
    title: "SOFTWARE",
    tagline: "Full-stack applications, APIs, architecture and developer tools.",
    technologies: ["React", "Spring Boot", "Go", "Node.js", "REST APIs"],
    color: "#5B8DEF",
    bgGlow: "rgba(91, 141, 239, 0.08)",
    accentBorder: "group-hover:border-[#5B8DEF]/40"
  },
  {
    number: "02",
    title: "AI / ML",
    tagline: "Intelligent applications, machine learning, NLP and computer vision.",
    technologies: ["Scikit-learn", "XGBoost", "NLP", "OpenCV", "PyTorch"],
    color: "#38CFA3",
    bgGlow: "rgba(56, 207, 163, 0.08)",
    accentBorder: "group-hover:border-[#38CFA3]/40"
  },
  {
    number: "03",
    title: "QUANTUM",
    tagline: "Quantum computing, Qiskit and quantum algorithm exploration.",
    technologies: ["Qiskit", "Quantum Circuits", "BB84 Protocol", "Algorithms"],
    color: "#8B7CF6",
    bgGlow: "rgba(139, 124, 246, 0.08)",
    accentBorder: "group-hover:border-[#8B7CF6]/40"
  },
  {
    number: "04",
    title: "SYSTEMS",
    tagline: "Embedded systems, robotics, IoT and simulation.",
    technologies: ["Docker", "Linux", "ROS2", "Microcontrollers", "PID Control"],
    color: "#FF9F43",
    bgGlow: "rgba(255, 159, 67, 0.08)",
    accentBorder: "group-hover:border-[#FF9F43]/40"
  }
];

export const technicalToolkit: Record<string, TechCategory> = {
  languages: {
    title: "LANGUAGES",
    items: ["C", "Java", "Python", "JavaScript", "Go"],
    description: "Core programming languages used across systems, web, and algorithmic implementations."
  },
  frontend: {
    title: "FRONTEND",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    description: "Modern component-driven web interfaces built for high performance and accessibility."
  },
  backend: {
    title: "BACKEND",
    items: ["Spring Boot", "FastAPI", "Node.js"],
    description: "Robust service architectures, RESTful contracts, and high-throughput application backends."
  },
  aiMl: {
    title: "AI / ML",
    items: ["Scikit-learn", "XGBoost", "NLP", "Computer Vision"],
    description: "Machine learning workflows, statistical feature modeling, and localized computer vision."
  },
  quantum: {
    title: "QUANTUM",
    items: ["Qiskit", "Quantum Computing"],
    description: "Quantum state modeling, circuit synthesis, and algorithmic simulation."
  },
  systems: {
    title: "SYSTEMS",
    items: ["Docker", "Linux", "GitHub Actions"],
    description: "Containerization, Unix environments, build pipelines, and automated test runners."
  },
  databases: {
    title: "DATABASES",
    items: ["MySQL", "MongoDB", "Firebase", "Supabase"],
    description: "Relational modeling, document stores, and real-time cloud data layers."
  }
};
