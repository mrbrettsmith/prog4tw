function setup() {
    createCanvas(800, 800)
    background(0);
    angleMode(DEGREES);
}

function draw() {
    translate(300, 300);
    rotate(5);
    noFill();
    stroke("red")
    strokeWeight(5);
    ellipse(150, 150, 100);
}