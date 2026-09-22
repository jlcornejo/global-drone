"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { XMarkIcon, PhotoIcon } from "@heroicons/react/24/outline";

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

  return (
    <section id="galeria" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow mb-5">Galería de Proyectos</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Nuestro trabajo <span className="heading-gradient">en el aire</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {albums.map((album, index) => (
            <motion.button
              key={album.id}
              onClick={() => setActive(album)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 text-left"
            >
              <Image
                src={album.cover}
                alt={album.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/30 to-transparent" />

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
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-night-950">
                  →
                </span>
              </div>
            </motion.button>
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
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-night-950/90 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 24, stiffness: 240 }}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10"
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
                  className="rounded-full border border-white/15 bg-white/5 p-2 text-white hover:bg-white/10"
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
