// Contenido de postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // Debe ser este
    'autoprefixer': {},       // Y este es importante también
  },
};