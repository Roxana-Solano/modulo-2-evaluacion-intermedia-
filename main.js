"use strict";

const play = document.querySelector(".js_selecplay");
const singleButton = document.querySelector(".js_button");
const text = document.querySelector(".text");
const playerPoint = document.querySelector(".playerPoint");
const computerPoint = document.querySelector(".computerPoint");
let player = "";
let computer = "";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function searchWinner() {
  if (player === "paper" && computer === "stone") {
    text.innerHTML = " ¡Has Ganado!";
    playerPoint.innerHTML = parseInt(playerPoint.innerHTML) + 1;
  } else if (player === "paper" && computer === "scissors") {
    text.innerHTML = " ¡Has perdido! ";
    computerPoint.innerHTML = parseInt(computerPoint.innerHTML) + 1;
  } else if (player === "scissors" && computer === "stone") {
    text.innerHTML = " ¡Has perdido! ";
    computerPoint.innerHTML = parseInt(computerPoint.innerHTML) + 1;
  } else if (player === "scissors" && computer === "paper") {
    text.innerHTML = " ¡Has ganado! ";
    playerPoint.innerHTML = parseInt(playerPoint.innerHTML) + 1;
  } else if (player === "stone" && computer === "paper") {
    text.innerHTML = " ¡Has perdido! ";
    computerPoint.innerHTML = parseInt(computerPoint.innerHTML) + 1;
  } else if (player === "stone" && computer === "scissors") {
    text.innerHTML = " ¡Has ganado! ";
    playerPoint.innerHTML = parseInt(playerPoint.innerHTML) + 1;
  } else {
    text.innerHTML = "Empate";
  }
}

function getResultComputer(result) {
  if (result <= 3) {
    computer = "stone";
  } else if (result >= 7) {
    computer = "paper";
  } else {
    computer = "scissors";
  }
}

singleButton.addEventListener("click", () => {
  const result = getRandomNumber(9);
  getResultComputer(result);
  console.log(player, computer);
  searchWinner();
});

play.addEventListener("change", (ev) => {
  ev.preventDefault();
  player = play.value;
});
