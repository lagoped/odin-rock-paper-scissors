const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"
const pointsToWin = 5

let playerScore = 0
let computerScore = 0
let round = 0


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


//TODO ici sera en fonction du bouton
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


function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    alert(roundOutcome(playerChoice, computerChoice) + "\n"
        + "Player current score : " + playerScore + "\n"
        + "Computer current score : " + computerScore + "\n"
    );
}

function roundOutcome(playerChoice, computerChoice) {
    switch (computerChoice) {
        case rock:
            return roundOutcomeAgainstRock(playerChoice);

        case paper:
            return roundOutcomeAgainstPaper(playerChoice);

        case scissors:
            return roundOutcomeAgainstScissors(playerChoice);
    }
}

function roundOutcomeAgainstRock(playerChoice) {
    if (playerChoice === rock) {
        return "Rock vs Rock, it's a draw";
    }
    else if (playerChoice === paper) {
        playerScore++;
        return "Paper beat Rock, you win this round";
    }
    else if (playerChoice === scissors) {
        computerScore++;
        return "Scissors is beaten by Rock, you lose this round"
    }
}

function roundOutcomeAgainstPaper(playerChoice) {
    if (playerChoice === rock) {
        computerScore++;
        return "Rock is beaten by Paper, you lose this round";
    }
    else if (playerChoice === paper) {
        return "Paper vs Paper, it's a draw";
    }
    else if (playerChoice === scissors) {
        playerScore++;
        return "Scissors beats Paper, you win this round"
    }
}

function roundOutcomeAgainstScissors(playerChoice) {
    if (playerChoice === rock) {
        playerScore++;
        return "Rock beats Scissors, you win this round";
    }
    else if (playerChoice === paper) {
        computerScore++;
        return "Paper is beaten by Scissors, you lose this round";
    }
    else if (playerChoice === scissors) {
        return "Scissors vs Scissors, it's a draw"
    }
}


function playGame() {

    for (let i = 0; i < pointsToWin; i++) {
        playRound();
    }

    if (playerScore > computerScore) {
        alert("You win");
    }
    else if (playerScore < computerScore) {
        alert("You lose")
    }
    else {
        alert("It's a draw")
    }
}

//NEW METHODS
function updateHeader() {
    document.getElementById("player-score").textContent = "Player Score : " + playerScore;
    document.getElementById("computer-score").textContent = "Computer Score : " + computerScore;

    round++; //TODO place in refactor game code instead of here
    document.getElementById("current-round").textContent = "Current round : " + round;
}

function disableChoiceButton() {

}

function enableChoiceButton() {

}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 0;

    updateHeader();
}


function playerSelectRock(){
    return rock
}

function playerSelectPaper(){
    return paper
}

function playerSelectScissors(){
    return scissors
}




//TODO start round button, others buttons disabled until it is clicked
//TODO restart, reset all to 0 (wait until win or lost?)

// playGame();