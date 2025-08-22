/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "warm-red": "#DC2626",
        "deep-red": "#991B1B",
        gold: "#F59E0B",
        charcoal: "#374151",
        cream: "#FEF3C7",
      },
      fontFamily: {
        elegant: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
