let dots = [];

function setup(){
    createCanvas(1000, 1000)
    background('black')

    size = 15
    
    for (let r = size; r <= width - size; r += size * 2) {
        for (let d = size; d <= height - size; d += size * 2) {
            // laying out the new position change for every instance in the loop
            translate(r, d);
            
            // Defining objects in grid x,y,rad and creating function to be called
            const newDot = {
                x:r,
                y:d,
                rad:size,
                show: function(){
                    noStroke();
                    fill(170, 8, 207);
                    ellipse(this.x , this.y, this.rad );
                }
            }

            // No longer needed as universal
            // this.x = r;
            // this.y = d;
            // this.rad = size;

            // ellipse(newDot.x , newDot.y, newDot.rad );

            // Adding a newDot to each instance of the loop 
            dots.push(newDot);        
            pop();
        }
    }    
    console.log(dots)
}

function draw() {
    // activating the draw fungion for each item in the array? 
    for (let i = 0; i < dots.length; i++) {
        dots[i].show();
        
    }
}


function changePink() {
    fill(250, 90, 194);
}

// Make it return to base size 
function dotShrink() {
    dots.forEach( dot =>{
        if (rad < dot.rad) {
            dot.rad = dot.rad - .1;
            dot.show();
        }
    })
}


function mouseClicked() {
    // console.log("click")
    dots.forEach(dot=>{
        let hov = dist(mouseX, mouseY, dot.x, dot.y);
        // console.log(hov)
        if (hov < dot.rad) {
            console.log("THIS IS ", dot);
            dot.rad = dot.rad + random(1.5, 5);
            dot.show();
        }

        // else {
        //     dot.rad = 15;
        //     dot.show();
        // }
    })
}

// Try to change color on hover  
function mouseOver() {
    dots.forEach(dot=>{
        let hov = dist(mouseX, mouseY, dot.x, dot.y);
        if (hov < dot.rad) {
            console.log("hovering over ", dot);
            
            dot.show();
        }
        
        
    })
}






// class

    // size = 15
    // for (let r = size; r <= width - size; r += size * 2) {
    //     for (let d = size; d <= height - size; d += size * 2) {
    //         push();
    //         translate(r, d);
    //         noStroke();
    //         fill(170, 8, 207);
    //         this.x = r;
    //         this.y = d;
    //         this.rad = size;
    //         ellipse(this.x , this.y, this.rad );
    //         // Grow Function
    //         let hov = dist(mouseX, mouseY, this.x, this.y);
    //         if (hov < this.rad) {
    //             console.log(d);
    //             rad = rad + random(1.5, 5);
    //         }
    //     //   swell;
    //       pop();
    //     }
    // }

// }

// function swell (mouseX, mouseY) {
//         let hov = dist(mouseX, mouseY, this.x, this.y);
//         if (hov < this.r) {
//             console.log(d);
//             r = r + random(1.5, 5);
//         }    
//     }


// GRAVEYARD OF PREVIOUS ATTEMPTS
// let makeDot = [];
// let startX = 20;
// let startY = 20
// function setup(){
//     createCanvas(1000, 1000);
//     r = 5;
//     // nested loop for column?
//     for (let col = 0; col < 49; col++) {

//         for (let row = 0; row < 49; row++) {
//             let x = 10 + 20 * row;
//             makeDot[row] = new Dot (x, y, r);
//         }
//         let y = 10 + 20 * row;


//         // let x = 10 + 20 * d;
//         // let y = 10 + 20 * d;
//         // makeDot[d] = new Dot (x, y, r);
//         // makeDot[this.x, this.y, this.r].show();
//     };
// }
    


// function swell (mouseX, mouseY) {
//     let hov = dist(mouseX, mouseY, this.x, this.y);
//     if (hov < this.r) {
//         console.log(d);
//         r = r + random(1.5, 5);
//     }    
// }

// function draw(){
//     for (let d = 0; d < makeDot.length; d++) {
//         makeDot[d].show();
//     }

//     // for (let d = 0; d < 49; d++) {
//     //     makeDot[this.x, this.y, this.r].show();
//     //     // for (let y = 0; y < 49; y++) {
//     //     //     makeDot[this.x, this.y, this.r].show();
//     //     // }
//     // }
// }

// // function mouseOver() {
// function mousePressed() {
//     makeDot.swell();
//         // let hov = dist(mouseX, mouseY, this.x, this.y);
//         // if (hov < this.r) {
//         //      r = r + random(1.5, 5);}
//     }

    

// class Dot {
//     constructor(x,y,r){
//         this.x = x;
//         this.y = y;
//         this.r = r;
//     }
//     show() {
//         ellipse(this.x , this.y, this.r * 2);
//     }

//     swell (mouseX, mouseY) {
//         let hov = dist(mouseX, mouseY, this.x, this.y);
//         if (hov < this.r) {
//             console.log(d);
//             r = r + random(1.5, 5);
//         }    
//     }
        
// }
    // function swell() {
    //     diamater = diamater + random(1.5, 5);
    //     time(30);
    // }


   
