// let rectX = 100;
// let rectY = 100;
let startingX = 60;
let startingY = 60;
const rectWitdth = 100;
const rectHeight = 100;
let clickCount = 0;
let gameTiles = []


function setup() {
    createCanvas(1000, 1000);
    background('#A19FD4FF');
}

// function tileFrame(originX,originY,background) {
//     translate(originX,originY);
//     noStroke();
//     fill(background);
//     rect(0, 0, 100, 100);
// }

function drawTileFrame() {
    fill('yellow');
    for (let c = 0; c < 3; c++) {
    // const element = 3[c];
    rect(startingX, startingY, rectWitdth, rectHeight);
    gameTiles.push({ x: startingX, y: startingY});
    startingX += 140;
    }
}

console.log(gameTiles);

function mousePressed() {
    for (let j = 0; j < gameTiles.length; j++) {
        // const element = gameTiles[j];
        if((mouseX >= gameTiles[j].x && mouseX <= gameTiles[j].x + rectWitdth) && (mouseY >= gameTiles[j].y && mouseY <= gameTiles[j].y+ rectHeight))
        clickCount++;
        console.log('gotcha!', clickCount) }
}


function tileImage(originX,originY) {
    translate(originX,originY);
    noStroke();
    loadImage('image/gametile.png', img => {
        image(img,0, 0);});
}

function draw() {
    drawTileFrame();

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
//     tileFrame(60,60,'#BDD44EFF');
//     tileFrame(0,140,'#BDD44EFF');
//     tileFrame(0,140,'#BDD44EFF');
//     tileFrame(0,140,'#BDD44EFF');
//     tileFrame(0,140,'#BDD44EFF');
//     tileFrame(140,-560,'#6FD46CFF');
//     tileFrame(0,140,'#6FD46CFF');
//     tileFrame(0,140,'#6FD46CFF');
//     tileFrame(0,140,'#6FD46CFF');
//     tileFrame(0,140,'#BDD44EFF');
//     tileFrame(140,-560,'#6FD46CFF');
//     tileFrame(0,140,'#6FD46CFF');
//     tileFrame(0,140,'#6FD46CFF');
//     tileFrame(0,140,'#6FD46CFF');
//     tileFrame(0,140,'#BDD44EFF');
//     tileFrame(140,-560,'#6FD46CFF');
//     tileFrame(0,140,'#6FD46CFF');
//     tileFrame(0,140,'#6FD46CFF');
//     tileFrame(0,140,'#6FD46CFF');
//     tileFrame(0,140,'#BDD44EFF');
//     tileFrame(140,-560,'#6FD46CFF');
//     tileFrame(0,140,'#6FD46CFF');
//     tileFrame(0,140,'#6FD46CFF');
//     tileFrame(0,140,'#6FD46CFF');
//     tileFrame(0,140,'#BDD44EFF');
//     tileImage(0,60)
// }
