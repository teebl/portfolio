import React from "react";
import styled from "styled-components";
import ProgressiveImage from "../../components/ProgressiveImage";
import SvgProfile from "../../resources/svg/placeProfile.js";

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

const ProfilePicture = styled.div`
  display: block;
  margin: auto;
  height: 300px;
  width: 300px;
  overflow: hidden;
  border-radius: 300px;
  border: 1px solid black;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 700px) {
    max-height: 200px;
    max-width: 200px;
  }
`;

const SynopsisText = styled.div`
  padding: 2px;
`;

const Home = ({ description, image, name }) => {
  const srcProfilePic = process.env.PUBLIC_URL + image;

  return (
    <StyledHome>
      <ProfilePicture alt="Trevor">
        <ProgressiveImage
          srcImage={srcProfilePic}
          SvgPlaceholder={SvgProfile}
        />
      </ProfilePicture>
      <SynopsisText>
        <h2>{name}</h2>
        <h3>{description}</h3>
      </SynopsisText>
    </StyledHome>
  );
};

export default Home;
