"use client";

import { motion } from "framer-motion";
import { SiPython, SiJupyter, SiTensorflow } from "react-icons/si";
import { VscBook, VscRocket, VscBeaker } from "react-icons/vsc";

const MILESTONES = [
  {
    title: "Started learning Python",
    description: "Mastered the fundamentals of Python programming, focusing on data structures and logic.",
    icon: <SiPython className="text-[#3776AB]" />,
    date: "Early 2024"
  },
  {
    title: "Completed Advanced Python",
    description: "Deep-dived into OOPs, Decorators, and advanced libraries for automation and analysis.",
    icon: <VscBook className="text-sky-400" />,
    date: "Mid 2024"
  },
  {
    title: "Data Science Certification",
    description: "Enrolled in a comprehensive Data Science track covering statistics and data processing.",
    icon: <SiJupyter className="text-[#F37626]" />,
    date: "Late 2024"
  },
  {
    title: "Building Data Projects",
    description: "Developing end-to-end projects like Netflix Analysis and IPL Analytics using real-world datasets.",
    icon: <VscBeaker className="text-fuchsia-400" />,
    date: "Ongoing"
  },
  {
    title: "Exploring Machine Learning",
    description: "Currently mastering Scikit-Learn and XGBoost for predictive modeling and valuation.",
    icon: <SiTensorflow className="text-[#FF6F00]" />,
    date: "Current Focus"
  },
];

function TimelineItem({ title, description, icon, date, isLast }) {
  return (
    <div className="relative grid grid-cols-[3.5rem_1fr] gap-6 group">
      <div className="relative flex flex-col items-center">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-xl shadow-xl transition-all group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/20"
        >
          {icon}
        </motion.div>
        {!isLast && (
          <div className="absolute top-12 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent" />
        )}
      </div>

      <div className="pb-12">
        <motion.div
          whileHover={{ x: 4 }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-2xl backdrop-blur-sm transition-all group-hover:border-indigo-500/20 group-hover:bg-white/[0.04]"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
              {title}
            </h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400/80 bg-indigo-400/10 px-3 py-1 rounded-full">
              {date}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="relative bg-slate-950 px-4 py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-indigo-500/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-sky-500/5 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Journey</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            A chronicle of my evolution as a Data Scientist, from first lines of code to building predictive models.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {MILESTONES.map((m, idx) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <TimelineItem
                  title={m.title}
                  description={m.description}
                  icon={m.icon}
                  date={m.date}
                  isLast={idx === MILESTONES.length - 1}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
