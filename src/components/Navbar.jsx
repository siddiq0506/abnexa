import React, { useState } from 'react';
import logo from '../assets/LOGO-removebg-preview.png';

// Navigation aligned with ConstructOS-first positioning
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Solutions', href: '#services' },      // maps to ServicesPage
  { name: 'ConstructOS', href: '#products' },    // maps to ProductsPage
  { name: 'About Us', href: '#about' },          // home anchor
  { name: 'Contact', href: '#contact' },         // ContactPage
  { name: 'Book Demo', href: '#contact' },     // go directly to intake form
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Glassmorphism styling applied to the navbar container
  const glassClasses = "glass sticky top-0 z-50 shadow-sm border-b border-gray-200";
  const bgClasses = "bg-white/90 backdrop-blur-xl"; // Increased opacity for better readability

  return (
    <>
    <header className={`${bgClasses} ${glassClasses} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-0 md:h-24"> {/* Increased height, removed fixed h-20 constraint */}
          
          {/* Logo/Brand */}
          <a href="#home" className="flex items-center animate-fade-in-up z-50 relative">
            <img 
              src={logo} 
              alt="Abnexa Technologies" 
              className="h-24 sm:h-32 md:h-48 w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-base lg:text-lg font-medium hover:text-accent transition duration-300 ease-in-out 
                            ${item.name === 'Home' ? 'text-gray-900' : 'text-gray-600'}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side: CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* CTA Button - Hidden on very small screens if needed, or kept */}
            <a href="#contact" className="hidden sm:inline-block">
              <button className="text-sm font-medium px-5 py-2.5 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition duration-300 shadow-sm">
                Book Demo
              </button>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-accent focus:outline-none p-2 rounded-md transition-colors z-50 relative"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-28 pb-10 items-center space-y-6 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close button inside overlay */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-gray-700 hover:text-accent focus:outline-none p-2"
          aria-label="Close menu"
        >
          <div className="w-8 h-8 flex flex-col justify-center items-center">
            <span className="block w-8 h-0.5 bg-current rotate-45 translate-y-[1px]"></span>
            <span className="block w-8 h-0.5 bg-current -rotate-45 -translate-y-[1px]"></span>
          </div>
        </button>

        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-semibold text-gray-800 hover:text-accent transition duration-300 py-2 px-4 rounded-lg hover:bg-gray-50"
          >
            {item.name}
          </a>
        ))}
        <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4">
          <button className="text-lg font-medium px-8 py-3 rounded-full bg-accent text-white shadow-lg hover:bg-accent/90 transition duration-300">
            Book Demo
          </button>
        </a>
      </div>
    </>
  );
};

export default Navbar;
