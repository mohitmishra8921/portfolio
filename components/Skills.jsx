"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "SQL", icon: "🗄️" },
    ],
  },
  {
    title: "Data Analysis",
    skills: [
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
    ],
  },
  {
    title: "Visualization",
    skills: [
      { name: "Matplotlib", icon: "📊" },
      { name: "Seaborn", icon: "🌊" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Jupyter Notebook", icon: "📓" },
      { name: "Git", icon: "🔧" },
      { name: "GitHub", icon: "🐙" },
    ],
  },
];

function SkillCard({ icon, name }) {
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/60 text-xl ring-1 ring-white/10 transition group-hover:ring-white/20">
        {icon}
      </span>
      <p className="text-sm font-semibold text-white">{name}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-4 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            A focused toolkit I’m building for data analysis, machine learning,
            and real-world projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 md:grid-cols-2"
        >
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <div className="h-px w-16 bg-gradient-to-r from-sky-500/40 via-indigo-500/40 to-fuchsia-500/40" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {group.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
