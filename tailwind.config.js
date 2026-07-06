/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EEF2FF',
          100: '#E0E7FF',
          500: '#4F46E5',
          600: '#4338CA',
        },
        secondary: {
          DEFAULT: '#6366F1',
        },
        accent: {
          DEFAULT: '#8B5CF6',
        },
        ink: {
          DEFAULT: '#111827',
          soft: '#6B7280',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #8B5CF6 100%)',
        'page-gradient':
          'linear-gradient(180deg, #FFFFFF 0%, #F8F7FF 25%, #F3F6FF 50%, #EEF4FF 75%, #FFFFFF 100%)',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(79, 70, 229, 0.15)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
        glow: '0 0 30px rgba(139, 92, 246, 0.35)',
      },
      borderRadius: {
        card: '24px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(4deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.97)' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 5s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        wave: 'wave 18s linear infinite',
      },
    },
  },
  plugins: [],
}
