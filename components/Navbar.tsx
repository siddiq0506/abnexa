"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white ${scrolled ? 'shadow-md py-2' : 'py-3'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="flex items-center transition-transform hover:scale-105">
              <div className="relative w-56 h-14 sm:w-72 sm:h-20">
                <Image
                  src="/logo.png"
                  alt="Abnexa Technologies Logo"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'left' }}
                  priority
                  className="scale-[0.75] origin-left"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 space-x-8 items-center justify-end">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-semibold transition-colors relative group text-lg ${isActive ? 'text-blue-600' : 'text-black hover:text-blue-600'
                    }`}
                >
                  {link.name}
                  {/* Active state indicator */}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              );
            })}
            <Link
              href="/book-demo"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95 transition-all flex items-center justify-center"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-blue-600 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Expansion */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out absolute w-full bg-white shadow-xl border-t border-gray-100 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-lg font-bold transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-black hover:bg-slate-50 hover:text-blue-600'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 pb-2">
            <Link
              href="/book-demo"
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-md active:scale-[0.98] flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
