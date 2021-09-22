var choiceArray = ["R", "P", "S"];

function playRPS() {
    var choice = prompt("Choose R, P or S:");

    var computerChoice = Math.floor(Math.random(0, 3));

    var choiceIndex = choiceArray.indexOf(choice);

    var result = choiceIndex - computerChoice;

    var winCount = 0;
    var tieCount = 0;
    var lossCount = 0;
    
    // -2. You win

    // -1. Computer wins

    // 0. Tie

    // 1. You win

    // 2 Computer wins


    
}
