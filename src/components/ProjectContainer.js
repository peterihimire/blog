import React from "react";
import TechFilter from "./TechFilter";
import Loading from "../components/Loading";
import { withProjectConsumer } from "../context";

const ProjectContainer = ({ context }) => {
  const { loading, sortedProjects, projects } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <TechFilter projects={projects} />
      <Projects projects={sortedProjects} />
    </>
  );
};

export default withProjectConsumer(ProjectContainer);
