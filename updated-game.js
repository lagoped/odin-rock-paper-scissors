const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"
const pointsToWin = 5

const defaultMessage = "Make a choice"

let playerScore = 0
let computerScore = 0
let round = 0


/*
    PLAYER CHOICE
*/
function playerSelectRock() {
    playRound(rock)
}

function playerSelectPaper() {
    playRound(paper)
}

function playerSelectScissors() {
    playRound(scissors)
}


/*
    GAME LOOP
*/
function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    const outcome = roundOutcome(playerChoice, computerChoice);

    if (gameOver()) {
        updateHeader(gameOverMessage());
        disableChoiceButtons();
    }
    else {
        round++;
        updateHeader(outcome);
    }
}

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

//So-so code, the logic and show message are in the same method. I know it's unclean but for the sake of brevity, it's ok
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

/*
    UI
*/
function updateHeader(roundMessage = null) {
    document.getElementById("player-score").textContent = "Player Score : " + playerScore;
    document.getElementById("computer-score").textContent = "Computer Score : " + computerScore;

    document.getElementById("current-round").textContent = "Current round : " + round;

    if (roundMessage) {
        document.getElementById("round-message").textContent = roundMessage
    }
}

function gameOver() {
    return playerScore >= pointsToWin || computerScore >= pointsToWin;
}

function gameOverMessage(){
    if(playerScore > computerScore){
        return "Congratulation, you win!"
    }
    else {
        return "You lose. Better luck next time."
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 0;

    updateHeader(defaultMessage);
    enableChoiceButtons();
}

function disableChoiceButtons(){
    document.getElementById("rock-button").disabled = true;
    document.getElementById("paper-button").disabled = true;
    document.getElementById("scissors-button").disabled = true;
}

function enableChoiceButtons(){
    document.getElementById("rock-button").disabled = false;
    document.getElementById("paper-button").disabled = false;
    document.getElementById("scissors-button").disabled = false;
}
