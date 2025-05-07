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
