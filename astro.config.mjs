import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://yourusername.github.io';
const base = process.env.SITE_BASE ?? '/';

// https://astro.build/config
export default defineConfig({
	site,
	base,
	output: 'static',
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
