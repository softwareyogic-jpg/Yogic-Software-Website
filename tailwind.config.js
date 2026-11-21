/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#0A6BDB',
        'deep-navy': '#0B2A5B',
        'brand-navy': '#16396F',
        'midnight': '#071633',
        'sunrise-orange': '#F97D07',
        'amber-gold': '#EDB90A',
        'sun-yellow': '#FFD60A',
        'ink': '#0A0F1C',
        'cloud': '#F6F9FF',
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'blue-flow': 'linear-gradient(135deg, #0A6BDB 0%, #0B2A5B 100%)',
        'sunrise': 'linear-gradient(135deg, #F97D07 0%, #EDB90A 100%)',
        'sunrise-hover': 'linear-gradient(135deg, #E26F00 0%, #DBA800 100%)',
        'dawn-glow': 'radial-gradient(ellipse at 50% -20%, rgba(10, 107, 219, 0.12), rgba(249, 125, 7, 0.08) 50%, transparent 80%)',
        'sun-radiance': 'radial-gradient(circle, rgba(237, 185, 10, 0.18) 0%, rgba(249, 125, 7, 0.08) 40%, transparent 70%)',
        'midnight-mesh': 'radial-gradient(at 0% 0%, rgba(10, 107, 219, 0.18) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(249, 125, 7, 0.12) 0px, transparent 50%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(11, 42, 91, 0.08)',
        'glass-card': '0 20px 40px -15px rgba(11, 42, 91, 0.1)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-sunrise': '0 0 35px -5px rgba(249, 125, 7, 0.35)',
        'glow-blue': '0 0 35px -5px rgba(10, 107, 219, 0.35)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2rem',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
