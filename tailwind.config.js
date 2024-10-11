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
        schibsted: ['Schibsted Grotesk', 'sans-serif'],
      },
      colors: {
        'rise-green': '#07969E',
      },
      backgroundImage: {
        'custom-radial-gradient':
          'radial-gradient(circle, #FFFFFF 0%, #FFFFFF 20%, #FFF4F0 40%, #F6F2FF 70%, #ECFEFE 100%)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
