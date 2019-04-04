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

const renderBody = body => (
  <Body>
    {body.map((p, i) => (
      <p key={i}>{p}</p>
    ))}
  </Body>
);

const renderTags = tags => tags.map(t => <Tag key={t}>{t}</Tag>);

function ProjectCard(props) {
  const { body, link, summary, tags, thumbnail, title } = props.card;
  const thumbnailAddress = process.env.PUBLIC_URL + thumbnail;

  return (
    <StyledProjectCard key={link}>
      <ProjectCardImage>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <StyledImage src={thumbnailAddress} alt={`${title} thumbnail`} />
        </a>
      </ProjectCardImage>
      <Title>{title}</Title>
      <Summary>{summary}</Summary>
      {renderBody(body)}
      {renderTags(tags)}
    </StyledProjectCard>
  );
}

export default ProjectCard;
