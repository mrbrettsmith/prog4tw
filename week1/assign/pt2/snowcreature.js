let grid;
// let stroke1 = prompt('enter a basic color name in lowercase', 'pink')
// let stroke2 = prompt('enter a basic color name in lowercase', 'grey')

// input color change
let time = prompt('Enter the time of day in lowercase (day, evening, night)', 'day');
if (time === 'day') {
    sky = 'hsl(194, 100%, 75%)';
    bright = 'rgba(37, 85, 100, .0)';
} else if (time === 'night') {
    sky = ('hsl(194, 100%, 15%)');
    bright = 'rgba(37, 85, 100, .9)';
    moonOn = 'rgb(235, 213, 7)';
} else if (time === 'evening') {
    sky = ('hsl(194, 100%, 30%)');
    bright = 'rgba(180, 107, 111, .5)';
    lightsOn = 'rgb(235, 213, 7)';
}
function setup(){
    createCanvas(1000, 800);
    background(sky);
    grid = loadImage("image/100px_grid.png");
}
function draw() {
    // background(grid);    
    // ground2
    fill('rgb(151, 170, 36)');
    arc(700, 750, 2000, 800, 90 , 0, HALF_PI);
    // cabin
    fill('orange')
    quad(125, 400, 345, 400, 345, 550, 120, 550)
    fill('rgb(213, 134, 7)');
    triangle(250, 300, 375, 400, 100, 400);
    // window 
    fill('black');
    quad(290, 410, 310, 410, 310, 460, 290, 460);
    // ground1
    fill('rgb(124, 139, 29)');
    arc(50, 900, 2000, 800, 90 , 0, HALF_PI);
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
    // tree1 
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
    // tree2
    // treeTrunk
    fill('#72531E');
    strokeWeight(0)
    quad(190, 440, 210, 440, 215, 600, 185, 600)
    // treeBottom
    fill('#1A4008');
    strokeWeight(0);
    triangle(200, 250, 140, 500, 260, 490);
    // treeMidBottom
    fill('#2B690D');
    strokeWeight(0);
    triangle(200, 150, 150, 390, 250, 370);
    // treeTopMid
    fill('#3B9212');
    strokeWeight(0);
    triangle(200, 100, 160, 279, 240, 270);
    // treeTop
    fill('#4CBB17');
    strokeWeight(0);
    triangle(200, 60, 170, 175, 230, 185);
    // duskFilter 
    fill(bright);
    quad(0, 0, 1000, 0, 1000, 800, 0, 800);
    // special effects 
    // (I can only get one of these to work?)
    // moon at night
    fill(moonOn);
    ellipse(800, 75, 50, 50);
    // window in evening
    fill(lightsOn);
    quad(290, 410, 310, 410, 310, 460, 290, 460);    
}
