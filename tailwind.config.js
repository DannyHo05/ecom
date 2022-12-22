/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '900px',
      // => @media (min-width: 900px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-2": "var(--primary-2)",
        "primary-3": "var(--primary-3)",
        "footer":"var(--primary-bg)"
      },
      backgroundColor:{
        primary:"var(--primary-bg)"
      },
      borderColor:{
        primary:"var(--primary-bd)"
      },
      textColor: {
        base: "var(--text-base)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      boxShadow: {
        "outline-normal": "0 0 0 2px var(--accent-2)",
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px",
      },
      lineHeight: {
        "extra-loose": "2.2",
      },
      scale: {
        120: "1.2",
      },
    },
  },
  plugins: [],
};
