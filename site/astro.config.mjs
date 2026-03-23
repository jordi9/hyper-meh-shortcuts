// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jordi9.github.io',
	base: '/hyper-meh-shortcuts',
	integrations: [
		starlight({
			title: 'Meh & Hyper',
			description: 'Custom keyboard layers for ES-ISO layout on macOS using Karabiner-Elements',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jordi9/hyper-meh-shortcuts' }],
			sidebar: [
				{ label: 'Overview', slug: '' },
				{ label: 'Symbols', slug: 'symbols' },
				{
					label: 'Navigating',
					items: [
						{ label: 'Cursor', slug: 'navigation/hotkeys' },
						{ label: 'Windows', slug: 'navigation/windows' },
						{ label: 'Applications', slug: 'navigation/applications' },
					],
				},
				{ label: 'Setup', slug: 'setup' },
				{ label: 'All Hotkeys', slug: 'all' },
			],
		}),
	],
});
