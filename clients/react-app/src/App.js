import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container />
      </div>
    );
  }
}

export default App;
