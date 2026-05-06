import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        paper: "#fbfaf7",
        moss: "#60735a",
        coral: "#ef6f5e",
        gold: "#c8912b",
        ocean: "#236a7b"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 23, 23, 0.10)",
        card: "0 10px 30px rgba(23, 23, 23, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
