'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Shield } from 'lucide-react';

const isolatievormenItems = [
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white text-stone-900 shadow-md'
          : 'bg-gradient-to-b from-stone-950/90 via-stone-900/70 to-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={isScrolled ? 'text-emerald-600' : 'text-emerald-400'}>
              <path d="M4 16v10h24V16M16 4l12 12M8 26v-8h16v8" />
              <path d="M10 14c2-1 4-1 6 0" strokeWidth="1" opacity="0.6" />
              <path d="M16 14c2-1 4-1 6 0" strokeWidth="1" opacity="0.6" />
            </svg>
            <span className="hidden sm:inline text-lg font-bold tracking-tight">
              isolatiekenner<span className={isScrolled ? 'text-emerald-600' : 'text-emerald-400'}>.nl</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Isolatievormen Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="flex items-center gap-1.5 text-sm font-medium hover:text-emerald-400 transition-colors"
              >
                Isolatievormen
                <ChevronDown size={15} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute left-0 top-full pt-3 z-50"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-stone-200 overflow-hidden min-w-[220px] py-2">
                    {isolatievormenItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/subsidies" className="text-sm font-medium hover:text-emerald-400 transition-colors">
              Subsidies
            </Link>
            <Link href="/#calculator" className="text-sm font-medium hover:text-emerald-400 transition-colors">
              Calculator
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Trust Badge */}
            <div className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
              isScrolled
                ? 'bg-emerald-50 text-emerald-700'
                : 'bg-white/10 backdrop-blur-sm text-emerald-300 border border-white/10'
            }`}>
              <Shield size={13} />
              <span>Onafhankelijk &amp; gratis</span>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {/* Isolatievormen accordion */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-stone-800 rounded-lg hover:bg-stone-50"
            >
              Isolatievormen
              <ChevronDown size={16} className={`transition-transform duration-200 text-stone-400 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="ml-4 pl-4 border-l-2 border-emerald-200 space-y-1">
                {isolatievormenItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => { setIsMobileMenuOpen(false); setIsDropdownOpen(false); }}
                    className="block px-3 py-2 text-sm text-stone-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/subsidies"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-sm font-medium text-stone-800 rounded-lg hover:bg-stone-50"
            >
              Subsidies
            </Link>
            <Link
              href="/#calculator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-sm font-medium text-stone-800 rounded-lg hover:bg-stone-50"
            >
              Calculator
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
