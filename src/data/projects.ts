export type VisualType = 'architecture' | 'ai-network' | 'dashboard' | 'quantum';

export interface FeaturedProject {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  visualType: VisualType;
  featured: true;
  accentColor: string;
  accentBg: string;
  // Deep detail page content
  overview: string;
  problem: string;
  approach: string;
  keyFeatures: string[];
  architectureDetails: string[];
  learnings: string[];
}

export interface SecondaryProject {
  id: string;
  title: string;
  category: 'SOFTWARE' | 'AI / ML' | 'QUANTUM' | 'SYSTEMS';
  description: string;
  technologies: string[];
  github?: string;
  statusBadge?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "quick-note-polyglot",
    number: "01",
    title: "Quick-Note Polyglot",
    category: "FULL-STACK / SYSTEM ARCHITECTURE",
    description: "A multi-stack note-taking platform exploring multiple backend implementations behind a unified frontend.",
    technologies: ["React", "Go", "Node.js", "Python", "Firebase"],
    github: "https://github.com/DineshMoorthy007/quick-note-polyglot",
    visualType: "architecture",
    featured: true,
    accentColor: "#5B8DEF",
    accentBg: "bg-blue-50/50",
    overview: "Quick-Note Polyglot is an architectural exploration of how disparate backend ecosystems—Go (concurrency & speed), Node.js (event-driven asynchronous I/O), and Python (data processing & rapid scripting)—can serve a unified modern React client through interchangeable RESTful contracts.",
    problem: "Developers frequently wonder how backend paradigms differ in real-world CRUD operations, synchronization speed, memory footprints, and state management when backing identical user interfaces.",
    approach: "Designed a clean API contract specification that each backend language implements independently. The client can switch upstream service endpoints on the fly while retaining identical state synchronization and offline caching semantics.",
    keyFeatures: [
      "Unified React frontend consuming standardized REST schemas across backends",
      "High-throughput Go service handling rapid note write batches",
      "Node.js Express microservice handling event subscriptions & notifications",
      "Python service orchestrating search indexing and Markdown parsing",
      "Firebase authentication and cloud persistence integration"
    ],
    architectureDetails: [
      "Presentation Layer: React SPA with optimistic updates and local cache",
      "Interchangeable Service Layer: Configurable proxy pointing to Go, Node.js, or Python instances",
      "Persistence Layer: Firebase Firestore with dual-write safety checks"
    ],
    learnings: [
      "Practical benchmarks between Go goroutines and Node.js event-loop concurrency",
      "Contract-first API design patterns ensuring client-side decoupling",
      "Handling state reconciliations across varied response latencies"
    ]
  },
  {
    id: "ai-vidya-for-bharat",
    number: "02",
    title: "AI Vidya for Bharat",
    category: "AI / EDUCATION",
    description: "A multilingual AI learning platform designed for Indian learners, combining AI-generated learning content, voice interaction and regional-language support.",
    technologies: ["Next.js", "AI", "Speech", "NLP", "Tailwind CSS"],
    github: "https://github.com/DineshMoorthy007/AI-Vidya-for-Bharat",
    visualType: "ai-network",
    featured: true,
    accentColor: "#38CFA3",
    accentBg: "bg-emerald-50/50",
    overview: "AI Vidya for Bharat bridges the educational language divide by transforming foundational educational topics into conversational, regional-language explanations with integrated voice synthesis and structured visual breakdowns.",
    problem: "Most digital STEM and technical learning materials are exclusively in English, creating a steep barrier for native speakers of Indian regional languages like Tamil, Hindi, Telugu, and Bengali.",
    approach: "Combined Next.js with natural language processing pipelines and Web Speech APIs, enabling students to select their mother tongue, ask conceptual questions in their native language, and receive culturally context-aware explanations.",
    keyFeatures: [
      "Multilingual inquiry processing across Tamil (தமிழ்), Hindi (हिन्दी), Telugu (తెలుగు), Bengali (বাংলা), and English",
      "Text-to-speech audio playback for auditory learners and low-literacy accessibility",
      "Interactive concept summaries with simplified vocabulary and phonetic aids",
      "Responsive, low-bandwidth UI optimized for varied mobile connectivity"
    ],
    architectureDetails: [
      "Client UI: Next.js with responsive Tailwind CSS components",
      "NLP Router: Query language detection and context normalization",
      "Speech Engine: Client-side speech synthesis and audio streaming"
    ],
    learnings: [
      "Addressing phonetic inaccuracies in regional language speech synthesis",
      "Structuring prompt contexts for localized linguistic nuances without hallucination",
      "Designing accessible UI patterns for multilingual non-Latin typography"
    ]
  },
  {
    id: "expense-tracker-dashboard",
    number: "03",
    title: "Expense Tracker Dashboard",
    category: "FULL-STACK / DATA VISUALIZATION",
    description: "A personal finance dashboard for tracking expenses, categories and spending trends.",
    technologies: ["Java", "Spring Boot", "MySQL", "JWT", "Chart.js"],
    github: "#", // Placeholder as specified in prompt
    visualType: "dashboard",
    featured: true,
    accentColor: "#FF9F43",
    accentBg: "bg-amber-50/50",
    overview: "A robust full-stack personal finance application demonstrating enterprise-style backend patterns in Java and Spring Boot, secure JWT authentication, and interactive visual data representations.",
    problem: "Managing monthly budgets and understanding cash flow trends requires structured categorization, fast aggregated reporting, and secure isolated multi-user account boundaries.",
    approach: "Constructed a Spring Boot backend following MVC architectural discipline with JPA/Hibernate ORM over MySQL, paired with dynamic charting components for intuitive breakdown of expenditures.",
    keyFeatures: [
      "Stateless JWT-based authentication with role-based access safeguards",
      "Dynamic categorization engine with monthly budget ceiling alerts",
      "Interactive spending trend visualization by category, tag, and time horizon",
      "Aggregated metric queries delivering sub-50ms dashboard summary responses"
    ],
    architectureDetails: [
      "Backend Framework: Spring Boot 3.x REST Controller with Spring Security",
      "Database: MySQL relational schema with indexing on user and timestamp columns",
      "Visualization: Responsive Chart.js canvas renderers with animated transitions"
    ],
    learnings: [
      "Structuring relational database foreign keys and cascade rules for financial ledgers",
      "Securing REST endpoints against Cross-Site Scripting (XSS) and CSRF attacks",
      "Optimizing complex SQL aggregation queries for grouped time-series metrics"
    ]
  },
  {
    id: "bb84-qkd",
    number: "04",
    title: "BB84 Quantum Key Distribution",
    category: "QUANTUM COMPUTING",
    description: "An implementation and visualization of the BB84 quantum key distribution protocol.",
    technologies: ["Python", "Quantum Computing", "QKD"],
    github: "https://github.com/DineshMoorthy007/BB84-quantum-key-distribution",
    visualType: "quantum",
    featured: true,
    accentColor: "#8B7CF6",
    accentBg: "bg-purple-50/50",
    overview: "A computational simulator and educational visualization of the pioneering BB84 protocol developed by Charles Bennett and Gilles Brassard in 1984, demonstrating how quantum mechanics guarantees cryptographic key exchange security.",
    problem: "Quantum cryptography concepts like non-orthogonal qubit bases, the no-cloning theorem, and eavesdropper-induced quantum collapse are mathematically rigorous and difficult to visualize intuitively.",
    approach: "Implemented a Python simulation representing Alice's random state preparation across rectilinear (+ ) and diagonal (x) bases, Bob's random measurement bases, quantum channel transmission with optional eavesdropping (Eve), and post-measurement classical basis reconciliation (sifting).",
    keyFeatures: [
      "Step-by-step quantum state preparation and measurement base selection",
      "Simulated quantum channel with configurable eavesdropping interception",
      "Detection of Eve through Quantum Bit Error Rate (QBER) threshold analysis",
      "Visual display of the sifted key agreement and discarded non-matching bits"
    ],
    architectureDetails: [
      "Simulation Engine: Python quantum state vector simulation",
      "Protocol Stages: Alice encoding -> Transmission -> Bob measurement -> Classical sifting -> Error estimation",
      "Visualization: Visual state representation of polarization states (|0>, |1>, |+>, |->)"
    ],
    learnings: [
      "Mathematical formulation of measurement operators and state collapse",
      "How the Heisenberg uncertainty principle physically prevents undetected eavesdropping",
      "Translating quantum mechanical protocols into clear computational models"
    ]
  }
];

