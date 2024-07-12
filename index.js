const choices = ["rock", "paper", "scissors"];
const typeChart = {
  rock: { weakTo: "paper", strongTo: "scissors" },
  paper: { weakTo: "scissors", strongTo: "rock" },
  scissors: { weakTo: "rock", strongTo: "paper" },
};

const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");

let userChoice = "";
let humanScore = 0;
let compScore = 0;

rock.addEventListener("click", getHumanChoice("rock"));
paper.addEventListener("click", getHumanChoice("scissors"));
scissors.addEventListener("click", getHumanChoice("scissors"));

function getComputerChoice() {
  let i = Math.floor(Math.random() * 3);
  let compRan = choices[i];
  console.log("Computer choice: " + compRan);
  return compRan;
}

function getHumanChoice(choiceByButton) {
  userChoice = choiceByButton;
  console.log(userChoice);
  playRound(userChoice, compRan);
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

function playGame() {
  if (compScore === 5) {
    alert(
      "The Computer Wins!\nYour Score: " +
        humanScore +
        "\nComputer Score : " +
        CompScore
    );
    console.log("Final Loss");
  } else {
    alert(
      "You win!\nYour Score: " + humanScore + "\nComputer Score: " + compScore
    );
    console.log("Final Win");
  }
}

playGame();
