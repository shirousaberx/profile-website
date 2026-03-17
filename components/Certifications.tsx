"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-12 text-2xl font-semibold text-white sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications & Publications
        </motion.h2>
        <div className="space-y-8">
          {certifications.map((item, i) => (
            <motion.article
              key={item.title}
              className="rounded-xl frosted-glass p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mb-2 text-sm text-emerald-500">{item.issuer}</p>
              <p className="mb-4 text-sm text-zinc-300">{item.year}</p>
              {item.description && (
                <p className="mb-4 text-sm leading-relaxed text-zinc-200">
                  {item.description}
                </p>
              )}
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-400"
                >
                  View publication
                  <span aria-hidden>→</span>
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
