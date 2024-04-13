// import theme from './src/styles/tailwind.theme'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
	content: ['./src/**/*.{svelte,js,ts,jsx,tsx,html}'],
	theme: {
		extend: {
			colors: {
				outlineColor: colors.indigo[200],
				transparent: 'transparent',
				white: colors.white,
				ink: {
					DEFAULT: colors.neutral[800],
					primary: colors.indigo[600],
					secondary: colors.neutral[700],
					tertiary: colors.neutral[500],
					error: colors.rose[700],
					success: colors.lime[700],
				},
				accent: {
					DEFAULT: colors.amber[300],
					error: colors.rose[300],
					success: colors.lime[200],
					secondary: colors.neutral[300],
				},
				shade: {
					DEFAULT: colors.neutral[100],
					accent: colors.indigo[50],
					success: colors.lime[100],
					error: colors.rose[100],
				},
				background: {
					DEFAULT: colors.white,
				},
				divider: {
					DEFAULT: colors.neutral[300],
					accent: colors.indigo[300],
					success: colors.lime[300],
					error: colors.rose[300],
				},
			},
			boxShadow: {
				hard: `2px 2px 0px 0px ${colors.neutral[800]}`,
			},
			borderRadius: {
				DEFAULT: '8px',
			},
		},
	},
} satisfies Config
