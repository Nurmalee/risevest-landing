/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
				screens: {
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1280px',
					'2xl': '1536px',
				},
			},
			fontFamily: {
				bricolage: ['Bricolage Grotesque', 'sans-serif'],
				playwrite: ['Playwrite IT Moderna', 'cursive'],
				poppins: ['Poppins', 'sans-serif'],
				roboto: ['Roboto Slab', 'serif'],
				abel: ['Abel', 'sans-serif'],
			},
			colors: {
				riseGreen: '#07969E',
			},
		},
	},
	plugins: [tailwindcssAnimate],
}
