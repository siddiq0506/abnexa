import React from 'react';

const CTAButton = ({ children, primary = true, className = '', onClick }) => {
  const baseClasses = 'font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out shadow-lg transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 ';
  
  const primaryClasses = `bg-accent text-white hover:bg-indigo-500 focus:ring-indigo-500/50 dark:focus:ring-indigo-400/50`;
  const secondaryClasses = `bg-transparent border-2 border-accent text-accent hover:bg-accent/10 dark:hover:bg-accent/20 focus:ring-accent/50`;

  const classes = primary ? primaryClasses : secondaryClasses;

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${classes} ${className}`}
    >
      {children}
    </button>
  );
};

export default CTAButton;