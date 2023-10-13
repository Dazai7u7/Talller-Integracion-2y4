/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'slide-left-to-right':{
          '0%':{
            transform: 'translateX(25rem)'
          },
          '50%': {
            transform: 'translateX(-5rem)' 
          },
          '100%': {
            transform: 'translateX(0rem)' 
          },  
        },
      },
      animation: {
        'slide-left': 'slide-left-to-right 1s ease-in-out'
      },
    },
  },
  plugins: [],
}

