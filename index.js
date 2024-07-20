const choices = ["rock", "paper", "scissors"];
const typeChart = {
  rock: { weakTo: "paper", strongTo: "scissors" },
  paper: { weakTo: "scissors", strongTo: "rock" },
  scissors: { weakTo: "rock", strongTo: "paper" },
};

const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
const outcomeDiv = document.getElementById("outcome");
const userChoiceDiv = document.getElementById("userChoice");
const vsDiv = document.getElementById("vs");
const compChoiceDiv = document.getElementById("compChoice");
const humanScoreDiv = document.getElementById("humanScore");
const compScoreDiv = document.getElementById("compScore");
const finalWinnerDiv = document.getElementById("finalWinner");

let userChoice = "";
let humanScore = 0;
let compScore = 0;

rock.addEventListener("click", () => getHumanChoice("rock"));
paper.addEventListener("click", () => getHumanChoice("paper"));
scissors.addEventListener("click", () => getHumanChoice("scissors"));

function getComputerChoice() {
  let i = Math.floor(Math.random() * 3);
  let compRan = choices[i];
  console.log("Computer choice: " + compRan);
  compChoiceDiv.textContent = compRan;
  vsDiv.textContent = "vs";
  return compRan;
}

function getHumanChoice(choiceByButton) {
  userChoice = choiceByButton;
  console.log("User Choice :" + userChoice);
  userChoiceDiv.textContent = userChoice;
  playRound(userChoice, getComputerChoice());
}

function playRound(h, c) {
  if (h === c) {
    console.log("Tie");
    outcomeDiv.textContent = "Tie";
  } else if (typeChart[h].strongTo === c) {
    console.log("You win!");
    outcomeDiv.textContent = "Win";
    humanScore++;
  } else if (typeChart[h].weakTo === c) {
    console.log("You Lose!");
    outcomeDiv.textContent = "Lose";
    compScore++;
  }

  console.log("Human Score :" + humanScore);
  humanScoreDiv.textContent = "Your Score: " + humanScore;
  console.log("Computer Score :" + compScore);
  compScoreDiv.textContent = "Computer's Score: " + compScore;

  if (humanScore === 5 || compScore === 5) {
    endGame();
  }
}

function endGame() {
  if (compScore === 5) {
    finalWinnerDiv.textContent = "The Computer Wins!";
    console.log("Final Loss");
  } else {
    finalWinnerDiv.textContent = "You Win!";
    console.log("Final Win");
  }
}
