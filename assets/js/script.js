var timeEl = document.getElementById("timer")
var timeRemainder = 75;
var i = 0;

//btn
var btnEl = document.querySelector("#start-btn");
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

//questions
var questions = [
    {
        questionText: "first question",
        choice: ["1. one","2. two","3. three","4. four"],
        correct: 0
    },
    {
        questionText: "second question",
        choice: ["1","2","3","4"],
        correct: 1
    },
    {
        questionText: "third question",
        choice: ["1","2","3","4"],
        correct: 2
    },
    {
        questionText: "fourth question",
        choice: ["1","2","3","4"],
        correct: 3
    },
    {
        questionText: "fifth question",
        choice: ["1","2","3","4"],
        correct: 4
    }
];


//next question on click
var nextQuestion = function() {

};

//correct answer
var correct = function() {
    document.getElementById("answer").innerText = "Correct!"
    score++
    nextQuestion()
};

//incorrect answer
var incorrect = function() {
    document.getElementById("answer").innerText = "Incorrect."
    timeRemainder = timeRemainder - 10;
    nextQuestion()
};

//game function
var gameStart = function() {

};