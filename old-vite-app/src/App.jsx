import React, { useState, useEffect, useRef } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';

const getPageFromHash = (hash) => {
    switch (hash) {
        case '#services':
            return 'services';
        case '#products':
            return 'products';
        case '#contact':
            return 'contact';
        default:
            return 'home';
    }
}

function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash(window.location.hash));
  const initialScrollHandled = useRef(false);

  // Effect to handle hash changes manually (since we don't have react-router)
  useEffect(() => {
    const handleHashChange = () => {
        setCurrentPage(getPageFromHash(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check
    handleHashChange();

    return () => {
        window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Effect to handle scrolling on page change
  useEffect(() => {
    const hash = window.location.hash;
    if (!initialScrollHandled.current) {
      window.scrollTo(0, 0);
      initialScrollHandled.current = true;
      return;
    }
    // If no hash or generic page hash, scroll to top
    if (!hash || hash === '#home' || hash === '#services' || hash === '#products' || hash === '#contact') {
      window.scrollTo(0, 0);
    } else {
      // If it's a specific anchor (like #about), attempt to scroll to it
      // setTimeout allows the DOM to update if we just switched pages
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage />;
      case 'products':
        return <ProductsPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}

export default App;
