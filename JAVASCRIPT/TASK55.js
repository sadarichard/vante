
let letplay = true;

while (letplay) {
  // Generate a random number
  let randomNumber = Math.floor(Math.random() * 10);

  // Prompt the user
  let userGuess = prompt("Guess a number between 0 and 10:");

  // Validate user input
  while (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
    userGuess = prompt("Invalid input. Guess a number between 0 and 10:");
  }

  // Compare and give feedback
  if (parseInt(userGuess) === randomNumber) {
    alert(" Congratulations! You guessed the correct number.");
  } else {
    alert(`Sorry, the correct number was ${randomNumber}.`);
  }

  // Play again option
  let letplayConfirm = prompt("Do you want to play again? (yes/no)");
  letplay = letplayConfirm.toLowerCase() === "yes";
}