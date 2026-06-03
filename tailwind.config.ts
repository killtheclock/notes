/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,md,njk,ts,js}"],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#080b12",
          900: "#0d1117",
          800: "#13182a",
          700: "#1a2035",
          600: "#222840",
        },
        ghost: {
          100: "#f0f2f8",
          200: "#dde2f0",
          300: "#bbc4de",
          400: "#8d9bbc",
          500: "#6b7a9e",
        },
        aurora: {
          blue:   "#7eb8f7",
          violet: "#a78bfa",
          teal:   "#5eead4",
          rose:   "#fb7185",
          amber:  "#fbbf24",
          green:  "#6ee7b7",
        },
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body:    ["'DM Sans'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      typography: (theme: any) => ({
        invert: {
          css: {
            "--tw-prose-body": theme("colors.ghost.300"),
            "--tw-prose-headings": theme("colors.ghost.100"),
            "--tw-prose-links": theme("colors.aurora.blue"),
            "--tw-prose-code": theme("colors.aurora.teal"),
            "--tw-prose-pre-bg": theme("colors.night.800"),
          },
        },
      }),
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.4s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float":      "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
