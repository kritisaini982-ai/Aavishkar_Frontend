/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          600: '#86165F',
          700: '#6b114b',
        },
        magenta: {
          DEFAULT: '#D63384',
          500: '#D63384',
          600: '#b8226e',
        },
        blush: '#fdf2f8',
      },
    },
  },
  plugins: [],
}