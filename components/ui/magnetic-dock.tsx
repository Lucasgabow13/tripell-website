'use client'
import React, {
  useState,
  useRef,
  useContext,
  createContext,
  useEffect
} from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring
} from "framer-motion";

// shared mouse position context
const MouseContext = createContext({ x: 0, y: 0 });

// individual item with magnetic scaling effect
export function MagneticItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useContext(MouseContext);
  const distance = useMotionValue(Infinity);

  useEffect(() => {
    if (!ref.current || mouse.x === 0) {
      distance.set(Infinity);
      return;
    }
    const iconRect = ref.current.getBoundingClientRect();
    const containerRect = ref.current.parentElement?.getBoundingClientRect();
    if (!containerRect) return;
    const iconCenterX = iconRect.left + iconRect.width / 2;
    const mouseXAbsolute = containerRect.left + mouse.x;
    distance.set(Math.abs(mouseXAbsolute - iconCenterX));
  }, [mouse, distance]);

  const scale = useTransform(distance, [0, 120], [1.15, 1]);
  const springScale = useSpring(scale, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ scale: springScale }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// wrapper that provides mouse context
export function MagneticDockContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    const { clientX, currentTarget } = e;
    const { left } = currentTarget.getBoundingClientRect();
    setPos({ x: clientX - left, y: 0 });
  };

  const onMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <MouseContext.Provider value={pos}>
      <div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={className}
      >
        {children}
      </div>
    </MouseContext.Provider>
  );
}
