"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  PaperAirplaneIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    icon: ChatBubbleLeftRightIcon,
    step: "01",
    title: "Asesoría Técnica",
    text: "Analizamos tu proyecto y definimos los objetivos del vuelo. Respondemos en menos de 24 horas hábiles.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    step: "02",
    title: "Planificación del Vuelo",
    text: "Preparamos la misión, coordinamos permisos DGAC y configuramos los equipos según cada faena.",
  },
  {
    icon: PaperAirplaneIcon,
    step: "03",
    title: "Operación Aérea",
    text: "Pilotos certificados ejecutan la captura con sensores de alta resolución y máxima seguridad.",
  },
  {
    icon: ChartBarIcon,
    step: "04",
    title: "Entrega de Resultados",
    text: "Procesamos los datos y entregamos ortofotos, modelos 3D o audiovisual listos para tu operación.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="proceso" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-[0.12]" />
      <div className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-amber-500/5 blur-[120px]" />

      <div className="container-max section-padding relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5">Cómo Trabajamos</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            De la idea al <span className="heading-gradient">dato preciso</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Un proceso claro y seguro, respaldado por la certificación DGAC en
            cada etapa.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          {/* Vertical progress line (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-cyan-400 to-amber-400"
            />
          </div>

          <div className="flex flex-col gap-10 lg:gap-0">
            {steps.map((s, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={s.step}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-12"
                >
                  <Reveal
                    direction={isLeft ? "right" : "left"}
                    delay={index * 0.05}
                    className={
                      isLeft
                        ? "lg:col-start-1 lg:text-right"
                        : "lg:col-start-2"
                    }
                  >
                    <div className="glass-card p-6 transition-colors hover:border-cyan-400/30 lg:my-6">
                      <div
                        className={`flex items-center gap-4 ${
                          isLeft ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                          <s.icon className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                          <span className="font-display text-sm font-bold text-amber-300">
                            {s.step}
                          </span>
                          <h3 className="font-display text-lg font-semibold text-white">
                            {s.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate-400">
                        {s.text}
                      </p>
                    </div>
                  </Reveal>

                  {/* Node on the center line */}
                  <div className="absolute left-1/2 top-10 hidden -translate-x-1/2 lg:block">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                      className="block h-4 w-4 rounded-full border-2 border-cyan-400 bg-night-950 shadow-glow"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
