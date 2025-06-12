let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");
const resetBtn = document.getElementById("resetBtn");

resetBtn.style.display = "none";

guessBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    message.style.color = "orange";
    return;
  }

  if (userGuess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    message.style.color = "green";
    endGame();
  } else {
    attemptsLeft--;
    attempts.textContent = attemptsLeft;
    if (attemptsLeft === 0) {
      message.textContent = `💥 Game Over! The number was ${randomNumber}.`;
      message.style.color = "red";
      endGame();
    } else {
      message.textContent = userGuess > randomNumber ? "Too high!" : "Too low!";
      message.style.color = "blue";
    }
  }

  guessInput.value = "";
});

resetBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  attempts.textContent = attemptsLeft;
  message.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  guessBtn.disabled = false;
  resetBtn.style.display = "none";
});

function endGame() {
  guessInput.disabled = true;
  guessBtn.disabled = true;
  resetBtn.style.display = "inline-block";
}
