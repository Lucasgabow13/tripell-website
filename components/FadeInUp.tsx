"use client";

import { motion, useReducedMotion } from "framer-motion";

type AnimType = "up" | "left" | "right" | "fade" | "scale";

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  type?: AnimType;
  duration?: number;
}

const EASE = [0.32, 0.72, 0, 1] as const;

const presets: Record<AnimType, { initial: Record<string, number>; animate: Record<string, number> }> = {
  up:    { initial: { opacity: 0, y: 30 },     animate: { opacity: 1, y: 0 } },
  left:  { initial: { opacity: 0, x: -40 },    animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 40 },     animate: { opacity: 1, x: 0 } },
  fade:  { initial: { opacity: 0 },            animate: { opacity: 1 } },
  scale: { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 } },
};

export default function FadeInUp({
  children,
  delay = 0,
  className,
  type = "up",
  duration = 0.7,
}: FadeInUpProps) {
  const reduced = useReducedMotion();
  const p = presets[type];

  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : p.initial}
      whileInView={p.animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduced ? 0 : duration,
        ease: EASE,
        delay: reduced ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
