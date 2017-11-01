import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './styles/Game.css';
import Score from './Score.js';
import Navigation from './Navigation.js';
import  * as gameActions from '../AC/game.js';
import {SNAKE_SPEED} from '../config/constants.js';

function arrayLocationToTable(arrayLocation, snakeLocation){
    return arrayLocation.map((item, indexRow)=>{
        return <tr key={'R'+indexRow}>{(item.map((field, indexCol)=>{
            return <td key={'R'+indexRow+'C'+indexCol}>{((isNoSnakePosition(snakeLocation,indexRow,indexCol) && field!==1)?'':<div className="snake"></div>)}</td>;
        }))}</tr>
    });
}

function isNoSnakePosition(snakeLocation, Row, Col){
    let res = true;
    snakeLocation.forEach((item)=>{
        if (item.x === Col && item.y === Row){
            res = false;
        }
    })
    return res;
}

function isDied(snakeLocation){
    const head = snakeLocation[snakeLocation.length-1];
    for (let i=0; i<snakeLocation.length-1; i++){
        if (head.x === snakeLocation[i].x && head.y === snakeLocation[i].y){
            return true;
        }
    }
    return false;
}

class Game extends Component {

  componentDidMount() {
     document.addEventListener('keypress', this.props.gameActions.keyHendling);
     setInterval(()=>{
         if (this.props.state.isStart) {
             this.props.gameActions.snakeGo();
         }
         if (isDied(this.props.state.snakeLocation)){
             this.props.gameActions.gameOver();
         }

     },SNAKE_SPEED);
  }
  render() {
    return (
      <div className="game">
        {this.props.state.isDied?<h2>You lose:( Your score: {this.props.state.score}</h2>:<Score score={this.props.state.score}/>}
        <table className = "gameTable">
            <tbody>
                {arrayLocationToTable(this.props.state.arrayLocation, this.props.state.snakeLocation)}
            </tbody>
        </table>
        <Navigation />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    state: state.game
  }
}
function mapDispatchToProps(dispatch) {
    return {
        gameActions: bindActionCreators(gameActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
