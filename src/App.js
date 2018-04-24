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
    super(props)
  }



  render() {

    console.log("rendered App.js props incoming");
    console.dir(this.props);
    return (

        <BrowserRouter>
          <ScrollToTop>
            <div>here: {this.props.data.currentProfileIndex}</div>
            <div className="App">
              <Navbar />
              <div className="content">
                <Route exact path="/" render={()=><Home home={this.props.data.profiles.trevor.home}/>} />
                <Route path="/About" component={About} />
                <Route path="/Skills" component={Skills} />
                <Route path="/Projects" component={Projects} />
                <Route path="/Contact" component={Contact} />
              </div>
            </div>
          </ScrollToTop>
        </BrowserRouter>
    );
  }
}

export default App;
