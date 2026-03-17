"use client";

import { motion } from "framer-motion";
import { skillIcons } from "@/lib/skill-icons";
import { skills } from "@/data/profile";

const categories = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "embedded" as const, label: "Embedded & Tools" },
  { key: "cloud" as const, label: "Cloud" },
  { key: "languages" as const, label: "Programming Languages" },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-12 text-2xl font-semibold text-white sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {categories.map(({ key, label }, i) => (
            <motion.div
              key={key}
              className="rounded-xl frosted-glass p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-500">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-md bg-zinc-800 px-2.5 py-1 text-sm text-zinc-100 ring-1 ring-zinc-600 transition-colors hover:bg-zinc-700"
                      title={skill}
                    >
                      {Icon ? (
                        <Icon className="size-4 shrink-0" aria-hidden />
                      ) : null}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
