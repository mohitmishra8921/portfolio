"use client";

import { motion } from "framer-motion";
import { SiGithub, SiKaggle } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-4 text-center"
      >
        <div>
          <p className="text-base font-semibold text-white">Mohit Mishra</p>
          <p className="mt-1 text-sm text-slate-300 font-medium">Aspiring Data Scientist</p>
          <p className="mt-1 text-xs text-slate-500 italic">Open to Internships • Freelance Projects • Remote Collaborations</p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/mohitmishra8921"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            aria-label="GitHub"
          >
            <SiGithub className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/mohit-kumar-mishra-32986b328/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>

          <a
            href="https://www.kaggle.com/mohitmishra8921"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            aria-label="Kaggle"
          >
            <SiKaggle className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-slate-400">
          © {year} Mohit Mishra. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
