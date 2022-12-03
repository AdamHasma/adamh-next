/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: { accent: "#6dfc3f", primary: "#191d20", secondary: "#edf5fa" },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "5rem",
    },
    fontFamily: { agrandir: "Agrandir Variable" },
    boxShadow: {
      "big-glow": "0px 0px 35px 0px rgba(109,252,63,0.5)",
      "small-glow": "0px 0px 51px 0px rgba(109,252,63,0.4)",
      "mini-glow": "0px 0px 9px 0px rgba(109,252,63,1)",
    },
    dropShadow: {
      "big-glow": "0px 0px 35px 0px rgba(109,252,63,0.5)",
      "small-glow": "0px 0px 51px 0px rgba(109,252,63,0.4)",
      "mini-glow": "0px 0px 9px 0px rgba(109,252,63,1)",
    },
    borderRadius: {
      none: "0",
      xs: "0.1875rem",
      sm: "4px",
      default: "8px",
      lg: "12px",
      xl: "20px",
    },
    extend: {
      screens: {
        "xl-max": { max: "1920px" },
        "lg-max": { max: "1600px" },
        "md-max": { max: "1440px" },
        "sm-max": { max: "1280px" },
        "s-max": { max: "900px" },
        "xs-max": { max: "768px" },
        "xxs-max": { max: "480px" },
        "android-max": { max: "374px" },
      },
    },
  },
  plugins: [],
};
