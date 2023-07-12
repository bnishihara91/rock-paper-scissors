const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function displayResult(message) {
    const resultEl = document.getElementById("result");
    resultEl.textContent = "Result: " + message;
  }

  function displayScores() {
    const playerScoreEl = document.getElementById("playerScore");
    const computerScoreEl = document.getElementById("computerScore");
    playerScoreEl.textContent = "Player Score: " + playerScore;
    computerScoreEl.textContent = "Computer Score: " + computerScore;
  }
  
function checkWinner(playerSelection, computerSelection) { 
    if (playerSelection === computerSelection) { 
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
        ){
            return "Player";
        } else {
            return "Computer";
        }

}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = checkWinner(playerSelection, computerSelection);
    if (result === "Tie") {
        displayResult("It's a tie!");
    } else if (result === "Player") { 
        displayResult(`You win! ${playerSelection} beats ${computerSelection}.`);
        playerScore++;
    } else { 
        displayResult(`You lose! ${computerSelection} beats ${playerSelection}.`); 
        computerScore++;
    }
    displayScores();
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    const gameResultEl = document.getElementById("gameResult");
    if (playerScore > computerScore) { 
        gameResultEl.textContent = "Player is the winner!";
    } else if (playerScore < computerScore) { 
        gameResultEl.textContent = "Computer is the winner!";
    } else { 
        gameResultEl.textContent = "We have a tie!";
  }
}

document.getElementById("rock").addEventListener("click", () => {
    playRound("rock");
  });
  
document.getElementById("paper").addEventListener("click", () => {
    playRound("paper");
  });
  
document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors");
  });
  