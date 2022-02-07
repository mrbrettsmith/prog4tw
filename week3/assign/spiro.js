let rotateBy = 5;


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    background(255, 0, 200); //Initial Background
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255, 0, 200);
  }

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 25); //why does math.round work? 10 Determines how many cycles before alt is activated
    console.log(alt);
    noFill();
    stroke(randomColor);
    strokeWeight(5);
    // ellipse(100 + alt, 100 , 100);
    ellipse(150 + alt, random(100, 250) , 100); // Crazy Wreath Effect!
}



function draw() {
    translate(width /2, height /2); //Center & Align Circle
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += -5; //If negative it spirals in until 0, then back out?
}
function mousePressed() {
    noLoop();
    randomColor = color(random(255),random(255),random(255)); //Stroke Randomizer
  }
function mouseReleased() {
    loop();
}