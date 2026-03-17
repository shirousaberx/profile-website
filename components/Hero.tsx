"use client";

import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineClipboardCopy } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";

export function Hero() {
  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-[45vh] flex-col items-center justify-center px-6 pt-24"
    >
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.p
          className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Software Engineer
        </motion.p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>
        <motion.p
          className="mx-auto max-w-2xl text-lg text-zinc-200 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="#projects"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            View Projects
          </a>
        </motion.div>
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full p-3 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
            aria-label="Email"
          >
            <HiOutlineMail className="size-6" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="size-6" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
            aria-label="GitHub"
          >
            <SiGithub className="size-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
