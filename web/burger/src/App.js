import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Burger</h1>
        </header>
        <Home isConnected="false" />
      </div>
    );
  }
}

export default App;
