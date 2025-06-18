import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Accessibility } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Accessibility className="h-8 w-8 text-primary-600 dark:text-primary-400" aria-hidden="true" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Windrichtung</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Professionelle Unterstützung für Menschen mit Behinderungen in Kindergarten und Schule. 
              Wir setzen uns für Inklusion und individuelle Förderung ein.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                <span>+49 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                <span>info@windrichtung.de</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                <span>Musterstraße 123, 12345 Berlin</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Schnellzugriff
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Unsere Services
                </Link>
              </li>
              <li>
                <Link
                  to="/application"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Antragsverfahren
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/un-convention"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:underline"
                >
                  UN-Konvention
                </Link>
              </li>
              <li>
                <Link
                  to="/laws"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Gesetze & Infos
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Datenschutz
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Impressum
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © 2024 Windrichtung. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;