const choices = ["r", "p", "s"];

function getComputerChoice() {
  let i = Math.floor(Math.random() * 3);
  let compChoice = choices[i];
  console.log(compChoice);
}

function getHumanChoice() {
  let humanChoice = window
    .prompt(
      `Enter your Choice
    r for Rock
    p for Paper
    s for Scissors`
    )
    .toLowerCase();
  console.log(humanChoice);
}

getComputerChoice();
getHumanChoice();
