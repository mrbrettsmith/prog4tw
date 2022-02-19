let bubble;

function setup() {
    createCanvas(600, 600);
    bubble = new Bubble();
    print(bubble.x,bubble.y)
}

function draw() {
    background('red');
    bubble.move();
    bubble.show;
}

class Bubble {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.width = 100;
        this.height = 80;
    }
    move() {
        this.x = this.x + random(-5, 10);
        this.y = this.y + random(-5, 10);
    }
    show() {
        stroke("pink");
        strokeWeight(7);
        noFill();
        ellipse(this.x, this.y, this.width, this.height);
    }
}