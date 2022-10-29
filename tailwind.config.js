/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode : "class",
  important: true,
  theme: {
    extend: {
      colors: {
        "mainColor": "#00AE7B",
        "secondaryColor": "#1D1C1A",
      },

      fonts: {
        "mainFont": "Arial, sanserif",
        "secondary": "Poppins",
      },
      rotate: {
        '360': '360deg',
      }
    },
  },
  plugins: [],
}