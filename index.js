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

function drawBaseGame() {
  //Creates the base game on the canvas
  ctx.fillStyle = "#ffffff";
  //Creates left paddle
  let paddleLeft = ctx.fillRect(canvas.width *.05, (canvas.height * .5) - 75, 20, 150);
  //Create right paddle
  let paddleRight = ctx.fillRect(canvas.width - (canvas.width * .05) - 20, (canvas.height * .5) - 75, 20, 150);
  //Create center line
  let centerLine = ctx.fillRect(canvas.width * .5 - 2.5, 0, 5, canvas.height);
  //Draw ball on centerline
  ctx.beginPath();
  const ball = ctx.arc(canvas.width * .5, canvas.height * .5, 20, 0, 2 * Math.PI);
  ctx.fill();
}

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

document.addEventListener('keydown', (e) => {
  if (inGame && e.keyCode == 38)
  {
    console.log('going up');
  }
  else if (inGame == true && e.keyCode == 40)
  {
    console.log('going down');
  }
});

drawBaseGame();
