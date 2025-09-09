import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-drone-dark text-white">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-drone-blue mb-4">
              Global Drone
            </h3>
            <p className="text-gray-300 mb-4">
              Servicios profesionales con drones para minería, agricultura,
              construcción y más. Tecnología de vanguardia al servicio de tu
              proyecto.
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
          <p>&copy; 2024 Global Drone. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
