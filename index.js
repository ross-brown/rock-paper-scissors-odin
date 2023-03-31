// randomly returns Rock Paper or Scissors
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // create an object that pairs up winning pairs
  const winningPlays = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };
  //convert player input string to capitalized string
  const playerChoice =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  //check if selections are the same
  if (playerChoice === computerSelection) {
    return "You Tied!";
  }
  //check if player picked a winning hand
  if (winningPlays[playerChoice] === computerSelection) {
    return `You Win! ${playerChoice} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerChoice}`;
  }
}

//plays 5 rounds
//keeps score and reports winner or loser at the end

function game() {
  //have score variables to each
  let playerScore = 0;
  let computerScore = 0;

  //get user choice
  const userChoice = prompt("Rock, Paper, or Scissors?");
  //get computer choice
  const compChoice = getComputerChoice();
  //init a round with each choice
  const result = playRound(userChoice, compChoice);
  // check if user won or not and increment the score
  if (result[4] === 'W') {
    playerScore++;
  } else if (result[4] === 'L') {
    computerScore++;
  }
  console.log(result, '\n', `Player: ${playerScore} Computer: ${computerScore}`)

  //get user choice
  const userChoice2 = prompt("Rock, Paper, or Scissors?");
  //get computer choice
  const compChoice2 = getComputerChoice();
  //init a round with each choice
  const result2 = playRound(userChoice2, compChoice2);
  // check if user won or not and increment the score
  if (result2[4] === 'W') {
    playerScore++;
  } else if (result2[4] === 'L') {
    computerScore++;
  }
  console.log(result2, '\n', `Player: ${playerScore} Computer: ${computerScore}`)
}

game();
