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
        background: "#FFFFFF",
        foreground: "#111827",

        // Brand Colors
        primary: {
          DEFAULT: "#1A5D1A", // Deep Forest Green
          light: "#2E7D32",
          dark: "#144D14",
        },
        secondary: {
          DEFAULT: "#4CAF50", // Vibrant Leaf Green
          light: "#81C784",
          dark: "#388E3C",
        },
        accent: {
          DEFAULT: "#FFC107", // Amber/Industrial Yellow
          hover: "#FFB300",
        },

        // Neutral Scale
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        primary: ["var(--font-josefin-sans)", "sans-serif"], // Headings
        secondary: ["var(--font-inter)", "sans-serif"],      // Body
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      animation: {
        'marquee-infinite': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
