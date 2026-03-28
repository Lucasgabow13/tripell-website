"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Investment Criteria", href: "/investment-criteria" },
  { label: "Companies", href: "/companies" },
];

const MORE_LINKS = [
  { label: "Refer a Deal", href: "/refer" },
];

export default function Nav({ forceDark = false }: { forceDark?: boolean }) {
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

  const isLight = !forceDark && atTop && !menuOpen;

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight ? "bg-transparent" : "bg-white/95 backdrop-blur-sm border-b border-neutral-200"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-[3vw] h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <svg
            height="36"
            viewBox="0 0 260 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "auto" }}
            className="transition-colors duration-300"
          >
            <circle cx="24" cy="24" r="18" stroke={isLight ? "#FFFFFF" : "#0a0a0a"} strokeWidth="1.2" />
            <line x1="15.5" y1="16.5" x2="32.5" y2="16.5" stroke={isLight ? "#FFFFFF" : "#0a0a0a"} strokeWidth="1.2" strokeLinecap="round" />
            <line x1="24" y1="16.5" x2="24" y2="31.5" stroke={isLight ? "#FFFFFF" : "#0a0a0a"} strokeWidth="1.2" strokeLinecap="round" />
            <line x1="15.5" y1="31.5" x2="32.5" y2="31.5" stroke={isLight ? "#FFFFFF" : "#0a0a0a"} strokeWidth="1.2" strokeLinecap="round" />
            <line x1="58" y1="11" x2="58" y2="37" stroke={isLight ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.2)"} strokeWidth="0.8" />
            <text x="72" y="23" fontFamily="Inter, sans-serif" fontWeight="300" fontSize="19" letterSpacing="4.5" fill={isLight ? "#FFFFFF" : "#0a0a0a"}>IRONMARK</text>
            <text x="73" y="37" fontFamily="Inter, sans-serif" fontWeight="300" fontSize="11" letterSpacing="5" fill={isLight ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)"}>CAPITAL</text>
          </svg>
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
          <HoverBorderGradient
            as="a"
            containerClassName={`cursor-pointer transition-all duration-300 ${
              isLight ? "" : "bg-white/10 hover:bg-white/20 border-neutral-300"
            }`}
            className={`text-xs uppercase tracking-[0.15em] px-4 py-2 ${
              isLight ? "bg-[#0a0a0a] text-white" : "bg-white text-[#0a0a0a]"
            }`}
            onClick={() => { window.location.href = '/contact'; }}
          >
            Get In Touch
          </HoverBorderGradient>
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
