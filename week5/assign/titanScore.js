let myCard;
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
    waiting: false
}

let cardFaceArray = []
let cardBack;

function preload() {
    cardBack = loadImage('image/dice.png');
    cardFaceArray = [
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

function setup() {
    createCanvas(1000, 1000);
    background('#A19FD4FF')
    let selectedFaces = [];
    for (let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardFaceArray.length))
        const face = cardFaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove used cardface
        cardFaceArray.splice(randomIdx, 1);
    }
    // myCard = new Card(); // can I get rid of this?
    selectedFaces = shuffleArray(selectedFaces);
    for (let c = 0; c < 4; c++) {
        for (let r = 0; r < 4; r++) {
            const faceImage =selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 140;
        }
        startingY += 140;
        startingX = 340;
    }
}
// now background is in front of cards?
function draw() {
    // background('#A19FD4FF'); // weird 
    if (gameState.numMatched === gameState.totalPairs) {
        fill('orange');
        textSize(100);
        text('Winner!', 400, 400)
        noloop();
    }
    for (let a = 0; a > cards.length; a++) {
        if(!cards[a].isMatch) {
            cards[a].face = DOWN;
        }
        cards[a].show();
    }
}


function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let m = 0; m < cards.length; m++) {
        // Check to see how many have been flipped, then trigger flip
        if (gameState.flippedCards.length < 2 && cards[m].didHit(mouseX, mouseY)) {
            console.log('card is', cards[m]);
            gameState.flippedCards.push(cards[m]);
        }   
    }
    if (gameState.flippedCards.length === 2) {
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
            }, 1000)
        }
    }
}

class Card {
    constructor(x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
        this.face = DOWN;
    }
    show() { // whyare my upp&down reversed?
        noStroke();
        if (this.face === DOWN || this.isMatch) {
            fill('#72BAD4FF'); 
            rect(this.x, this.y, this.width, this.height,)
            image(this.cardFaceImg, this.x, this.y);
        } else {
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
            this.face === UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}
//Shuffle Array

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


// let rectX = 100;
// let rectY = 100;
// let startingX = 340;
// let startingY = 60;
// const rectWitdth = 100;
// const rectHeight = 100;
// let clickCount = 0;
// let gameTiles = []


// function drawTileFrame() {
//     fill('#6FD46CFF');
//     noStroke();
//     for (let c = 0; c < 4; c++) {     // c = column
//         for (let r = 0; r < 4; r++) { // r = row
//             rect(startingX, startingY, rectWitdth, rectHeight);
//             gameTiles.push({ x: startingX, y: startingY, id: r});
//             startingX += 140;
//             noLoop()
//         }
//     startingY += 140;
//     startingX = 340;
//     }      
// }

// function mousePressed() {
//     for (let j = 0; j < gameTiles.length; j++) {
//         if((mouseX >= gameTiles[j].x && mouseX <= gameTiles[j].x + rectWitdth) && (mouseY >= gameTiles[j].y && mouseY <= gameTiles[j].y + rectHeight))
//         clickCount++;
//         console.log('this is tile ', gameTiles[j].id)  }
// }

// function letterFrame(originX,originY,background) {
//     translate(originX,originY);
//     noStroke();
//     fill(background);
//     rect(0, 0, 100, 100);
// }

// function tileImage(originX,originY) {
//     translate(originX,originY);
//     noStroke();
//     loadImage('image/gametile.png', img => {
//         image(img,0, 0);});
// }
// function draw() {
//     drawTileFrame();
//     letterFrame(60,60,'#BDD44EFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(140,-560,'#BDD44EFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(140,0,'#BDD44EFF');
//     letterFrame(140,0,'#BDD44EFF');
//     letterFrame(140,0,'#BDD44EFF');
//     letterFrame(140,0,'#BDD44EFF');
//     tileImage(340,340);
// }


// // Color Changer - Unsure how alpha channel works
// let letterGround = color(cardBackColor, 0);
// let cardBackColor = ('#6FD46CFF', [100]);
// let texto= ('#6FD46CFF');

// // Image Imports? 
// function tileBack() {
//     back = loadImage("image/Gametile.png");
//     image(back, 60, 60);
// }


// //Old Tyle Style
// function draw() {
//     letterFrame(60,60,'#BDD44EFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(140,-560,'#6FD46CFF');
//     letterFrame(0,140,'#6FD46CFF');
//     letterFrame(0,140,'#6FD46CFF');
//     letterFrame(0,140,'#6FD46CFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(140,-560,'#6FD46CFF');
//     letterFrame(0,140,'#6FD46CFF');
//     letterFrame(0,140,'#6FD46CFF');
//     letterFrame(0,140,'#6FD46CFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(140,-560,'#6FD46CFF');
//     letterFrame(0,140,'#6FD46CFF');
//     letterFrame(0,140,'#6FD46CFF');
//     letterFrame(0,140,'#6FD46CFF');
//     letterFrame(0,140,'#BDD44EFF');
//     letterFrame(140,-560,'#6FD46CFF');
//     letterFrame(0,140,'#6FD46CFF');
//     letterFrame(0,140,'#6FD46CFF');
//     letterFrame(0,140,'#6FD46CFF');
//     letterFrame(0,140,'#BDD44EFF');
//     tileImage(0,60)
// }
