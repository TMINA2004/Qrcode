/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkblue:"#00072D",
        lightblue:'#0E6BA8',
         faint: '#FFFFFF14',
         lightgray:'#585858',
      }
    },
  },
  plugins: [],
}

