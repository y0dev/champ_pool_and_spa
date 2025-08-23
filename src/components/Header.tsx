'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BUSINESS_INFO, NAV_LINKS } from '@/utils/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Champion Pool & Spa Logo" 
                className="w-16 h-16 object-contain"
                style={{ imageRendering: 'auto' }}
              />
              <span className="text-2xl font-bold text-gray-900">{BUSINESS_INFO.name}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              link.name === "Home" ? (
                <a 
                  key={link.name}
                  href="#home" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              ) : (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {NAV_LINKS.map((link) => (
                link.name === "Home" ? (
                  <a 
                    key={link.name}
                    href="#home" 
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </a>
                ) : (
                  <a 
                    key={link.name}
                    href={link.href} 
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
