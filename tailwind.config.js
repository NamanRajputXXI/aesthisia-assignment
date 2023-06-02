/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      boxShadow: {
        md: "0px 20px 32px rgba(2, 1, 0, 0.42);",
      },
    },
  },
  plugins: [],
};
