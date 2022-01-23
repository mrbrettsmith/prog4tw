let grid;
// let stroke1 = prompt('enter a basic color name in lowercase', 'pink')
// let stroke2 = prompt('enter a basic color name in lowercase', 'grey')
const sky = prompt('Enter the time of day in lowercase (day, evening, night', 'day');
if (sky === 'day') {

}
const day = ('blue');


function setup(){
    createCanvas(1000, 800);
    background(day);
    grid = loadImage("image/100px_grid.png");
}
function draw() {
    background(grid);
    // snowman legs
    fill("f1f1f1");
    // stroke(stroke1);
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
    // stroke(stroke2);
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
    // treeTrunk
    fill('#72531E');
    strokeWeight(0)
    quad(90, 440, 110, 440, 115, 550, 85, 550)
    // treeBottom
    fill('#1A4008');
    strokeWeight(0);
    triangle(100, 250, 40, 450, 160, 465);
    // treeMidBottom
    fill('#2B690D');
    strokeWeight(0);
    triangle(100, 150, 50, 330, 150, 350);
    // treeTopMid
    fill('#3B9212');
    strokeWeight(0);
    triangle(100, 100, 60, 255, 140, 247);
    // treeTop
    fill('#4CBB17');
    strokeWeight(0);
    triangle(100, 50, 70, 150, 130, 165);
    
}
