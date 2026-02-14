"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Events", href: "/events" },
  { label: "DJs", href: "/djs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-wider text-white hover:text-neon-cyan transition-colors"
          >
            synapse<span className="text-neon-cyan">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/events/synapse-vol4-michael-bibi"
              className="ml-2 inline-flex items-center gap-2 rounded bg-gradient-to-r from-neon-cyan to-neon-magenta px-5 py-2 text-sm font-semibold text-dark-950 hover:opacity-90 transition-opacity"
            >
              GET TICKETS
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-dark-900/95 backdrop-blur-lg border-t border-white/5"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-lg tracking-widest uppercase text-zinc-300 hover:text-neon-cyan transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/events/synapse-vol4-michael-bibi"
              className="mt-4 block w-full text-center rounded bg-gradient-to-r from-neon-cyan to-neon-magenta px-5 py-3 text-sm font-semibold text-dark-950"
              onClick={() => setMenuOpen(false)}
            >
              GET TICKETS
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
