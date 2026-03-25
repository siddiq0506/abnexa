"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-slate-950/90 backdrop-blur-2xl border-b border-white/5 py-4 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Always Inverted for Dark Background */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <span className="font-heading text-4xl font-black italic tracking-tighter text-white hover:text-indigo-400 transition-colors duration-300 select-none">
                ABN<span className="text-indigo-500 group-hover:text-white transition-colors duration-300">EXA</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav - Always White for High Contrast */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all ${
                    isActive ? 'text-white underline underline-offset-8 decoration-indigo-500' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-slate-950 hover:bg-indigo-50 text-[11px] font-black uppercase tracking-[0.2em] transition-all shadow-2xl rounded-none ml-4"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-slate-950 px-6 py-12 space-y-10 flex flex-col items-center border-t border-white/5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-2xl font-black uppercase tracking-widest transition-colors ${
                  isActive ? 'text-white' : 'text-slate-500 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="w-full px-10 py-5 bg-white text-slate-950 font-black uppercase tracking-widest text-center shadow-2xl"
            onClick={() => setIsOpen(false)}
          >
            Start Project
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
