/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			/// utlizar font family ui-sans-serif
			fontFamily: {
				'sans': ['ui-sans-serif', 'system-ui'],
			},
			backgroundColor: {
				'primary': '#17181c',
				'secondary': '#353841',
				'header': '#23262f',
			},
			colors: {
				'title': '#facc15',
				'subtitle': '#fde047',
				'enlace': 'rgba(8, 47, 73, .8);',
			}
		},
	},
	plugins: [],
}
