import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const basePath = import.meta.env.BASE_URL;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src={`${basePath}palyginam-high-resolution-logo-transparent (1).png`}
              alt="Palyginam"
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-500" />
                <span className="text-sm">info@palyginam.lt</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Paslaugos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`${basePath}automobiliu-lizingas`} className="hover:text-green-500 transition-colors">
                  Automobilių lizingas
                </a>
              </li>
              <li>
                <a href={`${basePath}vartojimo-paskolos`} className="hover:text-green-500 transition-colors">
                  Vartojimo paskolos
                </a>
              </li>
              <li>
                <a href={`${basePath}paskolu-refinansavimas`} className="hover:text-green-500 transition-colors">
                  Paskolų refinansavimas
                </a>
              </li>
              <li>
                <a href={`${basePath}busto-remontas`} className="hover:text-green-500 transition-colors">
                  Būsto remontas
                </a>
              </li>
              <li>
                <a href={`${basePath}gyvybes-draudimas`} className="hover:text-green-500 transition-colors">
                  Gyvybės draudimas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Informacija</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`${basePath}privatumo-politika`} className="hover:text-green-500 transition-colors">
                  Privatumo politika
                </a>
              </li>
              <li>
                <a href={`${basePath}slapuku-politika`} className="hover:text-green-500 transition-colors">
                  Slapukų politika
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Palyginam. Visos teisės saugomos.</p>
        </div>
      </div>
    </footer>
  );
}
