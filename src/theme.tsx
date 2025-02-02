export const theme = {
    colors: {
      primary: '#0077ff', // Color principal
      secondary: '#ddd000', // Color secundario
      darkprimary: '#222888', // Color principal
      darksecondary: '#aa9900', // Color secundario
      lightprimary: '#55ccff', // Color principal
      lightsecondary: '#ffee00', // Color secundario
      text: '#00aaff', // Color del texto
      background: '#242424', // Fondo general
      white: 'white',
      black: 'black',
    },
  };

  export type Theme = typeof theme;

  export const getColor = (name: keyof typeof theme.colors) =>  ({ theme }: { theme: Theme }) => theme.colors[name];