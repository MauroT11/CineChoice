/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#373A40",
          "secondary": "#686D76",
          "accent": "#DC5F00",
          "neutral": "#d1d5db",
          "base-100": "#f3f4f6",
          "info": "#3b82f6",
          "success": "#00ff00",
          "warning": "#fff308",
          "error": "#ff0000",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
