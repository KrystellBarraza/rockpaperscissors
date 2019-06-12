let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");

let result_p = document.querySelector("gameResult");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCompChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


function win(_userChoice, _compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  document.getElementById("gameResult").innerHTML = (_userChoice) + " beats " + (_compChoice) + ". The Engineer Wins!";
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  return;
  }


function lose(_userChoice, _compChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  document.getElementById("gameResult").innerHTML = (_compChoice) + " beats " + (_userChoice) + ". The Machine Wins!";
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  return;
  }
  

function draw(_userChoice, _compChoice) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  document.getElementById("gameResult").innerHTML = "It's a draw! Great minds think alike.";
}


function game(_userChoice) {
const _compChoice = getCompChoice();
switch (_userChoice + _compChoice) {
  case "rockscissors":
  case "paperrock":
  case "scissorspaper":
    win(_userChoice , _compChoice);
    break;
  case "rockpaper":
  case "paperscissors":
  case "scissorsrock":
    lose(_userChoice , _compChoice);
    break;
  case "rockrock":
  case "paperpaper":
  case "scissorsscissors":
    draw (_userChoice , _compChoice);
    break;
}
}

function main() {
  rock_div.addEventListener('click', function () {
    game("rock");
  });

  paper_div.addEventListener('click', function () {
    game("paper");
  });

  scissors_div.addEventListener('click', function () {
    game("scissors");
  });
}

main () ; 
