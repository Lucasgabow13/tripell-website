"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Investment Criteria", href: "/investment-criteria" },
  { label: "Companies", href: "/companies" },
];

const MORE_LINKS = [
  { label: "Refer a Deal", href: "/refer" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isLight = atTop && !menuOpen;

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight ? "bg-transparent" : "bg-white/95 backdrop-blur-sm border-b border-neutral-200"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-[3vw] h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
            isLight ? "text-white" : "text-black"
          }`}
        >
          TriPell Partners
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:opacity-50 ${
                isLight ? "text-white" : "text-black"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* More dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={`text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:opacity-50 flex items-center gap-1.5 ${
                isLight ? "text-white" : "text-black"
              }`}
            >
              More
              <span
                className={`text-[9px] transition-transform duration-200 ${
                  moreOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            {moreOpen && (
              <div className="absolute top-full right-0 mt-3 bg-white border border-neutral-200 shadow-sm min-w-[160px]">
                {MORE_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMoreOpen(false)}
                    className="block px-5 py-3 text-xs uppercase tracking-[0.15em] text-black hover:bg-neutral-50 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Get In Touch CTA */}
          <a
            href="/contact"
            className={`text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-all duration-300 ${
              isLight
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
          >
            Get In Touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-6 h-5 flex flex-col justify-between"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-full h-px transition-all duration-300 origin-center ${
              menuOpen
                ? "rotate-45 translate-y-[9px] bg-black"
                : isLight
                ? "bg-white"
                : "bg-black"
            }`}
          />
          <span
            className={`block w-full h-px transition-all duration-300 ${
              menuOpen ? "opacity-0" : isLight ? "bg-white" : "bg-black"
            }`}
          />
          <span
            className={`block w-full h-px transition-all duration-300 origin-center ${
              menuOpen
                ? "-rotate-45 -translate-y-[9px] bg-black"
                : isLight
                ? "bg-white"
                : "bg-black"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          menuOpen ? "max-h-screen border-t border-neutral-200" : "max-h-0"
        }`}
      >
        <nav className="px-[3vw] py-8 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm uppercase tracking-[0.15em] text-black hover:opacity-50 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-neutral-100 pt-4 flex flex-col gap-4">
            {MORE_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-[0.15em] text-neutral-500 hover:opacity-50 transition-opacity"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="/contact"
            className="text-sm uppercase tracking-[0.15em] text-black border border-black px-4 py-2.5 w-fit hover:bg-black hover:text-white transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Get In Touch
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
