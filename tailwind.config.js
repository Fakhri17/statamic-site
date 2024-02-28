/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "node_modules/preline/dist/*.js",
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],

    theme: {
        extend: {},
    },

    plugins: [require("@tailwindcss/typography"), require("preline/plugin")],
};
