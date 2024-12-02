module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Asegúrate de que esta ruta esté bien configurada
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f7c4c4',
          200: '#f17f7f',
        },
        secondary: {
          100: '#c4c7f7',
          200: '#7f80f1',
        },
        success: {
          100: '#c8f7c4',
          200: '#7ff17f',
        },
        danger: {
          100: '#f7c4c4',
          200: '#f17f7f',
        },
        warning: {
          100: '#f7eac4',
          200: '#f1e17f',
        },
        info: {
          100: '#c4f7f7',
          200: '#7ff1f1',
        },
        light: {
          100: '#f4f4f4',
          200: '#dcdcdc',
        },
        dark: {
          100: '#333333',
          200: '#111111',
        },
      },
    },
  },
  plugins: [],
}
