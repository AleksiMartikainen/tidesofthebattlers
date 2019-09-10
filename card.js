

var cards = [];
var turns = 0;
var zeros = 0;
var zerosS = 0;
var oneS = 0;
var oneT = 0;
var two = 0;
var three = 0;

function start() {

    turns++;
    cards = [];

    var deck = ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8", "zs1",
        "zs2", "1s1", "1s2", "1s3", "1s4", "1t1", "1t2", "1t3", "1t4",
        "2.1", "2.2", "2.3", "2.4", "3.1", "3.2"];

    shuffle(deck);

    cards.push(deck[0], deck[1], deck[2]);

    showCard(cards[0], "Player1card", 'playerone');
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


function showCard(card, text, id) {

    var label = document.createElement("LABEL");

    if (text == 'Player1card') {
        label.append('Player 1 card');
        label.id = 'textPlayer1';
    }

    if (text == 'Player1usedSword') {
        label.append('Player 1 used Sword');
        label.id = 'textSword1';
    }

    if (text == 'Player2card') {
        label.append('Player 2 card');
        label.id = 'textPlayer2';
    }

    document.getElementById(id).appendChild(label);

    var myImage = new Image(200, 700);
    myImage.id = text;

    if (card == "zs1" || card == "zs2") {
        myImage.src = './resources/zero_skull.jpg';
        zerosS++;
    } 

    if (card == "z1" || card == "z2" || card == "z3" || card == "z4" || card == "z5"
        || card == "z6" || card == "z7" || card == "z8") {
        myImage.src = './resources/zero.jpg';
        zeros++;
    } 

    if (card == "1s1" || card == "1s2" || card == "1s3" || card == "1s4") {
        myImage.src = './resources/one_sword.jpg';
        oneS++;
    } 

    if (card == "1t1" || card == "1t2" || card == "1t3" || card == "1t4") {
        myImage.src = './resources/one_tower.jpg';
        oneT++;
    } 

    if (card == "2.1" || card == "2.2" || card == "2.3" || card == "2.4") {
        myImage.src = './resources/two.jpg';
        two++;
    } 

    if (card == "3.1" || card == "3.2") {
        myImage.src = './resources/three.jpg';
        three++;
    }

    document.getElementById(id).appendChild(myImage);

    checkSkull(card);
}

function hideId(id) {
    document.getElementById(id).style.display = 'none';
}

function showId(id) {
    document.getElementById(id).style.display = 'inline-block';
}

function showIdBlock(id) {
    document.getElementById(id).style.display = 'block';
}

function disableId(id) {
    document.getElementById(id).disabled = true;
}

function enableId(id) {
    document.getElementById(id).disabled = false;
}

function removeElement(id) {
    var element = document.getElementById(id);

    if (element != null) {
        element.parentNode.removeChild(element);
    }
}

function hideAll() {
    removeElement('Player1card');
    removeElement('Player2card');
    removeElement('Player1usedSword');
    removeElement('textPlayer1');
    removeElement('textSword1');
    removeElement('textPlayer2');   
}

function checkSkull(card) {
    var audio = new Audio('./resources/mlg.mp3');

    if (card == 'zs1' || card == 'zs2') {
        audio.play();
    }
}

function showStats() {
    removeElement('statsInfo');
    var label = document.createElement("LABEL");
    label.id = 'statsInfo';

    label.append(
        'Turns: ' + turns + 
        ' | Zeros: ' + zeros + 
        ' | Skulls: ' + zerosS + 
        ' | Swords: ' + oneS + 
        ' | Towers: ' + oneT + 
        ' | Twos: ' + two +
        ' | Threes: ' + three
    );
    

    document.getElementById('stats').appendChild(label);
}