import React from 'react';
import CTAButton from './CTAButton';
import logo from '../assets/LOGO-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 pt-10 pb-6 bg-primary/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-gray-200">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <img src={logo} alt="Abnexa Technologies" className="h-48 mb-6 mx-auto md:mx-0 object-contain" />
            <h3 className="text-3xl font-bold text-gray-900">Ready to scale?</h3>
            <p className="text-gray-600 mt-2">Let's discuss your vision for powerful, high performance software.</p>
            <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-gray-500 text-sm font-medium">
                <a href="tel:+918884944408" className="hover:text-accent transition flex items-center justify-center md:justify-start">
                    <span className="mr-2">📞</span> +91 8884944408
                </a>
                <a href="mailto:abnexatechnologies@gmail.com" className="hover:text-accent transition flex items-center justify-center md:justify-start">
                    <span className="mr-2">✉️</span> abnexatechnologies@gmail.com
                </a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#contact">
                <CTAButton primary={true} className="text-base">
                    Book a Free Consultation
                </CTAButton>
            </a>
            <a href="#services">
                <CTAButton primary={false} className="text-base">
                    Explore Solutions
                </CTAButton>
            </a>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between items-center text-sm text-gray-500 flex-wrap">
            <p>&copy; {new Date().getFullYear()} Abnexa Technologies. All rights reserved.</p>
            <div className="flex space-x-4 mt-3 sm:mt-0">
                <a href="#" className="hover:text-accent">Privacy Policy</a>
                <a href="#" className="hover:text-accent">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;