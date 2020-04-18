import React from "react";
import Title from "../components/Title";

import { Link } from "react-router-dom";
import { FaChrome, FaGithub } from "react-icons/fa";

const portfolio = props => {
  return (
    <section className="projects">
      <div className="project-center">
        <Title
          title1="my"
          title2="portfolio"
          subtitle="Check out some of my projects..."
        />
        <div className="project">
          {props.portfolios.map((item, index) => {
            return (
              <article key={index} className="project-card">
                <img
                  src={item.image}
                  alt="project pix"
                  className="project-image"
                />
                <div className="project-body">
                  <div className="project-text">
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                    <h5>technologies:</h5>
                    <ul className="project-techs">
                      {item.technologies.map((tech, index) => {
                        return <li key={index}>{tech}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="project-btns">
                    <Link to="" className="chrome-btn">
                      <FaChrome /> project
                    </Link>
                    <Link to="" className="github-btn">
                      <FaGithub /> github
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default portfolio;
