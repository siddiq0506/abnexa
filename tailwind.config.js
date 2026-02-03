/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode based on the 'dark' class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffffff', // Clean White Background
        'secondary': '#f3f4f6', // Light Gray Card Background
        'accent': '#6366F1', // Indigo/Purple for main actions
        'subtle-light': '#F8FAFC',
        'subtle-dark': '#3F3F46',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'subtle-float': 'subtleFloat 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      }
    },
  },
  plugins: [],
}
