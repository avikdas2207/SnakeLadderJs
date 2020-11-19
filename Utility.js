module.exports = { RollDice };


function RollDice(){
    var random_check = Math.floor( Math.random() * 6 ) + 1 ;
    console.log("random check: "+random_check );
}