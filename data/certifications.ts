export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description?: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2023",
    description:
      "Professional certification demonstrating expertise in architecting and training Deep Learning models for Computer Vision, NLP, and time-series forecasting.",
  },
  {
    title: "User Reviews Sentiment Analysis on Internet Service Providers in Indonesia using Bidirectional RNN",
    issuer: "ICITISEE 2024",
    year: "2024",
    description:
      "Scientific publication in the 8th International Conference on Information Technology, Information Systems and Electrical Engineering. Developed a high-accuracy classification model for Indonesian-language sentiment analysis.",
    url: "https://ieeexplore.ieee.org/document/10730617",
  },
  {
    title: "Google Cloud Skills Boost",
    issuer: "Google",
    year: "2025",
    description:
      "Diamond League Member (Top Tier). Completed advanced hands-on labs in Terraform, Docker, VPC Networking, Cloud Security, and Managed Instance Groups.",
  },
];
