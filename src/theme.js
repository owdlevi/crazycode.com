const theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#000',
    containerbg: '#fff',
    shadow: 'rgba(0, 0, 0, .08)',
    logo: '#c00',
    footer: '#e2e2e2',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#fff',
        containerbg: '#000',
        shadow: 'rgba(255, 255, 255, 0.2)',
        footer: '#212121',
      }
    }
  },
  full: {
    backgroundColor: 'containerbg',
    maxWidth: '100%',
    padding: [ 2,3,4],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navlink: {
    fontSize: 2,
    color: 'primary',
    textDecoration: 'none'
  },
}

export default theme