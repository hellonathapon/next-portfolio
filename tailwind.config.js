/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-rose-500",
    "bg-sky-500",
    "bg-sky-600",
    "bg-cyan-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-lime-600",
    "bg-amber-600",
    "bg-amber-500",
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
