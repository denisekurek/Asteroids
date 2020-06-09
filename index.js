const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const p1Button = document.querySelector('#start1P');
const autoButton = document.querySelector('#auto');
const pauseButton = document.querySelector('#pause');
const endButton = document.querySelector('#end');
const scoreLeft = document.querySelector('#left-score');
const scoreRight = document.querySelector('#right-score');
let leftScore = 0;
let rightScore = 0;
let inGame = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "#ffffff";
//Creates left paddle
let paddleLeft = ctx.fillRect(canvas.width *.05, canvas.height * .425, 20, 150);
//Create right paddle
let paddleRight = ctx.fillRect(canvas.width */*.93*/.1, canvas.height * .425, 20, 150);
//Create center line
const centerLine = ctx.fillRect(canvas.width * .5, 0, 5, canvas.height);


function startGame1P() {
  console.log('Start a 1 Player game');
  inGame = true;
  scoreLeft.textContent = leftScore;
  scoreRight.textContent = rightScore;
};

function startAutoGame() {
  console.log('Start a Auto Pong Game');
  inGame = true;
  scoreLeft.textContent = leftScore;
  scoreRight.textContent = rightScore;
};

function pauseGame() {
  console.log('Pausing Game');
  inGame = true;
  scoreLeft.textContent = leftScore;
  scoreRight.textContent = rightScore;
};

function endGame() {
  console.log('Ending Game');
  inGame = false;
  scoreLeft.textContent = '';
  scoreRight.textContent = '';
};

p1Button.addEventListener('click', startGame1P);
autoButton.addEventListener('click', startAutoGame);
pauseButton.addEventListener('click', pauseGame);
endButton.addEventListener('click', endGame);
