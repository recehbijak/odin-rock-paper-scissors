console.log("Hello World")

const rsdArena = document.querySelector("#rsd-arena-container");
const targetArena = document.querySelector("#arena-target");

const waitMessage = document.createElement("h2");
waitMessage.textContent = "Waiting for Player...";
rsdArena.appendChild(waitMessage);
rsdArena.removeChild(targetArena);

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored-minCeiled) + minCeiled);
}

let compChoiceInnerText = '';

function getComputerChoice() {

    let choiceValue = getRandomInt(0, 3)
    if (choiceValue === 2) {
        choiceValue = "rock";
        compChoiceInnerText = "🪨"
    } else if (choiceValue === 1) {
        choiceValue = "scissors";
        compChoiceInnerText = "✂️"
    } else if (choiceValue === 0) {
        choiceValue = "dynamite";
        compChoiceInnerText = "💣"
    } else {
        choiceValue = "There's something wrong";
    }

    return choiceValue.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

const rsdButton = document.querySelectorAll("button");
const alertText = document.createElement("h2");
const alertScore = document.createElement("h3");
const scoreBoard = document.createElement("div");

function alertWinLose(message, scoreMessage) {
    alertText.textContent = message;
    rsdArena.appendChild(alertText);
    alertScore.textContent = scoreMessage;
    rsdArena.appendChild(alertScore);
}

const alertHumanScore = document.createElement("p");
const alertComputerScore = document.createElement("p");

function showScore() {
    const scoreCont = document.querySelector("#score-container");
    scoreCont.appendChild(scoreBoard);

    alertHumanScore.innerText = "Your Score: " + humanScore;
    scoreBoard.appendChild(alertHumanScore);

    alertComputerScore.innerText = "Enemy Score: " + computerScore;
    scoreBoard.appendChild(alertComputerScore);

}


function playRound() {
    const humanChoice = this.value; 
    const computerChoice = getComputerChoice();

    rsdArena.appendChild(targetArena);
    waitMessage.remove();

    if (humanChoice === computerChoice) {
        alertWinLose("DRAW", "No Score Awaded");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        alertWinLose("YOU WIN!", "Your Score +5");
        humanScore += 5;
    } else if (humanChoice === "scissors" && computerChoice === "dynamite") {
        alertWinLose("YOU WIN!", "Your Score +5");
        humanScore += 5;
    } else if (humanChoice === "dynamite" && computerChoice === "rock") {
        alertWinLose("YOU WIN!", "Your Score +5");
        humanScore += 5;
    } else {
        alertWinLose("YOU LOSE!", "Enemy Score +5");
        computerScore += 5;
    }

    const humanChoiceIcon = document.querySelector("#player-choice");
    humanChoiceIcon.innerText = this.innerText;
    const computerChoiceIcon = document.querySelector("#enemy-choice");
    computerChoiceIcon.innerText = compChoiceInnerText;

    showScore();
    console.log(this.value);
    console.log(humanScore);
    console.log(this.innerText)
}

rsdButton.forEach((button) => {
    button.addEventListener("click", playRound);
});