module.exports = {
  purge:["./**/*.{html,ejs,css}"],
  content: [],
  darkMode: 'media',
  theme: {
    extend: {},
    fontFamily:{
      'headline':['Montserrat','sans-serif'],
      'body':'Roboto Mono, monospace'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
