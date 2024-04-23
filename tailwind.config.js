/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C2DD8D',
        secondary: '#247855',
        focus: '#58C6CD',
      },
      fontFamily: {
        poppins: 'Poppins'
      }
    },
  },
  plugins: [],
}