'use strict';

const message = document.querySelector('.message');
const button = document.querySelector('.check');
const number = document.querySelector('.number');
const guessedNumber = document.querySelector('.guess');
const scoreContent = document.querySelector('.score');
const highScoreContent = document.querySelector('.highscore');
const playAgainButton = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

function displayMessage({ content }) {
  if (score > 1) {
    message.textContent = content;
    score--;
    scoreContent.textContent = score;
  } else {
    message.textContent = '💥 You lost the game!';
    scoreContent.textContent = 0;
    score = 0;
  }
}

button.addEventListener('click', function () {
  const guess = Number(guessedNumber.value);

  console.log(secretNumber, score);

  if (!guess) {
    message.textContent = '⛔️ No number!';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreContent.textContent = highScore;
    }
  } else if (guess > secretNumber) {
    displayMessage('📈 Too high!');
  } else if (guess < secretNumber) {
    displayMessage('📉 Too low!');
  }
});

playAgainButton.addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  scoreContent.textContent = score;
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  number.style.width = '15rem';
  guessedNumber.value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
