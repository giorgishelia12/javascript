// challenge 1: ypur age in days
function ageInDays(){
    var birthYear = prompt("Whats your BirthYear?");
    var birthInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + birthInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}
//challenge 2: Cat Generator
function genCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat');
    image.src = "https://www.cutecatgifs.com/wp-content/uploads/2016/11/giphy1.gif";
    image.id = 'im';
    div.appendChild(image);

}
function reset2(){
    document.getElementById('im').remove();
}

//challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice){
    console.log(yourChoice);

    var humanchoice, botChoice;
    humanchoice = yourChoice.id;

    botChoice = numberToChoice( randomToRpsInt());
    console.log('computer choise:', botChoice);

    results = decideWinner(humanchoice, botChoice);
    console.log(results);

     message = finalMessage(results);// 'you won'
     console.log(message);
     rpsFrontEnd(yourChoice.id, botChoice, message);
 }

 function randomToRpsInt(){
     return Math.floor(Math.random()*3);
 }

 function numberToChoice(number) {
     return ['stone', 'paper', 'scissors'][number];
 }

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'stone' : {'scissors': 1, 'stone': 0.5, 'paper': 0},
        'paper' : {'stone': 1, 'paper': 0.5, 'scissors' : 0},
        'scissors' : {'paper' : 1, 'scissors': 0.5, 'stone' : 0},
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return[yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    var score1 = 0;
    var score2 = 0;


    if (yourScore === 0) {
        score2++
          return {'message' : 'You lost!', 'color': 'red', 'score': score1, 'score2': score2,};

    } else if (yourScore === 0.5) {
          return {'message' : 'You tied!', 'color': 'yellow'};

    }else{
        score1++
          return {'message' : 'You won!', 'color': 'green', 'score1': score1, 'score2': score2,};
          
    }
}

function rpsFrontEnd(humanTextChoice, botTextChoice, finalMessage,  score1, score2){
    var TextDatabase = {
        'stone': document.getElementById('stone').h2,
        'paper': document.getElementById('paper').h2,
        'scissors': document.getElementById('scissors').h2,
    }
//remove h2 all
    document.getElementById('stone').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    score1 = document.createElement('div');
    score1 = document.createElement('div');
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    humanDiv.id = 'gio';
    botDiv.id = 'gio';
    messageDiv.id = 'gio';

    humanDiv.innerHTML ="<h2 id='human' class='player'> " + humanTextChoice +   "</h2>";
    messageDiv.innerHTML ="<h1 id='final' style='color: "+ finalMessage['color'] + "; font-size: 50px; padding: 10px;'>"  + finalMessage['message'] + "</h1>";
    botDiv.innerHTML ="<h2 class='bot' id='bot'> " + botTextChoice +"</h2>";



    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);


}

// function resetRps( ){
//    var stone = document.createElement('div');
//    var paper = document.createElement('div');
//    var Scissors = document.createElement('div');
//    stone.id = 'ola';
//    paper.id = 'ola';
//    Scissors.id = 'ola';
//     // stone.innerHTML ="<h2 id='stone'onclick='rpsGame(this)' >stone</h2>";
//     // paper.innerHTML ="<h2 id='paper'onclick='rpsGame(this)' >paper</h2>";
//     // Scissors.innerHTML ="<h2 id='scissors' onclick='rpsGame(this)' >scissors</h2>";
//     document.getElementById('gio').remove();
//     document.getElementById('gio').remove();
//     document.getElementById('gio').remove();    
//     document.getElementById('ola').remove();
//     document.getElementById('ola').remove();
//     document.getElementById('ola').remove();
//     // document.getElementById('final').remove();
//     // document.getElementById('bot').remove();
//     // document.getElementById('flex-box-rps-div').appendChild(stone);
//     // document.getElementById('flex-box-rps-div').appendChild(paper);
//     // document.getElementById('flex-box-rps-div').appendChild(Scissors);
// }

