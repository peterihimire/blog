import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const NotFound = props => {
  return (
    <>
      <Navbar />
      <Hero>
        <Banner name="404" title="page not found" />
      </Hero>
    </>
  );
};

export default NotFound;
