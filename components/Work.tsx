"use client";

import { motion, useReducedMotion } from "framer-motion";

const CRITERIA = [
  {
    num: "01",
    title: "Recurring revenue",
    desc: "Customers come back without being chased.",
  },
  {
    num: "02",
    title: "A simple business model",
    desc: "You can explain it in one sentence.",
  },
  {
    num: "03",
    title: "Real profitability",
    desc: "$1M–$5M in EBITDA with clean financials.",
  },
  {
    num: "04",
    title: "Healthy margins",
    desc: "Strong unit economics that hold up over time.",
  },
  {
    num: "05",
    title: "Recession resilient demand",
    desc: "Needed in good times and bad.",
  },
  {
    num: "06",
    title: "A team worth keeping",
    desc: "Operators who care and want to keep building.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Work() {
  const reduced = useReducedMotion();

  return (
    <section id="companies" className="max-w-[1500px] mx-auto px-[3vw] pb-24 lg:pb-32">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: reduced ? 0 : 0.5, ease }}
        className="flex items-center justify-between border-t border-neutral-200 pt-6 mb-12"
      >
        <span className="text-xs uppercase tracking-[0.2em]">
          Businesses We Love
        </span>
        <a
          href="/investment-criteria"
          className="text-xs uppercase tracking-[0.15em] text-neutral-400 hover:text-black transition-colors duration-200"
        >
          Investment Criteria →
        </a>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
        {CRITERIA.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: reduced ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: reduced ? 0 : 0.6,
              ease,
              delay: reduced ? 0 : (i % 3) * 0.1,
            }}
            whileHover={{ y: reduced ? 0 : -4 }}
            style={{ boxShadow: "none", transition: "box-shadow 0.3s ease" }}
            className="bg-white p-8 md:p-10 flex flex-col justify-between min-h-[220px] group hover:bg-neutral-50 hover:shadow-md transition-colors duration-200"
          >
            <span className="text-xs text-neutral-300 tracking-[0.2em] font-mono">
              {item.num}
            </span>
            <div>
              <h3 className="text-lg font-medium mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
