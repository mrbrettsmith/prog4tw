let dots = [];

function setup(){
    createCanvas(1000, 1000)
    background('black')
    for (let i = 0; i < width; i++) {
        dots[i];
    }
    size = 15
    for (let r = size; r <= width - size; r += size * 2) {
        for (let d = size; d <= height - size; d += size * 2) {
            push();
            translate(r, d);
            noStroke();
            fill(170, 8, 207);
            this.x = r;
            this.y = d;
            this.rad = size;
            ellipse(this.x , this.y, this.rad );
            // Grow Function
            function mouseClicked() {
                for (let i = 0; i < i.length; i++) {
                    let hov = dist(mouseX, mouseY, this.x, this.y);
                        
                    if (hov < this.rad) {
                        console.log("THIS IS ", i);
                        rad = rad + random(1.5, 5);
                    }    
                }

            }
            
            
            pop();
        }
    }    
}

function draw() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].show;
    }
}



// function mouseClicked() {
//         let hov = dist(mouseX, mouseY, this.x, this.y);
        
//         }
//         for (let i = 0; i < dots.length; i++) {
//         dots[i] = dots[i];
//         if (hov < this.rad) {
//             console.log("THIS IS ", i);
//             rad = rad + random(1.5, 5);
//     }
// }



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


   
