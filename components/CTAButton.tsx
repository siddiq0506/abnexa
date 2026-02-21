import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
  children?: React.ReactNode;
  text?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  text,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  // Base classes with premium feel: smooth transitions, soft shadows, responsive sizing
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out transform active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 rounded-full focus:outline-none focus:ring-4';
  
  // Variant styles with modern gradients and clean outlines
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-600/25 focus:ring-blue-600/30',
    secondary: 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow focus:ring-gray-200',
    outline: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-100',
  };

  // Size variations using responsive scale (clamp-like behavior via tailwind classes)
  // Mobile-first sizing that feels great on touch
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base sm:text-lg',
    lg: 'px-8 py-4 text-lg sm:text-xl',
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = children || text;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};

export default CTAButton;
