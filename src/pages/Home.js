import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Porfolio";
import Skill from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner name="peter ihimire" title="web developer" />
      </Hero>
      <Services />
      <About />
      <Portfolio />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
