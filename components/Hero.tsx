"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const TEXT = "A long-term home for great businesses.";

function TypeWriter({ startDelay = 0 }: { startDelay?: number }) {
  const reduced = useReducedMotion();
  const [displayed, setDisplayed] = useState(reduced ? TEXT : "");
  const [phase, setPhase] = useState<"waiting" | "typing" | "blinking" | "done">(
    reduced ? "done" : "waiting"
  );
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduced) return;

    const start = setTimeout(() => {
      setPhase("typing");
      let i = 0;
      intervalRef.current = setInterval(() => {
        i++;
        setDisplayed(TEXT.slice(0, i));
        if (i >= TEXT.length) {
          clearInterval(intervalRef.current!);
          setPhase("blinking");
          setTimeout(() => setPhase("done"), 1200);
        }
      }, 58);
    }, startDelay * 1000);

    return () => {
      clearTimeout(start);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [reduced, startDelay]);

  const showCursor = phase === "typing" || phase === "blinking";

  return (
    <span>
      {displayed}
      {showCursor && (
        <span
          className="inline-block w-[2px] h-[0.85em] bg-white ml-1 align-middle"
          style={{ animation: "blink 0.7s step-end infinite" }}
        />
      )}
    </span>
  );
}

const SLIDES = [
  { shade: "from-neutral-800 to-neutral-900" },
  { shade: "from-neutral-700 to-stone-900" },
  { shade: "from-zinc-800 to-neutral-900" },
  { shade: "from-stone-700 to-neutral-800" },
  { shade: "from-neutral-600 to-zinc-900" },
];

const PROMISE_POINTS = [
  "Long-term capital — we don't flip",
  "Operator-led — we improve systems + execution",
  "Founder-friendly — flexible transitions, minimal disruption",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const ease = [0.22, 1, 0.36, 1] as const;

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.7, ease, delay: reduced ? 0 : delay },
  });

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-gradient-to-br ${slide.shade} transition-opacity duration-[1200ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full h-full" />
        </div>
      ))}

      {/* Text overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-[3vw]">
        <div className="max-w-[1500px] mx-auto w-full">
          <motion.p
            {...fadeUp(0)}
            className="text-white/50 text-xs uppercase tracking-[0.25em] mb-8"
          >
            Long-term partners, not private equity.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.01, delay: reduced ? 0 : 0.15 }}
            className="text-white text-4xl md:text-6xl lg:text-[5.5rem] font-medium leading-[1.08] max-w-3xl mb-6 min-h-[1.08em]"
          >
            <TypeWriter startDelay={0.25} />
          </motion.h1>
          <motion.p
            {...fadeUp(0.3)}
            className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl mb-10"
          >
            We partner with exceptional owners to preserve what works, improve
            what doesn&apos;t, and build companies meant to last.
          </motion.p>
          <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center gap-5">
            <motion.a
              href="#contact"
              whileHover={{ scale: reduced ? 1 : 1.03 }}
              whileTap={{ scale: reduced ? 1 : 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="text-xs uppercase tracking-[0.15em] px-6 py-3 bg-white text-black hover:bg-white/90 transition-colors duration-200"
            >
              Get In Touch
            </motion.a>
            <a
              href="#criteria"
              className="text-xs uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              View Investment Criteria →
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduced ? 0 : 0.6, ease, delay: reduced ? 0 : 0.6 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10"
      >
        <div className="max-w-[1500px] mx-auto px-[3vw] h-16 flex items-center justify-between gap-8">
          <div className="hidden lg:flex items-center gap-0 flex-1">
            {PROMISE_POINTS.map((point, i) => (
              <p
                key={i}
                className={`text-xs text-white/40 tracking-[0.05em] flex-1 ${
                  i > 0 ? "pl-8 border-l border-white/10 ml-8" : ""
                }`}
              >
                {point}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-auto shrink-0">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-px transition-all duration-500 ${
                  i === current ? "w-8 bg-white" : "w-3 bg-white/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
            <span className="text-white/40 text-xs tracking-[0.25em] font-mono ml-4">
              0{current + 1} — 0{SLIDES.length}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
