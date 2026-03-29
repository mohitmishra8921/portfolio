"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Netflix Content Strategy Analysis",
    description:
      "Comprehensive EDA on 8,000+ Netflix titles using Python. Identified key growth trends in international content and optimal release windows to maximize viewership.",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    imageSrc: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop",
    githubUrl: "https://github.com/mohitmishra8921/netflix-analysis",
    demoUrl: "https://your-live-demo.com",
    demoReady: true,
  },
  {
    title: "IPL Performance Analytics",
    description:
      "Data-driven analysis of IPL match history. Built a scoring model to evaluate player impact and team win-probabilities based on historical ball-by-ball data.",
    tools: ["Python", "NumPy", "Pandas", "Plotly"],
    imageSrc: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop",
    githubUrl: "https://github.com/mohitmishra8921/ipl-analytics",
    demoUrl: "https://your-live-demo.com",
    demoReady: true,
  },
  {
    title: "Dynamic Sales Forecasting",
    description:
      "Interactive dashboard visualizing retail sales performance. Implemented time-series analysis to predict upcoming quarterly demand with 85% accuracy.",
    tools: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
    githubUrl: "https://github.com/mohitmishra8921/sales-forecasting",
    demoUrl: "https://your-live-demo.com",
    demoReady: true,
  },
  {
    title: "Predictive Real Estate Valuation",
    description:
      "End-to-end ML pipeline for house price prediction. Leveraged XGBoost and feature engineering to significantly reduce error margins in market valuation.",
    tools: ["Python", "XGBoost", "Scikit-learn", "FastAPI"],
    imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    githubUrl: "https://github.com/mohitmishra8921/real-estate-valuation",
    demoUrl: "https://your-live-demo.com",
    demoReady: true,
  },
];

function ExternalLinkButton({ href, children, variant = "secondary", disabled = false, tooltip = "" }) {
  const base =
    "group relative inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30";

  const styles =
    variant === "primary"
      ? disabled 
        ? "bg-white/10 text-white/40 cursor-not-allowed border border-white/5" 
        : "bg-white text-slate-950 hover:bg-white/90"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";

  return (
    <div className="relative group/btn">
      <a
        href={disabled ? undefined : href}
        target={disabled ? undefined : "_blank"}
        rel={disabled ? undefined : "noopener noreferrer"}
        className={`${base} ${styles}`}
      >
        {children}
      </a>
      {disabled && tooltip && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 rounded bg-slate-800 px-2 py-1 text-[10px] text-white transition-all group-hover/btn:scale-100 whitespace-nowrap z-20 shadow-xl border border-white/10">
          {tooltip}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-slate-800 border-r border-b border-white/10" />
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 px-4 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            A few data projects I’ve worked on — from analysis to machine learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="relative h-44 w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-fuchsia-500/10" />
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-slate-900/40 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ExternalLinkButton href={project.githubUrl} variant="secondary">
                    <Github className="h-4 w-4" />
                    GitHub
                  </ExternalLinkButton>

                  <ExternalLinkButton 
                    href={project.demoUrl} 
                    variant="primary"
                    disabled={!project.demoReady}
                    tooltip={!project.demoReady ? "Coming Soon" : ""}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </ExternalLinkButton>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
