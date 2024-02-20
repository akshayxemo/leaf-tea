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
        light: "#F5F1E2",
        dark: "#565D50",
        "dark-600": "#404A38",
        body: "#767676",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": "url(/images/hero.png)",
      },
    },
    fontFamily: {
      sans: ["var(--font-dmsans)"],
      serif: ["var(--font-dmserif)"],
      display: ["var(--font-gratevibes)"],
    },
  },
  plugins: [],
};
export default config;
