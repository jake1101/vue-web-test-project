module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#838383',
        secondary: '#474554',
        tertiary: '#ACA7CB',
        light: '#FAF7FF',
      },
      backgroundImage: {
        home: 'url("@/assets/images/home-background.jpg")',
        pattern: 'url("@/assets/images/railroad-crossing.png")',
        horizon: 'url("@/assets/images/train-window.jpg")',
      },
    },
  },
  plugins: [],
};
