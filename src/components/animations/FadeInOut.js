import React from "react";
import { Spring, config } from "react-spring/renderprops";
import styled from "styled-components";

const SpringWrapper = styled(Spring)`
  height: inherit;
  margin: 0px 40px 0px 150px;
  background-color: blue;
  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-row-start: 2;
    margin: 20px 0px 80px 0px;
    padding: 0px;
  }
`;

class FadeInOut extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  componentWillUnmount() {
    this.setState({ loaded: false });
  }

  render() {
    return (
      <SpringWrapper
        to={{
          transform: this.state.loaded ? "translateY(0)" : "translateY(-100%)"
        }}
        style={{ height: "100%", width: "100%" }}
        config={config.default}
      >
        {props => <div style={props}>{this.props.children}</div>}
      </SpringWrapper>
    );
  }
}

export default FadeInOut;
