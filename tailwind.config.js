/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "rgb(24,24,27)",
        title: "rgb(244,244,245)",
        subtitle: "rgb(161,161,170)",
      },
    },
  },
  plugins: [],
};
