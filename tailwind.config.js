/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "Sarabun"], // default en
        MPLUSRounded1c: ["MPLUSRounded1c", "Kanit"], // header text
        Kanit: ["Kanit"], // for th charecters
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