// function play(stone, paper, Scissors){
//     var stone = document.createElement('div');
//     var paper = document.createElement('div');
//     var Scissors = document.createElement('div');
//     stone.id = 'ola';
//     paper.id = 'ola';
//     Scissors.id = 'ola';
//     document.getElementById('ola').remove();
//     document.getElementById('ola').remove();
//     document.getElementById('ola').remove();
//     stone.innerHTML ="<h2 id='stone'onclick='rpsGame(this)' >stone</h2>";
//     paper.innerHTML ="<h2 id='paper'onclick='rpsGame(this)' >paper</h2>";
//     Scissors.innerHTML ="<h2 id='scissors' onclick='rpsGame(this)' >scissors</h2>";
//     document.getElementById('flex-box-rps-div').appendChild(stone);
//     document.getElementById('flex-box-rps-div').appendChild(paper);
//     document.getElementById('flex-box-rps-div').appendChild(Scissors);
// }

//Challenge 4: Changing colors of buttons

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);
var copyAllButtons = [];

for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsSus();
    }else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    }else if (buttonThingy.value === 'random'){
        buttonsColors();
    }
    
}

function buttonsSus() {
    for (let i = 4; i < all_buttons.length; i++){
         all_buttons[i].classList.remove(all_buttons[i].classList[1]);
         all_buttons[i].classList.add('btn-success');
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++){
         all_buttons[i].classList.remove(all_buttons[i].classList[1]);
         all_buttons[i].classList.add('btn-danger');
    }
}

function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
        
    }

}

function buttonsColors() {
    let choises = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];


    for(let i = 0; i < all_buttons.length; i ++){
        let randomNumber = Math.floor(Math.random() * 4 );
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choises[randomNumber]);
    }
}

// challange 5: Black Jack
let blackjackGame = {
    'you' : {'scoreSpan' : '#your-score', 'div': '#your-box', 'score' : 0,},
    'dealer' : {'scoreSpan' : '#dealer-score', 'div': '#dealer-box', 'score' : 0,},
    'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A',],
    'cardsMap' : {'2': 2, '3': 3, '4': 4, '5': 5, '6':6, '7':7, '8':8, '9':9, '10':10, 'K': 10, 'J':10, 'Q':10, 'A': [1, 11],},
    'wins': 0,
    'loses': 0,
    'draws': 0,
};
const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']
const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic)
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal)

function blackjackHit() {
    let card = randomCard();
    showCard(card, YOU);
    updateSore(card, YOU);
    showScore(YOU);
    console.log(YOU['score']);
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer,) {
    if (activePlayer['score']<= 21){
    let cardImage = document.createElement('img');
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}

function blackjackDeal(){


    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let botImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for(i = 0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }

    for(i = 0; i < botImages.length; i++) {
        botImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;
    document.querySelector('#your-score').textContent = 0;
    document.querySelector('#dealer-score').textContent = 0;
    document.querySelector('#your-score').style.color = 'white';
    document.querySelector('#dealer-score').style.color = 'white';

}

function updateSore(card, activePlayer) {
    // if adding 11 keeps me below 21, ad 11. otherwise, add 1
    if(card === 'A'){

        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        }else{
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    }else{
    activePlayer['score'] += blackjackGame['cardsMap'][card];
}

}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else{
     document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function dealerLogic() {
    let card = randomCard();
    showCard(card, DEALER);
    updateSore(card, DEALER);
    showScore(DEALER);

    if(DEALER['score'] > 15){
        let winner = computeWinner();
        showResult(winner);
    }
}

//compute winner and return winner
function computeWinner() {
    let winner;
// updates scores
    if(YOU['score'] <= 21){
        // higher score than dealer but you are 21 bolow
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)){
            blackjackGame['wins']++;
            winner = YOU;
        } else if (YOU['score']< DEALER['score']){
            blackjackGame['loses']++;

            winner = DEALER;
        } else if (YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;

        }
    //when user busts but dealer dosent
    }else if (YOU['score'] > 21 && DEALER['score'] <= 21){
        blackjackGame['lost']++;

        winner = DEALER;

    //when both bust
    }else if (YOU['score'] > 21 && DEALER['score'] > 21){
        blackjackGame['draws']++;

    }
    console.log(blackjackGame);
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (winner === YOU) {
        message = 'You won!';
        messageColor = 'green';
        winSound.play();
    }else if (winner === DEALER) {
        message ='You lost!';
        messageColor = 'red';
        lossSound.play();
    }else{
        message = 'You drew!';
        messageColor = 'yellow';
    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
}
