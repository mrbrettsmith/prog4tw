function setup() {
    createCanvas(500, 500);
    background('orange');
}
function draw(){
    background('orange');
    drawShape();
}

function mousePressed() {
    // if ((mouseX >= 225 && mouseX <= 275) && (mouseY <=225 && mouseY <= 275))
    if((mouseX >= 0 && mouseX <= 50) && (mouseY >= 0 && mouseY <= 50))
    console.log('gotcha!')
}

function drawShape() {
    fill('yellow');
    rect(0, 0, 50, 50,);
    // ellipse(250, 250, 50, 50);
}