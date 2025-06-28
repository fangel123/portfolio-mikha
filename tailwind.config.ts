import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0d001a",
        light: "#ffffff",
        primary: "#7f00ff",
        secondary: "#00f2ff",
        accent: "#ff00c8",
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "neon-glow": "neon-glow 2s linear infinite",
      },
      keyframes: {
        "caret-blink": {
          "0%, 70%, 100%": { opacity: "1" },
          "20%, 50%": { opacity: "0" },
        },
        "neon-glow": {
          "0%, 100%": {
            textShadow:
              "0 0 5px var(--accent-color), 0 0 10px var(--accent-color)",
          },
          "50%": {
            textShadow:
              "0 0 10px var(--accent-color), 0 0 20px var(--accent-color)",
          },
        },
      },
    },
  },
} satisfies Config;
