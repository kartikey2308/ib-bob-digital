//@type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@idb-dab/ui-core/dist/**/*.js',
  ],
  important:true,
  theme: {
    ...defaultTheme,
  colors:{
    ...defaultTheme.colors,
    primary:"#3881F6",
    white:"#ffffff",
    orange:"#FF5C34",
    black:"#000000",
    text:{
      DEFAULT:"#1f2937",
      light:"6C7281"
    },
    light:{
      DEFAULT:"FAFBFC",
      lighter:"F3F4F6"
    }
  },
    extend: {
      fontFamily: {
        primary: ['AirbnbCerealApp'],
      },
      fontSize: {
        xxs: '0.625rem',
      },
      boxShadow: {
        modal: '0px 7px 40px rgba(242, 101, 32, 0.35)',
      },
      colors: {
        primary: "#3881F6",
        secondary: {
          100: '#1F3C664D',
          200: '#F3F9FD',
          300: '#1F3C66',
          400: '#2F2F2F',
          500: '#929EAE',
          600: '#3AB31C',
          700: '#FB1111',
          800: '#F4F4F4',
          900: '#FFFAF9',
          1000: '#FFE27A'
        },
        neutral: {
          50: '#FAFAFA',
          100: '#C9C9C9',
          200: '#FFFFFF80',
          300: '#575757',
          400: '#EEF0F3',
          500: '#CDD1E8',
          600: '#777777',
          700: '#585858',
          800: '#4D4D4D',
          900: '#EDEDED'
        },
        textColor: {
          'rgba-60': 'rgba(0, 0, 0, 0.60)',
        },
        info: '#EBFFE7',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
  ],
}
