export interface ProfileData {
  name: string;
  role: string;
  academicFocus: string;
  minor: string;
  expectedGraduation: string;
  cgpa: string;
  certificationsCount: string;
  location: string;
  availability: string;
  headline: string;
  tagline: string;
  aboutBio: string;
  socials: {
    github: string;
    linkedin: string;
    leetcode: string;
    email: string;
  };
  currentlyExploring: string[];
}

export const profileData: ProfileData = {
  name: "Dinesh Moorthy",
  role: "Computer Science Engineering Student",
  academicFocus: "Computer Science Engineering",
  minor: "Quantum Computing",
  expectedGraduation: "2028",
  cgpa: "8.3",
  certificationsCount: "3+ NPTEL",
  location: "Chennai, India",
  availability: "OPEN TO INTERNSHIPS · CHENNAI & NEARBY",
  headline: "I BUILD THINGS THAT MAKE SENSE.",
  tagline: "Computer Science Engineering student building software and exploring AI, quantum computing and intelligent systems.",
  aboutBio: "I'm Dinesh, a Computer Science Engineering student with a minor in Quantum Computing. I enjoy building practical software systems and experimenting with AI, quantum computing and emerging technologies.",
  socials: {
    github: "https://github.com/DineshMoorthy007",
    linkedin: "https://www.linkedin.com/in/dinesh-moorthy-s-r",
    leetcode: "https://leetcode.com/u/dinesh_moorthy/",
    email: "dineshmoorthysrr@gmail.com",
  },
  currentlyExploring: [
    "AI Engineering",
    "Quantum Machine Learning",
    "Systems Design",
    "Open Source Systems",
    "Algorithmic Problem Solving",
  ],
};
