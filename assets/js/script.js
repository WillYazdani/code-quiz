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
        choice: ["1","2","3","4"],
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

var nextQuestion = function() {
    i++;
    if (i < questions.length) {
        document.getElementById("question").innerText = questions[i].questionText
        document.getElementById("btn1").innerText = questions[i].choice[0]
        document.getElementById("btn2").innerText = questions[i].choice[1]
        document.getElementById("btn3").innerText = questions[i].choice[2]
        document.getElementById("btn4").innerText = questions[i].choice[3]
    }
}

//game function
var gameStart = function() {

    //remove welcome & btn
    document.getElementById("start-btn").remove()
    document.getElementById("welcome").remove()

    //question
    document.getElementById("question").innerText = questions[i].questionText

    //answer btns
    document.getElementById("choice").appendChild

    //answer 1
    var btn0 = document.createElement("button");
    document.getElementById("choice").appendChild(btn0);
    btn0.textContent = questions[i].choice[0];
    btn0.id = "btn1"
    btn0.className = "btn";

    //answer 2
    var btn1 = document.createElement("button");
    document.getElementById("choice").appendChild(btn1);
    btn1.textContent = questions[i].choice[1];
    btn1.id = "btn2"
    btn1.className = "btn";

    //answer 3
    var btn2 = document.createElement("button");
    document.getElementById("choice").appendChild(btn2);
    btn2.textContent = questions[i].choice[2];
    btn2.id = "btn3"
    btn2.className = "btn";

    //answer 4
    var btn3 = document.createElement("button");
    document.getElementById("choice").appendChild(btn3);
    btn3.textContent = questions[i].choice[3];
    btn2.id = "btn4"
    btn3.className = "btn";
};