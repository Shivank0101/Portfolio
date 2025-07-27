/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob1: "blob1 20s infinite",
        blob2: "blob2 25s infinite",
        blob3: "blob3 30s infinite",
        flicker: 'flicker 2s infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blob1: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(30px, -50px) scale(1.1)" },
        },
        blob2: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-20px, 40px) scale(1.05)" },
        },
        blob3: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-50px, -30px) scale(1.1)" },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'white' },
        },
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.6)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.6)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
      },
    },
  },
  plugins: [],
}
