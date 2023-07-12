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

function game() { 
    console.log("Welcome");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection)); 
        if(checkWinner(playerSelection, computerSelection) == "Player") { 
            playerScore++;
        } else if (checkWinner(playerSelection, computerSelection) == "Computer") { 
            computerScore++;
        }
    }
    console.log("Game Over")
    if (playerScore > computerScore) { 
        console.log("Player is the winner!");
    } else if (playerScore < computerScore) { 
        console.log("Computer is the winner!");
    } else { 
        console.log("We have a tie!");
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
  