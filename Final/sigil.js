function Sigil(x,y,terminator) {

    // defining path elements - which can be vector? //
    
    this.beginX = x;
    this.beginY = y;

    this.endX = x;
    this.endY = y+ 150 + terminator;

    let distX;
    let distY;

    

    this.terminator = terminator;

    // for percentage of distance traveled //
    let step = 0.01;
    let pct = 0.0;


    // storing draw path //
    this.history = [];
    
    let goX;
    let goY;

    // let v0 = createVector(x,y);
    // let v1 = (x, y + 100 + terminator)


    rectMode(CENTER)
    
    // animate as update //

    this.animate = function() {
        

        this.distX = this.endX - this.beginX;
        this.distY = this.endY - this.beginY;

        // DO I NEED MORE VECTOR PERAMETORS - HEADING() // ???

        // var v = createVector(this.goX, this.goY)



        console.log(this.goY, this.beginY, this.endY)
    
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

            this.goX = this.beginX + pct * this.distX;
            
            this.goY = this.beginY + pct * this.distY;
    
        }

        // path tester //
        // stroke('orange');
        // line(this.beginX, this.beginY, this.endX, this.endY)

        // Visualising all spots in object history  
        
        for (var i = 0; i < this.history.length; i++) {

            var position = this.history[i];
            fill("red");
            rect(position.x, position.y, 10, 10); 
        
        }
        endShape();
    }
    

}

