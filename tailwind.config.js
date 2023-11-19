/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      customdashedborder: {
        borderWidth: '2px', /* Adjust the border width as needed */
        borderImage: 'linear-gradient(to right, #000 33%, transparent 33%, transparent 66%, #000 66%) 1',
      },
      keyframes:{
        rotate:{
          '0%':{transform: 'rotate(0deg)'},
          '100%':{transform: 'rotate(360deg)'},
        },
        rotateY:{
          '0%':{transform: 'rotateY(0deg)'},
          '50%':{transform: 'rotateY(180deg)'},
          '100%':{transform:'rotateY(360deg)'},
        },
        move:{
          '0%':{transform: 'translate(60px,140px)'},
          '25%':{transform: 'translate(61px,141px)'},
          '50%':{transform: 'translate(62px, 143px)'},
          '75%':{transform: 'translate(61px,141px)'},
          '100%':{transform: 'translate(60px,140px)'},
        },

      },
      animation: {
        rotate: 'rotate 40s linear infinite',
        move: 'move 2s linear infinite',
        rotateY: 'rotateY 1s linear infinite',
      },
    },
    fontFamily:
  {
    IBM:["IBM Plex Sans", "sans-serif"],
    Bruno:["Bruno Ace SC", "cursive"],
    Nova:["Nova Round", "cursive"],
    Realway:["Raleway", "sans-serif"],
    Montserrat:["Montserrat Alternates", "sans-serif"],
    Orbitron:["Orbitron", "sans-serif"],
  },
  },
  plugins: [],
}