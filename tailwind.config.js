/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffef0',
          100: '#fefbc8',
          200: '#fef389',
          300: '#fde347',
          400: '#f6cb15',
          500: '#e5b209',
          600: '#c58d04',
          700: '#9d6806',
          800: '#80510c',
          900: '#6c420e',
          metallic: '#D4AF37',
          light: '#F3E5AB',
          rich: '#AA771C',
          bright: '#FFDF73',
          dark: '#5B4010',
        },
        obsidian: {
          950: '#030305',
          900: '#07080b',
          850: '#0c0d12',
          800: '#12141a',
          750: '#181b24',
          700: '#202430',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel Decorative"', '"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFE27D 0%, #D4AF37 50%, #8C6514 100%)',
        'gold-metallic-gradient': 'linear-gradient(90deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(7, 8, 11, 0.98) 75%)',
        'card-gradient': 'linear-gradient(180deg, rgba(28, 24, 18, 0.6) 0%, rgba(12, 13, 18, 0.9) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.2)' },
          '100%': { textShadow: '0 0 25px rgba(212, 175, 55, 0.8), 0 0 45px rgba(254, 243, 137, 0.5)' },
        }
      },
      boxShadow: {
        'gold-sm': '0 0 12px rgba(212, 175, 55, 0.2)',
        'gold-md': '0 0 25px rgba(212, 175, 55, 0.35)',
        'gold-lg': '0 0 45px rgba(212, 175, 55, 0.45)',
        'gold-glow': '0 0 60px rgba(245, 208, 97, 0.25)',
      }
    },
  },
  plugins: [],
}

