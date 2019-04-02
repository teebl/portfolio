import React from "react";
import { Route, Switch } from "react-router";
import SlideInOut from "../animations/SlideInOut";

const AnimatedSwitch = (CustomSwitch, AnimationComponent) => ({ children }) => {
  return (
    <Route
      render={({ location }) => {
        return (
          <AnimationComponent pathname={location.pathname}>
            <CustomSwitch location={location}>{children}</CustomSwitch>
          </AnimationComponent>
        );
      }}
    />
  );
};

export default AnimatedSwitch(Switch, SlideInOut);
