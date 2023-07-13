var titleDisplay = document.querySelector("#titleDisplay");
var titleInput = document.querySelector("#titleInput");
var p1Display = document.querySelector("#p1Display");
var p1Input = document.querySelector("#p1Input");
var p2Display = document.querySelector("#p2Display");
var p2Input = document.querySelector("#p2Input");
var scoreInput = document.querySelector("#scoreInput");
var scoreDisplay = document.querySelector("#scoreDisplay");
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1ScoreDisplay = document.querySelector("#p1Score");
var p2ScoreDisplay = document.querySelector("#p2Score");
var p1Container = document.querySelector("#p1Container");
var p2Container = document.querySelector("#p2Container");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

// changing title 

titleInput.addEventListener("change", function () {
    titleDisplay.textContent = titleInput.value;
});

// changing players title
p1Input.addEventListener("change", function () {
    p1Display.textContent = p1Input.value;
});
p2Input.addEventListener("change", function () {
    p2Display.textContent = p2Input.value;
});

// changing winning score
scoreInput.addEventListener("change", function () {
    scoreDisplay.textContent = scoreInput.value;
    winningScore = Number(scoreInput.value);
    reset();
});

p1Button.addEventListener("click", function () {
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            // p1Dispaly.classList.add("text-success");
            // p1Container.classList.add("text-success");
            alert(p1Display.textContent + ' is the winner')
            gameOver = true;
        }
        p1ScoreDisplay.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function () {
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            // p2Dispaly.classList.add("text-success");
            // p2Container.classList.add("text-success");
            alert(p2Display.textContent + ' is the winner')
            gameOver = true;
        }
        p2ScoreDisplay.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function () {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;
    // p1Dispaly.classList.remove("text-success");
    // p2Dispaly.classList.remove("text-success");
    // p1Container.classList.remove("text-success");
    // p2Container.classList.remove("text-success");
    gameOver = false;
}

