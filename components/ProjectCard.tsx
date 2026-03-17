"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { TechBadge } from "@/components/ui/TechBadge";

interface ProjectCardProps {
  project: Project;
  index?: number;
  onClick?: () => void;
}

export function ProjectCard({ project, index = 0, onClick }: ProjectCardProps) {
  const hasImage = project.images.length > 0;

  return (
    <motion.article
      className="group flex cursor-pointer flex-col overflow-hidden rounded-xl frosted-glass transition-all hover:shadow-lg hover:shadow-white/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
    >
      {hasImage && (
        <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-emerald-400">
          {project.name}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-zinc-200">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-400"
          onClick={(e) => e.stopPropagation()}
        >
          View on GitHub
          <span aria-hidden>→</span>
        </a>
      </div>
    </motion.article>
  );
}
