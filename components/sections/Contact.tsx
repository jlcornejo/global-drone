"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí iría la lógica para enviar el formulario
    toast.success("Mensaje enviado correctamente. Te contactaremos pronto.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo podemos ayudarte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-drone-blue/10 p-3 rounded-lg mr-4">
                  <PhoneIcon className="h-6 w-6 text-drone-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Teléfono</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-drone-blue/10 p-3 rounded-lg mr-4">
                  <EnvelopeIcon className="h-6 w-6 text-drone-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@globaldrone.com</p>
                  <p className="text-gray-600">ventas@globaldrone.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-drone-blue/10 p-3 rounded-lg mr-4">
                  <MapPinIcon className="h-6 w-6 text-drone-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ubicación</h4>
                  <p className="text-gray-600">Calle Principal 123</p>
                  <p className="text-gray-600">Ciudad, País 12345</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">
                Horarios de Atención
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 2:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-drone-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-drone-blue focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-drone-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Servicio de Interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-drone-blue focus:border-transparent"
                  >
                    <option value="">Seleccionar servicio</option>
                    <option value="mineria">Monitoreo de Obras Mineras</option>
                    <option value="agricultura">Fumigación Agrícola</option>
                    <option value="construccion">
                      Inspección de Construcciones
                    </option>
                    <option value="grabacion">Grabación Aérea</option>
                    <option value="mapeo">Mapeo y Topografía</option>
                    <option value="seguridad">Monitoreo de Seguridad</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-drone-blue focus:border-transparent"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary text-lg">
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
