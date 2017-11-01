export function initArrayLocation(fieldWidth, snakeLength){
  const initArray = [];
  for (let i = 0; i < fieldWidth; i++){
    initArray[i] = [];
    for (let j = 0; j < fieldWidth; j++){
      initArray[i][j] = 0;
    }
  }
  //eat
  initArray[~~(Math.random()*fieldWidth/2)][~~(Math.random()*fieldWidth)] = 1;
  console.log(initArray);
  return initArray;
}

export function initalArraySnake(fieldWidth, snakeLength){
    const snakeArray = [];
    const snakeXPosition = ~~(fieldWidth/2-snakeLength/2);
    const snakeYPosition = ~~(fieldWidth/2);
    let i=0;
    for (let j = snakeXPosition; j < snakeXPosition+snakeLength; j++){
      snakeArray[i] = {y: snakeYPosition, x: j };
      i++;
    }
    return snakeArray;
}
