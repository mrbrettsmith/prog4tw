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
    ampSin = mySignVal * 50;

    translate(width/2, height/2);
    

    for (let x = 0; x<=360; x = x + 10) {
        
        // curve(0, 10, ampSin, 20, ampSin, 10, 10, 10);
        triangle(-5,0, -ampSin, 300, ampSin, 300)
        
        
        rotate(x);
        
    }


    position = position + inc;



}

// console.log(mySignVal);
    // ellipse(ampSin + 300, height/2 + (mySignVal *  100), mySignVal * 20, 50);