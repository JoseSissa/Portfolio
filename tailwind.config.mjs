/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        backgroundSecondary: 'var(--background-secondary)',
        backgroundThird: 'var(--background-third)',
        colorPrimary: 'var(--color-primary)',
        colorSecondary: 'var(--color-secondary)',
        myBlue: 'var(--blue)',
        myBlue2: 'var(--blue2)',
        borderBox: 'var(--border-box)',
        borderBoxActive: 'var(--border-box-active)'
      }
    }
  },
  plugins: []
}
