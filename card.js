

var cards = [];

var count = 0;

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

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


function showCard(card, text, id) {

    if (text == 'Player1card') {
        var paska = document.createElement("LABEL");
        paska.append('Player 1 card');
        paska.id = 'textPlayer1';
        document.getElementById(id).appendChild(paska);
    }

    if (text == 'Player1usedSword') {
        var paska = document.createElement("LABEL");
        paska.append('Player 1 used Sword');
        paska.id = 'textSword1';
        document.getElementById(id).appendChild(paska);
    }

    if (text == 'Player2card') {
        var paska = document.createElement("LABEL");
        paska.append('Player 2 card');
        paska.id = 'textPlayer2';
        document.getElementById(id).appendChild(paska);
    }


    var myImage = new Image(200, 400);
    myImage.id = text;

    if (card == "zs1" || card == "zs2") {
        myImage.src = './resources/zero_skull.jpg';
        document.getElementById(id).appendChild(myImage);
    } 

    if (card == "z1" || card == "z2" || card == "z3" || card == "z4" || card == "z5"
        || card == "z6" || card == "z7" || card == "z8") {
        myImage.src = './resources/zero.jpg';
        document.getElementById(id).appendChild(myImage);
    } 

    if (card == "1s1" || card == "1s2" || card == "1s3" || card == "1s4") {
        myImage.src = './resources/one_sword.jpg';
        document.getElementById(id).appendChild(myImage);
    } 

    if (card == "1t1" || card == "1t2" || card == "1t3" || card == "1t4") {
        myImage.src = './resources/one_tower.jpg';
        document.getElementById(id).appendChild(myImage);
    } 

    if (card == "2.1" || card == "2.2" || card == "2.3" || card == "2.4") {
        myImage.src = './resources/two.jpg';
        document.getElementById(id).appendChild(myImage);
    } 

    if (card == "3.1" || card == "3.2") {
        myImage.src = './resources/three.jpg';
        document.getElementById(id).appendChild(myImage);
    }
}

function hideId(id) {
    document.getElementById(id).style.display = 'none';
}

function showId(id) {
    document.getElementById(id).style.display = 'inline-block';
}

function hideAll() {
    var p1c = document.getElementById('Player1card');
    var p2c = document.getElementById('Player2card');
    var p3c = document.getElementById('Player1usedSword');
    var p4c = document.getElementById('textPlayer1');
    var p5c = document.getElementById('textSword1');
    var p6c = document.getElementById('textPlayer2');

    if (p1c != null) {
        p1c.parentNode.removeChild(p1c);
    }

    if (p2c != null) {
        p2c.parentNode.removeChild(p2c);
    }

    if (p3c != null) {
        p3c.parentNode.removeChild(p3c);
    }

    if (p4c != null) {
        p4c.parentNode.removeChild(p4c);
    }

    if (p5c != null) {
        p5c.parentNode.removeChild(p5c);
    }

    if (p6c != null) {
        p6c.parentNode.removeChild(p6c);
    }

   
}