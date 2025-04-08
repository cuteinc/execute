/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,ts}'],
    theme: {
      extend: {
        colors: {
          navBar: '#271834',
          activeWindowNavBar: '#4d3168'
        },

        spacing: {
          '10xl': '10rem',
          '11xl': '12rem',
          '12xl': '14rem',
        },
        fontFamily: {
          adlam: ['"ADLaM Display"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  