var choiceArray = ["R", "P", "S"];

function playRPS() {
  var confirm = true
    while (confirm) {
    var choice = prompt("Choose R, P or S:");

    var computerChoice = Math.floor(Math.random(0, 3));

    var choiceIndex = choiceArray.indexOf(choice.toUpperCase);

    var result = choiceIndex - computerChoice;

    var winCount = 0;
    var tieCount = 0;
    var lossCount = 0;

    // -2. You win

    // -1. Computer wins

    // 0. Tie

    // 1. You win

    // 2 Computer wins

    if (result === 0) {
      tieCount += 1;
      alert("You tied with the computer");
    } else if (result === 1 || result === -2) {
      winCount += 1;
      alert("You beat the computer");
    } else {
      lossCount += 1;
      alert("The computer beat you");
    }
    alert("tieCount" + tieCount);
    confirm = confirm("Would you like to play again?");
  }
}
playRPS();
