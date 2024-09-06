//INFO:Dice Rolle Progame

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const randomeNum = Math.floor(Math.random() * 6 + 1)
    console.log(randomeNum)
}