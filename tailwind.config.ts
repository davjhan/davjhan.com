// import theme from './src/styles/tailwind.theme'
import * as preset from './src/styles/tailwind-preset'
import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{svelte,js,ts,jsx,tsx,html}'],
	presets: [preset],
	theme: {
		fontFamily: {
			accent: 'Lora',
		},
	},
} satisfies Config
