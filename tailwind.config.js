/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
        'node_modules/preline/dist/*.js',
    ],

    theme: {
        extend: {},
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('preline/plugin'),

    ],
};
