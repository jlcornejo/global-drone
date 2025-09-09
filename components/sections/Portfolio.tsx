"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

// Placeholder data - será reemplazado por datos del admin
const portfolioItems = [
  {
    id: 1,
    title: "Monitoreo Mina El Dorado",
    category: "Minería",
    type: "video",
    thumbnail: "/api/placeholder/600/400",
    description:
      "Seguimiento mensual del avance de extracción en mina a cielo abierto",
  },
  {
    id: 2,
    title: "Fumigación Cultivo de Maíz",
    category: "Agricultura",
    type: "video",
    thumbnail: "/api/placeholder/600/400",
    description: "Aplicación de pesticidas en 200 hectáreas de cultivo",
  },
  {
    id: 3,
    title: "Inspección Torre de Comunicaciones",
    category: "Infraestructura",
    type: "image",
    thumbnail: "/api/placeholder/600/400",
    description: "Inspección detallada de estructura de 80 metros de altura",
  },
  {
    id: 4,
    title: "Video Promocional Resort",
    category: "Comercial",
    type: "video",
    thumbnail: "/api/placeholder/600/400",
    description: "Producción audiovisual para campaña publicitaria",
  },
  {
    id: 5,
    title: "Mapeo Topográfico",
    category: "Topografía",
    type: "image",
    thumbnail: "/api/placeholder/600/400",
    description: "Levantamiento topográfico de 500 hectáreas",
  },
  {
    id: 6,
    title: "Monitoreo Construcción",
    category: "Construcción",
    type: "video",
    thumbnail: "/api/placeholder/600/400",
    description: "Seguimiento semanal de avance de obra",
  },
];

const categories = [
  "Todos",
  "Minería",
  "Agricultura",
  "Infraestructura",
  "Comercial",
  "Topografía",
  "Construcción",
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredItems =
    activeCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portafolio" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Portafolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Algunos de nuestros proyectos más destacados en diferentes
            industrias
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-drone-blue text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Imagen/Video</span>
                </div>

                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayIcon className="h-12 w-12 text-white" />
                  </div>
                )}

                <div className="absolute top-4 left-4">
                  <span className="bg-drone-blue text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contacto" className="btn-primary">
            Ver Más Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
