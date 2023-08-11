var rulesCloseBtn = document.getElementById("rulesCloseBtn");
var rulesCard = document.getElementById("rulesCard");
var Rock = document.getElementById("Rock");
var Paper = document.getElementById("Paper");
var Main = document.getElementById('Main');
var Scissors = document.getElementById("Scissors");
var game = document.getElementById("game");
var yourChoise = document.getElementById("yourChoise");
var houseChoise = document.getElementById("houseChoise");
var result = document.getElementById('result');
var resultBar = document.getElementById('resultBar');
var playAgain = document.getElementById('playAgain');
var scoreNum = document.getElementById('scoreNum');
var showRules = document.getElementById("showRules");
var rendom = Math.floor(Math.random() * 3);
var ProphouseChoisess = [Rock, Paper, Scissors];
rulesCloseBtn.addEventListener('click', function() {
    rulesCard.style.display = "none";
    document.body.style.overflow = "auto";

});
showRules.addEventListener('click', function() {
    rulesCard.style.display = "flex";
    document.body.style.overflow = "hidden";
})

function handleChoice(choiceElement, choiceClass) {
    Main.classList.remove('d-flex');
    Main.style.display = "none";
    game.style.display = "flex";
    yourChoise.innerHTML = choiceElement.innerHTML;
    yourChoise.classList.add(choiceClass);

    setTimeout(function() {
        const random = Math.floor(Math.random() * ProphouseChoisess.length);
        houseChoise.innerHTML = ProphouseChoisess[random].innerHTML;
        houseChoise.classList.toggle(ProphouseChoisess[random].getAttribute('class'));
    }, 300);
    setTimeout(function() {
        if ((yourChoise.className == "paper" && houseChoise.className == "rock") ||
            (yourChoise.className == "scissors" && houseChoise.className == "paper") ||
            (yourChoise.className == "rock" && houseChoise.className == "scissors")) {
            result.innerHTML = "YOU WIN";
            scoreNum.innerHTML = parseInt(scoreNum.textContent) + 1;
            resultBar.style.display = "flex";
            yourChoise.style.boxShadow = "rgba(220, 220, 220, 0.10) 0px 0px 0px 40px, rgba(220, 220, 220, 0.05) 0px 0px 0px 80px, rgba(220, 220, 220, 0.01) 0px 0px 0px 120px";
        } else if (
            ((yourChoise.className == "rock" && houseChoise.className == "paper") ||
                (yourChoise.className == "paper" && houseChoise.className == "scissors") ||
                (yourChoise.className == "scissors" && houseChoise.className == "rock"))) {
            resultBar.style.display = "flex";
            result.innerHTML = "YOU LOSE";
            scoreNum.innerHTML = parseInt(scoreNum.textContent) - 1;
            houseChoise.style.boxShadow = "rgba(220, 220, 220, 0.10) 0px 0px 0px 40px, rgba(220, 220, 220, 0.05) 0px 0px 0px 80px, rgba(220, 220, 220, 0.01) 0px 0px 0px 120px";
        } else {
            play_Again();
        }
    }, 600);
}

Paper.addEventListener('click', function() {
    handleChoice(Paper, 'paper');
});

Rock.addEventListener('click', function() {
    handleChoice(Rock, 'rock');
});

Scissors.addEventListener('click', function() {
    handleChoice(Scissors, 'scissors');
});
playAgain.addEventListener('click', function() {
    play_Again();

});

function play_Again() {
    Main.classList.add('d-flex');
    Main.style.display = "flex";
    game.style.display = "none";

    yourChoise.innerHTML = "";
    yourChoise.classList.remove(yourChoise.className);
    houseChoise.innerHTML = "";
    houseChoise.classList.remove(houseChoise.className);
    resultBar.style.display = "none";
    result.innerHTML = "";
    houseChoise.style.boxShadow = "none";
    yourChoise.style.boxShadow = "none";

}