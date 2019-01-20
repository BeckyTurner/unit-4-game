var wins = 0;
var losses = 0;
var totalScore = 0;

var crystalOne = randomizer(1, 12);
var crystalTwo = randomizer(1, 12);
var crystalThree = randomizer(1, 12);
var crystalFour = randomizer(1, 12);    


$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

startGame();

// Function to start a new game
function startGame() {
    newGame();

    $("#random-number").text("Score to match: " + scoreToMatch);
    $("#score").text("Your total score is: " + totalScore);

    $("#crystal1").on("click", function () {
        totalScore = totalScore + crystalOne;
        $("#score").text("Your total score is: " + totalScore);
        checker();
        console.log(totalScore);

    })

    $("#crystal2").on("click", function () {
        totalScore = totalScore + crystalTwo;
        $("#score").text("Your total score is: " + totalScore);
        checker();
        console.log(totalScore);

    })

    $("#crystal3").on("click", function () {
        totalScore = totalScore + crystalThree;
        $("#score").text("Your total score is: " + totalScore);
        checker();
        console.log(totalScore);

    })

    $("#crystal4").on("click", function () {
        totalScore = totalScore + crystalFour;
        $("#score").text("Your total score is: " + totalScore);
        checker();
        console.log(totalScore);
    })

    function newGame() {
        totalScore = 0;
        scoreToMatch = randomizer(19, 120);
        console.log(scoreToMatch);
        console.log(crystalOne, crystalTwo, crystalThree, crystalFour);    
    }

    function checker() {

        if (totalScore === scoreToMatch) {
            alert("You win!!!!");
            wins++;
            $("#wins").text("Wins: " + wins);
            newGame();
        } else if (totalScore > scoreToMatch) {
            alert("You lose!!!");
            losses++;
            $("#losses").text("Losses: " + losses);
            newGame();
        }
    }
}

// Function to randomize numbers
function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Function to check for win or loss


