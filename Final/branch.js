function Branch(x,y) {
    rectMode(CENTER)
    angleMode(DEGREES);

    this.beginX = x;
    this.beginY = y;

    this.radX = 50;
    this.radY = 50;


    // Defines tarting point for arc. Angle 0 is + on x axis //
    var angle = 45;
    
    // Defines Center Point //
    this.centX = this.beginX + this.radX;
    this.centY = this.beginY;

    // for percentage of distance traveled //
    let step = 0.01;
    let pct = 0.0;


    // storing draw path //
    this.history = [];

    this.animate = function() {
        

        this.distX = this.endX - this.beginX;
        this.distY = this.endY - this.beginY;
    
    }

    this.show = function(){
        noStroke();
        fill('blue')

        this.sunX = this.centX + cos(angle) * this.radX;
        this.sunY = this.centY + sin(angle) * this.radY;
    
        // Center on preivious end point + radius(X or Y)//
        
        for (let spin = 0; spin < 5; spin++) {
            
            rect(this.sunX,this.sunY,10,10);
            // Defines ending point of arc //
            // angle + is clockwise / - is counter //
            if (angle <= 180) {
               angle = angle + 1; 
            }
            
        }
        
        stroke('orange');
        line(this.centX,this.centY, this.sunX, this.sunY);
    
        // draw from top //
        // rect(0,-40,10,10);
        
    }

    // // for percentage of distance traveled //
    // let step = 0.01;
    // let pct = 0.0;


    // // storing draw path //
    // this.history = [];
    
    // let goX;
    // let goY;


    // // animate as update //

    // this.animate = function() {
        
    //     // not working //
    //     rotate(atan2(this.endY - this.beginY, this.endX - this.beginX));


    //     this.distX = this.endX - this.beginX;
    //     this.distY = this.endY - this.beginY;
        

    // }



    // this.show = function() {
    //     noStroke();
    //     fill("blue");
    //     rect(this.goX, this.goY, 10, 10);

    //     var v = createVector(this.goX, this.goY)
    //     this.history.push(v);

    //     beginShape();
    //     pct += step;
    //     if (pct < 1.0) {

    //         this.goX = round(this.beginX + pct * this.distX);
            
    //         this.goY = round(this.beginY + pct * this.distY);
    //     }


    //     // turn history on when pop is working //

    //     // for (var i = 1; i < this.history.length; i++) {

    //     //     var position = this.history[i];
    //     //     fill("blue");
    //     //     rect(position.x, position.y, 10, 10); 
        
    //     // }
    //     endShape();
    // }
     



}



    
