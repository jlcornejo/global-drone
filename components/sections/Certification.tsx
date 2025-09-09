"use client";

import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  DocumentCheckIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const certifications = [
  {
    icon: ShieldCheckIcon,
    title: "DGAC AOC 1819",
    description:
      "Certificación oficial de la Dirección General de Aeronáutica Civil de Chile",
    status: "Vigente",
  },
  {
    icon: DocumentCheckIcon,
    title: "Normativas Aeronáuticas",
    description:
      "Cumplimiento total de regulaciones nacionales e internacionales",
    status: "Certificado",
  },
  {
    icon: AcademicCapIcon,
    title: "Pilotos Certificados",
    description: "Equipo de pilotos profesionales con licencias vigentes",
    status: "Activo",
  },
];

export default function Certification() {
  return (
    <section
      id="certificaciones"
      className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certificaciones y Cumplimiento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Operamos bajo las más altas normas de seguridad y calidad,
            certificados por las autoridades aeronáuticas competentes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <cert.icon className="h-8 w-8 text-green-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {cert.title}
              </h3>

              <p className="text-gray-600 mb-4">{cert.description}</p>

              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {cert.status}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Compromiso con la Excelencia
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Nuestra certificación DGAC AOC 1819 nos autoriza para realizar
              operaciones comerciales con aeronaves no tripuladas en todo el
              territorio chileno, garantizando el más alto nivel de seguridad y
              profesionalismo en cada servicio.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>✓ Seguros de responsabilidad civil</span>
              <span>✓ Mantenimiento preventivo certificado</span>
              <span>✓ Protocolos de seguridad estrictos</span>
              <span>✓ Capacitación continua del personal</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
