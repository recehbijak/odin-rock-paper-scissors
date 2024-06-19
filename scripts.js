console.log("Hello World")

/* 
RPS = rock paper scissors

Create a function that randomly returns "rock", "paper", or "scissors" strings
Initialize variable that randomly generates numbers between 0, 1, 2
If the number is 0, assign "rock"
Else if the number is 1, assign "paper"
Else if the number is 2, assign "scissors"
Return variable

Create a function for human choice 
Initialize a variable that shows prompt window asking user to input their RPS choice
If the input is rock, print "You've chosen rock"
If the input is paper, print "You've chosen paper"
If the input is scissors, print "You've chosen scissors"
Return prompt variable

Initialize variables that will contain human score and computer score with initial value of 0

Create a function that will play a single round of RPS using human choice and computer choice arguments
Check the conditions for human and computer choices, if conditions are met then assign score to either human or computer
and print alert message

Declare that human selection is retrieved from getHumanChoice function
Declar that computer selection is retrieved from getComputerCHoice function
*/

function getComputerChoice() {
    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored-minCeiled) + minCeiled);
    }

    let choiceValue = getRandomInt(0, 3)
    if (choiceValue === 2) {
        choiceValue = "Rock";
    } else if (choiceValue === 1) {
        choiceValue = "Paper";
    } else if (choiceValue === 0) {
        choiceValue = "Scissors";
    } else {
        choiceValue = "There's something wrong";
    }

    return choiceValue;
}

function getHumanChoice() {
    const askUserChoice = prompt("Rock, paper, scissors")

    if (askUserChoice.toLowerCase() === "rock") {
        alert("You've chosen ROCK!");
    } else if (askUserChoice.toLowerCase() === "paper") {
        alert("You've chosen PAPER!");
    } else if (askUserChoice.toLowerCase() === "scissors!") {
        alert("You've chosen SCISSORS!");
    } else {
        alert("You FOOL");
    };

    return askUserChoice;
}

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()

function playROund(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "rock") {
        console.log("Stalemate! Rock equals rock");
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "paper") {
        console.log("Stalemate! Paper equals paper");
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "scissors") {
        console.log("Stalemate! Scissors equals scissors");
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        console.log("You lose! Paper beats rock");
        computerScore += 10;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        console.log("You win! Rock beats scissors");
        humanScore += 10;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        console.log("You win! Paper beats rock");
        humanScore += 10;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
        console.log("You lose! Scissors beats paper");
        computerScore += 10; 
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        console.log("You win! Scissors beats paper");
        humanScore += 10;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        console.log("You lose! Rock beats scissors");
        computerScore += 10; 
    } else {
        console.log("There's something wrong")
    }
}