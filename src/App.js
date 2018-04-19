import React, { Component } from 'react';
import Header from './components/Header.js';
import Body from './components/Body.js';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Header />
      <div className="headerSpacing"  />
      <Body />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
