//challenge 3
function humanChoice(yourChoice) {
    let hide = document.getElementById("hide-this");
    hide.style = "display:none";
    var humanChoice = yourChoice.id;
    var number = giveRandomNumber();
    var botChoice = chooseRandomClass(number);
    var result = returnResult(humanChoice, botChoice);
    frontEnd(result, humanChoice, botChoice);

}

function giveRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function chooseRandomClass(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function returnResult(humanChoice, botChoice) {
    if (humanChoice == 'rock') {
        if (botChoice == 'rock') {
            return 'draw';
        }
        else if (botChoice == 'paper') {
            return 'You loose!';
        }
        else {
            return 'You win!';
        }
    }
    else if (humanChoice == 'paper') {
        if (botChoice == 'rock') {
            return 'You win!';
        }
        else if (botChoice == 'paper') {
            return 'draw';
        }
        else {
            return 'You loose!';
        }
    }
    else {
        if (botChoice == 'rock') {
            return 'You loose!';
        }
        else if (botChoice == 'paper') {
            return 'You win!';
        }
        else {
            return 'draw';
        }
    }
}

function frontEnd(result, humanChoice, botChoice) {
    var imageData = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");
    var tryAgain = document.createElement("div");
    humanDiv.innerHTML = "<img class='round' src='" + imageData[humanChoice] + "' style='box-shadow: 0px 0px 26px 11px rgba(115,107,191,1);'><p>you</p>";
    botDiv.innerHTML = "<img class='round' src='" + imageData[botChoice] + "' style='box-shadow: 0px 0px 26px 11px rgba(115,107,191,1);'><p>bot</p>";
    messageDiv.innerHTML = "<h1>" + result + "</h1>";
    tryAgain.innerHTML = "<a href='index.html'>try again</a>";
    document.getElementById("lastNote").innerHTML = '<h5>Your choice : ' + humanChoice
        + '<br>Bot choice : ' + botChoice + '</h5>';
    document.getElementById("flex-result").appendChild(humanDiv);
    document.getElementById("flex-result").appendChild(messageDiv);
    document.getElementById("flex-result").appendChild(botDiv);
    document.getElementById("try-again").appendChild(tryAgain);
}