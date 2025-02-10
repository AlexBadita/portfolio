/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // light mode
        lightBackground: "#f4f4f5",
        lightText: "",
        lightAccent: "#4663ac",

        lightHighlight: "#0F172A",
        lightPrimary: "#003135",
        // lightHover: "",

        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001f",

        // dark mode
        darkBackground: "",
        darkHighlight: "",
        darkPrimary: "",
        // darkHover: "",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
        Roboto: ['"Roboto Mono"', "Roboto"],
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
