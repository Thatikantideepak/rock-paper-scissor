
function game(yourChoice) {
    var player, computer;
    player = yourChoice.id;
    console.log('Your Choice: ', player)
    computer = computerChoice(generateRandomNumber());
    console.log('Computer choice: ', computer);
    results = decideWinner(player, computer);
    console.log(results);
    message = findMessage(results);
    console.log(message);
    frontEnd(player, computer, message);
}
function generateRandomNumber() {
    return Math.floor(Math.random() * 3);
}
function computerChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'rock': 0.5, 'paper': 0, 'scissor': 1 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'rock': 0, 'paper': 1, 'scissor': 0.5 }
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}
function findMessage([yourScore, computerScore]) {
    if (yourScore === 1) {
        return { 'text': 'You Win', 'color': '#40C4FF' };
    }
    else if (yourScore === 0) {
        return { 'text': 'You Lose', 'color': '#FF5252' };
    }
    else {
        return { 'text': 'Draw', 'color': 'white' };
    }
}
function frontEnd(player, computer, message) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
   
    var humandiv = document.createElement('div');
    var computerdiv = document.createElement('div');
    var messagediv = document.createElement('div');
    humandiv.innerHTML = "<img src='" + imageDatabase[player] + "' height=150 width=auto style='box-shadow: 3px 3px 10px 10px #40C4FF'>";
    messagediv.innerHTML = "<h1 style='color:" + message['color'] + "; font-size:50px; padding: 20px;'>" + message['text'] + "</h1>";
    computerdiv.innerHTML = "<img src='" + imageDatabase[computer] + "'height=150 width=auto style='box-shadow: 3px 3px 10px 10px #FF5252'>";
    document.getElementById('rps-div').appendChild(humandiv);
    document.getElementById('rps-div').appendChild(messagediv);
    document.getElementById('rps-div').appendChild(computerdiv);
}
