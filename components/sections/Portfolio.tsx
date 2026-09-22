"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  XMarkIcon,
  PhotoIcon,
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Reveal from "@/components/ui/Reveal";

const BASE = "https://globaldrone.cl/Fotos";

type Album = {
  id: string;
  title: string;
  photos: string[];
};

const albums: Album[] = [
  {
    id: "preparacion",
    title: "Preparación de Vuelos",
    // 1.jpg ... 14.jpg
    photos: Array.from({ length: 14 }, (_, i) => `${BASE}/${i + 1}.jpg`),
  },
  {
    id: "tomas",
    title: "Tomas Aéreas",
    // D1.JPG ... D14.JPG
    photos: Array.from({ length: 14 }, (_, i) => `${BASE}/D${i + 1}.JPG`),
  },
];

export default function Portfolio() {
  const [openAlbum, setOpenAlbum] = useState<Album | null>(null);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpenAlbum(null), []);
  const next = useCallback(() => {
    if (!openAlbum) return;
    setIndex((i) => (i + 1) % openAlbum.photos.length);
  }, [openAlbum]);
  const prev = useCallback(() => {
    if (!openAlbum) return;
    setIndex((i) => (i - 1 + openAlbum.photos.length) % openAlbum.photos.length);
  }, [openAlbum]);

  const open = (album: Album) => {
    setIndex(0);
    setOpenAlbum(album);
  };

  // Keyboard navigation + scroll lock
  useEffect(() => {
    if (!openAlbum) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openAlbum, close, next, prev]);

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
          {albums.map((album, i) => (
            <Reveal key={album.id} delay={i * 0.12}>
              <motion.button
                onClick={() => open(album)}
                whileHover="hover"
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 text-left"
              >
                <motion.img
                  src={album.photos[0]}
                  alt={album.title}
                  loading="lazy"
                  variants={{ hover: { scale: 1.08 } }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
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
                      {album.photos.length} Fotografías · Ver álbum
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

      {/* Lightbox with full album navigation */}
      <AnimatePresence>
        {openAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex flex-col p-4 sm:p-6"
            onClick={close}
          >
            <div className="absolute inset-0 bg-night-950/95 backdrop-blur-md" />

            {/* Header */}
            <div
              className="relative z-10 flex items-center justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  {openAlbum.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {index + 1} / {openAlbum.photos.length}
                </p>
              </div>
              <button
                onClick={close}
                className="rounded-full border border-white/15 bg-white/5 p-2 text-white transition-colors hover:bg-white/10"
                aria-label="Cerrar"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Main image */}
            <div
              className="relative z-10 flex flex-1 items-center justify-center py-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-0 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-night-900/70 text-white backdrop-blur-md transition-colors hover:bg-cyan-400 hover:text-night-950 sm:left-2"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={openAlbum.photos[index]}
                  src={openAlbum.photos[index]}
                  alt={`${openAlbum.title} ${index + 1}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="max-h-[70vh] max-w-full rounded-xl object-contain shadow-card"
                />
              </AnimatePresence>

              <button
                onClick={next}
                aria-label="Siguiente"
                className="absolute right-0 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-night-900/70 text-white backdrop-blur-md transition-colors hover:bg-cyan-400 hover:text-night-950 sm:right-2"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Thumbnails */}
            <div
              className="relative z-10 flex justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex max-w-full gap-2 overflow-x-auto pb-2">
                {openAlbum.photos.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setIndex(i)}
                    className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      i === index
                        ? "border-cyan-400 opacity-100"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                    aria-label={`Foto ${i + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
