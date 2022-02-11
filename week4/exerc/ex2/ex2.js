let rectX = 0;
let rectY;
const rectWitdth = 50;
const rectHeight = 50;
let clickCount = 0;
function setup() {
    createCanvas(500, 500);
    background('orange');
    rectY = random(0, height - rectHeight);
}
function draw(){
    background('orange');
    drawShape();
    rectX += 2;
    if(rectX > width) {
        noLoop();
        text('You scored ' + clickCount, 250, 100);
    }
}

function mousePressed() {
    // if ((mouseX >= 225 && mouseX <= 275) && (mouseY <=225 && mouseY <= 275))
    if((mouseX >= rectX && mouseX <= rectX + rectWitdth) && (mouseY >= rectY && mouseY <= rectY + rectHeight))
    clickCount++;
    console.log('gotcha!', clickCount)
}



function drawShape() {
    fill('yellow');
    rect(rectX, rectY, rectWitdth, rectHeight);
    
    // ellipse(250, 250, 50, 50);
}