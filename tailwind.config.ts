import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBrown1: "#ffc879",
        customBrown2: "#655145",
        espressoDark: "#3b2d25",
        espressoLight: "#675447",
        headingColor: "#000",
        paragraphColor: "#000",
        cardHeadingColor: "000",
        "gradient-start": "#655145",
        "gradient-end": "#372A22",
      },
      fontFamily: {
        sans: [
          "var(--font-sora)",
          "var(--font-epilogue)",
          "var(--font-inconsolata)",
          "sans-serif",
        ],
      },
      maxWidth: {
        // "screen-2xl": " 1734px",
        // "screen-3xl": "1920px",
        "screen-2xl": " 100%",
        "screen-3xl": "100%",
      },
      backgroundImage: {
        "hero-bg": "#ffffff",
        "services-highlight": "url('/services-highlight-bg.png')",
        "vip-gradient": "linear-gradient(to right, #015f86, #015f86)",
        "espresso-gradient": "linear-gradient(to right, #725c50, #655146)",
        "button-gradient": "linear-gradient(to right, #655145, #372A22)",
      },
    },
  },
  plugins: [],
};

export default config;
