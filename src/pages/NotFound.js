import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const NotFound = props => {
  return (
    <>
      <Navbar />
      <Hero>
        <Banner name="404" title="page not found">
          <Link to="/" className="btn">
            return home
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default NotFound;
