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
    console.log(rotateBy);
    noFill();
    stroke(randomColorOne);
    strokeWeight(5);
    // ellipse(100 + alt, 100 , 100);
    ellipse(150 + alt, random(60, 200) , random(60, 120)); // Crazy Wreath Effect!
    stroke(randomColorTwo);
    beginShape(TRIANGLES); //Sunburst
    vertex(60 + alt, 20 + alt);
    vertex(70, 75);
    vertex(80, 20);
    endShape();
}
function draw() {
    translate(width /2, height /2); //Center & Align Circle
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += -3; //If negative it spirals in until 0, then back out?
    // bounceBack(rotateBy)
}
function mousePressed() {
    noLoop();
    randomColorOne = color(random(255),random(255),random(255));
    randomColorTwo = color(random(255)+5,random(255),random(255)); //Stroke Randomizer
  }
function mouseReleased() {
    loop();
}

// WIP

//      Trying to set a stop & reverse with no luck!
// function bounceBack(rotateBy) {
//     let x= rotateBy
//     if(x > 2000){
//         x= rotateBy * -1;
//     }
// }