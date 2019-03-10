import React from "react";
import styled from "styled-components";

const StyledProjectCard = styled.div`
  width: 300px;
  margin: 20px 0px;
  padding: 20px 0px;
`;

const ProjectCardImage = styled.div`
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  margin: auto;
  width: 300px;
  height: 169px;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: lightgrey;
`;

const StyledImage = styled.img`
  width: 300px;
  height: 169px;
`;

const Title = styled.h3`
  font-weight: lighter;
`;

const Summary = styled.h4`
  color: grey;
`;

const Body = styled.div`
  color: grey;
  font-size: 0.8em;
`;

const Tag = styled.div`
  padding: 3px;
  margin: 3px;
  display: inline-block;
  font-size: 12px;
  color: grey;
  border: 1px solid lightgrey;
  line-height: 100%;
`;

function ProjectCard(props) {
  const card = props.card;
  const thumbnail = process.env.PUBLIC_URL + card.thumbnail;
  const profileClassName = props.profileClassName;
  return (
    <StyledProjectCard>
      <ProjectCardImage>
        <a href={card.link} target="_blank">
          <StyledImage src={thumbnail} alt={card.title + " thumbnail"} />
        </a>
      </ProjectCardImage>
      <Title>{card.title}</Title>
      <Summary>{card.summary}</Summary>
      <Body className={profileClassName + " ProjectCardBody"}>
        {card.body.map(p => (
          <p>{p}</p>
        ))}
      </Body>
      {card.tags.map(t => (
        <Tag className={profileClassName + " ProjectCardTag"}>{t}</Tag>
      ))}
    </StyledProjectCard>
  );
}

export default ProjectCard;
