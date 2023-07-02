const options = ["rock", "paper", "scissor"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) { 
    if (playerSelection == computerSelection) { 
        return "It's a tie.";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
        ){
            return "Player Wins!";
        } else {
            return "Computer Wins."
        }

}

function playRound(playerSelection, computerSelection) {


}


getComputerChoice();
