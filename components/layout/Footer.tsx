import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-drone-dark text-white">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Global Drone"
                width={40}
                height={40}
                className="mr-3"
              />
              <h3 className="text-2xl font-bold text-drone-blue">
                Global Drone SPA
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Empresa certificada por la DGAC bajo AOC 1819. Servicios
              profesionales con drones para minería, agricultura, construcción y
              más. Tecnología de vanguardia al servicio de tu proyecto.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Monitoreo de Obras Mineras</li>
              <li>Fumigación Agrícola</li>
              <li>Inspección de Construcciones</li>
              <li>Grabación Aérea Profesional</li>
              <li>Mapeo y Topografía</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-3" />
                <span>info@globaldrone.com</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-3" />
                <span>Ciudad, País</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Global Drone SPA. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">Certificación DGAC AOC 1819 | Chile</p>
        </div>
      </div>
    </footer>
  );
}
