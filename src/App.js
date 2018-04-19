import React, { Component } from 'react';
import Header from './components/Header.js';
import Body from './components/Body.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <div className="sidebarSpacing">
      <Body />
      </div>
      </div>
    );
  }
}

export default App;
