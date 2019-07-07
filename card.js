

var cards = [];

function start() {

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

    var paska = document.createElement("LABEL");

    if (text == 'Player1card') {
        paska.append('Player 1 card');
        paska.id = 'textPlayer1';
    }

    if (text == 'Player1usedSword') {
        paska.append('Player 1 used Sword');
        paska.id = 'textSword1';
    }

    if (text == 'Player2card') {
        paska.append('Player 2 card');
        paska.id = 'textPlayer2';
    }

    document.getElementById(id).appendChild(paska);

    var myImage = new Image(200, 400);
    myImage.id = text;

    if (card == "zs1" || card == "zs2") {
        myImage.src = './resources/zero_skull.jpg';
    } 

    if (card == "z1" || card == "z2" || card == "z3" || card == "z4" || card == "z5"
        || card == "z6" || card == "z7" || card == "z8") {
        myImage.src = './resources/zero.jpg';
    } 

    if (card == "1s1" || card == "1s2" || card == "1s3" || card == "1s4") {
        myImage.src = './resources/one_sword.jpg';
    } 

    if (card == "1t1" || card == "1t2" || card == "1t3" || card == "1t4") {
        myImage.src = './resources/one_tower.jpg';
    } 

    if (card == "2.1" || card == "2.2" || card == "2.3" || card == "2.4") {
        myImage.src = './resources/two.jpg';
    } 

    if (card == "3.1" || card == "3.2") {
        myImage.src = './resources/three.jpg';
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

function checkSkull(paska) {
    var audio = new Audio('./resources/mlg.mp3');

    if (paska == 'zs1' || paska == 'zs2') {
        audio.play();
    }
}

function click() {
    var audio = new Audio('./resources/click.mp3');
    audio.play();
}