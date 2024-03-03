import { createTheme } from '@mui/material/styles';
import { red, pink , deepPurple } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: pink.A100,
    },
    secondary: {
      main: deepPurple.A100,
    },
    tertiary: {
      main: deepPurple.A700,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
