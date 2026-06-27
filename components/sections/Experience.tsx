"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-cyan-400 uppercase tracking-widest">
            Experience
          </h4>

          <h2 className="text-5xl font-bold mt-2">
            Professional Journey
          </h2>
        </motion.div>

        <div className="mt-16 border-l-2 border-cyan-500 pl-8 space-y-12">

          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -left-11 top-2 h-5 w-5 rounded-full bg-cyan-400 border-4 border-slate-900" />

                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>

                <p className="text-cyan-400 font-medium">
                  {exp.company}
                </p>

                <p className="text-gray-400 mb-4">
                  {exp.duration}
                </p>

                <ul className="space-y-2 text-gray-300 list-disc ml-5">
                  {exp.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}