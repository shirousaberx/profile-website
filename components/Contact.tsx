"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
  };

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="mb-4 text-2xl font-semibold text-white sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="mb-10 text-zinc-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Open to new opportunities and collaborations.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            Email Me
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="rounded-full border border-zinc-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-400 hover:bg-zinc-800"
          >
            Copy Email
          </button>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-400 hover:bg-zinc-800"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-400 hover:bg-zinc-800"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
