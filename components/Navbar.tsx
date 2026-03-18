"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update background and padding on scroll
      setScrolled(currentScrollY > 20);

      // Hide navbar on scroll down, show on scroll up or at the very top
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 transition-all duration-500 ${
        scrolled ? 'shadow-md shadow-black/5 py-2' : 'py-4'
      } ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <div className="relative w-48 h-12 sm:w-56 sm:h-14">
                <Image
                  src="/logo.png"
                  alt="Abnexa Technologies"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'left' }}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[15px] font-medium tracking-wide group ${
                    isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 rounded-full transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[15px] font-semibold shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-slate-100 px-4 py-6 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700 hover:bg-slate-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              href="/contact"
              className="flex items-center justify-center w-full px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base transition-all active:scale-95 shadow-md shadow-indigo-500/20"
              onClick={() => setIsOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
