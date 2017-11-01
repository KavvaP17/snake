import React, { Component } from 'react';
import './styles/Navigation.css';

export default class Navigation extends Component {
  render(){
    return (
      <div className = 'snake_navigation'>
        <h3>Game control</h3>
        <p className='game_control'>
          <span><b>SPACE</b> - START</span>
          <span><b>W</b> - UP</span>
          <span><b>S</b> - DOWN</span>
          <span><b>A</b> - LEFT</span>
          <span><b>D</b> - RIGHT</span>
        </p>
      </div>
    );
  }
}
