"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CARDS = [
  {
    title: "Education",
    value: "B.Tech (4th Semester)",
  },
  {
    title: "Current Focus",
    value: "Data Science",
  },
  {
    title: "Tools I Use",
    value: "Python • Pandas • NumPy • SQL",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-950 px-4 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            I am Mohit Mishra, a B.Tech student currently in my 4th semester. I
            recently started my journey in Data Science and I am passionate
            about learning Python, Data Analysis, Machine Learning, and building
            real-world data projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          {/* Left Side: Profile Picture */}
          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
              <Image
                src="/mohit.jpeg" 
                alt="Mohit Mishra Profile"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={true}
              />
              {/* Decorative overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all" />
              
              {/* Floating Badge/Stat */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">Experience</p>
                    <p className="text-sm font-bold text-white">Entry Level DS</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative blob */}
            <div className="absolute -left-4 -top-4 -z-10 h-24 w-24 rounded-full bg-indigo-500/20 blur-2xl" />
            <div className="absolute -right-4 -bottom-4 -z-10 h-32 w-32 rounded-full bg-sky-500/20 blur-3xl" />
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Who am I?
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">
                I am a driven B.Tech student currently in my 4th semester, deeply immersed in the world of <span className="text-indigo-400 font-semibold">Data Science</span>. 
                My focus lies in uncovering hidden patterns in complex datasets and translating them into meaningful stories.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {CARDS.map((card) => (
                <div
                  key={card.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm transition-all hover:border-indigo-500/30 hover:bg-white/10"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                    {card.title}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-200">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-lg">
              <div className="absolute -left-1 top-0 h-full w-1 rounded-full bg-indigo-500/50" />
              <p className="text-sm leading-7 text-slate-300 italic">
                &quot;I enjoy turning raw data into actionable insights, mastering ML concepts, and building projects that bridge the gap between theory and real-world impact.&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
