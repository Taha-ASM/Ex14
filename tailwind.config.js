/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgnav: '#121212', 
      },
    },
  },
  plugins: [require("daisyui")],
}