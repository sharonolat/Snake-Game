let score = 0;

export function getScore() {
  return score;
}

export function setScore(newScore) {
  score = newScore;
}

export function updateUIScoreboard(newScore) {
  setScore(newScore);
  document.getElementById('score-value').innerHTML = score;
}