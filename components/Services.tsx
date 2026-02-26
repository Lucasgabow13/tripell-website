"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import FadeInUp from "./FadeInUp";

const COLUMNS = [
  {
    id: "pe",
    title: "Traditional PE",
    items: [
      { yes: true,  text: "Big checks" },
      { yes: true,  text: "Fast diligence (once you're in motion)" },
      { yes: false, text: "Short hold period (3–7 years)" },
      { yes: false, text: "Financial engineering first" },
      { yes: false, text: "Heavy reporting + new rules" },
      { yes: false, text: "Culture often changes" },
      { yes: false, text: "You become a deal, not a partner" },
    ],
  },
  {
    id: "strategic",
    title: "Strategic Buyer",
    items: [
      { yes: true,  text: "Industry expertise" },
      { yes: true,  text: "Possible synergies" },
      { yes: false, text: "Usually full integration" },
      { yes: false, text: "Your brand/team often gets absorbed" },
      { yes: false, text: "Less flexibility on your role" },
      { yes: false, text: "Decisions driven by their priorities" },
      { yes: false, text: "Can be slow + committee-heavy" },
    ],
  },
  {
    id: "tripell",
    title: "TriPell Partners",
    highlight: true,
    items: [
      { yes: true, text: "Long-term home — we don't flip" },
      { yes: true, text: "Founder-friendly transitions (stay or step back)" },
      { yes: true, text: "Operator-led — we improve what's broken, protect what works" },
      { yes: true, text: "Simple, direct process" },
      { yes: true, text: "Protects your team + culture" },
      { yes: true, text: "Flexible structures — majority buyout + thoughtful transition" },
    ],
  },
];

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

export default function Services() {
  const [active, setActive] = useState("tripell");
  const reduced = useReducedMotion();

  const activeCol = COLUMNS.find((c) => c.id === active)!;

  return (
    <section id="difference" className="bg-black text-white">
      <div className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
        <FadeInUp>
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 block mb-16">
            The TriPell Difference
          </span>
        </FadeInUp>

        {/* Tabs */}
        <FadeInUp delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 mb-16 border-b border-white/10">
            {COLUMNS.map((col) => (
              <button
                key={col.id}
                onClick={() => setActive(col.id)}
                className={`relative px-6 py-3 text-xs uppercase tracking-[0.15em] transition-all duration-200 text-left sm:text-center ${
                  col.highlight
                    ? active === col.id
                      ? "text-black bg-white"
                      : "text-white border border-white/50 hover:border-white hover:text-white"
                    : active === col.id
                    ? "text-white"
                    : "text-white/30 hover:text-white/60"
                }`}
              >
                {col.title}
                {active === col.id && !col.highlight && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-px bg-white/50"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                  />
                )}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Content panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 min-h-[320px]">
          {/* Left — heading */}
          <div className="flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={active + "-heading"}
                initial={{ opacity: 0, y: reduced ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduced ? 0 : -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] mb-6">
                  {activeCol.highlight
                    ? "Why founders choose TriPell."
                    : activeCol.id === "pe"
                    ? "What PE does well — and where it falls short."
                    : "Strategics bring synergies. And complications."}
                </h2>
                <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                  {activeCol.highlight
                    ? "We're not optimizing for a return multiple. We're building a portfolio of great businesses that last — and that means treating founders like partners, not targets."
                    : activeCol.id === "pe"
                    ? "Private equity has its place. But if you care about your team, your culture, and what happens to the business after you're gone — PE isn't built for that."
                    : "A strategic buyer can offer real synergies and industry depth. The trade-off: your brand, team, and independence are rarely guaranteed on the other side."}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — checklist */}
          <AnimatePresence mode="wait">
            <motion.ul
              key={active + "-list"}
              variants={reduced ? undefined : listVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="flex flex-col gap-4 justify-center"
            >
              {activeCol.items.map((item, i) => (
                <motion.li
                  key={i}
                  variants={reduced ? undefined : itemVariants}
                  className="flex items-start gap-4"
                >
                  <span
                    className={`text-sm mt-px shrink-0 ${
                      item.yes ? "text-white" : "text-white/20"
                    }`}
                  >
                    {item.yes ? "✓" : "✗"}
                  </span>
                  <span
                    className={`text-sm leading-snug ${
                      item.yes ? "text-white/80" : "text-white/25"
                    }`}
                  >
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
