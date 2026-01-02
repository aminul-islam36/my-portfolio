import React from "react";
import Hero from "../Components/Hero";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

const HomePage = () => {
  return (
    <div>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
