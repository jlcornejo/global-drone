"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const stats = [
  { number: "500+", label: "Proyectos Completados" },
  { number: "50+", label: "Clientes Satisfechos" },
  { number: "5+", label: "Años de Experiencia" },
  { number: "24/7", label: "Soporte Técnico" },
];

const features = [
  "Pilotos certificados y experimentados",
  "Equipos de última generación",
  "Cobertura nacional",
  "Seguros de responsabilidad civil",
  "Reportes detallados y profesionales",
  "Cumplimiento de normativas aéreas",
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre Global Drone
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Somos una empresa especializada en servicios profesionales con
              drones, comprometida con la excelencia y la innovación
              tecnológica. Nuestro equipo de pilotos certificados y técnicos
              especializados trabaja con los equipos más avanzados del mercado.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Desde el monitoreo de obras mineras hasta la fumigación de
              precisión en agricultura, ofrecemos soluciones integrales que
              optimizan procesos y reducen costos operativos.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-drone-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              ¿Por qué elegirnos?
            </h3>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#contacto" className="btn-primary">
                Solicitar Cotización
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
