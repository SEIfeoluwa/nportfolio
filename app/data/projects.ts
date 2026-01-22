export type Project = {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
  highlights?: string[];
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Mindify",
    description:
      "A full-stack mental wellness web application designed to help users track mood patterns, journal daily reflections, and engage with mindfulness content. It features secure authentication, personalized dashboards, and a structured journaling system backed by a relational database.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "REST API", "JWT"],
    highlights: [
      "Built a full-stack MERN-style application with PostgreSQL replacing MongoDB",
      "Implemented JWT-based authentication and protected API routes",
      "Designed relational schemas for users, journal entries, and mood logs",
      "Developed a responsive React UI with reusable components",
      "Built REST APIs for CRUD operations across multiple resources",
    ],
  },
  {
    title: "Bio-Hashing Two-Factor Authentication",
    description:
      "An experimental two-factor authentication system using bio-hashing techniques to strengthen authentication beyond traditional passwords. It combines biometric-style inputs with cryptographic hashing to generate a reproducible but non-reversible factor.",
    tags: ["Python", "Flask", "SQLite", "Cryptography", "Hashing"],
    repo: "bioapp",
    highlights: [
      "Implemented a custom bio-hashing authentication workflow",
      "Built a Flask backend with secure credential storage",
      "Applied cryptographic hashing to protect sensitive inputs",
      "Designed a reproducible but non-reversible authentication factor",
      "Demonstrated secure authentication and verification logic",
    ],
  },
  {
    title: "The Finale",
    description:
      "A browser-based interactive game built with vanilla JavaScript. It features turn-based logic, dynamic UI updates, and a clean separation between game state, rendering logic, and user interactions.",
    tags: ["JavaScript", "HTML", "CSS", "Game Logic"],
    highlights: [
      "Built a full game loop using vanilla JavaScript",
      "Implemented turn-based logic and game state tracking",
      "Used event listeners for dynamic user interaction",
      "Designed UI rendering without external frameworks",
      "Structured code for maintainability and extensibility",
    ],
  },
  {
    title: "Paradise Park Experience",
    description:
      "An interactive, front-end-only web experience simulating a virtual amusement park interface. Users explore attractions, navigate themed sections, and interact with UI components designed to mimic a real-world park experience.",
    tags: ["JavaScript", "HTML", "CSS", "UX Design"],
    highlights: [
      "Built a multi-page interactive front-end experience",
      "Designed user navigation flows and themed UI sections",
      "Implemented DOM-driven interactivity",
      "Focused on layout, styling, and visual hierarchy",
      "Created a polished user-facing experience",
    ],
  },
  {
    title: "Backend API Project",
    description:
      "A backend REST API built with Python and Flask that provides structured endpoints for managing application data, supporting CRUD operations, input validation, and relational database integration with PostgreSQL.",
    tags: ["Python", "Flask", "PostgreSQL", "REST APIs"],
    repo: "back-end-prj3",
    highlights: [
      "Built a RESTful API using Flask",
      "Integrated PostgreSQL for persistent data storage",
      "Designed relational schemas and API endpoints",
      "Implemented CRUD functionality with validation",
      "Structured backend services for maintainability",
    ],
  },
];
