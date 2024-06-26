import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: '404.html',
		}),
		alias: {
			$data: 'src/data',
			$views: 'src/views',
			$ui: 'src/lib/components/ui',
			$assets: 'src/lib/assets',
		},
	},
}

export default config
