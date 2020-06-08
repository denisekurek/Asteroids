const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d')
const p1Button = document.querySelector('#start1P');
const autoButton = document.querySelector('#auto');
const pauseButton = document.querySelector('#pause');
const endButton = document.querySelector('#end');
let inGame = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startGame1P() {
  console.log('Start a 1 Player game');
};

function startAutoGame() {
  console.log('Start a Auto Pong Game')
};

function pauseGame() {
  console.log('Pausing Game');
};

function endGame() {
  console.log('Ending Game');
};

p1Button.addEventListener('click', startGame1P);
autoButton.addEventListener('click', startAutoGame);
pauseButton.addEventListener('click', pauseGame);
endButton.addEventListener('click', endGame);
