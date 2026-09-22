"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({
  children,
  className,
  intensity = 10,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(my, [0, 1], [intensity, -intensity]),
    { stiffness: 200, damping: 20 }
  );
  const rotateY = useSpring(
    useTransform(mx, [0, 1], [-intensity, intensity]),
    { stiffness: 200, damping: 20 }
  );

  // Spotlight position in %
  const spotX = useTransform(mx, (v) => `${v * 100}%`);
  const spotY = useTransform(my, (v) => `${v * 100}%`);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ y: -8 }}
      className={`group relative [perspective:1000px] ${className ?? ""}`}
    >
      {/* Spotlight overlay following cursor */}
      <motion.div
        aria-hidden
        style={{
          background: useTransform(
            [spotX, spotY],
            ([sx, sy]) =>
              `radial-gradient(340px circle at ${sx} ${sy}, rgba(56,224,255,0.15), transparent 65%)`
          ),
        }}
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </motion.div>
  );
}
