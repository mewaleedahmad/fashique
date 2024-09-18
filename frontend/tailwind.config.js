/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPrimary: "#f8f9fa",
        lightSecondary: "#e9ecef",
        darkPrimary: "#212529",
        darkSecondary: "#6c757d",
      
      },
    },
  },
  plugins: [],
};
