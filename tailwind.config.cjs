/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7e22ce',
        'primary-dark': '#4c1d95',
        'primary-light': '#a855f7', 
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
    backgroundImage: {
      'header-bg': "url('/bg.webp')",
    },
  },
  plugins: [],
}
