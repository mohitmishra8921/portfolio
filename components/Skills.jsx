"use client";

import { motion } from "framer-motion";
import { 
  SiPython, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiPostgresql, 
  SiGit, 
  SiGithub, 
  SiJupyter,
  SiTableau,
  SiPowerbi,
  SiMicrosoftexcel,
  SiSqlite
} from "react-icons/si";
import { VscGraph, VscSettingsGear, VscCode } from "react-icons/vsc";

const SKILL_GROUPS = [
  {
    title: "Programming & Databases",
    description: "Core languages for data manipulation and storage.",
    icon: <VscCode className="text-sky-400" />,
    skills: [
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "SQL (PostgreSQL/MySQL)", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "SQLite", icon: <SiSqlite className="text-[#003B57]" /> },
    ],
  },
  {
    title: "Data Science Stack",
    description: "Libraries for analysis and machine learning.",
    icon: <VscSettingsGear className="text-indigo-400" />,
    skills: [
      { name: "Pandas", icon: <SiPandas className="text-[#150458]" /> },
      { name: "NumPy", icon: <SiNumpy className="text-[#013243]" /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
    ],
  },
  {
    title: "Visualization & Analysis",
    description: "Turning raw data into visual stories.",
    icon: <VscGraph className="text-fuchsia-400" />,
    skills: [
      { name: "Matplotlib / Seaborn", icon: <span className="text-xs font-bold">M/S</span> },
      { name: "Excel (Advanced)", icon: <SiMicrosoftexcel className="text-[#217346]" /> },
      { name: "Tableau / Power BI", icon: <SiTableau className="text-[#E97627]" /> },
    ],
  },
  {
    title: "Tools & Collaboration",
    description: "Essential workflow and version control tools.",
    icon: <SiGit className="text-orange-500" />,
    skills: [
      { name: "Jupyter", icon: <SiJupyter className="text-[#F37626]" /> },
      { name: "Git & GitHub", icon: <SiGithub className="text-white" /> },
    ],
  },
];

function SkillCard({ icon, name }) {
  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className="group flex items-center gap-3 rounded-xl border border-white/5 bg-slate-900/50 p-3 transition-all hover:border-indigo-500/30 hover:bg-indigo-500/5"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-lg shadow-inner group-hover:bg-slate-700 transition-colors">
        {icon}
      </div>
      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-slate-950 px-4 py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      
      <div className="mx-auto w-full max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Toolkit</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            A specialized stack focused on Data Science, Machine Learning, and turning complex data into actionable business value.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all hover:border-indigo-500/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-2xl">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{group.title}</h3>
                    <p className="text-sm text-slate-400 mt-1">{group.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 border-t border-r border-indigo-500/30 rounded-tr-xl" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Industry Perspective Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 text-center"
        >
          <p className="text-slate-300 text-sm">
            <span className="text-indigo-400 font-semibold mr-2">Focus:</span> 
            Currently deepening expertise in <span className="text-white font-medium">Deep Learning</span> and <span className="text-white font-medium">Big Data Technologies (Spark)</span> to solve larger-scale analytical challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
