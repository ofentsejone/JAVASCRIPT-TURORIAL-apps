//aROCK-PAPER-SCISSORS

const choices=["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay")
let playerScore =0;
let computerScore=0;

function playGame(playerChoice){
    const computerChoice= choices[Math.floor(Math.random()*3)] //declaring in function so iy can be updated every we play

    console.log(computerChoice);
    let results=" ";

    if(playerChoice === computerChoice){
      results = "ITS A TIE"
    }
    else{
        switch(playerChoice){
            case "rock" : results=(computerChoice === "scissors")? "YOU WIN": "YOU LOSE";break;
            case "paper" : results=(computerChoice === "rock")? "YOU WIN": "YOU LOSE";break;
            case "scissors" : results=(computerChoice === "paper")? "YOU WIN": "YOU LOSE";break;
      
        }
    }

    playerDisplay.textContent=`PLAYER: ${playerChoice} `;
    computerDisplay.textContent=`COMPUTER: ${computerChoice} `;
    resultsDisplay.textContent = results ;

    resultsDisplay.classList.remove("greenText","redText");
    switch(results){
        case "YOU WIN":
            resultsDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent=playerScore;
            break;
        case "YOU LOSE":
            resultsDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent=computerScore;
            break;
    }   
}
