"use client";

import { useCallback, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 48, density: { enable: true, area: 900 } },
        color: { value: ["#7dd3fc", "#a5b4fc", "#f0abfc"] },
        opacity: { value: 0.35 },
        size: { value: { min: 1, max: 3 } },
        move: { enable: true, speed: 0.6, direction: "none", outModes: "out" },
        links: {
          enable: true,
          distance: 140,
          color: "#ffffff",
          opacity: 0.08,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          repulse: { distance: 120, duration: 0.2 },
        },
      },
    }),
    []
  );

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-24 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500/25 via-indigo-500/25 to-fuchsia-500/25 blur-3xl" />
        <div className="absolute -bottom-28 right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-emerald-500/15 via-cyan-500/15 to-sky-500/15 blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.12 } },
        }}
        className="relative mx-auto w-full max-w-4xl text-center"
      >
        <motion.p
          variants={{ hidden: { y: 14, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          className="mb-4 text-sm font-medium tracking-widest text-white/70"
        >
          Aspiring Data Scientist
        </motion.p>

        <motion.h1
          variants={{ hidden: { y: 14, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Hi, I’m{" "}
          <span className="relative inline-block bg-gradient-to-r from-sky-300 via-indigo-300 to-fuchsia-300 bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradientShift_6s_ease-in-out_infinite]">
            Mohit Mishra
          </span>
        </motion.h1>

        <motion.p
          variants={{ hidden: { y: 14, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-200/80 sm:text-lg"
        >
          B.Tech student passionate about Data Science, Machine Learning and Data
          Analysis.
        </motion.p>

        <motion.div
          variants={{ hidden: { y: 14, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#projects"
            className="group relative inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-slate-950 shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            <span className="absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 opacity-0 blur transition group-hover:opacity-60" />
            View Projects
          </Link>
          <Link
            href="#contact"
            className="group relative inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            <span className="absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-r from-sky-400/60 via-indigo-400/60 to-fuchsia-400/60 opacity-0 blur transition group-hover:opacity-50" />
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          variants={{ hidden: { y: 14, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          className="mt-10 flex items-center justify-center gap-5"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white/5 p-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            aria-label="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M12 .5C5.73.5.75 5.65.75 12.06c0 5.1 3.17 9.42 7.57 10.95.55.11.76-.25.76-.55 0-.27-.01-1.16-.02-2.1-3.08.69-3.73-1.24-3.73-1.24-.5-1.33-1.23-1.68-1.23-1.68-1-.71.08-.7.08-.7 1.1.08 1.67 1.18 1.67 1.18.98 1.75 2.56 1.25 3.18.96.1-.73.38-1.25.69-1.54-2.46-.29-5.05-1.26-5.05-5.63 0-1.25.43-2.27 1.14-3.07-.12-.29-.5-1.44.11-3.01 0 0 .93-.3 3.05 1.17a10.2 10.2 0 0 1 2.78-.39c.94 0 1.89.13 2.78.39 2.12-1.47 3.05-1.17 3.05-1.17.61 1.57.23 2.72.11 3.01.71.8 1.14 1.82 1.14 3.07 0 4.38-2.6 5.33-5.08 5.61.39.35.74 1.05.74 2.12 0 1.53-.02 2.76-.02 3.14 0 .31.2.67.77.55 4.39-1.53 7.56-5.85 7.56-10.95C23.25 5.65 18.27.5 12 .5z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white/5 p-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.55v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69H9.32V9h3.41v1.56h.05c.47-.9 1.62-1.87 3.34-1.87 3.57 0 4.23 2.35 4.23 5.41v6.35zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
