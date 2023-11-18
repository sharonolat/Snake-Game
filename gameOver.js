import { getScore } from './gameScore.js';

export function gameOver () {
  const previousHighScore = localStorage.getItem('highScore') || 0;
  localStorage.setItem('highScore', getScore() > previousHighScore ? getScore() : previousHighScore);

  const gameOverModal = document.createElement('div');
  gameOverModal.id = 'game-over-modal';
  gameOverModal.innerHTML = `
    <div class="game-over-modal-content">
      <h1> Oops, Game Over🥴 </h1>
      <h3> Your Score: ${getScore()} </h3>
      <h3> High Score: ${previousHighScore} </h3>
      <h3> New High Score: ${getScore() > previousHighScore ? 'Yes🎉🎉🎉' : 'No😔'} </h3>
      <div>
        <button id="restart-button">Restart</button>
      </div>
    </div>
  `;

  document.querySelector('body').appendChild(gameOverModal);
}

export function getHighScore() {
  return localStorage.getItem('highScore') || 0;
}

window.addEventListener('click', (e) => {
  if (e.target.id === 'restart-button') {
    const gameOverModal = document.getElementById('game-over-modal');
    gameOverModal.remove();

    window.location.href = '/'
  }
})