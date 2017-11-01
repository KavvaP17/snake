import {GAME_START, DIRECTION_RIGHT, DIRECTION_LEFT, DIRECTION_UP, DIRECTION_DOWN, GAME_OVER, SNAKE_GO} from '../config/constants.js';

export function keyHendling(e) {
    switch (e.code) {
        case 'KeyW':
            return {
                type: DIRECTION_UP
            }
        case 'KeyS':
            return {
                type: DIRECTION_DOWN
            }
        case 'KeyA':
            return {
                type: DIRECTION_LEFT
            }
        case 'KeyD':
            return {
                type: DIRECTION_RIGHT
            }
        case 'Space':
            return {
                type: GAME_START
            }
        default:
            return{
                type: ''
            }
    }
}
export function snakeGo(){
    return {
        type: SNAKE_GO
    }
}
export function gameOver(){
    return {
        type: GAME_OVER
    }
}
