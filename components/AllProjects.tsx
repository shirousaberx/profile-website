"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

interface AllProjectsProps {
  onProjectClick: (project: Project) => void;
}

export function AllProjects({ onProjectClick }: AllProjectsProps) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-12 text-2xl font-semibold text-white sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          All Projects
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
