function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0);
    fill('orange');
    rect(0, 0, 200, 200);
    stroke('pink');
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill('black');
    ellipse(125, 50, 30, 60);
}
function draw() {
    createTile();
}