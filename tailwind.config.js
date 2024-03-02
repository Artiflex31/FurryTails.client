/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFF9EB", // Pale Cream
        header: "#FFA726", // Burnt Orange
        text: "#333333", // Charcoal Gray
        cta: "#FF7043", // Vibrant Tangerine
        "cta-hover": "#FF5722",
        brandTextDark: "#6B8E23",
        brandTextLight: "#9ACD32",
        accent: "#FFAB91", // Soft Coral
        divider: "#E0E0E0", // Light Gray
        footer: "#222222", // Pale Gray
        newsletter: "#FFCC80", // Peachy Orange
      },
      fontFamily: {
        "great-vibes": ["Great Vibes", "cursive"],
        itim: ["Itim", "cursive"],
        merienda: ["Merienda", "cursive"],
        merriweather: ["Merriweather", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        satisfy: ["Satisfy", "cursive"],
      },
      screens: {
        "mobile-start": "450px",
        "desktop-sm": "970px",
        "ipad-md": "815px",
      },
    },
  },
  plugins: [],
};
