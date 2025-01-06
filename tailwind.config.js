/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": 'selector',
  theme: {
    extend: {
      spacing: {
        '-40': '-40px', // Margen negativo personalizado, esto me permite usar margenes negavitos, al parecer puedo colocar cualquier valor y funciona!
      },
      margin: generatePixel(),
      padding: generatePixel(),
      width: generatePixel(),
      height: generatePixel(),
      minHeight: generatePixel(),
      minWidth: generatePixel(),
      maxWidth: generatePixel(),
      fontSize: generatePixel(),
      letterSpacing: generatePixel(),
      borderColor: generatePixel(),
      borderRadius: generatePixel(),
      gap: generatePixel(),
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      screens: {
        'md': '768px',
        'lg': '1080px',
        'xl': '1360px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '*': {
          margin: '0',
          padding: '0',
          boxSizing: 'border-box',
        },
      });
    },
  ],
}

// El propósito principal de esta función es generar dinámicamente clases de utilidad de altura en Tailwind CSS, permitiendo especificar alturas en píxeles de manera más precisa y flexible.
function generatePixel() {
  const pixels = {};
  for (let i = 1; i <= 1000; i++) { 
    pixels[i] = `${i}px`;
  }
  return pixels;
}