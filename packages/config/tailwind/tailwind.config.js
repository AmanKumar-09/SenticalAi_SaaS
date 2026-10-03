/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#12b76a', // Primary Vibrant Emerald Green
          600: '#10b981',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22', // Deep Forest Background
        },
        sentical: {
          dark: '#0B4A34',   // Dark Forest Green ("Sentical" text color)
          green: '#12B76A',  // Bright Emerald Green ("Ai" text & bubble color)
          sparkle: '#D4F668',// Light Yellow-Green Sparkle Accent
          bg: '#051912',     // Rich Deep Dark Canvas
        },
        primary: {
          DEFAULT: '#12b76a',
          foreground: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
