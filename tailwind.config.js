/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#121212',
          light: '#F5F5F5',
          coffee: '#6F4E37',
          cream: '#D2B48C',
          gold: '#C5A059'
        }
      }
    },
  },
  plugins: [],
}
