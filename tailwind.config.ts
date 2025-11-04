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
        "cyber-green": "#00FF88",
        "accent": "#00FF88",
        "background-dark": "#0a0a0a",
        "background-light": "#ffffff",
        "text-primary": "#0a0a0a",
        "text-secondary": "#666666",
        "text-inverse": "#ffffff",
        "border": "rgba(255, 255, 255, 0.1)",
        "dark": "#0a0a0a",
        "navy": "#1a1a1a",
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out",
        "blur-reveal": "blur-reveal 0.8s ease-out",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "blur-reveal": {
          "0%": {
            opacity: "0",
            filter: "blur(10px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

