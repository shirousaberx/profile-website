export interface Training {
  name: string;
  provider: string;
  year: string;
  description: string;
}

export const training: Training[] = [
  {
    name: "Mobile App Development with React Native",
    provider: "Digital Talent Scholarship (Kominfo)",
    year: "2024",
    description:
      "Completed Kominfo's 2-month bootcamp. Built multiple React Native applications and was recognized as one of the program's top graduates.",
  },
  {
    name: "Bangkit Academy",
    provider: "Google, GoTo, Traveloka",
    year: "2023",
    description:
      "900-hour intensive program. Specialized in Machine Learning and end-to-end model deployment with TensorFlow. Capstone: Engineered a text-based moderation system for SpeakSure, a social platform for English practice.",
  },
];
