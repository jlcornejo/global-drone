"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

const stats = [
  { value: "AOC 1819", label: "Certificación DGAC" },
  { value: "100%", label: "Cobertura en Chile" },
  { value: "4K/5.1K", label: "Alta resolución" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background video from official site */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://globaldrone.cl/Fotos/D5.JPG"
      >
        <source
          src="https://globaldrone.cl/Presentaci%C3%B3n/Presentaci%C3%B3n.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-night-950/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/40 to-night-950/70" />
      <div className="absolute inset-0 tech-grid opacity-30 mask-fade-b" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px] animate-float-slow" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px] animate-float" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 container-max section-padding text-center"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-cyan-400" />
            Soluciones Aéreas Profesionales · Chile
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Elevando Visiones,
          <span className="mt-2 block heading-gradient text-glow">
            Transformando Industrias
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl"
        >
          Líderes en inspección industrial, topografía y agricultura de
          precisión en Chile. Pilotos certificados por la DGAC y equipos de
          última generación.
        </motion.p>

        <motion.div
          variants={item}
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

        {/* Stats row */}
        <motion.div
          variants={item}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-card px-4 py-5 text-center"
            >
              <div className="font-display text-xl font-bold text-cyan-300 sm:text-2xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-slate-400 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#nosotros"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-400 hover:text-cyan-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Desplazar hacia abajo"
      >
        <ArrowDownIcon className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
