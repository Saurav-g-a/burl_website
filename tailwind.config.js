/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../public/img/spa.png')",
        'banner': "url('../public/banner.png')",
        'about-us': "url('../public/about-banner.jpg')",
      },
      fontFamily : {
        'bodoni': 'Noto Serif KR',
      }
    },
  },
  plugins: [],
}