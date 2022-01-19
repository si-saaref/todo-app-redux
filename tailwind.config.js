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
        'semi-white': '#9AA0A6',
        'backdrop': 'rgba(0,0,0,0.7)',
        'semi-backdrop': 'rgba(0,0,0,0.3)',
        'semi-slate': 'rgba(148, 163, 184, 0.8)'
      },
      fontFamily: {
        baloo: ['"Baloo 2"'],
        cairo: ['"Cairo"'],
        inter: ['"Inter"'],
        raleway: ['"Raleway"']
      },
      blur: {
        xs: '2px',
      }
    }
  },
  plugins: [],
};
