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

    document.getElementById("")
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

    document.getElementById("question").innerText = questions[i].questionText

    document.getElementById("choice").appendChild
    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    var btn3 = document.createElement("button");
    var btn4 = document.createElement("button");

    btn1.textContent = questions[i].choice[0];
    btn2.textContent = questions[i].choice[1];
    btn3.textContent = questions[i].choice[2];
    btn4.textContent = questions[i].choice[3];

    btn1.className = "btn";
    btn2.className = "btn";
    btn3.className = "btn";
    btn4.className = "btn";

    btn1.id = "btn1";
    btn2.id = "btn2";
    btn3.id = "btn3";
    btn4.id = "btn4";

    document.getElementById("choice").appendChild(btn1);
    document.getElementById("choice").appendChild(btn2);
    document.getElementById("choice").appendChild(btn3);
    document.getElementById("choice").appendChild(btn4);

    document.getElementById("welcome").remove()
    document.getElementById("start-btn").remove()


};