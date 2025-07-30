import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const About = () => {
  return (
    <Box id="about" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="body1">
          I'm a passionate full stack developer experienced in building web applications with React, Spring Boot, and modern UI libraries. I enjoy turning complex problems into simple, beautiful interfaces and efficient backend systems.
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;
