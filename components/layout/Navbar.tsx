"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Proceso", href: "#proceso" },
  { name: "Galería", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-night-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-max section-padding flex items-center justify-between py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/40 blur-md transition group-hover:bg-cyan-400/60" />
            <Image
              src="/logo.png"
              alt="Global Drone"
              width={42}
              height={42}
              className="relative"
            />
          </div>
          <div className="leading-none">
            <span className="block font-display text-lg font-bold tracking-wide text-white">
              GLOBAL<span className="text-cyan-400">DRONE</span>
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
              Soluciones Aéreas
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
            AOC Nº 1819
          </span>
          <a href="#contacto" className="btn-primary text-sm">
            Cotizar
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-200 lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-night-950/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="absolute inset-y-0 right-0 w-full max-w-xs border-l border-white/10 bg-night-900 px-6 py-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold text-white">
                  GLOBAL<span className="text-cyan-400">DRONE</span>
                </span>
                <button
                  type="button"
                  className="rounded-md p-2 text-slate-200"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Cerrar menú"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-8 flex flex-col gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-cyan-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contacto"
                  className="btn-primary mt-4 justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solicitar Cotización
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
