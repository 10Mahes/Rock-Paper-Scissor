let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg")
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

//computer choice
const computerChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIndex = Math.floor(Math.random() * option.length);
  return option[randIndex];
}

// draw function
const drawGame = () => {
  user.innerText = userScore;
  comp.innerText = compScore;
  message.style.backgroundColor = "green";
  message.innerText = " Game was Draw. Play Again ";
}

// winner function
const showWinner = (userWin, userChoice ,compChoice) => {
  if (userWin) {
    user.innerText = ++userScore;
    message.innerText = `You Win :) ${userChoice} beats ${compChoice}` 
    message.style.backgroundColor = "green";

  }
  else {
    comp.innerText = ++compScore;
    message.innerText = `You Lose :( ${userChoice} beats ${compChoice}`
    message.style.backgroundColor = "red";
  }
}

// Main logic 
const game = (userChoice) => {
  console.log("user", userChoice);
  const compChoice = computerChoice();
  console.log("comp", compChoice)

  if (userChoice === compChoice) {
    drawGame();
  }
  else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor , paper
      userWin = compChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper") {
      //rock, scissor
      userWin = compChoice === "rock" ? true : false;
    }
    else {
      //paper, rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}

// User Choice
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const userChoice = e.target.id;
    game(userChoice)
  })
})

