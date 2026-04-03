"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
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

    // Use a small delay on mobile to let the menu close smoothly before jumping
    const scroll = () => {
      const offset = 80; // height of navbar + gap
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      window.history.replaceState(null, "", href);
    };

    if (mobileOpen) {
      setMobileOpen(false);
      // Wait for exit animation (300ms) to complete before scrolling for better performance
      setTimeout(scroll, 310);
    } else {
      scroll();
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-0"
    >
      <nav className="navbar bg-slate-900/40 backdrop-blur-md border-b border-white/10 px-8">
          <Link
            href="/"
            onClick={(e) => handleAnchorClick(e, "#home")}
            className="navbar-brand select-none text-sm font-bold tracking-tight text-white"
            aria-label="Go to home"
          >
            Mohit Kumar Mishra
          </Link>

          <div className="hidden items-center md:flex gap-8">
            <NavLinks
              className="nav-links"
              onAnchorClick={handleAnchorClick}
            />
            <div className="nav-right">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="hamburger inline-flex items-center justify-center rounded-md p-2 text-white/80 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
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
          </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              key="mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 right-0 px-2 md:hidden"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl"
              >
                <NavLinks
                  className="flex flex-col gap-6"
                  onItemClick={() => setMobileOpen(false)}
                  onAnchorClick={handleAnchorClick}
                />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
