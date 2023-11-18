import { snakeBody, onSnake, expandSnake, incrementSnakeSpeed } from "./snake.js";
import { randomGridPosition } from "./grid.js";
import { updateUIScoreboard } from "./gameScore.js";

let food = getRandomPosition();
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    updateUIScoreboard(snakeBody.length * 10);
    food = getRandomPosition();
    incrementSnakeSpeed();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');

  gameBoard.appendChild(foodElement);
}

function getRandomPosition () {
  let newFoodPosition = randomGridPosition();

  while (newFoodPosition === null || onSnake(newFoodPosition)){
    newFoodPosition = randomGridPosition()
  }

  return newFoodPosition
}