"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-white">
          Dhanaraj<span className="text-cyan-400">.</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 transition hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          <Menu size={28} />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-900 md:hidden">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-3 text-gray-300 hover:text-cyan-400"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}