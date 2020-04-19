import React from "react";

const Hero = ({ children, hero }) => {
  return (
    <header id="home-section" className={hero}>
      {children}
    </header>
  );
};
Hero.defaultProps = {
  hero: "defaultHero"
};

export default Hero;
