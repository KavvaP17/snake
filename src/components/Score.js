import React, { Component } from 'react';
import './styles/Score.css';

class Score extends Component {
  render() {
    return (
      <div>
        <h2>Score:<span>{this.props.score}</span></h2>
      </div>
    )
  }
}

export default Score;
