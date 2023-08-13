function getComputerChoice(){
    let choice = ['ROCK', 'PAPER', 'SCISSORS'];
    let choiceNum = Math.floor(Math.random()*3);
    return choice[choiceNum];
}

function playRound(playerSelection, computerSelection){

    if ((playerSelection == "ROCK") && (computerSelection == "PAPER")){
        return ("You Lose! Paper beats Rock\n");
    }

    else if ((playerSelection == "ROCK") && (computerSelection == "SCISSORS")){
        return ("You Win! Rock beats Scissors\n");
    }

    else if ((playerSelection == "PAPER") && (computerSelection == "SCISSORS")){
        return ("You Lose! Scissors beat Paper");
    }

    else if ((playerSelection == "PAPER") && (computerSelection == "ROCK")){
        return ("You Win! Paper beats Rock\n");
    }

    else if ((playerSelection == "SCISSORS") && (computerSelection == "ROCK")){
        return ("You Lose! Rock beats Scissor\n");
    }

    else if ((playerSelection == "SCISSORS") && (computerSelection == "PAPER")){
        return ("You Win! Scissors beat Paper\n");
    }

    else{
        return ("Tie!\n");
    }
}

const body = document.querySelector('body');

const rockButton=document.createElement('button');
const paperButton= document.createElement('button');    
const scissorsButton= document.createElement('button');
const result=document.createElement('div');
const score = document.createElement('div');
const winner = document.createElement('div');

rockButton.textContent="Rock";
paperButton.textContent="Paper";
scissorsButton.textContent="Scissors";

let playerScore = 0, computerScore = 0;

rockButton.addEventListener('click',() => {
    result.textContent = playRound('ROCK',getComputerChoice());
    updateResult();
});

paperButton.addEventListener('click',() => {
    result.textContent = playRound('PAPER',getComputerChoice());
    updateResult();
});

scissorsButton.addEventListener('click',() => {
    result.textContent = playRound('SCISSORS',getComputerChoice());
    updateResult();
});

function updateResult(){
    if (result.textContent.includes('You Win!')){
        playerScore++;
        if (playerScore === 5){
            winner.textContent = "You Win!";
            setTimeout(() => {
                winner.textContent = "";
            }, 1000);
            playerScore = 0;
            computerScore = 0;
        }
    }

    else if(result.textContent.includes('You Lose!')){
        computerScore++;
        if (computerScore === 5){
            winner.textContent = "Computer Wins!";
            setTimeout(() => {
                winner.textContent = "";
            }, 1000);
            playerScore = 0;
            computerScore = 0;
        }
    }

    score.textContent = `Player Score = ${playerScore}\t\t Computer Score = ${computerScore}`;

}

body.append(rockButton,paperButton,scissorsButton,result,score,winner);