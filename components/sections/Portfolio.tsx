"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { XMarkIcon, PhotoIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Reveal from "@/components/ui/Reveal";

const albums = [
  {
    id: "preparacion",
    title: "Preparación de Vuelos",
    count: "14 Fotografías",
    cover: "https://globaldrone.cl/Fotos/7.jpg",
  },
  {
    id: "tomas",
    title: "Tomas Aéreas",
    count: "14 Fotografías",
    cover: "https://globaldrone.cl/Fotos/D7.JPG",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<null | (typeof albums)[number]>(null);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="galeria" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="container-max section-padding">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5">Galería de Proyectos</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Nuestro trabajo <span className="heading-gradient">en el aire</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {albums.map((album, index) => (
            <Reveal key={album.id} delay={index * 0.12}>
              <motion.button
                onClick={() => setActive(album)}
                whileHover="hover"
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 text-left"
              >
                <motion.div
                  variants={{ hover: { scale: 1.08 } }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={album.cover}
                    alt={album.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/30 to-transparent" />

                {/* Sheen sweep on hover */}
                <motion.div
                  variants={{
                    hover: { x: ["-120%", "120%"], opacity: [0, 0.4, 0] },
                  }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-12 bg-white/20 blur-md"
                />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {album.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-2 text-sm text-cyan-300">
                      <PhotoIcon className="h-4 w-4" />
                      {album.count} · Ver álbum
                    </p>
                  </div>
                  <motion.span
                    variants={{ hover: { rotate: 45, scale: 1.1 } }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-night-950"
                  >
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </motion.span>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-night-950/90 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 shadow-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={active.cover}
                  alt={active.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent" />
              </div>
              <div className="flex items-center justify-between bg-night-900 p-5">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {active.title}
                  </h3>
                  <p className="text-sm text-slate-400">{active.count}</p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full border border-white/15 bg-white/5 p-2 text-white transition-colors hover:bg-white/10"
                  aria-label="Cerrar"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
