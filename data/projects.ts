export interface Project {
  slug: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "baby-gear-store",
    name: "Baby Gear Rental",
    description:
      "Full-stack rental marketplace with admin panel, user management, inventory, and email blast. Admin dashboard for reports and gear management.",
    techStack: ["Flask", "Jinja2", "Bootstrap", "Python", "MySQL"],
    githubUrl: "https://github.com/shirousaberx/baby-gear-store",
    images: [
      "https://github.com/shirousaberx/baby-gear-store/assets/71808405/9febec47-e3d9-49c0-a0d2-3a4e7cf2406b",
      "https://github.com/shirousaberx/baby-gear-store/assets/71808405/1d590d23-0fb0-4c9e-83c6-0505f4ff31fd",
      "https://github.com/shirousaberx/baby-gear-store/assets/71808405/0f7db101-621b-4db0-afcd-877b535527fe",
    ],
    featured: true,
  },
  {
    slug: "movie-app",
    name: "Movie Discovery App",
    description:
      "Cross-platform movie discovery app with TMDB integration, search, filtering, and local favorites.",
    techStack: ["React Native", "TMDB API", "JavaScript", "Cross-platform"],
    githubUrl: "https://github.com/shirousaberx/movie-app",
    images: [],
    featured: true,
  },
  {
    slug: "image-editor",
    name: "Image Editor",
    description:
      "Desktop image editor with channel separation, kernel filtering, morphology, and blending. Built with Lazarus for low-level pixel manipulation.",
    techStack: ["Lazarus", "Pascal", "Image Processing", "Kernel Filtering", "Morphology"],
    githubUrl: "https://github.com/shirousaberx/image-editor",
    images: [],
    featured: false,
  },
  {
    slug: "3d-geometry-run",
    name: "3D Geometry Run",
    description:
      "3D endless runner built from scratch in Pascal using only primitive drawing primitives — no game engine.",
    techStack: ["Pascal", "Graphics", "Game Development", "3D"],
    githubUrl: "https://github.com/shirousaberx/3d-geometry-run",
    images: [
      "https://raw.githubusercontent.com/shirousaberx/3d-geometry-run/main/blob/1.jpg",
    ],
    featured: false,
  },
  {
    slug: "skripsi",
    name: "Sentiment Analysis Pipeline",
    description:
      "Production-ready sentiment analysis pipeline for Indonesian ISP reviews. Published at ICITISEE 2024; trained with Bidirectional RNN.",
    techStack: ["TensorFlow", "Flask", "Python", "NLP", "Bidirectional RNN"],
    githubUrl: "https://github.com/shirousaberx/skripsi",
    images: [],
    featured: true,
  },
  {
    slug: "android-catalog-app",
    name: "Android Catalog App",
    description:
      "Native Android app with login, account creation, and product catalog. Integrates with PHP backend for pet food listings and detail views.",
    techStack: ["Android", "Java", "PHP", "REST API"],
    githubUrl: "https://github.com/shirousaberx/android-catalog-app",
    images: [
      "https://raw.githubusercontent.com/shirousaberx/android-catalog-app/main/blob/1.jpg",
      "https://raw.githubusercontent.com/shirousaberx/android-catalog-app/main/blob/2.jpg",
    ],
    featured: false,
  },
  {
    slug: "homemade-cpp-stl",
    name: "Homemade C++ STL",
    description:
      "Hand-built C++ STL containers — vector, list, stack, cyclic variants — implementing templates, move semantics, RAII, and operator overloading for type-safe, zero-copy abstractions.",
    techStack: ["C++", "Templates", "STL", "RAII", "Move Semantics"],
    githubUrl: "https://github.com/shirousaberx/homemade-cpp-stl",
    images: [],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
