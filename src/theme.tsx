export const theme = {
    colors: {
      background: '#242424',
      black: 'black',
      darkprimary: '#1c1c55', 
      darkprimaryt: '#1c1c55ee', 
      darksecondary: '#aa9900', 
      grey: 'grey',
      lightprimary: '#55ccff', 
      lightsecondary: '#ffee00',
      primary: '#0077ff',
      secondary: '#ddd000', 
      tertiary: '#bb0000',
      text: '#00aaff',
      white: 'white',
    },
    media: {
      mobile: '768px',
      tablet: '1020px',
      desktop: '1280px'
    }
  };

  export type Theme = typeof theme;

  export const getColor = (name: keyof typeof theme.colors) =>  ({ theme }: { theme: Theme }) => theme.colors[name];