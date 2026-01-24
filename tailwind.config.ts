import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#1f2937",

        primary: "#740f5f", // purple
        secondary: "#f5b8c8", // blush pink
        muted: "#f5e6dc", // nude beige
        accent: "#d4af37", // gold

        border: "rgba(0,0,0,0.1)",
        destructive: "#d4183d",
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.625rem",
        xl: "0.75rem",
        full: "9999px",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        card: "0 20px 40px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
