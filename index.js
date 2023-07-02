const options = ["rock", "paper", "scissor"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) { 
    if (playerSelection == computerSelection) { 
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
        ){
            return "Player";
        } else {
            return "Computer";
        }

}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie!";
    } else if (result == "Player") { 
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else { 
        return `You lose! ${computerSelection} beats ${playerSelection}.`; 
    }
}


getComputerChoice();
