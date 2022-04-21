var position

function setup(){
    createCanvas(800, 800);
    angleMode(DEGREES);

    position = 0.0;
    inc = 3.0
}

function draw(){
clear();
var mySignVal = sin(position);
console.log(mySignVal);
ellipse(mySignVal*50, height/2, mySignVal * 20, 50);

position = position + inc;
}