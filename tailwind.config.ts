import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4169E1', // Updated brand color
          dark: '#2563EB',
        },
      },
      fontFamily: {
        'brand': ['Inter', 'system-ui', 'sans-serif'], // More professional font
      },
      spacing: {
        'nav-item': '32px', // Standardized spacing
      },
    },
  },
  plugins: [],
}

export default config
