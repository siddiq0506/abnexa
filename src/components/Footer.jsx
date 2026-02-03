import React from 'react';
import CTAButton from './CTAButton';
import logo from '../assets/LOGO-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 pt-10 pb-6 bg-primary/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-gray-200">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img 
              src={logo} 
              alt="Abnexa Technologies" 
              className="h-24 md:h-40 mb-6 mx-auto md:mx-0 object-contain transition-all duration-300" 
            />
            <p className="text-gray-600 mb-6 max-w-sm mx-auto md:mx-0">
              Transforming ideas into digital reality with premium software solutions.
            </p>
            <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-gray-500 text-sm font-medium">
                <a href="tel:+918884944408" className="hover:text-accent transition flex items-center justify-center md:justify-start">
                    <span className="mr-2">📞</span> +91 8884944408
                </a>
                <a href="mailto:abnexatechnologies@gmail.com" className="hover:text-accent transition flex items-center justify-center md:justify-start">
                    <span className="mr-2">✉️</span> abnexatechnologies@gmail.com
                </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 md:mt-0 w-full md:w-auto">
            <a href="#contact" className="w-full sm:w-auto">
                <CTAButton primary={true} className="text-base w-full sm:w-auto justify-center">
                    Book a Free Consultation
                </CTAButton>
            </a>
            <a href="#services" className="w-full sm:w-auto">
                <CTAButton primary={false} className="text-base w-full sm:w-auto justify-center">
                    Explore Solutions
                </CTAButton>
            </a>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col-reverse sm:flex-row justify-between items-center text-sm text-gray-500">
            <p className="mt-4 sm:mt-0 text-center sm:text-left">&copy; {new Date().getFullYear()} Abnexa Technologies. All rights reserved.</p>
            <div className="flex space-x-6">
                <a href="#" className="hover:text-accent transition">Privacy Policy</a>
                <a href="#" className="hover:text-accent transition">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;