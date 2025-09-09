"use client";

import { motion } from "framer-motion";
import {
  CameraIcon,
  BuildingOffice2Icon,
  TruckIcon,
  MapIcon,
  ShieldCheckIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: TruckIcon,
    title: "Monitoreo de Obras Mineras",
    description:
      "Seguimiento detallado del progreso de obras mineras con grabaciones aéreas de alta resolución y análisis de avance.",
    features: ["Grabación 4K", "Análisis de progreso", "Reportes detallados"],
  },
  {
    icon: BeakerIcon,
    title: "Fumigación Agrícola",
    description:
      "Servicios de fumigación de precisión para cultivos, optimizando el uso de productos químicos y mejorando la eficiencia.",
    features: [
      "Fumigación precisa",
      "Mapeo de cultivos",
      "Optimización de recursos",
    ],
  },
  {
    icon: BuildingOffice2Icon,
    title: "Inspección de Construcciones",
    description:
      "Inspecciones detalladas de estructuras, edificios y obras civiles para control de calidad y seguridad.",
    features: [
      "Inspección térmica",
      "Detección de fallas",
      "Documentación completa",
    ],
  },
  {
    icon: CameraIcon,
    title: "Grabación Aérea Profesional",
    description:
      "Producción audiovisual aérea para eventos, publicidad, documentales y proyectos cinematográficos.",
    features: ["Video 4K/8K", "Estabilización gimbal", "Edición profesional"],
  },
  {
    icon: MapIcon,
    title: "Mapeo y Topografía",
    description:
      "Levantamientos topográficos precisos, creación de mapas digitales y modelos 3D del terreno.",
    features: ["Mapas de alta precisión", "Modelos 3D", "Análisis geoespacial"],
  },
  {
    icon: ShieldCheckIcon,
    title: "Monitoreo de Seguridad",
    description:
      "Vigilancia aérea para seguridad industrial, monitoreo de perímetros y control de accesos.",
    features: [
      "Vigilancia 24/7",
      "Detección de intrusos",
      "Alertas en tiempo real",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios especializados con drones
            para diferentes industrias
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-drone-blue/10 p-3 rounded-lg">
                  <service.icon className="h-8 w-8 text-drone-blue" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <div className="w-2 h-2 bg-drone-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
