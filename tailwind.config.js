/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'active', // this preserves the `activeClass` styles from react-scroll
    'text-[#529d7c]', // explicitly safelist this
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#FAF9F6',
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
      },
    },
  },
  corePlugins: {
    // Enable transform utilities
    transform: true,
  },
  plugins: [],
}