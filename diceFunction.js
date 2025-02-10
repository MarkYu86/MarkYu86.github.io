//function
function rollDice4(){
    return Math.floor(Math.random()* 4) + 1
}
function rollDice6(){
    return Math.floor(Math.random()* 6) + 1
}
function rollDice10(){
    return Math.floor(Math.random()* 10) + 1
}
function rollDice32(){
    return Math.floor(Math.random()* 32) + 1
}
console.log(rollDice4())
console.log(rollDice6())
console.log(rollDice10())
console.log(rollDice32())