export const secondaryProjects: SecondaryProject[] = [
  {
    id: "drone-navigation",
    title: "3D Autonomous Drone Navigation",
    category: "SYSTEMS",
    description: "Simulation and control algorithms for autonomous aerial navigation in constrained 3D environments.",
    technologies: ["ROS2", "Gazebo Harmonic", "Computer Vision"],
    statusBadge: "Research Simulation"
  },
  {
    id: "ipv6-simulator",
    title: "IPv6 Packet Processing Simulator",
    category: "SYSTEMS",
    description: "A low-level networking simulator modeling IPv6 extension header parsing, routing lookups, and hop-limit decrementing.",
    technologies: ["C", "Networking", "Socket API"]
  },
  {
    id: "bike-demand-predictor",
    title: "Bike Rental Demand Predictor",
    category: "AI / ML",
    description: "Supervised machine learning pipeline evaluating temporal and meteorological features to forecast urban bike transit demand.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas"]
  },
  {
    id: "gps-routing-simulator",
    title: "GPS Routing Simulator",
    category: "SOFTWARE",
    description: "Implementation of Dijkstra and A* pathfinding heuristics on road network graphs with weighted edge dynamics.",
    technologies: ["Java", "Data Structures", "Graph Algorithms"]
  },
  {
    id: "patient-emergency-system",
    title: "Patient Emergency Priority System",
    category: "SOFTWARE",
    description: "Triage scheduling application organizing patient queues by vital sign thresholds using custom priority queue heaps.",
    technologies: ["Java", "OOP", "Swing UI"]
  },
  {
    id: "system-health-monitor",
    title: "System Health Monitor",
    category: "SYSTEMS",
    description: "Lightweight daemon tracking real-time CPU thread utilization, memory saturation, and disk I/O metrics.",
    technologies: ["Go", "Linux Procfs", "REST API"]
  },
  {
    id: "heart-disease-classifier",
    title: "Heart Disease Risk Classifier",
    category: "AI / ML",
    description: "Clinical diagnostic classification model comparing logistic regression, random forests, and gradient boosting on patient bio-markers.",
    technologies: ["Python", "Scikit-learn", "Matplotlib"]
  },
  {
    id: "deep-learning-game-agent",
    title: "Deep Learning Game Playing Agent",
    category: "AI / ML",
    description: "Reinforcement learning agent trained with Q-learning and policy gradients in a discrete 2D grid world environment.",
    technologies: ["Python", "PyTorch", "Gymnasium"]
  },
  {
    id: "qubo-optimization-from-scratch",
    title: "QUBO Optimization from Scratch",
    category: "QUANTUM",
    description: "From-scratch implementation of Quadratic Unconstrained Binary Optimization for exploring quantum-inspired optimization problems.",
    technologies: ["Python", "QUBO", "Optimization", "Quantum Computing"],
    github: "https://github.com/DineshMoorthy007/qubo-optimization-from-scratch"
  }
];
