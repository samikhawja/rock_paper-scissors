var choiceArray = ["R", "P", "S"];
  
var winCount = 0;
var tieCount = 0;
var lossCount = 0;

function playRPS() {
    var confirmChoice = true;
    while (confirmChoice) {
          
        // -2. You win
        // -1. Computer wins
        // 0. Tie
        // 1. You win
        // 2 Computer wins

        var choice = prompt("Choose R, P or S:");

        var choiceIndex = choiceArray.indexOf(choice.toUpperCase());

        var computerChoice = Math.floor(Math.random() * 3);

        if (choiceIndex != 0 || choiceIndex != 1 || choiceIndex != 2) {
            while (choiceIndex != 0 && choiceIndex != 1 && choiceIndex != 2) {
                choice = prompt("Choose R, P or S:");
                choiceIndex = choiceArray.indexOf(choice.toUpperCase());
            }
        }
        
        var result = choiceIndex - computerChoice;
        var message = "I'm always a winner, What do you mean?";

        if (result === 0) {
            tieCount += 1;
            message = "tied";
        } else if (result === 1 || result === -2) {
            winCount += 1;
            message = "win";
        } else {
            lossCount += 1;
            message = "lose";
        }

        alert("You " + message + 
                "!\n\nTie count: " + tieCount +
                "\nWin Count: " + winCount +
                "\nLose Count: " + lossCount);

        confirmChoice = confirm("Would you like to play again?");

    }
  }
  
  playRPS();
