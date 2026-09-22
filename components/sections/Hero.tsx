"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { end: 1819, prefix: "AOC ", label: "Certificación DGAC" },
  { end: 100, suffix: "%", label: "Cobertura en Chile" },
  { end: 5.1, suffix: "K", label: "Resolución de video", decimals: 1 },
];

const credentials = [
  "Inspección Industrial",
  "Agricultura de Precisión",
  "Fotogrametría",
  "Producción Audiovisual",
  "Proyectos Mineros",
  "Termografía",
  "Ortofotos 3D",
  "Volumetría de Acopios",
];

const title = "Elevando Visiones,";
const titleAccent = "Transformando Industrias";

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};
const wordItem = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background video with parallax */}
      <motion.div
        style={{ y: yVideo, scale }}
        className="absolute inset-0 h-[120%] w-full"
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/gallery/tomas/D5.jpg"
        >
          <source
            src="https://globaldrone.cl/Presentaci%C3%B3n/Presentaci%C3%B3n.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-night-950/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/40 to-night-950/70" />
      <div className="absolute inset-0 tech-grid opacity-30 mask-fade-b" />

      {/* Animated orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px] animate-float-slow" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px] animate-float" />

      {/* Floating drone dots (radar-like particles) */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-cyan-400/60"
          style={{
            left: `${12 + i * 14}%`,
            top: `${20 + ((i * 37) % 60)}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 container-max section-padding text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-cyan-400" />
            Soluciones Aéreas Profesionales · Chile
          </span>
        </motion.div>

        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="show"
          style={{ perspective: 800 }}
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          <span className="inline-block">
            {title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={wordItem}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="mt-2 block">
            {titleAccent.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={wordItem}
                className="mr-[0.25em] inline-block heading-gradient text-glow"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl"
        >
          Líderes en inspección industrial, topografía y agricultura de
          precisión en Chile. Pilotos certificados por la DGAC y equipos de
          última generación.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#servicios" className="btn-primary text-base">
            Nuestros Servicios
          </a>
          <a href="#contacto" className="btn-secondary text-base">
            <PlayCircleIcon className="h-5 w-5" />
            Contáctanos
          </a>
        </motion.div>

        {/* Stats row with count-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass-card px-4 py-5 text-center">
              <div className="font-display text-xl font-bold text-cyan-300 sm:text-2xl">
                <CountUp
                  end={s.end}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                />
              </div>
              <div className="mt-1 text-xs text-slate-400 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee of credentials */}
      <div className="absolute bottom-0 left-0 z-10 w-full border-t border-white/10 bg-night-950/40 py-3 backdrop-blur-sm">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
            {[...credentials, ...credentials].map((c, i) => (
              <span
                key={i}
                className="flex items-center gap-8 whitespace-nowrap text-sm font-medium uppercase tracking-wider text-slate-400"
              >
                {c}
                <span className="h-1 w-1 rounded-full bg-cyan-400/60" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#nosotros"
        className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2 text-slate-400 hover:text-cyan-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Desplazar hacia abajo"
      >
        <ArrowDownIcon className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
