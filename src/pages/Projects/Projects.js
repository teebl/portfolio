import React, { Component } from "react";
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

export default class Projects extends Component {
  render() {
    return (
      <StyledProjects>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsBody className="ProjectsBody">
          {this.props.projects.map(p => (
            <ProjectCard
              card={p}
              profileClassName={this.props.profileClassName}
            />
          ))}
        </ProjectsBody>
      </StyledProjects>
    );
  }
}
