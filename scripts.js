console.log("Hello World")

/* 
Create a function that randomly returns "rock", "paper", or "scissors" strings
Initialize variable that randomly generates numbers between 0, 1, 2
If the number is 0, assign "rock"
Else if the number is 1, assign "paper"
Else if the number is 2, assign "scissors"
Return variable
*/

function getComputerChoice() {
    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored-minCeiled) + minCeiled);
    }

    let choiceValue = getRandomInt(0, 3)
    if (choiceValue < 1) {
        choiceValue = "Rock"
    } else if (choiceValue === 1) {
        choiceValue = "Paper"
    } else if (choiceValue < 0) {
        choiceValue = "Scissors"
    } else {
        choiceValue = "There's something wrong"
    }

    return choiceValue
}