let left = document.getElementById("left");
let middle = document.getElementById("middle");
let right = document.getElementById("right");
let fruitArray = ["&#127811","&#127812","&#127813", "&#127814", "&#127815", "&#127816", "&#127817", "&#127818"];
let array = [left, middle, right];

let turns = 0;
let turnsMax = 20;
let buttonforturn = document.getElementById("button");

let amountturned = document.getElementById("amountturned");
let turncounter = document.getElementById("turncounter");

function turn(){
    turns += 1;
    turncounter.innerHTML = turns;
    console.log(turns);
    for(x = 0; x < 3; x++){
        let fruit = Math.random()*8;
        array[x].innerHTML = fruitArray[Math.floor(fruit)];
    }

    checkTurnAmount();
    checkIfSame();
}

function checkTurnAmount(){
    if(turns == turnsMax - 1){
        amountturned.innerHTML = turns + " keer gedraaid. Je mag nog 1 keer draaien!";
    }
    else if(turns == turnsMax){
        amountturned.innerHTML = turns + " keer gedraaid. Je mag niet meer draaien!";
        buttonforturn.removeAttribute("onclick");
    }
    else {
        turncounter.innerHTML = turns;
    }
}

function checkIfSame(){
    if(left.innerHTML == middle.innerHTML){
        if(middle.innerHTML == left.innerHTML){
            console.log("Gewonnen!!!");
            amountturned.innerHTML = "JE HEBT GEWONNEN NA " + turns + " KEER DRAAIEN!";
        }
    }
}
