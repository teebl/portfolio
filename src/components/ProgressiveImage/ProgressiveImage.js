import React from "react";
import styled from "styled-components";
import withinIntersectionObserver from "../hoc/withinIntersectionObserver";
import FadeOut from "../hoc/FadeOut";

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  transform: scale(1.1);
  transition: opacity 8s ease-in-out;
  top: 0;
  left: 0;
  position: ${({ full }) => (full ? "absolute" : "relative")};
`;

class ProgressiveImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
      wrapper: false
    };
  }

  componentWillMount() {
    this._mounted = true;
  }

  componentWillReceiveProps({ intersecting }) {
    if (intersecting && !this._triggered) {
      this._triggered = true;
      const buffer = new Image();
      buffer.onload = () => this._mounted && this.setState({ ready: true });
      buffer.src = this.props.srcImage;
    }
  }

  renderThumbnail = (ready, srcThumbnail) => {
    return (
      <FadeOut toggle={ready}>
        <StyledImage ready={ready} src={srcThumbnail} />
      </FadeOut>
    );
  };

  render() {
    const { srcImage, srcThumbnail } = this.props;
    const { ready } = this.state;
    return (
      <ImageWrapper>
        <StyledImage full src={srcImage} />
        {this.renderThumbnail(ready, srcThumbnail)}
      </ImageWrapper>
    );
  }
}

ProgressiveImage.defaultProps = {
  srcImage: process.env.PUBLIC_URL + "/images/profile.jpg",
  srcThumbnail: process.env.PUBLIC_URL + "/images/profile-thumb.svg"
};

export default withinIntersectionObserver(ProgressiveImage);
