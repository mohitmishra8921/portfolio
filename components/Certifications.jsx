"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const CERTIFICATIONS = [
  {
    name: "Complete Python Bootcamp 2026",
    platform: "CodeWithHarry",
    year: "February 27, 2026",
    image: "/codewithharry-python-bootcamp copy.png",
    certId: "CWH-COMPLETE-PYTHON-BOOTCAMP-LEARN-PYTHON-FROM-SCRATCH-VHSP4RDP",
    link: "/codewithharry-python-bootcamp copy.png",
  },
];

function CertificationCard({ cert }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-6 shadow-2xl backdrop-blur-sm transition-all hover:border-indigo-500/20 hover:bg-white/[0.04]"
    >
      <div>
        <div className="flex items-start justify-between">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900">
            <img
              src={cert.image}
              alt={cert.name}
              width={48}
              height={48}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover will-change-transform"
              onError={(e) => {
                e.target.src = "https://placehold.co/400x300?text=Certificate";
              }}
            />
          </div>
          <Award className="h-5 w-5 text-slate-400 dark:text-slate-500 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
        </div>
        <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors line-clamp-2">
          {cert.name}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {cert.platform} • {cert.year}
        </p>
        <p className="mt-2 text-[10px] font-mono text-slate-500 break-all">
          ID: {cert.certId}
        </p>
      </div>

      <div className="mt-6">
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
        >
          View Certificate
          <ExternalLink className="h-3.3 w-3.3" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white dark:bg-slate-950 px-4 py-20 transition-colors duration-300 gpu-accelerated">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Achievements</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Professional milestones and specialized training in Data Science and Analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <CertificationCard cert={cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
