const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const p1Button = document.querySelector('#start1P');
const autoButton = document.querySelector('#auto');
const pauseButton = document.querySelector('#pause');
const endButton = document.querySelector('#end');
const scoreLeft = document.querySelector('#left-score');
const scoreRight = document.querySelector('#right-score');
const announcement = document.querySelector('#announce');
// const pauseAction = document.querySelector('#pause');
let leftScore = 0;
let rightScore = 0;
let inGame = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let playerPaddleY = 0;

function startGame1P() {
  // console.log('Start a 1 Player game');
  // drawLeftPaddle();
  // drawRightPaddle();
  drawBaseGame();
  // drawBall();
  inGame = true;
  announcement.textContent = '';
  scoreLeft.textContent = leftScore;
  scoreRight.textContent = rightScore;
};

function startAutoGame() {
  // console.log('Start a Auto Pong Game');
  inGame = true;
  drawBaseGame();
  announcement.textContent = '';
  scoreLeft.textContent = leftScore;
  scoreRight.textContent = rightScore;
};

// function pauseGame() {
//   // console.log('Pausing Game');
//   let count = 0;
//   if (count % 2 == 0)
//   {
//     pauseAction.textContent = 'Resume Game';
//     count++;
//   }
//   else
//   {
//     pauseAction.textContent = 'Pause Game';
//     count++;
//   }
// };

function endGame() {
  // console.log('Ending Game');
  inGame = false;
  ctx.clearRect(0,0, canvas.width, canvas.height);
  if (leftScore > rightScore)
  {
    announcement.textContent = 'Player 1 Wins!'
    scoreLeft.textContent = '';
    scoreRight.textContent = '';
  }
  else if (rightScore > leftScore)
  {
    announcement.textContent = 'Computer Wins!';
    scoreLeft.textContent = '';
    scoreRight.textContent = '';
  }
  else {
    announcement.textContent = 'Draw';
    scoreLeft.textContent = '';
    scoreRight.textContent = '';
  }

};

function movepaddle(e) {
  if (inGame && e.keyCode == 38) //Move the paddle down the canvas
  {
    playerPaddleY -= 10;
    e.preventDefault();
  }
  else if (inGame == true && e.keyCode == 40) //Move the paddle Up the canvas
  {
    playerPaddleY += 10;
    e.preventDefault();
  }

  // drawBall();
  // drawLeftPaddle();
  // drawRightPaddle();
  drawBaseGame();
}

p1Button.addEventListener('click', startGame1P);
autoButton.addEventListener('click', startAutoGame);
// pauseButton.addEventListener('click', pauseGame);
endButton.addEventListener('click', endGame);

document.addEventListener('keydown', movepaddle);

function drawBaseGame() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  let centerLine = ctx.fillRect(canvas.width * .5 - 2.5, 0, 5, canvas.height);
  let paddleLeft = ctx.fillRect(canvas.width *.05, (canvas.height * .5) - 75 + playerPaddleY, 20, 150 );
  let paddleRight = ctx.fillRect(canvas.width - (canvas.width * .05) - 20, (canvas.height * .5) - 75, 20, 150);
  ctx.beginPath();
  let ball = ctx.arc(canvas.width * .5, canvas.height * .5, canvas.height * .02, 0, 2 * Math.PI);
  ctx.fill();
};

// function drawLeftPaddle() {
//   ctx.clearRect(0,0, canvas.width, canvas.height);
//   let paddleLeft = ctx.fillRect(canvas.width *.05, (canvas.height * .5) - 75 + playerPaddleY, 20, 150 );
// };
//
// function drawRightPaddle() {
//   let paddleRight = ctx.fillRect(canvas.width - (canvas.width * .05) - 20, (canvas.height * .5) - 75, 20, 150);
// };
//
// function drawBall() {
//   ctx.fillStyle = "#ffffff";
//   ctx.beginPath();
//   let ball = ctx.arc(canvas.width * .5, canvas.height * .5, canvas.height * .02, 0, 2 * Math.PI);
//   ctx.fill();
//   // ctx.endPath();
// };
