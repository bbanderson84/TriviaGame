
// Global Variables
var userCorrect = 0;
var userIncorrect = 0;
var count = 70;




//function that will determine score
    var score = function () {

    // sets each question as a variable, and assigns the value to each
    var question1 = document.trivia.question1.value;
    var question2 = document.trivia.question2.value;
    var question3 = document.trivia.question3.value;
    var question4 = document.trivia.question4.value;
    var question5 = document.trivia.question5.value;
    var question6 = document.trivia.question6.value;
    var question7 = document.trivia.question7.value;
    var question8 = document.trivia.question8.value;

// keeps track if user clicks the correct score, adds one to score, if user clicks wrong score it adds to the wrong score count
    if (question1 == "Red Hot Chili Peppers") {
        userCorrect ++;

    }else {
        userIncorrect ++;

    }

    if (question2 == "Rage Against The Machine") {
        userCorrect ++;

    }else {
        userIncorrect ++;

    }

    if (question3 == "Nirvana") {
        userCorrect ++;

    }else {
        userIncorrect ++;

    }

    if (question4 == "Sublime") {
        userCorrect ++;

    }else {
        userIncorrect ++;

    }

    if (question5 == "The Black Keys") {
        userCorrect ++;

    }else {
        userIncorrect ++;

    }

    if (question6 == "Dave Grohl") {
        userCorrect ++;

    }else {
        userIncorrect ++;

    }

    if (question7 == "Pearl Jam") {
        userCorrect ++;

    }else {
        userIncorrect ++;

    }

    if (question8 == "Big Gigantic") {
        userCorrect ++;

    }else {
        userIncorrect ++;

    }

}

// function sets visibility property of id/class
var visible = function () {

    document.getElementById("start_game").style.visibility = "hidden";

    document.getElementById("button2").style.visibility = "hidden";

    document.getElementById("button").style.visibility = "hidden";

    document.getElementById("game-finished").style.visibility = "visible";

}

//when user clicks start button, timer starts, page hides certain areas
$(document).on("click", "#button", function () {


    document.getElementById("start_game").style.visibility = "visible";

    document.getElementById("button2").style.visibility = "visible";

    document.getElementById("button").style.visibility = "hidden";


    $("#time-remaining").html(count);

    var timer = setInterval(function () {

    count = 60;

    var count = parseInt($("#time-remaining").html());

// runs the timer in intervals of seconds, if timer runs to 0, calculates score and changes to score page 
    if (count !==0) {

        $("#time-remaining").html(count - 1);

    } else {

        clearInterval(timer);

        timer = 0;

        visible ();

        score();

        $("#user-correct").html(userCorrect);
        $("#user-incorrect").html(userIncorrect);

        }

    }, 1000);

// when user clicks done button, calculates score and switches to score page 
    $(document).on("click", "#button2", function () {

        clearInterval(timer);

        timer = 0;

        visible();

        score();

        $("#user-correct").html(userCorrect);
        $("#user-incorrect").html(userIncorrect);
      
        
    });
    
});



