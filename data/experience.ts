export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experience: WorkExperience[] = [
  {
    company: "AutoWealth Pte Ltd",
    role: "Software Engineer",
    location: "Singapore",
    period: "May 2025 – Present",
    highlights: [
      "Architected a first-to-market CPF (Central Provident Fund) Retirement Planning Tool for the Singaporean wealth management sector. Translated complex regulatory requirements into precise financial projection logic.",
      "Built an end-to-end automated bug reporting system with a web-based drag-and-drop widget integrated with GitHub Projects API and GitHub Workflows, reducing manual engineering triage time by 90%.",
      "Modernized legacy PHP/JavaScript backends and React Native mobile app. Leveraged AI-augmented development to accelerate refactoring and resolve technical debt.",
      "Integrated Firebase Analytics and GA4 for custom user journeys. Optimized FCM infrastructure, resolving critical notification delivery bugs and improving cross-platform user retention.",
    ],
  },
  {
    company: "PT Uruz Solusi Teknologi",
    role: "Full Stack Developer",
    location: "West Jakarta, Indonesia",
    period: "Jul 2024 – May 2025",
    highlights: [
      "Designed and implemented a custom Role-Based Access Control (RBAC) system from scratch. Integrated Redis caching for sub-millisecond latency on session validation and permission checks.",
      "Developed a Hotel Booking Engine with real-time room availability, inventory management, and reservation and payment workflows.",
      "Integrated Doku and BCA payment gateways. Developed firmware for Aisino POS hardware (C/MQTT), implementing QRIS payment standards for retail.",
      "Architected enterprise housing management systems and ERP modules using Angular and Express.js. Automated deployment via GitHub Workflows and custom Bash scripting.",
      "Deployed production applications on AWS EC2 with Apache2. Built IoT solutions on Raspberry Pi for secure QR-based entry systems.",
    ],
  },
];
