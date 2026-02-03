import React from 'react';
import logo from '../assets/LOGO-removebg-preview.png';

// Placeholder navigation structure - in a real app, we'd use react-router
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' }, // Added "About" link
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  
  // Glassmorphism styling applied to the navbar container
  const glassClasses = "glass sticky top-0 z-50 shadow-sm border-b border-gray-200";
  const bgClasses = "bg-white/80 backdrop-blur-lg"; // Ensure backdrop-blur is applied

  return (
    <header className={`${bgClasses} ${glassClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <a href="#home" className="flex items-center animate-fade-in-up">
            <img 
              src={logo} 
              alt="Abnexa Technologies" 
              className="h-40 w-auto object-contain" 
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-lg font-medium hover:text-accent transition duration-300 ease-in-out 
                            ${item.name === 'Home' ? 'text-gray-900' : 'text-gray-600'}`} // Highlight Home initially
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side: CTA & Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Secondary CTA placeholder on Nav */}
            <a href="#contact" className="hidden sm:inline-block">
              <button className="text-sm font-medium px-4 py-2 rounded-full border border-accent text-accent hover:bg-accent/10 transition duration-300">
                View Services
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
