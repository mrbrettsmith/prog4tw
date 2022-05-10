var drawArray = [];
var sigilArray1 = [];
var sigilArray2 = [];
var makeSigils3 = [];
var terminator;

var transferX;
var transferY;

let clickTally = 0
// test //
let yellow;
test = 0;
// test //


function setup() {
    createCanvas(600, 600);
    rectMode(CENTER)
}

function draw() {
    background('grey');

    
    for (let i = 0; i < sigilArray1.length; i++) {        
        sigilArray1[i].animate();
        sigilArray1[i].show();
    } 
    
    for (let y = 0; y < 100; y++) {
        fill('yellow');
        ellipse(10+ test, 300, 30, 30);
    }

    for (let y = 0; y < sigilArray2.length; y++) {
        sigilArray2[y].animate();
        sigilArray2[y].show();
    }


    test = test + 1;

    
}




function mousePressed(){
    if (clickTally === 0){
        var terminator = round(random(-100, 100),0);
        let makeSigils1 = new Sigil2(mouseX,mouseY,terminator);
        sigilArray1.push(makeSigils1);
    }
    if (clickTally === 1){
        var terminator = round(random(-100, 100),0);
        let makeSigils2 = new Sigil3(transferX,transferY,terminator);
        sigilArray2.push(makeSigils2);
    }

    clickTally = clickTally + 1;
    console.log('clickTally', clickTally) 
}





function Sigil2(x,y,terminator) {
    // defining path elements - which can be vector? //
    
    this.beginX = x;
    this.beginY = y;

    this.endX = x;
    this.endY = y+ 150 + terminator;

    this.terminator = terminator;

    // for percentage of distance traveled //
    let step = 0.01;
    let pct = 0.0;


    // storing draw path //
    this.history = [];
    
    // animate as update //

    this.animate = function() {
        this.distX = this.endX - this.beginX;
        this.distY = this.endY - this.beginY;
    }

    // I wanted this to trigger the next draw feature, but had problems with it not refreshing in the draw loop //
    // this.finished = function() {
    //     pct >= 1.;
    //     return true;
    // }

    this.show = function() {
        noStroke();
        fill("red");
        rect(this.goX, this.goY, 10, 10);
        
        var v = createVector(this.goX, this.goY)
        this.history.push(v);
        
        beginShape();
        pct += step;
        if (pct < 1.0) {

            this.goX = round(this.beginX + pct * this.distX);
            
            this.goY = round(this.beginY + pct * this.distY);
        } 

        // Drawing History //
        for (var i = 1; i < this.history.length; i++) {

            var position = this.history[i];
            fill("red");
            rect(position.x, position.y, 10, 10); 
        }
        endShape();


    }
    transferX = this.endX;
    transferY = this.endY;
}




function Sigil3(x,y,terminator) {
    
    this.beginX = x;
    this.beginY = y;

    this.endX = x + 150 + terminator;
    this.endY = y + 150 + terminator;

    this.terminator = terminator;

    // for percentage of distance traveled //
    let step = 0.01;
    let pct = 0.0;


    // storing draw path //
    this.history = [];
    


    // let v0 = createVector(x,y);
    // let v1 = (x, y + 100 + terminator)


    rectMode(CENTER)
    
    // animate as update //

    this.animate = function() {
        

        this.distX = this.endX - this.beginX;
        this.distY = this.endY - this.beginY;
    }

    this.finished = function() {
        return pct === 1.0;
    }

    this.show = function() {
        noStroke();
        fill("red");
        rect(this.goX, this.goY, 10, 10);
        
        var v = createVector(this.goX, this.goY)
        this.history.push(v);
        
        beginShape();
        pct += step;
        if (pct < 1.0) {

            this.goX = round(this.beginX + pct * this.distX);
            
            this.goY = round(this.beginY + pct * this.distY);
        } 

        // Drawing History //
        for (var i = 1; i < this.history.length; i++) {

            var position = this.history[i];
            fill("red");
            rect(position.x, position.y, 10, 10); 
        }
        endShape();


    }
    transferX = this.endX;
    transferY = this.endY;
}
