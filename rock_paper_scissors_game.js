// You need to install the node prompt-sync to be able to play it in your terminal
const prompt = require("prompt-sync")();

let ties = 0;
let wins = 0;
let loses = 0;

const userChoice = prompt('Enter rock, paper or scissors: ');
if(userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors'){
    console.log('Put a a value said before');
};

const choices = ['rock', 'paper', 'scissors'];
const randomIndex = Math.round(Math.random() * 2);
const computerChoice = choices[randomIndex];
console.log(`The computer choosed ${computerChoice}`);

if(userChoice === computerChoice){
    console.log('Tied');
    ties++;
} else if(
    (userChoice == 'rock' && computerChoice == 'scissors') || 
    (userChoice == 'paper' && computerChoice == 'rock') || 
    (userChoice == 'scissors' && computerChoice == 'paper')
  ){
    console.log('You win');
    wins++;
} else {
    console.log('You lost');
    loses++;
}