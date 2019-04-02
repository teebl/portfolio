import React, { Component } from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { BrowserRouter, Route } from "react-router-dom";
import ScrollToTop from "./components/hoc/ScrollToTop";
import NextProfileButton from "./components/NextProfileButton";
import AnimatedSwitch from "./components/hoc/AnimatedSwitch";

export const LOCATIONS = [
  { path: "/portfolio" },
  { path: "/portfolio/About" },
  { path: "/portfolio/Projects" },
  { path: "/portfolio/Contact" }
];

const StyledApp = styled.div`
  height: 100%;

  @media (max-width: 700px) {
    padding: 0px 10px;
    grid-gap: 10px;
    text-align: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const Content = styled.div`
  overflow: hidden;
  height: 100vh;
  margin: 0px 40px 0px 150px;
  display: grid;

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-row-start: 2;
    margin: 20px 0px 80px 0px;
    padding: 0px;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress() {
    this.props.nextProfilePress();
  }

  render() {
    const { data } = this.props;
    const index = data.currentProfileIndex;
    const { home, about, projects, contact } = data.profiles[index];
    return (
      <BrowserRouter>
        <ScrollToTop>
          <StyledApp>
            <NextProfileButton buttonPress={this.buttonPress} />
            <Navbar buttonPress={this.buttonPress} />
            <Content>
              <AnimatedSwitch>
                <Route
                  exact
                  path="/portfolio"
                  render={() => <Home {...home} />}
                />
                <Route
                  path="/portfolio/About"
                  render={() => <About {...about} />}
                />
                <Route
                  path="/portfolio/Projects"
                  render={() => <Projects {...projects} />}
                />
                <Route
                  path="/portfolio/Contact"
                  render={() => <Contact {...contact} />}
                />
              </AnimatedSwitch>
            </Content>
          </StyledApp>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
