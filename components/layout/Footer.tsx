import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const quickLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
];

const schedule = [
  { day: "Lunes - Viernes", hours: "09:00 - 18:00" },
  { day: "Sábado", hours: "10:00 - 14:00" },
  { day: "Domingo", hours: "Cerrado" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-night-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="container-max section-padding py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Global Drone" width={44} height={44} />
              <div className="leading-none">
                <span className="block font-display text-lg font-bold text-white">
                  GLOBAL<span className="text-cyan-400">DRONE</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                  AOC Nº 1819
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              Entregamos soluciones aéreas integrales con tecnología de
              vanguardia. Nuestro compromiso es la precisión, la seguridad y la
              calidad de la información.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 text-cyan-400" />
                Argomedo 321 departamento 1106, Santiago, Chile
              </div>
              <a
                href="tel:+56979511620"
                className="flex items-center gap-3 transition-colors hover:text-cyan-300"
              >
                <PhoneIcon className="h-5 w-5 text-cyan-400" />
                +56 9 7951 1620
              </a>
              <a
                href="mailto:victor.rodriguez@globaldrone.cl"
                className="flex items-center gap-3 transition-colors hover:text-cyan-300"
              >
                <EnvelopeIcon className="h-5 w-5 text-cyan-400" />
                victor.rodriguez@globaldrone.cl
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Enlaces Rápidos
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-cyan-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Horario de Atención
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {schedule.map((s) => (
                <li key={s.day} className="flex justify-between gap-4">
                  <span>{s.day}</span>
                  <span className="text-slate-300">{s.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>&copy; 2024 Global Drone Chile. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Certificación DGAC AOC Nº 1819
          </p>
        </div>
      </div>
    </footer>
  );
}
