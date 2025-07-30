import React from "react";
import { Container, Box } from "@mui/material";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";



const App = ({ toggleTheme, mode }) => {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} mode={mode} />
      <Box component="main" sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Resume />
          <Contact />
        </Container>
      </Box>
      <Footer /> {/* ✅ Add the footer here */}
    </>
  );
};

export default App;
