"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg font-medium">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-3">
            Dhanaraj
            <br />
            <span className="text-cyan-400">Malage</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-6">
            Software Engineer &
            <br />
            Full Stack Developer
          </h2>

          <p className="text-gray-400 mt-6 leading-8 max-w-xl">
            Passionate about building scalable web applications using
            Java, Spring Boot, React, Next.js, Prisma, PostgreSQL,
            and modern cloud technologies.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl flex items-center gap-2">
              View Projects
              <ArrowRight size={18} />
            </button>

            <button className="border border-cyan-400 px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-cyan-500 hover:text-white transition">
              Resume
              <Download size={18} />
            </button>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-2">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-gray-400 text-lg">
                Your Photo Here
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}