function Branch(x,y) {
    rectMode(CENTER)
    

    


    // this works //
    angleMode(DEGREES);

    radX = 40;
    radY = 40;
    angle = 0;
    let c = cos(angle)

    this.show = function(){
        noStroke();
        
        
        translate( x ,y);
    
        fill('blue')
        
        
        // stroke('orange');
        // line(x,y, 10, 10);
        

        // draw from top //
        // rect(0,-40,10,10);
        
        //positive is clockwise, negative is counter 
        for (let spinAmount = 0; spinAmount <180; spinAmount++) {
            
            // Rotate 1 Degree eatch loop //
            rotate(1);
            push()
            rect(0,-40,10,10);
            angle = angle - 1;
            pop()
        }
        
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



    
