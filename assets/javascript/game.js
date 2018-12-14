// computer choices array
var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// wins/losses variables
var chances = [];
var chancesLeft = 10;
var wins = 0;
var losses = 0;
var compGuess;
var lettersGuessed = [];



// reset
function newword () {
  chances = [];
  chancesLeft = 10;
  compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
  console.log(compGuess);
}
newword()
// prints game components to screen 
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var chancesText = document.getElementById("chancesText");
var lettersGuessed = document.getElementById("guessedText");

// player chooses letter to guess
document.onkeyup = function(event) {
  // 
  var playerChoice = event.key;
  
// making computer chose from array 

// if player guesses correct wins +1

if ((playerChoice === compGuess)) {
  wins++;
  alert("You won!")
  newword();
}


// if play guesses wrong losses +1
if ((playerChoice !== compGuess)) {
  chancesLeft--;
  
  if ((chancesLeft === 0)) {
    losses++;
    newword();
  }
}

// prints wins/losses
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
chancesText.textContent = "Chances: " + chancesLeft;
guessedText.textContent = "Letters chosen: " + playerChoice;
};