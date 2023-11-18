import { getInputDirection } from './input.js';
import { getBorderRadiusStyle } from './input.js';

export let SNAKE_SPEED;
let incrementSpeed = false;
const INCREMENT_SPEED_RATE = 0.2;
export const snakeBody = [{ x: 10, y: 11 }];
let newSegments = 0;

export function setSnakeSpeed(speed) {
  SNAKE_SPEED = speed;
}

export function getSnakeSpeed() {
  return SNAKE_SPEED;
}

export function setIncrementSpeed() {
  incrementSpeed = true;
}

export function incrementSnakeSpeed() {
  if (incrementSpeed) SNAKE_SPEED += INCREMENT_SPEED_RATE;
  console.log(SNAKE_SPEED);
}

export function update() {
  addSegments();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment, index) => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');

    // Apply border radius style to the snake's head
    if (index === 0) {
      Object.assign(snakeElement.style, getBorderRadiusStyle());
    }

    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function onSnake(position) {
  return snakeBody[0].x === position.x && snakeBody[0].y === position.y;
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersected() {
  for (let i = snakeBody.length - 1; i > 0; i--) {
    if (onSnake(snakeBody[i])) return true;
  }
  return false;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegments = 0;
}
