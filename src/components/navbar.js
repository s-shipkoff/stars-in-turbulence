"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/ormas", label: "ORMAS" },
  { href: "/publications", label: "Publications" },
  { href: "/outreach", label: "Outreach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/10 bg-space/70 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-stellar to-star shadow-[0_0_12px_2px_rgba(56,189,248,0.6)]" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Stars In Turbulence
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 text-sm md:flex">
          {LINKS.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                data-active={active}
                className="nav-link font-medium"
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-ink md:hidden"
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-space/95 px-6 py-3 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map(({ href, label }) => {
              const active =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-white/5 text-ink"
                      : "text-muted hover:bg-white/5 hover:text-ink"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
