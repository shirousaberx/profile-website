"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { TechBadge } from "@/components/ui/TechBadge";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageExpanded, setImageExpanded] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    if (project) {
      setImageIndex(0);
      setImageExpanded(false);
      setImageLoading(true);
    }
  }, [project]);

  useEffect(() => {
    if (project?.images.length) setImageLoading(true);
  }, [imageIndex, project]);

  // Clamp imageIndex if it's out of bounds (e.g. after project switch)
  const safeImageIndex = project
    ? Math.min(imageIndex, Math.max(0, project.images.length - 1))
    : 0;
  const currentImageSrc = project?.images[safeImageIndex];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (imageExpanded) setImageExpanded(false);
        else onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose, imageExpanded]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl frosted-glass p-0 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
            {project.images.length > 0 && currentImageSrc && (
              <div
                className="relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-t-xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setImageExpanded(true);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setImageExpanded(true)}
                aria-label="Click to enlarge image"
              >
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/80">
                    <span className="text-sm text-zinc-400">Loading...</span>
                  </div>
                )}
                <Image
                  src={currentImageSrc}
                  alt={`${project.name} screenshot ${safeImageIndex + 1}`}
                  fill
                  className={`object-contain transition-opacity duration-200 ${imageLoading ? "opacity-0" : "opacity-100"}`}
                  sizes="(max-width: 768px) 100vw, 672px"
                  onLoad={() => setImageLoading(false)}
                  onError={() => setImageLoading(false)}
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setImageIndex((i) => (i === 0 ? project.images.length - 1 : i - 1));
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-900/80 p-2 text-zinc-100 transition-colors hover:bg-zinc-800"
                      aria-label="Previous image"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setImageIndex((i) => (i === project.images.length - 1 ? 0 : i + 1));
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-900/80 p-2 text-zinc-100 transition-colors hover:bg-zinc-800"
                      aria-label="Next image"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                      {project.images.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setImageIndex(i);
                          }}
                          className={`h-1.5 rounded-full transition-all ${
                            i === imageIndex ? "w-4 bg-zinc-100" : "w-1.5 bg-zinc-500"
                          }`}
                          aria-label={`Go to image ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            <div className={`p-6 ${project.images.length === 0 ? "rounded-t-xl" : ""}`}>
              <h2 className="mb-2 text-2xl font-semibold text-white">
                {project.name}
              </h2>
              <p className="mb-4 text-zinc-200">{project.description}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
                >
                  View on GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-zinc-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-zinc-400 hover:bg-zinc-800"
                  >
                    Live Demo
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="ml-auto rounded-full border border-zinc-600 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800/50"
                >
                  Close
                </button>
              </div>
            </div>
            </motion.div>
          </motion.div>

          {/* Expanded image lightbox */}
          <AnimatePresence>
            {project && imageExpanded && project.images.length > 0 && currentImageSrc && (
              <>
                <motion.div
                  className="fixed inset-0 z-60 flex items-center justify-center bg-black/95 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setImageExpanded(false)}
                >
                  <motion.div
                    className="relative h-[85vh] w-[95vw] max-w-6xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {imageLoading && (
                      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-zinc-900/90">
                        <span className="text-zinc-400">Loading...</span>
                      </div>
                    )}
                    <Image
                      src={currentImageSrc}
                      alt={`${project.name} screenshot ${safeImageIndex + 1}`}
                      fill
                      className={`rounded-lg object-contain transition-opacity duration-200 ${imageLoading ? "opacity-0" : "opacity-100"}`}
                      sizes="95vw"
                      onLoad={() => setImageLoading(false)}
                      onError={() => setImageLoading(false)}
                    />
                    {project.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setImageIndex((i) => (i === 0 ? project.images.length - 1 : i - 1));
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-900/90 p-2.5 text-zinc-100 transition-colors hover:bg-zinc-700"
                          aria-label="Previous image"
                        >
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setImageIndex((i) => (i === project.images.length - 1 ? 0 : i + 1));
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-900/90 p-2.5 text-zinc-100 transition-colors hover:bg-zinc-700"
                          aria-label="Next image"
                        >
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-zinc-900/90 px-3 py-1.5">
                          {project.images.map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setImageIndex(i);
                              }}
                              className={`h-2 rounded-full transition-all ${
                                i === imageIndex ? "w-6 bg-zinc-100" : "w-2 bg-zinc-500"
                              }`}
                              aria-label={`Go to image ${i + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setImageExpanded(false);
                      }}
                      className="absolute right-2 top-2 rounded-full bg-zinc-900/90 p-2 text-zinc-100 transition-colors hover:bg-zinc-700"
                      aria-label="Close"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
