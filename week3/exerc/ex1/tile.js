function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0);
    fill('orange');
    rect(0, 0, 200, 200);
    stroke('pink');
    strokeWeight(10);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill('yellow');
    circle(100, 40, 30);
    circle(160, 100, 30);
    circle(100, 160, 30);
    circle(40, 100, 30);
    fill('green');
    circle(100, 100, 80);
    fill('blue');
    circle(100, 100, 60);
}
function draw() {
    createTile();
}