import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enables class-based dark mode
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
        card: {
          DEFAULT: "var(--card-bg)",
          border: "var(--card-border)",
        },
        muted: {
          DEFAULT: "var(--muted-foreground)",
          border: "var(--muted-border)",
        },
        accent: {
          blue: {
            dark: "#002d62",   // Secondary blue gradient start (dark)
            light: "#0070f3",  // Secondary blue gradient end (light/Vercel blue)
          }
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.8)",
        "glass-light": "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
      }
    },
  },
  plugins: [],
};

export default config;
