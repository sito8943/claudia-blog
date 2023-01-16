/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "0",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      red: "#ef4444",
      orange: "#ff7849",
      "orange-700": "#ea580c",
      white: "#ffffff",
      black: "#000000",
    },

    extend: {
      borderRadius: {
        "20px": "20px",
        circle: "100%",
      },
      width: {
        icon: "35px",
        "100%": "100%",
      },
      height: {
        icon: "35px",
      },
      padding: {
        icon: "2px 2px 0 0",
        active: "5px 15px",
      },
    },
  },
  plugins: [],
};
