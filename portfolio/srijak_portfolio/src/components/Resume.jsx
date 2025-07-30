import React from "react";
import { Box, Typography, Button } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";

const Resume = () => {
  return (
    <Box sx={{ my: 6, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        My Resume
      </Typography>

      <Button
        variant="contained"
        color="primary"
        startIcon={<GetAppIcon />}
        href="/SRIJAK_CV.pdf"
        download
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default Resume;
