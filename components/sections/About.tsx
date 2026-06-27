"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-700 p-1 shadow-2xl">
            <div className="w-full h-full rounded-3xl bg-slate-950 flex items-center justify-center">
              <span className="text-gray-400">
                Profile Photo
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-cyan-400 uppercase tracking-widest font-semibold">
            About Me
          </h4>

          <h2 className="text-5xl font-bold mt-3">
            Software Engineer &
            <span className="text-cyan-400"> Full Stack Developer</span>
          </h2>

          <p className="text-gray-400 mt-8 leading-8">
            I'm Dhanaraj Malage, a passionate Software Engineer currently
            pursuing my Master of Computer Applications at Presidency
            University, Bengaluru.

            I specialize in building scalable web applications using
            Java, Spring Boot, React.js, Next.js, Prisma ORM,
            PostgreSQL, MySQL and REST APIs.
          </p>

          <p className="text-gray-400 mt-5 leading-8">
            During my internship at FiniteLoop Technologies, I contributed
            to the development of an enterprise Vendor Management System
            for Kotak Mutual Fund by implementing vendor onboarding,
            GST verification, PAN validation and secure approval workflows.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div>
              <h3 className="text-cyan-400 font-semibold">Name</h3>
              <p>Dhanaraj Malage</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold">Location</h3>
              <p>Bengaluru, India</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold">Email</h3>
              <p>dhanarajmalage370@gmail.com</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold">Open To</h3>
              <p>Software Engineer Roles</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}