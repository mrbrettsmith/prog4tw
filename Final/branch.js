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


    // storing draw path //
    this.history = [];
    
    let goX;
    let goY;


    // animate as update //

    this.animate = function() {
        this.distX = this.endX - this.beginX;
        this.distY = this.endY - this.beginY;
        this.rotate(90)
    }



    this.show = function() {
        noStroke();
        fill("blue");
        rect(this.goX, this.goY, 10, 10);

        var v = createVector(this.goX, this.goY)
        this.history.push(v);

        beginShape();
        pct += step;
        if (pct < 1.0) {

            this.goX = round(this.beginX + pct * this.distX);
            
            this.goY = round(this.beginY + pct * this.distY);
        }


        // turn history on when pop is working //

        // for (var i = 1; i < this.history.length; i++) {

        //     var position = this.history[i];
        //     fill("blue");
        //     rect(position.x, position.y, 10, 10); 
        
        // }
        endShape();
    }
     



}



    
