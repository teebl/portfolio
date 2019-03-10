import React, { Component } from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  height: 100%;
  display: grid;
  margin: auto;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  align-items: center;
  align-content: center;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 700px) {
    justify-items: center;
    grid-template-columns: 1fr;
    padding-bottom: 100px;
  }
`;

const AboutTitle = styled.div`
  grid-column: span 2;
  text-align: center;
  max-width: 150px;
`;

const AboutText = styled.div`
  grid-column: span 4;
  max-width: 800px;
`;

export default class About extends Component {
  render() {
    return (
      <StyledAbout>
        <AboutTitle>
          <h2>About</h2>
        </AboutTitle>
        <AboutText>
          {this.props.about.text.map(p => (
            <p>{p}</p>
          ))}
        </AboutText>
      </StyledAbout>
    );
  }
}
