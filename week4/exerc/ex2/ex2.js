let = rectX = 0;
let rectWitdth = 50
function setup() {
    createCanvas(500, 500);
    background('orange');
}
function draw(){
    background('orange');
    drawShape();
    rectX += 2;
}

function mousePressed() {
    // if ((mouseX >= 225 && mouseX <= 275) && (mouseY <=225 && mouseY <= 275))
    if((mouseX >= rectX && mouseX <= rectX + rectWitdth) && (mouseY >= 0 && mouseY <= 50))
    console.log('gotcha!')
}



function drawShape() {
    fill('yellow');
    rect(rectX, 0, 50, rectWitdth);
    
    // ellipse(250, 250, 50, 50);
}