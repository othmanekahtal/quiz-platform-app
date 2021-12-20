module.exports = {
  content: ["./**/*.{html,ejs,css}"],
  darkMode: 'media',
  theme: {
    extend: {},
    fontFamily: {
      'headline': ['Montserrat', 'sans-serif'],
      'body': 'Roboto Mono, monospace'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
