module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      backgroundColor: ['active'],
      textDecoration: ['checked'],
    },
  },
  plugins: [
    "postcss-import",
      "tailwindcss",
      "autoprefixer"
  ],
}
