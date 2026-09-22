"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const features = [
  "Pilotos Certificados DGAC",
  "Equipos de Alta Resolución",
  "Cobertura en todo Chile",
];

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="container-max section-padding">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow mb-5">Sobre Global Drone</span>
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Innovación y Precisión <br />
              <span className="heading-gradient">en el Aire</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Al igual que la tradición define la calidad, en Global Drone la
              precisión define nuestro servicio. Nacimos con la misión de llevar
              la tecnología aérea a las industrias chilenas, ofreciendo datos
              exactos y visuales impactantes.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Contamos con pilotos certificados por la DGAC y equipos de última
              generación para garantizar seguridad y resultados profesionales en
              cada vuelo.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-cyan-400" />
                  <span className="text-slate-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certification card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card overflow-hidden p-3">
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
                  src="https://globaldrone.cl/Fotos/AOC.jpg"
                  alt="Certificado AOC DGAC Nº 1819"
                  width={800}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
                {/* scan line effect */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 animate-scan bg-gradient-to-b from-cyan-400/30 to-transparent" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
