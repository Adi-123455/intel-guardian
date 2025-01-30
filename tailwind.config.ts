import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1a237e",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#455a64",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#d32f2f",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#37474f",
          foreground: "#90a4ae",
        },
        accent: {
          DEFAULT: "#d32f2f",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#1e1e1e",
          foreground: "#ffffff",
        },
        alert: {
          red: "#f44336",
          amber: "#ffb300",
          green: "#43a047",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;