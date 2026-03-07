"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function NavLinks({ className = "", onItemClick, onAnchorClick }) {
  return (
    <ul className={className}>
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={(e) => {
              onAnchorClick?.(e, item.href);
              onItemClick?.();
            }}
            className="group relative inline-flex items-center text-sm font-medium text-white/80 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            {item.label}
            <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-sky-300 via-indigo-300 to-fuchsia-300 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = useMemo(() => pathname === "/", [pathname]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleAnchorClick = (e, href) => {
    if (!href.startsWith("#")) return;

    if (!isHome) return;

    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", pathname);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50"
    >
      <div className="border-b border-white/20 bg-white/10 shadow-lg shadow-black/10 backdrop-blur-lg">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            onClick={(e) => handleAnchorClick(e, "#home")}
            className="select-none text-base font-semibold tracking-tight text-white"
            aria-label="Go to home"
          >
            Mohit Mishra
          </Link>

          <div className="hidden items-center md:flex">
            <NavLinks
              className="flex items-center gap-8"
              onAnchorClick={handleAnchorClick}
            />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white/80 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              key="mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden"
            >
              <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
                <motion.div
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg shadow-black/10 backdrop-blur-lg"
                >
                  <NavLinks
                    className="flex flex-col gap-4"
                    onItemClick={() => setMobileOpen(false)}
                    onAnchorClick={handleAnchorClick}
                  />
                </motion.div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
