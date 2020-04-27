import React from "react";
import { Link } from "react-router-dom";
import { FaChrome, FaGithub } from "react-icons/fa";

const Project = ({ project }) => {
  const { image, title, detail, technologies } = project;
  console.log(project);

  return (
    <article className="project-card">
      <img src={image} alt="project pix" className="project-image" />
      <div className="project-body">
        <div className="project-text">
          <h3>{title}</h3>
          <p>{detail}</p>
          <h5>technologies:</h5>
          <ul className="project-techs">
            {technologies.map(tech => {
              return <li key={tech}>{tech}</li>;
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
};
export default Project;
