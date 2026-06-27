"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="uppercase tracking-widest text-cyan-400">
            Portfolio
          </h4>

          <h2 className="text-5xl font-bold mt-2">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl">
            A collection of projects showcasing enterprise development,
            full-stack engineering, and AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900"
            >

              <div className="h-56 bg-gradient-to-r from-cyan-600 to-blue-700 flex items-center justify-center">
                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>
              </div>

              <div className="p-8">

                <p className="text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 bg-slate-800 px-5 py-3 rounded-xl hover:bg-cyan-500 transition"
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-2 bg-cyan-500 px-5 py-3 rounded-xl hover:bg-cyan-600 transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}