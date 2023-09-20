import adapter from '@sveltejs/adapter-cloudflare';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: {
		// ...
		vite: {
		   resolve: {
			  alias: {
				fs: path.resolve('./node_modules/browserfs/dist/shims/fs.js'),
				path: path.resolve('./node_modules/path-browserify'),
				assert: path.resolve('./node_modules/assert'),
				util: path.resolve('./node_modules/util'),
			  },
		   },
		},
	 },
};

export default config;
