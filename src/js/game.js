const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result p");
const choicesNodeList = document.querySelectorAll(".choice");
const choices = Array.from(choicesNodeList);

let userScore = 0;
let computerScore = 0;

const randomChoiceNumber = Math.floor(Math.random() * 3);
let randomChoice = choices[randomChoiceNumber];

choices.map((choice) => {
  choice.addEventListener("click", () => {
    switch (choice.id) {
      case "rock-choice":
        switch (randomChoice.id) {
          case "paper-choice":
            computerWin(choice);
            changeResult("Paper covers rock. You lose!");
            break;

          case "scissors-choice":
            userWin(choice);
            changeResult("Scissors can't cut rocks. You win!");
            break;

          default:
            tie(choice);
            changeResult("It's a tie. No one wins.");
            break;
        }
        break;

      case "paper-choice":
        switch (randomChoice.id) {
          case "rock-choice":
            userWin(choice);
            changeResult("Paper covers rock. You win!");
            break;

          case "scissors-choice":
            computerWin(choice);
            changeResult("Scissors cuts papers. You lose!");
            break;

          default:
            tie(choice);
            changeResult("It's a tie. No one wins.");
            break;
        }
        break;

      case "scissors-choice":
        switch (randomChoice.id) {
          case "rock-choice":
            computerWin(choice);
            changeResult("Scissors can't cut rocks. You lose!");
            break;

          case "paper-choice":
            userWin(choice);
            changeResult("Scissors cuts papers. You win!");
            break;

          default:
            tie(choice);
            changeResult("It's a tie. No one wins.");
            break;
        }
        break;

      default:
        break;
    }
  });
});

const userWin = (choiceElement) => {
  userScore++;
  userScoreSpan.textContent = userScore;
  randomChoice = choices[refreshedRandomNumber()];
  changeElementColor(choiceElement, "green");
};

const computerWin = (choiceElement) => {
  computerScore++;
  computerScoreSpan.textContent = computerScore;
  randomChoice = choices[refreshedRandomNumber()];
  changeElementColor(choiceElement, "red");
};

const tie = (choiceElement) => {
  randomChoice = choices[refreshedRandomNumber()];
  changeElementColor(choiceElement, "grey");
};

const changeElementColor = (choiceElement, color) => {
  const choiceElementStyle = choiceElement.style;

  choiceElementStyle.border = `4px solid ${color}`;
  choiceElementStyle.backgroundColor = color;
  setTimeout(() => {
    choiceElementStyle.border = `4px solid white`;
    choiceElementStyle.backgroundColor = "";
  }, 1000);
};

const refreshedRandomNumber = () => {
  const randomChoiceNumberRefreshed = Math.floor(Math.random() * 3);
  return randomChoiceNumberRefreshed;
};

const changeResult = (message) => {
  result.textContent = message;
};
