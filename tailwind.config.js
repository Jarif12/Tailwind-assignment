/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        // Add your custom color here
        primary: "#0B5D1E",
        primaryHover: "#C86A00",
        ashColor: "#868e96",
      },
      extend: {
        fontFamily: {
          // Add your custom font here
          Inter: ["Inter", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
