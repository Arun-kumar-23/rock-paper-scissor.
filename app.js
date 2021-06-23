let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const Choices =["r", "p","s"];
    const randomNumber = Math.floor(Math.random()*3);
    return Choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissor";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
 
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} Beats ${convertToWord(computerChoice)}${smallCompWord}. You Win! `;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 500);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost... `;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 500);
    
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} Equals ${convertToWord(computerChoice)}${smallCompWord}. Drawww! `;
    userChoice_div.classList.add('grey-glow');
    setTimeout(function() { userChoice_div.classList.remove('grey-glow')}, 500);
}
function game(userChoice){
 const computerChoice = getComputerChoice();
 switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
         win(userChoice, computerChoice)
    break;
    case "rp":
    case "ps":
    case "ss":
        lose(userChoice, computerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
    break;
 }
}


function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })  
    paper_div.addEventListener('click', function() {
        game("p");
    })  
    scissor_div.addEventListener('click', function() {
        game("s");
    })  
}
main();