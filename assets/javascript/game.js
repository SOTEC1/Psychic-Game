// computer choices array
var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(compChoice);
// wins/losses variables
var chances = 10;
var wins = 0;
var losses = 0;

// prints game components to screen 
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var chancesText = document.getElementById("chancesText");

// player chooses letter to guess
document.onkeyup = function(event) {
  var playerChoice = event.key;

  var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];

// if player player guesses correct wins +1
if ((playerChoice === compGuess)) {
  wins++;
}
else {
  losses++;
}

winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;

};


// if player guesses wrong -1 chances
// computer logs/prints wrong answers
// when chances run out loss +1
// game resets 