import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { BrowserRouter, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NextProfileButton from "./components/NextProfileButton";

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
          <div className={profileClassName + " App"}>
            <NextProfileButton
              buttonPress={this.buttonPress}
              profileClassName={profileClassName}
            />
            <Navbar
              profile={currentProfile}
              buttonPress={this.buttonPress}
              profileClassName={profileClassName}
            />
            <div className="content">
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
            </div>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
