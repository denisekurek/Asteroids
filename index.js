const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d')
const p1Button = document.querySelector('#start1P');
const autoButton = document.querySelector('#auto');
const pauseButton = document.querySelector('#pause');
const endButton = document.querySelector('#end');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function logs() {
  console.log('the button was clicked');
}

p1Button.addEventListener('click', logs);
autoButton.addEventListener('click', logs);
pauseButton.addEventListener('click', logs);
endButton.addEventListener('click', logs);
