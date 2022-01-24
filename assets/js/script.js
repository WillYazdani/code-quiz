var timeEl = document.getElementById("timer")
var timeRemainder = 75;
var i = 0;

//btn
var btnEl = document.querySelector("#btn");
btnEl.addEventListener("click", function() {
    timer()
    gameStart()
});

//timer
var timer = function() {
    var timeInt = setInterval (function() {
        timeEl.textContent = "Time: " + timeRemainder
        timeRemainder--;

        if (timeRemainder<=0) {
            timeEl.textContent = "Time's Up! GAME OVER!";
            clearInterval(timeInt);
        }
    }, 1000);
};

var questions = [
    {
        questionText: "this will be a question",
    }
]

var gameStart = function() {
    document.getElementById("content").innerText = questions[i].questionText
};