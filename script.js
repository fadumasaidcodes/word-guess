const word = "javascript";
let guessed = [];
let wrong = 0;

const wordEl = document.getElementById("word");
const guessedEl = document.getElementById("guessed");
const messageEl = document.getElementById("message");
const letterEl = document.getElementById("letter");
const submitEl = document.getElementById("submit");

submitEl.addEventListener("click", guessLetter);

function guessLetter() {
  const letter = letterEl.value;
  if (guessed.indexOf(letter) !== -1 || letter.length !== 1) {
    messageEl.textContent = "You already guessed that letter or entered more than one letter. Try again!";
    return;
  }
  if (word.indexOf(letter) === -1) {
    wrong++;
    messageEl.textContent = "Incorrect! " + (6 - wrong) + " tries left.";
  } else {
    messageEl.textContent = "Correct!";
  }
  guessed.push(letter);
  letterEl.value = "";
  update();
  checkGameOver();
}

function update() {
  let wordView = "";
  for (let i = 0; i < word.length; i++) {
    if (guessed.indexOf(word[i]) !== -1) {
      wordView += word[i];
    } else {
      wordView += "_";
    }
  }
  wordEl.textContent = wordView;
  guessedEl.textContent = guessed;
}

function checkGameOver() {
  if (wrong === 6) {
    messageEl.textContent = "You lost!";
    submitEl.disabled = true;
    letterEl.disabled = true;
  }
  if (wordEl.textContent === word) {
    messageEl.textContent = "You won!";
    submitEl.disabled = true;
    letterEl.disabled = true;
  }
}
