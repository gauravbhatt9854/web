/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'], // Define custom font
        inter: ['Inter', 'sans-serif'], // Define Inter font
      },
      colors: {
        'c-blue': '#071952',
        'c-pel-blue': '#61AFE4',
        'c-white': '#F4FAFC',
        'c-brown': '#970944',
        'apple-red': "#FF5F6D",
        "leaf-green": "#2CBB01",
        "c-yellow": "#FFCC00",
        "dark-green": "#0D5B5E",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 10px 2px rgba(0, 123, 255, 0.7)', // Customize the glow color and intensity
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px", // Standard single breakpoint
        "custom": { min: "768px", max: "894px" }, // Custom range with min and max
        '905':{min:'0px',max:'905px'}
      },
      animation: {
        'slow-gradient': 'gradient 10s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        'gradient-size': '200% 200%',
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.3)',
        'heavy': '4px 4px 8px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}