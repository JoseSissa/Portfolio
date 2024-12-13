/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        colorPrimary: 'var(--color-primary)',
        test1: 'var(--test-1)'
      }
    }
  },
  plugins: []
}
