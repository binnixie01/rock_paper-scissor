function getComputerChoice() {
  let choiceNum = Math.floor(Math.random() * 3);
  if (choiceNum == 0) {
    return "rock";
  } else if (choiceNum == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log(`Both players selected ${playerSelection}. Its a draw`);
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      console.log("Rock smashes scissors! You win!");
      playerScore+=1;
    } else {
      console.log("Paper covers rock! You lose.");
      computerScore+=1;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      console.log("Paper covers rock! You win!");
      playerScore+=1;
    } else {
      console.log("Scissors cuts paper! You lose.");
      computerScore+=1;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      console.log("Scissors cuts paper! You win!");
      playerScore+=1;
    } else {
      console.log("Rock smashes scissors! You lose.");
      computerScore+=1;
    }
  }
}

function game(){
    
    for(let i=0;i<5;i++){
        const playerSelection = prompt("chooose!! ");
        const computerSelection = getComputerChoice();
        console.log(computerSelection)

        playRound(playerSelection, computerSelection);
        
    }
    console.log(`${playerScore} ${computerScore}`)
    if(playerScore>computerScore){
        console.log("player wins")
    }
    else{
        console.log("computer wins")
    }
}

let playerScore=0;
let computerScore=0;

game()