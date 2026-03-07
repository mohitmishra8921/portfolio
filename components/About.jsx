import Image from "next/image";

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
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            I am Mohit Mishra, a B.Tech student currently in my 4th semester. I
            recently started my journey in Data Science and I am passionate
            about learning Python, Data Analysis, Machine Learning, and building
            real-world data projects.
          </p>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="mx-auto w-full max-w-sm">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20">
              <Image
                src="/window.svg"
                alt="Profile"
                fill
                className="object-cover p-10 opacity-90"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-fuchsia-500/10" />
            </div>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                >
                  <p className="text-sm font-semibold text-white">
                    {card.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm leading-7 text-slate-300">
                I enjoy turning data into insights, learning ML concepts, and
                building projects that solve real problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
