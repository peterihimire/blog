import React from "react";
import { Link } from "react-router-dom";
import {
  // FaFacebook,
  // FaTwitter,
  // FaInstagram,
  // FaLinkedin,
  // FaGithub,
  // FaEnvelope,
  FaArrowAltCircleDown
} from "react-icons/fa";

const Banner = ({ name, title }) => {
  return (
    <div className="banner">
      <h1>{name}</h1>
      <p>{title}</p>
      {/* <div /> */}
      <ul>
        <li>
          {/* <Link to="https://facebook.com/ihimirepeter" target="_blank" className='banner-follow'>
              <FaFacebook />
            </Link> */}
        </li>
        <li>
          {/* <Link to="https://twitter.com/ptechanalysis" target="_blank" className='banner-follow'>
              <FaTwitter />
            </Link> */}
        </li>
        <li>
          {/* <Link to="https://instagram.com/peterihimire" target="_blank" className='banner-follow'>
              <FaInstagram />
            </Link> */}
        </li>
        <li>
          {/* <Link to="https://www.linkedin.com/in/peter-ihimire-20b007162" target="_blank" className='banner-follow'>
              <FaLinkedin />
            </Link> */}
        </li>
        <li>
          {/* <Link to="https://github.com/peterihimire" target="_blank" className='banner-follow'>
              <FaGithub />
            </Link> */}
        </li>
      </ul>

      <Link to="#contact" className="btn">
        see my work
      </Link>

      <Link to="#feature-section" className="indicator">
        <FaArrowAltCircleDown />
      </Link>
    </div>
  );
};

export default Banner;
