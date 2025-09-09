"use client";

import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"
    >
      {/* Background logo */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full flex items-center justify-center"
        >
          <Image
            src="/logo.png"
            alt=""
            width={1200}
            height={1200}
            className="min-w-[800px] min-h-[800px] w-[100vw] h-[100vh] max-w-none object-contain scale-150"
            priority
          />
        </motion.div>
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/25 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container-max section-padding text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            <span className="text-white drop-shadow-lg">Global Drone SPA</span>
            <span className="block text-yellow-400 drop-shadow-lg">
              Certificados DGAC AOC 1819
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 drop-shadow-lg">
            Empresa certificada por la Dirección General de Aeronáutica Civil.
            Especialistas en servicios aéreos profesionales con drones para
            minería, agricultura, construcción e inspecciones industriales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#servicios"
              className="btn-primary text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Servicios
            </motion.a>
            <motion.a
              href="#contacto"
              className="btn-secondary text-lg border-white text-white hover:bg-white hover:text-blue-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDownIcon className="h-8 w-8 text-white drop-shadow-lg" />
      </motion.div>
    </section>
  );
}
