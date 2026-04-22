/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dc2626",   // 🔴 merah
        secondary: "#2563eb", // 🔵 biru
      },
    },
  },
  plugins: [],
};