var timeEl = document.getElementById("timer")
var timeRemainder = 75;

//btn
var btnEl = document.querySelector("#btn");
btnEl.addEventListener("click", function() {
    timer()
});

//timer
function timer () {
    var timeInt = setInterval (function() {
        timeEl.textContent = "Time:" + timeRemainder + " seconds"
        timeRemainder--;

        if (timeRemainder===0) {
            timeEl.textContent = "Time's Up! GAME OVER!";
            clearInterval(timeInt);
        }
    }, 1000);
};