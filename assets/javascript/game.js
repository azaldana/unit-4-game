$(document).ready(function(){

    var win = 0;
    var loss = 0;
    var jewels = [];
    var updatedScore = 0;
    var redJewel;
    var blueJewel;
    var greenJewel;
    var yellowJewel;

function resetGame(){
    updatedScore = 0;

    //creating a while loop to make sure all jewels are random, separate numbers//
    var i =0;
    while (i<4){
        var rand = 1 + Math.floor(Math.random() * 12);
            if (jewels.indexOf(rand) != -1) {
                continue;
            } else {
                jewels[i] = rand;
                i++;
            }
           
        } console.log (jewels);
    
        redJewel = jewels[0];
        blueJewel = jewels[1];
        yellowJewel = jewels[2];
        greenJewel = jewels[3];
        computerChoice = 19 + Math.floor(Math.random() * 120);
        $("#random-number").text(computerChoice);
        $("#updated-score").text(updatedScore);
    
    }


resetGame();

    
var red = $("#red");
red.on("click", function() {
    updatedScore = updatedScore + redJewel;
    console.log("New user score " + updatedScore);
    $("#updated-score").text(updatedScore);
    statement();
})
        

var blue = $("#blue");
blue.on("click", function() {
    updatedScore = updatedScore + blueJewel;
    console.log("New user score " + updatedScore);
    $("#updated-score").text(updatedScore);
    statement();
})

var yellow = $("#yellow");
yellow.on("click", function() {
    updatedScore = updatedScore + yellowJewel;
    console.log("New user score " + updatedScore);
    $("#updated-score").text(updatedScore);
    statement();
})

var green = $("#green");
green.on("click", function() {
    updatedScore = updatedScore + greenJewel;
    console.log("New user score " + updatedScore);
    $("#updated-score").text(updatedScore);
    statement();
})
    

function statement(){
    if (updatedScore === computerChoice) {
        win++;
        alert("You Win!");
        $("#win").text("Wins: " + win);
        resetGame();

    } else if (updatedScore > computerChoice) {
        loss++;
        alert("You Lost");
        $("#loss").text("Losses: " + loss);
        resetGame();
    }
}

});