import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {
  constructor(props) {
    super(props);

    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress(e) {
    e.preventDefault;
    this.props.nextProfilePress();
  }

  render() {
    const index = this.props.data.currentProfileIndex;
    const currentProfile = this.props.data.profiles[index];

    return (
      <BrowserRouter>
        <ScrollToTop>
          <div>here: {index}</div>{" "}
          <button onClick={this.buttonPress}>boring</button>
          <div className="App">
            <Navbar />
            <div className="content">
              <Route
                exact
                path="/"
                render={() => <Home home={currentProfile.home} />}
              />
              <Route
                path="/About"
                render={() => <About about={currentProfile.about} />}
              />
              <Route
                path="/Skills"
                render={() => <Skills skills={currentProfile.skills} />}
              />
              <Route
                path="/Projects"
                render={() => <Projects projects={currentProfile.projects} />}
              />
              <Route
                path="/Contact"
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
