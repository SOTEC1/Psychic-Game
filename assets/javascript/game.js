// computer choices array
var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// wins/losses variables
var chances = 10;
var wins = 0;
var losses = 0;

// prints game components to screen 
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var chancesText = document.getElementById("chancesText");

// player chooses letter to guess

// if player guesses correct +1 win
// if player guesses wrong -1 chances
// computer logs/prints wrong answers
// when chances run out loss +1
// game resets 