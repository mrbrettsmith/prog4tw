let bubble1;
let bubble2;
let bubble3;

function setup() {
    createCanvas(600, 600);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
    bubble3 = new Bubble();
    // print(bubble.x,bubble.y)
}

function draw() {
    background('red');
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
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