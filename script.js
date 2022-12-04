'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const enterMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let inputNumber = Number(document.querySelector('.guess').value);

  // if no value
  if (!inputNumber) {
    enterMessage('⛔️ No number!');
    // document.querySelector('.message').textContent = '⛔️ No number!';
  }
  // if value is correct
  else if (inputNumber === secretNumber) {
    enterMessage('🎉 Correct Number!');
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // if value is NOT correct
  else if (inputNumber !== secretNumber) {
    enterMessage(inputNumber > secretNumber ? '📈 Too high!' : '📉 Too low!');
    // document.querySelector('.message').textContent =
    //   inputNumber > secretNumber ? '📈 Too high!' : '📉 Too low!';
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      enterMessage('💥 You lost the game!');
      // document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.number').textContent = '?';
  enterMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
