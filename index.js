const choices = ["rock", "paper", "scissors"];
const typeChart = {
  rock: { weakTo: "paper", strongTo: "scissors" },
  paper: { weakTo: "scissors", strongTo: "rock" },
  scissors: { weakTo: "rock", strongTo: "paper" },
};
let humanScore = 0;
let compScore = 0;
function getComputerChoice() {
  let i = Math.floor(Math.random() * 3);
  let compRan = choices[i];
  console.log("Computer choice:" + compRan);
  return compRan;
}

function getHumanChoice() {
  let userChoice = window
    .prompt(
      `Enter your Choice
    Rock
    Paper
    Scissors`
    )
    .toLowerCase();
  console.log(userChoice);
  return userChoice;
}

function playRound(h, c) {
  if (h === c) {
    console.log("Tie");
    alert("Tie");
  } else if (typeChart[h].strongTo === c) {
    console.log("You win!");
    alert("You win!");
    humanScore++;
  } else if (typeChart[h].weakTo === c) {
    console.log("You Lose!");
    alert("You lose!");
    compScore++;
  }

  console.log(humanScore);
  console.log(compScore);
}

let play = "y";

while (play === "y") {
  let humanChoice = getHumanChoice();
  while (1) {
    if (!choices.includes(humanChoice)) {
      alert("Enter a Valid Option");
      humanChoice = getHumanChoice();
    } else {
      console.log("Human Choice:" + humanChoice);
      break;
    }
  }

  let compChoice = getComputerChoice();
  playRound(humanChoice, compChoice);
  play = window.prompt("Play again?(y/n) ");
}

alert("End of the Day's play!");
