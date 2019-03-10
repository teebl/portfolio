import React, { Component } from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { BrowserRouter, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NextProfileButton from "./components/NextProfileButton";

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
  height: 100%;
  margin: 0px 40px 0px 150px;

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
    const index = this.props.data.currentProfileIndex;
    const currentProfile = this.props.data.profiles[index];
    const profileClassName = currentProfile.profileClassName;

    //nothing to see here
    if (index) {
      document.body.style = "background: red;";
    } else {
      document.body.style = "background: white;";
    }

    return (
      <BrowserRouter>
        <ScrollToTop>
          <StyledApp>
            <NextProfileButton
              buttonPress={this.buttonPress}
              profileClassName={profileClassName}
            />
            <Navbar
              profile={currentProfile}
              buttonPress={this.buttonPress}
              profileClassName={profileClassName}
            />
            <Content>
              <Route
                exact
                path="/portfolio"
                render={() => <Home home={currentProfile.home} />}
              />
              <Route
                path="/portfolio/About"
                render={() => <About about={currentProfile.about} />}
              />
              <Route
                path="/portfolio/Projects"
                render={() => (
                  <Projects
                    projects={currentProfile.projects}
                    profileClassName={profileClassName}
                  />
                )}
              />
              <Route
                path="/portfolio/Contact"
                render={() => <Contact contact={currentProfile.contact} />}
              />
            </Content>
          </StyledApp>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
