
// Function that randomly generates the Computers choices
function computerPlay() {
    let elements = ["rock","paper","scissor"];
    return elements[Math.floor(Math.random() * 3)];
}

function wincon(a,b) {
    if (a==b){
        return "Draw"
    }
    //Rock v Paper
    else if ((a=="rock" && b=="paper" )|| (b=="rock" && a=="paper" )) {
        return "paper";
    }
    //Rock v Scissor
    else if ((a=="rock" && b=="scissor" )|| (b=="rock" && a=="scissor" )) {
        return "rock";
    }
    //Scisssor v Paper
    else if ((a=="scissor" && b=="paper" )|| (b=="scissor" && a=="paper" )) {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
  
    if (playerSelection==null) {
        return "Please Insert a choice";
    }

    else if (wincon(playerSelection,computerSelection)=="Draw") {
        return "Draw";
    }

    else if (wincon(playerSelection,computerSelection)==playerSelection) {
        return "Player";
    }

    else if (wincon(playerSelection,computerSelection)==computerSelection) {
        return "Computer";
    }


}

function game() {
    let compwins = 0;
    let playerwins = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Deine Wahl").toLowerCase();
        let computerSelection = computerPlay();
        console.log("Player selected: " + playerSelection);
        console.log("Computer selected: " + computerSelection);
        let winner = playRound(playerSelection, computerSelection);

        if (winner == "Player") {
            playerwins += 1;
            console.log(winner + " won the round.");
        }

        else if (winner == "Computer") {
            compwins++;
            console.log(winner + " won the round.");
        }

        else {
            console.log("Draw!")
        }
        
        console.log(`Counter for Computer: ${compwins}, counter for Player: ${playerwins}`)
     } 
    
     if (compwins>playerwins) {
        console.log("Computer won the game");
     }

     else if (compwins==playerwins) {
        console.log("Neither won the game");
     }
     else {
        console.log("Player won the game");
     }
}

game();