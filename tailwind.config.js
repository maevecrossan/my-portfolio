/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        leaf: {
          DEFAULT: "#67725c",
        },
        heather: {
          DEFAULT: "#7e6377",
        },
        mulberry: {
          DEFAULT: "#42303d",
        },
        evergreen: {
          DEFAULT: "#363b2e",
        },
        moss: {
          DEFAULT: "#779273",
        },
      },
    },
  },
  plugins: [],
};
