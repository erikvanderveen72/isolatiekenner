import Link from 'next/link';
import { Home, Lock, Shield, RefreshCw } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400 pt-12 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section - Logo and brand */}
        <div className="mb-12 pb-12 border-b border-stone-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8">
              <svg
                viewBox="0 0 32 32"
                className="w-full h-full text-emerald-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 16v10h24V16M16 4l12 12M8 26v-8h16v8" />
                <path d="M10 14c2-1 4-1 6 0" strokeWidth="1" opacity="0.6" />
                <path d="M16 14c2-1 4-1 6 0" strokeWidth="1" opacity="0.6" />
              </svg>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-bold text-white text-lg">isolatiekenner</span>
              <span className="text-emerald-400 font-medium text-sm">.nl</span>
            </div>
          </div>
          <p className="text-sm max-w-md text-stone-500">
            Onafhankelijke informatie over isolatie, energiebesparende maatregelen en subsidies voor het Nederlands huizenbezit.
          </p>
        </div>

        {/* Four columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Isolatievormen */}
          <div>
            <h3 className="text-white font-semibold mb-4">Isolatievormen</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/isolatievormen/dakisolatie"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Dakisolatie
                </Link>
              </li>
              <li>
                <Link
                  href="/isolatievormen/spouwmuurisolatie"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Spouwmuurisolatie
                </Link>
              </li>
              <li>
                <Link
                  href="/isolatievormen/vloerisolatie"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Vloerisolatie
                </Link>
              </li>
              <li>
                <Link
                  href="/isolatievormen/hr-glas"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  HR++ Glas
                </Link>
              </li>
              <li>
                <Link
                  href="/isolatievormen/kruipruimte"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Kruipruimteisolatie
                </Link>
              </li>
              <li>
                <Link
                  href="/isolatievormen/gevelisolatie"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Gevelisolatie
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tools</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#calculator" className="hover:text-emerald-400 transition-colors text-sm">
                  Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/subsidies"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Subsidie-checker
                </Link>
              </li>
              <li>
                <Link
                  href="/energielabel"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Energielabel
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Over Ons */}
          <div>
            <h3 className="text-white font-semibold mb-4">Over Ons</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/over" className="hover:text-emerald-400 transition-colors text-sm">
                  Over Isolatiekenner
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Bronnen */}
          <div>
            <h3 className="text-white font-semibold mb-4">Bronnen</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.rvo.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  RVO.nl
                </a>
              </li>
              <li>
                <a
                  href="https://www.rijksoverheid.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Rijksoverheid
                </a>
              </li>
              <li>
                <a
                  href="https://www.milieucentraal.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Milieu Centraal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 pb-12 border-b border-stone-800">
          <div className="flex items-center gap-3 px-4 py-3 bg-stone-900 rounded-lg">
            <Lock size={18} className="text-emerald-500 flex-shrink-0" />
            <span className="text-sm">SSL Beveiligd</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 bg-stone-900 rounded-lg">
            <Shield size={18} className="text-emerald-500 flex-shrink-0" />
            <span className="text-sm">AVG/GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 bg-stone-900 rounded-lg">
            <RefreshCw size={18} className="text-emerald-500 flex-shrink-0" />
            <span className="text-sm">Dagelijks Bijgewerkt</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center text-xs text-stone-500 space-y-4">
          <p>© {currentYear} Isolatiekenner.nl - Alle rechten voorbehouden</p>
          <p>
            Dit platform biedt informatieve inhoud over isolatie en energiebesparingsmaatregelen.
            Voor specifieke adviezen aangaande uw woning, raadpleeg altijd een professionele energieadviseur of installateur.
          </p>
        </div>
      </div>
    </footer>
  );
}
