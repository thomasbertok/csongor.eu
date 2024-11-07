/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '840px',
      lg: '1200px',
      xl: '1920px',
    },
    fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Bodoni Moda', 'serif'],
    },
     
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
      alpha: 'lower-alpha',
    },
    extend: {
      colors: {
        dark: '#2D2B2B',
        semi: '#3c3a38',
        light: '#E4E2DF',
        accent: '#F9DCBA',
        alert: '#3D2121'
      },
      spacing: {
          '128': '32rem'
      },
      borderRadius: {
          '4xl': '2rem'
      }
    }
  },
  plugins: []
}

