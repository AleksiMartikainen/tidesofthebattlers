

var cards = [];

var count = 0;

function start() {

    cards = [];

    var deck = ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8", "zs1",
        "zs2", "1s1", "1s2", "1s3", "1s4", "1t1", "1t2", "1t3", "1t4",
        "2.1", "2.2", "2.3", "2.4", "3.1", "3.2"];

    shuffle(deck);

    cards.push(deck[0], deck[1], deck[2]);

    showCard(cards[0], "Player 1 card");
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


function showCard(card, text) {

    var paska = document.createElement("LABEL");
    paska.append(text);
    document.body.appendChild(paska);

    if (card == "zs1" || card == "zs2") {
        var myImage = new Image(200, 400);
        myImage.src = './resources/zero_skull.jpg';
        document.body.appendChild(myImage);
    } 

    if (card == "z1" || card == "z2" || card == "z3" || card == "z4" || card == "z5"
        || card == "z6" || card == "z7" || card == "z8") {
        var myImage = new Image(200, 400);
        myImage.src = './resources/zero.jpg';
        document.body.appendChild(myImage);
    } 

    if (card == "1s1" || card == "1s2" || card == "1s3" || card == "1s4") {
        var myImage = new Image(200, 400);
        myImage.src = './resources/one_sword.jpg';
        document.body.appendChild(myImage);
    } 

    if (card == "1t1" || card == "1t2" || card == "1t3" || card == "1t4") {
        var myImage = new Image(200, 400);
        myImage.src = './resources/one_tower.jpg';
        document.body.appendChild(myImage);
    } 

    if (card == "2.1" || card == "2.2" || card == "2.3" || card == "2.4") {
        var myImage = new Image(200, 400);
        myImage.src = './resources/two.jpg';
        document.body.appendChild(myImage);
    } 

    if (card == "3.1" || card == "3.2") {
        var myImage = new Image(200, 400);
        myImage.src = './resources/three.jpg';
        document.body.appendChild(myImage);
    }
}