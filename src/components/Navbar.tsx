'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Home, Shield } from 'lucide-react';

interface NavDropdownItem {
  label: string;
  href: string;
}

const isolatievormenItems: NavDropdownItem[] = [
  { label: 'Dakisolatie', href: '/dakisolatie' },
  { label: 'Spouwmuurisolatie', href: '/spouwmuurisolatie' },
  { label: 'Vloerisolatie', href: '/vloerisolatie' },
  { label: 'HR++ Glas', href: '/hr-glas' },
  { label: 'Kruipruimteisolatie', href: '/kruipruimteisolatie' },
  { label: 'Gevelisolatie', href: '/gevelisolatie' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logo component
  const Logo = () => (
    <Link href="/" className="flex items-center gap-2 flex-shrink-0">
      <div className="relative w-8 h-8">
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full text-emerald-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* House outline */}
          <path d="M4 16v10h24V16M16 4l12 12M8 26v-8h16v8" />
          {/* Insulation waves */}
          <path d="M10 14c2-1 4-1 6 0" strokeWidth="1" opacity="0.6" />
          <path d="M16 14c2-1 4-1 6 0" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>
      <div className="hidden sm:flex items-baseline gap-1">
        <span className="font-bold text-lg">isolatiekenner</span>
        <span className="text-emerald-400 font-medium text-sm">.nl</span>
      </div>
    </Link>
  );

  // Trust badge component
  const TrustBadge = () => (
    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full text-xs font-medium text-emerald-700">
      <Shield size={14} />
      <span>Onafhankelijk & gratis</span>
    </div>
  );

  // Desktop navigation
  const DesktopNav = () => (
    <nav className="hidden lg:flex items-center gap-8">
      <div className="relative group">
        <button className="flex items-center gap-2 text-sm font-medium hover:text-emerald-500 transition-colors">
          Isolatievormen
          <ChevronDown size={16} />
        </button>
        <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
          <div className="bg-white rounded-lg shadow-lg border border-stone-200 overflow-hidden min-w-max">
            {isolatievormenItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-sm hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Link
        href="/subsidies"
        className="text-sm font-medium hover:text-emerald-500 transition-colors"
      >
        Subsidies
      </Link>
      <Link
        href="/#calculator"
        className="text-sm font-medium hover:text-emerald-500 transition-colors"
      >
        Calculators
      </Link>
    </nav>
  );

  // Mobile menu
  const MobileMenu = () =>
    isMobileMenuOpen ? (
      <div className="absolute top-full left-0 right-0 bg-white border-b border-stone-200 lg:hidden">
        <div className="flex flex-col p-4 gap-4">
          <div>
            <button className="w-full flex items-center justify-between text-sm font-medium mb-2">
              Isolatievormen
              <ChevronDown
                size={16}
                className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col gap-2 ml-4 border-l border-stone-200 pl-4">
                {isolatievormenItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-stone-600 hover:text-emerald-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/subsidies"
            className="text-sm font-medium text-stone-700 hover:text-emerald-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Subsidies
          </Link>
          <Link
            href="/#calculator"
            className="text-sm font-medium text-stone-700 hover:text-emerald-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Calculators
          </Link>
        </div>
      </div>
    ) : null;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white text-stone-900 shadow-lg'
          : 'bg-gradient-to-b from-stone-950 via-stone-900 to-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-4">
            <TrustBadge />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
