"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h4 className="text-cyan-400 uppercase tracking-widest font-semibold">
            Contact
          </h4>

          <h2 className="text-5xl font-bold mt-3">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Feel free to contact me for internships, full-time opportunities,
            freelance work, or collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400 w-6 h-6" />
              <div>
                <p className="text-gray-400">Email</p>
                <p className="font-medium">
                  dhanarajmalage370@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-cyan-400 w-6 h-6" />
              <div>
                <p className="text-gray-400">Phone</p>
                <p className="font-medium">
                  +91 6364631092
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400 w-6 h-6" />
              <div>
                <p className="text-gray-400">Location</p>
                <p className="font-medium">
                  Bengaluru, Karnataka, India
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/Dhanu37400"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-cyan-500 px-5 py-3 rounded-xl transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/dhanaraj-malage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-cyan-500 px-5 py-3 rounded-xl transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl bg-slate-800 border border-slate-700 p-4 outline-none focus:border-cyan-400"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}