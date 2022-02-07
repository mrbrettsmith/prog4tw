let rotateBy = 5;


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    background(255, 0, 200);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255, 0, 200);
  }

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360); //why does math.round work?
    console.log(alt);
    noFill();
    stroke(randomColor);
    strokeWeight(5);
    ellipse(150 + alt, 150 , 100);
}

function draw() {
    translate(width /2, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;
}
function mousePressed() {
    noLoop();
    randomColor = color(random(255),random(255),random(255));
    let fallBack = -10;
  }
function mouseReleased() {
    loop();
}