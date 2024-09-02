import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Special Elite', ...fontFamily.sans],
      },
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#9B723B',
        muted: '#212529', // Updated this line
        'custom-gold': '#9B723B',
        'custom-dark': '#222',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      maxWidth: {
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
      },
    },
  },
  plugins: [],
};

export default config;
