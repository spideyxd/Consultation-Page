import * as React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function LogoHeader(props) {  
  return (
    <ThemeProvider theme={theme}>
      <AppBar color="transparent" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: {  sm: 'block' } }}
          >
            MUI
          </Typography>
          
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default LogoHeader;
