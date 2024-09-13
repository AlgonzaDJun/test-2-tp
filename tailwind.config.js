/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        technopartner: "#F8F9FB",
        "techno-hijau": "#B7E4D4",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
