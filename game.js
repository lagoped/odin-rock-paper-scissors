const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"


let rounds = 5
let playerScore = 0
let computerScore = 0


function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choice;

    switch (random) {
        case 0: choice = rock; break;
        case 1: choice = paper; break;
        case 2: choice = scissors; break;
    }

    return choice;
}


function getPlayerChoice() {
    let choice = prompt("(R)ock, (P)apper, (S)cissors ?");

    if (checkPlayerChoice(choice, rock)) {
        return rock
    }
    else if (checkPlayerChoice(choice, paper)) {
        return paper
    } 
    else if (checkPlayerChoice(choice, scissors)) {
        return scissors
    }
}

function checkPlayerChoice(playerInput, option) {

    let inputFitOption = option.toLowerCase().localeCompare(playerInput.toLowerCase()) === 0
    let inputFirstLetterFitOption = option.charAt(0).toLowerCase().localeCompare(playerInput.charAt(0).toLowerCase()) === 0

    return inputFitOption || inputFirstLetterFitOption
}

// console.log(getComputerChoice())

console.log(getPlayerChoice())