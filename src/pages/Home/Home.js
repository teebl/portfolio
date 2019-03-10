import React, { Component } from "react";
import styled from "styled-components";

const StyledHome = styled.div`
  height: 100%;
  display: grid;
  margin: auto;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;

  @media (max-width: 700px) {
    grid-auto-rows: 250px;
    padding: 0;
    grid: 1fr 1fr;
  }

  @media (max-width: 1024px) {
    text-align: center;
    grid-template-columns: 1fr;
  }
`;

const ProfilePicture = styled.img`
  display: block;
  margin: auto;
  height: 300px;
  width: 300px;
  border-radius: 300px;
  border: 1px solid black;
  background-color: lightgrey;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 700px) {
    max-height: 200px;
    max-width: 200px;
  }
`;

const SynopsisText = styled.div`
  padding: 2px;
`;

export default class Home extends Component {
  render() {
    //webpack was not accepting local images on build if their addresses were passed from props
    //this fix works for my needs, but another solution would be necessary should the images be user-specific
    const profilePic = process.env.PUBLIC_URL + this.props.home.image;

    return (
      <StyledHome>
        <ProfilePicture src={profilePic} alt="Trevor" />
        <SynopsisText>
          <h2>{this.props.home.name}</h2>
          <h3>{this.props.home.description}</h3>
        </SynopsisText>
      </StyledHome>
    );
  }
}
