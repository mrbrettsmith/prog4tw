

function Sigil(x,y,terminator) {

    this.beginX = x;
    this.beginY = y;
    this.history = [];

    





    this.speed = 1;
    isDrawing = true;

    this.terminator = terminator;

    let v0 = createVector(x,y);
    let v1 = (x, y + 100 + terminator)
    rectMode(CENTER)
    

    this.animate = function() {
        

        turn = this.x + this.speed;
        
        // DO I NEED MORE VECTOR PERAMETORS - HEADING() // ???
        var v = createVector(this.x, this.y)
        this.history.push(v);

        // SIMPLE IF IS WORKING // ???
        // if (this.history.length < 150 +  this.terminator) {
        //     this.y = this.y + this.speed
        // }

        // DRAW AND TURN // I want shape to rotate (vector)???

        if (this.history.length < 100 +  this.terminator) {
            this.beginY = this.beginY + this.speed
        } else if (this.history.length > 100 +  this.terminator) {
            this.y = this.beginY + this.speed
            this.beginX = this.x + this.speed
        // } else if (this.history.length === 200 +  this.terminator) {
        //     this.y = this.b
        //     this.x = this.x 
        // }

        console.log(this.terminator)
    

    
    }

    this.show = function() {
        noStroke();
        fill("red");
        rect(this.x, this.y, 10, 10); 
        


        // Visualising all spots in object history  
       
        // begin shape in correct spot to make each [i] its own shape???
        beginShape();
        for (var i = 0; i < this.history.length; i++) {

            var position = this.history[i];

            // MAIN QUESTION //
            // I want to find the specific (x,y) of my line for this [i]

            // let endpoint = this.history[i] >= randoTerminus;



            // Define 'history' Object aesthetics:

            // fill(random(255), random(255), random(255));
            // rect(position.x,position.y, 5,5)

            fill("red");
            rect(position.x, position.y, 10, 10); 


        endShape();
        }
        
    }


}