module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        brand: {
          dark: '#07111F',
          primary: '#2563EB',
          cyan: '#00D2FF',
          accent: '#F97316',
          surface: '#F8FAFC',
          muted: '#EEF4FA',
          ink: '#0F172A',
          secondary: '#64748B',
        },
        space: {
          DEFAULT: '#07111F',
          graphite: '#0B1626',
        },
        spectral: '#F8FAFC',
        neon: {
          orange: '#F97316',
          blue: '#00D2FF',
        },
        violet: {
          deep: '#172554',
        },
      },
      fontFamily: {
        display: ['Outfit', 'Manrope', 'sans-serif'],
        body: ['Manrope', 'Inter', 'Plus Jakarta Sans', 'sans-serif'],
        futuristic: ['Orbitron', 'Space Grotesk', 'Syncopate', 'Syne', 'sans-serif'],
      },
      transitionTimingFunction: {
        'cyber-fluid': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem'
        }
      }
    },
  },
  plugins: [],
}
