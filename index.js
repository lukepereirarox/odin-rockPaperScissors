const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let i = Math.floor(Math.random() * 3);
  let compChoice = choices[i];
  console.log(compChoice);
}

function getHumanChoice() {
  let humanChoice = window
    .prompt(
      `Enter your Choice
    Rock
    Paper
    Scissors`
    )
    .toLowerCase();
  console.log(humanChoice);
}

getComputerChoice();
getHumanChoice();

if (!choices.includes(getHumanChoice)) {
  alert("Enter a Valid Option");
  getHumanChoice();
}
