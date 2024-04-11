/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...require('tailwindcss/colors'),
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': {
          101: '#2A3235',
          102: '#30363D',
          100: '#000000',
        },
        'gray': {
          101: '#75797B',
          102: '#808384',
        },
        'orange': {
          101: '#E34C27',
        }
        // ...
      },
    },
  },
  plugins: [],
}