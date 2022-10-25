
const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '450px',
      // => @media (min-width: 350px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1628px',
      // => @media (min-width: 1628px) { ... }

      
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
    },
    
    fontFamily: {
      'sans': ['Lora', 'Helvetica', 'Arial', 'sans-serif'],
      'header': ['Flama', 'Helvetica', 'Arial', 'sans-serif'],
      
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#fff',
      trans: 'rgba(255, 255, 255, 0.3)',
      offWhite: '#E8E9E2',
      gray: {
        DEFAULT: '#B2B39E',
        light: '#F8F8F8',
        dark: "#AEAEAE"
      },
      blue: {
        light: '#43C5FF',
        DEFAULT: '#0E5CB9'
      },
      brown: '#4E5328',
      slate: '#C5E6EA',
      red: '#FF3C00',
      salmon: '#EFB3A5',
      navy: '#0F3049',
      yellow: '#F7CE08',
      green: '#30FF9C',
      brick: '#D45436'
      
      
    },
    fontSize: {
      'xs': '.6rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '7rem',
      '9xl': '9rem',
      '10xl': '10rem',
      'bigxl': '11rem',
      'hugexl': '12rem',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.2em',
      widest: '.4em',
    },
    
    
    extend: {
      zIndex: {
        '-2': '-2',
       },

       width: {
        'sideScroll': '1000px',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.btn-white': {
          
          color: "#fff",
          border: "#fff 1px solid",
          borderRadius: "7px",
          padding: '.3rem 1rem',
          display: "inline-block",
          fontFamily: "Flama, Helvetica, Arial, sans-serif",
          fontWeight:"500",
          textTransform: "uppercase",
          transition: 'all .15s',
          '&:hover': {
            backgroundColor: '#fff',
            color: "#000"
          }
        },
        '.btn-black': {
          
          color: "#000",
          border: "#000 1px solid",
          borderRadius: "7px",
          padding: '.3rem 1rem',
          display: "inline-block",
          fontFamily: "Flama, Helvetica, Arial, sans-serif",
          backgroundColor: '#fff',
          fontWeight:"500",
          textTransform: "uppercase",
          transition: 'all .15s',
          '&:hover': {
            backgroundColor: '#000',
            color: "#fff"
          }
        },
        '.btn-outline': {

          fontSize: "23px",
          padding: '.4rem 1rem',
          display: "inline-block",
          fontFamily: "Flama, Helvetica, Arial, sans-serif",
          fontWeight:"500",
          textTransform: "uppercase",
          transition: 'all .15s'
          
        },
        '.btn-header': {

          fontSize: "1.5rem",
          padding: '.5rem .5rem',
          display: "inline-block",
          lineHeight: "1",
          fontFamily: "Flama, Helvetica, Arial, sans-serif",
          fontWeight:"500",
          textTransform: "uppercase",
          transition: 'all .15s'
          
        }
        
      })
    })
  ]
}