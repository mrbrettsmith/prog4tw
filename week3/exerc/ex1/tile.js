function setup() {
    createCanvas(200, 200);
    noLoop();
}
function createTile() {
    translate(0, 0);
    fill('orange');
    rect(0, 0, 200, 200);
    noFill();
    strokeWeight(20);
    stroke('lightblue');
    line(0, 55, 140, 84);
    line(0, 144, 180, 182);
    stroke('pink');
    arc(100, 150, 50, 50, 96, 99, [PI]);
    arc(50, 50, 50, 50, 96, 99, [QUARTER_PI]);
    line(55, 25, 200, 55);
    line(105, 125, 200, 144);
}
function draw() {
    createTile();
}