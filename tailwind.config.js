/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {screens: {
      '2xs': '230px',
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1240px',
      '2xl': '1536px'
     },
    extend: {},
  },
  plugins: [],
}