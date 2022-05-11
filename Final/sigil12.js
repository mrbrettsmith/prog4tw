function Sigil12(x,y,terminator) {

    // Draws an arc downwards E //
    terminator = map(terminator,-100 ,100, 50,100);


    rectMode(CENTER)
    angleMode(DEGREES);

    this.beginX = x;
    this.beginY = y;

    this.radX = 50;
    this.radY = 50;


    // Defines starting point for arc. Angle 0 is + on x axis //
    var angle = -180;
    var endAngle = 0;

    console.log('End Angle', endAngle)
    // Defines Center Point //
    this.centX = this.beginX + this.radX;
    this.centY = this.beginY;

    // for percentage of distance traveled //
    let step = 0.01;
    let pct = 0.0;


    // storing draw path //
    this.history = [];

    this.animate = function() {
        this.moveX = this.centX + cos(angle) * this.radX;
        this.moveY = this.centY + sin(angle) * this.radY;
    }

    this.show = function(){
        noStroke();
        fill("red");
        rect(this.moveX,this.moveY,10,10);

        // Center on preivious end point + radius(X or Y)//
       
            // Defines ending point of arc //
            // angle + is clockwise / - is counter //

            var v = createVector(this.moveX, this.moveY)
            this.history.push(v);

            if (angle < endAngle) {
               angle = angle + 1; 
            } else if (angle > endAngle) {
                angle = 0;
                
            }
    
        // Drawing History //
        // Memory Leak Here //
        for (var i = 1; i < this.history.length; i++) {
            var position = this.history[i];
            fill("red");
            ellipse(position.x, position.y, 10, 10)
        }
        transferX = this.moveX;
        transferY = this.moveY;

        // stroke('orange');
        // line(this.centX,this.centY, this.moveX, this.moveY);
    
        // draw from top //
        // rect(0,-40,10,10);
        
    }
}