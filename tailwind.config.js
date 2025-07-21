/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'gray': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#171717',
            lineHeight: '1.75',
            fontSize: '1.125rem',
            h1: {
              color: '#000000',
              fontWeight: '700',
              fontSize: '2.25rem',
              marginBottom: '1rem',
            },
            h2: {
              color: '#000000',
              fontWeight: '600',
              fontSize: '1.875rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              color: '#000000',
              fontWeight: '600',
              fontSize: '1.5rem',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            a: {
              color: '#000000',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: '#404040',
              },
            },
            blockquote: {
              borderLeftColor: '#d4d4d4',
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#525252',
            },
            code: {
              backgroundColor: '#f5f5f5',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}