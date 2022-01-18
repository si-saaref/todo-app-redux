module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Coffe-bg': "url('../src/img/Coffe-bg.jpg')",
      },
      colors: {
        'semi-transparent': 'rgba(55, 65, 81, .6)',
        'semi-gray': '#3C4043',
        'semi-white': '#9AA0A6'
      },
      fontFamily: {
        baloo: ['"Baloo 2"'],
        cairo: ['"Cairo"'],
        inter: ['"Inter"'],
        raleway: ['"Raleway"']
      }
    }
  },
  plugins: [],
};
