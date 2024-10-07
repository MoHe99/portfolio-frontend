import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/*.svg",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgImg: "url(/assets/background.svg)",
        bgImgDark: "url(/assets/background_dark.svg)",
      },
      colors: {
        white: {
          blur: "#f5f5f5c8",
        },
        dark: {
          blur: "#171717c8",
        },
      },
    },
  },
  plugins: [flowbite],
  darkMode: "class",
} satisfies Config;
