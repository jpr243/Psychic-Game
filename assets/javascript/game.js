var choiceLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var youWin = 0;
var youLose = 0;
var guessesLeft = 10;
var guessedLetters = []; //Array to capture user letter input
document.onkeyup = function(event) {
  var yourGuess = event.key; //variable to capture user's guess
  guessedLetters.push(yourGuess); //This is to capture letters entered by the user
  var computerAns =
    choiceLetters[Math.floor(Math.random() * choiceLetters.length)];

  //This outlines the rules of the game.
  if (yourGuess === computerAns) {
    youWin++;
    guessesLeft = 9;
    guessedLetters.length = 0;
  } else if (guessesLeft === 0) {
    youLose++;
    guessesLeft = 9;
    guessedLetters.length = 0;
  } else {
    guessesLeft--;
  }
  //This is the html

  var html =
    "<p>Guess what letter I'm thinking of:</p>" +
    "<p>Wins: " +
    youWin +
    "</p>" +
    "<p>Losses: " +
    youLose +
    "</p>" +
    "<p>Guesses Remaining: " +
    guessesLeft +
    "</p>" +
    "<p>Guessed Letter: " +
    guessedLetters.join(", ") +
    "</p>"; //Show guessed letters heredocument.querySelector("#psychicGame").innerHTML = html;

  document.getElementById("results").innerHTML = html;
};
