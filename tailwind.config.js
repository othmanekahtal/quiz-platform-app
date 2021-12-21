module.exports = {
  content: ["./**/*.{html,ejs}"],
  darkMode: "media",
  theme: {
    extend: {},
    fontFamily: {
      headline: ["Montserrat", "sans-serif"],
      body: "Roboto Mono, monospace",
    },
    gridTemplateColumns: {
      "dashboard-column-guide": "260px 1fr",
    },
    gridTemplateRows: {
      "dashboard-row-guide": "100px calc(100vh - 100px)",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
