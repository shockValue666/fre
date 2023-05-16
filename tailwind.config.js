// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'lab-blue': '#0a1931',
        'lab-gray': '#6c757d',
        'lab-green': '#21bf73',
        'light-lab-blue': '#7395AE',
      }
    },
  },
  variants: {},
  plugins: [],
  variants: {
    extend: {},
  },
  plugins: [],
}
