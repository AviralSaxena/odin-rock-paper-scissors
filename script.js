function getComputerChoice(){
    let choice = ['Rock', 'Paper', 'Scissors'];
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
        return ("You Lose! Scissors beat Rock\n");
    }

    else if ((playerSelection == "SCISSORS") && (computerSelection == "PAPER")){
        return ("You Win! Scissors beat Paper\n");
    }

    else{
        return ("Tie!\n");
    }
}

function game(){

    let playerSelection = prompt("Enter your Choice:\n");

    for (let i=0; i<5; i++){
        console.log(playRound(playerSelection.toUpperCase(),getComputerChoice()));
    }

}



