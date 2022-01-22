let grid;
let stroke1 = prompt('enter a basic color name in lowercase', 'pink')
let stroke2 = prompt('enter a basic color name in lowercase', 'grey')
function setup(){
    createCanvas(1000, 800);
    background('#ccc');
    grid = loadImage("image/100px_grid.png");
}
function draw() {
    // background(grid);
    // snowman legs
    fill("f1f1f1");
    stroke(stroke1);
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
    stroke(stroke2);
    strokeWeight(41);
    line(375,100,625,100);
    // hatbody
    quad(450, 50, 550, 50, 575, 100, 425, 100);
    // eyes
    stroke(0);
    strokeWeight(50);
    point(425,150);
    point(575,150);
    // mouth
    noFill();
    strokeWeight(15);
    arc(500, 190, 80, 40, 10, HALF_PI);

}
