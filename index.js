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
  let compChoice = choices[i];
  console.log(compChoice);
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

getComputerChoice();
const humanChoice = getHumanChoice();

if (!choices.includes(humanChoice)) {
  alert("Enter a Valid Option");
  while (!choices.includes(humanchoice)) {
    userChoice = getHumanChoice;
  }
}

function playRound(humanChoice, compChoice) {
  if (humanChoice === compChoice) {
    console.log("Tie");
  } else if (typeChart[humanChoice].strongTo === compChoice) {
    console.log("You win!");
    humanScore++;
  } else if (typeChart[humanChoice].weakTo === compChoice) {
    console.log("You Lose!");
    compScore++;
  }

  console.log(humanScore);
  console.log(compScore);
}
