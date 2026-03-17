"use client";

import { motion } from "framer-motion";
import { training } from "@/data/training";

export function Training() {
  return (
    <section id="training" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-12 text-2xl font-semibold text-white sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Training & Bootcamps
        </motion.h2>
        <div className="space-y-8">
          {training.map((item, i) => (
            <motion.article
              key={item.name}
              className="rounded-xl frosted-glass p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white">
                {item.name}
              </h3>
              <p className="mb-2 text-sm text-emerald-500">{item.provider}</p>
              <p className="mb-4 text-sm text-zinc-300">{item.year}</p>
              <p className="text-sm leading-relaxed text-zinc-200">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
