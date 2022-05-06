function Branch(x,y) {

    // defining path elements - which can be vector? //
    
    this.beginX = x;
    this.beginY = y;

    this.endX = x+ 150 + random(10, 100);
    this.endY = y;

    let distX;
    let distY;



    // for percentage of distance traveled //
    let step = 0.01;
    let pct = 0.0;

      // animate as update //

    this.animate = function() {
        this.distX = this.endX - this.beginX;
        this.distY = this.endY - this.beginY;
    }



    this.show = function() {
        noStroke();
        fill("blue");
        rect(this.goX, this.goY, 40, 40);

        beginShape();
        pct += step;
        if (pct < 1.0) {

            this.goX = round(this.beginX + pct * this.distX);
            
            this.goY = round(this.beginY + pct * this.distY);
        }
        endShape();
    }
     



}



    
