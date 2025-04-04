/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#7065F0",
                bgPrimary: "#F9FAFB",
                btnIcon: "#E0DEF7",
                btnSecondary: "#100A55",
                textPrimary: "#000929",
            },
            fontFamily: {
                Plus: ["Plus Jakarta Sans", "sans-serif"],
            },
        },
    },
    plugins: [require("daisyui")],
};
