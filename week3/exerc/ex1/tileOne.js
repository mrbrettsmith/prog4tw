function setup() {
    createCanvas(200, 200);
    noLoop();
}
function createTile() {
    translate(0, 0);
    fill('orange');
    rect(0, 0, 200, 200);
    stroke('pink');
    strokeWeight(13);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill('yellow');
    circle(100, 35, 30);
    circle(165, 100, 30);
    circle(100, 165, 30);
    circle(35, 100, 30);
    noFill();
    strokeWeight(4);
    stroke('beige');
    circle(100, 100, 70);
    stroke('purple');
    triangle(100, 35, 85, 10, 115, 10)
    triangle(140, 35, 125, 10, 155, 10)
    triangle(165, 100, 190, 85, 190, 115)
    triangle(100, 165, 85, 190, 115, 190)
    triangle(35, 100, 10, 85, 10, 115)
    noStroke();
}
function draw() {
    createTile();
}