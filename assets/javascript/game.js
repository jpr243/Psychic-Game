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
    guessesLeft = 10;
    document.getElementById("wins").innerHTML = "Wins:  " + youWin + " ";
    guessedLetters.length = 0;
  } else if (guessesLeft === 0) {
    youLose++;
    guessesLeft = 10;
    guessedLetters.length = 0;
    document.getElementById("losses").innerHTML = "Losses: " + youLose + " ";
  } else {
    guessesLeft--;
    document.getElementById("guessesRemaining").innerHTML =
      "Guesses Remaining: " + guessesLeft + " ";
  }

  var letters = "<p>Guessed Letters: " + guessedLetters.join(", ") + " ";
  document.getElementById("guessedLetters").innerHTML = letters;
};
