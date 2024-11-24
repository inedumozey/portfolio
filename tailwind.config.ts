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
        surfaceColor: "#D9D9D9",
        primaryColor: "#1f8bd2",
        bgColor: "#f5f5f5",
        secondaryColor: "#464646",
        secondaryColorVariant: "#dcdcdc", //formally secondaryColorVariant
        darkGray: "#ABB3C7", // formally darkGray
        lightGray: "#b9cdf0", // formally lightGray
        white: "#FFFFFF",
        dark: "#000000",
        red: "#E5190C", // formally red
        green: "green"
      },
      opacity: {
        fade: '.5',
        fade2: '.8'
      },
      fontSize: {
        xlg: '2.5rem',
        lg: '2rem',
        lg2: '1.6rem',
        md: '1rem',
        sm: '.8rem',
        xsm: '0.6rem'
      },
      screens: {
        sm: '300px',
        md: '700px',
        lg: '900px',
        xlg: '1024px',
        xxlg: '1554px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
