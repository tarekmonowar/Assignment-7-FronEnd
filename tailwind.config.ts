import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      // "2xl": "1536px",
    },
    fontFamily: {
      primary: ["var(--font-jetbrainsMono)", ...fontFamily.mono],
      secondary: ["var(--font-robotoSerif)", ...fontFamily.serif],
      third: ["var(--font-inter)", ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#1b1f24",
        accent: {
          DEFAULT: "#13bbff",
          hover: "#00e187",
        },
        secondary: "#ff9900",
      },

      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        fastShimmer: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        highlightShimmer: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
      },
      animation: {
        "fadeInUp": "fadeInUp 0.4s ease-out forwards",
        "shimmer": "shimmer 1.5s linear infinite",
        "fastShimmer": "fastShimmer 1s linear infinite",
        "highlightShimmer": "highlightShimmer 2s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    borderRadius: {
      xl: "50%",
      big: "20px",
      lg: "12px",
      md: "8px",
      sm: "5px",
    },
    plugins: [],
  },
} satisfies Config;

//00879e
