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



function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored-minCeiled) + minCeiled);
}

function getComputerChoice() {

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

    return choiceValue.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

const rsdButton = document.querySelectorAll("button");
const rsdArena = document.querySelector("#rsd-arena-container");
const alertText = document.createElement("h3");
const scoreBoard = document.createElement("div");

function alertWinLose(message) {
    alertText.textContent = message;
    rsdArena.appendChild(alertText);
}

const alertHumanScore = document.createElement("p");
const alertComputerScore = document.createElement("p");

function showScore() {
    const scoreCont = document.querySelector("#score-container");
    scoreCont.appendChild(scoreBoard);

    alertHumanScore.innerText = "Your score: " + humanScore;
    scoreBoard.appendChild(alertHumanScore);

    alertComputerScore.innerText = "Computer score: " + computerScore;
    scoreBoard.appendChild(alertComputerScore);

}

function playRound() {
    const humanChoice = this.value; 
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        alertWinLose("DRAW");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        alertWinLose("YOU WIN");
        humanScore += 5;
    } else if (humanChoice === "scissors" && computerChoice === "dynamite") {
        alertWinLose("YOU WIN");
        humanScore += 5;
    } else if (humanChoice === "dynamite" && computerChoice === "rock") {
        alertWinLose("YOU WIN");
        humanScore += 5;
    } else {
        alertWinLose("YOU LOSE");
        computerScore += 5;
    }

    showScore();
    console.log(this.value);
    console.log(humanScore);
}

rsdButton.forEach((button) => {
    button.addEventListener("click", playRound);
});





/* function playRound() {
  
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();


        if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("Stalemate! Rock equals rock");
        alert("Stalemate! Rock equals rock");
        } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Stalemate! Paper equals paper");
        alert("Stalemate! Paper equals paper");
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("Stalemate! Scissors equals scissors");
        alert("Stalemate! Scissors equals scissors");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats rock");
        alert("You lose! Paper beats rock");
            computerScore += 10;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors");
            alert("You win! Rock beats scissors");
            humanScore += 10;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock");
            alert("You win! Paper beats rock");
            humanScore += 10;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper");
        alert("You lose! Scissors beats paper");
            computerScore += 10; 
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats paper");
            alert("You win! Scissors beats paper");
            humanScore += 10;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats scissors");
        alert("You lose! Rock beats scissors");
            computerScore += 10; 
        } else {
            console.log("There's something wrong");
        alert("There's something wrong");
        }

        return;
}

*/
//function playGame(rounds) {

//for (let i = 0; i < rounds; i++) {
    
//        playRound();
      
//        let alertHumanScore = "Your score: " + humanScore;
//        let alertComputerScore= "Computer score: " + computerScore; 
  
//        console.log(alertHumanScore);
//        console.log(alertComputerScore);
//        alert(alertHumanScore + "\n" + alertComputerScore);
  
//    }

//   return humanScore > computerScore ? console.log("YOU WIN!") : console.log ("YOU LOSE.");
//}


/*
Create a new function named playGame
Move playRound function and sore variables so that they're delcared
inside of the new playGame function
loop playRound 5 times

*/

