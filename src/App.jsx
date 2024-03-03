import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {createTheme,ThemeProvider} from '@mui/material/styles'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {green, purple} from '@mui/material/colors'

// const theme = createTheme({
//   palette: {
//     primary: green,
//     secondary: purple,
//   },
// });

export default function App() {
  return (
    //<ThemeProvider theme={theme}>
    <Container sx={{
      backgroundImage: "url('bgpink.avif')",
      backgroundPosition: 'top left',
      backgroundRepeat: "no-repeat",
      backgroundSize: '7000 px 7000px',
      height: '100vh',
      width: '100vh',
    }}>
      <Box sx={{ my: 4}}>
        <Typography variant="h2" color = "secondary" component="h1" margin='dense' sx={{ mb: 2 }}>
          ~ Queerhunt ~
        </Typography>
        <Stack spacing={2}>
          <Box>
            <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" size="small" color="secondary"/>
          </Box>
          <Box>
            <TextField id="outlined-basic" label="Password" variant="outlined" margin="dense" size="small" color="secondary"/>
          </Box>
          <Box>
            <Button color="primary" variant="contained">Sign-In</Button>
          </Box>
        </Stack> 
      </Box>
    </Container>
    //</ThemeProvider>
  );
}