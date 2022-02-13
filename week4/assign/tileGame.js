
function setup() {
    createCanvas(1000, 1000);
    background('#A19FD4FF');
}

function tileFrame(originX,originY,background) {
    translate(originX,originY);
    noStroke();
    fill(background)
    rect(0, 0, 125, 125);
    
}

let letterGround = color(cardBackColor, 0);

let cardBackColor = color('#6FD46CFF', [alpha]);

function draw() {
    tileFrame(75,75,'#6FD46CFF');

}
