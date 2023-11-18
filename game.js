import {
  getSnakeSpeed,
  draw as drawSnake,
  update as updateSnake,
  getSnakeHead,
  snakeIntersected,
} from './snake.js';
import { draw as drawFood, update as updateFood } from './food.js';
import { gameOver } from './gameOver.js';
import { outsideGrid } from './grid.js';

const gameBoard = document.getElementById('game-board');
let lastRenderTime = 0;
let isGameOver = false;
let animationId;

export function runGame(currentTime) {
  if (isGameOver) {
    gameOver();
    window.cancelAnimationFrame(animationId);
    return
    // return alert('GameOver');
  }

  animationId = window.requestAnimationFrame(runGame);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / getSnakeSpeed()) return;

  update();
  draw();
  lastRenderTime = currentTime;
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function checkDeath() {
  isGameOver = outsideGrid(getSnakeHead()) || snakeIntersected();
}

// window.requestAnimationFrame(runGame);
