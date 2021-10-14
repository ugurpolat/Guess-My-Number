'use strict';
/*
var secretNumber = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var highScore = 0;
var guessNumber;

document.querySelector('.highscore').textContent = highScore;

const displayWinMessage = function () {
  document.querySelector('.message').textContent = 'Correct Number';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').textContent = secretNumber;
};

document.querySelector('.check').addEventListener('click', function () {
  guessNumber = Number(document.querySelector('.guess').value);

  console.log(guessNumber);

  if (!guessNumber) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessNumber > secretNumber ? 'To high' : 'To low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (guessNumber === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    displayWinMessage();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#000';
});
*/
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //Math.trunc(Math.random() * 9) + 1;
let guessNumber = [];

let guessDigitsNumber = prompt('How many digits do you want?');
console.log(guessDigitsNumber);

let playerNumber = prompt('What is your digits?');
let setArr = num => Number(num);
let playerArray = Array.from(String(playerNumber), setArr);

const createRandomNumber = function (guessDigitsNumber) {
  let i = 0;

  while (i < guessDigitsNumber) {
    let randomIndex = Math.trunc(Math.random() * numbers.length);
    let value = numbers[randomIndex];
    if (i === 0) {
      if (value !== 0) {
        guessNumber[i] = value;
        numbers.splice(randomIndex, 1);
        i++;
      } else {
        continue;
      }
    } else if (i >= 1) {
      guessNumber[i] = value;
      numbers.splice(randomIndex, 1);
      i++;
    }
  }
  return guessNumber;
};

console.log(createRandomNumber(guessDigitsNumber));
console.log(playerArray);

for (let i = 0; i < guessDigitsNumber; i++) {
  if (guessNumber[i] == playerArray[i]) {
    console.log('+1');
  } else {
    console.log('-1');
  }
}
