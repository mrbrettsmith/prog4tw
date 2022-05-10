
// THIS WORKS & RECORDS HISTORY BUT THE SQUARE NEEDS TO ROTATE OR IT IS ALIASED //





function Branch(x,y) {
    rectMode(CENTER)
    angleMode(DEGREES);

    this.beginX = x;
    this.beginY = y;

    this.radX = 50;
    this.radY = 50;


    // Defines tarting point for arc. Angle 0 is + on x axis //
    var angle = 0;
    var endAngle = 180;

    // Defines Center Point //
    this.centX = this.beginX - this.radX;
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

        this.moveX = this.centX + cos(angle) * this.radX;
        this.moveY = this.centY + sin(angle) * this.radY;
    
        // Center on preivious end point + radius(X or Y)//
        
        for (let spin = 0; spin < 2; spin++) {
            
            rect(this.moveX,this.moveY,10,10);
            // Defines ending point of arc //
            // angle + is clockwise / - is counter //
+6
            var v = createVector(this.moveX, this.moveY)
            this.history.push(v);

            if (angle <= endAngle) {
               angle = angle + 1; 
               console.log('Angle Traveled', angle);
            }
            
        }
        
        // Drawing History //
        for (var i = 1; i < this.history.length; i++) {

            var position = this.history[i];
            fill("pink");
            rect(position.x, position.y, 10, 10); 
        
        }


        // stroke('orange');
        // line(this.centX,this.centY, this.moveX, this.moveY);
    
        // draw from top //
        // rect(0,-40,10,10);
        
    }
}