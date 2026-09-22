"use client";

import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  PaperAirplaneIcon,
  MapPinIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const pillars = [
  {
    icon: ShieldCheckIcon,
    title: "Certificados DGAC",
    text: "Operaciones autorizadas bajo AOC Nº 1819 en todo Chile.",
  },
  {
    icon: PaperAirplaneIcon,
    title: "Pilotos Profesionales",
    text: "Equipo certificado con protocolos de seguridad estrictos.",
  },
  {
    icon: CpuChipIcon,
    title: "Equipos de Vanguardia",
    text: "Sensores de alta resolución y análisis multiespectral.",
  },
  {
    icon: MapPinIcon,
    title: "Cobertura Nacional",
    text: "Presencia y despliegue a lo largo de todo el territorio.",
  },
];

export default function Certification() {
  return (
    <section id="certificaciones" className="relative py-20">
      <div className="container-max section-padding">
        <div className="glass-card relative overflow-hidden p-8 sm:p-12">
          <div className="pointer-events-none absolute -left-10 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-amber-500/10 blur-[100px]" />

          <div className="relative grid grid-cols-2 gap-6 lg:grid-cols-4">
            {pillars.map((p, index) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                  <p.icon className="h-7 w-7 text-cyan-400" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
