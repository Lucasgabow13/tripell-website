"use client";

import FadeInUp from "./FadeInUp";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white">
      <div className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] max-w-2xl">
              Let&apos;s Chat About Your Business
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="shrink-0 text-xs uppercase tracking-[0.15em] px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
