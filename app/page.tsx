"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { AllProjects } from "@/components/AllProjects";
import { Training } from "@/components/Training";
import { Certifications } from "@/components/Certifications";
import { Skills } from "@/components/Skills";
import { ProjectModal } from "@/components/ProjectModal";
import type { Project } from "@/data/projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects onProjectClick={setSelectedProject} />
      <AllProjects onProjectClick={setSelectedProject} />
      <Experience />
      <Certifications />
      <Training />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
