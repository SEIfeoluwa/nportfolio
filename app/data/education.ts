export type Education = {
  school: string;
  degree: string;
  period: string;
  location?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  href?: string;
};

export const education: Education[] = [
  {
    school: "University of Maryland Global Campus",
    degree: "B.S. Software Development",
    period: "Mar 2023 – May 2025",
    location: "Remote",
  },
  {
    school: "General Assembly",
    degree: "Software Engineering Immersive",
    period: "Feb – May 2023",
    location: "Remote",
  },
  {
    school: "Howard University",
    degree: "Master of Architecture",
    period: "Aug 2017 – Dec 2022",
  },
];

export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Sep 2026",
  },
];
