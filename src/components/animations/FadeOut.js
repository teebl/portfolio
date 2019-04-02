import React from "react";
import { useSpring, animated, config } from "react-spring";

const FadeOut = props => {
  const animation = useSpring({
    opacity: props.toggle ? 0 : 1,
    config: config.molasses
  });

  return <animated.div style={animation}>{props.children}</animated.div>;
};

export default FadeOut;
