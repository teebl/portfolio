import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <ScrollToTop>
      <div className="App">
      <Navbar />
      <div className="content">
      <Route exact path="/" component={Home} />
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
