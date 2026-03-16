/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        aqua: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        ocean: {
          light: '#caf0f8',
          mid:   '#90e0ef',
          base:  '#00b4d8',
          deep:  '#0077b6',
          dark:  '#03045e',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite',
        'bubble-rise':  'bubbleRise 8s linear infinite',
        'wave':         'wave 3s ease-in-out infinite',
        'fade-in-up':   'fadeInUp 0.7s ease forwards',
        'shimmer':      'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        bubbleRise: {
          '0%':   { transform: 'translateY(100vh) scale(0.3)', opacity: '0' },
          '10%':  { opacity: '0.6' },
          '90%':  { opacity: '0.3' },
          '100%': { transform: 'translateY(-10vh) scale(1)', opacity: '0' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%':      { transform: 'rotate(3deg)' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(135deg, #caf0f8 0%, #90e0ef 30%, #00b4d8 70%, #0077b6 100%)',
        'card-gradient':  'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,249,255,0.8) 100%)',
      },
      boxShadow: {
        'aqua-sm':  '0 2px 12px rgba(0,180,216,0.15)',
        'aqua-md':  '0 4px 24px rgba(0,180,216,0.25)',
        'aqua-lg':  '0 8px 48px rgba(0,180,216,0.35)',
        'card':     '0 2px 20px rgba(0,119,182,0.10)',
        'card-hover':'0 8px 40px rgba(0,119,182,0.20)',
      },
    },
  },
  plugins: [],
}
