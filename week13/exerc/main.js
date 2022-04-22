var position;
var triBaseY = 300;
let grow = true;
let spin = 0;
let colorShiftG = 0;
let colorShiftB = 0;


function setup(){
    createCanvas(800, 800);
    angleMode(DEGREES);
    
    position = 0.0;
    inc = 3.0
}

function draw(){
    clear();
    noStroke();
    var mySignVal = sin(position);
    ampSin = mySignVal * 50;

    translate(width/2, height/2);
    
    // fill(94, 3, 252, 100);
    // for (let x = 0; x<=30; x = x + 10) {
    //     // triangle(-5,0, -ampSin, 300, ampSin, 300)
    //     // triangle(10, 10, -100, 300, 100, 300)
    //     triangle(-5,0, -ampSin + 75, triBaseY, ampSin - 75, triBaseY);
    //     rotate(x);
    // }
        


    if (triBaseY > 350 ) {
        grow = false;
    } 
    if (triBaseY < 250) {
        grow = true;
    }
    if (grow == true) {
        triBaseY += 1;
    } else {
        triBaseY -= 1;
    }

    

    push();
    rotate(spin);
    fill(0, 255 + colorShiftG, 195 - colorShiftB, 100)
    triangle(0, triBaseY - 300, -ampSin + 75, triBaseY, ampSin - 75, triBaseY);
    pop();

    push();
    rotate(spin * 1.20);
    fill(0, 255 + colorShiftG, 195 - colorShiftB, 100)
    triangle(0, triBaseY - 300, -ampSin + 75, triBaseY + 5, ampSin - 75, triBaseY + 5);
    pop();

    push();
    rotate(spin * 1.25);
    fill(0, 255 + colorShiftG, 195 - colorShiftB, 100)
    triangle(0, triBaseY - 300, -ampSin + 75, triBaseY + 15, ampSin - 75, triBaseY + 15);
    pop();
    
    push();
    rotate(spin * -1.10);
    fill(0, 145 + colorShiftG, 195 - colorShiftB, 100)
    triangle(0, triBaseY - 300, -ampSin + 75, triBaseY, ampSin - 75, triBaseY);
    pop();

    push();
    rotate(spin * -1);
    fill(0, 145 + colorShiftG, 195 - colorShiftB, 100)
    triangle(0, triBaseY - 300, -ampSin + 75, triBaseY + 10 , ampSin - 75, triBaseY +10);
    pop();

    push();
    rotate(spin * -1.25);
    fill(0, 145 + colorShiftG, 195 - colorShiftB, 100)
    triangle(0, triBaseY - 300, -ampSin + 75, triBaseY + 25, ampSin - 75, triBaseY + 25);
    pop();

    push();
    rotate(spin * -13);
    fill(1100, 145 + colorShiftG, 195 - colorShiftB, 100)
    triangle(0, triBaseY - 300, -ampSin + 75, triBaseY, ampSin - 75, triBaseY);
    pop();

    push();
    rotate(spin * -10);
    fill(1100, 145 + colorShiftG, 195 - colorShiftB, 100)
    triangle(0, triBaseY - 300, -ampSin + 75, triBaseY, ampSin - 75, triBaseY);
    pop();

    push();
    rotate(spin * -8);
    fill(1100, 145 + colorShiftG, 195 - colorShiftB, 100)
    triangle(0, triBaseY - 300, -ampSin + 75, triBaseY, ampSin - 75, triBaseY);
    pop();

console.log(mySignVal)
    colorShiftG = 100 * mySignVal;
    colorShiftB = 100 * mySignVal;
    spin = spin + .1;

    position = position + inc;



}

// console.log(mySignVal);
    // ellipse(ampSin + 300, height/2 + (mySignVal *  100), mySignVal * 20, 50);