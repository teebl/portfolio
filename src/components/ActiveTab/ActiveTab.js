import React from "react";
import styled from "styled-components";
import { animated, config, useSpring } from "react-spring";
import { LOCATIONS } from "../../App";
import { withRouter } from "react-router";

const StyledActiveTab = styled(animated.div)`
  border-right: 2px solid black;
  height: 40px;
  right: 0;
  position: absolute;
  @media (max-width: 700px) {
    ${({ collapsed }) => collapsed && "display:none"};
  }
`;

const ActiveTab = props => {
  const pathIndex = LOCATIONS.findIndex(
    item => item.path === props.location.pathname
  );

  const slideAnimation = useSpring({
    top: `${pathIndex * 40}px`,
    config: { tension: 200, friction: 90 }
  });

  return <StyledActiveTab style={slideAnimation} />;
};

export default withRouter(ActiveTab);
