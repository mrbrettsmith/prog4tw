function Sigil(x,y,terminator) {

    // defining path elements - can be vector? //
    this.beginX = x;
    this.beginY = y;

    this.endX = x;
    this.endY = y+ 150 + terminator;

    let distX;
    let distY;

    // for percentage of distance traveled //
    let step = 0.01;
    let pct = 0.0;


    this.history = [];

    this.speed = 1;
    isDrawing = true;

    this.terminator = terminator;

    // let v0 = createVector(x,y);
    // let v1 = (x, y + 100 + terminator)
    rectMode(CENTER)
    

    this.animate = function() {
        

        this.distX = this.endX - this.beginX;
        this.distY = this.endY - this.beginY;

        // turn = this.x + this.speed;

        // DO I NEED MORE VECTOR PERAMETORS - HEADING() // ???
        // var v = createVector(this.x, this.y)
        // this.history.push(v);

        console.log(this.terminator)
    
    }

    this.show = function() {
        noStroke();
 
        
        pct += step;
        if (pct < 1.0) {
            x = this.beginX + pct * this.distX;
            y = this.beginY + pct * this.distY;
        }
        fill("red");
        rect(x, y, 10, 10); 


        
        // Visualising all spots in object history  
       
        // begin shape in correct spot to make each [i] its own shape???
        // beginShape();
        // for (var i = 0; i < this.history.length; i++) {

        //     var position = this.history[i];

        //     // MAIN QUESTION //
        //     // I want to find the specific (x,y) of my line for this [i]

        //     // let endpoint = this.history[i] >= randoTerminus;



        //     // Define 'history' Object aesthetics:

        //     // fill(random(255), random(255), random(255));
        //     // rect(position.x,position.y, 5,5)

        //     fill("red");
        //     rect(position.x, position.y, 10, 10); 


        // endShape();
        // }
        
    }


}



// OLD working CODE //

// function Sigil(x,y,terminator) {

//     this.x = x;
//     this.y = y;
//     this.history = [];
//     this.speed = 1;
//     isDrawing = true;

//     this.terminator = terminator;

//     rectMode(CENTER)
    

//     this.animate = function() {
        

//         turn = this.x + this.speed;
        
//         // DO I NEED MORE VECTOR PERAMETORS - HEADING() // ???
//         var v = createVector(this.x, this.y)
//         this.history.push(v);

//         // SIMPLE IF IS WORKING // ???
//         // if (this.history.length < 150 +  this.terminator) {
//         //     this.y = this.y + this.speed
//         // }

//         // DRAW AND TURN // I want shape to rotate (vector)???

//         if (this.history.length < 100 +  this.terminator) {
//             this.y = this.y + this.speed
//         } else if (this.history.length > 100 +  this.terminator) {
//             this.y = this.y + this.speed
//             this.x = this.x + this.speed
//         } else if (this.history.length === 200 +  this.terminator) {
//             this.y = this.y
//             this.x = this.x 
//         }


//         // BOOLIAN ISNT WORKING // ???
//         // if (this.history.length <= this.terminator) {
//         //     isDrawing = true;
//         // } else if (this.history.length >= this.terminator){
//         //     isDrawing = false;
//         // }

//         // if(isDrawing = true) {
//         //     this.y = this.y + this.speed
//         // }
//         // if(isDrawing = false) {
//         //     this.y = this.y
//         // }

//         console.log(this.terminator)
//         console.toString(this.history[v])

//         // // fade function 
//         // if (this.history.length > 300) {
//         //     this.history.splice(0,1);
//         // }

//     }

//     this.show = function() {
//         noStroke();
//         fill("red");
//         rect(this.x, this.y, 10, 10); 
        


//         // Visualising all spots in object history  
       
//         // begin shape in correct spot to make each [i] its own shape???
//         beginShape();
//         for (var i = 0; i < this.history.length; i++) {

//             var position = this.history[i];

//             // MAIN QUESTION //
//             // I want to find the specific (x,y) of my line for this [i]

//             // let endpoint = this.history[i] >= randoTerminus;



//             // Define 'history' Object aesthetics:

//             // fill(random(255), random(255), random(255));
//             // rect(position.x,position.y, 5,5)

//             fill("red");
//             rect(position.x, position.y, 10, 10); 


//         endShape();
//         }
        
//     }


// }