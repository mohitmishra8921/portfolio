"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    title: "Education",
    value: "B.Tech — Computer Science",
  },
  {
    title: "Current Focus",
    value: "ML & Predictive Modeling",
  },
  {
    title: "Tools I Use",
    value: "Python • Scikit-Learn • SQL • XGBoost",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-slate-950 px-4 py-20 transition-colors duration-300">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            I'm Mohit Mishra, a B.Tech student with a strong foundation in Data
            Science, Machine Learning, and Statistical Analysis. I specialize in
            transforming raw, complex datasets into clear, actionable insights
            that drive real-world decisions — and I'm actively seeking
            opportunities to apply these skills in a professional environment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
          className="grid items-center gap-12 md:grid-cols-2 gpu-accelerated"
        >
          {/* Left Side: Profile Picture */}
          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 shadow-2xl backdrop-blur-sm">
              <img
                src="/mohit2.jpeg" 
                alt="Mohit Mishra Profile"
                width={400}
                height={500}
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
              />
              {/* Decorative overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all" />
              
              {/* Floating Badge/Stat */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 p-4 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Experience</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Practising Data Scientist</p>
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
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                Who am I?
              </h3>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                I'm a results-oriented B.Tech student with hands-on experience
                in end-to-end data science workflows — from data wrangling and
                exploratory analysis to building and deploying predictive
                models. I thrive at the intersection of data and
                decision-making, and I am committed to continuous learning in an
                ever-evolving field.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {CARDS.map((card) => (
                <div
                  key={card.title}
                  className="group rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-5 shadow-sm transition-all hover:border-indigo-500/30 hover:bg-white/10"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {card.title}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-50 to-transparent dark:from-white/5 dark:to-transparent p-6 shadow-lg">
              <div className="absolute -left-1 top-0 h-full w-1 rounded-full bg-indigo-500/50" />
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 italic">
                &quot;My goal is simple: turn data into decisions. Whether it's forecasting demand, analyzing behavior, or building ML pipelines — I bring curiosity, precision, and a problem-solving mindset to every dataset I work with.&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
