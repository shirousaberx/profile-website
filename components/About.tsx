"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-8 text-2xl font-semibold text-white sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h2>
        <motion.div
          className="space-y-6 text-zinc-200 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>
            Software engineer with 2+ years building production systems. At
            AutoWealth, I architected a first-to-market CPF Retirement Planning
            Tool and built an automated bug-reporting pipeline that cut triage
            time by 90%. Previously at PT Uruz, I designed RBAC from scratch,
            integrated Redis for sub-millisecond auth, and shipped ERP modules
            for housing and retail.
          </p>
          <p>
            I bring experience across the stack: Angular/Express, React Native,
            and C/MQTT for embedded POS. Bangkit Academy graduate, IEEE-published
            in ML, and Best Graduate of my Informatics program. I focus on
            scalable systems, clear APIs, and maintainable code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
