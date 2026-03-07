import Image from "next/image";

const PROJECTS = [
  {
    title: "Netflix Data Analysis",
    description:
      "Exploratory data analysis on Netflix titles to uncover trends in content, genres, and release patterns.",
    tools: ["Python", "Pandas", "Matplotlib"],
    imageSrc: "/globe.svg",
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
  },
  {
    title: "IPL Data Analysis",
    description:
      "Analyzed IPL match and ball-by-ball datasets to identify performance insights and team/player patterns.",
    tools: ["Python", "Pandas"],
    imageSrc: "/file.svg",
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
  },
  {
    title: "Sales Data Dashboard",
    description:
      "Built a sales analytics dashboard with KPI summaries and visual insights to support data-driven decisions.",
    tools: ["Python", "Pandas", "Visualization"],
    imageSrc: "/window.svg",
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
  },
  {
    title: "House Price Prediction",
    description:
      "Trained and evaluated regression models to predict house prices using feature engineering and ML workflows.",
    tools: ["Python", "Scikit-learn"],
    imageSrc: "/next.svg",
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com",
  },
];

function ExternalLinkButton({ href, children, variant = "secondary" }) {
  const base =
    "inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30";

  const styles =
    variant === "primary"
      ? "bg-white text-slate-950 hover:bg-white/90"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 px-4 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            A few data projects I’ve worked on — from analysis to machine learning.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="object-contain p-10 opacity-90 transition group-hover:opacity-100"
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
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M12 .5C5.73.5.75 5.65.75 12.06c0 5.1 3.17 9.42 7.57 10.95.55.11.76-.25.76-.55 0-.27-.01-1.16-.02-2.1-3.08.69-3.73-1.24-3.73-1.24-.5-1.33-1.23-1.68-1.23-1.68-1-.71.08-.7.08-.7 1.1.08 1.67 1.18 1.67 1.18.98 1.75 2.56 1.25 3.18.96.1-.73.38-1.25.69-1.54-2.46-.29-5.05-1.26-5.05-5.63 0-1.25.43-2.27 1.14-3.07-.12-.29-.5-1.44.11-3.01 0 0 .93-.3 3.05 1.17a10.2 10.2 0 0 1 2.78-.39c.94 0 1.89.13 2.78.39 2.12-1.47 3.05-1.17 3.05-1.17.61 1.57.23 2.72.11 3.01.71.8 1.14 1.82 1.14 3.07 0 4.38-2.6 5.33-5.08 5.61.39.35.74 1.05.74 2.12 0 1.53-.02 2.76-.02 3.14 0 .31.2.67.77.55 4.39-1.53 7.56-5.85 7.56-10.95C23.25 5.65 18.27.5 12 .5z" />
                    </svg>
                    GitHub
                  </ExternalLinkButton>

                  <ExternalLinkButton href={project.liveUrl} variant="primary">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 3h7v7" />
                      <path d="M10 14L21 3" />
                      <path d="M21 14v7h-7" />
                      <path d="M3 10V3h7" />
                      <path d="M3 21h7" />
                    </svg>
                    Live Demo
                  </ExternalLinkButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
