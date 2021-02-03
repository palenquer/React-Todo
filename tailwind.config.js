module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
      backgroundColor: ["active"],
      textDecoration: ["checked"],
    },
  },
  plugins: ["postcss-import", "tailwindcss", "autoprefixer"],
};
