import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import { makeStyles } from '@mui/material/styles';

// const useStyles = makeStyles({
//     appbar:{
//         backgroundColor: 'red',
//         color: 'white',
//         fontSize: '20px',
//         width: '100%'
//     }
// })



export default function Header() {
  //const classes = useStyles();
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Keepr
            </Typography>
            <Button color="inherit">Notes</Button>
            <Button color="inherit">Create</Button>
          </Toolbar>
        </AppBar>
      </Box>
      </header>
  );
};
