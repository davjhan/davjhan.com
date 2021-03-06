import adapter from '@sveltejs/adapter-static'
import path from 'path'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true
        }),
    ],
    kit: {
        adapter: adapter({
            fallback: '404.html'
        }),
        vite: {
            optimizeDeps: {
                exclude: ['davjhan-core', 'ham-ui']
            },
            resolve: {
                alias: {
                    $static: path.resolve('/static'),
                    $views: path.resolve('src/views')
                }
            },
            server: {
                host: '0.0.0.0',
                watch: {
                    // ignored: [
                    //     '!**/.yalc/**'
                    // ],
                },
                fs: {
                    allow: ['.yalc']
                }
            }
        }
    },
}

export default config