
function setup() {
    createCanvas(1000, 1000);
    background('#A19FD4FF');
}

function tileFrame(originX,originY,background) {
    translate(originX,originY);
    noStroke();
    fill(background)
    rect(0, 0, 100, 100);
}
// // Color Changer
// let letterGround = color(cardBackColor, 0);
// let cardBackColor = color('#6FD46CFF', [alpha]);

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
    
}
