"use client";

import { motion } from "framer-motion";
import { SiGithub, SiKaggle } from "react-icons/si";

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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
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
