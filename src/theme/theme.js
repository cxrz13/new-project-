import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#7A1E1E',
      contrastText: '#F7F0E4',
    },
    secondary: {
      main: '#D4A017',
    },
    background: {
      default: '#F7F0E4',
      paper: '#FFFDF8',
    },
    text: {
      primary: '#1F1612',
      secondary: '#5C4A3F',
    },
  },
  typography: {
    fontFamily: '"Outfit", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
})

export default theme
