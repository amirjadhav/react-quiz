/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'dark-navy': '#2D4356',
      'navy': '#435B66',
      'dark-peach': '#A76F6F',
      'peach': '#EAB2A0',
      'yellow': "#FCC822",
      'black': "##333333",
      'background': "#D1D1D1"
    }
  },
  plugins: [],
}

