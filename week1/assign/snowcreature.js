let grid;
function setup(){
    createCanvas(1000, 800);
    background('#ccc');
    grid = loadImage("image/100px_grid.png");
}
function draw() {
    background(grid);
    // snowman legs
    fill("f1f1f1");
    stroke(100, 250, 100);
    strokeWeight(20);
    // left leg
    ellipse(350, 650, 200, 100);
    // right leg
    ellipse(650, 650, 200, 100);
    // body
    ellipse(500, 400, 600, 400);
    // head
    ellipse(500, 150, 200, 200);
    // hat brim
    stroke(100,100,1800);
    strokeWeight(41);
    line(375,100,625,100);
}
