import React from "react";
import Project from "./Project";

const ProjectsList = ({ projects }) => {
  console.log(projects);
  return (
    <div className="project">
      {projects.map(item => {
        return <Project key={item.id} project={item} />;
      })}
    </div>
  );
};

export default ProjectsList;
