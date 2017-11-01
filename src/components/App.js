import React, { Component } from 'react';
import logo from './styles/logo.svg';
import './styles/App.css';
import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SNAKE</h1>
        </header>
        <p className="App-intro">
          Please, press space to start the game.
        </p>
        <Game />
      </div>
    );
  }
}

export default App;
