/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react');
const { theme } = require('./src/styles/theme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'transfer-left': {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        'spin-180': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        'drop-top': {
          '0%': {
            transform: 'translateY(-100%) scale(0)',
            opacity: 0,
          },
          '100%': { transform: 'translateY(0%) scale(1)', opacity: 1 },
        },
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'transfer-left': 'transfer-left 1s linear infinite',
        'spin-180': 'spin-180 0.3s linear',
        'spin-slow-3s': 'spin 3s linear infinite',
        'drop-top': 'drop-top 0.3s linear',
        opacity: 'opacity 0.15s linear',
      },
      colors: {
        default: '#4A4A4A',
      },
    },
    fontFamily: {
      amatic: ['Amatic SC'],
      shantell: ['Shantell Sans'],
      sansita: ['Sansita'],
    },
    screens: {
      xs: '330px',
      sm: '450px',
      md: '850px',
      lg: '1024px',
      xl: '1280px',
    },
    maxWidth: {
      100: '100px',
      200: '200px',
      300: '300px',
      400: '400px',
      500: '500px',
      600: '600px',
      700: '700px',
      800: '800px',
      900: '900px',
      1000: '1000px',
      1100: '1100px',
      1200: '1200px',
      1800: '1800px',
    },

    colors: {},
  },
  darkMode: 'class',
  plugins: [nextui({ ...theme, addCommonColors: true })],
};
