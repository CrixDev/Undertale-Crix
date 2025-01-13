/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      '8bitOperatorPlus': ['8bitOperatorPlus-Regular', 'sans-serif'],
      '8bitOperatorPlus-bold': ['8bitOperatorPlus-Bold', 'sans-serif'],
    },
    cursor: {
      'Corazon': 'url(Corazon.cur), pointer',
      'CrixP': 'url(crixP.cur), pointer'
    },  
    extend: {},
  },
  plugins: [],
}

