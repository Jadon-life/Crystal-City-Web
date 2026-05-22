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
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1d4ed8',
          600: '#1e40af',
          700: '#1e3a8a',
          800: '#1e3060',
          900: '#172554',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
        },
        // Crystal City beverage palette
        crystal: {
          deep: '#02160f',
          forest: '#063a26',
          emerald: '#0a5a37',
          jade: '#10b981',
          mint: '#a7f3d0',
          cherry: '#dc2626',
          berry: '#7f1d1d',
          glow: '#34d399',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        script: ['var(--font-caveat)', 'cursive'],
      },
      animation: {
        'float-can': 'float-can 7s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'float-cherry': 'float-cherry 6s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'rise': 'rise 12s linear infinite',
        'blob': 'blob 18s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'tilt': 'tilt 10s ease-in-out infinite',
      },
      keyframes: {
        'float-can': {
          '0%, 100%': { transform: 'translateY(0) rotate(-8deg)' },
          '50%': { transform: 'translateY(-22px) rotate(-6deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-14px) translateX(6px)' },
        },
        'float-cherry': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(8px, -14px) rotate(8deg)' },
          '66%': { transform: 'translate(-6px, -8px) rotate(-6deg)' },
        },
        'rise': {
          '0%': { transform: 'translateY(20vh) scale(0.6)', opacity: '0' },
          '15%': { opacity: '0.6' },
          '85%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-110vh) scale(1.1)', opacity: '0' },
        },
        'blob': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.08)' },
          '66%': { transform: 'translate(-30px, 25px) scale(0.95)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.55', filter: 'blur(60px)' },
          '50%': { opacity: '0.85', filter: 'blur(80px)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'tilt': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
