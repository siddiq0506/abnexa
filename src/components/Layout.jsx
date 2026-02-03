import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <Navbar />
      
      <main className="flex-grow w-full">
        {/* Main content container with focus on readability and modern spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
