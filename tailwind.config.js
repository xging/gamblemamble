/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16a34a', // зелёный
      },
      borderRadius: {
        md: '0.5rem',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

