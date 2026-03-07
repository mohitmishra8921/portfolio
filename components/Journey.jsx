const MILESTONES = [
  {
    title: "Started learning Python",
    icon: "🐍",
  },
  {
    title: "Completed Advanced Python",
    icon: "🏁",
  },
  {
    title: "Started Data Science Course",
    icon: "🎓",
  },
  {
    title: "Building Data Analysis Projects",
    icon: "🧩",
  },
  {
    title: "Learning Machine Learning",
    icon: "🤖",
  },
];

function TimelineItem({ title, icon, isLast }) {
  return (
    <div className="relative grid grid-cols-[2.5rem_1fr] gap-4">
      <div className="relative flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg shadow-sm shadow-black/20">
          {icon}
        </div>
        {isLast ? null : (
          <div className="mt-3 h-full w-px bg-gradient-to-b from-white/15 via-white/10 to-transparent" />
        )}
      </div>

      <div className="pb-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10">
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="mt-1 text-sm leading-6 text-slate-300">
            {" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="bg-slate-950 px-4 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Data Science Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            A quick timeline of how I started and what I’m currently learning.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="animate-[fadeUp_700ms_ease-out_both]">
            {MILESTONES.map((m, idx) => (
              <TimelineItem
                key={m.title}
                title={m.title}
                icon={m.icon}
                isLast={idx === MILESTONES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
