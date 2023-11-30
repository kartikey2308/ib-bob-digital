/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@idb-dab/ui-core/dist/**/*.js',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   primary: ['Inter'],
      // },
      // fontSize: {
      //   xxs: '0.625rem',
      // },
      // boxShadow: {
      //   modal: '0px 7px 40px rgba(242, 101, 32, 0.35)',
      // },
      // colors: {
      //   primary: {
      //     100: '#FFF8F7',
      //     200: '#FFF3F1',
      //     300: '#FCECE5',
      //     400: '#FFEDE6',
      //     500: '#FCDCD58F',
      //     900: '#FF5C34',
      //   },
      //   secondary: {
      //     100: '#1F3C664D',
      //     200: '#F3F9FD',
      //     300: '#1F3C66',
      //     400: '#1F3C66',
      //     500: '#1F3C66',
      //     600: '#1F3C66',
      //     700: '#1F3C66',
      //     800: '#1F3C66',
      //     900: '#1F3C66',
      //   },
      //   neutral: {
      //     50: '#FAFAFA',
      //     100: '#C9C9C9',
      //     200: '#FFFFFF80',
      //     300: '#575757',
      //     400: '#EEF0F3',
      //     500: '#CDD1E8',
      //     600: '#777777',
      //     700: '#585858',
      //     800: '#4D4D4D',
      //   },
      //   info: '#EBFFE7',
      // },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('tailwind-scrollbar'),
  ],
}
