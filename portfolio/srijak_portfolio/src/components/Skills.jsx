import React from "react";
import Slider from "react-slick";
import { Box, Typography, Paper } from "@mui/material";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiC, SiCplusplus } from "react-icons/si";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skillIcons = [
  { icon: <FaReact size={50} />, label: "React" },
  { icon: <FaJava size={50} />, label: "Java" },
  { icon: <SiSpringboot size={50} />, label: "Spring Boot" },
  { icon: <FaHtml5 size={50} />, label: "HTML5" },
  { icon: <FaCss3Alt size={50} />, label: "CSS3" },
  { icon: <FaJs size={50} />, label: "JavaScript" },
  { icon: <SiMysql size={50} />, label: "MySQL" },
  { icon: <SiC size={50} />, label: "C" },
  { icon: <SiCplusplus size={50} />, label: "C++" },
  { icon: <FaGitAlt size={50} />, label: "Git" },
];

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box id="skills" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Skills
      </Typography>
      <Slider {...settings}>
        {skillIcons.map((skill, index) => (
          <Box key={index} sx={{ px: 2 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                backgroundColor: "background.paper",
              }}
            >
              {skill.icon}
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                {skill.label}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Skills;
