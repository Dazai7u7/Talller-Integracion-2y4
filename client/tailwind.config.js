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
            transform: 'translateX(23rem)'
          },
          '50%': {
            transform: 'translateX(-5rem)' 
          },
          '100%': {
            transform: 'translateX(0rem)' 
          },  
        },
        'slide-top':{
          '0%':{
            transform: 'translateY(5rem)',
            opacity: '0%'
          },
          '100%':{
            transform: 'translateY(0rem)',
            opacity: '100%'
          },
        },
        'slide-top2':{
          '0%':{
            transform: 'translateY(5rem)',
            opacity: '0%'
          },
          '100%':{
            transform: 'translateY(0rem)',
            opacity: '100%'
          },
        },
        'slide-top3':{
          '0%':{
            transform: 'translateY(5rem)',
            opacity: '0%'
          },
          '100%':{
            transform: 'translateY(0rem)',
            opacity: '100%'
          },
        },
        'slide-top4':{
          '0%':{
            transform: 'translateY(5rem)',
            opacity: '0%'
          },
          '100%':{
            transform: 'translateY(0rem)',
            opacity: '100%'
          },
        },
      },
      animation: {
        'slide-left': 'slide-left-to-right 1s ease-in-out',
        'slide-top': 'slide-top 0.8s ease-in-out',
        'slide-top2': 'slide-top 1s ease-in-out',
        'slide-top3': 'slide-top 1.2s ease-in-out',
        'slide-top4': 'slide-top 1.4s ease-in-out',
      },
    },
  },
  plugins: [],
}

