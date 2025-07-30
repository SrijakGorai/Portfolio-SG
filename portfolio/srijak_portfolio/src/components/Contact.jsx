import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Paper elevation={3} sx={{ p: 3, maxWidth: 600, mx: "auto" }}>
        <form>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Send Message
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;
