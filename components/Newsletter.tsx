"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeInUp from "./FadeInUp";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section id="newsletter" className="bg-neutral-50">
      <div className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
        <div className="max-w-xl">
          <FadeInUp>
            <span className="text-sm uppercase tracking-[0.2em] text-neutral-500 font-medium block mb-10">
              Newsletter
            </span>
            <h2 className="text-3xl md:text-4xl font-medium leading-[1.15] mb-4">
              The Ironmark Letter
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed mb-10">
              One email per month. Thoughts on buying, building, and holding great
              businesses.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 px-5 py-3.5 text-sm border border-neutral-300 bg-white placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors duration-200"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.15em] bg-black text-white hover:bg-neutral-800 transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>
            <p className="text-xs text-neutral-400 mt-4 tracking-[0.05em]">
              No spam. Unsubscribe anytime.
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
