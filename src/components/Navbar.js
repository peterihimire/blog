import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaCog,
  FaEnvelope,
  FaBlog,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaAlignRight
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/l7.svg";

const navbar = props => {
  return (
    <>
      <div
        onClick={props.overlay}
        className={
          props.showNav ? "navbar-overlay transparent-bg " : "navbar-overlay"
        }
      />
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="logo">
              <img src={logo} alt="PeterIhimire logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              // onClick={this.toggleHandler}
              onClick={props.clicked}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>

          {/* <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}> */}
          <ul className={props.showNav ? "nav-links show-nav " : "nav-links"}>
            <li>
              <Link to="/">
                <FaHome className="link-icon home-color" /> home
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaInfoCircle className="link-icon info-color" /> about
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaBriefcase className="link-icon brief-color" /> portfolio
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaCog className="link-icon cog-color" /> skills
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaBlog className="link-icon blog-color" /> blog
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaEnvelope className="link-icon env-color" /> contact
              </Link>
            </li>
          </ul>

          <ul className="follow-links">
            <li className="follow-container">
              <div className="follow-icon-container1 ">
                <Link to="/">
                  <FaFacebookF className="follow-icon FaFacebookF" />
                </Link>
              </div>
            </li>
            <li className="follow-container">
              <div className="follow-icon-container2">
                <Link to="/">
                  <FaTwitter className="follow-icon FaTwitter" />
                </Link>
              </div>
            </li>
            <li className="follow-container">
              <div className="follow-icon-container3">
                <Link to="/">
                  <FaInstagram className="follow-icon FaInstagram" />
                </Link>
              </div>
            </li>
            <li className="follow-container">
              <div className="follow-icon-container4">
                <Link to="/">
                  <FaLinkedinIn className="follow-icon FaLinkedinIn" />
                </Link>
              </div>
            </li>
            <li className="follow-container">
              <div className="follow-icon-container5">
                <Link to="/">
                  <FaGithub className="follow-icon FaGithub" />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default navbar;
