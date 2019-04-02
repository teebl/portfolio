import React from "react";
import styled from "styled-components";
import withinIntersectionObserver from "../hoc/withinIntersectionObserver";
import FadeOut from "../animations/FadeOut";

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
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

  renderPlaceholder = (ready, SvgPlaceholder) => {
    return (
      <FadeOut toggle={ready}>
        <SvgPlaceholder />
      </FadeOut>
    );
  };

  render() {
    const { srcImage, SvgPlaceholder } = this.props;
    const { ready } = this.state;
    return (
      <div>
        <ImageWrapper>
          <StyledImage full src={srcImage} />
          {this.renderPlaceholder(ready, SvgPlaceholder)}
        </ImageWrapper>
      </div>
    );
  }
}

ProgressiveImage.defaultProps = {};

export default withinIntersectionObserver(ProgressiveImage);
