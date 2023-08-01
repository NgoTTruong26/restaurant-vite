/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "transfer-left": {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-5px)" },
          "100%": { transform: "translateX(0px)" },
        },
        "spin-180": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        "drop-top": {
          "0%": {
            transform: "translateY(-100%) scale(0)",
            opacity: 0,
          },
          "100%": { transform: "translateY(0%) scale(1)", opacity: 1 },
        },
      },
      animation: {
        "transfer-left": "transfer-left 1s linear infinite",
        "spin-180": "spin-180 0.3s linear",
        "drop-top": "drop-top 0.3s linear",
      },
    },
    fontFamily: {
      amatic: ["Amatic SC"],
      shantell: ["Shantell Sans"],
      sansita: ["Sansita"],
    },
    colors: {
      red: "#ce1212",
    },
    backgroundColor: {
      red: "#ce1212",
    },
    screens: {
      xs: "330px",
      sm: "450px",
      md: "850px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
