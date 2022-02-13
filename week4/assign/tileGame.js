
function setup() {
    createCanvas(1000, 1000);
    background('#A19FD4FF');
    // function preload() {
    //     img = loadImage('image/gametile.png');
    //   }
}
function tileFrame(originX,originY,background) {
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

// // Color Changer - Unsure how alpha channel works
// let letterGround = color(cardBackColor, 0);
// let cardBackColor = ('#6FD46CFF', [100]);
// let texto= ('#6FD46CFF');


// function tileBack() {
//     back = loadImage("image/Gametile.png");
//     image(back, 60, 60);
// }

function draw() {
    tileFrame(60,60,'#BDD44EFF');
    tileFrame(0,140,'#BDD44EFF');
    tileFrame(0,140,'#BDD44EFF');
    tileFrame(0,140,'#BDD44EFF');
    tileFrame(0,140,'#BDD44EFF');
    tileFrame(140,-560,'#6FD46CFF');
    tileFrame(0,140,'#6FD46CFF');
    tileFrame(0,140,'#6FD46CFF');
    tileFrame(0,140,'#6FD46CFF');
    tileFrame(0,140,'#BDD44EFF');
    tileFrame(140,-560,'#6FD46CFF');
    tileFrame(0,140,'#6FD46CFF');
    tileFrame(0,140,'#6FD46CFF');
    tileFrame(0,140,'#6FD46CFF');
    tileFrame(0,140,'#BDD44EFF');
    tileFrame(140,-560,'#6FD46CFF');
    tileFrame(0,140,'#6FD46CFF');
    tileFrame(0,140,'#6FD46CFF');
    tileFrame(0,140,'#6FD46CFF');
    tileFrame(0,140,'#BDD44EFF');
    tileFrame(140,-560,'#6FD46CFF');
    tileFrame(0,140,'#6FD46CFF');
    tileFrame(0,140,'#6FD46CFF');
    tileFrame(0,140,'#6FD46CFF');
    tileFrame(0,140,'#BDD44EFF');
    tileImage(0,60)
}
