import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-zinc-50)', // Light mode bg
        foreground: 'var(--color-zinc-900)',
        muted: 'var(--color-zinc-500)',
        mutedForeground: 'var(--color-zinc-700)',
        border: 'var(--color-zinc-200)',
        nonHover: 'var(--color-zinc-50)',
        hover: 'var(--color-zinc-100)',
        title: 'var(--color-zinc-900)',
        mutedBackground: 'var(--color-zinc-100)',
        mutedBackgroundHover: 'var(--color-zinc-200)',
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(#e4e4e7 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config;