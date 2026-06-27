"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-cyan-400 uppercase tracking-widest">
            Skills
          </h4>

          <h2 className="text-5xl font-bold mt-2">
            Technical Expertise
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl">
            Technologies and tools I use to design, build, and deploy
            modern web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {skills.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-2xl font-semibold text-cyan-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3 mt-6">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm transition hover:bg-cyan-500 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}