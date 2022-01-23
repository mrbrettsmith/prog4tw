let grid;
// let stroke1 = prompt('enter a basic color name in lowercase', 'pink')
// let stroke2 = prompt('enter a basic color name in lowercase', 'grey')

// input color change
let time = prompt('Enter the time of day in lowercase (day, evening, night', 'day');
if (time === 'day') {
    sky = 'hsl(194, 100%, 75%)';
    bright = 'rgba(37, 85, 100, .0)';
} else if (time === 'night') {
    sky = ('hsl(194, 100%, 15%)');
    bright = 'rgba(37, 85, 100, .9)';
} else if (time === 'evening') {
    sky = ('hsl(194, 100%, 30%)');
    bright = 'rgba(180, 107, 111, .5)';
}
function setup(){
    createCanvas(1000, 800);
    background(sky);
    grid = loadImage("image/100px_grid.png");
}
function draw() {
    background(grid);    
    // snowman legs
    fill("f1f1f1");
    stroke('black');
    strokeWeight(5);
    // left leg
    ellipse(550, 650, 75, 50);
    // right leg
    ellipse(750, 650, 75, 50);
    // armLeft 
    triangle(450, 400, 550, 425, 550, 430);
    line(450, 400, 460, 325);
    line(460, 325, 450, 310);
    line(460, 325, 462, 300);
    // body1
    ellipse(650, 550, 300, 200);
    // body2
    ellipse(650, 435, 225, 150);
    // head
    ellipse(650, 335, 150, 150);
    // hat brim
    stroke('black');
    fill('brown')
    strokeWeight(8);
    line(575,285,725,285);
    // hatbody
    quad(600, 240, 700, 240, 710, 285, 590, 285);
    // armRight
    stroke('black');
    strokeWeight(5);
    triangle(850, 400, 750, 425, 750, 430);
    line(850, 400, 830, 325);
    line(830, 325, 825, 310);
    line(830, 325, 862, 300);
    // eyes
    stroke('black');
    strokeWeight(30);
    point(600,330);
    point(700,345);
    // mouth
    fill('purple');
    strokeWeight(10);
    arc(650, 380, 50, 30, 10, HALF_PI);
    // nose
    strokeWeight(5);
    stroke('orange');
    fill('orange');
    triangle(560, 350, 645, 347, 652, 351)
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
    // duskFilter 
    fill(bright);
    quad(0, 0, 1000, 0, 1000, 800, 0, 800);
    
}
