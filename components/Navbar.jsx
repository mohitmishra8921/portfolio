"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
            className="text-sm font-medium text-slate-200/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            {item.label}
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
    window.history.replaceState(null, "", href);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/#home"
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
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:hidden"
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

      {mobileOpen ? (
        <div className="md:hidden">
          <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
            <div className="rounded-xl border border-white/10 bg-slate-900/95 p-4 shadow-lg shadow-black/20">
              <NavLinks
                className="flex flex-col gap-4"
                onItemClick={() => setMobileOpen(false)}
                onAnchorClick={handleAnchorClick}
              />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
