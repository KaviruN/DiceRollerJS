//INFO:Dice Rolle Progame

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceTxt = document.getElementById("diceTxt");
    const diceImages = document.getElementById("diceImages");
    const value = [];
    const images = [];

    for(let i=0 ; i < numOfDice; i++){
        const randomeNum = Math.floor(Math.random() * 6) +1;
        value.push(randomeNum);
        images.push(`<img src="images/${randomeNum}.png" alt = "Dice-${randomeNum}">`);

    }
    diceTxt.textContent = `dice: ${value.join(`, `)}`;
    diceImages.innerHTML = images.join('');
}