import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function Principal() {
  return ( 
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default Principal;