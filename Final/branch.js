function Branch(x,y) {

    // defining path elements - which can be vector? //
    
    this.beginX = x;
    this.beginY = y;

    this.terminator = random(10, 100);

    this.endX = x + this.terminator;
    this.endY = y;

    let distX;
    let distY;



    // for percentage of distance traveled //
    let step = 0.01;
    let pct = 0.0;


    // storing draw path //
    this.history = [];
    
    


    // animate as update //

    this.animate = function() {
        
        // not working //
        


        this.distX = this.endX - this.beginX;
        this.distY = this.endY - this.beginY;
        
        console.log('branch percent', pct)

    }



    this.show = function() {
        noStroke();
        fill("blue");
        rect(this.goX, this.goY, 10, 10);

        // var v = createVector(this.goX, this.goY)
        // this.history.push(v);

        beginShape();
        pct += step;
        if (pct < 1.0) {

            // subtraction goes to left //

            this.goX = round(this.beginX + pct * this.distX);
            
            this.goY = round(this.beginY + pct * this.distY);
        } else if (pct = 1.0) {
            step = 0.0;
        }
        
        endShape();
    }
     



}



    
