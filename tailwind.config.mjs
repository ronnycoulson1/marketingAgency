/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6700', // Primary accent color
          navy: '#1E3A8A',  // Secondary color
          gray: '#64748B',  // Neutral color
        },
      },
    },
  },
  plugins: [],
};
