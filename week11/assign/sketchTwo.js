
function setup(){
createCanvas(1000, 1000)
}

function draw() {
    background('black')
    size = 15
    for (let r = size; r <= width - size; r += size * 2) {
        for (let d = size; d <= height - size; d += size * 2) {
          push();
          rectMode(CENTER);
          translate(r, d);
          noStroke();
          fill(170, 8, 207);
          

          this.x = x;
          this.y = y;
            this.r = r;
              
            
            ellipse(this.x , this.y, this.r * 2);

          swell;
          pop();
        }
    }

}

function swell (mouseX, mouseY) {
        let hov = dist(mouseX, mouseY, this.x, this.y);
        if (hov < this.r) {
            console.log(d);
            r = r + random(1.5, 5);
        }    
    }


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


   
