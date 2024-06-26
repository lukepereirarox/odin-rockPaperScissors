const choices = ["rock", "paper", "scissors"];
const typeChart = {
  rock: { weakTo: "paper", strongTo: "scissors" },
  paper: { weakTo: "scissors", strongTo: "rock" },
  scissors: { weakTo: "rock", strongTo: "paper" },
};

function getComputerChoice() {
  let i = Math.floor(Math.random() * 3);
  let compRan = choices[i];
  console.log("Computer choice: " + compRan);
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

function playGame() {
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

  let humanScore = 0;
  let compScore = 0;
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    while (1) {
      if (!choices.includes(humanChoice)) {
        alert("Enter a Valid Option");
        humanChoice = getHumanChoice();
      } else {
        console.log("Human Choice: " + humanChoice);
        break;
      }
    }

    let compChoice = getComputerChoice();
    playRound(humanChoice, compChoice);
  }

  if (humanScore === compScore) {
    alert("It's a Tie");
    console.log("Final Tie");
  } else if (humanScore < compScore) {
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
