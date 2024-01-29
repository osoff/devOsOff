/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
    },
    extend: {
      colors: {
        mainblue: "rgb(51, 48, 255)",
        texthov: "#3330ff",
      },
      height: {
        screen: "100dvh",
      },
      backgroundColor: {
        light: "#eceef9",
        dark: "#1e1f23",
      },
      backgroundImage: {
        mainbg: "url('img/mainPage.png')",
        mainbgdark: "url('img/mainPagedark.png')",
      },
    },
  },
  plugins: [],
};
