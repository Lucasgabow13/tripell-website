"use client";

import FadeInUp from "./FadeInUp";
import { motion, useReducedMotion } from "framer-motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const EASE = [0.32, 0.72, 0, 1] as const;

export default function Contact() {
  const reduced = useReducedMotion();

  return (
    <section id="contact" className="bg-[#0a0a0a] text-white grain relative">
      <div className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32 relative z-10">
        {/* Animated rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduced ? 0 : 1.2, ease: EASE }}
          className="h-px bg-white/15 origin-left mb-16"
        />

        <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
          <FadeInUp type="left">
            <span className="text-sm uppercase tracking-[0.2em] text-white/50 font-medium block mb-6">
              Start the Conversation
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] max-w-2xl">
              Let&apos;s Chat About Your Business
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.15} type="right">
            <HoverBorderGradient
              as="a"
              containerClassName="cursor-pointer"
              className="text-xs uppercase tracking-[0.15em] px-8 py-4 bg-[#0a0a0a] text-white"
              onClick={() => { window.location.href = '/contact'; }}
            >
              Get In Touch
            </HoverBorderGradient>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
