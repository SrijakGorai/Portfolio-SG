import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box sx={{ textAlign: "center", py: 10 }} id="hero">
      <Typography variant="h3" gutterBottom>
        Hello, I'm Srijak
      </Typography>
      <Typography variant="h6" gutterBottom>
        Full Stack Developer | React | Spring Boot
      </Typography>
      <Button variant="contained" color="primary" href="#contact">
        Get In Touch
      </Button>
    </Box>
  );
};

export default Hero;
