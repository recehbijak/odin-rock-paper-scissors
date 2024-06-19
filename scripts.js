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

*/

function getComputerChoice() {
    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored-minCeiled) + minCeiled);
    }

    let choiceValue = getRandomInt(0, 3)
    if (choiceValue === 2) {
        choiceValue = "Rock"
    } else if (choiceValue === 1) {
        choiceValue = "Paper"
    } else if (choiceValue === 0) {
        choiceValue = "Scissors"
    } else {
        choiceValue = "There's something wrong"
    }

    return choiceValue
}

function getHumanChoice() {
    const askUserChoice = prompt("Rock, paper, scissors")

    if (askUserChoice.toLowerCase() === "rock") {
        alert("You've chosen ROCK!")
    } else if (askUserChoice.toLowerCase() === "paper") {
        alert("You've chosen PAPER!")
    } else if (askUserChoice.toLowerCase() === "scissors!") {
        alert("You've chosen SCISSORS!")
    } else {
        alert("You FOOL")
    }

    return askUserChoice
}

