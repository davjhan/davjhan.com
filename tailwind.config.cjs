const colors = require('tailwindcss/colors')
const hamUI = require('ham-ui/dist/tailwind.config.cjs')
module.exports = {
    mode: 'jit',
    purge: [
        './src/**/*.{svelte,js,ts,jsx,tsx,html,css}',
        './.yalc/**/*.{svelte,js,ts,jsx,tsx,html,css}'
    ],
    theme: {
        extend: {
            colors: {
                ...hamUI.theme.colors,
                special: colors.green
            }
        },
    }
}