import React from "react";
import { Box, Typography, IconButton, Stack, Link } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        px: 2,
        backgroundColor: "background.paper",
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <IconButton
          component={Link}
          href="mailto:srijakgoraiofficial20@gmail.com"
          color="inherit"
        >
          <MdEmail size={24} />
        </IconButton>

        <IconButton
          component={Link}
          href="tel:+918250344087"
          color="inherit"
        >
          <MdPhone size={24} />
        </IconButton>

        <IconButton
          component={Link}
          href="https://github.com/SrijakGorai"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <FaGithub size={24} />
        </IconButton>

        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/srijak-gorai-6b5150261/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <FaLinkedin size={24} />
        </IconButton>
      </Stack>

      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Srijak Gorai. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
