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
        basecolour: "#017358",
        basecolour_hover: "#01CD9C",
        primary: "#017358",
        secondary: "#2D5465",
        neutral: "#898384",
        base: "#FAFAFA",
        red: "#DE1F05",
        success: "#13B959",
        warning: "#CC7914",
        "light-blue": "#E2EDF2",
        "light-warning": "#F7DEC0",
        "light-green": "#DBF9E7",
      },
    },
  },
  plugins: [],
};
export default config;
