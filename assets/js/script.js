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
        questionText: "This will be a question",
        choice: ["1","2","3","4"]
    }
]

//game function
var gameStart = function() {

    //remove welcome & btn
    document.getElementById("start-btn").remove()
    document.getElementById("welcome").remove()

    //question
    document.getElementById("question").innerText = questions[i].questionText

    //answer btns
    document.getElementById("choice").appendChild

    var btn0 = document.createElement("button");
    document.getElementById("choice").appendChild(btn0);
    btn0.textContent = questions[i].choice[0];
    btn0.id = "btn0"
    btn0.className = "btn";

    var btn1 = document.createElement("button");
    document.getElementById("choice").appendChild(btn1);
    btn1.textContent = questions[i].choice[1];
    btn1.id = "btn1"
    btn1.className = "btn";

    var btn2 = document.createElement("button");
    document.getElementById("choice").appendChild(btn2);
    btn2.textContent = questions[i].choice[2];
    btn2.id = "btn2"
    btn2.className = "btn";

    var btn3 = document.createElement("button");
    document.getElementById("choice").appendChild(btn3);
    btn3.textContent = questions[i].choice[3];
    btn2.id = "btn2"
    btn3.className = "btn";
};