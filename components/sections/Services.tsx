"use client";

import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  BeakerIcon,
  MapIcon,
  VideoCameraIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

const services = [
  {
    icon: BuildingOffice2Icon,
    title: "Inspección Industrial",
    description:
      "Revisión de estructuras, torres y paneles solares con termografía.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: BeakerIcon,
    title: "Agricultura de Precisión",
    description:
      "Análisis multiespectral de cultivos para optimizar el riego y la cosecha.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: MapIcon,
    title: "Fotogrametría",
    description:
      "Levantamientos topográficos 3D y ortofotos de alta precisión.",
    image:
      "https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: VideoCameraIcon,
    title: "Prod. Audiovisual",
    description:
      "Grabación en 4K/5.1K para inmobiliarias, eventos y publicidad.",
    image:
      "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: CubeTransparentIcon,
    title: "Proyectos Mineros",
    description:
      "Exploración, volumetría de acopios y monitoreo de faenas seguras.",
    image: "/gallery/tomas/D5.jpg",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-[0.15]" />

      <div className="container-max section-padding relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5">Nuestros Servicios</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Soluciones integrales para la{" "}
            <span className="heading-gradient">industria moderna</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Adaptadas a las necesidades de cada sector, con la precisión y
            seguridad que exige cada operación.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <TiltCard className="h-full">
                <article className="glass-card relative h-full overflow-hidden [transform:translateZ(0)]">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-night-900/50 to-transparent" />
                    <div
                      className="absolute left-4 top-4 rounded-xl border border-white/10 bg-night-950/60 p-3 backdrop-blur-md transition-colors group-hover:border-cyan-400/50"
                      style={{ transform: "translateZ(40px)" }}
                    >
                      <service.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6" style={{ transform: "translateZ(30px)" }}>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                    <a
                      href="#contacto"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                      Solicitar información
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-all duration-300 group-hover:ring-cyan-400/30" />
                </article>
              </TiltCard>
            </Reveal>
          ))}

          {/* CTA card */}
          <Reveal delay={0.4}>
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 p-8 text-night-950">
              <div className="absolute -right-8 -top-8 h-32 w-32 animate-pulse-glow rounded-full bg-white/20 blur-2xl" />
              <h3 className="font-display text-2xl font-bold">
                ¿Necesitas un presupuesto personalizado?
              </h3>
              <p className="mt-2 text-night-950/80">
                Respondemos en menos de 24 horas hábiles.
              </p>
              <a
                href="#contacto"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-night-950 px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Solicitar Cotización →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
