let bubbleBlow = [];

function setup() {
    createCanvas(600, 600);
    bubbleBlow = new Bubble();
    for (let b = 0; b < 5; b++) {
        bubbleBlow[b] = new Bubble();
    }
}

// [b] identifies each bubble instance. Each instance must be created new via class Bubble - then shown and drawn.

function draw() {
    background('red');
    for (let b = 0; b < 5; b++) {
        bubbleBlow[b].move();
        bubbleBlow[b].show();
    }
}

class Bubble {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.width = 100;
        this.height = 80;
    }
    move() {
        this.x = this.x + random(-2, 3); //mis-weighted random makes bubble move off screen! cool!
        this.y = this.y + random(-2, 3); 
    }
    show() {
        stroke("pink");
        strokeWeight(7);
        noFill();
        ellipse(this.x, this.y, this.width, this.height);
    }
}
// for (let b = 0, b < 5, b++) {
//     bubbleBlow[b], this.x + 5;
// }

// other loop tests 
// for (b = 0, b < 3; b++ ) {
//     bubble this.x + 5, this.y +10;
// }
// for (let b = 0, b < 3; b++) {
//     Bubble (this.x + 5, this.y +10);
// }