let randomNumber = Math.round(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultContainer = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        displayMsg("⚠️ Please enter a valid number.", "red");
    } else if (guess < 1) {
        displayMsg("⚠️ Enter a number greater than 0.", "red");
    } else if (guess > 100) {
        displayMsg("⚠️ Enter a number smaller than 101.", "red");
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMsg(`💔 Game Over. The number was ${randomNumber}.`, "red");
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg("🎉 Your guess is correct! You win!", "green");
        endGame();
    } else if (guess < randomNumber) {
        displayMsg("🔼 Your guess is too low.", "blue");
    } else if (guess > randomNumber) {
        displayMsg("🔽 Your guess is too high.", "blue");
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMsg(msg, color) {
    lowOrHi.innerHTML = `<h4 style="color:${color};">${msg}</h4>`;
}

function newGame() {
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener("click", function () {
        randomNumber = Math.round(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute("disabled");
        resultContainer.removeChild(document.querySelector("#newGame"));
        lowOrHi.innerHTML = "";
        playGame = true;
    });
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    const newGameBtn = document.createElement("button");
    newGameBtn.id = "newGame";
    newGameBtn.textContent = "Start New Game";
    newGameBtn.style.marginTop = "20px";
    resultContainer.appendChild(newGameBtn);
    playGame = false;
    newGame();
}