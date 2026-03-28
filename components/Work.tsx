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
    desc: "$1M\u20135M in EBITDA with clean financials.",
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

const EASE = [0.32, 0.72, 0, 1] as const;

export default function Work() {
  const reduced = useReducedMotion();

  return (
    <section id="companies" className="max-w-[1500px] mx-auto px-[3vw] pb-24 lg:pb-32">
      {/* Section header with animated divider */}
      <div className="relative">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduced ? 0 : 0.9, ease: EASE }}
          className="h-px bg-neutral-200 origin-left"
        />
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduced ? 0 : 0.5, ease: EASE, delay: reduced ? 0 : 0.3 }}
          className="flex items-center justify-between pt-6 mb-12"
        >
          <span className="text-sm uppercase tracking-[0.2em] font-medium">
            Businesses We Love
          </span>
          <a
            href="/investment-criteria"
            className="text-xs uppercase tracking-[0.15em] text-neutral-400 hover:text-[#0a0a0a] transition-colors duration-300"
          >
            Investment Criteria &rarr;
          </a>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {CRITERIA.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: reduced ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: reduced ? 0 : 0.6,
              ease: EASE,
              delay: reduced ? 0 : (i % 3) * 0.1,
            }}
            whileHover={{ y: reduced ? 0 : -4 }}
            className="bg-white p-8 md:p-10 flex flex-col justify-between min-h-[220px] group hover:bg-neutral-50 transition-all duration-300 relative overflow-hidden border border-neutral-100"
          >
            {/* Teal accent — reveals on hover */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0a0a0a] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />

            <span className="text-xs text-neutral-300 tracking-[0.2em] font-mono group-hover:text-[#0a0a0a] transition-colors duration-300">
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
