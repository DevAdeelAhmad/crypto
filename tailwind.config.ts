import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffa402",
        secondary: "#f15a40",
        darkP: "#fae501",
        darkS: "#b7ee48",
        dark: "#090d1f",
        darkBg: "#0f1327",
      },
    },
  },
  plugins: [],
};
export default config;
