"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const features = [
  "Pilotos Certificados DGAC",
  "Equipos de Alta Resolución",
  "Cobertura en todo Chile",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yBadge = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="nosotros" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="container-max section-padding">
        <div
          ref={ref}
          className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
        >
          {/* Text */}
          <div>
            <Reveal direction="right">
              <span className="eyebrow mb-5">Sobre Global Drone</span>
              <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Innovación y Precisión <br />
                <span className="heading-gradient">en el Aire</span>
              </h2>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Al igual que la tradición define la calidad, en Global Drone la
                precisión define nuestro servicio. Nacimos con la misión de
                llevar la tecnología aérea a las industrias chilenas, ofreciendo
                datos exactos y visuales impactantes.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                Contamos con pilotos certificados por la DGAC y equipos de
                última generación para garantizar seguridad y resultados
                profesionales en cada vuelo.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-col gap-3">
              {features.map((feature, index) => (
                <Reveal key={feature} direction="right" delay={0.2 + index * 0.1}>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-cyan-400" />
                    <span className="text-slate-200">{feature}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certification card with parallax */}
          <Reveal direction="left" className="relative">
            <motion.div style={{ y: yImage }} className="glass-card overflow-hidden p-3">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                  Certificación Oficial
                </span>
                <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
                  AOC Nº 1819
                </span>
              </div>
              <div className="relative mt-2 overflow-hidden rounded-xl">
                <Image
                  src="/gallery/aoc.jpg"
                  alt="Certificado AOC DGAC Nº 1819"
                  width={800}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 animate-scan bg-gradient-to-b from-cyan-400/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              style={{ y: yBadge }}
              className="glass-card absolute -bottom-6 -left-6 hidden px-5 py-4 sm:block"
            >
              <div className="font-display text-2xl font-bold text-cyan-300">
                DGAC
              </div>
              <div className="text-xs text-slate-400">
                Dirección General de
                <br />
                Aeronáutica Civil
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
