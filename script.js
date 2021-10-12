"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "🎉 Correct Number";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 2;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
var secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
var highScore = 0;
var guessNumber;
ggg;
document.querySelector(".highscore").textContent = highScore;

document.querySelector(".check").addEventListener("click", function () {
  guessNumber = Number(document.querySelector(".guess").value);

  console.log(guessNumber);

  if (!guessNumber) {
    document.querySelector(".message").textContent = "No Number";
  }
  if (score > 0) {
    if (guessNumber > secretNumber) {
      document.querySelector(".message").textContent = "To High";

      score -= 1;
      document.querySelector(".score").textContent = score;
    } else if (guessNumber < secretNumber) {
      document.querySelector(".message").textContent = "To Low";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Correct Number";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = secretNumber;

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    }
  } else {
    document.querySelector(".message").textContent = "You lost the game";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#000";
});
