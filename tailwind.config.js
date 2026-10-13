/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        eval: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // Emerald
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        metric: {
          emerald: '#10b981',
          rose: '#f43f5e',
          amber: '#f59e0b',
          cyan: '#06b6d4',
          indigo: '#6366f1'
        },
        dark: {
          950: '#06080d',
          900: '#0b0e17',
          850: '#111522',
          800: '#171d2e',
          750: '#20273c',
          700: '#2b344e',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
