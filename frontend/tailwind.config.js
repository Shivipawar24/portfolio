/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          bg: '#F2EDE3',       // Warm cream / paper base
          card: '#FAF7F2',     // Slightly lighter warm card background
          pure: '#FFFFFF',     // Clean paper white
          border: '#DED5C6',   // Pencil / craft line
          darker: '#E7DFD0',   // Subtle contrast paper
          subtle: '#EDE6D8',   // Soft section divider
        },
        charcoal: {
          dark: '#24221E',     // Deep ink / charcoal text
          DEFAULT: '#2E2B27',  // Primary dark
          light: '#4A463F',    // Secondary ink
          muted: '#736E66',    // Caption / subtle ink
          faint: '#A6A095',    // Minimal faint borders
        },
        terracotta: {
          DEFAULT: '#B56D4C',  // Warm terracotta accent
          hover: '#9E5B3D',
          dark: '#854B31',
          light: '#F8EDE7',
          border: '#E8BEA9',
        },
        sage: {
          DEFAULT: '#A5A88B',  // Muted sage secondary
          hover: '#919477',
          dark: '#73775B',
          light: '#F0F2E9',
          border: '#CED1BC',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', '"Kalam"', 'cursive'],
        sketch: ['"Kalam"', 'cursive'],
      },
      boxShadow: {
        'paper-sm': '0 2px 6px -1px rgba(36, 34, 30, 0.05), 0 1px 3px -1px rgba(36, 34, 30, 0.04)',
        'paper-md': '0 4px 16px -2px rgba(36, 34, 30, 0.07), 0 2px 6px -2px rgba(36, 34, 30, 0.04)',
        'paper-lg': '0 12px 32px -4px rgba(36, 34, 30, 0.09), 0 4px 12px -2px rgba(36, 34, 30, 0.05)',
        'sketch': '3px 3px 0px 0px #24221E',
        'sketch-terracotta': '3px 3px 0px 0px #B56D4C',
        'sketch-sage': '3px 3px 0px 0px #A5A88B',
      },
      backgroundImage: {
        'paper-grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
