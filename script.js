'use strict';
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `Correct number!`;

console.log(document.querySelector(`.message`).textContent);*/
let highscore = 0;
let rez = 20;
const displayM = function (message) {
  document.querySelector(`.message`).textContent = message;
};
let numberS = Math.trunc(Math.random() * 20) + 1;
document.querySelector(`.check`).addEventListener(`click`, function () {
  let guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    displayM(`NO NUMBER!`);
  } else if (guess === numberS) {
    document.querySelector(`.number`).textContent = numberS;
    displayM(`Correct number!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (rez > highscore) {
      highscore = rez;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess !== numberS) {
    if (rez > 1) {
      displayM(guess > numberS ? `too high baby!` : `too low baby!`);
      rez--;
      document.querySelector(`.score`).textContent = rez;
    } else {
      displayM(`You lost a game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
document.querySelector(`.again`).addEventListener(`click`, function () {
  numberS = Math.trunc(Math.random() * 20) + 1;
  rez = 20;
  document.querySelector(`.score`).textContent = rez;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  displayM(`Start guessing...`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});
