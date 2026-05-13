/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: {    
    extend: {
      keyframes: {
    'color-fade': {
      '0%': { color: '#000' },
      '50%': { color: '#ff6600' },
      '100%': { color: '#000' },
    },
  },
  animation: {
    'color-fade': 'color-fade 3s ease-in-out infinite',
  },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
         fontSize:{
        'button': 'clamp(14px, 3.5vw, 18px)',
        'para': 'clamp(1.2em, 1.2vw + 0.2em, 1.3em)',
        'heading1': 'clamp(4em, 8vw + 0.5em, 10em)',
        'heading2': 'clamp(2.4em, 4vw + 0.5em, 4.5em)',
        'heading3': 'clamp(1em, 2vw + 0.2em, 2.8em)',
        'display': 'clamp(3em, 5vw + 1vw, 6em)',
        'footer': 'clamp(40px, 9vw, 80px)',
      },
       zIndex:{
        'preloader': '9999',
        'header': '999',
        
      },
      colors:{
        'brand-white':"#E5F0FE",
        'brand-black':"#01141F",
        'brand-accent':"#AAE263", //accent for links, hover state 
        'brand-accent2':'#A2CB8B',  
        'brand-secondary':"#1A3526",
      },
      fontFamily:{
        'custom': ["var(--font-custom)", "serif"],
        'custom2': ["var(--font-custom2)", "serif"],
        'body': ["var(--font-body)", "sans-serif"],
        // 'custom2': ["var(--font-lora)", "sans-serif"],
        'univers': ['"Univers LT Std"', 'sans-serif'],
        'custom-condensed':['NewSpiritCondensed','Helvetica_Neue', 'Helvetica'],
        // 'body':['Helvetica_Neue, Helvetica'],
        // 'custom':['bebas','Helvetica_Neue', 'Helvetica'],
      }
    },
  },
  plugins: [],
};
