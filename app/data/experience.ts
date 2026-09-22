export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  tags?: string[];
};

export const experience: Experience[] = [
  {
    company: "Parking Pin",
    role: "Founding Engineer (Part-Time)",
    period: "Feb 2026 – Current",
    location: "Remote",
    summary:
      "Building React Native features for a campus parking app serving 13,000+ students and staff, from location-permission workflows to real-time map-based amenity tracking across 38 campus lots.",
    tags: ["React Native", "TypeScript", "Expo", "GIS"],
  },
  {
    company: "Kady Group",
    role: "Operations Coordinator | IT Engineer",
    period: "Jan 2024 – Current",
    location: "Lanham, MD",
    summary:
      "Led an in-house migration of the corporate web presence and a 400+ GB Dropbox-to-Microsoft 365 data migration, while managing IT infrastructure and resolving service tickets at a 95% resolution rate.",
    tags: ["Web Migration", "Microsoft 365", "IT Operations"],
  },
  {
    company: "Teksynap",
    role: "Software Engineer",
    period: "Aug 2022 – Dec 2023",
    location: "Remote",
    summary:
      "Shipped feature enhancements for an enterprise licensing platform serving 1,000+ users on an Angular and ASP.NET Core stack, and built documentation that cut user error rates by 25%.",
    tags: ["Angular", "ASP.NET Core", "Agile"],
  },
];
