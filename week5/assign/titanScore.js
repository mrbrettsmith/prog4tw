const DOWN = 'down';
const UP = 'up';
let startingX = 340;
let startingY = 60; 
let cards = [];

//creating the scoring & status of game
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false,
};
// Image Info
let cardfaceArray = []
let cardBack;
function preload() {
    cardBack = loadImage('image/dice.png');
    cardfaceArray = [
        loadImage('image/cauldron.png'),
        loadImage('image/dagger.png'),
        loadImage('image/laurels.png'),
        loadImage('image/rose.png'),
        loadImage('image/skull.png'),
        loadImage('image/stein.png'),
        loadImage('image/treasure.png'),
        loadImage('image/wheat.png')
    ]
}

// gameboard Set Up
function setup() {
    createCanvas(1000, 1000);
    background('#A19FD4FF'); // Needs to be here?
    let selectedFaces = [];
    for (let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove used cardface
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let c = 0; c < 4; c++) {
        for (let r = 0; r < 4; r++) {
            const cardFaceImg = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, cardFaceImg));
            startingX += 140;
        }
        startingY += 140;
        startingX = 340;
    }
}

function draw() {
    // background('#A19FD4FF'); // now background is in front of cards?
    if (gameState.numMatched === gameState.totalPairs) {
        fill('orange');
        textSize(100);
        text('Winner!', 400, 400);
        noLoop();
    }
    for (let k = 0; k < cards.length, k++;) {
        if (!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop(); 
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill('orange');
    textSize(36);
    text('Attempts ' + gameState.attempts, 340 ,640);
    text('Matches ' + gameState.numMatched, 340, 690);
}

// I rewrote this a few times - cant get the flip back to work.
function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let m = 0; m < cards.length; m++) {
        // Check to see how many have been flipped, then trigger flip
        if (gameState.flippedCards.length < 2 && cards[m].didHit(mouseX, mouseY)) {
            gameState.flippedCards.push(cards[m]);
            console.log('card is', cards[m].id); // I want this to read Id, why is it undefined?
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // mark matched as flipped
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty card array
            gameState.flippedCards.length = 0;
            // now the score - cumulative
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000);
        }
    }
}

class Card {
    constructor(x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }
    show() {
        noStroke();
        // face up = dice
        if (this.face === UP || this.isMatch) {
            fill('#72BAD4FF'); 
            rect(this.x, this.y, this.width, this.height,)
            image(this.cardFaceImg, this.x, this.y, this.width, this.height);
        } else {
        // face down = game sprite
            fill('#6FD46CFF'); 
            rect(this.x, this.y, this.width, this.height,);
            image(cardBack, this.x, this.y);
        }
    }
    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width 
            && mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
        }
    }
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}
// Shuffle Array

function shuffleArray(array) {
    let counter = array.length;
    while (counter > 0) {
        //pick random??
        const idx = Math.floor(Math.random() * counter);
        // reduce when picked with the double minus (decrement)
        counter--;
        // swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}