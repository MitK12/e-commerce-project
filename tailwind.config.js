/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    darkMode: "class", // <--- THIS IS REQUIRED for dark mode
    theme: {
        extend: {},
    },
    plugins: [],
};