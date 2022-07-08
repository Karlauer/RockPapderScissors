
// Function that randomly generates the Computers choices
function computerPlay() {
    let elements = ["Rock","Paper","Scissor"];
    return elements[Math.floor(Math.random() * 3)];
}

function wincon(a,b) {
    if (a==b){
        return "Draw"
    }
    //Rock v Paper
    else if ((a=="Rock" && b=="Paper" )|| (b=="Rock" && a=="Paper" )) {
        return "Paper";
    }
    //Rock v Scissor
    else if ((a=="Rock" && b=="Scissor" )|| (b=="Rock" && a=="Scissor" )) {
        return "Rock";
    }
    //Scisssor Paper
    else if ((a=="Scissor" && b=="Paper" )|| (b=="Scissor" && a=="Paper" )) {
        return "Scissor";
    }
}

function game(playerSelection, computerSelection) {
  
    if (playerSelection==null) {
        return "Please Insert a choice";
    }
   // Draw:
    else if (wincon(playerSelection,computerSelection)=="Draw") {
        return "Draw";
    }
 // Rock beats Paper:
    else if (wincon(playerSelection,computerSelection)==playerSelection) {
        return "Player wins";
    }

    else if (wincon(playerSelection,computerSelection)==computerSelection) {
        return "Computer wins";
    }


}

const playerSelection = prompt("Deine Wahl");
const computerSelection = computerPlay();
console.log(playerSelection);
console.log(computerSelection);

console.log(game(playerSelection, computerSelection));