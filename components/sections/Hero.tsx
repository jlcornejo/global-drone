"use client";

import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Servicios Profesionales
            <span className="block text-yellow-400">con Drones</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Especialistas en grabación aérea, monitoreo de obras mineras,
            fumigación agrícola y servicios de inspección con tecnología de
            vanguardia.
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDownIcon className="h-8 w-8 text-white" />
      </motion.div>
    </section>
  );
}
