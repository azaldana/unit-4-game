$(document).ready(function(){

    var win = 0;
    var loss = 0;
    var jewels = [];
    var updatedScore = 0;
    var redJewel;
    var blueJewel;
    var greenJewel;
    var yellowJewel;


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


function resetGame(){
    updatedScore = 0;

    // while (i<=12){
    //     i = 1 + Math.floor(Math.random() * 12);
    //     jewels.push(i);
    // }
    redJewel = 1 + Math.floor(Math.random() * 12);
    blueJewel = 1 + Math.floor(Math.random() * 12);
    yellowJewel = 1 + Math.floor(Math.random() * 12);
    greenJewel = 1 + Math.floor(Math.random() * 12);
    computerChoice = 19 + Math.floor(Math.random() * 120);
    $("#random-number").text(computerChoice);
    $("#updated-score").text(updatedScore);
    console.log("Jewel number: " + redJewel, blueJewel, yellowJewel, greenJewel);

}

});