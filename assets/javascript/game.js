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
  lettersGuessed = [];
  compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
  console.log(compGuess);
}
newword()
// prints game components to screen 
var $winsText = document.getElementById("winsText");
var $lossesText = document.getElementById("lossesText");
var $chancesText = document.getElementById("chancesText");
var $lettersGuessed = document.getElementById("guessedText");

// when button is clicked function will run
document.onkeyup = function(event) {
  // player makes guess
  var playerChoice = event.key;
  
// if player guesses correct
if ((playerChoice === compGuess)) {
  // wins go up by 1, alert to page notfying a win, game resets
  wins++;
  alert("You won!")
  newword();
}

// if player guesses wrong
if ((playerChoice !== compGuess)) {
  // chances go down
  chancesLeft--;
  lettersGuessed.push(playerChoice);

  // if chances run out, losses go up by 1 and game resets
  if ((chancesLeft === 0)) {
    losses++;
    newword();
  }
}

if (!compChoice.includes(playerChoice)) {
  alert("This is not a letter!");
  chancesLeft++;
}

// prints all text
$winsText.textContent = "wins: " + wins;
$lossesText.textContent = "losses: " + losses;
$chancesText.textContent = "Chances: " + chancesLeft;
$lettersGuessed.textContent = "Letters chosen: " + lettersGuessed;
};