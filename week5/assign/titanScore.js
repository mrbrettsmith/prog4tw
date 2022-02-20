let rectX = 100;
let rectY = 100;
let startingX = 340;
let startingY = 60;
const rectWitdth = 100;
const rectHeight = 100;
let clickCount = 0;
let gameTiles = []

function setup() {
    createCanvas(1000, 1000);
    background('#A19FD4FF');
}

class Card {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.width = 100;
        this.height = 100; 
        
    }
    show(){
        fill('#6FD46CFF');
        rect(this.x, this.y, this.width, this.height,)
    }
}



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

function letterFrame(originX,originY,background) {
    translate(originX,originY);
    noStroke();
    fill(background);
    rect(0, 0, 100, 100);
}

function tileImage(originX,originY) {
    translate(originX,originY);
    noStroke();
    loadImage('image/gametile.png', img => {
        image(img,0, 0);});
}
function draw() {
    drawTileFrame();
    letterFrame(60,60,'#BDD44EFF');
    letterFrame(0,140,'#BDD44EFF');
    letterFrame(0,140,'#BDD44EFF');
    letterFrame(0,140,'#BDD44EFF');
    letterFrame(0,140,'#BDD44EFF');
    letterFrame(140,-560,'#BDD44EFF');
    letterFrame(0,140,'#BDD44EFF');
    letterFrame(0,140,'#BDD44EFF');
    letterFrame(0,140,'#BDD44EFF');
    letterFrame(0,140,'#BDD44EFF');
    letterFrame(140,0,'#BDD44EFF');
    letterFrame(140,0,'#BDD44EFF');
    letterFrame(140,0,'#BDD44EFF');
    letterFrame(140,0,'#BDD44EFF');
    tileImage(340,340);
}


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
