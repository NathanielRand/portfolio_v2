/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite/**/*.{html,js,svelte,ts}'],

	plugins: [require('flowbite/plugin')],
  
	darkMode: 'class',
  
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#9AADBF',
					100: '#344966',
					200: '#0D1821'
				},
				secondary: {
					100: '#D3B99F',
				},
				accent: {
					100: '#C17767',
				}
			}
		},
	}
};

module.exports = config;
