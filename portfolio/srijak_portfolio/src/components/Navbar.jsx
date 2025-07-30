import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SRUJAK GORAI
        </Typography>
        <Box>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#skills">Skills</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Box>
        <Tooltip title="Toggle light/dark theme">
          <IconButton onClick={toggleTheme} sx={{ ml: 2 }} color="inherit">
            {isDark ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
