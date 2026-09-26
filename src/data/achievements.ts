export interface Certification {
  id: string;
  name: string;
  issuer: string;
  category: string;
  verifyUrl?: string;
  badgeCode?: string;
}

export interface LeadershipRole {
  title: string;
  event: string;
  organization: string;
  description: string;
  recognition?: string;
}

export interface AcademicProgram {
  title: string;
  organization: string;
  description: string;
  highlights: string[];
}

export const certificationsData: Certification[] = [
  {
    id: "uipath-automation",
    name: "Student Automation Developer Associate",
    issuer: "UiPath Academic Alliance",
    category: "Robotic Process Automation & Workflow Systems",
    verifyUrl: "https://credentials.uipath.com/15b4a9b0-e1a2-400d-8e26-32c3ccbd54be",
  },
  {
    id: "mongodb-vector-search",
    name: "Building AI-Powered Search with MongoDB Vector Search",
    issuer: "MongoDB / Credly",
    category: "AI, Embeddings & Vector Databases",
    verifyUrl: "https://www.credly.com/badges/d7ff7170-6657-41c0-a13f-edc84af05967/linked_in_profile",
  },
  {
    id: "docker-essentials",
    name: "Docker Essentials: A Developer Introduction",
    issuer: "Cognitive Class / IBM",
    category: "Containerization & DevOps Fundamentals",
    verifyUrl: "https://courses.cognitiveclass.ai/certificates/167209c0d7c349e08fcfdce958ffa02d",
  },
  {
    id: "nptel-python-dsa",
    name: "Programming, Data Structures and Algorithms using Python",
    issuer: "NPTEL",
    category: "Algorithmic Complexity & Core Computer Science",
  },
  {
    id: "foundations-ai",
    name: "Foundations of AI",
    issuer: "Microsoft / Edunet / AICTE",
    category: "Applied Machine Learning & Neural Network Foundations",
  },
];

export const leadershipData: LeadershipRole = {
  title: "EVENT COORDINATOR",
  event: "Bug Event",
  organization: "CSE Symposium · Rajalakshmi Institute of Technology",
  description: "Coordinated the Bug Event as part of the CSE department symposium, contributing to event planning, participant coordination, problem framing, and on-ground execution.",
  recognition: "Star Contribution Award",
};

export const academicProgramData: AcademicProgram = {
  title: "LEARNATHON 2025",
  organization: "Technical Learning Initiative",
  description: "Completed intensive, industry-aligned technical curriculum across software engineering, cloud computing, and emerging development paradigms.",
  highlights: [
    "14+ completed technical courses",
    "Continuous practical skill validation",
    "Multi-disciplinary engineering breadth"
  ],
};
