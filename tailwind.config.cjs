const theme = require('broth-css/dist/tailwind.theme.cjs')
module.exports = {
    content: ['./src/**/*.{svelte,js,ts,jsx,tsx,html}', '.yalc/davjhan-core/**/*.{svelte,js,ts,jsx,tsx,html}'],
    theme: {
        extend: {
            ...theme,
        },
    }
}