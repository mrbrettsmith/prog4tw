

function Branch(x,y) {

    this.beginX = x;
    this.beginY = y;




    

    this.show = function() {
        noStroke();
        fill("blue");
        rect(this.beginX, this.beginY, 40, 40);
    }
     


        

        // beginShape();
        // pct += step;
        // if (pct < 1.0) {
        //     goA = round(this.beginX + pct * this.distX);
        //     goB = round(this.beginY + pct * this.distY);
        // }
        // endShape();
    }



    
