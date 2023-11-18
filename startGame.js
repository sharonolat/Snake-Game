import { runGame } from './game.js';
import { setSnakeSpeed, setIncrementSpeed } from './snake.js';
import { getScore } from './gameScore.js';

window.addEventListener('DOMContentLoaded', initializeGame);

window.addEventListener('click', (e) => {
  // id of the start game modal button
  if (e.target.id === 'start-button') {
    const difficulty = document.querySelector(
      'input[name="difficulty"]:checked'
    ).value;

    const startGameModal = document.getElementById('start-game-modal');
    startGameModal.remove();

    // get the difficulty level and set the snake speed
    if (difficulty === 'easy') {
      setSnakeSpeed(5);
    } else if (difficulty === 'hard') {
      setSnakeSpeed(10);
    } else if (difficulty === 'hybrid') {
      setSnakeSpeed(5);
      setIncrementSpeed();
    }

    const scoreElement = document.createElement('div');

    scoreElement.id = 'score';
    scoreElement.innerHTML = `
      <div>
        <h2>Score</h2>
        <span id="score-value">${getScore()}</span>
      </div>
    `;

    document.querySelector('body').appendChild(scoreElement);

    window.requestAnimationFrame(runGame);
  }
});

export function initializeGame() {
  const body = document.querySelector('body');

  const startGameModal = document.createElement('div');
  startGameModal.id = 'start-game-modal';
  startGameModal.innerHTML = `
    <div class="start-game-modal-content">
      <h1> Snake🐍 </h1>
      <h3> Select Difficulty level </h3>
      
      <div class="select-difficulty">
        <div>
          <label>
            <input type="radio" name="difficulty" value="easy" checked>
            Easy
          </label>
          
          <label>
            <input type="radio" name="difficulty" value="hard">
            Hard
          </label>
          
          <label>
            <input type="radio" name="difficulty" value="hybrid">
            Hybrid (Easy to hard)
          </label>
        </div>
        <button id="start-button">Start Game</button>
      </div>
    </div>
  `;

  body.appendChild(startGameModal);
}
