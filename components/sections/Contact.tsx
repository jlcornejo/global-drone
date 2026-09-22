"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

const contactInfo = [
  {
    icon: MapPinIcon,
    label: "Ubicación",
    value: "Argomedo 321 departamento 1106, Santiago, Chile",
  },
  {
    icon: PhoneIcon,
    label: "Teléfono",
    value: "+56 9 7951 1620",
    href: "tel:+56979511620",
  },
  {
    icon: UserCircleIcon,
    label: "Gerente de Operaciones",
    value: "victor.rodriguez@globaldrone.cl",
    href: "mailto:victor.rodriguez@globaldrone.cl",
  },
];

const subjects = [
  "Cotización de Servicios",
  "Inspección Técnica",
  "Agricultura",
  "Otro",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado. Te contactaremos en menos de 24 horas hábiles.");
    setFormData({ name: "", email: "", subject: subjects[0], message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-400/60 focus:bg-white/[0.07]";

  return (
    <section id="contacto" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-[0.12]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container-max section-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow mb-5">Información de Contacto</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Elevemos tu <span className="heading-gradient">próximo proyecto</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Estamos listos para elevar tu próximo proyecto. Contáctanos para
            asesoría técnica.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {contactInfo.map((info) => {
              const content = (
                <div className="glass-card flex items-start gap-4 p-5 transition-colors hover:border-cyan-400/30">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <info.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                      {info.label}
                    </h4>
                    <p className="mt-1 text-white">{info.value}</p>
                  </div>
                </div>
              );
              return info.href ? (
                <a key={info.label} href={info.href}>
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}

            <div className="glass-card p-6">
              <h4 className="mb-4 flex items-center gap-2 font-semibold text-white">
                <EnvelopeIcon className="h-5 w-5 text-cyan-400" />
                Horario de Atención
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span className="text-slate-200">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado</span>
                  <span className="text-slate-200">10:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo</span>
                  <span className="text-slate-500">Cerrado</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-2xl font-bold text-white">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm text-slate-300">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {subjects.map((s) => (
                    <option key={s} value={s} className="bg-night-900">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center text-base">
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
