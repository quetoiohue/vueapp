module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          1: '#fdaeb7',
          2: '#cb2431',
        },
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
