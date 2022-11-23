console.log("Dice Roller here...");

let dieRolls = [];

let rollButton = document.getElementById("rollBtn");

let numberOfDiceToRollInput = document.getElementById("numberOfDiceToRollInput");

let diceTotalSpan = document.getElementById("diceTotal");

let showAllRollsBtn = document.getElementById("showAllRollsBtn");

let allTheRollsList = document.getElementById("allTheRollsList");


rollButton.addEventListener("click", function() {
    let numberOfTimesToRoll = numberOfDiceToRollInput.value;

    let diceTotal = 0;
    
    for (let i=0; i < numberOfTimesToRoll; i++) {
        let currentRoll = getRandomIntInclusive(1, 6);
        dieRolls.push(currentRoll);

        diceTotal += currentRoll;
    }
    console.log(dieRolls);
    console.log(diceTotal);

    diceTotalSpan.innerHTML = diceTotal;
});

showAllRollsBtn.addEventListener("click", () => {
    
    for (let i=0; i < dieRolls.length; i++) {
        allTheRollsList.innerHTML += `<li> ${dieRolls[i]} </li>`;
    }
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
  