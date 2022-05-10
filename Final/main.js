var makeSigils1 = [];
var makeSigils2 = [];
var makeSigils3 = [];
var terminator;

// test //
let yellow;
test = 0;
// test //


function setup() {
    createCanvas(600, 600);
    
  makeSigils2 = new Sigil3;
}

function draw() {
    background('grey');


    for (let i = 0; i < makeSigils1.length; i++) {        
        makeSigils1[i].animate();
        makeSigils1[i].show();

        if (makeSigils1[i].finished()){
                makeSigils1.splice(i,1);
            
                // Return and make next sigil here? Return is working!)
        }
    }
    
    
    

    // test //
    
    fill('yellow')
    ellipse(100 + test, 100, 30, 30)
    // test = test+ 1

    for (let s = 0; s < s.length; s++) {
        fill('yellow')
        ellipse(100 + test, 100, 30, 30)
        test = test+ 1;
        
    }
    // test //

    for (let f = 0; f < makeSigils2.length; f++) {
        makeSigils2[f].animate();
        makeSigils2[f].show();

        if (makeSigils2[f].finished()){
            makeSigils2.splice(f,1);
    }

    }
    
}

// clean up terminator vs randoTerminus

// mousclick makes pos and neg sigil? two seperate JS docs?



function mousePressed(){
    var terminator = round(random(-100, 100),0);
    makeSigils1.push(new Sigil2(mouseX,mouseY,terminator));
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
    


    // let v0 = createVector(x,y);
    // let v1 = (x, y + 100 + terminator)


    rectMode(CENTER)
    
    // animate as update //

    this.animate = function() {
        this.distX = this.endX - this.beginX;
        this.distY = this.endY - this.beginY;

        console.log('Main end Y', this.endY)
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
        else if (this.goX = this.endX, this.goY = this.endY) {
            makeSigils2(this.endX,this.endY,terminator);
        }
        endShape();
    }

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
        } else if (this.goX = this.endX, this.goY = this.endY) {
            // makeSigils3.push(new Sigil4(this.endX,this.endY,terminator));
        }

        // for (let i = 0; i < makeBranch.length; i++) {
        //     makeBranch[i].animate();
        //     makeBranch[i].show();
        // }
    
        // Drawing History //
        // for (var i = 1; i < this.history.length; i++) {

        //     var position = this.history[i];
        //     fill("red");
        //     rect(position.x, position.y, 10, 10); 
        // }

        endShape();
    }
}

