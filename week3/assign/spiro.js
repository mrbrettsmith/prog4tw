let rotateBy = 5;
function setup() {
    createCanvas(800, 800)
    background(0);
    angleMode(DEGREES);
}
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360); //why does math.round work?
    console.log(alt);
    noFill();
    stroke("red");
    strokeWeight(5);
    ellipse(150 + alt, 150 , 100);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;
}

function mousePressed() {
    noLoop();
  }
function mouseReleased() {
    loop();
    stroke("blue");
}