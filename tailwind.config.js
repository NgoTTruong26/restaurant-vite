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
      },
      animation: {
        "transfer-left": "transfer-left 1s linear infinite",
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
