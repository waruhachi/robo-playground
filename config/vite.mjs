import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(__dirname, '../src'),
			'@api': resolve(__dirname, '../src/api'),
			'@app': resolve(__dirname, '../src/app'),
			'@components': resolve(__dirname, '../src/components'),
			'@hooks': resolve(__dirname, '../src/hooks'),
			'@lib': resolve(__dirname, '../src/lib'),
			'@server': resolve(__dirname, '../src/server'),
			'@utils': resolve(__dirname, '../src/utils')
		}
	},
	css: {
		postcss: 'config/postcss.config.mjs'
	}
});
