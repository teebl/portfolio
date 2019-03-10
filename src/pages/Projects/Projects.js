import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styled from "styled-components";

const StyledProjects = styled.div`
  @media (max-width: 700px) {
    padding-bottom: 100px;
  }
`;

const ProjectsBody = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media (max-width: 1024px) {
    justify-items: center;
  }
`;

const ProjectsTitle = styled.h2`
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const renderProjectCards = projects => (
  <ProjectsBody className="ProjectsBody">
    {Object.values(projects).map((p, i) => (
      <ProjectCard key={i} card={p} />
    ))}
  </ProjectsBody>
);

const Projects = projects => {
  return (
    <StyledProjects>
      <ProjectsTitle>Projects</ProjectsTitle>
      {renderProjectCards(projects)}
    </StyledProjects>
  );
};

export default Projects;
