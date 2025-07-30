// src/components/Education.jsx
import React from "react";
import { Box, Typography, Divider, List, ListItem, ListItemText } from "@mui/material";

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Asansol Engineering College(MAKAUT)",
    year: "2022 - 2026",
    details: "CGPA: 7.95/10(upto 6th Sem)"
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Asansol OLD Station High School",
    year: "2020 - 2022",
    details: "Percentage: 94.4%"
  },
  {
    degree: "Secondary (10th)",
    institution: "Asansol RamaKrishna Mission High School",
    year: "20111 - 2020",
    details: "Percentage: 93%"
  }
];

const Education = () => {
  return (
    <Box sx={{ my: 6 }}>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <List>
        {educationData.map((edu, index) => (
          <ListItem key={index} alignItems="flex-start" sx={{ mb: 2 }}>
            <ListItemText
              primary={`${edu.degree} – ${edu.institution}`}
              secondary={
                <>
                  <Typography variant="body2" color="textSecondary">
                    {edu.year}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {edu.details}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Education;
