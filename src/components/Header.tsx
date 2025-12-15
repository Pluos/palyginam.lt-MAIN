import { Mail, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  activePage?: string;
}

export default function Header({ activePage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Automobilių lizingas', href: '/automobiliu-lizingas' },
    { label: 'Vartojimo paskolos', href: '/vartojimo-paskolos' },
    { label: 'Paskolų refinansavimas', href: '/paskolu-refinansavimas' },
    { label: 'Būsto remontas', href: '/busto-remontas' },
    { label: 'Gyvybės draudimas', href: '/gyvybes-draudimas' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="bg-gray-900 text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end space-x-6 text-sm">
            <a
              href="mailto:info@palyginam.lt"
              className="flex items-center space-x-2 hover:text-green-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@palyginam.lt</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img
                  src="/palyginam-high-resolution-logo-transparent (1).png"
                  alt="Palyginam"
                  className="h-8 lg:h-10 w-auto"
                />
              </a>
            </div>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    activePage === item.href
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>


            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activePage === item.href
                    ? 'bg-green-50 text-green-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="mailto:info@palyginam.lt"
                className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700"
              >
                <Mail className="w-4 h-4 text-green-600" />
                <span>info@palyginam.lt</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
