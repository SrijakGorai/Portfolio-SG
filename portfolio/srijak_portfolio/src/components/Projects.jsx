import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Collapse,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  GitHub,
  Launch,
} from "@mui/icons-material";
import {
  SiSpringboot,
  SiReact,
  SiMysql,
  SiMongodb,
  SiAxios,
  SiJsonwebtokens,
  SiGoogle,
  SiVite,
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; // ✅ Valid Java icon

// Tech icons mapping
const techIcons = {
  SpringBoot: <SiSpringboot size={20} title="Spring Boot" />,
  React: <SiReact size={20} title="React.js" />,
  MySQL: <SiMysql size={20} title="MySQL" />,
  MongoDB: <SiMongodb size={20} title="MongoDB" />,
  Axios: <SiAxios size={20} title="Axios" />,
  JWT: <SiJsonwebtokens size={20} title="JWT" />,
  Gemini: <SiGoogle size={20} title="Gemini API" />,
  Vite: <SiVite size={20} title="Vite" />,
  Java: <FaJava size={20} title="Java" />, // ✅ Corrected here
};

const projects = [
  {
    title: "👨‍💼 Employee Information System",
    description:
      "A secure Employee Management System with JWT-based login, role-based access, and full employee CRUD features.",
    details:
      "Built using Spring Boot and React.js, this system supports secure login, JWT authentication, role-based routing, and persistent employee data stored in MySQL.",
    techStack: ["Java", "SpringBoot", "JWT", "MySQL", "React", "Axios"],
    github: "https://github.com/SrijakGorai/Employee-information-system",
    live: "",
  },
  {
    title: "🧠 Research Assistant",
    description:
      "An AI-based assistant that summarizes long or complex content using the Gemini API.",
    details:
      "Users input text, and the assistant generates clear summaries. Built with a responsive MUI frontend and a Spring Boot backend.",
    techStack: ["SpringBoot", "Gemini", "React", "Axios"],
    github: "https://github.com/SrijakGorai/research-assistant",
    live: "",
  },
  {
    title: "📧 Email Assistant",
    description:
      "Smart email response generator with tone selection (friendly, professional) powered by Gemini API.",
    details:
      "Accepts emails and drafts replies intelligently. Integrates Gemini API via a Spring Boot backend.",
    techStack: ["SpringBoot", "Gemini", "React", "Axios"],
    github: "https://github.com/SrijakGorai/email-writer",
    live: "",
  },
  {
    title: "✅ To-Do List App",
    description:
      "A minimal and powerful to-do app with task CRUD and MySQL persistence.",
    details:
      "Uses React.js frontend with Spring Boot REST backend and Material UI for clean UI.",
    techStack: ["SpringBoot", "MySQL", "React", "Axios"],
    github: "https://github.com/SrijakGorai/To-do-List",
    live: "",
  },
  {
    title: "📦 Stock Management System",
    description:
      "Track material in/out with remaining balance and secure admin/user roles using JWT.",
    details:
      "Includes full material transaction logic with role-based restrictions, real-time remaining calculations, and JWT authentication.",
    techStack: ["SpringBoot", "JWT", "MySQL", "React", "Axios"],
    github: "https://github.com/SrijakGorai/Stock-Management-System",
    live: "",
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box id="projects" sx={{ py: 8, px: { xs: 2, sm: 4 } }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={idx}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
                height: "100%",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  {project.description}
                </Typography>

                <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.techStack.map((tech, i) => (
                    <Tooltip title={tech} key={i}>
                      <Box>{techIcons[tech]}</Box>
                    </Tooltip>
                  ))}
                </Box>

                <Collapse in={expanded === idx} timeout="auto" unmountOnExit>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
                    {project.details}
                  </Typography>
                </Collapse>
              </CardContent>

              <CardActions>
                {project.github && (
                  <IconButton
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub />
                  </IconButton>
                )}
                {project.live && (
                  <IconButton
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Launch />
                  </IconButton>
                )}
                <Button
                  size="small"
                  endIcon={<ExpandMoreIcon />}
                  onClick={() => toggleExpand(idx)}
                >
                  {expanded === idx ? "Less" : "More"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
