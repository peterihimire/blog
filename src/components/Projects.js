import React from "react";
import Title from "./Title";
import TechFilter from "./TechFilter";
import { withProjectConsumer } from "../context";
import ProjectsList from "../components/ProjectsList";

// const projects = props => {
//   return (
//     <section id="project-section" className="projects">
//       <div className="project-center">
//         <Title
//           title1="my"
//           title2="projects"
//           subtitle="Sort projects by technology..."
//         />
//         <TechFilter />

//         <div className="project">
//           {props.portfolios.map(item => {
//             return (
//               <article key={item.id} className="project-card">
//                 <img
//                   src={item.image}
//                   alt="project pix"
//                   className="project-image"
//                 />
//                 <div className="project-body">
//                   <div className="project-text">
//                     <h3>{item.title}</h3>
//                     <p>{item.detail}</p>
//                     <h5>technologies:</h5>
//                     <ul className="project-techs">
//                       {item.technologies.map(tech => {
//                         return <li key={tech}>{tech}</li>;
//                       })}
//                     </ul>
//                   </div>
//                   <div className="project-btns">
//                     <Link to="" className="chrome-btn">
//                       <FaChrome /> project
//                     </Link>
//                     <Link to="" className="github-btn">
//                       <FaGithub /> github
//                     </Link>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

const Projects = ({ context }) => {
  const { sortedProjects, projects } = context;
  return (
    <section id="project-section" className="projects">
      <div className="project-center">
        <Title
          title1="my"
          title2="projects"
          subtitle="Sort projects by technology..."
        />
        <TechFilter projects={projects} />
        <ProjectsList projects={sortedProjects} />
      </div>
    </section>
  );
};

export default withProjectConsumer(Projects);
