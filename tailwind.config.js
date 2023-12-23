/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using src directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],


  theme: {
    maxWidth:{
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerXs: "768px",
    },
    screens:{
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px"
    },
    colors: {
      bodyColor: "#0A192F",
      textGreen: "#64ffda",
      textLight: "#ccd6f6",
      textDeep: "#D8D8D8",
      textWhite: "#FFFFFF",
      textDarkDeep: "#2E2E2E",
      textBlue: "#1589FF",
      textBlack: "#000000",
      hoverColor: "rgba(100, 255, 218, 0.1 )",

    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
     colors:{
       'primary': 'rgb(29, 155, 240)',
      }
    },
  },
  plugins: []
}
