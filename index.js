const choices = ["Rock", "Paper", "Scissors"];
const typeChart = {
  Rock: { weakTo: "Paper", strongTo: "Scissors" },
  Paper: { weakTo: "Scissors", strongTo: "Rock" },
  Scissors: { weakTo: "Rock", strongTo: "Paper" },
};

const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");
const outcomeDiv = document.getElementById("outcome");
const userChoiceDiv = document.getElementById("userChoice");
const vsDiv = document.getElementById("vs");
const compChoiceDiv = document.getElementById("compChoice");
const humanScoreDiv = document.getElementById("humanScore");
const compScoreDiv = document.getElementById("compScore");
const finalWinnerDiv = document.getElementById("finalWinner");
const replayBtn = document.createElement("button");
replayBtn.id = "replay";
replayBtn.className = "option";
replayBtn.textContent = "Play Again";
let userChoice = "";
let humanScore = 0;
let compScore = 0;

Rock.addEventListener("click", () => getHumanChoice("Rock"));
Paper.addEventListener("click", () => getHumanChoice("Paper"));
Scissors.addEventListener("click", () => getHumanChoice("Scissors"));

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
  document.body.appendChild(replayBtn);
}

replayBtn.addEventListener("click", () => {
  humanScore = 0;
  compScore = 0;
  finalWinnerDiv.textContent = "";
  replayBtn.remove();
});
