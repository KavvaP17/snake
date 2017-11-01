import {GAME_FIELD_WIDTH, INITAL_SNAKE_LENGTH, DIRECTION_RIGHT, DIRECTION_LEFT, DIRECTION_UP,
        DIRECTION_DOWN, GAME_START, SNAKE_GO, GAME_OVER} from '../config/constants.js';
import { initArrayLocation , initalArraySnake } from '../helpers.js';

const initialState = {
    isStart: false,
    isDied: false,
    score: 0,
    arrayLocation : initArrayLocation(GAME_FIELD_WIDTH, INITAL_SNAKE_LENGTH),
    snakeLocation : initalArraySnake(GAME_FIELD_WIDTH, INITAL_SNAKE_LENGTH),
    direction: DIRECTION_RIGHT
}

function snakeGo(state){
    let newScore = state.score;
    let newarrayLocation = [...state.arrayLocation];
    let newStateLocation = [...state.snakeLocation];
    let head = newStateLocation[newStateLocation.length-1];
    let newPoint;
    if (state.direction === DIRECTION_UP){
        newPoint = {
            y: head.y-1>=0? head.y-1 : GAME_FIELD_WIDTH-head.y-1,
            x: head.x
        }
    }
    else if (state.direction === DIRECTION_DOWN){
        newPoint = {
            y: head.y+1<GAME_FIELD_WIDTH? head.y+1 : head.y+1-GAME_FIELD_WIDTH,
            x: head.x
        }
    }
    else if (state.direction === DIRECTION_RIGHT){
        newPoint = {
            y: head.y,
            x: head.x+1<GAME_FIELD_WIDTH? head.x+1 : head.x+1-GAME_FIELD_WIDTH
        }
    }
    else if (state.direction === DIRECTION_LEFT){
        newPoint = {
            y: head.y,
            x: head.x-1>=0? head.x-1 : GAME_FIELD_WIDTH-head.x-1
        }
    }
    newStateLocation.push(newPoint);
    if (state.arrayLocation[newPoint.y][newPoint.x] === 1){
        newarrayLocation = getEat(state.arrayLocation, newStateLocation, newPoint);
        newScore++;
    } else{
        newStateLocation.shift();
    }
    return {...state, score: newScore, arrayLocation: newarrayLocation, snakeLocation: newStateLocation};
}

function getEat(arrayLocation, snakeLocation, head){
    const newArrayLocation = [...arrayLocation];
    newArrayLocation[head.y][head.x] = 0;
    let newX;
    let newY;
    let eatInSnake = true;
    while (eatInSnake){
        eatInSnake = false;
        newX = ~~(Math.random()*GAME_FIELD_WIDTH);
        newY = ~~(Math.random()*GAME_FIELD_WIDTH);
        snakeLocation.forEach((item)=>{
            if (item.x === newX && item.y ===newY){
                eatInSnake = true;
            }
        })
    }
    newArrayLocation[newY][newX] = 1;
    return newArrayLocation;

}

export default (gameState = initialState, action) => {
  switch (action.type) {
    case GAME_START: return {...initialState, isStart: true, isDied: false};
    case DIRECTION_RIGHT: return (gameState.isStart && gameState.direction!==DIRECTION_LEFT)?{...gameState, direction: DIRECTION_RIGHT}:gameState;
    case DIRECTION_LEFT: return (gameState.isStart && gameState.direction!==DIRECTION_RIGHT)?{...gameState, direction: DIRECTION_LEFT}:gameState;
    case DIRECTION_UP: return (gameState.isStart && gameState.direction!==DIRECTION_DOWN)?{...gameState, direction: DIRECTION_UP}:gameState;
    case DIRECTION_DOWN: return (gameState.isStart && gameState.direction!==DIRECTION_UP)?{...gameState, direction: DIRECTION_DOWN}:gameState;
    case SNAKE_GO: return snakeGo(gameState);
    case GAME_OVER: return {...gameState, isStart: false, isDied: true};
    default : return gameState;
  }
}
