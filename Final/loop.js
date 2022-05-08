function Loop(x,y) {
    rectMode(CENTER)
    
    // this works //
    angleMode(DEGREES);

    radX = 40;
    radY = 40;
    angle = 0;
    let c = cos(angle)

    this.show = function(){
        noStroke();
        fill('blue')


        var sunX = x + cos(angle) * radX;
        var sunY = y + sin(angle) * radY;
        var angle = map(mouseX, 0, width, 0, 2*PI);

        // Center on preivious end point //
        translate( x ,y);
        
        
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
                
        
                var sunX = x + cos(angle) * radX;
                var sunY = y + sin(angle) * radY;
                var angle = map(mouseX, 0, width, 0, 2*PI);
            }
        
            this.show = function() {
  
            }
        }
        
                // path tester //
                // stroke('orange');
                // line(this.beginX, this.beginY, this.endX, this.endY)
        
                // Visualising all spots in object history  