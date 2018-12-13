// computer choices array
var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// wins/losses variables
var chances = [];
var chancesLeft = 9;
var wins = 0;
var losses = 0;

// reset function
function reset () {
  chancesLeft = 9;

  chancesFar = [];
  compGuess = compChoice [Math.floor(Math.random() * compChoice.length)];
}

reset();

// letters guessed
function newword () {
  chances = [];
  chancesLeft = 9;
  computerGuess = computerChoice[Math.floor(Math.random() * compChoice.length)];
}

// prints game components to screen 
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var chancesText = document.getElementById("chancesText");

// player chooses letter to guess
document.onkeyup = function(event) {
  // 
  var playerChoice = event.key;

// making computer chose from array 
  var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];

// if player guesses correct wins +1
if ((playerChoice === compGuess)) {
  wins++;
}
// if play guesses wrong losses +1
if ((playerChoice !== compGuess)) {
  losses++
}

// prints wins/losses
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
chancesText.textContent = "Chances: " + chances;
};